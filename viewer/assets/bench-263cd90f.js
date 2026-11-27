var at=Object.defineProperty;var st=(l,e,n)=>e in l?at(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n;var P=(l,e,n)=>(st(l,typeof e!="symbol"?e+"":e,n),n);import{H as rt,I as it,J as ot,K as lt,C as ct,e as ut,l as dt,c as pt,p as ft,G as mt,i as gt}from"./camera-676e24f4.js";import{u as ht,C as bt}from"./camera-control-3fdf9c4a.js";function yt(l){const e=new TextDecoder().decode(new Uint8Array(l,0,4));if(e!=="GSB1")throw new Error(`not a GSB1 file (magic '${e}')`);const n=new DataView(l).getUint32(4,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(l,8,n))),h=8+n;return{header:r,bytes:l.byteLength,block(i){const d=r.blocks.find(f=>f.name===i);if(!d)throw new Error(`GSB block '${i}' missing`);return l.slice(h+d.offset,h+d.offset+d.nbytes)}}}const tt=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
// shader declares \`camera\` and \`sh_coefs\`).
// Math follows the authors' CUDA (graphdeco computeCov2D incl. the 1.3·tan-fov clamp and
// the +0.3 low-pass, computeColorFromSH, in_frustum's z > 0.2), expressed in Halloumi-WS's
// camera conventions (camera.ts: view = world→camera, COLMAP axes; y-flipping projection).

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    viewport: vec2<f32>,
    focal: vec2<f32>,
};

// Per-method uniform (32 B).
struct BenchParams {
    n: u32,             // Gaussians in the model
    sh_degree: u32,     // 1 (Mobile-GS) or 3
    cutoff_mult: f32,   // FastGS eval-time compact-box beta (0.5); 1 = standard 1/255 support
    w_scale: f32,       // Mobile-GS: blend-weight scale for the f16 fallback (1 on the f32 path)
    mlp_base: u32,      // Mobile-GS mlp_all: first Gaussian of this chunk
    _p0: u32, _p1: u32, _p2: u32,
};

struct GeneralInfo {
  keys_size : atomic<u32>, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

// Screen-space splat handed from the compute passes to the raster pass (64 B: the vec3
// aligns to 16, so conic starts at 32 and color at 48).
struct Splat {
    center: vec2<f32>,  // pixel coordinates, y down (matches CUDA point_image + 0.5)
    ext0: vec2<f32>,    // quad half-axis 0 in pixels (eigenvector · sqrt(λ0·t))
    ext1: vec2<f32>,    // quad half-axis 1 in pixels
    conic: vec3<f32>,   // (a, b, c): q = a dx² + 2b dx dy + c dy²
    thr: f32,           // cutoff on q (0 = splat culled, draw degenerate)
    color: vec4<f32>,   // rgb (SH + 0.5, clamped ≥ 0), a = opacity
};

const SH_C0: f32 = 0.28209479177387814;
const SH_C1: f32 = 0.4886025119029199;
const SH_C2 = array<f32, 5>(1.0925484305920792, -1.0925484305920792, 0.31539156525252005, -1.0925484305920792, 0.5462742152960396);
const SH_C3 = array<f32, 7>(-0.5900435899266435, 2.890611442640554, -0.4570457994644658, 0.3731763325901154, -0.4570457994644658, 1.445305721320277, -0.5900435899266435);

// f16 SH coefficients packed two-per-u32 (sh_coefs[k]), stride 3·(deg+1)² per Gaussian.
fn sh_at(base: u32, k: u32) -> vec3<f32> {
    let i = base + 3u * k;
    return vec3<f32>(unpack2x16float(sh_coefs[i >> 1u])[i & 1u],
                     unpack2x16float(sh_coefs[(i + 1u) >> 1u])[(i + 1u) & 1u],
                     unpack2x16float(sh_coefs[(i + 2u) >> 1u])[(i + 2u) & 1u]);
}

fn eval_sh(idx: u32, deg: u32, dir: vec3<f32>) -> vec3<f32> {
    let K = (deg + 1u) * (deg + 1u);
    let base = idx * 3u * K;
    var r = SH_C0 * sh_at(base, 0u);
    if deg > 0u {
        let x = dir.x; let y = dir.y; let z = dir.z;
        r += -SH_C1 * y * sh_at(base, 1u) + SH_C1 * z * sh_at(base, 2u) - SH_C1 * x * sh_at(base, 3u);
        if deg > 1u {
            let xx = x * x; let yy = y * y; let zz = z * z;
            let xy = x * y; let yz = y * z; let xz = x * z;
            r += SH_C2[0] * xy * sh_at(base, 4u) + SH_C2[1] * yz * sh_at(base, 5u)
               + SH_C2[2] * (2.0 * zz - xx - yy) * sh_at(base, 6u)
               + SH_C2[3] * xz * sh_at(base, 7u) + SH_C2[4] * (xx - yy) * sh_at(base, 8u);
            if deg > 2u {
                r += SH_C3[0] * y * (3.0 * xx - yy) * sh_at(base, 9u)
                   + SH_C3[1] * xy * z * sh_at(base, 10u)
                   + SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_at(base, 11u)
                   + SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_at(base, 12u)
                   + SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_at(base, 13u)
                   + SH_C3[5] * z * (xx - yy) * sh_at(base, 14u)
                   + SH_C3[6] * x * (xx - 3.0 * yy) * sh_at(base, 15u);
            }
        }
    }
    return max(r + 0.5, vec3<f32>(0.0));
}

// Gaussian record: pos(3) opacity(1) cov3d(6: xx xy xz yy yz zz) = 40 B. Scalar fields on purpose:
// a vec3 member would give the struct 16-byte alignment and a 48-byte stride.
struct Gauss { px: f32, py: f32, pz: f32, opacity: f32, cov: array<f32, 6> };
fn gpos(g: Gauss) -> vec3<f32> { return vec3<f32>(g.px, g.py, g.pz); }

// 2D covariance in PIXELS (x right, y down) incl. the +0.3 low-pass. Returns (a, b, c).
fn cov2d(g: Gauss, t_in: vec3<f32>) -> vec3<f32> {
    let focal = camera.focal;
    let tanfov = 0.5 * camera.viewport / focal;
    var t = t_in;
    let lim = 1.3 * tanfov;
    t.x = clamp(t.x / t.z, -lim.x, lim.x) * t.z;
    t.y = clamp(t.y / t.z, -lim.y, lim.y) * t.z;
    // rows of J·W (J = [[fx/z, 0, -fx x/z²], [0, fy/z, -fy y/z²]], W = world→camera rotation)
    let j0 = vec3<f32>(focal.x / t.z, 0.0, -focal.x * t.x / (t.z * t.z));
    let j1 = vec3<f32>(0.0, focal.y / t.z, -focal.y * t.y / (t.z * t.z));
    let W = mat3x3<f32>(camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz);
    let V = mat3x3<f32>(g.cov[0], g.cov[1], g.cov[2],
                        g.cov[1], g.cov[3], g.cov[4],
                        g.cov[2], g.cov[4], g.cov[5]);
    let S = W * V * transpose(W);
    return vec3<f32>(dot(j0, S * j0) + 0.3, dot(j0, S * j1), dot(j1, S * j1) + 0.3);
}

// Fills a Splat for covariance c2 / opacity op / colour rgb. \`alive\` false when culled.
fn make_splat(clip: vec4<f32>, c2: vec3<f32>, op: f32, rgb: vec3<f32>, mult: f32, out_s: ptr<function, Splat>) -> bool {
    let det = c2.x * c2.z - c2.y * c2.y;
    if det <= 0.0 || op < 1.0 / 255.0 { return false; }
    let inv = 1.0 / det;
    let conic = vec3<f32>(c2.z * inv, -c2.y * inv, c2.x * inv);
    // alpha = op·exp(-q/2) ≥ 1/255  ⇔  q ≤ 2 ln(255 op); FastGS eval scales that level by \`mult\`.
    let thr = mult * 2.0 * log(255.0 * op);
    let mid = 0.5 * (c2.x + c2.z);
    let rad = sqrt(max(mid * mid - det, 0.0));
    let l0 = mid + rad;
    let l1 = max(mid - rad, 1e-6);
    var e0 = vec2<f32>(c2.y, l0 - c2.x);
    if abs(c2.y) < 1e-12 { e0 = select(vec2<f32>(0.0, 1.0), vec2<f32>(1.0, 0.0), c2.x >= c2.z); }
    e0 = normalize(e0);
    let e1 = vec2<f32>(-e0.y, e0.x);
    let ndc = clip.xy / clip.w;
    let center = vec2<f32>((ndc.x + 1.0) * 0.5 * camera.viewport.x, (1.0 - ndc.y) * 0.5 * camera.viewport.y);
    let ext0 = e0 * sqrt(l0 * thr);
    let ext1 = e1 * sqrt(l1 * thr);
    let reach = abs(ext0) + abs(ext1);
    if center.x + reach.x < 0.0 || center.y + reach.y < 0.0 ||
       center.x - reach.x > camera.viewport.x || center.y - reach.y > camera.viewport.y { return false; }
    (*out_s) = Splat(center, ext0, ext1, conic, thr, vec4<f32>(rgb, op));
    return true;
}
`,xt=`// Sorted 3DGS path (FastGS, Speedy-Splat), pass 1 of 3: frustum cull + EWA projection +
// SH colour + depth key, compacted into [0, keys_size) with the websplatter per-workgroup
// prefix sum. Pass 2 = the viewer's radix sort, pass 3 = gs_raster.wgsl.
// Prepended with common.wgsl.

const WG_SIZE = 256u;

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> params: BenchParams;

@group(1) @binding(0) var<storage, read> gauss: array<Gauss>;
@group(1) @binding(1) var<storage, read> sh_coefs: array<u32>;
@group(1) @binding(2) var<storage, read_write> splats: array<Splat>;

@group(2) @binding(0) var<storage, read_write> sort_infos: GeneralInfo;
@group(2) @binding(1) var<storage, read_write> sort_depths: array<u32>;
@group(2) @binding(2) var<storage, read_write> sort_indices: array<u32>;

var<workgroup> scan0: array<u32, WG_SIZE>;
var<workgroup> scan1: array<u32, WG_SIZE>;
var<workgroup> group_base: u32;

@compute @workgroup_size(WG_SIZE)
fn cull(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    var alive = 0u;
    var s: Splat;
    var z = 0.0;
    let idx = gid.x;
    if idx < params.n {
        let g = gauss[idx];
        let cam = camera.view * vec4<f32>(gpos(g), 1.0);
        if cam.z > 0.2 {
            let clip = camera.proj * cam;
            let c2 = cov2d(g, cam.xyz);
            let campos = camera.view_inv[3].xyz;
            let rgb = eval_sh(idx, params.sh_degree, normalize(gpos(g) - campos));
            if make_splat(clip, c2, g.opacity, rgb, params.cutoff_mult, &s) {
                alive = 1u;
                z = cam.z;
            }
        }
    }
    scan0[lid.x] = alive;
    workgroupBarrier();
    if (lid.x >= 1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x == 0u) {
        let group_cnt = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) { group_base = atomicAdd(&sort_infos.keys_size, group_cnt); }
    }
    workgroupBarrier();
    if (alive == 1u) {
        let slot = group_base + scan0[lid.x] - 1u;
        splats[slot] = s;
        // ascending radix order must be far → near (back-to-front over-blending). Positive f32 bit
        // patterns sort like the values, so key on 1/z: full relative precision. (A \`C - z\` key
        // collapses nearby depths onto one f32 — 1e6 - z steps in 6 cm — and cost 1.8 dB.)
        sort_depths[slot] = bitcast<u32>(1.0 / z);
        sort_indices[slot] = slot;
    }
}
`,_t=`// Mobile-GS (Du et al., ICLR'26) compute passes, a line-by-line port of their released
// inference path (gaussian_renderer.render + diff-gaussian-rasterization_ms_nosorting):
//   cull : in_frustum (view z > 0.2) + compaction of the visible Gaussians (no sort).
//   mlp  : per-FRAME opacity/phi MLP on every visible Gaussian (scene.gaussian_model.OpaictyPhiNN):
//          in = [normalize(sh[4×3]), viewdir, normalize(scale), rot(r,x,y,z)] (22)
//          → 256 relu → 128 relu → 64 → { phi = relu(64→1), opacity = sigmoid(64→1) }.
//          Their CUDA runs it on ALL Gaussians before culling; running it on the visible set
//          is strictly cheaper, so this does not handicap the method.
//   prep : EWA projection with the MLP opacity, SH1 colour, sort-free blend weight
//          w = exp(max_s / d) + phi / d² + phi², and their tile-fill cull (opacity·w < 1/255).
// Prepended with common.wgsl.

