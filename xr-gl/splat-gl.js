// Halloumi-GL — self-contained WebGL2 splat viewer + WebXR immersive-vr entry.
//
// Uses XRWebGLLayer (not XRGPUBinding), so it works on Meta Quest Browser
// without any chrome://flags flip.
//
// Coord conventions:
//   • Camera-space: right-handed, camera looks down -z (tz < 0 for front).
//   • Depth for sort: `-tz` (larger positive = further).
//   • Splat "center" is stored in NDC in the instance buffer; deltas are in
//     viewport-pixel space, converted to NDC by the vertex shader via a
//     u_viewport_px uniform. This keeps sizes independent of the projection
//     matrix so the same instance buffer works for XR eyes with different
//     asymmetric FOVs.
//   • y-up throughout — matches WebGL native, avoids the sign gymnastics that
//     bit the earlier flat-only version.

// -------------- HUD / error surface --------------
const hud = document.getElementById('hud');
const errEl = document.getElementById('err');
const setHud  = (t) => { hud.textContent = t; };
const showErr = (t) => {
  errEl.style.display = 'block';
  errEl.textContent += (errEl.textContent ? '\n' : '') + t;
  console.error(t);
};

// -------------- URL params --------------
const params = new URLSearchParams(location.search);
const bundleURL = params.get('bundle') || '../test-data/brain_tiny.ply';

// -------------- Tiny linear-algebra helpers --------------
function mat4Identity() {
  const m = new Float32Array(16);
  m[0] = m[5] = m[10] = m[15] = 1;
  return m;
}
// C = A * B (column-major). If out is omitted, allocates.
function mat4Multiply(a, b, out) {
  out ||= new Float32Array(16);
  for (let c = 0; c < 4; ++c) for (let r = 0; r < 4; ++r) {
    let s = 0;
    for (let k = 0; k < 4; ++k) s += a[k*4 + r] * b[c*4 + k];
    out[c*4 + r] = s;
  }
  return out;
}
function mat4Perspective(fovyRad, aspect, near, far) {
  const f = 1 / Math.tan(fovyRad / 2);
  const nf = 1 / (near - far);
  const m = new Float32Array(16);
  m[0] = f / aspect;
  m[5] = f;
  m[10] = (far + near) * nf;
  m[11] = -1;
  m[14] = 2 * far * near * nf;
  return m;
}
// Orbit-style view matrix (right-handed, camera looks down -z).
function lookAt(eye, center, up) {
  const [ex, ey, ez] = eye;
  const [cx, cy, cz] = center;
  const [ux, uy, uz] = up;
  let zx = ex - cx, zy = ey - cy, zz = ez - cz;
  let n = Math.hypot(zx, zy, zz);
  zx /= n; zy /= n; zz /= n;
  let xx = uy * zz - uz * zy;
  let xy = uz * zx - ux * zz;
  let xz = ux * zy - uy * zx;
  n = Math.hypot(xx, xy, xz);
  xx /= n; xy /= n; xz /= n;
  const yx = zy * xz - zz * xy;
  const yy = zz * xx - zx * xz;
  const yz = zx * xy - zy * xx;
  const m = new Float32Array(16);
  m[0] = xx; m[1] = yx; m[2] = zx; m[3] = 0;
  m[4] = xy; m[5] = yy; m[6] = zy; m[7] = 0;
  m[8] = xz; m[9] = yz; m[10] = zz; m[11] = 0;
  m[12] = -(xx * ex + xy * ey + xz * ez);
  m[13] = -(yx * ex + yy * ey + yz * ez);
  m[14] = -(zx * ex + zy * ey + zz * ez);
  m[15] = 1;
  return m;
}

