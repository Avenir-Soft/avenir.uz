export type PortfolioSlug =
  | 'saffron-market'
  | 'medlink-uz'
  | 'tashtrack'
  | 'educore'
  | 'halal-finance'
  | 'textile-hub'

export type ProjectLayout = 'feature' | 'wide' | 'tile'

export interface PortfolioProject {
  id: number
  slug: PortfolioSlug
  year: number
  image: string
  layout: ProjectLayout
}

export const portfolioCatalog: PortfolioProject[] = [
  {
    id: 1,
    slug: 'saffron-market',
    year: 2025,
    image: '/portfolio/saffron-market.webp',
    layout: 'feature',
  },
  {
    id: 2,
    slug: 'medlink-uz',
    year: 2024,
    image: '/portfolio/medlink-uz.webp',
    layout: 'wide',
  },
  {
    id: 3,
    slug: 'tashtrack',
    year: 2024,
    image: '/portfolio/tashtrack.webp',
    layout: 'wide',
  },
  {
    id: 4,
    slug: 'educore',
    year: 2024,
    image: '/portfolio/educore.webp',
    layout: 'tile',
  },
  {
    id: 5,
    slug: 'halal-finance',
    year: 2024,
    image: '/portfolio/halal-finance.webp',
    layout: 'tile',
  },
  {
    id: 6,
    slug: 'textile-hub',
    year: 2023,
    image: '/portfolio/textile-hub.webp',
    layout: 'tile',
  },
]

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return portfolioCatalog.find(project => project.slug === slug)
}
