import { defaultLanguage, isLanguage, languages, type Language } from '@/lib/languages'

/** `/uz`, `/ru/services/web-sites` — har doim til prefiksi bilan. */
export function localizedPath(language: Language, path = '/') {
  if (!path || path === '/') return `/${language}`
  const suffix = path.startsWith('/') ? path : `/${path}`
  return `/${language}${suffix}`
}

/** Manzildan tilni ajratib oladi: `/ru/privacy` -> { language: 'ru', rest: '/privacy' } */
export function splitLanguageFromPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const [first, ...rest] = segments

  if (first && isLanguage(first)) {
    return { language: first, rest: rest.length ? `/${rest.join('/')}` : '/' }
  }

  return { language: defaultLanguage, rest: segments.length ? `/${segments.join('/')}` : '/' }
}

/** Joriy sahifada qolib, faqat tilni almashtiradi. */
export function switchLanguagePath(pathname: string, next: Language) {
  return localizedPath(next, splitLanguageFromPath(pathname).rest)
}

export function siteUrlFor(siteUrl: string, language: Language, path = '/') {
  return `${siteUrl}${localizedPath(language, path)}`
}

/** Metadata uchun hreflang jadvali: uz / ru / en + x-default. */
export function languageAlternates(path = '/') {
  const map: Record<string, string> = {}
  for (const language of languages) map[language] = localizedPath(language, path)
  map['x-default'] = localizedPath(defaultLanguage, path)
  return map
}