const WG_SIZE = 256u;
const IN = 22u;
const H1 = 256u;
const H2 = 128u;
const H3 = 64u;
// offsets into \`mlp_w\`: W0 b0 W1 b1 W2 b2 Wphi bphi Wop bop. Weight matrices are uploaded
// TRANSPOSED to [in, out] so that in the cooperative path consecutive threads (= consecutive
// output neurons j) read consecutive addresses.
const O_B0 = IN * H1;
const O_W1 = O_B0 + H1;
const O_B1 = O_W1 + H1 * H2;
const O_W2 = O_B1 + H2;
const O_B2 = O_W2 + H2 * H3;
const O_WP = O_B2 + H3;
const O_BP = O_WP + H3;
const O_WO = O_BP + 1u;
const O_BO = O_WO + H3;

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> params: BenchParams;

@group(1) @binding(0) var<storage, read> gauss: array<Gauss>;
@group(1) @binding(1) var<storage, read> sh_coefs: array<u32>;
@group(1) @binding(2) var<storage, read> attr: array<f32>;          // scale xyz, rot r x y z (stride 7)
@group(1) @binding(3) var<storage, read> mlp_w: array<f32>;

// group 2 is bound by every pass. It carries a COPY of keys_size (count) instead of the sort-info
// buffer itself, because mlp/prep dispatch indirectly from that buffer and WebGPU forbids a
// writable storage binding of an indirect buffer in the same pass.
struct Count { keys_size: u32 };
@group(2) @binding(0) var<storage, read> count: Count;
@group(2) @binding(1) var<storage, read_write> vis: array<u32>;         // slot -> Gaussian id
@group(2) @binding(2) var<storage, read_write> mlp_out: array<f32>;     // Gaussian id -> (phi, opacity)
@group(2) @binding(3) var<storage, read_write> splats: array<Splat>;
@group(2) @binding(4) var<storage, read_write> weights: array<f32>;     // slot -> blend weight · w_scale

@group(3) @binding(0) var<storage, read_write> sort_infos: GeneralInfo;   // cull only

var<workgroup> scan0: array<u32, WG_SIZE>;
var<workgroup> scan1: array<u32, WG_SIZE>;
var<workgroup> group_base: u32;

@compute @workgroup_size(WG_SIZE)
fn cull(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    var alive = 0u;
    let idx = gid.x;
    if idx < params.n {
        let cam = camera.view * vec4<f32>(gpos(gauss[idx]), 1.0);
        if cam.z > 0.2 { alive = 1u; }
    }
    scan0[lid.x] = alive;
    workgroupBarrier();
    if (lid.x >= 1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x == 0u) {
        let group_cnt = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) { group_base = atomicAdd(&sort_infos.keys_size, group_cnt); }
    }
    workgroupBarrier();
    if (alive == 1u) {
        vis[group_base + scan0[lid.x] - 1u] = idx;
    }
}

// Reference implementation: one Gaussian per invocation. Correct but it needs 1.5 KB of
// PRIVATE storage per thread for h1/h2, which spills to scratch memory — measured 190 ms/frame
// on a phone vs 4.6 ms for the same frame with the MLP frozen. \`mlp_coop\` below is the one the
// renderer uses; this stays as the numerical reference for the offline port check.
fn mlp_eval(idx: u32) -> vec2<f32> {
    var x: array<f32, 22>;
    // normalize(sh.view(N, -1)): coefficient-major [c0r c0g c0b c1r ...], F.normalize eps 1e-12
    var sh: array<f32, 12>;
    var n2 = 0.0;
    let base = idx * 12u;
    for (var k = 0u; k < 12u; k++) {
        let i = base + k;
        sh[k] = unpack2x16float(sh_coefs[i >> 1u])[i & 1u];
        n2 += sh[k] * sh[k];
    }
    let inv_sh = 1.0 / max(sqrt(n2), 1e-12);
    for (var k = 0u; k < 12u; k++) { x[k] = sh[k] * inv_sh; }
    let campos = camera.view_inv[3].xyz;
    let dir = normalize(gpos(gauss[idx]) - campos);
    x[12] = dir.x; x[13] = dir.y; x[14] = dir.z;
    let a = idx * 7u;
    let sc = vec3<f32>(attr[a], attr[a + 1u], attr[a + 2u]);
    let scn = sc / max(length(sc), 1e-12);
    x[15] = scn.x; x[16] = scn.y; x[17] = scn.z;
    x[18] = attr[a + 3u]; x[19] = attr[a + 4u]; x[20] = attr[a + 5u]; x[21] = attr[a + 6u];

    var h1: array<f32, 256>;
    for (var j = 0u; j < H1; j++) {
        var s = mlp_w[O_B0 + j];
        for (var i = 0u; i < IN; i++) { s += mlp_w[i * H1 + j] * x[i]; }
        h1[j] = max(s, 0.0);
    }
    var h2: array<f32, 128>;
    for (var j = 0u; j < H2; j++) {
        var s = mlp_w[O_B1 + j];
        for (var i = 0u; i < H1; i++) { s += mlp_w[O_W1 + i * H2 + j] * h1[i]; }
        h2[j] = max(s, 0.0);
    }
    var sp = mlp_w[O_BP];
    var so = mlp_w[O_BO];
    for (var j = 0u; j < H3; j++) {
        var s = mlp_w[O_B2 + j];
        for (var i = 0u; i < H2; i++) { s += mlp_w[O_W2 + i * H3 + j] * h2[i]; }
        // main.4 has no activation; both heads read h3 directly
        sp += mlp_w[O_WP + j] * s;
        so += mlp_w[O_WO + j] * s;
    }
    return vec2<f32>(max(sp, 0.0), 1.0 / (1.0 + exp(-so)));
}

@compute @workgroup_size(WG_SIZE)
fn mlp(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= count.keys_size { return; }
    let idx = vis[gid.x];
    let o = mlp_eval(idx);
    mlp_out[idx * 2u] = o.x;
    mlp_out[idx * 2u + 1u] = o.y;
}

// Frozen-MLP ablation: evaluate every Gaussian once at the current camera, in chunks starting
// at params.mlp_base (one huge dispatch can trip a mobile GPU watchdog).
@compute @workgroup_size(WG_SIZE)
fn mlp_all(@builtin(global_invocation_id) gid: vec3<u32>) {
    let idx = gid.x + params.mlp_base;
    if idx >= params.n { return; }
    let o = mlp_eval(idx);
    mlp_out[idx * 2u] = o.x;
    mlp_out[idx * 2u + 1u] = o.y;
}


// ---------------------------------------------------------------------------------------------
// Cooperative, batched MLP: a workgroup evaluates B = 8 Gaussians at once, one output neuron per
// thread, with the 8 accumulators in registers so every weight load feeds 8 MACs and all
// activations live in workgroup memory (15 KB, under the 16 KB WebGPU floor). Each workgroup
// walks TILE = 256 Gaussians (32 batches) so the dispatch matches the indirect triple.
// 5090, 467k visible: reference 44 ms → 1-Gaussian cooperative 32 ms → this version (see below).

const TILE = 256u;
const B = 8u;

var<workgroup> s_idx: array<u32, 8>;
var<workgroup> s_ok: array<u32, 8>;
var<workgroup> s_x: array<f32, 176>;     // [b*22 + i]
var<workgroup> s_h1: array<f32, 2048>;   // [b*256 + j]
var<workgroup> s_h2: array<f32, 1024>;   // [b*128 + j]
var<workgroup> s_h3: array<f32, 512>;    // [b*64 + j]

