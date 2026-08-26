import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetailPage } from '@/components/service-detail-page'
import { isLanguage, languages } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { getServiceBySlug, getServiceCards, serviceCatalog } from '@/lib/service-catalog'
import { siteUrl } from '@/lib/site-url'
import { siteMeta } from '@/lib/seo'

interface ServicePageProps {
  params: Promise<{ lang: string; slug: string }>
}

export function generateStaticParams() {
  return languages.flatMap(lang => serviceCatalog.map(service => ({ lang, slug: service.slug })))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const service = getServiceBySlug(slug)

  if (!isLanguage(lang) || !service) {
    return { title: 'Not found', robots: { index: false, follow: false } }
  }

  const content = service.content[lang]
  const path = `/services/${service.slug}`

  return {
    title: content.title,
    description: content.intro,
    alternates: {
      canonical: localizedPath(lang, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}${localizedPath(lang, path)}`,
      title: `${content.title} | Avenir`,
      description: content.intro,
      siteName: 'Avenir',
      locale: siteMeta[lang].ogLocale,
      images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: `${content.title} — Avenir` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.title} | Avenir`,
      description: content.intro,
      images: ['/og-cover.png'],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { lang, slug } = await params
  const service = getServiceBySlug(slug)

  if (!isLanguage(lang) || !service) notFound()

  const relatedServices = getServiceCards(lang).filter(card => card.slug !== service.slug).slice(0, 4)

  return (
    <main id="main">
      <ServiceDetailPage content={service.content[lang]} relatedServices={relatedServices} />
    </main>
  )
}
