import { tv } from '@/lib/i18n-v2'
import type { Language } from '@/lib/languages'

/* Yopishqoq CTA paneli va yopilgach o'rnida qoladigan telefon tugmasi
   (index.html:800-814). Ko'rinish mantiqi behaviors.tsx da. */
export function V2StickyCta({ lang }: { lang: Language }) {
  return (
    <>
      <div className="cta" id="cta">
        <div className="cta__in">
          <div className="cta__txt">
            <b>{tv(lang, 'Loyihangiz bormi?')}</b>
            <span>{tv(lang, '24 soat ichida javob beramiz')}</span>
          </div>
          <a className="cta__btn" href="#aloqa">{tv(lang, 'Bog‘lanish')}</a>
          <button className="cta__x" id="ctaX" type="button" aria-label={tv(lang, 'Yopish')}>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <a className="fab" id="ctaFab" href="#aloqa" aria-label={tv(lang, 'Bog‘lanish')}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7.4 3.5H5.9A2.4 2.4 0 0 0 3.5 6c0 8 6.5 14.5 14.5 14.5a2.4 2.4 0 0 0 2.4-2.4v-1.5a1 1 0 0 0-.68-.95l-3.4-1.13a1 1 0 0 0-1.1.35l-1 1.3a14.6 14.6 0 0 1-5.9-5.9l1.3-1a1 1 0 0 0 .35-1.1L8.35 4.18a1 1 0 0 0-.95-.68z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  )
}