// -------------- PLY parser --------------
async function loadPLY(url) {
  setHud(`fetching ${url} …`);
  const t0 = performance.now();
  const buf = await fetch(url).then(r => {
    if (!r.ok) throw new Error(`fetch ${url}: HTTP ${r.status}`);
    return r.arrayBuffer();
  });
  setHud(`fetched (${(buf.byteLength/1e6).toFixed(1)} MB), parsing…`);

  const bytes = new Uint8Array(buf);
  let headerEnd = -1;
  for (let i = 0; i < bytes.length - 11; ++i) {
    if (bytes[i]===101 && bytes[i+1]===110 && bytes[i+2]===100 && bytes[i+3]===95 &&
        bytes[i+4]===104 && bytes[i+5]===101 && bytes[i+6]===97  && bytes[i+7]===100 &&
        bytes[i+8]===101 && bytes[i+9]===114 && bytes[i+10]===10) {
      headerEnd = i + 11;
      break;
    }
  }
  if (headerEnd < 0) throw new Error('PLY: end_header not found');
  const headerText = new TextDecoder().decode(bytes.subarray(0, headerEnd));

  const lines = headerText.split('\n');
  if (!lines[0].startsWith('ply')) throw new Error('PLY: bad magic');
  if (!lines.some(l => l.startsWith('format binary_little_endian'))) throw new Error('PLY: only binary_le supported');

  let count = -1;
  const props = [];
  for (const l of lines) {
    if (l.startsWith('element vertex ')) count = parseInt(l.split(' ')[2], 10);
    else if (l.startsWith('property float ')) props.push({ name: l.slice(15).trim(), size: 4 });
  }
  if (count < 0) throw new Error('PLY: no element vertex');
  const stride = props.reduce((s, p) => s + p.size, 0);

  const nameToIdx = new Map();
  let off = 0;
  for (const p of props) { p.offset = off; off += p.size; nameToIdx.set(p.name, p); }
  const need = ['x', 'y', 'z', 'f_dc_0', 'f_dc_1', 'f_dc_2', 'opacity', 'scale_0', 'scale_1', 'rot_0', 'rot_1', 'rot_2', 'rot_3'];
  for (const n of need) if (!nameToIdx.has(n)) throw new Error(`PLY missing property: ${n}`);

  const dv = new DataView(buf, headerEnd);
  const positions = new Float32Array(count * 3);
  const dc        = new Float32Array(count * 3);
  const opacRaw   = new Float32Array(count);
  const scaleRaw  = new Float32Array(count * 2);
  const rotRaw    = new Float32Array(count * 4);

  const oX  = nameToIdx.get('x').offset;
  const oY  = nameToIdx.get('y').offset;
  const oZ  = nameToIdx.get('z').offset;
  const oD0 = nameToIdx.get('f_dc_0').offset;
  const oD1 = nameToIdx.get('f_dc_1').offset;
  const oD2 = nameToIdx.get('f_dc_2').offset;
  const oOp = nameToIdx.get('opacity').offset;
  const oS0 = nameToIdx.get('scale_0').offset;
  const oS1 = nameToIdx.get('scale_1').offset;
  const oR0 = nameToIdx.get('rot_0').offset;
  const oR1 = nameToIdx.get('rot_1').offset;
  const oR2 = nameToIdx.get('rot_2').offset;
  const oR3 = nameToIdx.get('rot_3').offset;

  for (let i = 0; i < count; ++i) {
    const base = i * stride;
    positions[i*3+0] = dv.getFloat32(base + oX,  true);
    positions[i*3+1] = dv.getFloat32(base + oY,  true);
    positions[i*3+2] = dv.getFloat32(base + oZ,  true);
    dc[i*3+0]        = dv.getFloat32(base + oD0, true);
    dc[i*3+1]        = dv.getFloat32(base + oD1, true);
    dc[i*3+2]        = dv.getFloat32(base + oD2, true);
    opacRaw[i]       = dv.getFloat32(base + oOp, true);
    scaleRaw[i*2+0]  = dv.getFloat32(base + oS0, true);
    scaleRaw[i*2+1]  = dv.getFloat32(base + oS1, true);
    rotRaw[i*4+0]    = dv.getFloat32(base + oR0, true);
    rotRaw[i*4+1]    = dv.getFloat32(base + oR1, true);
    rotRaw[i*4+2]    = dv.getFloat32(base + oR2, true);
    rotRaw[i*4+3]    = dv.getFloat32(base + oR3, true);
  }

  let minX =  Infinity, minY =  Infinity, minZ =  Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < count; ++i) {
    const x = positions[i*3+0], y = positions[i*3+1], z = positions[i*3+2];
    if (x < minX) minX = x; else if (x > maxX) maxX = x;
    if (y < minY) minY = y; else if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; else if (z > maxZ) maxZ = z;
  }
  const t1 = performance.now();
  setHud(`PLY parsed: ${count} Gauss · ${((t1-t0)/1000).toFixed(1)} s`);
  return {
    count, positions, dc, opacRaw, scaleRaw, rotRaw,
    aabb: { min: [minX, minY, minZ], max: [maxX, maxY, maxZ] },
  };
}

