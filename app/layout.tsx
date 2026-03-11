import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Avenir',
  description:
    'Biz raqamli kelajaklarni yaratamiz. O`zbekiston va undan tashqaridagi bizneslar uchun premium IT yechimlar va veb platformalar.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo-white.png',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
