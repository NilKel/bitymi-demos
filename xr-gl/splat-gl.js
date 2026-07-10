// Halloumi-GL — WebGL2 + WebXR splat viewer for `.bitymi` bundles and raw PLYs.
//
// Pipeline (mirrors the WebGPU compute-preprocess pattern):
//   1. Load time: upload per-Gauss static data (pos+opac, quat, scale, SV sites,
//      SV colours, SV taus, DC fallback) into RGBA32F data textures.
//   2. Per frame (per eye):
//      a. PREPROCESS PASS. Bind an off-screen FBO with 3 RGBA32F MRT attachments
//         sized (W × ceil(N/W)). Fragment shader runs once per Gauss (per pixel),
//         does the WHOLE per-Gauss job:
//            world → eye, 3D cov from quat+scale, view Jacobian → 2D cov,
//            conic + bounding extent, SV softmax → per-Gauss RGBA.
//         Writes prepared[gid] = (ndc.xy, extent, opac) / (conic.xyz, valid) /
//         (rgb, unused).
//      b. DEPTH + SORT on CPU. One dot product per Gauss for view-space z,
//         frustum cull marks culled Gauss with -Inf, sort indices back-to-front,
//         glBufferSubData the sorted u32 index buffer.
//      c. DRAW PASS. Vertex shader indexed by sorted gid does 3 tiny texelFetches
//         to read the prepared row and emits the quad; fragment shader does
//         Gauss falloff. Trivial.
//
// vs. the previous "one big vertex shader" that ran 4× per Gauss (once per quad
// corner). Preprocess runs the expensive per-Gauss work once and the vertex
// shader shrinks to a fetch + a couple of muls.
//
// Colour model = Spherical Voronoi (SV) — matches computeColorFromVoronoi in
// diff_surfel_bake_render_rvq/forward.cu.
//   dir       = normalize(gauss_world_pos − cam_world_pos)
//   logits[k] = −exp(sv_tau_raw[k]) · |site_k_normalised − dir|
//   w         = softmax(logits)
//   feat_c    = Σ w[k]·sv_col[k,c]
//   rgb_c     = clamp(feat_c + 0.5, 0, 1)
//
// Containers: raw `.ply` OR `.bitymi` (magic 'BITYMI01' + TOC + chunks[]).
// Inside a bundle we pick chunk kind CHUNK_PLY (0) or CHUNK_BPLY (5); atlas
// / cameras chunks are ignored for now.

// ---------------- HUD / error surface ----------------
const hud    = document.getElementById('hud');
const errEl  = document.getElementById('err');
const setHud = (t) => { hud.textContent = t; };
const showErr = (t) => {
  errEl.style.display = 'block';
  errEl.textContent += (errEl.textContent ? '\n' : '') + t;
  console.error(t);
};

// ---------------- URL params ----------------
const params    = new URLSearchParams(location.search);
const bundleURL = params.get('bundle') || '../test-data/brain_tiny.ply';

// ---------------- Math ----------------
function mat4Identity() { const m = new Float32Array(16); m[0]=m[5]=m[10]=m[15]=1; return m; }
function mat4Multiply(a, b, out) {
  out ||= new Float32Array(16);
  for (let c = 0; c < 4; ++c) for (let r = 0; r < 4; ++r) {
    let s = 0; for (let k = 0; k < 4; ++k) s += a[k*4+r] * b[c*4+k];
    out[c*4+r] = s;
  }
  return out;
}
function mat4Perspective(fovyRad, aspect, near, far) {
  const f  = 1 / Math.tan(fovyRad / 2);
  const nf = 1 / (near - far);
  const m  = new Float32Array(16);
  m[0]  = f / aspect;
  m[5]  = f;
  m[10] = (far + near) * nf;
  m[11] = -1;
  m[14] = 2 * far * near * nf;
  return m;
}
function lookAt(eye, center, up) {
  const [ex,ey,ez] = eye; const [cx,cy,cz] = center; const [ux,uy,uz] = up;
  let zx = ex-cx, zy = ey-cy, zz = ez-cz;
  let n = Math.hypot(zx,zy,zz); zx/=n; zy/=n; zz/=n;
  let xx = uy*zz - uz*zy, xy = uz*zx - ux*zz, xz = ux*zy - uy*zx;
  n = Math.hypot(xx,xy,xz); xx/=n; xy/=n; xz/=n;
  const yx = zy*xz - zz*xy, yy = zz*xx - zx*xz, yz = zx*xy - zy*xx;
  const m = new Float32Array(16);
  m[0]=xx; m[1]=yx; m[2]=zx;
  m[4]=xy; m[5]=yy; m[6]=zy;
  m[8]=xz; m[9]=yz; m[10]=zz;
  m[12] = -(xx*ex + xy*ey + xz*ez);
  m[13] = -(yx*ex + yy*ey + yz*ez);
  m[14] = -(zx*ex + zy*ey + zz*ez);
  m[15] = 1;
  return m;
}

// ---------------- Container decoders ----------------
const BITYMI_MAGIC = 'BITYMI01';
const CHUNK_PLY   = 0;
const CHUNK_BPLY  = 5;
const CHUNK_NAT2  = 3;
const CHUNK_NATL  = 4;

function isBitymi(buf) {
  if (buf.byteLength < 8) return false;
  return new TextDecoder().decode(new Uint8Array(buf, 0, 8)) === BITYMI_MAGIC;
}
function parseBitymi(buf) {
  const dv = new DataView(buf);
  const n  = dv.getUint32(8, true);
  const TOC_BASE = 12, ENTRY_SZ = 20;
  let ply = null, atlas = null;
  for (let i = 0; i < n; ++i) {
    const off  = TOC_BASE + i * ENTRY_SZ;
    const kind = dv.getUint32(off + 0, true);
    const dOff = Number(dv.getBigUint64(off + 4,  true));
    const dSz  = Number(dv.getBigUint64(off + 12, true));
    const slice = buf.slice(dOff, dOff + dSz);
    if      (kind === CHUNK_PLY || kind === CHUNK_BPLY) ply = { buf: slice, isBply: kind === CHUNK_BPLY };
    else if (kind === CHUNK_NAT2 || kind === CHUNK_NATL) atlas = slice;
  }
  if (!ply) throw new Error('bitymi: no PLY / BPLY chunk');
  return { ply, atlas };
}

