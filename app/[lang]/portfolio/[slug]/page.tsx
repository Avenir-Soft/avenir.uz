import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { V2Behaviors } from '@/components/v2/behaviors'
import { V2Footer } from '@/components/v2/footer'
import { V2Header } from '@/components/v2/header'
import { PrjApecAsia } from '@/components/v2/portfolio/apec-asia'
import { PrjAvenirOs } from '@/components/v2/portfolio/avenir-os'
import { PrjDagestantur } from '@/components/v2/portfolio/dagestantur'
import { PrjDefiTechnologies } from '@/components/v2/portfolio/defi-technologies'
import { PrjVacUz } from '@/components/v2/portfolio/vac-uz'
import { PrjYakovPartners } from '@/components/v2/portfolio/yakov-partners'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages, type Language } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { getPortfolioBySlug, portfolioCatalog, type PortfolioSlug } from '@/lib/portfolio-catalog'
import { siteUrl } from '@/lib/site-url'
import { siteMeta } from '@/lib/seo'

interface PortfolioPageProps {
  params: Promise<{ lang: string; slug: string }>
}

/* Har bir keys sahifasi — maketdagi o'z komponenti */
const VIEWS: Record<PortfolioSlug, (props: { lang: Language }) => React.ReactNode> = {
  'vac-uz': PrjVacUz,
  'avenir-os': PrjAvenirOs,
  'yakov-partners': PrjYakovPartners,
  'defi-technologies': PrjDefiTechnologies,
  'apec-asia': PrjApecAsia,
  'dagestantur': PrjDagestantur,
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

  const language = lang as Language
  const View = VIEWS[project.slug]

  return (
    <>
      <V2Header lang={language} />
      <main id="main">
        <View lang={language} />
      </main>
      <V2Footer lang={language} />
      <V2Behaviors key={`${language}-${project.slug}`} lang={language} />
    </>
  )
}
