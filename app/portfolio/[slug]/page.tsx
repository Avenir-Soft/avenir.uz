import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortfolioDetailPage } from '@/components/portfolio-detail-page'
import { dictionaries } from '@/lib/i18n'
import { getPortfolioBySlug, portfolioCatalog } from '@/lib/portfolio-catalog'

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

interface PortfolioPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return portfolioCatalog.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)

  if (!project) {
    return {
      title: 'Case not found',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const index = project.id - 1
  const uzCase = dictionaries.uz.portfolio.projects[index] ?? dictionaries.uz.portfolio.projects[0]
  const ruCase = dictionaries.ru.portfolio.projects[index] ?? dictionaries.ru.portfolio.projects[0]
  const enCase = dictionaries.en.portfolio.projects[index] ?? dictionaries.en.portfolio.projects[0]

  const title = `${ruCase.name} | ${enCase.name} | Avenir`
  const description = ruCase.summary
  const url = `${siteUrl}/portfolio/${project.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Avenir',
      locale: 'uz_UZ',
      alternateLocale: ['ru_RU', 'en_US'],
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${uzCase.name} - Avenir`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: enCase.summary,
      images: [project.image],
    },
  }
}

export default async function PortfolioCasePage({ params }: PortfolioPageProps) {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)

  if (!project) notFound()

  return <PortfolioDetailPage slug={project.slug} />
}
