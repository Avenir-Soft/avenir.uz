export type PortfolioSlug =
  | 'vac-uz'
  | 'avenir-os'
  | 'yakov-partners'
  | 'defi-technologies'
  | 'apec-asia'
  | 'dagestantur'

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
    slug: 'vac-uz',
    year: 2025,
    image: '/portfolio/vac-uz.webp',
    layout: 'feature',
  },
  {
    id: 2,
    slug: 'avenir-os',
    year: 2025,
    image: '/portfolio/avenir-os.webp',
    layout: 'wide',
  },
  {
    id: 3,
    slug: 'yakov-partners',
    year: 2025,
    image: '/portfolio/yakov-partners.webp',
    layout: 'wide',
  },
  {
    id: 4,
    slug: 'defi-technologies',
    year: 2026,
    image: '/portfolio/defi-technologies.webp',
    layout: 'tile',
  },
  {
    id: 5,
    slug: 'apec-asia',
    year: 2025,
    image: '/portfolio/apec-asia.webp',
    layout: 'tile',
  },
  {
    id: 6,
    slug: 'dagestantur',
    year: 2025,
    image: '/portfolio/dagestantur.webp',
    layout: 'tile',
  },
]

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return portfolioCatalog.find(project => project.slug === slug)
}