function halfToFloat(h) {
  const s = (h & 0x8000) >> 15;
  const e = (h & 0x7C00) >> 10;
  const f =  h & 0x03FF;
  if (e === 0)    return (s ? -1 : 1) * Math.pow(2, -14) * (f / 1024);
  if (e === 0x1F) return f ? NaN : (s ? -Infinity : Infinity);
  return (s ? -1 : 1) * Math.pow(2, e - 15) * (1 + f / 1024);
}

function decodeBply(buf) {
  const dv = new DataView(buf);
  const magic = new TextDecoder('ascii').decode(new Uint8Array(buf, 0, 4));
  if (magic !== 'BPLY') throw new Error(`BPLY: bad magic '${magic}'`);
  const version = dv.getUint32(4, true);
  if (version !== 1) throw new Error(`BPLY: unsupported version ${version}`);
  const n         = dv.getUint32(8,  true);
  const ncols     = dv.getUint32(12, true);
  const apDefault = dv.getFloat32(16, true);
  const HEADER_FIXED = 36, COL_DESC = 36;

  const td = new TextDecoder('ascii');
  const columns = [];
  for (let c = 0; c < ncols; ++c) {
    const off = HEADER_FIXED + c * COL_DESC;
    const nameRaw = td.decode(new Uint8Array(buf, off, 16));
    const nameEnd = nameRaw.indexOf('\0');
    const name    = nameEnd >= 0 ? nameRaw.slice(0, nameEnd) : nameRaw;
    columns.push({
      name,
      dtype: dv.getUint8(off + 16),
      payloadOff: dv.getUint32(off + 20, true),
      size:       dv.getUint32(off + 24, true),
      mn: dv.getFloat32(off + 28, true),
      mx: dv.getFloat32(off + 32, true),
    });
  }
  const payloadStart = HEADER_FIXED + ncols * COL_DESC;

  const outColNames = columns.map(c => c.name).concat(['ap_level']);
  const ncolsOut    = outColNames.length;
  const headerText  = [
    'ply',
    'format binary_little_endian 1.0',
    `comment Decoded from BPLY v${version} (Halloumi-GL)`,
    `element vertex ${n}`,
    ...outColNames.map(name => `property float ${name}`),
    'end_header', '',
  ].join('\n');
  const headerBytes = new TextEncoder().encode(headerText);
  const bodyBytes   = n * ncolsOut * 4;
  const outBuf      = new ArrayBuffer(headerBytes.byteLength + bodyBytes);
  new Uint8Array(outBuf, 0, headerBytes.byteLength).set(headerBytes);
  const out = new Float32Array(n * ncolsOut);

  for (let c = 0; c < columns.length; ++c) {
    const col    = columns[c];
    const srcOff = payloadStart + col.payloadOff;
    if (col.dtype === 1) {
      if (col.size !== n * 2) throw new Error(`BPLY '${col.name}': fp16 size ${col.size} != ${n*2}`);
      const src = new Uint16Array(buf, srcOff, n);
      for (let i = 0; i < n; ++i) out[i*ncolsOut + c] = halfToFloat(src[i]);
    } else if (col.dtype === 2) {
      if (col.size !== n)     throw new Error(`BPLY '${col.name}': u8 size ${col.size} != ${n}`);
      const src = new Uint8Array(buf, srcOff, n);
      const inv255 = (col.mx - col.mn) / 255;
      const base   = col.mn;
      for (let i = 0; i < n; ++i) out[i*ncolsOut + c] = src[i] * inv255 + base;
    } else throw new Error(`BPLY '${col.name}': unknown dtype ${col.dtype}`);
  }
  const apIdx = ncolsOut - 1;
  for (let i = 0; i < n; ++i) out[i*ncolsOut + apIdx] = apDefault;
  new Uint8Array(outBuf, headerBytes.byteLength, bodyBytes).set(
    new Uint8Array(out.buffer, out.byteOffset, bodyBytes));
  return outBuf;
}

// ---------------- PLY parser (SV-aware) ----------------
async function loadScene(url) {
  setHud(`fetching ${url} …`);
  const t0 = performance.now();
  const raw = await fetch(url).then(r => {
    if (!r.ok) throw new Error(`fetch ${url}: HTTP ${r.status}`);
    return r.arrayBuffer();
  });
  setHud(`fetched (${(raw.byteLength/1e6).toFixed(1)} MB), decoding…`);
  let plyBuf = raw;
  let container = 'ply';
  if (isBitymi(raw)) {
    const { ply } = parseBitymi(raw);
    plyBuf    = ply.isBply ? decodeBply(ply.buf) : ply.buf;
    container = ply.isBply ? 'bitymi/bply' : 'bitymi/ply';
  }
  return parsePLY(plyBuf, container, t0);
}

