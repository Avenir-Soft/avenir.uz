import type { Metadata } from 'next'
import PrivacyContent from './privacy-content'

export const metadata: Metadata = {
  title: 'Maxfiylik siyosati',
  description:
    'Avenir IT agentligining maxfiylik siyosati — ma\'lumotlar to\'plash, saqlash, foydalanish va himoya qilish tartibi haqida.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Maxfiylik siyosati | Avenir',
    description: 'Avenir IT agentligining maxfiylik siyosati.',
    url: 'https://avenir.uz/privacy',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
