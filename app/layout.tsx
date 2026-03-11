import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const defaultSiteUrl = 'https://avenir.uz'

function resolveSiteUrl(value: string | undefined) {
  const candidate = value?.trim()
  if (!candidate) return defaultSiteUrl

  try {
    const url = new URL(candidate)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return defaultSiteUrl
    return url.origin
  } catch {
    return defaultSiteUrl
  }
}

const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
const siteTitle = 'Avenir — IT-агентство в Узбекистане'
const siteDescription =
  'Разрабатываем сайты и веб-платформы для бизнеса: дизайн, разработка, запуск и поддержка цифровых продуктов.'
const instagramUrl = 'https://www.instagram.com/avenir.uz/'
const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim()
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Avenir',
  },
  description: siteDescription,
  applicationName: 'Avenir',
  generator: 'v0.app',
  keywords: [
    'Avenir',
    'Avenir Uzbekistan',
    'IT агентство',
    'веб разработка',
    'создание сайтов',
    'разработка веб платформ',
    'digital agency uzbekistan',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Avenir',
    locale: 'ru_RU',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Avenir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: googleSiteVerification,
  },
  icons: {
    icon: [
      {
        url: '/logo-black.png',
        type: 'image/png',
      },
    ],
    apple: '/logo-black.png',
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
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Avenir',
    url: siteUrl,
    logo: `${siteUrl}/logo-black.png`,
    sameAs: [instagramUrl],
  }

  return (
    <html lang="uz">
      <body className="font-sans antialiased">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="beforeInteractive"
            />
            <Script
              id="google-analytics"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        ) : null}
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
