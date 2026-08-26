/* ==========================================================================
   AVENIR — kursorga javob beradigan fon ("signal maydoni").
   Ilgari faqat bosh sahifaning hero bo‘limida edi; endi canvas position:
   fixed bo‘lib butun oynani egallaydi va barcha sahifalarga ulanadi.
   Xira nuqtalar to‘ri bir marta offscreen canvasga chiziladi, har kadrda
   faqat to‘lqin va kursor tegib turgan nuqtalar qayta chiziladi.
   ========================================================================== */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mavzu: canvas ham xuddi shu siyohda chiziladi ---------- */
  var FXINK = '255, 255, 255';
  function readInk() {
    var v = getComputedStyle(document.documentElement).getPropertyValue('--ink');
    FXINK = (v || '255, 255, 255').trim();
  }
  readInk();

  /* ======================================================================
     HERO FONI — "signal maydoni"
     Xira nuqtalar to'ri bir marta offscreen canvasga chiziladi va har kadrda
     rasm sifatida qo'yiladi; faqat to'lqin va kursor tegib turgan nuqtalar
     qaytadan chiziladi. Shu bilan kadr ichidagi chizish 1100 dan ~150 ga tushdi.
     ====================================================================== */
  var fx = document.getElementById('fx');
  if (fx && fx.getContext && !reduce) {
    var fc = fx.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var FW = 0, FH = 0, dots = [], stars = [], waves = [], nextWave = 0;
    var px = -9999, py = -9999, fxOn = true;
    var GAP = 38, R_MAX = 1500, BAND = 115;
    var base = document.createElement('canvas'), bc = base.getContext('2d');

    function fxSize() {
      var r = fx.getBoundingClientRect();
      FW = r.width; FH = r.height;
      if (!FW || !FH) return;
      fx.width = Math.round(FW * dpr); fx.height = Math.round(FH * dpr);
      fc.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      var cols = Math.ceil(FW / GAP) + 1, rowsN = Math.ceil(FH / GAP) + 1;
      var ox = (FW - (cols - 1) * GAP) / 2, oy = (FH - (rowsN - 1) * GAP) / 2;
      for (var i = 0; i < cols; i++)
        for (var j = 0; j < rowsN; j++)
          dots.push({ x: ox + i * GAP, y: oy + j * GAP });

      /* xira to'r — bir marta */
      base.width = fx.width; base.height = fx.height;
      bc.setTransform(dpr, 0, 0, dpr, 0, 0);
      bc.clearRect(0, 0, FW, FH);
      bc.fillStyle = 'rgba(' + FXINK + ',0.055)';
      for (var k = 0; k < dots.length; k++) bc.fillRect(dots[k].x - 0.6, dots[k].y - 0.6, 1.2, 1.2);

      stars = [];
      var n = Math.max(6, Math.round(FW / 170));
      for (var m = 0; m < n; m++) {
        stars.push({
          x: Math.random() * FW, y: Math.random() * FH,
          s: 2.4 + Math.random() * 4.6,
          vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
          a: 0.16 + Math.random() * 0.3, tw: Math.random() * 6.28,
          /* katta yulduz — yaqinroq: kursorga kuchliroq javob beradi */
          d: 0.35 + Math.random() * 0.9, sp: 0.35 + Math.random() * 0.5
        });
      }
    }

    function star4(x, y, s) {
      fc.beginPath();
      fc.moveTo(x, y - s);
      fc.quadraticCurveTo(x, y, x + s, y);
      fc.quadraticCurveTo(x, y, x, y + s);
      fc.quadraticCurveTo(x, y, x - s, y);
      fc.quadraticCurveTo(x, y, x, y - s);
      fc.fill();
    }

    function fxDraw(now) {
      if (!fxOn) { requestAnimationFrame(fxDraw); return; }
      fc.clearRect(0, 0, FW, FH);
      fc.drawImage(base, 0, 0, FW, FH);

      if (now > nextWave) { waves.push({ x: FW / 2, y: FH * 0.34, born: now, r: 0 }); nextWave = now + 3400; }
      for (var w = waves.length - 1; w >= 0; w--) {
        waves[w].r = ((now - waves[w].born) / 3600) * R_MAX;
        if (waves[w].r > R_MAX) waves.splice(w, 1);
      }

      var nw = waves.length;
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i], a = 0, blue = 0;

        for (var v = 0; v < nw; v++) {
          var wv = waves[v], dx = d.x - wv.x, dy = d.y - wv.y;
          var dist = Math.sqrt(dx * dx + dy * dy), off = dist - wv.r;
          if (off < 0) off = -off;
          if (off < BAND) {
            var k = 1 - off / BAND, fade = 1 - wv.r / R_MAX;
            a += k * k * 0.62 * fade;
            if (k * fade > blue) blue = k * fade;
          }
        }

        var mx = d.x - px, my = d.y - py, md2 = mx * mx + my * my;
        if (md2 < 28900) {                       /* 170px */
          var mk = 1 - Math.sqrt(md2) / 170;
          a += mk * mk * 0.45;
          if (mk * 0.7 > blue) blue = mk * 0.7;
        }

        if (a < 0.03) continue;                  /* xira nuqta allaqachon fonda bor */

        var al = a > 0.85 ? 0.85 : a;
        fc.fillStyle = blue > 0.15
          ? 'rgba(' + ((96 + 159 * (1 - blue)) | 0) + ',' + ((165 + 90 * (1 - blue)) | 0) + ',250,' + al + ')'
          : 'rgba(' + FXINK + ',' + al + ')';
        fc.beginPath();
        fc.arc(d.x, d.y, 0.7 + a * 2.1, 0, 6.2832);
        fc.fill();
      }

      for (var s2 = 0; s2 < stars.length; s2++) {
        var st = stars[s2];
        st.x += st.vx; st.y += st.vy; st.tw += 0.03 * st.sp;
        if (st.x < -30) st.x = FW + 30; if (st.x > FW + 30) st.x = -30;
        if (st.y < -30) st.y = FH + 30; if (st.y > FH + 30) st.y = -30;
        /* kursor tomon yengil siljish — chuqurlik hissi */
        var sx = st.x, sy = st.y;
        if (px > -9000) { sx += (px - st.x) * 0.012 * st.d; sy += (py - st.y) * 0.012 * st.d; }
        fc.fillStyle = 'rgba(96,165,250,' + (st.a * (0.6 + Math.sin(st.tw) * 0.4)).toFixed(3) + ')';
        star4(sx, sy, st.s);
      }

      requestAnimationFrame(fxDraw);
    }

    fxSize();
    window.__fxRefresh = function () { readInk(); fxSize(); };
    window.addEventListener('resize', fxSize);
    window.addEventListener('mousemove', function (e) {
      var r = fx.getBoundingClientRect();
      px = e.clientX - r.left; py = e.clientY - r.top;
    }, { passive: true });
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { fxOn = e.isIntersecting; });
    }, { rootMargin: '120px' }).observe(fx);
    requestAnimationFrame(fxDraw);
  }
})();
