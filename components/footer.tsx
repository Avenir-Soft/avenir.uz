'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'
import Link from 'next/link'
import { localizedPath } from '@/lib/paths'
import { Logo } from './logo'

export function Footer() {
	const currentYear = new Date().getFullYear()
	const { t, language } = useLanguage()

	return (
		<footer
			className='section-shell-dark relative overflow-hidden'
			style={{
				backgroundColor: '#042147',
				color: '#F5F4F0',
				borderTop: '2px solid #C9A84C',
			}}
		>
			<SectionOrnaments tone='dark' />

			<div className='relative z-10 max-w-7xl mx-auto px-6 py-16'>
				<div className='flex flex-col items-center gap-4 mb-12'>
					<span style={{ color: '#F5F4F0' }}>
						<Logo className='w-auto h-10' />
					</span>
					<p
						className='text-sm leading-relaxed text-center max-w-sm'
						style={{ color: 'rgba(245, 244, 240, 0.7)' }}
					>
						{t.footer.description}
					</p>
				</div>

				<div
					className='h-px mb-8'
					style={{ backgroundColor: 'rgba(201, 168, 76, 0.2)' }}
				/>

				<div className='flex flex-col md:flex-row md:items-end justify-between gap-6'>
					<div className='text-center md:text-left'>
						<p
							className='text-sm'
							style={{ color: 'rgba(245, 244, 240, 0.75)' }}
						>
							{t.footer.legalEntity}
						</p>
						<p
							className='text-xs mt-1 leading-relaxed'
							style={{ color: 'rgba(245, 244, 240, 0.55)' }}
						>
							{t.footer.legalAddress}
						</p>
						<p
							className='text-xs mt-3'
							style={{ color: 'rgba(245, 244, 240, 0.5)' }}
						>
							© {currentYear} Avenir.uz · {t.footer.rightsSuffix}
						</p>
					</div>

					<div className='flex gap-6 justify-center md:justify-end'>
						<Link
							href={localizedPath(language, '/privacy')}
							className='text-sm transition-colors'
							style={{ color: 'rgba(245, 244, 240, 0.6)' }}
						>
							{t.footer.legalLinks.privacy}
						</Link>
						<Link
							href={localizedPath(language, '/terms')}
							className='text-sm transition-colors'
							style={{ color: 'rgba(245, 244, 240, 0.6)' }}
						>
							{t.footer.legalLinks.terms}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
