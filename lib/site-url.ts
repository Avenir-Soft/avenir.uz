const DEFAULT_SITE_URL = 'https://avenir.uz'

function resolveSiteUrl(value: string | undefined) {
  const candidate = value?.trim()
  if (!candidate) return DEFAULT_SITE_URL

  try {
    const url = new URL(candidate)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return DEFAULT_SITE_URL
    return url.origin
  } catch {
    return DEFAULT_SITE_URL
  }
}

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