// -------------- Orbit camera (flat viewer only) --------------
class OrbitCam {
  constructor(canvas, pivot, dist) {
    this.canvas = canvas;
    this.pivot  = [...pivot];
    this.dist   = dist;
    this.yaw    = 0;
    this.pitch  = -0.2;
    this._bindPointer();
    this._bindWheel();
    this._bindTouch();
  }
  eye() {
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const cy = Math.cos(this.yaw),   sy = Math.sin(this.yaw);
    return [
      this.pivot[0] + this.dist * cp * sy,
      this.pivot[1] + this.dist * sp,
      this.pivot[2] + this.dist * cp * cy,
    ];
  }
  viewMatrix() { return lookAt(this.eye(), this.pivot, [0, 1, 0]); }
  _bindPointer() {
    let dragging = false, panning = false, px = 0, py = 0;
    this.canvas.addEventListener('pointerdown', e => {
      dragging = e.button === 0; panning = e.button === 2; px = e.clientX; py = e.clientY;
      this.canvas.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    this.canvas.addEventListener('pointermove', e => {
      if (!(dragging || panning)) return;
      const dx = e.clientX - px, dy = e.clientY - py; px = e.clientX; py = e.clientY;
      if (dragging) {
        this.yaw   -= dx * 0.006;
        this.pitch = Math.max(-1.55, Math.min(1.55, this.pitch - dy * 0.006));
      } else if (panning) {
        const s = this.dist * 0.0016;
        const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
        const cy = Math.cos(this.yaw),   sy = Math.sin(this.yaw);
        this.pivot[0] += -dx * s * cy - dy * s * (-sp * sy);
        this.pivot[1] += dy * s * cp;
        this.pivot[2] +=  dx * s * sy - dy * s * (-sp * cy);
      }
    });
    this.canvas.addEventListener('pointerup',    () => { dragging = panning = false; });
    this.canvas.addEventListener('pointercancel',() => { dragging = panning = false; });
    this.canvas.addEventListener('contextmenu', e => e.preventDefault());
  }
  _bindWheel() {
    this.canvas.addEventListener('wheel', e => {
      this.dist *= Math.pow(1.0015, e.deltaY);
      this.dist  = Math.max(0.01, Math.min(1e4, this.dist));
      e.preventDefault();
    }, { passive: false });
  }
  _bindTouch() {
    let lastPinch = null;
    this.canvas.addEventListener('touchmove', e => {
      if (e.touches.length !== 2) { lastPinch = null; return; }
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const d  = Math.hypot(dx, dy);
      if (lastPinch != null) this.dist *= (lastPinch / d);
      lastPinch = d;
      e.preventDefault();
    }, { passive: false });
    this.canvas.addEventListener('touchend', () => { lastPinch = null; });
  }
}

// -------------- WebGL2 renderer --------------
// Vertex takes per-instance centre in NDC + conic + colour + pixel extent.
// u_viewport_px converts pixel deltas to NDC. This means the same instance
// buffer is portable across viewports (XR eyes) without re-scaling.
const VERT_SRC = `#version 300 es
layout(location = 0) in vec2  a_corner;      // static: quad corner in [-1..1]
layout(location = 1) in vec2  a_center_ndc;  // per-instance: splat centre in NDC
layout(location = 2) in vec3  a_conic;       // per-instance: inverse-cov (a, b, c) in pixel⁻²
layout(location = 3) in vec4  a_color;       // per-instance: premultiply source (rgb, alpha)
layout(location = 4) in float a_extent_px;   // per-instance: bounding radius in viewport pixels

uniform vec2 u_viewport_px;

out vec2 v_delta_px;
out vec3 v_conic;
out vec4 v_color;

void main() {
    vec2 delta_px  = a_corner * a_extent_px;
    vec2 delta_ndc = (delta_px / u_viewport_px) * 2.0;
    gl_Position    = vec4(a_center_ndc + delta_ndc, 0.0, 1.0);
    v_delta_px = delta_px;
    v_conic    = a_conic;
    v_color    = a_color;
}`;

const FRAG_SRC = `#version 300 es
precision highp float;
in vec2 v_delta_px;
in vec3 v_conic;
in vec4 v_color;
out vec4 out_color;

void main() {
    float d = 0.5 * ( v_conic.x * v_delta_px.x * v_delta_px.x
                    + 2.0 * v_conic.y * v_delta_px.x * v_delta_px.y
                    + v_conic.z * v_delta_px.y * v_delta_px.y );
    if (d < 0.0 || d > 8.0) discard;
    float alpha = v_color.a * exp(-d);
    if (alpha < 1.0/255.0) discard;
    out_color = vec4(v_color.rgb * alpha, alpha);
}`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(s);
    throw new Error(`shader compile: ${info}`);
  }
  return s;
}
function link(gl, vs, fs) {
  const p = gl.createProgram();
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(p);
    throw new Error(`program link: ${info}`);
  }
  return p;
}

