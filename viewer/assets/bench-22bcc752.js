var nt=Object.defineProperty;var at=(p,t,n)=>t in p?nt(p,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):p[t]=n;var P=(p,t,n)=>(at(p,typeof t!="symbol"?t+"":t,n),n);import{A as rt,B as st,D as it,E as ot,C as lt,e as ct,l as ut,c as dt,p as pt,G as ft,i as mt}from"./camera-24ebc32d.js";import{u as gt,C as ht}from"./camera-control-3a0d495e.js";function bt(p){const t=new TextDecoder().decode(new Uint8Array(p,0,4));if(t!=="GSB1")throw new Error(`not a GSB1 file (magic '${t}')`);const n=new DataView(p).getUint32(4,!0),c=JSON.parse(new TextDecoder().decode(new Uint8Array(p,8,n))),u=8+n;return{header:c,bytes:p.byteLength,block(s){const o=c.blocks.find(l=>l.name===s);if(!o)throw new Error(`GSB block '${s}' missing`);return p.slice(u+o.offset,u+o.offset+o.nbytes)}}}const Ke=`// Shared by the COMPUTE passes of the bench.html baselines (prepended to each; the including
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
`,yt=`// Sorted 3DGS path (FastGS, Speedy-Splat), pass 1 of 3: frustum cull + EWA projection +
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
`,xt=`// Mobile-GS (Du et al., ICLR'26) compute passes, a line-by-line port of their released
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
`,_t=`// Raster pass shared by both bench baselines. One quad per splat, spanned by the 2D
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

`,wt=`// Mobile-GS fullscreen resolve of gs_raster.wgsl's fs_wsum targets: C = (Σcαw / max(Σαw, eps))·(1 - T) + T·bg  (bg = black).
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
`,Ne=8,oe=1<<Ne,he=256,De=32/Ne;class vt{constructor(t,n,c){P(this,"depthsIn");P(this,"indicesIn");P(this,"indicesOut");P(this,"owned",[]);P(this,"passes",[]);P(this,"histBg");P(this,"scatterBg");P(this,"prefixBg");P(this,"prefix",{});this.device=t,this.info=c;const u=(Math.floor((n+he-1)/he)+1)*he,s=Math.ceil(u/he),o=(k,R)=>{const O=t.createBuffer({label:k,size:R,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return this.owned.push(O),O},l=[0,1].map(k=>({d:o(`sort keys ${k}`,u*4),p:o(`sort payload ${k}`,u*4)})),y=o("wg histograms",s*oe*4),L=o("wg prefixes",s*oe*4),W=o("digit base",oe*4),D=Math.ceil(s/he),q=Math.ceil(D/he),X=o("l0 sums",D*oe*4),ye=o("l0 offsets",D*oe*4),de=o("l1 sums",q*oe*4),Y=o("l1 offsets",q*oe*4);this.depthsIn=l[0].d,this.indicesIn=l[0].p,this.indicesOut=l[De&1].p;const U=k=>({visibility:GPUShaderStage.COMPUTE,buffer:{type:k}}),B=t.createBindGroupLayout({entries:[{binding:0,...U("read-only-storage")},{binding:1,...U("read-only-storage")},{binding:2,...U("storage")}]}),le=t.createBindGroupLayout({entries:[{binding:0,...U("read-only-storage")},{binding:1,...U("read-only-storage")},{binding:2,...U("read-only-storage")},{binding:3,...U("storage")},{binding:4,...U("read-only-storage")},{binding:5,...U("storage")},{binding:6,...U("read-only-storage")}]}),xe=t.createBindGroupLayout({entries:[{binding:0,...U("read-only-storage")},{binding:1,...U("read-only-storage")},...[2,3,4,5,6,7].map(k=>({binding:k,...U("storage")}))]}),x=t.createShaderModule({label:"bench radix histogram",code:rt}),_=t.createShaderModule({label:"bench radix scatter",code:st}),J=t.createShaderModule({label:"bench radix prefix",code:it}),H=t.createPipelineLayout({bindGroupLayouts:[B]}),te=t.createPipelineLayout({bindGroupLayouts:[le]});for(let k=0;k<De;k++){const R={PASS_ID:k,RS_RADIX_LOG2:Ne,RS_RADIX_SIZE:oe};this.passes.push({hist:t.createComputePipeline({layout:H,compute:{module:x,entryPoint:"local_histogram_pass",constants:R}}),scatter:t.createComputePipeline({layout:te,compute:{module:_,entryPoint:"scatter_elements",constants:R}})})}const I=t.createPipelineLayout({bindGroupLayouts:[xe]});for(const k of["prefix_l0_tile_scan","prefix_l1_tile_scan_on_l0_sums","prefix_scan_l1_sums","prefix_add_l1_to_l0_offsets","prefix_add_l0_to_elements","compute_digit_base"])this.prefix[k]=t.createComputePipeline({layout:I,compute:{module:J,entryPoint:k,constants:{WG_SIZE:he}}});const f=(k,R)=>({binding:k,resource:{buffer:R}});this.prefixBg=t.createBindGroup({layout:xe,entries:[f(0,c),f(1,y),f(2,L),f(3,X),f(4,ye),f(5,de),f(6,Y),f(7,W)]}),this.histBg=[0,1].map(k=>t.createBindGroup({layout:B,entries:[f(0,c),f(1,l[k].d),f(2,y)]})),this.scatterBg=[0,1].map(k=>t.createBindGroup({layout:le,entries:[f(0,c),f(1,W),f(2,l[k].d),f(3,l[1-k].d),f(4,l[k].p),f(5,l[1-k].p),f(6,L)]}))}encode(t){const n=(c,u,s,o)=>{const l=t.beginComputePass();l.setPipeline(c),l.setBindGroup(0,u),s!==null?l.dispatchWorkgroupsIndirect(this.info,s):l.dispatchWorkgroups(o[0],o[1],1),l.end()};for(let c=0;c<De;c++){const u=c&1;n(this.passes[c].hist,this.histBg[u],4),n(this.prefix.prefix_l0_tile_scan,this.prefixBg,16),n(this.prefix.prefix_l1_tile_scan_on_l0_sums,this.prefixBg,32),n(this.prefix.prefix_scan_l1_sums,this.prefixBg,null,[1,oe]),n(this.prefix.prefix_add_l1_to_l0_offsets,this.prefixBg,32),n(this.prefix.prefix_add_l0_to_elements,this.prefixBg,16),n(this.prefix.compute_digit_base,this.prefixBg,null,[1,1]),n(this.passes[c].scatter,this.scatterBg[u],4)}}destroy(){for(const t of this.owned)t.destroy()}}const Qe=256,Bt=64,be=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;class St{constructor(t,n,c,u,s){P(this,"n");P(this,"kind");P(this,"freezeMlp",!1);P(this,"owned",[]);P(this,"params",new ArrayBuffer(32));P(this,"paramsBuf");P(this,"info");P(this,"drawArgs");P(this,"vpBuf");P(this,"indirectPipe");P(this,"indirectBg");P(this,"computeBgs");P(this,"cullPipe");P(this,"mlpPipe",null);P(this,"mlpAllPipe",null);P(this,"prepPipe",null);P(this,"rasterPipe");P(this,"rasterBg");P(this,"sorter",null);P(this,"countCopy",null);P(this,"cullInfoBg",null);P(this,"accTex",null);P(this,"trTex",null);P(this,"resolvePipe",null);P(this,"resolveBgl",null);P(this,"resolveBg",null);P(this,"accFormat");P(this,"wScale");P(this,"eps",null);this.device=t,this.targetFormat=u;const o=n.header;this.n=o.n,this.kind=o.render;const l=o.n,y=(h,E,N=be|GPUBufferUsage.COPY_SRC)=>{const K=t.createBuffer({label:h,size:Math.max(16,E+(4-E%4)%4),usage:N});return this.owned.push(K),K},L=(h,E)=>{const N=E instanceof ArrayBuffer?new Uint8Array(E):new Uint8Array(E.buffer,E.byteOffset,E.byteLength),K=y(h,N.byteLength,be);return t.queue.writeBuffer(K,0,N),K},W=new Float32Array(n.block("pos")),D=new Float32Array(n.block("cov3d")),q=this.kind==="sorted_3dgs"?new Float32Array(n.block("opacity")):null,X=new Float32Array(l*10);for(let h=0;h<l;h++)X[h*10]=W[h*3],X[h*10+1]=W[h*3+1],X[h*10+2]=W[h*3+2],X[h*10+3]=q?q[h]:1,X.set(D.subarray(h*6,h*6+6),h*10+4);const ye=L("bench gauss",X),de=L("bench sh",n.block("sh"));this.paramsBuf=y("bench params",32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),this.accFormat=s.float32Blend?"rgba32float":"rgba16float",this.wScale=s.float32Blend?1:1/1024;const Y=new Uint32Array(this.params),U=new Float32Array(this.params);Y[0]=l,Y[1]=o.sh_degree,U[2]=s.cutoffMult??o.cutoff_mult??1,U[3]=this.wScale,t.queue.writeBuffer(this.paramsBuf,0,this.params),this.info=y("bench sort info",64,be|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT),this.drawArgs=y("bench draw args",16,be|GPUBufferUsage.INDIRECT),t.queue.writeBuffer(this.drawArgs,0,new Uint32Array([4,0,0,0])),this.vpBuf=y("bench viewport",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);const B=y("bench splats",l*Bt),le=t.createShaderModule({label:"bench indirect",code:ot});this.indirectPipe=t.createComputePipeline({layout:"auto",compute:{module:le,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBg=t.createBindGroup({layout:this.indirectPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.info}},{binding:1,resource:{buffer:this.drawArgs}}]});const xe=GPUShaderStage.COMPUTE,x=(h,E=xe)=>t.createBindGroupLayout({entries:h.map((N,K)=>({binding:K,visibility:E,buffer:{type:N}}))}),_=(h,E)=>({binding:h,resource:{buffer:E}}),J=x(["uniform","uniform"]),H=t.createBindGroup({layout:J,entries:[_(0,c),_(1,this.paramsBuf)]});let te,I;if(this.kind==="sorted_3dgs"){this.sorter=new vt(t,l,this.info);const h=x(["read-only-storage","read-only-storage","storage"]),E=x(["storage","storage","storage"]),N=t.createShaderModule({label:"gs3d_cull",code:Ke+yt});this.cullPipe=t.createComputePipeline({label:"gs3d_cull",layout:t.createPipelineLayout({bindGroupLayouts:[J,h,E]}),compute:{module:N,entryPoint:"cull"}}),this.computeBgs=[H,t.createBindGroup({layout:h,entries:[_(0,ye),_(1,de),_(2,B)]}),t.createBindGroup({layout:E,entries:[_(0,this.info),_(1,this.sorter.depthsIn),_(2,this.sorter.indicesIn)]})],I=this.sorter.indicesOut,te=y("bench weights stub",16,be)}else{const h=new Float32Array(n.block("scale")),E=new Float32Array(n.block("rot")),N=new Float32Array(l*7);for(let G=0;G<l;G++)N.set(h.subarray(G*3,G*3+3),G*7),N.set(E.subarray(G*4,G*4+4),G*7+3);const K=L("bench mgs attr",N),Fe=(G,ne,Oe)=>{const Ee=new Float32Array(G.length);for(let me=0;me<ne;me++)for(let Se=0;Se<Oe;Se++)Ee[Se*ne+me]=G[me*Oe+Se];return Ee},Ie=o.mlp.flatMap(G=>[Fe(new Float32Array(n.block(`${G.name}.weight`)),G.out_dim,G.in_dim),new Float32Array(n.block(`${G.name}.bias`))]),pe=o.mlp.map(G=>`${G.in_dim}>${G.out_dim}`).join(",");if(pe!=="22>256,256>128,128>64,64>1,64>1")throw new Error(`unexpected Mobile-GS MLP ${pe}`);const ze=new Float32Array(Ie.reduce((G,ne)=>G+ne.length,0));let Ue=0;for(const G of Ie)ze.set(G,Ue),Ue+=G.length;const fe=L("bench mgs mlp",ze),_e=y("bench mgs vis",l*4),we=y("bench mgs mlp out",l*8);te=y("bench mgs weights",l*4),this.countCopy=y("bench mgs count",16,be);const ve=x(["read-only-storage","read-only-storage","read-only-storage","read-only-storage"]),Z=x(["read-only-storage","storage","storage","storage","storage"]),se=x(["storage"]),Q=t.createShaderModule({label:"mgs_compute",code:Ke+xt}),Me=t.createPipelineLayout({bindGroupLayouts:[J,ve,Z,se]}),Te=t.createPipelineLayout({bindGroupLayouts:[J,ve,Z]}),Be=(G,ne)=>t.createComputePipeline({label:`mgs_${G}`,layout:ne,compute:{module:Q,entryPoint:G}});this.cullPipe=Be("cull",Me),this.mlpPipe=Be("mlp_coop",Te),this.mlpAllPipe=Be("mlp_all_coop",Te),this.prepPipe=Be("prep",Te),this.computeBgs=[H,t.createBindGroup({layout:ve,entries:[_(0,ye),_(1,de),_(2,K),_(3,fe)]}),t.createBindGroup({layout:Z,entries:[_(0,this.countCopy),_(1,_e),_(2,we),_(3,B),_(4,te)]})],this.cullInfoBg=t.createBindGroup({layout:se,entries:[_(0,this.info)]}),I=y("bench order stub",16,be)}const f=GPUShaderStage.VERTEX,k=t.createBindGroupLayout({entries:[{binding:0,visibility:f,buffer:{type:"read-only-storage"}},{binding:1,visibility:f,buffer:{type:"read-only-storage"}},{binding:2,visibility:f,buffer:{type:"uniform"}},{binding:3,visibility:f,buffer:{type:"read-only-storage"}}]});this.rasterBg=t.createBindGroup({layout:k,entries:[_(0,B),_(1,I),_(2,this.vpBuf),_(3,te)]});const R=t.createShaderModule({label:"gs_raster",code:_t}),O=h=>({operation:"add",srcFactor:"one",dstFactor:h}),r=this.kind==="sorted_3dgs";if(this.rasterPipe=t.createRenderPipeline({label:r?"gs_raster over":"gs_raster wsum",layout:t.createPipelineLayout({bindGroupLayouts:[k]}),vertex:{module:R,entryPoint:r?"vs_main":"vs_wsum"},fragment:r?{module:R,entryPoint:"fs_over",targets:[{format:u,blend:{color:O("one-minus-src-alpha"),alpha:O("one-minus-src-alpha")}}]}:{module:R,entryPoint:"fs_wsum",targets:[{format:this.accFormat,blend:{color:O("one"),alpha:O("one")}},{format:"r16float",blend:{color:{operation:"add",srcFactor:"zero",dstFactor:"one-minus-src"},alpha:{operation:"add",srcFactor:"zero",dstFactor:"one"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),!r){this.eps=y("bench resolve eps",16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),t.queue.writeBuffer(this.eps,0,new Float32Array([1e-5*this.wScale,0,0,0]));const h=GPUShaderStage.FRAGMENT;this.resolveBgl=t.createBindGroupLayout({entries:[{binding:0,visibility:h,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:h,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:h,buffer:{type:"uniform"}}]});const E=t.createShaderModule({label:"mgs_resolve",code:wt});this.resolvePipe=t.createRenderPipeline({layout:t.createPipelineLayout({bindGroupLayouts:[this.resolveBgl]}),vertex:{module:E,entryPoint:"vs_full"},fragment:{module:E,entryPoint:"fs_resolve",targets:[{format:u}]},primitive:{topology:"triangle-list"}})}}get label(){return this.kind==="sorted_3dgs"?"sorted 3DGS":`sort-free (${this.accFormat})`}get accumulationFormat(){return this.accFormat}async computeAllMlp(t=32768){if(!this.mlpAllPipe)return;const n=new Uint32Array(this.params);for(let c=0;c<this.n;c+=t){n[4]=c,this.device.queue.writeBuffer(this.paramsBuf,0,this.params);const u=this.device.createCommandEncoder(),s=u.beginComputePass();s.setPipeline(this.mlpAllPipe),this.computeBgs.forEach((o,l)=>s.setBindGroup(l,o)),s.dispatchWorkgroups(Math.ceil(Math.min(t,this.n-c)/Qe)),s.end(),this.device.queue.submit([u.finish()]),await this.device.queue.onSubmittedWorkDone()}n[4]=0,this.device.queue.writeBuffer(this.paramsBuf,0,this.params)}ensureTargets(t,n){var u,s;if(this.kind!=="sortfree_weighted"||this.accTex&&this.accTex.width===t&&this.accTex.height===n)return;(u=this.accTex)==null||u.destroy(),(s=this.trTex)==null||s.destroy();const c=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING;this.accTex=this.device.createTexture({label:"mgs acc",size:[t,n],format:this.accFormat,usage:c}),this.trTex=this.device.createTexture({label:"mgs T",size:[t,n],format:"r16float",usage:c}),this.resolveBg=this.device.createBindGroup({layout:this.resolveBgl,entries:[{binding:0,resource:this.accTex.createView()},{binding:1,resource:this.trTex.createView()},{binding:2,resource:{buffer:this.eps}}]})}frame(t,n,c,u){this.device.queue.writeBuffer(this.vpBuf,0,new Float32Array([c,u,0,0])),this.ensureTargets(c,u);const s=(y,L)=>{const W=t.beginComputePass();W.setPipeline(y),this.computeBgs.forEach((D,q)=>W.setBindGroup(q,D)),!L&&this.cullInfoBg&&W.setBindGroup(3,this.cullInfoBg),L?W.dispatchWorkgroupsIndirect(this.info,4):W.dispatchWorkgroups(Math.ceil(this.n/Qe)),W.end()};t.clearBuffer(this.info,0,4),s(this.cullPipe,!1);{const y=t.beginComputePass();y.setPipeline(this.indirectPipe),y.setBindGroup(0,this.indirectBg),y.dispatchWorkgroups(1),y.end()}if(this.kind==="sorted_3dgs"){this.sorter.encode(t);const y=t.beginRenderPass({colorAttachments:[{view:n,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});y.setPipeline(this.rasterPipe),y.setBindGroup(0,this.rasterBg),y.drawIndirect(this.drawArgs,0),y.end();return}t.copyBufferToBuffer(this.info,0,this.countCopy,0,4),this.freezeMlp||s(this.mlpPipe,!0),s(this.prepPipe,!0);const o=t.beginRenderPass({colorAttachments:[{view:this.accTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]},{view:this.trTex.createView(),loadOp:"clear",storeOp:"store",clearValue:[1,0,0,0]}]});o.setPipeline(this.rasterPipe),o.setBindGroup(0,this.rasterBg),o.drawIndirect(this.drawArgs,0),o.end();const l=t.beginRenderPass({colorAttachments:[{view:n,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});l.setPipeline(this.resolvePipe),l.setBindGroup(0,this.resolveBg),l.draw(3),l.end()}destroy(){var t,n,c;for(const u of this.owned)u.destroy();(t=this.sorter)==null||t.destroy(),(n=this.accTex)==null||n.destroy(),(c=this.trTex)==null||c.destroy()}}const ce="rgba8unorm",et="https://huggingface.co/datasets/Nilkel/bitymi-demos/resolve/main",ue=[{id:"bitymi",label:"BITYMI (ours)",asset:"bitymi",note:"baked 2DGS + compressed atlas, stock viewer renderer"},{id:"bitymi_noatlas",label:"BITYMI (atlas off)",asset:"bitymi",note:"diagnostic: same surfels, no atlas texture fetch (SV colour only)"},{id:"bitymi_oct",label:"BITYMI (octagon bound)",asset:"bitymi",note:"diagnostic: 8-vertex ellipse-tangent bound, ~25% fewer fragments (?oct=1)"},{id:"bitymi_mip0",label:"BITYMI (mips, bias 0)",asset:"bitymimip",note:"diagnostic: atlas mip chain, full per-surfel prefiltering"},{id:"bitymi_mip1",label:"BITYMI (mips, bias 1)",asset:"bitymimip",note:"diagnostic: atlas mip chain, one level less prefiltering"},{id:"bitymi_mipft0",label:"BITYMI (mip-aware ft, bias 0)",asset:"bitymimipft",note:"atlas finetuned with the bias-0 per-surfel mip rule"},{id:"fastgs",label:"FastGS",asset:"fastgs",note:"authors checkpoint, sorted 3DGS SH3"},{id:"speedy",label:"Speedy-Splat",asset:"speedy",note:"authors checkpoint, sorted 3DGS SH3"},{id:"mobilegs",label:"Mobile-GS",asset:"mobilegs",note:"authors checkpoint (their decode), sort-free, per-frame MLP"},{id:"mobilegs_frozen",label:"Mobile-GS (MLP frozen)",asset:"mobilegs",note:"ablation: MLP evaluated once, raster cost only"}],Pt=p=>new Promise(t=>setTimeout(t,p)),Re=()=>new Promise(p=>setTimeout(p,0));function kt(p){const t=new TextDecoder().decode(new Uint8Array(p,0,8));if(t!=="BITYMI01")throw new Error(`not a BITYMI bundle ('${t}')`);const n=new DataView(p);let c=null,u=null;for(let s=0;s<n.getUint32(8,!0);s++){const o=12+s*20,l=n.getUint32(o,!0),y=Number(n.getBigUint64(o+4,!0)),L=Number(n.getBigUint64(o+12,!0));l===0||l===1||l===5?c=p.slice(y,y+L):(l===3||l===4)&&(u=p.slice(y,y+L))}if(!c)throw new Error("bundle has no point cloud chunk");return{pc:c,atlas:u}}async function He(p,t){var W;const n=await fetch(p);if(!n.ok)throw new Error(`${p}: HTTP ${n.status}`);const c=Number(n.headers.get("content-length"))||0,u=(W=n.body)==null?void 0:W.getReader();if(!u)return n.arrayBuffer();const s=[];let o=0,l=0;for(;;){const{done:D,value:q}=await u.read();if(D)break;s.push(q),o+=q.byteLength,o-l>2<<20&&(l=o,t(o/2**20,c?c/2**20:null))}const y=new Uint8Array(o);let L=0;for(const D of s)y.set(D,L),L+=D.byteLength;return y.buffer}function qe(p,t,n=new Set,c=0){if(!(!p||typeof p!="object"||n.has(p)||c>2)){n.add(p);for(const u of Object.values(p))t.has(u)||(u instanceof GPUBuffer||u instanceof GPUTexture?u.destroy():Array.isArray(u)?u.forEach(s=>qe(s,t,n,c+1)):u&&typeof u=="object"&&Object.getPrototypeOf(u)===Object.prototype&&qe(u,t,n,c+1))}}async function Gt(p,t,n,c,u){const s=new URLSearchParams(location.search),o=gt(s,n,ce),l=(e,b,m,S,w,g=!1)=>{if(!o){e.render(b,m,S,w);return}const T=o.lowTarget(S,w);B.setRenderSize(T.w,T.h),e.render(b,T.view,T.w,T.h),g?B.clearRenderSize():B.setRenderSize(S,w),o.pass(b,m,S,w)},y=s.get("scene")??"garden",L=(s.get("assets")??`${et}/bench/${y}`).replace(/\/$/,""),W=n.features.has("texture-compression-bc"),D=n.features.has("texture-compression-astc"),q=s.get("bitymi")??`${et}/mip_360/${y}_e3rdraw${W||!D?"":"_astc"}.bitymi`,X=n.features.has("float32-blendable"),ye=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/i.test(navigator.platform),de=s.get("byid");let Y=de!==null?de==="1":!ye,U=s.get("legacy")==="1";t.configure({device:n,format:ce,alphaMode:"opaque"});const B=new lt(p,n),le=new ht(B),xe=document.getElementById("bench-panel"),x=e=>document.getElementById(e),_=e=>{x("status").textContent=e},J=await(await fetch(`${L}/manifest.json`)).json(),H=await ct(`${L}/${J.cameras}`),te=await(await fetch(`${L}/${J.cameras}`)).json(),[I,f]=J.resolution,k=2*Math.atan(f/(2*te[0].fy));B.setFov(k),B.setFocalRatio(te[0].fx/te[0].fy),B.set_preset(H[0]),le.resetToCamera();const R=x("method");for(const e of ue)R.add(new Option(e.label,e.id));const O=c.info;x("device").textContent=`${O.vendor||"?"} ${O.architecture||""} ${O.device||O.description||""}`.trim()+` · BC7 ${W?"✓":"✗"} ASTC ${D?"✓":"✗"} · float32-blend ${X?"✓":"✗"}`;let r=null,h=!1,E=null,N=null,K=null;const Fe=s.get("bitymimip")??q.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmip$1.bitymi"),Ie=s.get("bitymimipft")??q.replace(/_e3rdraw(_astc)?\.bitymi$/,"_e3rdmipft$1.bitymi"),pe=e=>e==="bitymimip"||e==="bitymimipft",ze=e=>["bitymi_mip0","bitymi_mipft0"].includes(e.base??e.id)?0:1;async function Ue(e){var T,A;const b=performance.now(),m=(v,F)=>_(`${e.label}: downloading ${v.toFixed(0)}${F?` / ${F.toFixed(0)}`:""} MB`);if(e.asset==="bitymi"||pe(e.asset)){const v=e.asset==="bitymi"?E??(E=await He(q,m)):e.asset==="bitymimip"?N??(N=await He(Fe,m)):K??(K=await He(Ie,m)),F=(e.base??e.id)==="bitymi_oct";_(`${e.label}: parsing`);const{pc:a,atlas:d}=kt(v),$=await ut(new File([a],"bundle.ply"),n);let i=null;d&&(i=dt(n,pt(d),!0));const M=new ft($,n,ce,B.uniform_buffer,u,i,{fetchById:e.byid??Y,octBound:F,acc16:!1});(e.legacy??U)&&M.setLegacyRenderer(!0),M.setAtlasEnabled((e.base??e.id)!=="bitymi_noatlas"),pe(e.asset)&&M.setMipLodBias(ze(e));let C=0,j=0;const Pe=i?i.meta.format===3||i.meta.format===8||i.meta.format===10?"ASTC":"BC7":"NONE (atlas unsupported: renders SV-only, not comparable)";return{def:e,prims:$.num_points,downloadBytes:v.byteLength,gs:M,oct:F,atlasKind:Pe,detail:`atlas ${(e.base??e.id)==="bitymi_noatlas"?"OFF (diagnostic)":Pe} · fragment inputs ${e.byid??Y?"fetch-by-id":"varyings"} · ${e.legacy??U?"LEGACY renderer":"current renderer"}${F?" · octagon bound":""}${pe(e.asset)?` · atlas mips (${((A=(T=i==null?void 0:i.meta)==null?void 0:T.mip_bytes)==null?void 0:A.length)??1} levels)`:""} · ${(performance.now()-b).toFixed(0)} ms load`,render(ke,Ae,ge,Ce){(ge!==C||Ce!==j)&&(mt(ge,Ce,n,M.render_settings_buffer),C=ge,j=Ce),M.frame(ke,Ae,!1)},destroy(){$.surfel_buffer.destroy(),$.sv_params_buffer.destroy(),i&&(i.texture.destroy(),i.rectsBuffer.destroy(),i.texParamsBuffer.destroy()),qe(M,new Set([B.uniform_buffer]))}}}const S=await He(`${L}/${J.methods[e.asset].file}`,m);_(`${e.label}: uploading`);const w=new St(n,bt(S),B.uniform_buffer,ce,{float32Blend:X});return{def:e,prims:w.n,downloadBytes:S.byteLength,baseline:w,detail:`${w.label}${e.asset==="mobilegs"?` · shipped model ${(J.methods.mobilegs.shipped_bytes/2**20).toFixed(1)} MB (comp.xz, decoded offline)`:""}`,render:(v,F,a,d)=>w.frame(v,F,a,d),destroy:()=>w.destroy()}}async function fe(e){var m,S;const b=(r==null?void 0:r.gs)&&r.def.asset===e.asset&&r.oct===((e.base??e.id)==="bitymi_oct");if(r&&r.def.asset===e.asset&&(r.baseline||b)?(r={...r,def:e},(m=r.gs)==null||m.setAtlasEnabled((e.base??e.id)!=="bitymi_noatlas"),pe(e.asset)&&((S=r.gs)==null||S.setMipLodBias(ze(e))),r.gs&&(r.gs.setFetchById(e.byid??Y),r.gs.setLegacyRenderer(e.legacy??U),r.detail=r.detail.replace(/^atlas [^·]+·/,`atlas ${(e.base??e.id)==="bitymi_noatlas"?"OFF (diagnostic)":r.atlasKind} ·`).replace(/fragment inputs [a-z-]+/,`fragment inputs ${e.byid??Y?"fetch-by-id":"varyings"}`).replace(/(LEGACY|current) renderer/,e.legacy??U?"LEGACY renderer":"current renderer"))):(r==null||r.destroy(),r=null,await n.queue.onSubmittedWorkDone(),r=await Ue(e)),r.baseline&&r.baseline.kind==="sortfree_weighted"){const w=e.id==="mobilegs_frozen";w&&(B.set_preset(H[0]),_("Mobile-GS: evaluating the MLP once for all Gaussians"),await r.baseline.computeAllMlp()),r.baseline.freezeMlp=w}return x("info").textContent=`${r.def.label}: ${r.prims.toLocaleString()} primitives · ${(r.downloadBytes/2**20).toFixed(1)} MB download · ${r.detail}`,_("ready"),r}R.onchange=async()=>{if(!(h||Q)){h=!0;try{await fe(ue.find(e=>e.id===R.value))}catch(e){_(`load failed: ${e}`),console.error(e)}finally{h=!1}}};const _e=x("byid"),we=x("legacy");_e.checked=Y,we.checked=U;const ve=async()=>{if(h||Q){_e.checked=Y,we.checked=U;return}if(Y=_e.checked,U=we.checked,(r==null?void 0:r.def.id)==="bitymi"){h=!0;try{r.destroy(),r=null,await n.queue.onSubmittedWorkDone(),await fe(ue[0])}catch(e){_(`load failed: ${e}`),console.error(e)}finally{h=!1}}};_e.onchange=ve,we.onchange=ve;let Z=0;const se=e=>{Z=(e+H.length)%H.length,B.set_preset(H[Z]),le.resetToCamera(),x("view").textContent=`${Z+1}/${H.length}`};x("prev").onclick=()=>se(Z-1),x("next").onclick=()=>se(Z+1);let Q=!1,Me=!1;document.addEventListener("visibilitychange",()=>{document.hidden&&(Me=!0)});const Te=()=>({warmupS:Number(x("warmup").value),measureS:Number(x("measure").value),minFrames:Number(x("minframes").value),maxS:Number(x("maxs").value),cooldownS:Number(x("cooldown").value),rounds:Number(x("rounds").value),frozen:x("frozen").checked,diag:x("diag").checked});window.__setMipBias=e=>{var b;(b=r==null?void 0:r.gs)==null||b.setMipLodBias(e)},window.__mipHistogram=async e=>{const b=r==null?void 0:r.gs;if(!b)throw new Error("BITYMI not loaded");const m=n.createTexture({size:[I,f],format:ce,usage:GPUTextureUsage.RENDER_ATTACHMENT});B.setRenderSize(I,f),B.setFov(k),B.set_preset(H[e]);const S=n.createCommandEncoder();l(r,S,m.createView(),I,f);const w=b.splat_2d_buffer.size,g=n.createBuffer({size:w,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),T=n.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});S.copyBufferToBuffer(b.splat_2d_buffer,0,g,0,w),S.copyBufferToBuffer(b.sort_info_buffer,0,T,0,16),n.queue.submit([S.finish()]),await Promise.all([g.mapAsync(GPUMapMode.READ),T.mapAsync(GPUMapMode.READ)]);const A=new Uint32Array(T.getMappedRange())[0],v=new Uint32Array(g.getMappedRange()),F=new Float32Array(v.buffer),a=[0,0,0,0,0],d=[0,0,0,0,0],$=i=>{const M=i>>10&31,C=i&1023;return M===0?C/1024*2**-14:2**(M-15)*(1+C/1024)};for(let i=0;i<A;i++){const M=Math.min(4,Math.round(F[i*24+23])),C=v[i*24+11],j=4*$(C&65535)*$(C>>>16);a[M]++,d[M]+=j}return g.unmap(),T.unmap(),g.destroy(),T.destroy(),m.destroy(),B.clearRenderSize(),B.setFov(k),se(Z),{n:A,cnt:a,area:d}},window.__setMipMode=e=>{var b;(b=r==null?void 0:r.gs)==null||b.setMipMode(e)},window.__benchRender=async e=>{if(!r)throw new Error("nothing loaded");const b=n.createTexture({size:[I,f],format:ce,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),m=Math.ceil(I*4/256)*256,S=n.createBuffer({size:m*f,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});B.setRenderSize(I,f),B.setFov(k),B.set_preset(H[e]);const w=n.createCommandEncoder();l(r,w,b.createView(),I,f),w.copyTextureToBuffer({texture:b},{buffer:S,bytesPerRow:m,rowsPerImage:f},[I,f,1]),n.queue.submit([w.finish()]),await S.mapAsync(GPUMapMode.READ);const g=new Uint8Array(S.getMappedRange()),T=new Uint8Array(I*f*4);for(let v=0;v<f;v++)T.set(g.subarray(v*m,v*m+I*4),v*I*4);S.unmap(),S.destroy(),b.destroy(),B.clearRenderSize(),B.setFov(k),se(Z);let A="";for(let v=0;v<T.length;v+=32768)A+=String.fromCharCode(...T.subarray(v,v+32768));return{w:I,h:f,b64:btoa(A)}};async function Be(e,b,m){const S=n.createTexture({size:[I,f],format:ce,usage:GPUTextureUsage.RENDER_ATTACHMENT}),w=S.createView();B.setRenderSize(I,f),B.setFov(k);let g=0;const T=async a=>{const d=performance.now();for(let $=0;$<a;$++){B.set_preset(H[g++%H.length]);const i=n.createCommandEncoder();l(e,i,w,I,f),n.queue.submit([i.finish()])}return await n.queue.onSubmittedWorkDone(),performance.now()-d};let A=1;const v=(a,d)=>{A=Math.max(1,Math.min(60,Math.round(d*250/Math.max(a,1))))},F=`${e.def.label} · round ${b+1}`;Me=!1;try{let a=0,d=0;for(;a<m.warmupS*1e3||d<3;){const C=A,j=await T(C);a+=j,d+=C,v(j,C),_(`${F}: warmup ${(a/1e3).toFixed(1)}/${m.warmupS} s`),await Re()}let $=0,i=0;const M=[];for(;($<m.measureS*1e3||i<m.minFrames)&&$<m.maxS*1e3;){const C=A,j=await T(C);$+=j,i+=C,M.push(+(j/C).toFixed(3)),v(j,C),_(`${F}: ${(1e3*i/$).toFixed(1)} FPS · ${i} frames · ${($/1e3).toFixed(1)} s`),await Re()}return{round:b,frames:i,ms:$,fps:1e3*i/$,chunkMsPerFrame:M,interrupted:Me}}finally{S.destroy(),B.clearRenderSize(),B.setFov(k),se(Z)}}let G=null,ne=ue;function Oe(e,b){var T;const m=((T=ne.find(A=>(A.base??A.id)==="bitymi"))==null?void 0:T.id)??"bitymi",S=e.get(m),w=S&&S.length?S.reduce((A,v)=>A+v.frames,0)/S.reduce((A,v)=>A+v.ms,0)*1e3:0,g=ne.filter(A=>e.has(A.id)).map(A=>{const v=e.get(A.id),F=v.length?v.reduce((d,$)=>d+$.frames,0)/v.reduce((d,$)=>d+$.ms,0)*1e3:0,a=b.get(A.id);return`<tr><td>${A.label}</td><td>${a?a.prims.toLocaleString():""}</td><td>${a?(a.bytes/2**20).toFixed(0):""}</td><td>${v.map(d=>d.fps.toFixed(1)+(d.interrupted?"⚠":"")).join(" / ")}</td><td><b>${F?F.toFixed(1):""}</b></td><td>${F?(1e3/F).toFixed(1):""}</td><td>${w&&F&&!A.id.startsWith("bitymi")?(w/F).toFixed(1)+"×":""}</td></tr>`}).join("");x("results").innerHTML=`<table><tr><th>method</th><th>prims</th><th>MB</th><th>FPS per round</th><th>FPS</th><th>ms</th><th>ours ×</th></tr>${g}</table>`}async function Ee(){var v,F;if(Q||h)return;Q=!0;const e=Te(),b=x("benchall");b.disabled=!0,R.disabled=!0;let m=null;try{m=await((v=navigator.wakeLock)==null?void 0:v.request("screen"))}catch{}const S=(F=s.get("only"))==null?void 0:F.split(",").map(a=>a.trim()).filter(Boolean);let w=S!=null&&S.length?ue.filter(a=>S.includes(a.id)):ue.filter(a=>(e.frozen||a.id!=="mobilegs_frozen")&&(e.diag||!a.id.startsWith("bitymi_")));s.get("combos")==="1"&&(w=w.flatMap(a=>a.asset.startsWith("bitymi")?[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([d,$])=>({...a,base:a.id,byid:d,legacy:$,id:`${a.id}@${d?"byid":"vary"}${$?"+legacy":""}`,label:`${a.label} · ${d?"byid":"varyings"}${$?" · legacy":""}`})):[a])),ne=w;const g=new Map,T=new Map,A=new Date().toISOString();try{let a=!0;for(let d=0;d<e.rounds;d++){const $=d%2===0?w:[...w].reverse();for(const i of $){const M=await fe(i);if(T.set(i.id,{prims:M.prims,bytes:M.downloadBytes,detail:M.detail}),!a&&e.cooldownS>0)for(let j=e.cooldownS;j>0;j--)_(`cooldown ${j} s (next: ${i.label})`),await Pt(1e3);a=!1;const C=await Be(M,d,e);g.has(i.id)||g.set(i.id,[]),g.get(i.id).push(C),Oe(g,T)}}G={kind:"bitymi-mobile-bench",version:1,scene:y,started:A,finished:new Date().toISOString(),userAgent:navigator.userAgent,devicePixelRatio,adapter:{vendor:O.vendor,architecture:O.architecture,device:O.device,description:O.description},features:{bc:W,astc:D,float32Blendable:X,timestampQuery:n.features.has("timestamp-query")},resolution:[I,f],fovY:k,cameras:H.length,assets:L,bitymiUrl:q,bitymiVariant:{fetchById:Y,legacy:U},protocol:{...e,order:w.map(d=>d.id),mirrored:!0,timing:"performance.now around chunked submits fenced by onSubmittedWorkDone, offscreen rgba8unorm",renderScale:o?o.scale:1,upscaler:o?o.mode:"none"},methods:w.map(d=>({id:d.id,base:d.base,byid:d.byid,legacy:d.legacy,label:d.label,note:d.note,...T.get(d.id),fps:(()=>{const $=g.get(d.id)??[],i=$.reduce((M,C)=>M+C.ms,0);return i?1e3*$.reduce((M,C)=>M+C.frames,0)/i:null})(),rounds:g.get(d.id)??[]}))},_(`done · ${w.length} methods × ${e.rounds} rounds`),x("summary").value=me(G),x("export").style.display=""}catch(a){_(`bench failed: ${a}`),console.error(a)}finally{try{await(m==null?void 0:m.release())}catch{}b.disabled=!1,R.disabled=!1,Q=!1,R.value=(r==null?void 0:r.def.id)??"bitymi"}}function me(e){var A,v,F;const b=e.methods.find(a=>(a.base??a.id)==="bitymi"),m=b==null?void 0:b.fps,S=[e.adapter.vendor,e.adapter.architecture,e.adapter.device||e.adapter.description].filter(Boolean).join(" ")||"unknown GPU",w=(((A=e.userAgent.match(/\(([^)]*)\)/))==null?void 0:A[1])??"")+" "+(((v=e.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:v[0])??""),g=e.protocol;return[...g.renderScale&&g.renderScale<1?[`UPSCALED: rendered at ${g.renderScale}x (${Math.round(e.resolution[0]*g.renderScale)}x${Math.round(e.resolution[1]*g.renderScale)}) + ${g.upscaler} upscale to ${e.resolution[0]}x${e.resolution[1]}`]:[],`**${e.scene} render benchmark** · ${S} · ${w.trim()}`,`${e.resolution[0]}×${e.resolution[1]}, ${e.cameras} test views · ${g.rounds} rounds mirrored · warmup ${g.warmupS} s · measure ≥${g.measureS} s / ${g.minFrames} frames · cooldown ${g.cooldownS} s`,"","| method | primitives | download (MB) | FPS per round | FPS | ms/frame | BITYMI speed-up |","|---|---:|---:|---|---:|---:|---:|",...e.methods.map(a=>{var d;return`| ${a.label} | ${((d=a.prims)==null?void 0:d.toLocaleString())??""} | ${a.bytes?(a.bytes/2**20).toFixed(0):""} | ${a.rounds.map($=>$.fps.toFixed(1)+($.interrupted?" (tab hidden)":"")).join(" / ")} | ${a.fps?a.fps.toFixed(1):""} | ${a.fps?(1e3/a.fps).toFixed(1):""} | ${!a.id.startsWith("bitymi")&&m&&a.fps?(m/a.fps).toFixed(2)+"×":""} |`}),"",`BITYMI: ${(b==null?void 0:b.detail)??((F=e.methods.find(a=>a.id.startsWith("bitymi")))==null?void 0:F.detail)??""}. Mobile-GS blend target: ${e.features.float32Blendable?"rgba32float":"rgba16float (float32-blendable unavailable)"}; frozen-MLP row = MLP evaluated once, i.e. raster cost only.`].join(`
`)}async function Se(){var a,d,$;if(Q||h)return;Q=!0;const e=x("abrun");e.disabled=!0,x("benchall").disabled=!0,R.disabled=!0;const b=Number(s.get("slice")??3),m=Number(s.get("cycles")??10),S=s.get("combos")==="1",w=[{id:"stock",label:"BITYMI (no mips)",atlas:!0,mips:!1,bias:1},{id:"noatlas",label:"BITYMI (atlas off)",atlas:!1,mips:!1,bias:1},{id:"mip0",label:"BITYMI (mips, bias 0)",atlas:!0,mips:!0,bias:0},{id:"mip1",label:"BITYMI (mips, bias 1)",atlas:!0,mips:!0,bias:1}],g=S?w.flatMap(i=>[[!0,!1],[!1,!1],[!0,!0],[!1,!0]].map(([M,C])=>({...i,byid:M,legacy:C,id:`${i.id}@${M?"byid":"vary"}${C?"+legacy":""}`,label:`${i.label} · ${M?"byid":"varyings"}${C?" · legacy":""}`}))):w.map(i=>({...i,byid:Y,legacy:U}));let T=null;try{T=await((a=navigator.wakeLock)==null?void 0:a.request("screen"))}catch{}const A=new Date().toISOString(),v=n.createTexture({size:[I,f],format:ce,usage:GPUTextureUsage.RENDER_ATTACHMENT}),F=v.createView();try{const i=await fe(ue.find(z=>z.id==="bitymi_mip1")),M=i.gs,C=z=>{M.setFetchById(z.byid),M.setLegacyRenderer(z.legacy),M.setMipLodBias(z.bias),M.setMipMode(z.mips),M.setAtlasEnabled(z.atlas)};B.setRenderSize(I,f),B.setFov(k);let j=0;const Pe=async z=>{const ae=performance.now();for(let re=0;re<z;re++){B.set_preset(H[j++%H.length]);const V=n.createCommandEncoder();l(i,V,F,I,f),n.queue.submit([V.finish()])}return await n.queue.onSubmittedWorkDone(),performance.now()-ae};for(const z of g)C(z),_(`A/B warmup: ${z.label}`),await Re(),await Pe(10);const ke={};for(const z of g)ke[z.id]=[];for(let z=0;z<m;z++){const ae=g.map((re,V)=>g[(V+z)%g.length]);for(const re of ae){C(re),await Pe(3);let V=0,Ge=0,$e=4;for(;V<b*1e3;){const We=await Pe($e);V+=We,Ge+=$e,$e=Math.max(1,Math.min(60,Math.round($e*250/Math.max(We,1))))}ke[re.id].push(1e3*Ge/V),_(`A/B cycle ${z+1}/${m} · ${re.label}: ${(1e3*Ge/V).toFixed(1)} FPS`),await Re()}}const Ae=g[0].id,ge=g.map(z=>{const ae=ke[z.id],re=ae.reduce((ee,ie)=>ee+ie,0)/ae.length,V=ae.map((ee,ie)=>ee/ke[Ae][ie]),Ge=V.reduce((ee,ie)=>ee+ie,0)/V.length,$e=Math.sqrt(V.reduce((ee,ie)=>ee+(ie-Ge)**2,0)/Math.max(1,V.length-1)/V.length),We=Math.sqrt(ae.reduce((ee,ie)=>ee+(ie-re)**2,0)/Math.max(1,ae.length-1));return{...z,fps:re,fpsSd:We,ratio:Ge,ratioSe:$e,perCycle:ae.map(ee=>+ee.toFixed(2))}}),Ce=[O.vendor,O.architecture,O.device||O.description].filter(Boolean).join(" ")||"unknown GPU",tt=(((d=navigator.userAgent.match(/\(([^)]*)\)/))==null?void 0:d[1])??"")+" "+((($=navigator.userAgent.match(/(Chrome|Firefox|Safari)\/[\d.]+/))==null?void 0:$[0])??""),Je=[`**${y} interleaved A/B (BITYMI variants)** · ${Ce} · ${tt.trim()}`,`${I}×${f}, ${H.length} test views · ${m} cycles × ${g.length} variants × ${b} s slices, rotating order · ratio = paired per-cycle FPS / stock ± s.e.`,"","| variant | FPS (mean ± sd over cycles) | ms/frame | vs stock (paired) |","|---|---:|---:|---:|",...ge.map(z=>`| ${z.label} | ${z.fps.toFixed(1)} ± ${z.fpsSd.toFixed(1)} | ${(1e3/z.fps).toFixed(2)} | ${z.id===Ae?"1.00":`${z.ratio.toFixed(3)} ± ${z.ratioSe.toFixed(3)}`} |`),"",`bundle: ${Fe.split("/").pop()} (mips off = the stock atlas: level 0 is identical) · ${i.detail}`].join(`
`);G={kind:"bitymi-interleaved-ab",version:1,scene:y,started:A,finished:new Date().toISOString(),userAgent:navigator.userAgent,adapter:{vendor:O.vendor,architecture:O.architecture,device:O.device,description:O.description},resolution:[I,f],slice_s:b,cycles:m,variants:ge},x("summary").value=Je,x("results").innerHTML="<table><tr><th>variant</th><th>FPS</th><th>vs stock</th></tr>"+ge.map(z=>`<tr><td>${z.label}</td><td>${z.fps.toFixed(1)} ± ${z.fpsSd.toFixed(1)}</td><td>${z.id===Ae?"1.00":`${z.ratio.toFixed(3)} ± ${z.ratioSe.toFixed(3)}`}</td></tr>`).join("")+"</table>",x("export").style.display="",_(`A/B done · ${m} cycles × ${g.length} variants`),window.__abText=Je}catch(i){_(`A/B failed: ${i}`),console.error(i)}finally{v.destroy(),B.clearRenderSize(),B.setFov(k),se(Z);try{await(T==null?void 0:T.release())}catch{}e.disabled=!1,x("benchall").disabled=!1,R.disabled=!1,Q=!1}}x("abrun").onclick=()=>Se();const Ve=async(e,b)=>{try{await navigator.clipboard.writeText(e)}catch{const m=x("summary");m.value=e,m.select(),document.execCommand("copy")}_(`${b} copied`)};x("benchall").onclick=()=>Ee(),x("copytable").onclick=()=>{G&&Ve(G.kind==="bitymi-interleaved-ab"?window.__abText:me(G),"table")},x("copy").onclick=()=>{G&&Ve(JSON.stringify(G,null,1),"JSON")},x("download").onclick=()=>{if(!G)return;const e=document.createElement("a");e.href=URL.createObjectURL(new Blob([JSON.stringify(G,null,1)],{type:"application/json"})),e.download=`bench_${y}_${(O.vendor||"gpu").replace(/\W+/g,"_")}_${Date.now()}.json`,e.click()};const Ye=()=>{p.width=Math.max(1,Math.round(p.clientWidth)),p.height=Math.max(1,Math.round(p.clientHeight)),B.on_update_canvas()};new ResizeObserver(Ye).observe(p),Ye();let Ze=performance.now(),Le=0,Xe=Promise.resolve();async function je(){const e=performance.now(),b=Math.min(.1,(e-Ze)/1e3);if(Ze=e,!Q&&r&&!h){le.update(b),await Xe;const m=r;if(!m||Q||h){requestAnimationFrame(je);return}const S=performance.now(),w=n.createCommandEncoder();l(m,w,t.getCurrentTexture().createView(),p.width,p.height,!0),n.queue.submit([w.finish()]),Xe=n.queue.onSubmittedWorkDone().then(()=>{const g=performance.now()-S;Le=Le?.9*Le+.1*g:g,x("live").textContent=`${(1e3/Le).toFixed(0)} FPS live (${p.width}×${p.height}, vsync-capped)`})}requestAnimationFrame(je)}requestAnimationFrame(je),xe.style.display="",R.value="bitymi",h=!0;try{await fe(ue[0])}catch(e){_(`load failed: ${e}`),console.error(e)}finally{h=!1}}(async()=>{const p=s=>{document.body.insertAdjacentHTML("afterbegin",`<p style="color:#fff;padding:16px;font:15px sans-serif">${s}</p>`)};if(navigator.gpu===void 0)return p("WebGPU is not supported in this browser.");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t===null)return p("No WebGPU adapter available.");const n=[];for(const s of["timestamp-query","texture-compression-bc","texture-compression-astc","float32-blendable"])t.features.has(s)&&n.push(s);if(t.limits.maxStorageBuffersPerShaderStage<10)return p(`This GPU exposes ${t.limits.maxStorageBuffersPerShaderStage} storage buffers per stage; the renderers need 10.`);const c=await t.requestDevice({requiredFeatures:n,requiredLimits:{maxStorageBuffersPerShaderStage:10,maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxBufferSize:t.limits.maxBufferSize,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize}});c.lost.then(s=>p(`GPU device lost: ${s.message}`)),c.addEventListener("uncapturederror",s=>{var o;return console.error("[bench] WebGPU error:",((o=s.error)==null?void 0:o.message)??s.error)});const u=document.querySelector("#webgpu-canvas");await Gt(u,u.getContext("webgpu"),c,t,n)})();
