import type { MetadataRoute } from 'next'
import { languages } from '@/lib/languages'
import { localizedPath } from '@/lib/paths'
import { portfolioCatalog } from '@/lib/portfolio-catalog'
import { serviceCatalog } from '@/lib/service-catalog'
import { siteUrl } from '@/lib/site-url'

type Entry = MetadataRoute.Sitemap[number]

function alternatesFor(path: string) {
  const map: Record<string, string> = {}
  for (const language of languages) map[language] = `${siteUrl}${localizedPath(language, path)}`
  return map
}

/** Har bir sahifa uchun uchala til — hreflang bilan. */
function entriesFor(path: string, options: Pick<Entry, 'changeFrequency' | 'priority' | 'lastModified'>): Entry[] {
  const languageMap = alternatesFor(path)

  return languages.map(language => ({
    url: `${siteUrl}${localizedPath(language, path)}`,
    alternates: { languages: languageMap },
    ...options,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    ...entriesFor('/', { lastModified: now, changeFrequency: 'weekly', priority: 1 }),
    ...entriesFor('/services', { lastModified: now, changeFrequency: 'monthly', priority: 0.9 }),
    ...entriesFor('/portfolio', { lastModified: now, changeFrequency: 'monthly', priority: 0.9 }),
    ...serviceCatalog.flatMap(service =>
      entriesFor(`/services/${service.slug}`, {
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      }),
    ),
    ...portfolioCatalog.flatMap(project =>
      entriesFor(`/portfolio/${project.slug}`, {
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.75,
      }),
    ),
    ...entriesFor('/privacy', {
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
    ...entriesFor('/terms', {
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'yearly',
      priority: 0.2,
    }),
  ]
}