class SplatRenderer {
  constructor(gl, gauss) {
    this.gl = gl;
    this.gauss = gauss;
    this.N = gauss.count;

    const vs = compile(gl, gl.VERTEX_SHADER,   VERT_SRC);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
    this.prog = link(gl, vs, fs);
    this.uViewportPx = gl.getUniformLocation(this.prog, 'u_viewport_px');

    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);

    const quadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    // Instance layout (10 floats / 40 bytes):
    //   [0..1]  center_ndc (x, y)
    //   [2..4]  conic (a, b, c)
    //   [5..8]  color (r, g, b, a)
    //   [9]     extent_px
    this.instanceStride = 10;
    this.instanceBytes  = this.N * this.instanceStride * 4;
    this.instanceData   = new Float32Array(this.N * this.instanceStride);
    this.instanceVBO    = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
    gl.bufferData(gl.ARRAY_BUFFER, this.instanceBytes, gl.DYNAMIC_DRAW);
    const s = this.instanceStride * 4;
    gl.enableVertexAttribArray(1); gl.vertexAttribPointer(1, 2, gl.FLOAT, false, s,  0); gl.vertexAttribDivisor(1, 1);
    gl.enableVertexAttribArray(2); gl.vertexAttribPointer(2, 3, gl.FLOAT, false, s,  8); gl.vertexAttribDivisor(2, 1);
    gl.enableVertexAttribArray(3); gl.vertexAttribPointer(3, 4, gl.FLOAT, false, s, 20); gl.vertexAttribDivisor(3, 1);
    gl.enableVertexAttribArray(4); gl.vertexAttribPointer(4, 1, gl.FLOAT, false, s, 36); gl.vertexAttribDivisor(4, 1);

    gl.bindVertexArray(null);

