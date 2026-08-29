/* Kirish animatsiyasi (index.html:19-36) — faqat bosh sahifada.
   Mantiq behaviors.tsx da: 1350ms dan keyin yoki klik/Esc bilan yopiladi.
   Sinxron skript gidratsiyani kutmasdan intro-on qo'yadi — birinchi kadr
   miltillamasin; JS o'chiq bo'lsa intro umuman ko'rinmaydi. */
export function V2Intro() {
  return (
    <>
      <noscript>
        <style>{`#intro{display:none}`}</style>
      </noscript>
      <script
        dangerouslySetInnerHTML={{
          __html:
            /* matchMedia ba'zi ilova-ichi brauzerlarda yo'q — himoyasiz chaqiruv
               shu yerdayoq uzilardi. Topilmasa intro umuman ko'rsatilmaydi.
               Zaxira taymer: parda faqat JS bilan olib tashlanadi, shuning uchun
               React yuklanmasa ham (chunk 404, WebView) ekran ochilib qolsin. */
            "try{if(window.matchMedia&&!matchMedia('(prefers-reduced-motion: reduce)').matches)" +
            "document.body.classList.add('intro-on');" +
            "setTimeout(function(){var i=document.getElementById('intro');" +
            "if(i&&!i.classList.contains('is-out')&&!i.dataset.done){" +
            "i.dataset.done='1';i.style.display='none';" +
            "document.body.classList.remove('intro-on')}},4000)}catch(e){}",
        }}
      />
      <div className="intro" id="intro" role="presentation" aria-hidden="true">
      <div className="intro__s">
        <span className="intro__rip"></span>
        <span className="intro__rip intro__rip--2"></span>
        <span className="intro__drop"></span>
        <span className="intro__m">
          <svg viewBox="0 0 200 200" fill="none">
            <line className="ax" x1="100" y1="100" x2="100" y2="24" />
            <line className="ax" x1="100" y1="100" x2="176" y2="100" />
            <line className="ax" x1="100" y1="100" x2="100" y2="176" />
            <line className="ax" x1="100" y1="100" x2="24" y2="100" />
            <rect className="cap" x="95.5" y="19.5" width="9" height="9" transform="rotate(45 100 24)" />
            <rect className="cap" x="171.5" y="95.5" width="9" height="9" transform="rotate(45 176 100)" />
            <rect className="cap" x="95.5" y="171.5" width="9" height="9" transform="rotate(45 100 176)" />
            <rect className="cap" x="19.5" y="95.5" width="9" height="9" transform="rotate(45 24 100)" />
            <path className="st" d="M100 42 Q100 100 158 100 Q100 100 100 158 Q100 100 42 100 Q100 100 100 42 Z" />
          </svg>
        </span>
      </div>
      </div>
    </>
  )
}
