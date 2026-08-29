/* Maket: design/v2/index.html, bo'lim В«». Avtogeneratsiyadan keyin qo'lda o'ralgan. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'
import type { ElementType } from 'react'

/* Bosh sahifada bu — bo'lim (h2), /portfolio sahifasida esa sahifaning
   o'zi (h1). Shuning uchun sarlavha darajasi tashqaridan beriladi. */
export function HomeProjects({ lang, titleAs = 'h2' }: { lang: Language; titleAs?: ElementType }) {
	const prj = (s: string) => localizedPath(lang, `/portfolio/${s}`)
	return (
		<>
			{/* ===================== LOYIHALAR ===================== */}
			<section className="section" id="loyihalar" data-sec="loyihalar">
				<span className="aura aura--a aura--drift" style={{ width: '620px', height: '620px', left: '-240px', top: '10%', opacity: '0.45' }}></span>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Loyihalar')}
						</span>
						<Split as={titleAs} className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Haqiqiy natija bergan mahsulotlar')}
						</Split>
					</div>
					<div className="work">
						<a className="gc wc rise" href={`${prj('vac-uz')}`}>
							<div className="wc__img">
								<img src="/portfolio/vac-uz.webp" alt={tva(lang, 'VAC.UZ')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">
									{tv(lang, 'Ishlab chiqarish · ERP')}
									<span>{'2025'}</span>
								</p>
								<h3>{tv(lang, 'VAC.UZ')}</h3>
								<p>{tv(lang, 'Ventilyatsiya kanal ishlab chiqaruvchi kompaniya uchun sayt va hisob-kitob tizimi.')}</p>
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
						<a className="gc wc rise" style={{ '--d': '80ms' }} href={`${prj('avenir-os')}`}>
							<div className="wc__img">
								<img src="/portfolio/avenir-os.webp" alt={tva(lang, 'Avenir OS')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">
									{tv(lang, 'ERP + CRM + Moliya')}
									<span>{'2026'}</span>
								</p>
								<h3>{tv(lang, 'Avenir OS')}</h3>
								<p>{tv(lang, 'Barcha operatsion vazifalarni yagona ilovada boshqarish uchun tizim.')}</p>
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
						<a className="gc wc rise" style={{ '--d': '160ms' }} href={`${prj('yakov-partners')}`}>
							<div className="wc__img">
								<img src="/portfolio/yakov-partners.webp" alt={tva(lang, 'Yakov and Partners')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">
									{tv(lang, 'Konsalting')}
									<span>{'2025'}</span>
								</p>
								<h3>{tv(lang, 'Yakov and Partners')}</h3>
								<p>{tv(lang, 'Xalqaro konsalting kompaniyasi uchun korporativ sayt va analitik platforma.')}</p>
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
						<a className="gc wc rise" href={`${prj('defi-technologies')}`}>
							<div className="wc__img">
								<img src="/portfolio/defi-technologies.webp" alt={tva(lang, 'DeFi Technologies')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">
									{tv(lang, 'TradFi platforma')}
									<span>{'2026'}</span>
								</p>
								<h3>{tv(lang, 'DeFi Technologies')}</h3>
								<p>{tv(lang, 'Raqamli aktivlarga institutsional kirish imkonini beruvchi platforma.')}</p>
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
						<a className="gc wc rise" style={{ '--d': '80ms' }} href={`${prj('apec-asia')}`}>
							<div className="wc__img">
								<img src="/portfolio/apec-asia.webp" alt={tva(lang, 'APEC Asia UAE')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">
									{tv(lang, 'E-commerce')}
									<span>{'2025'}</span>
								</p>
								<h3>{tv(lang, 'APEC Asia UAE')}</h3>
								<p>{tv(lang, 'BAA da global ulgurji avto ehtiyot qismlari yetkazib berish platformasi.')}</p>
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
						<a className="gc wc rise" style={{ '--d': '160ms' }} href={`${prj('dagestantur')}`}>
							<div className="wc__img">
								<img src="/portfolio/dagestantur.webp" alt={tva(lang, 'Dagestantur')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">
									{tv(lang, 'Turizm')}
									<span>{'2025'}</span>
								</p>
								<h3>{tv(lang, 'Dagestantur')}</h3>
								<p>{tv(lang, 'Tur agentligi uchun bronirovanie va marshrutlarni ko\'rsatuvchi sayt.')}</p>
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
					</div>
				</div>
			</section>
		</>
	)
}