/** Evaluates the batch described by s_idx / s_ok. All 256 threads call it in lockstep. */
fn mlp_batch(lid: u32) {
    if lid < B {
        let idx = s_idx[lid];
        let o = lid * IN;
        var n2 = 0.0;
        let base = idx * 12u;
        for (var k = 0u; k < 12u; k++) {
            let i = base + k;
            let v = unpack2x16float(sh_coefs[i >> 1u])[i & 1u];
            s_x[o + k] = v;
            n2 += v * v;
        }
        let inv_sh = 1.0 / max(sqrt(n2), 1e-12);
        for (var k = 0u; k < 12u; k++) { s_x[o + k] = s_x[o + k] * inv_sh; }
        let dir = normalize(gpos(gauss[idx]) - camera.view_inv[3].xyz);
        s_x[o + 12u] = dir.x; s_x[o + 13u] = dir.y; s_x[o + 14u] = dir.z;
        let a = idx * 7u;
        let sc = vec3<f32>(attr[a], attr[a + 1u], attr[a + 2u]);
        let scn = sc / max(length(sc), 1e-12);
        s_x[o + 15u] = scn.x; s_x[o + 16u] = scn.y; s_x[o + 17u] = scn.z;
        s_x[o + 18u] = attr[a + 3u]; s_x[o + 19u] = attr[a + 4u]; s_x[o + 20u] = attr[a + 5u]; s_x[o + 21u] = attr[a + 6u];
    }
    workgroupBarrier();
    {   // layer 1: neuron lid, all 8 Gaussians
        let bias = mlp_w[O_B0 + lid];
        var acc = array<f32, 8>(bias, bias, bias, bias, bias, bias, bias, bias);
        for (var i = 0u; i < IN; i++) {
            let w = mlp_w[i * H1 + lid];
            for (var b = 0u; b < B; b++) { acc[b] += w * s_x[b * IN + i]; }
        }
        for (var b = 0u; b < B; b++) { s_h1[b * H1 + lid] = max(acc[b], 0.0); }
    }
    workgroupBarrier();
    {   // layer 2: 128 neurons × 2 halves of 4 Gaussians
        let j = lid & 127u;
        let g0 = (lid >> 7u) * 4u;
        let bias = mlp_w[O_B1 + j];
        var acc = array<f32, 4>(bias, bias, bias, bias);
        for (var i = 0u; i < H1; i++) {
            let w = mlp_w[O_W1 + i * H2 + j];
            for (var b = 0u; b < 4u; b++) { acc[b] += w * s_h1[(g0 + b) * H1 + i]; }
        }
        for (var b = 0u; b < 4u; b++) { s_h2[(g0 + b) * H2 + j] = max(acc[b], 0.0); }
    }
    workgroupBarrier();
    {   // layer 3 (no activation): 64 neurons × 4 groups of 2 Gaussians
        let j = lid & 63u;
        let g0 = (lid >> 6u) * 2u;
        let bias = mlp_w[O_B2 + j];
        var a0 = bias; var a1 = bias;
        for (var i = 0u; i < H2; i++) {
            let w = mlp_w[O_W2 + i * H3 + j];
            a0 += w * s_h2[g0 * H2 + i];
            a1 += w * s_h2[(g0 + 1u) * H2 + i];
        }
        s_h3[g0 * H3 + j] = a0;
        s_h3[(g0 + 1u) * H3 + j] = a1;
    }
    workgroupBarrier();
    if lid < B && s_ok[lid] != 0u {   // heads
        var sp = mlp_w[O_BP];
        var so = mlp_w[O_BO];
        for (var j = 0u; j < H3; j++) {
            let v = s_h3[lid * H3 + j];
            sp += mlp_w[O_WP + j] * v;
            so += mlp_w[O_WO + j] * v;
        }
        let idx = s_idx[lid];
        mlp_out[idx * 2u] = max(sp, 0.0);
        mlp_out[idx * 2u + 1u] = 1.0 / (1.0 + exp(-so));
    }
    workgroupBarrier();   // shared arrays are reused by the next batch
}

// Barriers may not sit in control flow that depends on a buffer value, so the tail workgroup
// evaluates clamped Gaussians instead of exiting early and just drops their writes (s_ok).
@compute @workgroup_size(WG_SIZE)
fn mlp_coop(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    let n = count.keys_size;
    let last = max(n, 1u) - 1u;
    for (var t = 0u; t < TILE; t += B) {
        if lid.x < B {
            let slot = wid.x * TILE + t + lid.x;
            s_idx[lid.x] = vis[min(slot, last)];
            s_ok[lid.x] = u32(slot < n);
        }
        mlp_batch(lid.x);
    }
}

@compute @workgroup_size(WG_SIZE)
fn mlp_all_coop(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    let n = params.n;
    let last = max(n, 1u) - 1u;
    for (var t = 0u; t < TILE; t += B) {
        if lid.x < B {
            let idx = params.mlp_base + wid.x * TILE + t + lid.x;
            s_idx[lid.x] = min(idx, last);
            s_ok[lid.x] = u32(idx < n);
        }
        mlp_batch(lid.x);
    }
}

@compute @workgroup_size(WG_SIZE)
fn prep(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= count.keys_size { return; }
    let slot = gid.x;
    let idx = vis[slot];
    let g = gauss[idx];
    let phi = mlp_out[idx * 2u];
    let op = mlp_out[idx * 2u + 1u];
    let cam = camera.view * vec4<f32>(gpos(g), 1.0);
    let clip = camera.proj * cam;
    let d = max(cam.z, 1e-6);
    let a = idx * 7u;
    let max_s = max(attr[a], max(attr[a + 1u], attr[a + 2u]));
    let w = exp(max_s / d) + phi / (d * d) + phi * phi;
    var s: Splat;
    s.thr = 0.0;
    if op * w >= 1.0 / 255.0 {
        let campos = camera.view_inv[3].xyz;
        let rgb = eval_sh(idx, 1u, normalize(gpos(g) - campos));
        if !make_splat(clip, cov2d(g, cam.xyz), op, rgb, 1.0, &s) { s.thr = 0.0; }
    }
    splats[slot] = s;
    weights[slot] = w * params.w_scale;
}
`,wt=`// Raster pass shared by both bench baselines. One quad per splat, spanned by the 2D
// covariance eigen-axes out to the exact alpha = 1/255 ellipse (SnugBox-tight, so the
// HW rasteriser gets the same coverage Speedy-Splat's tile binning buys on CUDA).
// The fragment evaluates the SAME conic as the CUDA kernels at the pixel centre:
//   q = a dx² + 2b dx dy + c dy²,  alpha = min(0.99, op · exp(-q/2)),  dropped below 1/255.
//
// fs_over : sorted 3DGS (FastGS, Speedy-Splat): premultiplied over-blend, back-to-front.
// fs_wsum : Mobile-GS sort-free blend, two targets:
//           0: rgb += c·α·w, a += α·w   (additive)
//           1: r   *= (1 - α)           (transmittance, cleared to 1)
// \`color.a\` holds opacity; Mobile-GS's per-splat blend weight (·w_scale) comes from \`weights\`.

struct Splat {
    center: vec2<f32>,
    ext0: vec2<f32>,
    ext1: vec2<f32>,
    conic: vec3<f32>,
    thr: f32,
    color: vec4<f32>,
};

struct Viewport { size: vec2<f32>, _p: vec2<f32> };

@group(0) @binding(0) var<storage, read> splats: array<Splat>;
@group(0) @binding(1) var<storage, read> order: array<u32>;     // sorted slots (3DGS only)
@group(0) @binding(2) var<uniform> vp: Viewport;
@group(0) @binding(3) var<storage, read> weights: array<f32>;   // Mobile-GS only: α-weight·w_scale per slot

struct VOut {
    @builtin(position) pos: vec4<f32>,
    @location(0) @interpolate(flat) center: vec2<f32>,
    @location(1) @interpolate(flat) conic: vec3<f32>,
    @location(2) @interpolate(flat) color: vec4<f32>,
    @location(3) @interpolate(flat) thr_w: vec2<f32>,
};

fn quad_vertex(vid: u32, slot: u32, w: f32) -> VOut {
    let s = splats[slot];
    var o: VOut;
    if s.thr <= 0.0 {
        o.pos = vec4<f32>(2.0, 2.0, 2.0, 1.0);   // culled (Mobile-GS keeps its slot): off-screen
        return o;
    }
    let corner = vec2<f32>(f32(vid & 1u) * 2.0 - 1.0, f32((vid >> 1u) & 1u) * 2.0 - 1.0);
    let px = s.center + corner.x * s.ext0 + corner.y * s.ext1;
    o.pos = vec4<f32>(px.x / vp.size.x * 2.0 - 1.0, 1.0 - px.y / vp.size.y * 2.0, 0.0, 1.0);
    o.center = s.center;
    o.conic = s.conic;
    o.color = s.color;
    o.thr_w = vec2<f32>(s.thr, w);
    return o;
}

@vertex
fn vs_main(@builtin(vertex_index) vid: u32, @builtin(instance_index) iid: u32) -> VOut {
    return quad_vertex(vid, order[iid], 1.0);
}

// Mobile-GS: no sort, instance i IS the compacted slot.
@vertex
fn vs_wsum(@builtin(vertex_index) vid: u32, @builtin(instance_index) iid: u32) -> VOut {
    return quad_vertex(vid, iid, weights[iid]);
}

fn alpha_at(i: VOut) -> f32 {
    let d = i.center - i.pos.xy;
    let q = i.conic.x * d.x * d.x + 2.0 * i.conic.y * d.x * d.y + i.conic.z * d.y * d.y;
    if q > i.thr_w.x { return 0.0; }
    let a = min(0.99, i.color.a * exp(-0.5 * q));
    return select(0.0, a, a >= 1.0 / 255.0);
}

@fragment
fn fs_over(i: VOut) -> @location(0) vec4<f32> {
    let a = alpha_at(i);
    if a <= 0.0 { discard; }
    return vec4<f32>(i.color.rgb * a, a);
}

// Fragment counters (overdraw diagnostic, additive blend into an r16float target):
// every rasterized fragment / only the fragments that pass the alpha floor.
@fragment
fn fs_count_raster(i: VOut) -> @location(0) vec4<f32> {
    return vec4<f32>(1.0, 0.0, 0.0, 0.0);
}
@fragment
fn fs_count_shaded(i: VOut) -> @location(0) vec4<f32> {
    let a = alpha_at(i);
    if a <= 0.0 { discard; }
    return vec4<f32>(1.0, 0.0, 0.0, 0.0);
}

struct WOut {
    @location(0) acc: vec4<f32>,
    @location(1) trans: vec4<f32>,
};

@fragment
fn fs_wsum(i: VOut) -> WOut {
    let a = alpha_at(i);
    if a <= 0.0 { discard; }
    let aw = a * i.thr_w.y;
    return WOut(vec4<f32>(i.color.rgb * aw, aw), vec4<f32>(a, 0.0, 0.0, 0.0));
}

`,vt=`// Mobile-GS fullscreen resolve of gs_raster.wgsl's fs_wsum targets: C = (Σcαw / max(Σαw, eps))·(1 - T) + T·bg  (bg = black).
@group(0) @binding(0) var acc_tex: texture_2d<f32>;
@group(0) @binding(1) var trans_tex: texture_2d<f32>;
@group(0) @binding(2) var<uniform> resolve_eps: vec4<f32>;

