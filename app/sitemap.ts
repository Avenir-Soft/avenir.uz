import type { MetadataRoute } from 'next'
import { serviceCatalog } from '@/lib/service-catalog'

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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntry: MetadataRoute.Sitemap[number] = {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }

  const serviceEntries: MetadataRoute.Sitemap = serviceCatalog.map(service => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [
    baseEntry,
    ...serviceEntries,
  ]
}
