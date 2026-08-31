import { notFound } from 'next/navigation'
import { V2Behaviors, type FeedStrings } from '@/components/v2/behaviors'
import { V2Footer } from '@/components/v2/footer'
import { V2Header } from '@/components/v2/header'
import { V2Intro } from '@/components/v2/intro'
import { V2StickyCta } from '@/components/v2/sticky-cta'
import { HomeContact } from '@/components/v2/home/contact'
import { HomeHero } from '@/components/v2/home/hero'
import { HomeProcess } from '@/components/v2/home/process'
import { HomeProjects } from '@/components/v2/home/projects'
import { HomeSolutions } from '@/components/v2/home/solutions'
import { HomeTrust } from '@/components/v2/home/trust'
import { tv } from '@/lib/i18n-v2'
import { isLanguage, type Language } from '@/lib/languages'

/* Lenta satrlari maketdan (index.html:1641); serverda tarjima qilinadi,
   behaviors ularni tayyor holda oladi. */
const FEED_ITEMS: [string, string][] = [
  ['Yangi lid', 'Alfa Textile — korporativ sayt'],
  ['Hisob-faktura', "#2481 to’landi"],
  ['Vazifa yopildi', 'Dizayn sprint · 12/12'],
  ['Bitim bosqichi', 'Taklif yuborildi'],
  ['Yangi mijoz', 'Orient Logistics'],
  ['Hisobot', 'Oylik P&L tayyor'],
]

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()
  const language = lang as Language

  const feed: FeedStrings = {
    items: FEED_ITEMS.map(([a, b]) => [tv(language, a), tv(language, b)] as [string, string]),
    now: tv(language, 'hozir'),
    min: tv(language, 'daq'),
  }

  return (
    <>
      <V2Intro />
      <V2Header lang={language} home />
      <main id="main">
        <HomeHero lang={language} />
        <HomeTrust lang={language} />
        <HomeSolutions lang={language} />
        <HomeProjects lang={language} />
        <HomeProcess lang={language} />
        {/* «Jamoa» bo'limi vaqtincha yashirilgan: jamoa fotolari hali tayyor
            emas (egasining qarori, 2026-08-26). Komponent joyida —
            components/v2/home/team.tsx — fotolar kelgach shu yerga qaytariladi. */}
        <HomeContact lang={language} />
      </main>
      <V2Footer lang={language} />
      <V2StickyCta lang={language} />
      <V2Behaviors key={language} lang={language} feed={feed} />
    </>
  )
}
