import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TermsContent from './terms-content'
import { isLanguage, languages } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'

const meta = {
  uz: {
    title: 'Foydalanish shartlari',
    description:
      "Avenir IT agentligi veb-saytidan foydalanish shartlari — huquqlar, majburiyatlar va qoidalar.",
  },
  ru: {
    title: 'Условия использования',
    description:
      'Условия использования сайта IT-агентства Avenir — права, обязанности и правила.',
  },
  en: {
    title: 'Terms of Service',
    description: 'Terms of service for the Avenir IT agency website — rights, duties and rules.',
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
      canonical: localizedPath(lang, '/terms'),
      languages: languageAlternates('/terms'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  return <TermsContent />
}
