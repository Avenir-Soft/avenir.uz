import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { defaultLanguage, isLanguage } from '@/lib/languages'

const WWW_HOST = 'www.avenir.uz'
const APEX_HOST = 'avenir.uz'

function getHost(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')
  const host = forwardedHost ?? request.headers.get('host')

  if (!host) return null
  return host.split(':')[0].toLowerCase()
}

export function proxy(request: NextRequest) {
  const host = getHost(request)

  if (host === WWW_HOST) {
    const url = request.nextUrl.clone()
    url.hostname = APEX_HOST
    url.port = ''
    url.protocol = 'https'
    return NextResponse.redirect(url, 308)
  }

  const { pathname } = request.nextUrl
  const firstSegment = pathname.split('/').filter(Boolean)[0]

  // Til prefiksi bor — tegmaymiz.
  if (firstSegment && isLanguage(firstSegment)) return NextResponse.next()

  /* Ildiz HAR DOIM o'zbek tiliga ketadi — brauzer tiliga qaramay (egasining
     qarori). Ilgari bu yerda Accept-Language bo'yicha tanlov bor edi: rus
     brauzeri /ru ga, ingliz brauzeri /en ga tushardi. Endi tanlov yo'q, javob
     Accept-Language'ga bog'liq emas — shuning uchun `Vary` ham kerak emas.
     Qolgan eski manzillar next.config redirects'ida hal qilinadi. */
  if (pathname === '/' || pathname === '') {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLanguage}`
    return NextResponse.redirect(url, 307)
  }

  return NextResponse.next()
}

/* Nuqta ikki teskari chiziq bilan yoziladi. Satr ichida `\.` shunchaki `.` ga
   aylanardi va shablon `.*..*` bo'lib qolardi — bu esa bitta belgidan uzun
   HAR QANDAY yo'lni istisnoga tushirardi. Natijada proxy faqat `/` da ishlagan:
   www.avenir.uz/ru apeksga yo'naltirilmay, sayt ikkita xostda ochilaverardi. */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)'],
}