@vertex
fn vs_full(@builtin(vertex_index) vid: u32) -> @builtin(position) vec4<f32> {
    let p = array(vec2<f32>(-1.0, -1.0), vec2<f32>(3.0, -1.0), vec2<f32>(-1.0, 3.0));
    return vec4<f32>(p[vid], 0.0, 1.0);
}

@fragment
fn fs_resolve(@builtin(position) p: vec4<f32>) -> @location(0) vec4<f32> {
    let q = vec2<i32>(floor(p.xy));
    let acc = textureLoad(acc_tex, q, 0);
    let T = textureLoad(trans_tex, q, 0).r;
    let c = acc.rgb / max(acc.a, resolve_eps.x);
    return vec4<f32>(c * (1.0 - T), 1.0);
}
`,Je=8,de=1<<Je,ye=256,Ye=32/Je;class Bt{constructor(e,n,r){P(this,"depthsIn");P(this,"indicesIn");P(this,"indicesOut");P(this,"owned",[]);P(this,"passes",[]);P(this,"histBg");P(this,"scatterBg");P(this,"prefixBg");P(this,"prefix",{});this.device=e,this.info=r;const h=(Math.floor((n+ye-1)/ye)+1)*ye,i=Math.ceil(h/ye),d=($,H)=>{const L=e.createBuffer({label:$,size:H,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(L),L},f=[0,1].map($=>({d:d(`sort keys ${$}`,h*4),p:d(`sort payload ${$}`,h*4)})),m=d("wg histograms",i*de*4),U=d("wg prefixes",i*de*4),O=d("digit base",de*4),j=Math.ceil(i/ye),N=Math.ceil(j/ye),te=d("l0 sums",j*de*4),_e=d("l0 offsets",j*de*4),me=d("l1 sums",N*de*4),Z=d("l1 offsets",N*de*4);this.depthsIn=f[0].d,this.indicesIn=f[0].p,this.indicesOut=f[Ye&1].p;const E=$=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:$}}),_=e.createBindGroupLayout({entries:[{binding:0,...E("read-only-storage")},{binding:1,...E("read-only-storage")},{binding:2,...E("storage")}]}),fe=e.createBindGroupLayout({entries:[{binding:0,...E("read-only-storage")},{binding:1,...E("read-only-storage")},{binding:2,...E("read-only-storage")},{binding:3,...E("storage")},{binding:4,...E("read-only-storage")},{binding:5,...E("storage")},{binding:6,...E("read-only-storage")}]}),we=e.createBindGroupLayout({entries:[{binding:0,...E("read-only-storage")},{binding:1,...E("read-only-storage")},...[2,3,4,5,6,7].map($=>({binding:$,...E("storage")}))]}),B=e.createShaderModule({label:"bench radix histogram",code:rt}),S=e.createShaderModule({label:"bench radix scatter",code:it}),ne=e.createShaderModule({label:"bench radix prefix",code:ot}),D=e.createPipelineLayout({bindGroupLayouts:[_]}),ie=e.createPipelineLayout({bindGroupLayouts:[fe]});for(let $=0;$<Ye;$++){const H={PASS_ID:$,RS_RADIX_LOG2:Je,RS_RADIX_SIZE:de};this.passes.push({hist:e.createComputePipeline({layout:D,compute:{module:B,entryPoint:"local_histogram_pass",constants:H}}),scatter:e.createComputePipeline({layout:ie,compute:{module:S,entryPoint:"scatter_elements",constants:H}})})}const I=e.createPipelineLayout({bindGroupLayouts:[we]});for(const $ of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[$]=e.createComputePipeline({layout:I,compute:{module:ne,entryPoint:$,constants:{WG_SIZE:ye}}});const c=($,H)=>({binding:$,resource:{buffer:H}});this.prefixBg=e.createBindGroup({layout:we,entries:[c(0,r),c(1,m),c(2,U),c(3,te),c(4,_e),c(5,me),c(6,Z),c(7,O)]}),this.histBg=[0,1].map($=>e.createBindGroup({layout:_,entries:[c(0,r),c(1,f[$].d),c(2,m)]})),this.scatterBg=[0,1].map($=>e.createBindGroup({layout:fe,entries:[c(0,r),c(1,O),c(2,f[$].d),c(3,f[1-$].d),c(4,f[$].p),c(5,f[1-$].p),c(6,U)]}))}encode(e){const n=(r,h,i,d)=>{const f=e.beginComputePass();f.setPipeline(r),f.setBindGroup(0,h),i!==null?f.dispatchWorkgroupsIndirect(this.info,i):f.dispatchWorkgroups(d[0],d[1],1),f.end()};for(let r=0;r<Ye;r++){const h=r&1;n(this.passes[r].hist,this.histBg[h],4),n(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),n(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),n(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,de]),n(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),n(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),n(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),n(this.passes[r].scatter,this.scatterBg[h],4)}}destroy(){for(const e of this.owned)e.destroy()}}const Ve=256,St=64,xe=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class kt{constructor(e,n,r,h,i){P(this,"n");P(this,"kind");P(this,"freezeMlp",!1);P(this,"owned",[]);P(this,"params",new ArrayBuffer(32));P(this,"paramsBuf");P(this,"info");P(this,"drawArgs");P(this,"vpBuf");P(this,"indirectPipe");P(this,"indirectBg");P(this,"computeBgs");P(this,"cullPipe");P(this,"mlpPipe",null);P(this,"mlpAllPipe",null);P(this,"prepPipe",null);P(this,"rasterPipe");P(this,"rasterBg");P(this,"rasterLayout");P(this,"rasterModule");P(this,"countPipes",null);P(this,"sorter",null);P(this,"countCopy",null);P(this,"cullInfoBg",null);P(this,"accTex",null);P(this,"trTex",null);P(this,"resolvePipe",null);P(this,"resolveBgl",null);P(this,"resolveBg",null);P(this,"accFormat");P(this,"wScale");P(this,"eps",null);this.device=e,this.targetFormat=h;const d=n.header;this.n=d.n,this.kind=d.render;const f=d.n,m=(w,W,Y=xe|GPUBufferUsage.COPY_SRC)=>{const ae=e.createBuffer({label:w,size:Math.max(16,W+(4-W%4)%4),usage:Y});return this.owned.push(ae),ae},U=(w,W)=>{const Y=W instanceof ArrayBuffer?new Uint8Array(W):new Uint8Array(W.buffer,W.byteOffset,W.byteLength),ae=m(w,Y.byteLength,xe);return e.queue.writeBuffer(ae,0,Y),ae},O=new Float32Array(n.block("pos")),j=new Float32Array(n.block("cov3d")),N=this.kind==="sorted_3dgs"?new Float32Array(n.block("opacity")):null,te=new Float32Array(f*10);for(let w=0;w<f;w++)te[w*10]=O[w*3],te[w*10+1]=O[w*3+1],te[w*10+2]=O[w*3+2],te[w*10+3]=N?N[w]:1,te.set(j.subarray(w*6,w*6+6),w*10+4);const _e=U("bench gauss",te),me=U("bench sh",n.block("sh"));this.paramsBuf=m("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=i.float32Blend?"rgba32float":"rgba16float",this.wScale=i.float32Blend?1:1/1024;const Z=new Uint32Array(this.params),E=new Float32Array(this.params);Z[0]=f,Z[1]=d.sh_degree,E[2]=i.cutoffMult??d.cutoff_mult??1,E[3]=this.wScale,e.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=m("bench sort info",64,xe|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=m("bench draw args",16,xe|GPUBufferUsage.INDIRECT),e.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=m("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const _=m("bench splats",f*St),fe=e.createShaderModule({label:"bench indirect",code:lt});this.indirectPipe=e.createComputePipeline({layout:"auto",compute:{module:fe,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=e.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const we=GPUShaderStage.COMPUTE,B=(w,W=we)=>e.createBindGroupLayout({entries:w.map((Y,ae)=>({binding:ae,visibility:W,buffer:{type:Y}}))}),S=(w,W)=>({binding:w,resource:{buffer:W}}),ne=B(["uniform","uniform"]),D=e.createBindGroup({layout:ne,entries:[S(0,r),S(1,this.paramsBuf)]});let ie,I;if(this.kind==="sorted_3dgs"){this.sorter=new Bt(e,f,this.info);const w=B(["read-only-storage","read-only-storage","storage"]),W=B(["storage","storage","storage"]),Y=e.createShaderModule({label:"gs3d_cull",code:tt+xt});this.cullPipe=e.createComputePipeline({label:"gs3d_cull",layout:e.createPipelineLayout({bindGroupLayouts:[ne,w,W]}),compute:{module:Y,entryPoint:"cull"}}),this.computeBgs=[D,e.createBindGroup({layout:w,entries:[S(0,_e),S(1,me),S(2,_)]}),e.createBindGroup({layout:W,entries:[S(0,this.info),S(1,this.sorter.depthsIn),S(2,this.sorter.indicesIn)]})],I=this.sorter.indicesOut,ie=m("bench weights stub",16,xe)}else{const w=new Float32Array(n.block("scale")),W=new Float32Array(n.block("rot")),Y=new Float32Array(f*7);for(let z=0;z<f;z++)Y.set(w.subarray(z*3,z*3+3),z*7),Y.set(W.subarray(z*4,z*4+4),z*7+3);const ae=U("bench mgs attr",Y),Ce=(z,le,Oe)=>{const Ee=new Float32Array(z.length);for(let be=0;be<le;be++)for(let Pe=0;Pe<Oe;Pe++)Ee[Pe*le+be]=z[be*Oe+Pe];return Ee},Fe=d.mlp.flatMap(z=>[Ce(new Float32Array(n.block(`${z.name}.weight`)),z.out_dim,z.in_dim),new Float32Array(n.block(`${z.name}.bias`))]),ge=d.mlp.map(z=>`${z.in_dim}>${z.out_dim}`).join(",");if(ge!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${ge}`);const Te=new Float32Array(Fe.reduce((z,le)=>z+le.length,0));let Ue=0;for(const z of Fe)Te.set(z,Ue),Ue+=z.length;const he=U("bench mgs mlp",Te),ve=m("bench mgs vis",f*4),Be=m("bench mgs mlp out",f*8);ie=m("bench mgs weights",f*4),this.countCopy=m("bench mgs count",16,xe);const Se=B(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),J=B(["read-only-storage","storage","storage","storage","storage"]),oe=B(["storage"]),se=e.createShaderModule({label:"mgs_compute",code:tt+_t}),Ae=e.createPipelineLayout({bindGroupLayouts:[ne,Se,J,oe]}),Ie=e.createPipelineLayout({bindGroupLayouts:[ne,Se,J]}),ke=(z,le)=>e.createComputePipeline({label:`mgs_${z}`,layout:le,compute:{module:se,entryPoint:z}});this.cullPipe=ke("cull",Ae),this.mlpPipe=ke("mlp_coop",Ie),this.mlpAllPipe=ke("mlp_all_coop",Ie),this.prepPipe=ke("prep",Ie),this.computeBgs=[D,e.createBindGroup({layout:Se,entries:[S(0,_e),S(1,me),S(2,ae),S(3,he)]}),e.createBindGroup({layout:J,entries:[S(0,this.countCopy),S(1,ve),S(2,Be),S(3,_),S(4,ie)]})],this.cullInfoBg=e.createBindGroup({layout:oe,entries:[S(0,this.info)]}),I=m("bench order stub",16,xe)}const c=GPUShaderStage.VERTEX,$=e.createBindGroupLayout({entries:[{binding:0,visibility:c,buffer:{type:"read-only-storage"}},{binding:1,visibility:c,buffer:{type:"read-only-storage"}},{binding:2,visibility:c,buffer:{type:"uniform"}},{binding:3,visibility:c,buffer:{type:"read-only-storage"}}]});this.rasterBg=e.createBindGroup({layout:$,entries:[S(0,_),S(1,I),S(2,this.vpBuf),S(3,ie)]});const H=e.createShaderModule({label:"gs_raster",code:wt}),L=w=>({operation:"add",srcFactor:"one",dstFactor:w}),a=this.kind==="sorted_3dgs";if(this.rasterLayout=e.createPipelineLayout({bindGroupLayouts:[$]}),this.rasterModule=H,this.rasterPipe=e.createRenderPipeline({label:a?"gs_raster over":"gs_raster wsum",layout:this.rasterLayout,vertex:{module:H,entryPoint:a?"vs_main":"vs_wsum"},fragment:a?{module:H,entryPoint:"fs_over",targets:[{format:h,blend:{color:L("one-minus-src-alpha"),alpha:L("one-minus-src-alpha")}}]}:{module:H,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:L("one"),alpha:L("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!a){this.eps=m("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),e.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const w=GPUShaderStage.FRAGMENT;this.resolveBgl=e.createBindGroupLayout({entries:[{binding:0,visibility:w,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:w,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:w,buffer:{type:"uniform"}}]});const W=e.createShaderModule({label:"mgs_resolve",code:vt});this.resolvePipe=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:W,entryPoint:"vs_full"},fragment:{module:W,entryPoint:"fs_resolve",targets:[{format:h}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(e=32768){if(!this.mlpAllPipe)return;const n=new Uint32Array(this.params);for(let r=0;r<this.n;r+=e){n[4]=r,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const h=this.device.createCommandEncoder(),i=h.beginComputePass();i.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((d,f)=>i.setBindGroup(f,d)),i.dispatchWorkgroups(Math.ceil(Math.min(e,this.n-r)/Ve)),i.end(),this.device.queue.submit([h.finish()]),await this.device.queue.onSubmittedWorkDone()}n[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(e,n){var h,i;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===e&&this.accTex.height===n)return;(h=this.accTex)==null||h.destroy(),(i=this.trTex)==null||i.destroy();const r=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[e,n],format:this.accFormat,usage:r}),this.trTex=this.device.createTexture({label:"mgs T",size:[e,n],format:"r16float",usage:r}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(e,n,r,h){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([r,h,0,0])),this.ensureTargets(r,h);const i=(m,U)=>{const O=e.beginComputePass();O.setPipeline(m),this.computeBgs.forEach((j,N)=>O.setBindGroup(N,j)),!U&&this.cullInfoBg&&O.setBindGroup(3,this.cullInfoBg),U?O.dispatchWorkgroupsIndirect(this.info,4):O.dispatchWorkgroups(Math.ceil(this.n/Ve)),O.end()};e.clearBuffer(this.info,0,4),i(this.cullPipe,!1);{const m=e.beginComputePass();m.setPipeline(this.indirectPipe),m.setBindGroup(0,this.indirectBg),m.dispatchWorkgroups(1),m.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(e);const m=e.beginRenderPass({colorAttachments:[{view:n,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});m.setPipeline(this.rasterPipe),m.setBindGroup(0,this.rasterBg),m.drawIndirect(this.drawArgs,0),m.end();return}e.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||i(this.mlpPipe,!0),i(this.prepPipe,!0);const d=e.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});d.setPipeline(this.rasterPipe),d.setBindGroup(0,this.rasterBg),d.drawIndirect(this.drawArgs,0),d.end();const f=e.beginRenderPass({colorAttachments:[{view:n,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});f.setPipeline(this.resolvePipe),f.setBindGroup(0,this.resolveBg),f.draw(3),f.end()}countFrame(e,n,r,h,i){if(this.kind!=="sorted_3dgs")throw new Error("countFrame: sorted 3DGS only");if(!this.countPipes){const m=U=>this.device.createRenderPipeline({label:`gs_raster ${U}`,layout:this.rasterLayout,vertex:{module:this.rasterModule,entryPoint:"vs_main"},fragment:{module:this.rasterModule,entryPoint:U,targets:[{format:"r16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}});this.countPipes={raster:m("fs_count_raster"),shaded:m("fs_count_shaded")}}this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([r,h,0,0]));const d=(m,U)=>{const O=e.beginComputePass();O.setPipeline(m),this.computeBgs.forEach((j,N)=>O.setBindGroup(N,j)),!U&&this.cullInfoBg&&O.setBindGroup(3,this.cullInfoBg),U?O.dispatchWorkgroupsIndirect(this.info,4):O.dispatchWorkgroups(Math.ceil(this.n/Ve)),O.end()};e.clearBuffer(this.info,0,4),d(this.cullPipe,!1);{const m=e.beginComputePass();m.setPipeline(this.indirectPipe),m.setBindGroup(0,this.indirectBg),m.dispatchWorkgroups(1),m.end()}this.sorter.encode(e);const f=e.beginRenderPass({colorAttachments:[{view:n,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}]});f.setPipeline(i?this.countPipes.shaded:this.countPipes.raster),f.setBindGroup(0,this.rasterBg),f.drawIndirect(this.drawArgs,0),f.end()}destroy(){var e,n,r;for(const h of this.owned)h.destroy();(e=this.sorter)==null||e.destroy(),(n=this.accTex)==null||n.destroy(),(r=this.trTex)==null||r.destroy()}}function Pt(l){const e=l.split("+");if(e[0]!=="bitymi"||e.length<2)return null;const n={oct:!1,f16:!1,packed:!1,kmode:0,noatlas:!1,lean:!1,nolp:!1};for(const r of e.slice(1))if(r==="oct")n.oct=!0;else if(r==="quad")n.oct=!1;else if(r==="f16")n.f16=!0;else if(r==="f32")n.f16=!1;else if(r==="packed")n.packed=!0;else if(r==="kq")n.kmode=1;else if(r==="kflat")n.kmode=2;else if(r==="kgauss")n.kmode=3;else if(r==="klearned")n.kmode=0;else if(r==="noatlas")n.noatlas=!0;else if(r==="lean")n.lean=!0;else if(r==="nolp")n.nolp=!0;else if(r==="vary")n.byid=!1;else if(r==="byid")n.byid=!0;else return null;return n}function Gt(l){const e=Pt(l);if(!e)return null;const n=["learned β","β snapped {0,½,1,2,4}","flat disc","Gaussian"][e.kmode];return{id:l,asset:"bitymi",flags:e,label:`BITYMI (${e.oct?"octagon":"quad"}, ${e.f16?"f16":"f32"}, ${n}${e.packed?", packed":""}${e.noatlas?", atlas off":""}${e.lean?", lean":""}${e.nolp?", no low-pass":""}${e.byid===!1?", varyings":""})`,note:"diagnostic sweep row (renderer flags from the id)"}}function ze(l){if(l.flags)return l.flags;const e=l.base??l.id;return{oct:["bitymi_oct","bitymi_f16","bitymi_packed","bitymi_f16packed","bitymi_lean","bitymi_lean_nolp"].includes(e),f16:e==="bitymi_f16"||e==="bitymi_f16packed",packed:e==="bitymi_packed"||e==="bitymi_f16packed",kmode:0,noatlas:e==="bitymi_noatlas",lean:e==="bitymi_lean"||e==="bitymi_lean_nolp",nolp:e==="bitymi_lean_nolp"}}const pe="rgba8unorm",nt="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",ce=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"bitymi_noatlas",label:"BITYMI (atlas off)",asset:"bitymi",note:"diagnostic: same surfels, no atlas texture fetch (SV colour only)"},{id:"bitymi_oct",label:"BITYMI (octagon bound)",asset:"bitymi",note:"diagnostic: 8-vertex ellipse-tangent bound, ~25% fewer fragments (?oct=1)"},{id:"bitymi_f16",label:"BITYMI (octagon, f16 math)",asset:"bitymi",note:"diagnostic: octagon bound + fragment kernel/colour math in f16 (shader-f16)"},{id:"bitymi_packed",label:"BITYMI (octagon, packed record)",asset:"bitymi",note:"diagnostic: octagon bound + 64 B packed fragment record (f16 conic/depth/scale, f32 uv base)"},{id:"bitymi_f16packed",label:"BITYMI (octagon, f16 + packed)",asset:"bitymi",note:"diagnostic: octagon bound + f16 math + packed record"},{id:"bitymi_lean",label:"BITYMI (lean fragment, octagon)",asset:"bitymi",note:"octagon bound + fragment shader without the viewer-only paths (?lean=1); same image as the stock renderer on baked bundles"},{id:"bitymi_lean_nolp",label:"BITYMI (lean, octagon, no low-pass)",asset:"bitymi",note:"diagnostic: lean fragment + screen-space low-pass fallback off (alpha = opacity · kernel only; sub-pixel surfels alias)"},{id:"bitymi_mip0",label:"BITYMI (mips, bias 0)",asset:"bitymimip",note:"diagnostic: atlas mip chain, full per-surfel prefiltering"},{id:"bitymi_mip1",label:"BITYMI (mips, bias 1)",asset:"bitymimip",note:"diagnostic: atlas mip chain, one level less prefiltering"},{id:"bitymi_mipft0",label:"BITYMI (mip-aware ft, bias 0)",asset:"bitymimipft",note:"atlas finetuned with the bias-0 per-surfel mip rule"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],$t=l=>new Promise(e=>setTimeout(e,l)),je=()=>new Promise(l=>setTimeout(l,0));function Mt(l){const e=new TextDecoder().decode(new Uint8Array(l,0,8));if(e!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${e}')`);const n=new DataView(l);let r=null,h=null;for(let i=0;i<n.getUint32(8,!0);i++){const d=12+i*20,f=n.getUint32(d,!0),m=Number(n.getBigUint64(d+4,!0)),U=Number(n.getBigUint64(d+12,!0));f===0||f===1||f===5?r=l.slice(m,m+U):(f===3||f===4)&&(h=l.slice(m,m+U))}if(!r)throw new Error("bundle has no point cloud chunk");return{pc:r,atlas:h}}async function qe(l,e){var O;const n=await fetch(l);if(!n.ok)throw new Error(`${l}: HTTP ${n.status}`);const r=Number(n.headers.get("content-length"))||0,h=(O=n.body)==null?void 0:O.getReader();if(!h)return n.arrayBuffer();const i=[];let d=0,f=0;for(;;){const{done:j,value:N}=await h.read();if(j)break;i.push(N),d+=N.byteLength,d-f>2<<20&&(f=d,e(d/2**20,r?r/2**20:null))}const m=new Uint8Array(d);let U=0;for(const j of i)m.set(j,U),U+=j.byteLength;return m.buffer}function Ze(l,e,n=new Set,r=0){if(!(!l||typeof l!="object"||n.has(l)||r>2)){n.add(l);for(const h of Object.values(l))e.has(h)||(h instanceof GPUBuffer||h instanceof GPUTexture?h.destroy():Array.isArray(h)?h.forEach(i=>Ze(i,e,n,r+1)):h&&typeof h=="object"&&Object.getPrototypeOf(h)===Object.prototype&&Ze(h,e,n,r+1))}}async function zt(l,e,n,r,h){const i=new URLSearchParams(location.search),d=ht(i,n,pe),f=(t,o,g,v,b,u=!1)=>{if(!d){t.render(o,g,v,b);return}const x=d.lowTarget(v,b);_.setRenderSize(x.w,x.h),t.render(o,x.view,x.w,x.h),u?_.clearRenderSize():_.setRenderSize(v,b),d.pass(o,g,v,b)},m=i.get("scene")??"garden";for(const t of(i.get("only")??"").split(",").map(o=>o.trim()))if(t.startsWith("bitymi+")&&!ce.some(o=>o.id===t)){const o=Gt(t);o&&ce.push(o)}const U=(i.get("assets")??`${nt}/bench/${m}`).replace(/\/$/,""),O=n.features.has("texture-compression-bc"),j=n.features.has("texture-compression-astc"),N=i.get("bitymi")??`${nt}/mip_360/${m}_e3rdraw${O||!j?"":"_astc"}.bitymi`,te=n.features.has("float32-blendable"),_e=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),me=i.get("byid");let Z=me!==null?me==="1":!_e,E=i.get("legacy")==="1";e.configure({device:n,format:pe,alphaMode:"opaque"});const _=new ct(l,n),fe=new bt(_),we=document.getElementById("bench-panel"),B=t=>document.getElementById(t),S=t=>{B("status").textContent=t},ne=await(await fetch(`${U}/manifest.json`)).json(),D=await ut(`${U}/${ne.cameras}`),ie=await(await fetch(`${U}/${ne.cameras}`)).json(),[I,c]=ne.resolution,$=2*Math.atan(c/(2*ie[0].fy));_.setFov($),_.setFocalRatio(ie[0].fx/ie[0].fy),_.set_preset(D[0]),fe.resetToCamera();const H=B("method");for(const t of ce)H.add(new Option(t.label,t.id));const L=r.info;B("device").textContent=`${L.vendor||"?"} ${L.architecture||""} ${L.device||L.description||""}`.trim()+` · BC7 ${O?"✓":"✗"} ASTC ${j?"✓":"✗"} · float32-blend ${te?"✓":"✗"}`;let a=null,w=!1,W=null,Y=null,ae=null;const Ce=i.get("bitymimip")??N.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmip$1.bitymi"),Fe=i.get("bitymimipft")??N.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmipft$1.bitymi"),ge=t=>t==="bitymimip"||t==="bitymimipft",Te=t=>["bitymi_mip0","bitymi_mipft0"].includes(t.base??t.id)?0:1;async function Ue(t){var x,C;const o=performance.now(),g=(k,T)=>S(`${t.label}: downloading ${k.toFixed(0)}${T?` / ${T.toFixed(0)}`:""} MB`);if(t.asset==="bitymi"||ge(t.asset)){const k=t.asset==="bitymi"?W??(W=await qe(N,g)):t.asset==="bitymimip"?Y??(Y=await qe(Ce,g)):ae??(ae=await qe(Fe,g)),T=ze(t),s=T.oct,p=T.f16,G=T.packed,y=T.kmode,A=T.lean;S(`${t.label}: parsing`);const{pc:F,atlas:R}=Mt(k),Q=await dt(new File([F],"bundle.ply"),n);let q=null;R&&(q=await pt(n,ft(R),!0));const ee=new mt(Q,n,pe,_.uniform_buffer,h,q,{fetchById:t.byid??T.byid??Z,octBound:s,acc16:!1,f16:p,packed:G,kmode:y,lean:A});(t.legacy??E)&&ee.setLegacyRenderer(!0),ee.setAtlasEnabled(!T.noatlas),ee.setLowPass(!T.nolp),ge(t.asset)&&ee.setMipLodBias(Te(t));let Ge=0,Re=0;const We=q?q.meta.format===3||q.meta.format===8||q.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:t,prims:Q.num_points,downloadBytes:k.byteLength,gs:ee,oct:s,f16:p,packed:G,kmode:y,lean:A,atlasKind:We,detail:`atlas ${T.noatlas?"OFF (diagnostic)":We} · fragment inputs ${t.byid??T.byid??Z?"fetch-by-id":"varyings"} · ${t.legacy??E?"LEGACY renderer":"current renderer"}${s?" · octagon bound":""}${p?ee.f16?" · f16 math":" · f16 REQUESTED BUT UNAVAILABLE":""}${G?" · packed 64 B record":""}${y?` · kernel mode ${y}`:""}${A?" · lean fragment":""}${T.nolp?" · low-pass OFF":""}${ge(t.asset)?` · atlas mips (${((C=(x=q==null?void 0:q.meta)==null?void 0:x.mip_bytes)==null?void 0:C.length)??1} levels)`:""} · ${(performance.now()-o).toFixed(0)} ms load`,render(He,M,K,X){(K!==Ge||X!==Re)&&(gt(K,X,n,ee.render_settings_buffer),Ge=K,Re=X),ee.frame(He,M,!1)},destroy(){Q.surfel_buffer.destroy(),Q.sv_params_buffer.destroy(),q&&(q.texture.destroy(),q.rectsBuffer.destroy(),q.texParamsBuffer.destroy()),Ze(ee,new Set([_.uniform_buffer]))}}}const v=await qe(`${U}/${ne.methods[t.asset].file}`,g);S(`${t.label}: uploading`);const b=new kt(n,yt(v),_.uniform_buffer,pe,{float32Blend:te});return{def:t,prims:b.n,downloadBytes:v.byteLength,baseline:b,detail:`${b.label}${t.asset==="mobilegs"?` · shipped model ${(ne.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(k,T,s,p)=>b.frame(k,T,s,p),destroy:()=>b.destroy()}}async function he(t){var v,b,u;const o=ze(t),g=(a==null?void 0:a.gs)&&a.def.asset===t.asset&&a.oct===o.oct&&(a.f16??!1)===o.f16&&(a.packed??!1)===o.packed&&(a.kmode??0)===o.kmode&&(a.lean??!1)===o.lean;if(a&&a.def.asset===t.asset&&(a.baseline||g)?(a={...a,def:t},(v=a.gs)==null||v.setAtlasEnabled(!ze(t).noatlas),(b=a.gs)==null||b.setLowPass(!ze(t).nolp),ge(t.asset)&&((u=a.gs)==null||u.setMipLodBias(Te(t))),a.gs&&(a.gs.setFetchById(t.byid??ze(t).byid??Z),a.gs.setLegacyRenderer(t.legacy??E),a.detail=a.detail.replace(/^atlas [^·]+·/,`atlas ${ze(t).noatlas?"OFF (diagnostic)":a.atlasKind} ·`).replace(/fragment inputs [a-z-]+/,`fragment inputs ${t.byid??Z?"fetch-by-id":"varyings"}`).replace(/(LEGACY|current) renderer/,t.legacy??E?"LEGACY renderer":"current renderer"))):(a==null||a.destroy(),a=null,await n.queue.onSubmittedWorkDone(),a=await Ue(t)),a.baseline&&a.baseline.kind==="sortfree_weighted"){const x=t.id==="mobilegs_frozen";x&&(_.set_preset(D[0]),S("Mobile-GS: evaluating the MLP once for all Gaussians"),await a.baseline.computeAllMlp()),a.baseline.freezeMlp=x}return B("info").textContent=`${a.def.label}: ${a.prims.toLocaleString()} primitives · ${(a.downloadBytes/2**20).toFixed(1)} MB download · ${a.detail}`,S("ready"),a}H.onchange=async()=>{if(!(w||se)){w=!0;try{await he(ce.find(t=>t.id===H.value))}catch(t){S(`load failed: ${t}`),console.error(t)}finally{w=!1}}};const ve=B("byid"),Be=B("legacy");ve.checked=Z,Be.checked=E;const Se=async()=>{if(w||se){ve.checked=Z,Be.checked=E;return}if(Z=ve.checked,E=Be.checked,(a==null?void 0:a.def.id)==="bitymi"){w=!0;try{a.destroy(),a=null,await n.queue.onSubmittedWorkDone(),await he(ce[0])}catch(t){S(`load failed: ${t}`),console.error(t)}finally{w=!1}}};ve.onchange=Se,Be.onchange=Se;let J=0;const oe=t=>{J=(t+D.length)%D.length,_.set_preset(D[J]),fe.resetToCamera(),B("view").textContent=`${J+1}/${D.length}`};B("prev").onclick=()=>oe(J-1),B("next").onclick=()=>oe(J+1);let se=!1,Ae=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(Ae=!0)});const Ie=()=>({warmupS:Number(B("warmup").value),measureS:Number(B("measure").value),minFrames:Number(B("minframes").value),maxS:Number(B("maxs").value),cooldownS:Number(B("cooldown").value),rounds:Number(B("rounds").value),frozen:B("frozen").checked,diag:B("diag").checked});window.__setMipBias=t=>{var o;(o=a==null?void 0:a.gs)==null||o.setMipLodBias(t)},window.__mipHistogram=async t=>{const o=a==null?void 0:a.gs;if(!o)throw new Error("BITYMI not loaded");const g=n.createTexture({size:[I,c],format:pe,usage:GPUTextureUsage.RENDER_ATTACHMENT});_.setRenderSize(I,c),_.setFov($),_.set_preset(D[t]);const v=n.createCommandEncoder();f(a,v,g.createView(),I,c);const b=o.splat_2d_buffer.size,u=n.createBuffer({size:b,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),x=n.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});v.copyBufferToBuffer(o.splat_2d_buffer,0,u,0,b),v.copyBufferToBuffer(o.sort_info_buffer,0,x,0,16),n.queue.submit([v.finish()]),await Promise.all([u.mapAsync(GPUMapMode.READ),x.mapAsync(GPUMapMode.READ)]);const C=new Uint32Array(x.getMappedRange())[0],k=new Uint32Array(u.getMappedRange()),T=new Float32Array(k.buffer),s=[0,0,0,0,0],p=[0,0,0,0,0],G=y=>{const A=y>>10&31,F=y&1023;return A===0?F/1024*2**-14:2**(A-15)*(1+F/1024)};for(let y=0;y<C;y++){const A=Math.min(4,Math.round(T[y*24+23])),F=k[y*24+11],R=4*G(F&65535)*G(F>>>16);s[A]++,p[A]+=R}return u.unmap(),x.unmap(),u.destroy(),x.destroy(),g.destroy(),_.clearRenderSize(),_.setFov($),oe(J),{n:C,cnt:s,area:p}},window.__setMipMode=t=>{var o;(o=a==null?void 0:a.gs)==null||o.setMipMode(t)},window.__overdraw=async t=>{if(!a)throw new Error("nothing loaded");_.setRenderSize(I,c),_.setFov($),_.set_preset(D[t]);const o={w:I,h:c};try{if(a.gs){const g=a.gs;for(const[v,b]of[["raster",2],["shaded",1]]){g.setOverdrawMode(b);const u=n.createTexture({size:[I,c],format:pe,usage:GPUTextureUsage.RENDER_ATTACHMENT}),x=n.createCommandEncoder();a.render(x,u.createView(),I,c),n.queue.submit([x.finish()]),await n.queue.onSubmittedWorkDone(),o[v]=await g.readOverdrawStats(),u.destroy()}g.setOverdrawMode(0)}else if(a.baseline&&a.baseline.kind==="sorted_3dgs")for(const[g,v]of[["raster",!1],["shaded",!0]]){const b=n.createTexture({size:[I,c],format:"r16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),u=Math.ceil(I*2/256)*256,x=n.createBuffer({size:u*c,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=n.createCommandEncoder();a.baseline.countFrame(C,b.createView(),I,c,v),C.copyTextureToBuffer({texture:b},{buffer:x,bytesPerRow:u,rowsPerImage:c},[I,c,1]),n.queue.submit([C.finish()]),await x.mapAsync(GPUMapMode.READ);const k=new Uint16Array(x.getMappedRange()),T=A=>{const F=A>>10&31,R=A&1023;return F===0?R/1024*2**-14:F===31?1/0:2**(F-15)*(1+R/1024)};let s=0,p=0,G=0;for(let A=0;A<c;A++){const F=A*u/2;for(let R=0;R<I;R++){const Q=T(k[F+R]);s+=Q,Q>p&&(p=Q),Q>0&&G++}}const y=I*c;o[g]={mean:s/y,meanCovered:G>0?s/G:0,max:p,coveredFrac:G/y},x.unmap(),x.destroy(),b.destroy()}else throw new Error("overdraw: unsupported method")}finally{_.clearRenderSize(),_.setFov($),oe(J)}return o},window.__benchRender=async t=>{if(!a)throw new Error("nothing loaded");const o=n.createTexture({size:[I,c],format:pe,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),g=Math.ceil(I*4/256)*256,v=n.createBuffer({size:g*c,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});_.setRenderSize(I,c),_.setFov($),_.set_preset(D[t]);const b=n.createCommandEncoder();f(a,b,o.createView(),I,c),b.copyTextureToBuffer({texture:o},{buffer:v,bytesPerRow:g,rowsPerImage:c},[I,c,1]),n.queue.submit([b.finish()]),await v.mapAsync(GPUMapMode.READ);const u=new Uint8Array(v.getMappedRange()),x=new Uint8Array(I*c*4);for(let k=0;k<c;k++)x.set(u.subarray(k*g,k*g+I*4),k*I*4);v.unmap(),v.destroy(),o.destroy(),_.clearRenderSize(),_.setFov($),oe(J);let C="";for(let k=0;k<x.length;k+=32768)C+=String.fromCharCode(...x.subarray(k,k+32768));return{w:I,h:c,b64:btoa(C)}};async function ke(t,o,g){const v=n.createTexture({size:[I,c],format:pe,usage:GPUTextureUsage.RENDER_ATTACHMENT}),b=v.createView();_.setRenderSize(I,c),_.setFov($);let u=0;const x=async s=>{const p=performance.now();for(let G=0;G<s;G++){_.set_preset(D[u++%D.length]);const y=n.createCommandEncoder();f(t,y,b,I,c),n.queue.submit([y.finish()])}return await n.queue.onSubmittedWorkDone(),performance.now()-p};let C=1;const k=(s,p)=>{C=Math.max(1,Math.min(60,Math.round(p*250/Math.max(s,1))))},T=`${t.def.label} · round ${o+1}`;Ae=!1;try{let s=0,p=0;for(;s<g.warmupS*1e3||p<3;){const F=C,R=await x(F);s+=R,p+=F,k(R,F),S(`${T}: warmup ${(s/1e3).toFixed(1)}/${g.warmupS} s`),await je()}let G=0,y=0;const A=[];for(;(G<g.measureS*1e3||y<g.minFrames)&&G<g.maxS*1e3;){const F=C,R=await x(F);G+=R,y+=F,A.push(+(R/F).toFixed(3)),k(R,F),S(`${T}: ${(1e3*y/G).toFixed(1)} FPS · ${y} frames · ${(G/1e3).toFixed(1)} s`),await je()}return{round:o,frames:y,ms:G,fps:1e3*y/G,chunkMsPerFrame:A,interrupted:Ae}}finally{v.destroy(),_.clearRenderSize(),_.setFov($),oe(J)}}let z=null,le=ce;function Oe(t,o){var x;const g=((x=le.find(C=>(C.base??C.id)==="bitymi"))==null?void 0:x.id)??"bitymi",v=t.get(g),b=v&&v.length?v.reduce((C,k)=>C+k.frames,0)/v.reduce((C,k)=>C+k.ms,0)*1e3:0,u=le.filter(C=>t.has(C.id)).map(C=>{const k=t.get(C.id),T=k.length?k.reduce((p,G)=>p+G.frames,0)/k.reduce((p,G)=>p+G.ms,0)*1e3:0,s=o.get(C.id);return`<tr><td>${C.label}</td><td>${s?s.prims.toLocaleString():""}</td><td>${s?(s.bytes/2**20).toFixed(0):""}</td><td>${k.map(p=>p.fps.toFixed(1)+(p.interrupted?"⚠":"")).join(" / ")}</td><td><b>${T?T.toFixed(1):""}</b></td><td>${T?(1e3/T).toFixed(1):""}</td><td>${b&&T&&!C.id.startsWith("bitymi")?(b/T).toFixed(1)+"×":""}</td></tr>`}).join("");B("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${u}</table>`}async function Ee(){var k,T;if(se||w)return;se=!0;const t=Ie(),o=B("benchall");o.disabled=!0,H.disabled=!0;let g=null;try{g=await((k=navigator.wakeLock)==null?void 0:k.request("screen"))}catch{}const v=(T=i.get("only"))==null?void 0:T.split(",").map(s=>s.trim()).filter(Boolean);let b=v!=null&&v.length?v.map(s=>ce.find(p=>p.id===s)).filter(s=>!!s):ce.filter(s=>(t.frozen||s.id!=="mobilegs_frozen")&&(t.diag||!s.id.startsWith("bitymi_")));i.get("combos")==="1"&&(b=b.flatMap(s=>s.asset.startsWith("bitymi")?[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([p,G])=>({...s,base:s.id,byid:p,legacy:G,id:`${s.id}@${p?"byid":"vary"}${G?"+legacy":""}`,label:`${s.label} · ${p?"byid":"varyings"}${G?" · legacy":""}`})):[s])),le=b;const u=new Map,x=new Map,C=new Date().toISOString();try{let s=!0;for(let p=0;p<t.rounds;p++){const G=p%2===0?b:[...b].reverse();for(const y of G){const A=await he(y);if(x.set(y.id,{prims:A.prims,bytes:A.downloadBytes,detail:A.detail}),!s&&t.cooldownS>0)for(let R=t.cooldownS;R>0;R--)S(`cooldown ${R} s (next: ${y.label})`),await $t(1e3);s=!1;const F=await ke(A,p,t);u.has(y.id)||u.set(y.id,[]),u.get(y.id).push(F),Oe(u,x)}}z={kind:"bitymi-mobile-bench",version:1,scene:m,started:C,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:L.vendor,architecture:L.architecture,device:L.device,description:L.description},features:{bc:O,astc:j,float32Blendable:te,timestampQuery:n.features.has("timestamp-query")},resolution:[I,c],fovY:$,cameras:D.length,assets:U,bitymiUrl:N,bitymiVariant:{fetchById:Z,legacy:E},protocol:{...t,order:b.map(p=>p.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm",renderScale:d?d.scale:1,upscaler:d?d.mode:"none"},methods:b.map(p=>({id:p.id,base:p.base,byid:p.byid,legacy:p.legacy,label:p.label,note:p.note,...x.get(p.id),fps:(()=>{const G=u.get(p.id)??[],y=G.reduce((A,F)=>A+F.ms,0);return y?1e3*G.reduce((A,F)=>A+F.frames,0)/y:null})(),rounds:u.get(p.id)??[]}))},S(`done · ${b.length} methods × ${t.rounds} rounds`),B("summary").value=be(z),B("export").style.display=""}catch(s){S(`bench failed: ${s}`),console.error(s)}finally{try{await(g==null?void 0:g.release())}catch{}o.disabled=!1,H.disabled=!1,se=!1,H.value=(a==null?void 0:a.def.id)??"bitymi"}}function be(t){var C,k,T;const o=t.methods.find(s=>(s.base??s.id)==="bitymi"),g=o==null?void 0:o.fps,v=[t.adapter.vendor,t.adapter.architecture,t.adapter.device||t.adapter.description].filter(Boolean).join(" ")||"unknown GPU",b=(((C=t.userAgent.match(/\(([^)]*)\)/))==null?void 0:C[1])??"")+" "+(((k=t.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:k[0])??""),u=t.protocol;return[...u.renderScale&&u.renderScale<1?[`UPSCALED: rendered at ${u.renderScale}x (${Math.round(t.resolution[0]*u.renderScale)}x${Math.round(t.resolution[1]*u.renderScale)}) + ${u.upscaler} upscale to ${t.resolution[0]}x${t.resolution[1]}`]:[],`**${t.scene} render benchmark** · ${v} · ${b.trim()}`,`${t.resolution[0]}×${t.resolution[1]}, ${t.cameras} test views · ${u.rounds} rounds mirrored · warmup ${u.warmupS} s · measure ≥${u.measureS} s / ${u.minFrames} frames · cooldown ${u.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...t.methods.map(s=>{var p;return`| ${s.label} | ${((p=s.prims)==null?void 0:p.toLocaleString())??""} | ${s.bytes?(s.bytes/2**20).toFixed(0):""} | ${s.rounds.map(G=>G.fps.toFixed(1)+(G.interrupted?" (tab hidden)":"")).join(" / ")} | ${s.fps?s.fps.toFixed(1):""} | ${s.fps?(1e3/s.fps).toFixed(1):""} | ${!s.id.startsWith("bitymi")&&g&&s.fps?(g/s.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${(o==null?void 0:o.detail)??((T=t.methods.find(s=>s.id.startsWith("bitymi")))==null?void 0:T.detail)??""}. Mobile-GS blend target: ${t.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}async function Pe(){var s,p,G;if(se||w)return;se=!0;const t=B("abrun");t.disabled=!0,B("benchall").disabled=!0,H.disabled=!0;const o=Number(i.get("slice")??3),g=Number(i.get("cycles")??10),v=i.get("combos")==="1",b=[{id:"stock",label:"BITYMI (no mips)",atlas:!0,mips:!1,bias:1},{id:"noatlas",label:"BITYMI (atlas off)",atlas:!1,mips:!1,bias:1},{id:"mip0",label:"BITYMI (mips, bias 0)",atlas:!0,mips:!0,bias:0},{id:"mip1",label:"BITYMI (mips, bias 1)",atlas:!0,mips:!0,bias:1}],u=v?b.flatMap(y=>[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([A,F])=>({...y,byid:A,legacy:F,id:`${y.id}@${A?"byid":"vary"}${F?"+legacy":""}`,label:`${y.label} · ${A?"byid":"varyings"}${F?" · legacy":""}`}))):b.map(y=>({...y,byid:Z,legacy:E}));let x=null;try{x=await((s=navigator.wakeLock)==null?void 0:s.request("screen"))}catch{}const C=new Date().toISOString(),k=n.createTexture({size:[I,c],format:pe,usage:GPUTextureUsage.RENDER_ATTACHMENT}),T=k.createView();try{const y=await he(ce.find(M=>M.id==="bitymi_mip1")),A=y.gs,F=M=>{A.setFetchById(M.byid),A.setLegacyRenderer(M.legacy),A.setMipLodBias(M.bias),A.setMipMode(M.mips),A.setAtlasEnabled(M.atlas)};_.setRenderSize(I,c),_.setFov($);let R=0;const Q=async M=>{const K=performance.now();for(let X=0;X<M;X++){_.set_preset(D[R++%D.length]);const V=n.createCommandEncoder();f(y,V,T,I,c),n.queue.submit([V.finish()])}return await n.queue.onSubmittedWorkDone(),performance.now()-K};for(const M of u)F(M),S(`A/B warmup: ${M.label}`),await je(),await Q(10);const q={};for(const M of u)q[M.id]=[];for(let M=0;M<g;M++){const K=u.map((X,V)=>u[(V+M)%u.length]);for(const X of K){F(X),await Q(3);let V=0,$e=0,Me=4;for(;V<o*1e3;){const De=await Q(Me);V+=De,$e+=Me,Me=Math.max(1,Math.min(60,Math.round(Me*250/Math.max(De,1))))}q[X.id].push(1e3*$e/V),S(`A/B cycle ${M+1}/${g} · ${X.label}: ${(1e3*$e/V).toFixed(1)} FPS`),await je()}}const ee=u[0].id,Ge=u.map(M=>{const K=q[M.id],X=K.reduce((re,ue)=>re+ue,0)/K.length,V=K.map((re,ue)=>re/q[ee][ue]),$e=V.reduce((re,ue)=>re+ue,0)/V.length,Me=Math.sqrt(V.reduce((re,ue)=>re+(ue-$e)**2,0)/Math.max(1,V.length-1)/V.length),De=Math.sqrt(K.reduce((re,ue)=>re+(ue-X)**2,0)/Math.max(1,K.length-1));return{...M,fps:X,fpsSd:De,ratio:$e,ratioSe:Me,perCycle:K.map(re=>+re.toFixed(2))}}),Re=[L.vendor,L.architecture,L.device||L.description].filter(Boolean).join(" ")||"unknown GPU",We=(((p=navigator.userAgent.match(/\(([^)]*)\)/))==null?void 0:p[1])??"")+" "+(((G=navigator.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:G[0])??""),He=[`**${m} interleaved A/B (BITYMI variants)** · ${Re} · ${We.trim()}`,`${I}×${c}, ${D.length} test views · ${g} cycles × ${u.length} variants × ${o} s slices, rotating order · ratio = paired per-cycle FPS / stock ± s.e.`,"","| variant | FPS (mean ± sd over cycles) | ms/frame | vs stock (paired) |","|---|---:|---:|---:|",...Ge.map(M=>`| ${M.label} | ${M.fps.toFixed(1)} ± ${M.fpsSd.toFixed(1)} | ${(1e3/M.fps).toFixed(2)} | ${M.id===ee?"1.00":`${M.ratio.toFixed(3)} ± ${M.ratioSe.toFixed(3)}`} |`),"",`bundle: ${Ce.split("/").pop()} (mips off = the stock atlas: level 0 is identical) · ${y.detail}`].join(`
`);z={kind:"bitymi-interleaved-ab",version:1,scene:m,started:C,finished:new Date().toISOString(),userAgent:navigator.userAgent,adapter:{vendor:L.vendor,architecture:L.architecture,device:L.device,description:L.description},resolution:[I,c],slice_s:o,cycles:g,variants:Ge},B("summary").value=He,B("results").innerHTML="<table><tr><th>variant</th><th>FPS</th><th>vs stock</th></tr>"+Ge.map(M=>`<tr><td>${M.label}</td><td>${M.fps.toFixed(1)} ± ${M.fpsSd.toFixed(1)}</td><td>${M.id===ee?"1.00":`${M.ratio.toFixed(3)} ± ${M.ratioSe.toFixed(3)}`}</td></tr>`).join("")+"</table>",B("export").style.display="",S(`A/B done · ${g} cycles × ${u.length} variants`),window.__abText=He}catch(y){S(`A/B failed: ${y}`),console.error(y)}finally{k.destroy(),_.clearRenderSize(),_.setFov($),oe(J);try{await(x==null?void 0:x.release())}catch{}t.disabled=!1,B("benchall").disabled=!1,H.disabled=!1,se=!1}}B("abrun").onclick=()=>Pe();const Ke=async(t,o)=>{try{await navigator.clipboard.writeText(t)}catch{const g=B("summary");g.value=t,g.select(),document.execCommand("copy")}S(`${o} copied`)};B("benchall").onclick=()=>Ee(),B("copytable").onclick=()=>{z&&Ke(z.kind==="bitymi-interleaved-ab"?window.__abText:be(z),"table")},B("copy").onclick=()=>{z&&Ke(JSON.stringify(z,null,1),"JSON")},B("download").onclick=()=>{if(!z)return;const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([JSON.stringify(z,null,1)],{type:"application/json"})),t.download=`bench_${m}_${(L.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,t.click()};const Xe=()=>{l.width=Math.max(1,Math.round(l.clientWidth)),l.height=Math.max(1,Math.round(l.clientHeight)),_.on_update_canvas()};new ResizeObserver(Xe).observe(l),Xe();let Qe=performance.now(),Le=0,et=Promise.resolve();async function Ne(){const t=performance.now(),o=Math.min(.1,(t-Qe)/1e3);if(Qe=t,!se&&a&&!w){fe.update(o),await et;const g=a;if(!g||se||w){requestAnimationFrame(Ne);return}const v=performance.now(),b=n.createCommandEncoder();f(g,b,e.getCurrentTexture().createView(),l.width,l.height,!0),n.queue.submit([b.finish()]),et=n.queue.onSubmittedWorkDone().then(()=>{const u=performance.now()-v;Le=Le?.9*Le+.1*u:u,B("live").textContent=`${(1e3/Le).toFixed(0)} FPS live (${l.width}×${l.height}, vsync-capped)`})}requestAnimationFrame(Ne)}requestAnimationFrame(Ne),we.style.display="",H.value="bitymi",w=!0;try{await he(ce[0])}catch(t){S(`load failed: ${t}`),console.error(t)}finally{w=!1}}(async()=>{const l=i=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${i}</p>`)};if(navigator.gpu===void 0)return l("WebGPU is not supported in this browser.");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(e===null)return l("No WebGPU adapter available.");const n=[];for(const i of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable","shader-f16"])e.features.has(i)&&n.push(i);if(e.limits.maxStorageBuffersPerShaderStage<10)return l(`This GPU exposes ${e.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const r=await e.requestDevice({requiredFeatures:n,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:e.limits.maxComputeWorkgroupStorageSize,maxBufferSize:e.limits.maxBufferSize,maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize}});r.lost.then(i=>l(`GPU device lost: ${i.message}`)),r.addEventListener("uncapturederror",i=>{var d;return console.error("[bench] WebGPU error:",((d=i.error)==null?void 0:d.message)??i.error)});const h=document.querySelector("#webgpu-canvas");await zt(h,h.getContext("webgpu"),r,e,n)})();
