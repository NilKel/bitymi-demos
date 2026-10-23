// GPU device / context loss recovery shim for the live viewer/ build (2026-10-23).
// The viewer never listened for loss: a WebGPU `device.lost` (GPU process crash / reset,
// driver timeout, memory pressure) or a WebGL `webglcontextlost` left it looking loaded
// (spinner gone, "N surfels · fps" still ticking) on a blank canvas until a manual
// refresh. This classic script runs before the app module and (1) wraps
// GPUAdapter.requestDevice to watch every device the app creates, (2) listens for
// webglcontextlost on the page; on a real loss it reloads once (sessionStorage guard:
// a second loss within 60 s shows a Reload button instead of looping). Same logic as
// Halloumi-WS src/gpu-loss.ts, which the source build (viewer3d/) carries natively.
(function () {
  var KEY = 'halloumi.gpuLossReload', WINDOW_MS = 60000, handled = false;
  function overlay(msg, withButton) {
    var h = document.createElement('div');
    h.style.cssText = 'position:fixed;inset:0;display:flex;flex-direction:column;gap:14px;align-items:center;' +
      'justify-content:center;z-index:10000;color:#eee;background:rgba(10,10,10,0.92);font:15px system-ui,sans-serif;' +
      'padding:24px;text-align:center;';
    var t = document.createElement('div'); t.textContent = msg; h.appendChild(t);
    if (withButton) {
      var b = document.createElement('button'); b.textContent = 'Reload';
      b.style.cssText = 'font:600 14px system-ui,sans-serif;padding:8px 18px;border-radius:6px;border:1px solid #f0b060;' +
        'background:#222;color:#f0b060;cursor:pointer;';
      b.onclick = function () { location.reload(); }; h.appendChild(b);
    }
    (document.body || document.documentElement).appendChild(h);
  }
  function onLoss(kind, detail) {
    if (handled) return; handled = true;
    console.error('[gpu-loss] ' + kind + ' lost: ' + detail);
    var last = 0; try { last = parseInt(sessionStorage.getItem(KEY) || '0', 10) || 0; } catch (e) {}
    var now = Date.now();
    if (now - last > WINDOW_MS) {
      try { sessionStorage.setItem(KEY, String(now)); } catch (e) {}
      overlay('The GPU device was lost — reloading the viewer…', false);
      setTimeout(function () { location.reload(); }, 400);
    } else {
      overlay('The GPU device was lost again (' + kind + ': ' + detail + '). Reload to try once more.', true);
    }
  }
  if (window.GPUAdapter && GPUAdapter.prototype.requestDevice) {
    var rd = GPUAdapter.prototype.requestDevice;
    GPUAdapter.prototype.requestDevice = function () {
      return rd.apply(this, arguments).then(function (d) {
        d.lost.then(function (info) { if (info.reason !== 'destroyed') onLoss('webgpu', info.reason + ': ' + info.message); });
        return d;
      });
    };
  }
  document.addEventListener('webglcontextlost', function (e) { e.preventDefault(); onLoss('webgl', 'webglcontextlost'); }, true);
})();