function parsePLY(buf, container, tStart) {
  const bytes = new Uint8Array(buf);
  let headerEnd = -1;
  for (let i = 0; i < bytes.length - 11; ++i) {
    if (bytes[i]===101 && bytes[i+1]===110 && bytes[i+2]===100 && bytes[i+3]===95 &&
        bytes[i+4]===104 && bytes[i+5]===101 && bytes[i+6]===97  && bytes[i+7]===100 &&
        bytes[i+8]===101 && bytes[i+9]===114 && bytes[i+10]===10) { headerEnd = i + 11; break; }
  }
  if (headerEnd < 0) throw new Error('PLY: end_header not found');
  const headerText = new TextDecoder().decode(bytes.subarray(0, headerEnd));
  const lines = headerText.split('\n');
  if (!lines[0].startsWith('ply')) throw new Error('PLY: bad magic');
  if (!lines.some(l => l.startsWith('format binary_little_endian'))) throw new Error('PLY: only binary_le');

  let count = -1;
  const props = [];
  for (const l of lines) {
    if      (l.startsWith('element vertex ')) count = parseInt(l.split(' ')[2], 10);
    else if (l.startsWith('property float '))  props.push({ name: l.slice(15).trim() });
  }
  if (count < 0) throw new Error('PLY: no element vertex');

  const nameToOff = new Map();
  let off = 0;
  for (const p of props) { nameToOff.set(p.name, off); off += 4; }
  const stride = off;

  const need = ['x','y','z','opacity','scale_0','scale_1','rot_0','rot_1','rot_2','rot_3'];
  for (const n of need) if (!nameToOff.has(n)) throw new Error(`PLY missing property: ${n}`);

  const K = 7;
  const hasSV = nameToOff.has('sv_site_0') && nameToOff.has('sv_col_0') && nameToOff.has('sv_tau_0');
  const hasDC = nameToOff.has('f_dc_0');

  const dv        = new DataView(buf, headerEnd);
  const positions = new Float32Array(count * 3);
  const opacRaw   = new Float32Array(count);
  const scaleRaw  = new Float32Array(count * 2);
  const rotRaw    = new Float32Array(count * 4);
  const svSite    = new Float32Array(count * K * 3);
  const svCol     = new Float32Array(count * K * 3);
  const svTauRaw  = new Float32Array(count * K);
  const dcRaw     = new Float32Array(count * 3);

  const oX  = nameToOff.get('x'),        oY  = nameToOff.get('y'),        oZ  = nameToOff.get('z');
  const oOp = nameToOff.get('opacity');
  const oS0 = nameToOff.get('scale_0'),  oS1 = nameToOff.get('scale_1');
  const oR0 = nameToOff.get('rot_0'),    oR1 = nameToOff.get('rot_1');
  const oR2 = nameToOff.get('rot_2'),    oR3 = nameToOff.get('rot_3');
  const oDC0 = hasDC ? nameToOff.get('f_dc_0') : -1;
  const oDC1 = hasDC ? nameToOff.get('f_dc_1') : -1;
  const oDC2 = hasDC ? nameToOff.get('f_dc_2') : -1;

  let siteOffs = null, colOffs = null, tauOffs = null;
  if (hasSV) {
    siteOffs = new Int32Array(K * 3); colOffs = new Int32Array(K * 3); tauOffs = new Int32Array(K);
    for (let k = 0; k < K * 3; ++k) siteOffs[k] = nameToOff.get(`sv_site_${k}`);
    for (let k = 0; k < K * 3; ++k) colOffs[k]  = nameToOff.get(`sv_col_${k}`);
    for (let k = 0; k < K;     ++k) tauOffs[k]  = nameToOff.get(`sv_tau_${k}`);
  }

  for (let i = 0; i < count; ++i) {
    const base = i * stride;
    positions[i*3+0] = dv.getFloat32(base + oX,  true);
    positions[i*3+1] = dv.getFloat32(base + oY,  true);
    positions[i*3+2] = dv.getFloat32(base + oZ,  true);
    opacRaw[i]       = dv.getFloat32(base + oOp, true);
    scaleRaw[i*2+0]  = dv.getFloat32(base + oS0, true);
    scaleRaw[i*2+1]  = dv.getFloat32(base + oS1, true);
    rotRaw[i*4+0]    = dv.getFloat32(base + oR0, true);
    rotRaw[i*4+1]    = dv.getFloat32(base + oR1, true);
    rotRaw[i*4+2]    = dv.getFloat32(base + oR2, true);
    rotRaw[i*4+3]    = dv.getFloat32(base + oR3, true);
    if (hasSV) {
      const sBase = i * K * 3, tBase = i * K;
      for (let k = 0; k < K * 3; ++k) svSite[sBase + k] = dv.getFloat32(base + siteOffs[k], true);
      for (let k = 0; k < K * 3; ++k) svCol [sBase + k] = dv.getFloat32(base + colOffs[k],  true);
      for (let k = 0; k < K;     ++k) svTauRaw[tBase + k] = dv.getFloat32(base + tauOffs[k], true);
    }
    if (hasDC) {
      dcRaw[i*3+0] = dv.getFloat32(base + oDC0, true);
      dcRaw[i*3+1] = dv.getFloat32(base + oDC1, true);
      dcRaw[i*3+2] = dv.getFloat32(base + oDC2, true);
    }
  }

  if (hasSV) {
    for (let i = 0; i < count; ++i) {
      for (let k = 0; k < K; ++k) {
        const idx = i * K * 3 + k * 3;
        const inv = 1 / (Math.hypot(svSite[idx], svSite[idx+1], svSite[idx+2]) + 1e-12);
        svSite[idx  ] *= inv; svSite[idx+1] *= inv; svSite[idx+2] *= inv;
      }
    }
  }

  let minX=Infinity, minY=Infinity, minZ=Infinity;
  let maxX=-Infinity, maxY=-Infinity, maxZ=-Infinity;
  for (let i = 0; i < count; ++i) {
    const x = positions[i*3+0], y = positions[i*3+1], z = positions[i*3+2];
    if (x < minX) minX = x; else if (x > maxX) maxX = x;
    if (y < minY) minY = y; else if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; else if (z > maxZ) maxZ = z;
  }
  const t1 = performance.now();
  const modeStr = hasSV ? `SV(K=${K})` : (hasDC ? 'DC-only' : 'geometry-only');
  setHud(`${container} · ${count} Gauss · ${modeStr} · ${((t1-tStart)/1000).toFixed(1)} s`);
  return {
    count, positions, opacRaw, scaleRaw, rotRaw,
    svSite, svCol, svTauRaw, dcRaw,
    hasSV, hasDC,
    aabb: { min: [minX,minY,minZ], max: [maxX,maxY,maxZ] },
  };
}

