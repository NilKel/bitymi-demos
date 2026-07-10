// Halloumi-GL — WebGL2 + WebXR splat viewer for `.bitymi` bundles and raw PLYs.
//
// GPU-side compute: per-Gauss data (position, quat, scales, opacity, SV sites +
// colours + taus) lives in RGBA32F data textures, one texel-cluster per Gauss.
// The vertex shader is where the entire per-Gauss pipeline runs — it fetches
// the raw parameters by instance id, computes the 3D covariance, projects into
// screen space with the eye's projection matrix, evaluates the SV softmax
// against the world-space view direction, and emits the bounding quad + conic.
// The CPU per-frame job is just depth + sort + a small u32 index-buffer upload.
//
// Colour model = Spherical Voronoi (SV), matching nest-splatting's
// `computeColorFromVoronoi` in diff_surfel_bake_render_rvq/forward.cu:
//   dir       = normalize(gauss_world_pos − cam_world_pos)
//   logits[k] = −exp(sv_tau_raw[k]) · |site_k_normalised − dir|
//   w         = softmax(logits)
//   feat_c    = Σ w[k]·sv_col[k,c]
//   rgb_c     = clamp(feat_c + 0.5, 0, 1)
//
// Container support:
//   `.bitymi` bundle → { magic BITYMI01, u32 n_chunks, TOC of {kind u32, off u64,
//                        size u64}, chunks[] }.  We read the PLY/BPLY chunk and
//                        ignore atlas / cameras.
//   BPLY inside a bundle: min-max quantised u8 columns + FP16 xyz.
//   Raw `.ply`         → binary_little_endian, standard 3DGS-2DGS layout with
//                        sv_site_0..20 / sv_col_0..20 / sv_tau_0..6.
//
// Frustum cull runs in the CPU depth pass (skip any Gauss whose world position
// projects outside a padded ±1.4 NDC box or falls behind the near plane).

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
// .bitymi is a chunked container with a 12-byte fixed header + TOC.
// See Halloumi-WS parseBitymi in src/splat-app.ts.
const BITYMI_MAGIC     = 'BITYMI01';
const CHUNK_PLY        = 0;
const CHUNK_CAMERAS    = 2;
const CHUNK_NAT2       = 3;
const CHUNK_NATL       = 4;
const CHUNK_BPLY       = 5;

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

// FP16 → FP32. WebXR / recent Chromium have DataView.getFloat16 but not all
// mobile builds; keep the fallback inline.
function halfToFloat(h) {
  const s = (h & 0x8000) >> 15;
  const e = (h & 0x7C00) >> 10;
  const f =  h & 0x03FF;
  if (e === 0)    return (s ? -1 : 1) * Math.pow(2, -14) * (f / 1024);
  if (e === 0x1F) return f ? NaN : (s ? -Infinity : Infinity);
  return (s ? -1 : 1) * Math.pow(2, e - 15) * (1 + f / 1024);
}

// BPLY: 8-bit min-max column-quantised PLY (+ FP16 xyz). Expands to a synthetic
// binary_little_endian PLY so the same PLY parser handles both codecs. Mirrors
// Halloumi-WS's BplyDecoder.
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

  // SV fields — 7 sites × 3, 7 colours × 3, 7 taus. Some old / DC-only bakes may
  // ship a scene without SV; fall back to a DC-only path in that case
  // (f_dc_0..2 → constant colour, no view dep).
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
  const dcRaw     = new Float32Array(count * 3);   // used only in fallback

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

  // Normalise sites once — the CUDA path does `sites / (|sites|+1e-12)`.
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

