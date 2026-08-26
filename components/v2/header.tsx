import Link from 'next/link'
import { tv } from '@/lib/i18n-v2'
import type { Language } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'

/* Maket shapkasi (index.html:41-84 / crm-erp.html:20-64), so'zma-so'z.
   Bosh sahifada bo'lim havolalari #hash, ichki sahifalarda bosh sahifaga. */

const SECTIONS = ['yechimlar', 'loyihalar', 'jarayon', 'jamoa', 'aloqa'] as const

function BrandSvg() {
  return (
    <svg className="brand__svg" viewBox="0 0 210 120" fill="none" role="img" aria-label="Avenir">
      <line className="lg-axis" x1="60" y1="10" x2="60" y2="110" />
      <line className="lg-axis" x1="10" y1="60" x2="200" y2="60" />
      <rect className="lg-tip" x="57" y="7" width="6" height="6" transform="rotate(45 60 10)" />
      <rect className="lg-tip" x="57" y="107" width="6" height="6" transform="rotate(45 60 110)" />
      <rect className="lg-tip" x="7" y="57" width="6" height="6" transform="rotate(45 10 60)" />
      <rect className="lg-tip" x="197" y="57" width="6" height="6" transform="rotate(45 200 60)" />
      <path className="lg-star" d="M60 28 Q60 60 82.7 60 Q60 60 60 92 Q60 60 37.3 60 Q60 60 60 28 Z" />
      <text className="lg-word" x="72" y="46">AVENIR</text>
    </svg>
  )
}

export function V2Header({ lang, home }: { lang: Language; home?: boolean }) {
  const base = localizedPath(lang, '/')
  const secHref = (id: (typeof SECTIONS)[number]) => (home ? `#${id}` : `${base}#${id}`)
  const label = (id: (typeof SECTIONS)[number]) =>
    tv(lang, id === 'yechimlar' ? 'Yechimlar' : id === 'loyihalar' ? 'Loyihalar' : id === 'jarayon' ? 'Jarayon' : id === 'jamoa' ? 'Jamoa' : 'Aloqa')

  return (
    <>
      <header className="top" id="top">
        <div className="shell top__in">
          {home ? (
            <a className="brand" href="#hero" aria-label="Avenir">
              <BrandSvg />
            </a>
          ) : (
            <Link className="brand" href={base} aria-label="Avenir">
              <BrandSvg />
            </Link>
          )}

          <nav className="nav">
            {SECTIONS.map(id => (
              <a key={id} href={secHref(id)} data-sec={id}>
                {label(id)}
              </a>
            ))}
          </nav>

          <div className="top__side">
            <div className="lang" data-no-i18n>
              <button
                className="lang__btn"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-label={tv(lang, 'Til')}
              >
                <span className="lang__cur">{lang.toUpperCase()}</span>
                <svg className="lang__chev" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                  <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ul className="lang__menu" role="listbox" aria-label={tv(lang, 'Til')}>
                <li role="option" aria-selected={lang === 'uz'}>
                  <button type="button" data-lang="uz">O‘zbekcha<i>UZ</i></button>
                </li>
                <li role="option" aria-selected={lang === 'ru'}>
                  <button type="button" data-lang="ru">Русский<i>RU</i></button>
                </li>
                <li role="option" aria-selected={lang === 'en'}>
                  <button type="button" data-lang="en">English<i>EN</i></button>
                </li>
              </ul>
            </div>
            <button className="burger" id="burger" type="button" aria-label={tv(lang, 'Menyu')} aria-expanded="false">
              <i></i><i></i><i></i>
            </button>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer">
        {SECTIONS.map(id => (
          <a key={id} href={secHref(id)}>
            {label(id)}
          </a>
        ))}
      </div>
    </>
  )
}
