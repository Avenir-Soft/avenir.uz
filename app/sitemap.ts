import type { MetadataRoute } from 'next'
import { portfolioCatalog } from '@/lib/portfolio-catalog'
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

  const portfolioEntries: MetadataRoute.Sitemap = portfolioCatalog.map(project => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  const legalEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [
    baseEntry,
    ...serviceEntries,
    ...portfolioEntries,
    ...legalEntries,
  ]
}
