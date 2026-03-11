'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionOrnaments } from '@/components/section-ornaments'
import { Logo } from './logo'

export function Footer() {
	const currentYear = new Date().getFullYear()
	const { t } = useLanguage()

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
				<div className='grid md:grid-cols-4 gap-12 mb-12'>
					<div className='space-y-4'>
						<Logo />
						<p
							className='text-sm leading-relaxed'
							style={{ color: 'rgba(245, 244, 240, 0.7)' }}
						>
							{t.footer.description}
						</p>
					</div>

					<div>
						<h4
							className='font-serif font-bold mb-6'
							style={{ color: '#F5F4F0' }}
						>
							{t.footer.sections.company}
						</h4>
						<ul className='space-y-3'>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.companyLinks.about}
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.companyLinks.blog}
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.companyLinks.careers}
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.companyLinks.contact}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4
							className='font-serif font-bold mb-6'
							style={{ color: '#F5F4F0' }}
						>
							{t.footer.sections.services}
						</h4>
						<ul className='space-y-3'>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.serviceLinks.web}
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.serviceLinks.app}
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.serviceLinks.ux}
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									{t.footer.serviceLinks.consulting}
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4
							className='font-serif font-bold mb-6'
							style={{ color: '#F5F4F0' }}
						>
							{t.footer.sections.contact}
						</h4>
						<ul className='space-y-3'>
							<li>
								<a
									href='mailto:info@avenir.uz'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									info@avenir.uz
								</a>
							</li>
							<li>
								<a
									href='tel:+998712345678'
									className='text-sm transition-colors'
									style={{ color: 'rgba(245, 244, 240, 0.7)' }}
								>
									+998 93 529 88 07
								</a>
							</li>
							<li
								className='text-sm'
								style={{ color: 'rgba(245, 244, 240, 0.7)' }}
							>
								{t.footer.locationValue}
							</li>
						</ul>
					</div>
				</div>

				<div
					className='h-px mb-8'
					style={{ backgroundColor: 'rgba(201, 168, 76, 0.2)' }}
				/>

				<div className='flex flex-col md:flex-row items-center justify-between'>
					<p className='text-sm' style={{ color: 'rgba(245, 244, 240, 0.6)' }}>
						© {currentYear} Avenir.uz · {t.footer.rightsSuffix}
					</p>

					<div className='flex gap-6 mt-6 md:mt-0'>
						<a
							href='#'
							className='text-sm transition-colors'
							style={{ color: 'rgba(245, 244, 240, 0.6)' }}
						>
							{t.footer.legalLinks.privacy}
						</a>
						<a
							href='#'
							className='text-sm transition-colors'
							style={{ color: 'rgba(245, 244, 240, 0.6)' }}
						>
							{t.footer.legalLinks.terms}
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
