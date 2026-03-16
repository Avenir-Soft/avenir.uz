import type { Metadata } from 'next'
import TermsContent from './terms-content'

export const metadata: Metadata = {
  title: 'Foydalanish shartlari',
  description:
    'Avenir IT agentligi veb-saytidan foydalanish shartlari — huquqlar, majburiyatlar va qoidalar haqida to\'liq ma\'lumot.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Foydalanish shartlari | Avenir',
    description: 'Avenir IT agentligi veb-saytidan foydalanish shartlari.',
    url: 'https://avenir.uz/terms',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function TermsPage() {
  return <TermsContent />
}
