import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Team } from '@/components/team'
import { Stats } from '@/components/stats'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F5F4F0' }}>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Stats />
      <Contact />
      <Footer />
    </main>
  )
}