// ---------------- Orbit camera ----------------
class OrbitCam {
  constructor(canvas, pivot, dist) {
    this.canvas = canvas; this.pivot = [...pivot]; this.dist = dist; this.yaw = 0; this.pitch = -0.2;
    this._bindPointer(); this._bindWheel(); this._bindTouch();
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
      this.canvas.setPointerCapture(e.pointerId); e.preventDefault();
    });
    this.canvas.addEventListener('pointermove', e => {
      if (!(dragging || panning)) return;
      const dx = e.clientX - px, dy = e.clientY - py; px = e.clientX; py = e.clientY;
      if (dragging) {
        this.yaw -= dx * 0.006;
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

// ---------------- Shaders ----------------
// Preprocess pass — fullscreen quad + fragment does the per-Gauss work ONCE.
const PREP_VERT_SRC = `#version 300 es
layout(location = 0) in vec2 a_quad;
void main() { gl_Position = vec4(a_quad, 0.0, 1.0); }`;

const PREP_FRAG_SRC = `#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;

uniform mat4 u_view;
uniform mat4 u_proj;
uniform vec2 u_viewport_px;
uniform int  u_tex_w;
uniform int  u_n;
uniform int  u_has_sv;

uniform sampler2D u_geom_a;    // (x, y, z, opac_raw)         — 1 texel/gauss
uniform sampler2D u_geom_b;    // (rot_r, rot_x, rot_y, rot_z) — 1 texel/gauss
uniform sampler2D u_geom_c;    // (scale_0_raw, scale_1_raw, 0, 0) — 1 texel/gauss

// Repacked so each site's 3 floats + tau fit in ONE texel; each colour vec3 +
// pad also fits in one texel. This gives us K fetches per attribute instead
// of the 2K fetches the previous packing needed.
//   u_sv_st: 7 texels/gauss, (site.x, site.y, site.z, tau_raw) each
//   u_sv_cl: 7 texels/gauss, (r, g, b, unused) each
uniform sampler2D u_sv_st;
uniform sampler2D u_sv_cl;

uniform sampler2D u_dc;        // (r, g, b, 0) — 1 texel/gauss (DC fallback)

layout(location = 0) out vec4 out_ndc_ext_opac;   // (ndc.x, ndc.y, extent_px, opac)
layout(location = 1) out vec4 out_conic_valid;    // (conic.a, conic.b, conic.c, valid_flag)
layout(location = 2) out vec4 out_rgb;            // (r, g, b, 0)

ivec2 idx2xy(int i) { return ivec2(i % u_tex_w, i / u_tex_w); }
vec4  fetch(sampler2D t, int i) { return texelFetch(t, idx2xy(i), 0); }

mat3 quat_to_rot(vec4 q) {
    q = normalize(q);
    float r = q.x, x = q.y, y = q.z, z = q.w;
    // column-major: mat3(col0, col1, col2)
    return mat3(
        1.0 - 2.0*(y*y + z*z), 2.0*(x*y + r*z),       2.0*(x*z - r*y),
        2.0*(x*y - r*z),       1.0 - 2.0*(x*x + z*z), 2.0*(y*z + r*x),
        2.0*(x*z + r*y),       2.0*(y*z - r*x),       1.0 - 2.0*(x*x + y*y)
    );
}

void main() {
    ivec2 fc = ivec2(gl_FragCoord.xy);
    int gid = fc.y * u_tex_w + fc.x;
    if (gid >= u_n) discard;

    vec4 gA = fetch(u_geom_a, gid);      // pos + opac
    vec4 gB = fetch(u_geom_b, gid);      // quat
    vec4 gC = fetch(u_geom_c, gid);      // scale
    vec3 p_world = gA.xyz;
    float opac   = 1.0 / (1.0 + exp(-gA.w));

    vec4 p_eye4 = u_view * vec4(p_world, 1.0);
    vec3 t = p_eye4.xyz;

    // Behind-camera → mark invalid + zero extent.
    bool bad = t.z >= -0.05;

    float s0 = exp(gC.x);
    float s1 = exp(gC.y);
    float s2 = min(s0, s1) * 0.05;
    mat3 R = quat_to_rot(gB);
    mat3 M = mat3(R[0]*s0, R[1]*s1, R[2]*s2);
    mat3 Cov3D = M * transpose(M);

    mat3 W = mat3(u_view);
    mat3 CovView = W * Cov3D * transpose(W);

    float fx = 0.5 * u_proj[0][0] * u_viewport_px.x;
    float fy = 0.5 * u_proj[1][1] * u_viewport_px.y;

    float invTz = 1.0 / t.z;
    float J00 = -fx * invTz, J02 = fx * t.x * invTz * invTz;
    float J11 = -fy * invTz, J12 = fy * t.y * invTz * invTz;

    float A = J00*(J00*CovView[0][0] + J02*CovView[0][2]) + J02*(J00*CovView[0][2] + J02*CovView[2][2]);
    float B = J00*(J11*CovView[0][1] + J12*CovView[0][2]) + J02*(J11*CovView[1][2] + J12*CovView[2][2]);
    float C = J11*(J11*CovView[1][1] + J12*CovView[1][2]) + J12*(J11*CovView[1][2] + J12*CovView[2][2]);
    A += 0.3; C += 0.3;

    float det = A*C - B*B;
    bad = bad || !(det > 1e-6);
    float invDet = bad ? 0.0 : 1.0 / det;
    vec3 conic = vec3(C * invDet, -B * invDet, A * invDet);

    float trc  = A + C;
    float disc = sqrt(max(0.0, trc*trc*0.25 - det));
    float lambdaMax = 0.5 * trc + disc;
    float extent    = bad ? 0.0 : min(256.0, ceil(3.0 * sqrt(max(0.0, lambdaMax))));

    // Clip to viewport: mark invalid if outside padded NDC box.
    vec4 clip = u_proj * vec4(t, 1.0);
    vec2 ndc  = clip.xy / clip.w;
    if (ndc.x < -1.4 || ndc.x > 1.4 || ndc.y < -1.4 || ndc.y > 1.4) {
        bad = true;
        extent = 0.0;
    }

    // World-frame view direction (camera → gauss).
    vec3 dEye = normalize(t);
    vec3 dWld = normalize(transpose(W) * dEye);

    vec3 rgb;
    if (u_has_sv == 1) {
        int base = gid * 7;
        // Pass 1: max logit for numerical stability.
        float maxLogit = -1.0e30;
        float logits[7];
        for (int k = 0; k < 7; ++k) {
            vec4 sk = fetch(u_sv_st, base + k);
            float dist = length(sk.xyz - dWld);
            float lg   = -exp(sk.w) * dist;
            logits[k]  = lg;
            if (lg > maxLogit) maxLogit = lg;
        }
        // Pass 2: exp & accumulate weights.
        float sumExp = 0.0;
        float w[7];
        for (int k = 0; k < 7; ++k) {
            float e = exp(logits[k] - maxLogit);
            w[k] = e;
            sumExp += e;
        }
        float invSum = 1.0 / sumExp;
        vec3 feat = vec3(0.0);
        for (int k = 0; k < 7; ++k) {
            vec4 ck = fetch(u_sv_cl, base + k);
            feat += (w[k] * invSum) * ck.xyz;
        }
        rgb = clamp(feat + 0.5, 0.0, 1.0);
    } else {
        vec4 dc = fetch(u_dc, gid);
        rgb = clamp(0.5 + 0.28209479 * dc.xyz, 0.0, 1.0);
    }

    out_ndc_ext_opac = vec4(ndc, extent, opac);
    out_conic_valid  = vec4(conic, bad ? 0.0 : 1.0);
    out_rgb          = vec4(rgb, 0.0);
}`;

// Draw pass — thin vertex shader that reads prepared[gid] and emits the quad.
const DRAW_VERT_SRC = `#version 300 es
layout(location = 0) in vec2  a_corner;      // -1..1
layout(location = 1) in float a_gauss_idf;   // sorted gauss id

uniform sampler2D u_prep0;   // (ndc.x, ndc.y, extent_px, opac)
uniform sampler2D u_prep1;   // (conic.xyz, valid)
uniform sampler2D u_prep2;   // (r, g, b, _)
uniform vec2 u_viewport_px;
uniform int  u_tex_w;

out vec2 v_delta_px;
out vec3 v_conic;
out vec4 v_color;

void main() {
    int gid = int(a_gauss_idf + 0.5);
    ivec2 tc = ivec2(gid % u_tex_w, gid / u_tex_w);
    vec4 p0 = texelFetch(u_prep0, tc, 0);
    vec4 p1 = texelFetch(u_prep1, tc, 0);
    vec4 p2 = texelFetch(u_prep2, tc, 0);

    vec2  ndc    = p0.xy;
    float extent = p0.z;
    float opac   = p0.w;
    vec3  conic  = p1.xyz;
    float valid  = p1.w;
    vec3  rgb    = p2.xyz;

    // Collapse invalid quads to a zero-size point.
    vec2 delta_px  = a_corner * extent * valid;
    vec2 delta_ndc = (delta_px / u_viewport_px) * 2.0;
    gl_Position = vec4(ndc + delta_ndc, 0.0, 1.0);
    v_delta_px = delta_px;
    v_conic    = conic;
    v_color    = vec4(rgb, opac);
}`;

const DRAW_FRAG_SRC = `#version 300 es
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
  gl.shaderSource(s, src); gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(`shader compile:\n${gl.getShaderInfoLog(s)}`);
  return s;
}
function link(gl, vs, fs) {
  const p = gl.createProgram();
  gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(`program link:\n${gl.getProgramInfoLog(p)}`);
  return p;
}

// ---------------- Renderer ----------------
class SplatRenderer {
  constructor(gl, gauss) {
    this.gl = gl; this.gauss = gauss; this.N = gauss.count;
    this.texW  = 2048;
    this.prepH = Math.ceil(this.N / this.texW);

    // Programs
    const pv = compile(gl, gl.VERTEX_SHADER,   PREP_VERT_SRC);
    const pf = compile(gl, gl.FRAGMENT_SHADER, PREP_FRAG_SRC);
    this.prepProg = link(gl, pv, pf);
    const dv = compile(gl, gl.VERTEX_SHADER,   DRAW_VERT_SRC);
    const df = compile(gl, gl.FRAGMENT_SHADER, DRAW_FRAG_SRC);
    this.drawProg = link(gl, dv, df);

    // Preprocess uniforms
    this.uPrepView       = gl.getUniformLocation(this.prepProg, 'u_view');
    this.uPrepProj       = gl.getUniformLocation(this.prepProg, 'u_proj');
    this.uPrepViewportPx = gl.getUniformLocation(this.prepProg, 'u_viewport_px');
    this.uPrepTexW       = gl.getUniformLocation(this.prepProg, 'u_tex_w');
    this.uPrepN          = gl.getUniformLocation(this.prepProg, 'u_n');
    this.uPrepHasSV      = gl.getUniformLocation(this.prepProg, 'u_has_sv');
    this.uPrepGeomA      = gl.getUniformLocation(this.prepProg, 'u_geom_a');
    this.uPrepGeomB      = gl.getUniformLocation(this.prepProg, 'u_geom_b');
    this.uPrepGeomC      = gl.getUniformLocation(this.prepProg, 'u_geom_c');
    this.uPrepSt         = gl.getUniformLocation(this.prepProg, 'u_sv_st');
    this.uPrepCl         = gl.getUniformLocation(this.prepProg, 'u_sv_cl');
    this.uPrepDC         = gl.getUniformLocation(this.prepProg, 'u_dc');

    // Draw uniforms
    this.uDrawPrep0      = gl.getUniformLocation(this.drawProg, 'u_prep0');
    this.uDrawPrep1      = gl.getUniformLocation(this.drawProg, 'u_prep1');
    this.uDrawPrep2      = gl.getUniformLocation(this.drawProg, 'u_prep2');
    this.uDrawViewportPx = gl.getUniformLocation(this.drawProg, 'u_viewport_px');
    this.uDrawTexW       = gl.getUniformLocation(this.drawProg, 'u_tex_w');

    // Static per-Gauss textures
    this._createStaticTextures();
    this._uploadStaticData();

    // Preprocess output textures + FBO (MRT with 3 RGBA32F attachments).
    this.prep0 = this._makeTex(this.texW, this.prepH);
    this.prep1 = this._makeTex(this.texW, this.prepH);
    this.prep2 = this._makeTex(this.texW, this.prepH);
    this.prepFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.prepFBO);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.prep0, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, this.prep1, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT2, gl.TEXTURE_2D, this.prep2, 0);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2]);
    const st = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (st !== gl.FRAMEBUFFER_COMPLETE) throw new Error(`prep FBO incomplete: 0x${st.toString(16)}`);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // Preprocess VAO — fullscreen quad
    this.prepVAO = gl.createVertexArray();
    gl.bindVertexArray(this.prepVAO);
    const prepQuadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, prepQuadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    // Draw VAO — instanced quad + per-instance sorted gauss id
    this.drawVAO = gl.createVertexArray();
    gl.bindVertexArray(this.drawVAO);
    const drawQuadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, drawQuadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    this.indexData = new Float32Array(this.N);
    for (let i = 0; i < this.N; ++i) this.indexData[i] = i;
    this.indexVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.indexVBO);
    gl.bufferData(gl.ARRAY_BUFFER, this.indexData.byteLength, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(1, 1);
    gl.bindVertexArray(null);

    // Sort scratch — radix sort over a *visible* subset. All typed arrays
    // are preallocated once so no per-frame GC pressure.
    this.visibleIds    = new Uint32Array(this.N);
    this.visibleDepths = new Float32Array(this.N);
    this.sortKeys      = new Uint16Array(this.N);
    this.tmpIds        = new Uint32Array(this.N);
    this.tmpKeys       = new Uint16Array(this.N);
    this.radixCounts   = new Uint32Array(256);
    this.sortedIndex   = new Float32Array(this.N);
  }

  _makeTex(w, h) {
    const gl = this.gl;
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, null);
    return t;
  }
  _uploadTex(tex, w, h, data) {
    const gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.RGBA, gl.FLOAT, data);
  }

  _createStaticTextures() {
    const { texW, N } = this;
    const geomH = Math.ceil(N / texW);
    const svH   = Math.ceil((N * 7) / texW);
    this.geomA    = this._makeTex(texW, geomH);
    this.geomB    = this._makeTex(texW, geomH);
    this.geomC    = this._makeTex(texW, geomH);
    this.sitesTex = this._makeTex(texW, svH);
    this.colsTex  = this._makeTex(texW, svH);
    this.dcTex    = this._makeTex(texW, geomH);
    this.geomH = geomH; this.svH = svH;
  }
  _uploadStaticData() {
    const { texW, N, gauss } = this;
    const geomTexels = texW * this.geomH;
    const svTexels   = texW * this.svH;
    const A  = new Float32Array(geomTexels * 4);
    const B  = new Float32Array(geomTexels * 4);
    const C  = new Float32Array(geomTexels * 4);
    const DC = new Float32Array(geomTexels * 4);
    for (let i = 0; i < N; ++i) {
      A[i*4+0] = gauss.positions[i*3+0];
      A[i*4+1] = gauss.positions[i*3+1];
      A[i*4+2] = gauss.positions[i*3+2];
      A[i*4+3] = gauss.opacRaw[i];
      B[i*4+0] = gauss.rotRaw[i*4+0]; B[i*4+1] = gauss.rotRaw[i*4+1];
      B[i*4+2] = gauss.rotRaw[i*4+2]; B[i*4+3] = gauss.rotRaw[i*4+3];
      C[i*4+0] = gauss.scaleRaw[i*2+0]; C[i*4+1] = gauss.scaleRaw[i*2+1];
      DC[i*4+0] = gauss.dcRaw[i*3+0]; DC[i*4+1] = gauss.dcRaw[i*3+1]; DC[i*4+2] = gauss.dcRaw[i*3+2];
    }
    this._uploadTex(this.geomA, texW, this.geomH, A);
    this._uploadTex(this.geomB, texW, this.geomH, B);
    this._uploadTex(this.geomC, texW, this.geomH, C);
    this._uploadTex(this.dcTex, texW, this.geomH, DC);

    // SV: 7 texels per Gauss for sites (each = site.xyz + tau_raw), 7 for colours.
    const S = new Float32Array(svTexels * 4);
    const Cl = new Float32Array(svTexels * 4);
    for (let i = 0; i < N; ++i) {
      for (let k = 0; k < 7; ++k) {
        const idx = (i * 7 + k) * 4;
        S[idx + 0] = gauss.svSite[(i * 7 + k) * 3 + 0];
        S[idx + 1] = gauss.svSite[(i * 7 + k) * 3 + 1];
        S[idx + 2] = gauss.svSite[(i * 7 + k) * 3 + 2];
        S[idx + 3] = gauss.svTauRaw[i * 7 + k];
        Cl[idx + 0] = gauss.svCol[(i * 7 + k) * 3 + 0];
        Cl[idx + 1] = gauss.svCol[(i * 7 + k) * 3 + 1];
        Cl[idx + 2] = gauss.svCol[(i * 7 + k) * 3 + 2];
      }
    }
    this._uploadTex(this.sitesTex, texW, this.svH, S);
    this._uploadTex(this.colsTex,  texW, this.svH, Cl);
  }

  render({ viewMatrix, projMatrix, viewport, framebuffer, clear = true }) {
    const { gl, N, gauss, depths, sortScratch, sortedIndex } = this;
    const vpW = viewport.width, vpH = viewport.height;
    const t0 = performance.now();

    // -------- PREPROCESS PASS --------
    // Render the fullscreen quad into the MRT FBO; fragment shader does the
    // per-Gauss work exactly once per Gauss.
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.prepFBO);
    gl.viewport(0, 0, this.texW, this.prepH);
    gl.disable(gl.SCISSOR_TEST);
    gl.disable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);
    gl.useProgram(this.prepProg);
    gl.uniformMatrix4fv(this.uPrepView, false, viewMatrix);
    gl.uniformMatrix4fv(this.uPrepProj, false, projMatrix);
    gl.uniform2f(this.uPrepViewportPx, vpW, vpH);
    gl.uniform1i(this.uPrepTexW,  this.texW);
    gl.uniform1i(this.uPrepN,     N);
    gl.uniform1i(this.uPrepHasSV, gauss.hasSV ? 1 : 0);

    let u = 0;
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.geomA);    gl.uniform1i(this.uPrepGeomA, u++);
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.geomB);    gl.uniform1i(this.uPrepGeomB, u++);
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.geomC);    gl.uniform1i(this.uPrepGeomC, u++);
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.sitesTex); gl.uniform1i(this.uPrepSt,    u++);
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.colsTex);  gl.uniform1i(this.uPrepCl,    u++);
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.dcTex);    gl.uniform1i(this.uPrepDC,    u++);
    gl.bindVertexArray(this.prepVAO);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.bindVertexArray(null);
    const tPrep = performance.now();

    // -------- DEPTH + SORT (CPU) --------
    // 1) One dot product per Gauss for view-space z; behind-near-plane Gauss
    //    are skipped entirely (never added to the visible list).
    const positions = gauss.positions;
    const vm2 = viewMatrix[2], vm6 = viewMatrix[6], vm10 = viewMatrix[10], vm14 = viewMatrix[14];
    const visIds   = this.visibleIds;
    const visDepth = this.visibleDepths;
    let V = 0, maxDepth = 0;
    for (let i = 0; i < N; ++i) {
      const tz = vm2*positions[i*3] + vm6*positions[i*3+1] + vm10*positions[i*3+2] + vm14;
      if (tz >= -0.05) continue;
      const d = -tz;
      visIds[V]   = i;
      visDepth[V] = d;
      if (d > maxDepth) maxDepth = d;
      ++V;
    }
    const tDepth = performance.now();

    // 2) Radix sort: 16-bit key (quantised depth, inverted so ascending sort
    //    yields back-to-front), 2 passes of 8 bits. Reuses preallocated
    //    typed arrays — zero GC per frame.
    //
    //    Why radix vs. Array.sort(comparator)?  V8's TimSort with a JS
    //    comparator does N log N callbacks, each ~100 ns of interpreter
    //    overhead. For 500k Gauss that's ~1 s. Radix over Uint16 keys is a
    //    single-digit ms.  (The WebGPU pipeline does the same idea, but the
    //    hierarchical Blelloch radix runs in a compute shader on GPU.
    //    WebGL2 has no compute, so we do the equivalent on CPU — the reason
    //    this stage is a few ms instead of sub-ms.)
    const keys = this.sortKeys;
    const scale = maxDepth > 1e-6 ? 65535 / maxDepth : 0;
    for (let i = 0; i < V; ++i) {
      let k = (visDepth[i] * scale) | 0;
      if (k > 65535) k = 65535;
      keys[i] = 65535 - k;   // invert for descending depth (back-to-front)
    }
    const counts = this.radixCounts;
    const tmpIds = this.tmpIds, tmpKeys = this.tmpKeys;
    // Pass 1 — low byte
    counts.fill(0);
    for (let i = 0; i < V; ++i) counts[keys[i] & 0xFF]++;
    { let acc = 0; for (let b = 0; b < 256; ++b) { const c = counts[b]; counts[b] = acc; acc += c; } }
    for (let i = 0; i < V; ++i) {
      const dst = counts[keys[i] & 0xFF]++;
      tmpIds[dst]  = visIds[i];
      tmpKeys[dst] = keys[i];
    }
    // Pass 2 — high byte
    counts.fill(0);
    for (let i = 0; i < V; ++i) counts[(tmpKeys[i] >> 8) & 0xFF]++;
    { let acc = 0; for (let b = 0; b < 256; ++b) { const c = counts[b]; counts[b] = acc; acc += c; } }
    for (let i = 0; i < V; ++i) {
      const dst = counts[(tmpKeys[i] >> 8) & 0xFF]++;
      visIds[dst] = tmpIds[i];
      keys[dst]   = tmpKeys[i];
    }
    const tSort = performance.now();

    // 3) Push the sorted VISIBLE-only index list to the GPU. Culled Gauss
    //    never make it into the draw call.
    for (let k = 0; k < V; ++k) sortedIndex[k] = visIds[k];
    gl.bindBuffer(gl.ARRAY_BUFFER, this.indexVBO);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, sortedIndex.subarray(0, V));
    const tPack = performance.now();
    const visible = V;

    // -------- DRAW PASS --------
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer || null);
    gl.viewport(viewport.x|0, viewport.y|0, vpW|0, vpH|0);
    if (clear) {
      gl.enable(gl.SCISSOR_TEST);
      gl.scissor(viewport.x|0, viewport.y|0, vpW|0, vpH|0);
      gl.clearColor(0.02, 0.02, 0.03, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.SCISSOR_TEST);
    }
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    gl.useProgram(this.drawProg);
    gl.uniform2f(this.uDrawViewportPx, vpW, vpH);
    gl.uniform1i(this.uDrawTexW, this.texW);
    u = 0;
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.prep0); gl.uniform1i(this.uDrawPrep0, u++);
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.prep1); gl.uniform1i(this.uDrawPrep1, u++);
    gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, this.prep2); gl.uniform1i(this.uDrawPrep2, u++);
    gl.bindVertexArray(this.drawVAO);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, visible);
    gl.bindVertexArray(null);
    const tDraw = performance.now();

    return {
      msPrep:  tPrep  - t0,
      msDepth: tDepth - tPrep,
      msSort:  tSort  - tDepth,
      msPack:  tPack  - tSort,
      msDraw:  tDraw  - tPack,
      msTotal: tDraw  - t0,
      visible,
    };
  }
}

// ---------------- XR status pill ----------------
function makePill() {
  const p = document.createElement('div');
  p.style.cssText =
    'position:fixed;top:8px;right:8px;padding:4px 10px;border-radius:12px;' +
    'font:11px ui-monospace,SFMono-Regular,Menlo,monospace;z-index:9997;' +
    'pointer-events:none;';
  document.body.appendChild(p);
  return (bg, fg, txt) => { p.style.background = bg; p.style.color = fg; p.textContent = txt; };
}

// ---------------- Main ----------------
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

    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, xrCompatible: true, powerPreference: 'high-performance' });
    if (!gl) { showErr('WebGL2 not available.'); return; }
    // Required to render into RGBA32F attachments (MRT preprocess pass).
    if (!gl.getExtension('EXT_color_buffer_float')) {
      showErr('EXT_color_buffer_float unavailable — MRT float FBO cannot be created.');
      return;
    }

    const gauss = await loadScene(bundleURL);

    const cx = 0.5*(gauss.aabb.min[0]+gauss.aabb.max[0]);
    const cy = 0.5*(gauss.aabb.min[1]+gauss.aabb.max[1]);
    const cz = 0.5*(gauss.aabb.min[2]+gauss.aabb.max[2]);
    const dx = gauss.aabb.max[0]-gauss.aabb.min[0];
    const dy = gauss.aabb.max[1]-gauss.aabb.min[1];
    const dz = gauss.aabb.max[2]-gauss.aabb.min[2];
    const diag = Math.hypot(dx, dy, dz);
    const cam  = new OrbitCam(canvas, [cx, cy, cz], diag * 1.3);

    const renderer = new SplatRenderer(gl, gauss);
    const setPill  = makePill();

    // XR world placement.
    const sceneScale = 2.0 / diag;
    const worldMatrix = mat4Identity();
    worldMatrix[0]  = sceneScale;
    worldMatrix[5]  = sceneScale;
    worldMatrix[10] = sceneScale;
    worldMatrix[12] = 0    - cx * sceneScale;
    worldMatrix[13] = 1.4  - cy * sceneScale;
    worldMatrix[14] = -2.5 - cz * sceneScale;

    let xrSession = null, xrRefSpace = null, xrLayer = null;
    const xrComposedView = new Float32Array(16);

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
        try { xrRefSpace = await session.requestReferenceSpace('local-floor'); }
        catch { xrRefSpace = await session.requestReferenceSpace('local'); }
        xrSession = session;
        session.addEventListener('end', () => {
          xrSession = null; xrRefSpace = null; xrLayer = null;
          setPill('#204830', '#a0f0a0', '✅ XR ready · tap to enter');
          armEnter();
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

      const fb = xrLayer.framebuffer;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.viewport(0, 0, xrLayer.framebufferWidth, xrLayer.framebufferHeight);
      gl.disable(gl.SCISSOR_TEST);
      gl.clearColor(0.02, 0.02, 0.03, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      for (const view of pose.views) {
        const vp = xrLayer.getViewport(view);
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

    function armEnter() {
      if (xrSession) return;
      document.addEventListener('pointerdown', () => {
        if (xrSession) return;
        tryEnterXR();
      }, { once: true });
    }

    (async () => {
      if (!navigator.xr) { setPill('#502020', '#ffb0b0', '❌ WebXR API missing'); return; }
      let supported = false;
      try { supported = await navigator.xr.isSessionSupported('immersive-vr'); } catch {}
      if (!supported) { setPill('#503820', '#ffdc80', '❌ immersive-vr not supported'); return; }
      setPill('#204830', '#a0f0a0', '✅ XR ready · tap to enter');
      armEnter();
    })();

    // Flat viewer loop.
    const FOV_Y = 60 * Math.PI / 180;
    let lastReport = performance.now();
    let sumStats = { msPrep: 0, msDepth: 0, msSort: 0, msPack: 0, msDraw: 0, msTotal: 0, count: 0, visible: 0 };
    const loop = () => {
      if (xrSession) { requestAnimationFrame(loop); return; }
      const W = canvas.width, H = canvas.height;
      const projMatrix = mat4Perspective(FOV_Y, W / Math.max(1, H), 0.05, 200.0);
      const s = renderer.render({
        viewMatrix: cam.viewMatrix(),
        projMatrix,
        viewport: { x: 0, y: 0, width: W, height: H },
        framebuffer: null,
        clear: true,
      });
      sumStats.msPrep  += s.msPrep;
      sumStats.msDepth += s.msDepth; sumStats.msSort += s.msSort;
      sumStats.msPack  += s.msPack;  sumStats.msDraw += s.msDraw;
      sumStats.msTotal += s.msTotal; sumStats.count += 1; sumStats.visible = s.visible;
      const now = performance.now();
      if (now - lastReport > 500) {
        const n = sumStats.count;
        setHud(
          `${gauss.count} Gauss · ${W}×${H} · ${(n * 1000 / (now - lastReport)).toFixed(0)} fps · vis ${sumStats.visible}\n` +
          `prep ${(sumStats.msPrep/n).toFixed(1)} · depth ${(sumStats.msDepth/n).toFixed(1)} · sort ${(sumStats.msSort/n).toFixed(1)} · ` +
          `pack ${(sumStats.msPack/n).toFixed(1)} · draw ${(sumStats.msDraw/n).toFixed(1)} · ` +
          `total ${(sumStats.msTotal/n).toFixed(1)} ms`
        );
        sumStats = { msPrep: 0, msDepth: 0, msSort: 0, msPack: 0, msDraw: 0, msTotal: 0, count: 0, visible: sumStats.visible };
        lastReport = now;
      }
      requestAnimationFrame(loop);
    };
    loop();
  } catch (e) {
    showErr(`fatal: ${(e && e.stack) || e}`);
  }
})();
