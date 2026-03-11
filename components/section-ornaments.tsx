import { cn } from '@/lib/utils'

interface SectionOrnamentsProps {
  tone?: 'light' | 'dark'
  className?: string
}

interface LogoStarProps {
  className?: string
  color: string
}

function LogoStar({ className, color }: LogoStarProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn('ornament-star', className)}
      style={{ color }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="32" y1="6" x2="32" y2="58" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="32" cy="5" r="2.3" fill="currentColor" />
      <circle cx="32" cy="59" r="2.3" fill="currentColor" />
      <circle cx="5" cy="32" r="2.3" fill="currentColor" />
      <circle cx="59" cy="32" r="2.3" fill="currentColor" />
      <path d="M32 20L36.5 27.5L44 32L36.5 36.5L32 44L27.5 36.5L20 32L27.5 27.5Z" fill="currentColor" />
    </svg>
  )
}

export function SectionOrnaments({ tone = 'light', className }: SectionOrnamentsProps) {
  const ringPrimary = tone === 'dark' ? 'rgba(201, 168, 76, 0.34)' : 'rgba(4, 33, 71, 0.2)'
  const ringSecondary = tone === 'dark' ? 'rgba(245, 244, 240, 0.3)' : 'rgba(201, 168, 76, 0.38)'
  const dotColor = tone === 'dark' ? 'rgba(232, 201, 122, 0.35)' : 'rgba(4, 33, 71, 0.18)'
  const starPrimary = tone === 'dark' ? 'rgba(240, 216, 145, 0.75)' : 'rgba(4, 33, 71, 0.45)'
  const starSecondary = tone === 'dark' ? 'rgba(245, 244, 240, 0.7)' : 'rgba(201, 168, 76, 0.82)'

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <span
        className="ornament-spin ornament-hide-mobile absolute -right-20 -top-16 h-44 w-44 rounded-full"
        style={{ color: ringPrimary }}
      />
      <span
        className="ornament-spin-reverse absolute -left-12 bottom-10 h-32 w-32 rounded-full"
        style={{ color: ringSecondary }}
      />
      <span
        className="ornament-dot absolute right-[14%] top-[38%] h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: dotColor }}
      />
      <LogoStar
        className="ornament-star-spin absolute left-[10%] top-[18%] h-6 w-6 md:h-7 md:w-7"
        color={starPrimary}
      />
      <LogoStar
        className="ornament-star-spin-reverse ornament-hide-mobile absolute bottom-[18%] right-[12%] h-7 w-7 md:h-8 md:w-8"
        color={starSecondary}
      />
      <LogoStar
        className="ornament-star-float absolute right-[28%] top-[24%] h-5 w-5 md:h-6 md:w-6"
        color={starSecondary}
      />
    </div>
  )
}