// ---------------- WebGL2 renderer (GPU-side vertex compute) ----------------
// Every per-Gauss datum lives in a data texture. The vertex shader looks each
// item up by gl_InstanceID and does:
//   1) world → eye (uniform u_view · fetched position)
//   2) NDC via uniform u_proj
//   3) 3D covariance from quat + scale, projected to Cov2D via the perspective
//      Jacobian; conic + bounding radius
//   4) direction (world) = view3x3^T · normalized(camera-space delta), then
//      soft-min chord distance → softmax weights over 7 sites → weighted colour.
//
// This means the CPU per-frame job is: (i) compute view-space z per Gauss,
// (ii) sort indices back-to-front, (iii) glBufferSubData the u32 index buffer.
// Everything else is one drawArraysInstanced.
const VERT_SRC = `#version 300 es
layout(location = 0) in vec2  a_corner;      // -1..1 quad corner
layout(location = 1) in float a_gauss_idf;   // instance → gauss id (u32-in-f32)

uniform mat4 u_view;                          // world → eye
uniform mat4 u_proj;                          // eye → clip (perspective, y-up NDC)
uniform vec2 u_viewport_px;
uniform int  u_tex_w;                         // data-texture width, texels
uniform int  u_has_sv;                        // 1 if SV present, else DC-only

// Data textures (all RGBA32F). Layouts documented next to the fetches below.
uniform sampler2D u_geom_a;     // 1 texel/gauss: (x, y, z, opac_raw)
uniform sampler2D u_geom_b;     // 1 texel/gauss: (rot_r, rot_x, rot_y, rot_z)
uniform sampler2D u_geom_c;     // 1 texel/gauss: (scale_0_raw, scale_1_raw, 0, 0)
uniform sampler2D u_sv_sites;   // 6 texels/gauss: 7 vec3 (packed, last texel has 1 site + pad)
uniform sampler2D u_sv_colors;  // 6 texels/gauss: 7 vec3 (packed like sites)
uniform sampler2D u_sv_taus;    // 2 texels/gauss: 7 floats + 1 pad (RGBA layout)
uniform sampler2D u_dc;         // 1 texel/gauss: (r_dc, g_dc, b_dc, 0) — fallback

out vec2 v_delta_px;
out vec3 v_conic;
out vec4 v_color;

ivec2 idx2xy(int i) { return ivec2(i % u_tex_w, i / u_tex_w); }
vec4  fetch(sampler2D t, int i) { return texelFetch(t, idx2xy(i), 0); }

// Read the k-th (0..6) SV vec3 for gauss gid from one of the packed textures.
vec3 fetch_sv3(sampler2D t, int gid, int k) {
    int base = gid * 6;
    // Layout: t[base+j] carries (v_{2j}.xyz, v_{2j+1}.x); t[base+j+1] shifted;
    // i.e. floats are packed contiguously across texels, 4 floats per texel.
    // For k in 0..6 → float offsets kf..kf+2, kf = k*3.
    int f0 = k * 3;
    int t0 = f0 >> 2, l0 = f0 & 3;    // start texel + lane
    vec4 a = fetch(t, base + t0);
    vec4 b = fetch(t, base + t0 + 1); // safe because we allocate 6 texels
    // Gather three consecutive floats starting at lane l0 across (a, b).
    float f[8];
    f[0] = a.x; f[1] = a.y; f[2] = a.z; f[3] = a.w;
    f[4] = b.x; f[5] = b.y; f[6] = b.z; f[7] = b.w;
    return vec3(f[l0], f[l0 + 1], f[l0 + 2]);
}
// Read one SV scalar (tau, 0..6) — packed as 7 floats + pad across 2 texels.
float fetch_sv1(sampler2D t, int gid, int k) {
    int base = gid * 2;
    vec4 a = fetch(t, base + 0);
    vec4 b = fetch(t, base + 1);
    float f[8];
    f[0] = a.x; f[1] = a.y; f[2] = a.z; f[3] = a.w;
    f[4] = b.x; f[5] = b.y; f[6] = b.z; f[7] = b.w;
    return f[k];
}

mat3 quat_to_rot(vec4 q) {
    q = normalize(q);
    float r = q.x, x = q.y, y = q.z, z = q.w;
    return mat3(
        1.0 - 2.0*(y*y + z*z), 2.0*(x*y + r*z),       2.0*(x*z - r*y),
        2.0*(x*y - r*z),       1.0 - 2.0*(x*x + z*z), 2.0*(y*z + r*x),
        2.0*(x*z + r*y),       2.0*(y*z - r*x),       1.0 - 2.0*(x*x + y*y)
    );
}

void main() {
    int gid = int(a_gauss_idf + 0.5);

    vec4 gA = fetch(u_geom_a, gid);          // pos + opac
    vec4 gB = fetch(u_geom_b, gid);          // quat
    vec4 gC = fetch(u_geom_c, gid);          // scale
    vec3 p_world = gA.xyz;
    float opac   = 1.0 / (1.0 + exp(-gA.w));

    // world → eye
    vec4 p_eye4 = u_view * vec4(p_world, 1.0);
    vec3 t = p_eye4.xyz;
    // Behind-camera: emit degenerate quad by setting extent=0 later.
    // (We can't discard in the vertex shader; instead push the quad off-clip.)

    // Cov3D = R · S² · Rᵀ
    float s0 = exp(gC.x);
    float s1 = exp(gC.y);
    float s2 = min(s0, s1) * 0.05;
    mat3 R = quat_to_rot(gB);
    mat3 M = mat3(R[0] * s0, R[1] * s1, R[2] * s2);
    // Cov3D = M · Mᵀ; column-major glsl mat3 is column-major, transpose flips.
    mat3 Cov3D = M * transpose(M);

    // View-space covariance = W · Cov3D · Wᵀ, W = view.rot (3x3).
    mat3 W = mat3(u_view);
    mat3 CovView = W * Cov3D * transpose(W);

    // Effective focals from the projection matrix + viewport.
    float fx = 0.5 * u_proj[0][0] * u_viewport_px.x;
    float fy = 0.5 * u_proj[1][1] * u_viewport_px.y;

    // Perspective Jacobian on eye-space (tx,ty,tz):
    //   ∂sx/∂tx = -fx/tz    ∂sx/∂tz = fx·tx/tz²
    //   ∂sy/∂ty = -fy/tz    ∂sy/∂tz = fy·ty/tz²
    float invTz = 1.0 / t.z;
    float J00 = -fx * invTz, J02 = fx * t.x * invTz * invTz;
    float J11 = -fy * invTz, J12 = fy * t.y * invTz * invTz;
    mat2 Cov2D = mat2(
        J00*(J00*CovView[0][0] + J02*CovView[0][2]) + J02*(J00*CovView[0][2] + J02*CovView[2][2]),
        J00*(J11*CovView[0][1] + J12*CovView[0][2]) + J02*(J11*CovView[1][2] + J12*CovView[2][2]),
        J00*(J11*CovView[0][1] + J12*CovView[0][2]) + J02*(J11*CovView[1][2] + J12*CovView[2][2]),
        J11*(J11*CovView[1][1] + J12*CovView[1][2]) + J12*(J11*CovView[1][2] + J12*CovView[2][2])
    );
    // Low-pass +0.3 pixel² on the diagonal.
    Cov2D[0][0] += 0.3;
    Cov2D[1][1] += 0.3;

    float det = Cov2D[0][0]*Cov2D[1][1] - Cov2D[0][1]*Cov2D[1][0];
    // Behind camera or degenerate → collapse to a zero-extent point.
    bool bad = (t.z >= -0.05) || !(det > 1e-6);

    float invDet = bad ? 0.0 : 1.0 / det;
    vec3 conic = vec3(Cov2D[1][1] * invDet, -Cov2D[0][1] * invDet, Cov2D[0][0] * invDet);

    float trc  = Cov2D[0][0] + Cov2D[1][1];
    float disc = sqrt(max(0.0, trc*trc*0.25 - det));
    float lambdaMax = 0.5 * trc + disc;
    float extent    = bad ? 0.0 : min(256.0, ceil(3.0 * sqrt(max(0.0, lambdaMax))));

    // View direction in world frame — cam-space normalized(t) rotated by Wᵀ.
    vec3 dEye = normalize(t);
    vec3 dWld = normalize(transpose(W) * dEye);

    vec3 rgb;
    if (u_has_sv == 1) {
        // Pass 1: max logit
        float maxLogit = -1.0e30;
        float logits[7];
        for (int k = 0; k < 7; ++k) {
            vec3 site = fetch_sv3(u_sv_sites, gid, k);
            float tau  = exp(fetch_sv1(u_sv_taus, gid, k));
            float dist = length(site - dWld);
            float lg   = -tau * dist;
            logits[k]  = lg;
            if (lg > maxLogit) maxLogit = lg;
        }
        // Pass 2: exp & sum
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
            vec3 col = fetch_sv3(u_sv_colors, gid, k);
            feat += (w[k] * invSum) * col;
        }
        rgb = clamp(feat + 0.5, 0.0, 1.0);
    } else {
        vec4 dc = fetch(u_dc, gid);
        rgb = clamp(0.5 + 0.28209479 * dc.xyz, 0.0, 1.0);
    }

    // Splat quad in NDC.
    vec4 clip = u_proj * vec4(t, 1.0);
    vec2 ndc  = clip.xy / clip.w;
    vec2 delta_px  = a_corner * extent;
    vec2 delta_ndc = (delta_px / u_viewport_px) * 2.0;
    gl_Position = vec4(ndc + delta_ndc, 0.0, 1.0);

    v_delta_px = delta_px;
    v_conic    = conic;
    v_color    = vec4(rgb, opac);
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
  gl.shaderSource(s, src); gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(`shader compile: ${gl.getShaderInfoLog(s)}`);
  return s;
}
function link(gl, vs, fs) {
  const p = gl.createProgram();
  gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(`program link: ${gl.getProgramInfoLog(p)}`);
  return p;
}

class SplatRenderer {
  constructor(gl, gauss) {
    this.gl = gl; this.gauss = gauss; this.N = gauss.count;

    const vs = compile(gl, gl.VERTEX_SHADER,   VERT_SRC);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
    this.prog = link(gl, vs, fs);

    this.uView       = gl.getUniformLocation(this.prog, 'u_view');
    this.uProj       = gl.getUniformLocation(this.prog, 'u_proj');
    this.uViewportPx = gl.getUniformLocation(this.prog, 'u_viewport_px');
    this.uTexW       = gl.getUniformLocation(this.prog, 'u_tex_w');
    this.uHasSV      = gl.getUniformLocation(this.prog, 'u_has_sv');
    this.uGeomA      = gl.getUniformLocation(this.prog, 'u_geom_a');
    this.uGeomB      = gl.getUniformLocation(this.prog, 'u_geom_b');
    this.uGeomC      = gl.getUniformLocation(this.prog, 'u_geom_c');
    this.uSites      = gl.getUniformLocation(this.prog, 'u_sv_sites');
    this.uColors     = gl.getUniformLocation(this.prog, 'u_sv_colors');
    this.uTaus       = gl.getUniformLocation(this.prog, 'u_sv_taus');
    this.uDC         = gl.getUniformLocation(this.prog, 'u_dc');

    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);

    const quadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    // Per-instance: gauss id (f32-encoded u32). Updated every frame.
    this.indexData = new Float32Array(this.N);
    for (let i = 0; i < this.N; ++i) this.indexData[i] = i;
    this.indexVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.indexVBO);
    gl.bufferData(gl.ARRAY_BUFFER, this.indexData.byteLength, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 1, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(1, 1);
    gl.bindVertexArray(null);

    // Choose a texture width that keeps things well under 4096-wide limits.
    // The texel counts per-Gauss vary — pick per-texture heights.
    this.texW = 2048;
    this._createTextures();
    this._uploadStaticData();

    // Sort scratch.
    this.depths      = new Float32Array(this.N);
    this.sortScratch = new Array(this.N);
    for (let i = 0; i < this.N; ++i) this.sortScratch[i] = i;
    this.sortedIndex = new Float32Array(this.N);
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
  _createTextures() {
    const gl = this.gl, N = this.N, W = this.texW;
    // Assert EXT_color_buffer_float / OES_texture_float_linear are enabled;
    // uploading FLOAT samples requires renderable-float support in some drivers.
    const ext = gl.getExtension('EXT_color_buffer_float');
    if (!ext) console.warn('EXT_color_buffer_float not exposed; float textures may be sample-only');

    const geomH  = Math.ceil(N            / W);       // 1 texel / gauss
    const svH    = Math.ceil((N * 6)      / W);       // 6 texels / gauss (sites+colors)
    const tauH   = Math.ceil((N * 2)      / W);       // 2 texels / gauss (taus)

    this.geomA = this._makeTex(W, geomH);
    this.geomB = this._makeTex(W, geomH);
    this.geomC = this._makeTex(W, geomH);
    this.sitesTex  = this._makeTex(W, svH);
    this.colorsTex = this._makeTex(W, svH);
    this.tausTex   = this._makeTex(W, tauH);
    this.dcTex     = this._makeTex(W, geomH);

    this.geomH = geomH; this.svH = svH; this.tauH = tauH;
  }
  _uploadStaticData() {
    const { N, texW, gauss } = this;
    // geom A = (x, y, z, opac_raw)
    const A = new Float32Array(texW * this.geomH * 4);
    const B = new Float32Array(texW * this.geomH * 4);
    const C = new Float32Array(texW * this.geomH * 4);
    const DC = new Float32Array(texW * this.geomH * 4);
    for (let i = 0; i < N; ++i) {
      A[i*4+0] = gauss.positions[i*3+0];
      A[i*4+1] = gauss.positions[i*3+1];
      A[i*4+2] = gauss.positions[i*3+2];
      A[i*4+3] = gauss.opacRaw[i];
      B[i*4+0] = gauss.rotRaw[i*4+0];
      B[i*4+1] = gauss.rotRaw[i*4+1];
      B[i*4+2] = gauss.rotRaw[i*4+2];
      B[i*4+3] = gauss.rotRaw[i*4+3];
      C[i*4+0] = gauss.scaleRaw[i*2+0];
      C[i*4+1] = gauss.scaleRaw[i*2+1];
      C[i*4+2] = 0; C[i*4+3] = 0;
      DC[i*4+0] = gauss.dcRaw[i*3+0];
      DC[i*4+1] = gauss.dcRaw[i*3+1];
      DC[i*4+2] = gauss.dcRaw[i*3+2];
      DC[i*4+3] = 0;
    }
    this._uploadTex(this.geomA, texW, this.geomH, A);
    this._uploadTex(this.geomB, texW, this.geomH, B);
    this._uploadTex(this.geomC, texW, this.geomH, C);
    this._uploadTex(this.dcTex, texW, this.geomH, DC);

    // Sites: 7 vec3 packed to 6 texels (24 floats, last has 3 pad slots).
    const Sites = new Float32Array(texW * this.svH * 4);
    const Cols  = new Float32Array(texW * this.svH * 4);
    for (let i = 0; i < N; ++i) {
      const dstBase = i * 24;
      const srcBase = i * 21;
      for (let k = 0; k < 21; ++k) {
        Sites[dstBase + k] = gauss.svSite[srcBase + k];
        Cols [dstBase + k] = gauss.svCol [srcBase + k];
      }
      // pad slots stay zero
    }
    this._uploadTex(this.sitesTex,  texW, this.svH, Sites);
    this._uploadTex(this.colorsTex, texW, this.svH, Cols);

    // Taus: 7 floats packed to 2 texels (8 floats, last has 1 pad).
    const Taus = new Float32Array(texW * this.tauH * 4);
    for (let i = 0; i < N; ++i) {
      const dstBase = i * 8;
      const srcBase = i * 7;
      for (let k = 0; k < 7; ++k) Taus[dstBase + k] = gauss.svTauRaw[srcBase + k];
    }
    this._uploadTex(this.tausTex, texW, this.tauH, Taus);
  }

  render({ viewMatrix, projMatrix, viewport, framebuffer, clear = true }) {
    const { gl, N, gauss, depths, sortScratch, sortedIndex } = this;
    const vpW = viewport.width, vpH = viewport.height;
    const t0 = performance.now();

    // Per-frame CPU work: view-space depth per Gauss + frustum cull mark.
    // Combine with NDC clip check (fx, fy from projMatrix) to skip splats fully
    // outside the eye's frustum.
    const P0 = projMatrix[0], P5 = projMatrix[5], P8 = projMatrix[8], P9 = projMatrix[9];
    let visible = 0;
    // We use +∞ as the "skip" depth so culled Gauss sort to the end and get
    // trivially rejected by their zero-extent branch in the vertex shader
    // (extent for depth<=0.05 collapses to 0 anyway; we also pass the culled
    // indices in the buffer for now — cheap enough).
    for (let i = 0; i < N; ++i) {
      const x = gauss.positions[i*3+0], y = gauss.positions[i*3+1], z = gauss.positions[i*3+2];
      const tz = viewMatrix[2]*x + viewMatrix[6]*y + viewMatrix[10]*z + viewMatrix[14];
      if (tz >= -0.05) { depths[i] = -Infinity; continue; }
      const tx = viewMatrix[0]*x + viewMatrix[4]*y + viewMatrix[8]*z + viewMatrix[12];
      const ty = viewMatrix[1]*x + viewMatrix[5]*y + viewMatrix[9]*z + viewMatrix[13];
      const invTz = 1 / tz;
      const ndcX = -P0*tx*invTz - P8;
      const ndcY = -P5*ty*invTz - P9;
      if (ndcX < -1.4 || ndcX > 1.4 || ndcY < -1.4 || ndcY > 1.4) { depths[i] = -Infinity; continue; }
      depths[i] = -tz;   // larger = further
      ++visible;
    }
    const tDepth = performance.now();

    for (let i = 0; i < N; ++i) sortScratch[i] = i;
    sortScratch.sort((a, b) => depths[b] - depths[a]);
    const tSort = performance.now();

    for (let k = 0; k < N; ++k) sortedIndex[k] = sortScratch[k];
    gl.bindBuffer(gl.ARRAY_BUFFER, this.indexVBO);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, sortedIndex);
    const tPack = performance.now();

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

    gl.useProgram(this.prog);
    gl.uniformMatrix4fv(this.uView, false, viewMatrix);
    gl.uniformMatrix4fv(this.uProj, false, projMatrix);
    gl.uniform2f(this.uViewportPx, vpW, vpH);
    gl.uniform1i(this.uTexW, this.texW);
    gl.uniform1i(this.uHasSV, gauss.hasSV ? 1 : 0);
    let unit = 0;
    gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, this.geomA);     gl.uniform1i(this.uGeomA,  unit++);
    gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, this.geomB);     gl.uniform1i(this.uGeomB,  unit++);
    gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, this.geomC);     gl.uniform1i(this.uGeomC,  unit++);
    gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, this.sitesTex);  gl.uniform1i(this.uSites,  unit++);
    gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, this.colorsTex); gl.uniform1i(this.uColors, unit++);
    gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, this.tausTex);   gl.uniform1i(this.uTaus,   unit++);
    gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, this.dcTex);     gl.uniform1i(this.uDC,     unit++);
    gl.bindVertexArray(this.vao);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, N);
    gl.bindVertexArray(null);
    const tDraw = performance.now();

    return {
      msDepth: tDepth - t0,
      msSort:  tSort - tDepth,
      msPack:  tPack - tSort,
      msDraw:  tDraw - tPack,
      msTotal: tDraw - t0,
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
    // Sample float textures — required so texelFetch(RGBA32F) works.
    if (!gl.getExtension('EXT_color_buffer_float')) console.warn('EXT_color_buffer_float unavailable');
    // OES_texture_float_linear not needed (we NEAREST-sample the data textures).

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

    // XR world placement: scene AABB centre at (0, 1.4, -2.5) in ref space,
    // uniformly scaled so the diagonal is ~2 m.
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
      if (!navigator.xr) {
        setPill('#502020', '#ffb0b0', '❌ WebXR API missing');
        return;
      }
      let supported = false;
      try { supported = await navigator.xr.isSessionSupported('immersive-vr'); } catch {}
      if (!supported) { setPill('#503820', '#ffdc80', '❌ immersive-vr not supported'); return; }
      setPill('#204830', '#a0f0a0', '✅ XR ready · tap to enter');
      armEnter();
    })();

    // Flat viewer loop.
    const FOV_Y = 60 * Math.PI / 180;
    let lastReport = performance.now();
    let sumStats = { msDepth: 0, msSort: 0, msPack: 0, msDraw: 0, msTotal: 0, count: 0, visible: 0 };
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
      sumStats.msDepth += s.msDepth; sumStats.msSort += s.msSort;
      sumStats.msPack  += s.msPack;  sumStats.msDraw += s.msDraw;
      sumStats.msTotal += s.msTotal; sumStats.count += 1; sumStats.visible = s.visible;
      const now = performance.now();
      if (now - lastReport > 500) {
        const n = sumStats.count;
        setHud(
          `${gauss.count} Gauss · ${W}×${H} · ${(n * 1000 / (now - lastReport)).toFixed(0)} fps · vis ${sumStats.visible}\n` +
          `depth ${(sumStats.msDepth/n).toFixed(1)} · sort ${(sumStats.msSort/n).toFixed(1)} · ` +
          `pack ${(sumStats.msPack/n).toFixed(1)} · draw ${(sumStats.msDraw/n).toFixed(1)} · ` +
          `total ${(sumStats.msTotal/n).toFixed(1)} ms`
        );
        sumStats = { msDepth: 0, msSort: 0, msPack: 0, msDraw: 0, msTotal: 0, count: 0, visible: sumStats.visible };
        lastReport = now;
      }
      requestAnimationFrame(loop);
    };
    loop();
  } catch (e) {
    showErr(`fatal: ${(e && e.stack) || e}`);
  }
})();
