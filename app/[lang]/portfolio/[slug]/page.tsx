import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortfolioDetailPage } from '@/components/portfolio-detail-page'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { getPortfolioBySlug, portfolioCatalog } from '@/lib/portfolio-catalog'
import { siteUrl } from '@/lib/site-url'
import { siteMeta } from '@/lib/seo'

interface PortfolioPageProps {
  params: Promise<{ lang: string; slug: string }>
}

export function generateStaticParams() {
  return languages.flatMap(lang => portfolioCatalog.map(project => ({ lang, slug: project.slug })))
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const project = getPortfolioBySlug(slug)

  if (!isLanguage(lang) || !project) {
    return { title: 'Not found', robots: { index: false, follow: false } }
  }

  const dictionary = getDictionary(lang)
  const index = portfolioCatalog.findIndex(item => item.slug === project.slug)
  const projectCopy = dictionary.portfolio.projects[index] ?? dictionary.portfolio.projects[0]
  const path = `/portfolio/${project.slug}`

  return {
    title: projectCopy.name,
    description: projectCopy.summary,
    alternates: {
      canonical: localizedPath(lang, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      type: 'article',
      url: `${siteUrl}${localizedPath(lang, path)}`,
      title: `${projectCopy.name} | Avenir`,
      description: projectCopy.summary,
      siteName: 'Avenir',
      locale: siteMeta[lang].ogLocale,
      images: [{ url: project.image, width: 1200, height: 1500, alt: `${projectCopy.name} — Avenir` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${projectCopy.name} | Avenir`,
      description: projectCopy.summary,
      images: ['/og-cover.png'],
    },
  }
}

export default async function PortfolioCasePage({ params }: PortfolioPageProps) {
  const { lang, slug } = await params
  const project = getPortfolioBySlug(slug)

  if (!isLanguage(lang) || !project) notFound()

  return (
    <main id="main">
      <PortfolioDetailPage slug={project.slug} />
    </main>
  )
}
