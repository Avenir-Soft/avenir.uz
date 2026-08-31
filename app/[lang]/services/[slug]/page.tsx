import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { V2Behaviors } from '@/components/v2/behaviors'
import { V2Footer } from '@/components/v2/footer'
import { V2Header } from '@/components/v2/header'
import { SvcAiBots } from '@/components/v2/services/ai-bots'
import { SvcCrmErp } from '@/components/v2/services/crm-erp'
import { SvcMiniApps } from '@/components/v2/services/mini-apps'
import { SvcMobileApps } from '@/components/v2/services/mobile-apps'
import { SvcTelegramBots } from '@/components/v2/services/telegram-bots'
import { SvcWebSites } from '@/components/v2/services/web-sites'
import { isLanguage, languages, type Language } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { getServiceBySlug, serviceCatalog, type ServiceSlug } from '@/lib/service-catalog'
import { siteUrl } from '@/lib/site-url'
import { siteMeta } from '@/lib/seo'

interface ServicePageProps {
  params: Promise<{ lang: string; slug: string }>
}

/* Har bir yechim sahifasi — maketdagi o'z komponenti */
const VIEWS: Record<ServiceSlug, (props: { lang: Language }) => React.ReactNode> = {
  'web-sites': SvcWebSites,
  'crm-erp': SvcCrmErp,
  'mobile-apps': SvcMobileApps,
  'telegram-bots': SvcTelegramBots,
  'ai-bots': SvcAiBots,
  'mini-apps': SvcMiniApps,
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
    title: content.seoTitle,
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

  const language = lang as Language
  const View = VIEWS[service.slug]

  return (
    <>
      <V2Header lang={language} />
      <main id="main">
        <View lang={language} />
      </main>
      <V2Footer lang={language} />
      <V2Behaviors key={`${language}-${service.slug}`} lang={language} />
    </>
  )
}
