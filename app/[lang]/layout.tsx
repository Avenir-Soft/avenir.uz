import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/components/language-provider'
import { getDictionary } from '@/lib/i18n'
import { isLanguage, languages, type Language } from '@/lib/languages'
import { languageAlternates, localizedPath } from '@/lib/paths'
import { instagramUrl, seoKeywords, siteMeta } from '@/lib/seo'
import { siteUrl } from '@/lib/site-url'
import '../v2.css'
import '../v2-bridge.css'

/* Shrift maketdagi bilan AYNAN bir xil manbadan yuklanadi (Google Fonts,
   xuddi shu URL). next/font o'z Inter nusxasini olib keladi va metrikalar
   subpiksel darajada farq qilib, piksel tekshiruvida ko'rinardi. */

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
    <html lang={language}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, organizationJsonLd]) }}
        />
      </head>
      {/* intro.tsx dagi sinxron skript gidratatsiyadan OLDIN body'ga
          `intro-on` qo'yadi (birinchi kadr miltillamasin). Serverda bu klass
          yo'q — React buni nomuvofiqlik deb hisoblardi. Klassni serverda
          chizib bo'lmaydi: `intro-on` — bu `overflow:hidden`, va intro yo'q
          sahifalarda uni hech kim olib tashlamaydi, skroll qotib qolardi.
          suppressHydrationWarning aynan shu holat uchun: faqat shu
          elementning atributlari tekshirilmaydi, ichkarisi emas. */}
      <body suppressHydrationWarning>
        {/* Bloklarni CSS bilan yashirishga RUXSAT beruvchi kalit. `.rise` va
            `.mask > i` ni ochadigan yagona narsa — JS qo'yadigan `.is-in`.
            Chunk yetib kelmasa, sahifa bo'sh qolardi: logotipdan boshqa hech
            narsa, jumladan ariza formasi ham ko'rinmasdi.
            Shuning uchun yashirish endi shartli. Skript body'ning BIRINCHI
            farzandi — `.rise` hali o'qilmagan, miltillash bo'lmaydi.
            Qo'riqchi: `load` dan 1,5 s keyin (yoki 8 s da, agar `load`
            umuman bo'lmasa) gidratatsiya belgisi yo'q bo'lsa — kalitni
            olib tashlaymiz va hamma narsa ochiladi. Erta ishlagani
            animatsiyani yo'qotadi, mazmunni emas. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var b=document.body;' +
              "if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){" +
              "b.classList.add('js-anim');" +
              "var s=function(){if(!b.classList.contains('is-hydrated'))b.classList.remove('js-anim')};" +
              'var c=setTimeout(s,8000);' +
              "window.addEventListener('load',function(){setTimeout(function(){clearTimeout(c);s()},1500)})" +
              '}}catch(e){}',
          }}
        />
        <a href="#main" className="skip-link">
          {dictionary.nav.skipToContent}
        </a>

        {/* Maketning body darajasidagi qatlamlari: donadorlik, kursor, fon-kanvas */}
        <div className="grain" aria-hidden="true" />
        <span className="cur" id="cur" aria-hidden="true" />
        <canvas className="fx" id="fx" aria-hidden="true" />

        <LanguageProvider language={language} dictionary={dictionary}>
          {children}
        </LanguageProvider>

        <Script src="/fx.js" strategy="afterInteractive" />

        {gaId && (
          /* gtag.js — 170 KB, sahifadagi ENG OG'IR resurs, va u gidratatsiya
             bilan bir vaqtda kelardi: Slow 4G da bu taxminan ikki soniya,
             aynan brauzer eng band paytda.
             Endi kutubxonaning O'ZI kechiktiriladi — birinchi harakatgacha yoki
             3 soniyagacha. Lekin `dataLayer` va `gtag()` zaxirasi DARHOL
             qo'yiladi: shu sababli `config` ham, formadagi `lead_submit` ham
             navbatga tushadi va kutubxona kelganda hammasi yetkaziladi.
             Yo'qoladigan yagona narsa — kutubxona kelguncha ketib qolgan
             tashriflarning page_view'i. */
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html:
                `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
                `gtag('js',new Date());gtag('config','${gaId}',{page_path:window.location.pathname});` +
                `(function(){var go=function(){if(document.getElementById('gtag-lib'))return;` +
                `var s=document.createElement('script');s.id='gtag-lib';s.async=!0;` +
                `s.src='https://www.googletagmanager.com/gtag/js?id=${gaId}';` +
                `document.head.appendChild(s)};var t=setTimeout(go,3000);` +
                `['pointerdown','keydown','scroll'].forEach(function(ev){` +
                `window.addEventListener(ev,function(){clearTimeout(t);go()},{once:true,passive:true})})})();`,
            }}
          />
        )}

        {metaPixelId && (
          <>
            {/* `lazyOnload` bo'sh daqiqani kutadi, bosh sahifa esa unga hech
                qachon kirmaydi: hero maketi va fon kanvasi ko'rinib turgan
                ekan, asosiy oqim band. O'lchov: CPU 4x + Slow 4G da 25 soniya
                kuzatuvda facebook ga 0 ta so'rov, `window.fbq === undefined`,
                ya'ni reklama ko'r-ko'rona ishlaydi.
                Endi piksel gidratatsiyaga xalaqit bermaydi, lekin baribir
                yuklanadi: birinchi harakatda yoki 3 soniyadan keyin. */}
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(){var go=function(){if(window.fbq)return;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView')};var t=setTimeout(go,3000);['pointerdown','keydown','scroll'].forEach(function(ev){window.addEventListener(ev,function(){clearTimeout(t);go()},{once:true,passive:true})})})();`,
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
