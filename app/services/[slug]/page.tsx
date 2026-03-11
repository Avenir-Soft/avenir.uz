import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetailPage } from '@/components/service-detail-page'
import { getServiceBySlug, serviceCatalog } from '@/lib/service-catalog'

const defaultSiteUrl = 'https://avenir.uz'

function resolveSiteUrl(value: string | undefined) {
  const candidate = value?.trim()
  if (!candidate) return defaultSiteUrl

  try {
    const url = new URL(candidate)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return defaultSiteUrl
    return url.origin
  } catch {
    return defaultSiteUrl
  }
}

const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviceCatalog.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service not found',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const uz = service.content.uz
  const ru = service.content.ru
  const en = service.content.en
  const title = `${ru.title} | ${en.title} | Avenir`
  const description = ru.intro
  const url = `${siteUrl}/services/${service.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'Avenir',
      locale: 'uz_UZ',
      localeAlternate: ['ru_RU', 'en_US'],
      images: [
        {
          url: '/logo-black.png',
          width: 1200,
          height: 630,
          alt: `${uz.title} - Avenir`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: en.intro,
      images: ['/logo-black.png'],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return <ServiceDetailPage slug={service.slug} />
}
