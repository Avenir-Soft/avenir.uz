import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PrivacyContent from './privacy-content'
import { isLanguage, languages } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'

const meta = {
  uz: {
    title: 'Maxfiylik siyosati',
    description:
      "Avenir IT agentligining maxfiylik siyosati: qanday ma'lumot to'planadi, qayerga uzatiladi (Telegram, CRM, Google Analytics, Meta Pixel) va qancha saqlanadi.",
  },
  ru: {
    title: 'Политика конфиденциальности',
    description:
      'Политика конфиденциальности IT-агентства Avenir: какие данные собираются, куда передаются (Telegram, CRM, Google Analytics, Meta Pixel) и сколько хранятся.',
  },
  en: {
    title: 'Privacy Policy',
    description:
      'Avenir IT agency privacy policy: what data we collect, where it is sent (Telegram, CRM, Google Analytics, Meta Pixel) and how long it is kept.',
  },
} as const

export function generateStaticParams() {
  return languages.map(lang => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLanguage(lang)) return { title: 'Not found', robots: { index: false, follow: false } }

  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      canonical: localizedPath(lang, '/privacy'),
      languages: languageAlternates('/privacy'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  return <PrivacyContent />
}
