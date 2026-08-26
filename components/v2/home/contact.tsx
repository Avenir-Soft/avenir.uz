/* Maket: design/v2/index.html, bo'lim «YAKUNIY BLOK». Forma — jonli komponent. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { V2ContactForm } from '@/components/v2/home/contact-form'
import type { Language } from '@/lib/languages'

export function HomeContact({ lang }: { lang: Language }) {

	return (
		<>
			{/* ===================== YAKUNIY BLOK ===================== */}
			<section className="section" id="aloqa" data-sec="aloqa" style={{ paddingBottom: '0' }}>
				<div className="shell">
					<div className="final rise">
						<span className="aura aura--a aura--drift"></span>
						<div className="final__in">
							<Split>
								{tv(lang, 'Loyihangizni')}{' '}
								<span className="grad-text">{tv(lang, 'bugun')}</span>
								{' '}{tv(lang, 'boshlang')}
							</Split>
							<div className="final__grid">
								<div>
									<div className="cols">
										<div className="col">
											<h5>{tv(lang, 'Aloqa')}</h5>
											<a href="tel:+998935298807">
												<b>{'+998'}</b>
												{' '}{'93 529 88 07'}
											</a>
											<a href="mailto:info@avenir.uz" style={{ marginTop: '0.5rem' }}>{tv(lang, 'info@avenir.uz')}</a>
											<p style={{ marginTop: '0.5rem', color: 'var(--w-34)' }}>{tv(lang, 'Toshkent, O\'zbekiston')}</p>
										</div>
										<div className="col">
											<h5>{tv(lang, 'Ijtimoiy tarmoqlar')}</h5>
											<div className="socials">
												<a href="https://www.instagram.com/avenir.uz/" target="_blank" rel="noopener noreferrer" aria-label={tva(lang, 'Instagram')}>
													<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
														<rect x="3" y="3" width="18" height="18" rx="5" />
														<circle cx="12" cy="12" r="4" />
														<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
													</svg>
												</a>
												<a href="https://t.me/avenir_uz" target="_blank" rel="noopener noreferrer" aria-label={tva(lang, 'Telegram')}>
													<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
														<path d="M21.5 4L2.8 11.2l5.6 1.8L19 6.5l-8.2 8.1.3 5.9 2.8-4 4.4 3.2z" />
													</svg>
												</a>
												<a href="mailto:info@avenir.uz" aria-label={tva(lang, 'Email')}>
													<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
														<rect x="2.5" y="4.5" width="19" height="15" rx="3" />
														<path d="M3 6l9 6 9-6" />
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
								<V2ContactForm lang={lang} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
