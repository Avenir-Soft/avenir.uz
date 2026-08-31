/* Mini-app sahifasi: maketda yo'q, «Telegram bot» sahifasining skeletida
   qo'lda yig'ilgan. Matnlar — lib/service-catalog.ts (uch tilda), umumiy
   satrlar — maket lug'atidan (tv). Egasining qarori: 2026-08-26. */
import { tv } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import { getServiceBySlug } from '@/lib/service-catalog'
import type { Language } from '@/lib/languages'

export function SvcMiniApps({ lang }: { lang: Language }) {
	const base = localizedPath(lang, '/')
	const svc = (s: string) => localizedPath(lang, `/services/${s}`)
	const c = getServiceBySlug('mini-apps')!.content[lang]
	return (
		<>
			<section className="sv-hero" data-sec="hero">
				<span className="aura aura--a aura--drift" style={{ width: '820px', height: '820px', left: '50%', top: '-380px', transform: 'translateX(-50%)', opacity: '0.65' }}></span>
				<span className="aura aura--b aura--drift" style={{ width: '560px', height: '560px', right: '-200px', top: '140px', opacity: '0.5' }}></span>
				<div className="shell">
					<p className="crumb rise">
						<a href={`${base}`}>{tv(lang, 'Bosh sahifa')}</a>
						<span>{'/'}</span>
						<a href={localizedPath(lang, '/services')}>{tv(lang, 'Yechimlar')}</a>
						<span>{'/'}</span>
						<b>{c.title}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={localizedPath(lang, '/services')}>
								<i></i>
								{tv(lang, 'Yechimlarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{c.title}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{c.teaser}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{c.intro}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Loyihani boshlash')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href={localizedPath(lang, '/portfolio')}>{tv(lang, 'Ishlarimizni ko\'rish')}</a>
							</div>
						</div>
						<aside className="gc spec rise" style={{ '--d': '220ms' }}>
							<p className="spec__l">{c.timelineLabel}</p>
							<p className="spec__v">{c.timeline}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{c.stackLabel}</p>
							<div className="chips">
								{c.stack.map(item => (
									<span key={item}>{item}</span>
								))}
							</div>
						</aside>
					</div>
				</div>
			</section>
			<section className="section" data-sec="yechimlar">
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{c.title}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{c.includedLabel}
						</Split>
					</div>
					<div className="ilist">
						{c.included.map((item, i) => (
							<div key={item} className="gc ilist__i rise" {...(i ? { style: { '--d': `${i * 60}ms` } } : {})}>
								<b>{String(i + 1).padStart(2, '0')}</b>
								<p>{item}</p>
							</div>
						))}
					</div>
					<div className="out">
						{c.outcomes.map((item, i) => (
							<div key={item} className="gc out__i rise" {...(i ? { style: { '--d': `${i * 80}ms` } } : {})}>
								<em>{c.outcomesLabel}</em>
								<b>{item}</b>
								<p></p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="section" data-sec="jarayon" style={{ paddingTop: '0' }}>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Qanday ishlaymiz')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'G\'oyadan ishga tushirishgacha')}
						</Split>
					</div>
					<div className="steps steps--4">
						<div className="gc step rise">
							<span className="step__n">{'01'}</span>
							<h4>{tv(lang, 'Chuqur audit')}</h4>
							<p>{tv(lang, 'Jarayonni ichidan o\'rganamiz va aniq talablar ro\'yxatini yig\'amiz.')}</p>
						</div>
						<div className="gc step rise" style={{ '--d': '80ms' }}>
							<span className="step__n">{'02'}</span>
							<h4>{tv(lang, 'Prototip')}</h4>
							<p>{tv(lang, 'Ekranlar va ssenariylarni ishga tushirishdan oldin kelishib olamiz.')}</p>
						</div>
						<div className="gc step rise" style={{ '--d': '160ms' }}>
							<span className="step__n">{'03'}</span>
							<h4>{tv(lang, 'Bosqichma-bosqich ishga tushirish')}</h4>
							<p>{tv(lang, 'Har 2 haftada ishlaydigan qism topshiriladi — natijani darhol ko\'rasiz.')}</p>
						</div>
						<div className="gc step rise" style={{ '--d': '240ms' }}>
							<span className="step__n">{'04'}</span>
							<h4>{tv(lang, 'Qo\'llab-quvvatlash')}</h4>
							<p>{tv(lang, 'Ishga tushgandan keyin ham monitoring, yangilanish va rivojlantirish.')}</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section" data-sec="aloqa" style={{ paddingTop: '0', paddingBottom: '0' }}>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Boshqa yechimlar')}
						</span>
					</div>
					<div className="other">
						<a className="gc other__i rise" href={`${svc('telegram-bots')}`}>
							<b>{tv(lang, 'Telegram bot va mini-app')}</b>
							<p>{tv(lang, 'Mijoz Telegramdan chiqmasdan buyurtma beradi')}</p>
							<span>
								{tv(lang, 'Batafsil')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${svc('crm-erp')}`} style={{ '--d': '60ms' }}>
							<b>{tv(lang, 'CRM va ERP')}</b>
							<p>{tv(lang, 'Sotuv, ombor va moliya — bitta tizimda')}</p>
							<span>
								{tv(lang, 'Batafsil')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${svc('web-sites')}`} style={{ '--d': '120ms' }}>
							<b>{tv(lang, 'Veb saytlar')}</b>
							<p>{tv(lang, 'Ishonch uyg\'otadigan va sotadigan sayt')}</p>
							<span>
								{tv(lang, 'Batafsil')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${svc('mobile-apps')}`} style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'Mobil ilovalar')}</b>
							<p>{tv(lang, 'Android va iOS uchun barqaror ilova')}</p>
							<span>
								{tv(lang, 'Batafsil')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
					</div>
					<div className="final rise" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
						<span className="aura aura--a aura--drift"></span>
						<div className="final__in center">
							<Split>
								{tv(lang, 'Loyihani muhokama qilamiz')}
							</Split>
							<p className="p-sec rise" style={{ '--d': '80ms' }}>{tv(lang, 'Brif to\'ldirish shart emas — qisqacha yozing, qolganini savol berib aniqlaymiz.')}</p>
							<div className="hero__cta rise" style={{ '--d': '160ms' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Loyihani boshlash')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href="https://t.me/avenir_uz" target="_blank" rel="noopener noreferrer">{tv(lang, 'Telegram')}</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
