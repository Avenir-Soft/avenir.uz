import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/components/language-provider'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages, type Language } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { instagramUrl, seoKeywords, siteMeta } from '@/lib/seo'
import { siteUrl } from '@/lib/site-url'
import '../globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

// DM Sans o'rniga Manrope: kirill alifbosi bor, aks holda rus tilidagi
// butun matn Arial'ga tushib qolardi.
const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-sans-brand',
  display: 'swap',
  preload: true,
})

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() || 'G-7CDEEPTX0Q'
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || '1483877886713058'
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION

export function generateStaticParams() {
  return languages.map(lang => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLanguage(lang)) return {}

  const meta = siteMeta[lang]

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: '%s | Avenir',
    },
    description: meta.description,
    applicationName: 'Avenir',
    keywords: seoKeywords,
    category: 'Technology',
    authors: [{ name: 'Avenir', url: siteUrl }],
    creator: 'Avenir',
    publisher: 'Avenir',
    alternates: {
      canonical: localizedPath(lang),
      languages: languageAlternates(),
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}${localizedPath(lang)}`,
      siteName: 'Avenir',
      locale: meta.ogLocale,
      alternateLocale: languages.filter(l => l !== lang).map(l => siteMeta[l].ogLocale),
      title: meta.title,
      description: meta.description,
      images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Avenir' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-cover.png'],
    },
    other: {
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
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#042147',
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!isLanguage(lang)) notFound()

  const language = lang as Language
  const dictionary = getDictionary(language)
  const meta = siteMeta[language]

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}${localizedPath(language)}`,
    name: 'Avenir',
    alternateName: ['Avenir UZ', 'Avenir IT Agency', 'Авенир IT агентство'],
    description: meta.description,
    inLanguage: language,
    publisher: { '@id': `${siteUrl}/#organization` },
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Avenir',
    legalName: "Choriyev Xojiakbar Shuxrat O'g'li",
    alternateName: ['Avenir Soft', 'Avenir UZ', 'Avenir IT Agency'],
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/og-cover.png`,
    description: meta.description,
    areaServed: 'UZ',
    telephone: '+998935298807',
    email: 'info@avenir.uz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Chust ko'chasi 1, Ulug'bek",
      addressLocality: 'Tashkent',
      postalCode: '100214',
      addressCountry: 'UZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+998935298807',
      contactType: 'customer service',
      availableLanguage: ['Uzbek', 'Russian', 'English'],
    },
    sameAs: [instagramUrl],
  }

  return (
    <html lang={language} className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, organizationJsonLd]) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          {dictionary.nav.skipToContent}
        </a>

        <LanguageProvider language={language} dictionary={dictionary}>
          {children}
        </LanguageProvider>

        {gaId && (
          <>
            <Script
              id="gtag-load"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}

        {metaPixelId && (
          <>
            <Script
              id="meta-pixel"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`,
              }}
            />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element -- Meta Pixel 1x1 trekeri */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}
