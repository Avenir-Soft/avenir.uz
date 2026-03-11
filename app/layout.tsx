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
const siteTitle = 'Avenir — IT Agency in Uzbekistan | IT-агентство в Узбекистане'
const siteDescription =
  'Avenir IT agency in Uzbekistan. Разрабатываем сайты и веб-платформы для бизнеса: дизайн, разработка, запуск и поддержка цифровых продуктов.'
const siteDescriptionRu =
  'Avenir — IT-агентство в Узбекистане. Разработка сайтов, веб-платформ, UI/UX дизайн, запуск и поддержка.'
const siteDescriptionEn =
  'Avenir is an IT agency in Uzbekistan providing website development, web platforms, UI/UX design, launch, and support.'
const instagramUrl = 'https://www.instagram.com/avenir.uz/'
const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() || 'G-7CDEEPTX0Q'
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION
const seoKeywords = [
  'Avenir',
  'Avenir UZ',
  'Avenir Uzbekistan',
  'Avenir IT Agency',
  'Avenir IT agentstvo',
  'IT agency Uzbekistan',
  'IT company Uzbekistan',
  'IT agency Tashkent',
  'web development Uzbekistan',
  'website development Uzbekistan',
  'web platform development',
  'UI UX design agency Uzbekistan',
  'custom software development Uzbekistan',
  'digital agency Uzbekistan',
  'SEO agency Uzbekistan',
  'ИТ агентство Узбекистан',
  'ИТ компания Узбекистан',
  'ИТ агентство Ташкент',
  'веб разработка Узбекистан',
  'разработка сайтов Узбекистан',
  'создание сайтов Ташкент',
  'разработка веб платформ',
  'диджитал агентство Узбекистан',
  'разработка IT решений',
  'IT агентство',
  'raqamli agentlik',
  'veb sayt yaratish',
  'veb dasturlash',
  'Toshkent IT agentligi',
  'Uzbekistan web studio',
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Avenir',
  },
  description: siteDescription,
  applicationName: 'Avenir',
  generator: 'v0.app',
  keywords: seoKeywords,
  category: 'Technology',
  authors: [{ name: 'Avenir', url: siteUrl }],
  creator: 'Avenir',
  publisher: 'Avenir',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Avenir',
    locale: 'uz_UZ',
    alternateLocale: ['ru_RU', 'en_US'],
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
    description: siteDescriptionEn,
    images: ['/logo-black.png'],
  },
  other: {
    'content-language': 'uz, ru, en',
    language: 'Uzbek, Russian, English',
    'description:ru': siteDescriptionRu,
    'description:en': siteDescriptionEn,
    'geo.region': 'UZ',
    'geo.placename': 'Tashkent',
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
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: 'Avenir',
    alternateName: [
      'Avenir UZ',
      'Avenir IT Agency',
      'Avenir IT Agentstvo',
      'Avenir Uzbekistan',
      'Авенир IT агентство',
    ],
    description: siteDescriptionEn,
    inLanguage: ['uz', 'ru', 'en'],
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Avenir',
    alternateName: ['Avenir UZ', 'Avenir IT Agency', 'Авенир IT агентство'],
    url: siteUrl,
    logo: `${siteUrl}/logo-black.png`,
    description: siteDescriptionRu,
    areaServed: 'UZ',
    sameAs: [instagramUrl],
  }

  return (
    <html lang="uz">
      <head>
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script
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
      </head>
      <body className="font-sans antialiased">
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