    this.depths      = new Float32Array(this.N);
    this.sortScratch = new Array(this.N);
    for (let i = 0; i < this.N; ++i) this.sortScratch[i] = i;
    this.sortedInstance = new Float32Array(this.instanceData.length);
  }

  // Per-frame render into (framebuffer, viewport) using view + projection.
  //   viewMatrix:  Float32Array(16), column-major, world → eye
  //   projMatrix:  Float32Array(16), column-major, standard perspective
  //   viewport:    {x, y, width, height} in framebuffer pixels
  //   framebuffer: WebGLFramebuffer or null (default backbuffer)
  //   clear:       whether to clear the framebuffer viewport rectangle first
  render({ viewMatrix, projMatrix, viewport, framebuffer, clear = true }) {
    const { gl, N, gauss, instanceData, instanceStride, depths, sortScratch, sortedInstance } = this;
    const vpW = viewport.width, vpH = viewport.height;

    // Effective focal lengths in viewport pixels — for the Cov2D Jacobian.
    // Derived from the projection matrix so asymmetric-FOV XR eyes work too.
    const fx = 0.5 * projMatrix[0] * vpW;
    const fy = 0.5 * projMatrix[5] * vpH;
    const P0 = projMatrix[0], P5 = projMatrix[5], P8 = projMatrix[8], P9 = projMatrix[9];

    const t0 = performance.now();

    let visible = 0;
    for (let i = 0; i < N; ++i) {
      const x = gauss.positions[i*3+0], y = gauss.positions[i*3+1], z = gauss.positions[i*3+2];
      // world → eye
      const tx = viewMatrix[0]*x + viewMatrix[4]*y + viewMatrix[8] *z + viewMatrix[12];
      const ty = viewMatrix[1]*x + viewMatrix[5]*y + viewMatrix[9] *z + viewMatrix[13];
      const tz = viewMatrix[2]*x + viewMatrix[6]*y + viewMatrix[10]*z + viewMatrix[14];
      const depth = -tz;
      depths[i] = depth;
      if (depth <= 0.05) {
        instanceData[i*instanceStride + 9] = 0;    // extent 0 → fragment discards
        continue;
      }
      const invTz  = 1 / tz;
      const invTz2 = invTz * invTz;

      // Centre in NDC.
      const ndcX = -P0 * tx * invTz - P8;
      const ndcY = -P5 * ty * invTz - P9;
      if (ndcX < -1.4 || ndcX > 1.4 || ndcY < -1.4 || ndcY > 1.4) {
        instanceData[i*instanceStride + 9] = 0;
        continue;
      }

      // 3D covariance from activated scale + normalised quat.
      const s0 = Math.exp(gauss.scaleRaw[i*2+0]);
      const s1 = Math.exp(gauss.scaleRaw[i*2+1]);
      const s2 = Math.min(s0, s1) * 0.05;    // thin disc for 2DGS

      let qr = gauss.rotRaw[i*4+0], qx = gauss.rotRaw[i*4+1], qy = gauss.rotRaw[i*4+2], qz = gauss.rotRaw[i*4+3];
      const qn = 1 / Math.hypot(qr, qx, qy, qz);
      qr *= qn; qx *= qn; qy *= qn; qz *= qn;
      const R00 = 1 - 2*(qy*qy + qz*qz);
      const R01 = 2*(qx*qy - qr*qz);
      const R02 = 2*(qx*qz + qr*qy);
      const R10 = 2*(qx*qy + qr*qz);
      const R11 = 1 - 2*(qx*qx + qz*qz);
      const R12 = 2*(qy*qz - qr*qx);
      const R20 = 2*(qx*qz - qr*qy);
      const R21 = 2*(qy*qz + qr*qx);
      const R22 = 1 - 2*(qx*qx + qy*qy);

      // Cov3D = M M^T where M = R * diag(s0, s1, s2)
      const M00 = R00 * s0, M01 = R01 * s1, M02 = R02 * s2;
      const M10 = R10 * s0, M11 = R11 * s1, M12 = R12 * s2;
      const M20 = R20 * s0, M21 = R21 * s1, M22 = R22 * s2;
      const c00 = M00*M00 + M01*M01 + M02*M02;
      const c01 = M00*M10 + M01*M11 + M02*M12;
      const c02 = M00*M20 + M01*M21 + M02*M22;
      const c11 = M10*M10 + M11*M11 + M12*M12;
      const c12 = M10*M20 + M11*M21 + M12*M22;
      const c22 = M20*M20 + M21*M21 + M22*M22;

      // View-space covariance = W Cov3D W^T, W = viewMatrix's 3×3 rotation.
      const W00 = viewMatrix[0], W01 = viewMatrix[4], W02 = viewMatrix[8];
      const W10 = viewMatrix[1], W11 = viewMatrix[5], W12 = viewMatrix[9];
      const W20 = viewMatrix[2], W21 = viewMatrix[6], W22 = viewMatrix[10];
      const T00 = W00*c00 + W01*c01 + W02*c02;
      const T01 = W00*c01 + W01*c11 + W02*c12;
      const T02 = W00*c02 + W01*c12 + W02*c22;
      const T10 = W10*c00 + W11*c01 + W12*c02;
      const T11 = W10*c01 + W11*c11 + W12*c12;
      const T12 = W10*c02 + W11*c12 + W12*c22;
      const T20 = W20*c00 + W21*c01 + W22*c02;
      const T21 = W20*c01 + W21*c11 + W22*c12;
      const T22 = W20*c02 + W21*c12 + W22*c22;
      const v00 = T00*W00 + T01*W01 + T02*W02;
      const v01 = T00*W10 + T01*W11 + T02*W12;
      const v02 = T00*W20 + T01*W21 + T02*W22;
      const v11 = T10*W10 + T11*W11 + T12*W12;
      const v12 = T10*W20 + T11*W21 + T12*W22;
      const v22 = T20*W20 + T21*W21 + T22*W22;

      // Jacobian of pixel-space projection (in y-up viewport pixels).
      //   ∂sx/∂tx = -fx/tz     ∂sx/∂tz =  fx·tx/tz²
      //   ∂sy/∂ty = -fy/tz     ∂sy/∂tz =  fy·ty/tz²
      const J00 = -fx * invTz;
      const J02 =  fx * tx * invTz2;
      const J11 = -fy * invTz;
      const J12 =  fy * ty * invTz2;
      // Cov2D = J · Cov_view · J^T (2×2, symmetric). J has the zero-column
      // layout J[0] = (J00, 0, J02), J[1] = (0, J11, J12).
      let cov2d_a = J00*(J00*v00 + J02*v02) + J02*(J00*v02 + J02*v22);
      let cov2d_b = J00*(J11*v01 + J12*v02) + J02*(J11*v12 + J12*v22);
      let cov2d_c = J11*(J11*v11 + J12*v12) + J12*(J11*v12 + J12*v22);
      cov2d_a += 0.3;
      cov2d_c += 0.3;

      const det = cov2d_a * cov2d_c - cov2d_b * cov2d_b;
      if (!(det > 1e-6)) { instanceData[i*instanceStride + 9] = 0; continue; }
      const invDet = 1 / det;
      const conicA =  cov2d_c * invDet;
      const conicB = -cov2d_b * invDet;
      const conicC =  cov2d_a * invDet;

      const tr    = cov2d_a + cov2d_c;
      const disc  = Math.sqrt(Math.max(0, tr * tr * 0.25 - det));
      const lambdaMax = 0.5 * tr + disc;
      const extent    = Math.min(256, Math.ceil(3 * Math.sqrt(Math.max(0, lambdaMax))));

      // SH DC → RGB (3DGS activation).
      const r = Math.max(0, Math.min(1, 0.5 + 0.28209479 * gauss.dc[i*3+0]));
      const g = Math.max(0, Math.min(1, 0.5 + 0.28209479 * gauss.dc[i*3+1]));
      const b = Math.max(0, Math.min(1, 0.5 + 0.28209479 * gauss.dc[i*3+2]));
      const a = 1 / (1 + Math.exp(-gauss.opacRaw[i]));

      const off = i * instanceStride;
      instanceData[off + 0] = ndcX;
      instanceData[off + 1] = ndcY;
      instanceData[off + 2] = conicA;
      instanceData[off + 3] = conicB;
      instanceData[off + 4] = conicC;
      instanceData[off + 5] = r;
      instanceData[off + 6] = g;
      instanceData[off + 7] = b;
      instanceData[off + 8] = a;
      instanceData[off + 9] = extent;
      ++visible;
    }
    const tProj = performance.now();

    // Back-to-front sort: larger depth first.
    for (let i = 0; i < N; ++i) sortScratch[i] = i;
    sortScratch.sort((a, b) => depths[b] - depths[a]);
    const tSort = performance.now();

    // Scatter into a sorted, contiguous buffer for a single glBufferSubData.
    const dst = sortedInstance;
    for (let k = 0; k < N; ++k) {
      const srcOff = sortScratch[k] * instanceStride;
      const dstOff = k * instanceStride;
      for (let j = 0; j < instanceStride; ++j) dst[dstOff + j] = instanceData[srcOff + j];
    }
    const tPack = performance.now();

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer || null);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, dst);
    gl.viewport(viewport.x | 0, viewport.y | 0, vpW | 0, vpH | 0);
    if (clear) {
      // Enable scissor so we only clear our own viewport rect (matters for XR
      // where both eyes share the framebuffer).
      gl.enable(gl.SCISSOR_TEST);
      gl.scissor(viewport.x | 0, viewport.y | 0, vpW | 0, vpH | 0);
      gl.clearColor(0.02, 0.02, 0.03, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.SCISSOR_TEST);
    }
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    gl.useProgram(this.prog);
    gl.uniform2f(this.uViewportPx, vpW, vpH);
    gl.bindVertexArray(this.vao);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, N);
    gl.bindVertexArray(null);
    const tDraw = performance.now();

    return {
      msProj: tProj - t0,
      msSort: tSort - tProj,
      msPack: tPack - tSort,
      msDraw: tDraw - tPack,
      msTotal: tDraw - t0,
      visible,
    };
  }
}

