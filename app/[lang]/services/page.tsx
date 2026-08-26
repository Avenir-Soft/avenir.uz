import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { V2Behaviors } from '@/components/v2/behaviors'
import { V2Footer } from '@/components/v2/footer'
import { V2Header } from '@/components/v2/header'
import { Split } from '@/components/v2/split'
import { tv } from '@/lib/i18n-v2'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages, type Language } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { serviceCatalog } from '@/lib/service-catalog'
import { siteUrl } from '@/lib/site-url'
import { siteMeta } from '@/lib/seo'

interface ServicesIndexProps {
  params: Promise<{ lang: string }>
}

export function generateStaticParams() {
  return languages.map(lang => ({ lang }))
}

export async function generateMetadata({ params }: ServicesIndexProps): Promise<Metadata> {
  const { lang } = await params
  if (!isLanguage(lang)) return { title: 'Not found', robots: { index: false, follow: false } }

  const dictionary = getDictionary(lang)

  return {
    title: dictionary.services.title,
    description: dictionary.services.subtitle,
    alternates: {
      canonical: localizedPath(lang, '/services'),
      languages: languageAlternates('/services'),
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}${localizedPath(lang, '/services')}`,
      title: `${dictionary.services.title} | Avenir`,
      description: dictionary.services.subtitle,
      siteName: 'Avenir',
      locale: siteMeta[lang].ogLocale,
      images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Avenir' }],
    },
  }
}

/* Maketda alohida ro'yxat sahifasi yo'q — bosh sahifadagi «Boshqa
   yechimlar» kartochkalari uslubida yig'ilgan. */
export default async function ServicesIndexPage({ params }: ServicesIndexProps) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  const language = lang as Language
  const base = localizedPath(language, '/')
  const svc = (s: string) => localizedPath(language, `/services/${s}`)

  return (
    <>
      <V2Header lang={language} />
      <main id="main">
        <section className="section index-v2" data-sec="yechimlar">
          <span className="aura aura--b aura--drift" style={{ width: '640px', height: '640px', right: '-240px', top: '6%', opacity: '0.5' }}></span>
          <div className="shell">
            <div className="center">
              <span className="chip rise">
                <i></i>
                {tv(language, 'Yechimlar')}
              </span>
              <Split className="h-sec rise" style={{ '--d': '80ms' }}>
                {tv(language, 'Biznesingiz uchun raqamli yechimlar')}
              </Split>
            </div>
            <div className="other">
              {serviceCatalog.map((service, i) => {
                const c = service.content[language]
                return (
                  <a
                    key={service.slug}
                    className="gc other__i rise"
                    href={svc(service.slug)}
                    {...(i ? { style: { '--d': `${i * 60}ms` } } : {})}
                  >
                    <b>{c.title}</b>
                    <p>{c.teaser}</p>
                    <span>
                      {tv(language, 'Batafsil')}{' '}
                      <i>{'→'}</i>
                    </span>
                  </a>
                )
              })}
            </div>
            <div className="final rise" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <span className="aura aura--a aura--drift"></span>
              <div className="final__in center">
                <Split>
                  {tv(language, 'Loyihani muhokama qilamiz')}
                </Split>
                <p className="p-sec rise" style={{ '--d': '80ms' }}>{tv(language, 'Brif to\'ldirish shart emas — qisqacha yozing, qolganini savol berib aniqlaymiz.')}</p>
                <div className="hero__cta rise" style={{ '--d': '160ms' }}>
                  <a className="btn btn--w" href={`${base}#aloqa`}>
                    {tv(language, 'Loyihani boshlash')}{' '}
                    <span className="btn__ar">→</span>
                  </a>
                  <a className="btn btn--d" href="https://t.me/avenir_uz" target="_blank" rel="noopener noreferrer">{tv(language, 'Telegram')}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <V2Footer lang={language} />
      <V2Behaviors key={language} lang={language} />
    </>
  )
}
