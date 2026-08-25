import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { getServiceCards } from '@/lib/service-catalog'
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

export default async function ServicesIndexPage({ params }: ServicesIndexProps) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  return (
    <main id="main" style={{ backgroundColor: '#F5F4F0' }}>
      <Navbar />
      <div className="pt-24" />
      <Services cards={getServiceCards(lang)} />
      <Contact />
      <Footer />
    </main>
  )
}