// -------------- WebXR presentation status pill --------------
function makePill() {
  const p = document.createElement('div');
  p.style.cssText =
    'position:fixed;top:8px;right:8px;padding:4px 10px;border-radius:12px;' +
    'font:11px ui-monospace,SFMono-Regular,Menlo,monospace;z-index:9997;';
  document.body.appendChild(p);
  return (bg, fg, txt) => { p.style.background = bg; p.style.color = fg; p.textContent = txt; };
}

// -------------- Main --------------
(async () => {
  try {
    const canvas = document.getElementById('c');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width  = Math.floor(canvas.clientWidth  * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // xrCompatible=true so the same context can bind XRWebGLLayer's framebuffer
    // without a later makeXRCompatible() round-trip.
    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, xrCompatible: true, powerPreference: 'high-performance' });
    if (!gl) { showErr('WebGL2 not available.'); return; }

    const gauss = await loadPLY(bundleURL);

    const cx = 0.5 * (gauss.aabb.min[0] + gauss.aabb.max[0]);
    const cy = 0.5 * (gauss.aabb.min[1] + gauss.aabb.max[1]);
    const cz = 0.5 * (gauss.aabb.min[2] + gauss.aabb.max[2]);
    const dx = gauss.aabb.max[0] - gauss.aabb.min[0];
    const dy = gauss.aabb.max[1] - gauss.aabb.min[1];
    const dz = gauss.aabb.max[2] - gauss.aabb.min[2];
    const diag = Math.hypot(dx, dy, dz);
    const cam = new OrbitCam(canvas, [cx, cy, cz], diag * 1.3);

    const renderer = new SplatRenderer(gl, gauss);
    const setPill  = makePill();

    // XR world placement: at entry, position the scene so its AABB centre
    // sits at (0, 1.4, -2.5) in the local reference space (eye height, ~2.5 m
    // in front of user), and uniformly scale so the diagonal is ~2 m.
    const targetPos    = [0, 1.4, -2.5];
    const targetDiag_m = 2.0;
    const sceneScale   = targetDiag_m / diag;
    const worldMatrix = mat4Identity();
    worldMatrix[0]  = sceneScale;
    worldMatrix[5]  = sceneScale;
    worldMatrix[10] = sceneScale;
    worldMatrix[12] = targetPos[0] - cx * sceneScale;
    worldMatrix[13] = targetPos[1] - cy * sceneScale;
    worldMatrix[14] = targetPos[2] - cz * sceneScale;

    // -------- XR entry --------
    let xrSession = null;
    let xrRefSpace = null;
    let xrLayer = null;
    let xrComposedView = new Float32Array(16);   // scratch: view.inverse.matrix · worldMatrix

    async function tryEnterXR() {
      if (xrSession) return;
      try {
        setPill('#204020', '#a0f0a0', '⏳ entering VR…');
        const session = await navigator.xr.requestSession('immersive-vr', {
          requiredFeatures: ['local'],
          optionalFeatures: ['local-floor'],
        });
        xrLayer = new XRWebGLLayer(session, gl);
        session.updateRenderState({ baseLayer: xrLayer });
        try {
          xrRefSpace = await session.requestReferenceSpace('local-floor');
        } catch {
          xrRefSpace = await session.requestReferenceSpace('local');
        }
        xrSession = session;
        session.addEventListener('end', () => {
          xrSession = null; xrRefSpace = null; xrLayer = null;
          setPill('#204830', '#a0f0a0', '✅ XR ready · tap to enter');
          armEnter();   // re-arm the one-shot pointerdown so re-entry works
        });
        session.requestAnimationFrame(xrOnFrame);
        setPill('#182030', '#a0c8ff', '🥽 in VR');
      } catch (e) {
        console.error('[XR]', e);
        setPill('#502020', '#ffb0b0', '❌ XR failed: ' + (e.message || e));
        showErr('XR enter failed: ' + (e.stack || e));
      }
    }

    function xrOnFrame(_t, frame) {
      if (!xrSession) return;
      xrSession.requestAnimationFrame(xrOnFrame);
      const pose = frame.getViewerPose(xrRefSpace);
      if (!pose) return;

      const fb  = xrLayer.framebuffer;
      // Clear once before per-eye render — scissor is per-viewport inside render().
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.viewport(0, 0, xrLayer.framebufferWidth, xrLayer.framebufferHeight);
      gl.disable(gl.SCISSOR_TEST);
      gl.clearColor(0.02, 0.02, 0.03, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (const view of pose.views) {
        const vp = xrLayer.getViewport(view);
        // viewMatrix (world→eye) = xrEyeMatrix · worldMatrix
        mat4Multiply(view.transform.inverse.matrix, worldMatrix, xrComposedView);
        renderer.render({
          viewMatrix: xrComposedView,
          projMatrix: view.projectionMatrix,
          viewport:   { x: vp.x, y: vp.y, width: vp.width, height: vp.height },
          framebuffer: fb,
          clear: false,
        });
      }
    }

    // Any pointerdown while NOT in XR triggers entry. Hoisted so the session
    // 'end' handler can re-arm on exit.
    function armEnter() {
      if (xrSession) return;
      document.addEventListener('pointerdown', () => {
        if (xrSession) return;
        tryEnterXR();
      }, { once: true });
    }

    // Advertise XR readiness + wire tap-to-enter.
    (async () => {
      if (!navigator.xr) {
        setPill('#502020', '#ffb0b0', '❌ WebXR API missing');
        return;
      }
      let supported = false;
      try { supported = await navigator.xr.isSessionSupported('immersive-vr'); } catch {}
      if (!supported) {
        setPill('#503820', '#ffdc80', '❌ immersive-vr not supported');
        return;
      }
      setPill('#204830', '#a0f0a0', '✅ XR ready · tap to enter');
      armEnter();
    })();

    // -------- Flat viewer loop --------
    const FOV_Y = 60 * Math.PI / 180;
    let frame = 0;
    let lastReport = performance.now();
    let sumStats = { msProj: 0, msSort: 0, msPack: 0, msDraw: 0, msTotal: 0, count: 0 };

    const loop = () => {
      if (xrSession) {
        // XR owns rendering — pause the flat loop.
        requestAnimationFrame(loop);
        return;
      }
      const W = canvas.width, H = canvas.height;
      const aspect = W / Math.max(1, H);
      const projMatrix = mat4Perspective(FOV_Y, aspect, 0.05, 200.0);
      const viewMatrix = cam.viewMatrix();

      const s = renderer.render({
        viewMatrix, projMatrix,
        viewport: { x: 0, y: 0, width: W, height: H },
        framebuffer: null,
        clear: true,
      });
      sumStats.msProj  += s.msProj;
      sumStats.msSort  += s.msSort;
      sumStats.msPack  += s.msPack;
      sumStats.msDraw  += s.msDraw;
      sumStats.msTotal += s.msTotal;
      sumStats.count   += 1;
      frame++;

      const now = performance.now();
      if (now - lastReport > 500) {
        const n = sumStats.count;
        setHud(
          `${gauss.count} Gauss · ${W}×${H} · ${(n * 1000 / (now - lastReport)).toFixed(0)} fps\n` +
          `proj ${(sumStats.msProj/n).toFixed(1)} · sort ${(sumStats.msSort/n).toFixed(1)} · ` +
          `pack ${(sumStats.msPack/n).toFixed(1)} · draw ${(sumStats.msDraw/n).toFixed(1)} · ` +
          `total ${(sumStats.msTotal/n).toFixed(1)} ms   [visible ${s.visible}]`
        );
        sumStats = { msProj: 0, msSort: 0, msPack: 0, msDraw: 0, msTotal: 0, count: 0 };
        lastReport = now;
      }
      requestAnimationFrame(loop);
    };
    loop();
  } catch (e) {
    showErr(`fatal: ${(e && e.stack) || e}`);
  }
})();
