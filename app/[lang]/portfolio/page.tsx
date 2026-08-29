import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { V2Behaviors } from '@/components/v2/behaviors'
import { V2Footer } from '@/components/v2/footer'
import { V2Header } from '@/components/v2/header'
import { HomeProjects } from '@/components/v2/home/projects'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages, type Language } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { siteUrl } from '@/lib/site-url'
import { siteMeta } from '@/lib/seo'

interface PortfolioIndexProps {
  params: Promise<{ lang: string }>
}

export function generateStaticParams() {
  return languages.map(lang => ({ lang }))
}

export async function generateMetadata({ params }: PortfolioIndexProps): Promise<Metadata> {
  const { lang } = await params
  if (!isLanguage(lang)) return { title: 'Not found', robots: { index: false, follow: false } }

  const dictionary = getDictionary(lang)

  return {
    title: dictionary.portfolio.title,
    description: dictionary.portfolio.subtitle,
    alternates: {
      canonical: localizedPath(lang, '/portfolio'),
      languages: languageAlternates('/portfolio'),
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}${localizedPath(lang, '/portfolio')}`,
      title: `${dictionary.portfolio.title} | Avenir`,
      description: dictionary.portfolio.subtitle,
      siteName: 'Avenir',
      locale: siteMeta[lang].ogLocale,
      images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Avenir' }],
    },
  }
}

/* Maketda alohida ro'yxat sahifasi yo'q — bosh sahifaning «Loyihalar»
   bo'limi to'liq qayta ishlatiladi, ustidan panel uchun joy qo'shiladi. */
export default async function PortfolioIndexPage({ params }: PortfolioIndexProps) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  const language = lang as Language

  return (
    <>
      <V2Header lang={language} />
      <main id="main">
        <div className="index-v2">
          <HomeProjects lang={language} titleAs="h1" />
        </div>
      </main>
      <V2Footer lang={language} />
      <V2Behaviors key={language} lang={language} />
    </>
  )
}
