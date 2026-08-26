import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Stats } from '@/components/stats'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { getServiceCards } from '@/lib/service-catalog'
import { isLanguage } from '@/lib/languages'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  // Xizmat kartochkalari server tomonda tanlanadi — katalogning uchala tildagi
  // matni brauzerga tushmasligi uchun.
  const serviceCards = getServiceCards(lang)

  return (
    <main id="main" style={{ backgroundColor: '#F5F4F0' }}>
      <Navbar />
      <Hero />
      <Services cards={serviceCards} />
      <Portfolio />
      <Stats />
      <Contact />
      <Footer />
    </main>
  )
}
