import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages } from '@/lib/languages'
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

export default async function PortfolioIndexPage({ params }: PortfolioIndexProps) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  return (
    <main id="main" style={{ backgroundColor: '#F5F4F0' }}>
      <Navbar />
      <div className="pt-24" />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
