/* Maket: design/v2/mobil-ilova.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function SvcMobileApps({ lang }: { lang: Language }) {
	const base = localizedPath(lang, '/')
	const svc = (s: string) => localizedPath(lang, `/services/${s}`)
	const prj = (s: string) => localizedPath(lang, `/portfolio/${s}`)
	return (
		<>
			<section className="sv-hero" data-sec="hero">
				<span className="aura aura--a aura--drift" style={{ width: '820px', height: '820px', left: '50%', top: '-380px', transform: 'translateX(-50%)', opacity: '0.65' }}></span>
				<span className="aura aura--b aura--drift" style={{ width: '560px', height: '560px', right: '-200px', top: '140px', opacity: '0.5' }}></span>
				<div className="shell">
					<p className="crumb rise">
						<a href={`${base}`}>{tv(lang, 'Bosh sahifa')}</a>
						<span>{'/'}</span>
						<a href={`${base}#yechimlar`}>{tv(lang, 'Yechimlar')}</a>
						<span>{'/'}</span>
						<b>{tv(lang, 'Mobil ilovalar')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={`${base}#yechimlar`}>
								<i></i>
								{tv(lang, 'Yechimlarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'Mobil ilovalar')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Android va iOS uchun barqaror ilova')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'Bitta kod bazasidan ikkala platforma. Push bildirishnoma, oflayn rejim va ichki tizimlaringizga ulanish — xodim internetsiz ham ishlay oladi, aloqa tiklanganda hammasi sinxronlanadi.')}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Loyihani boshlash')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href={`${base}#loyihalar`}>{tv(lang, 'Ishlarimizni ko\'rish')}</a>
							</div>
						</div>
						<aside className="gc spec rise" style={{ '--d': '220ms' }}>
							<p className="spec__l">{tv(lang, 'Taxminiy muddat')}</p>
							<p className="spec__v">{tv(lang, '6–14 hafta')}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Texnologiyalar')}</p>
							<div className="chips">
								<span>{tv(lang, 'React Native')}</span>
								<span>{tv(lang, 'Expo')}</span>
								<span>{tv(lang, 'TypeScript')}</span>
								<span>{tv(lang, 'REST / GraphQL')}</span>
								<span>{tv(lang, 'Firebase')}</span>
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
							{tv(lang, 'Mobil ilovalar')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Nimalar kiradi')}
						</Split>
					</div>
					<div className="ilist">
						<div className="gc ilist__i rise">
							<b>{'01'}</b>
							<p>{tv(lang, 'Ssenariylar va prototip')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '60ms' }}>
							<b>{'02'}</b>
							<p>{tv(lang, 'iOS va Android uchun UI')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '120ms' }}>
							<b>{'03'}</b>
							<p>{tv(lang, 'Push va chuqur havolalar')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '180ms' }}>
							<b>{'04'}</b>
							<p>{tv(lang, 'Oflayn rejim va sinxronizatsiya')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '240ms' }}>
							<b>{'05'}</b>
							<p>{tv(lang, 'ERP va CRM bilan integratsiya')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '300ms' }}>
							<b>{'06'}</b>
							<p>{tv(lang, 'Do\'konlarga chiqarish va yangilanishlar')}</p>
						</div>
					</div>
					<div className="out">
						<div className="gc out__i rise">
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Ikki platforma')}</b>
							<p>{tv(lang, 'Bitta jamoa va bitta kod bazasi — ikki barobar xarajat emas.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Oflayn')}</b>
							<p>{tv(lang, 'Aloqa yo\'qolsa ham ilova ishlayveradi, keyin o\'zi sinxronlanadi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Push')}</b>
							<p>{tv(lang, 'Muhim voqea telefonga darhol tushadi — pochta kutilmaydi.')}</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section" id="ekranlar" data-sec="loyihalar" style={{ paddingTop: '0' }}>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Ekranlar')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Loyihalardan ekranlar')}
						</Split>
					</div>
					<div className="work work--1">
						<a className="gc wc rise" href={`${prj('avenir-os')}`}>
							<div className="wc__img">
								<img src="/portfolio/avenir-os.webp" alt={tva(lang, 'Avenir OS')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">{tv(lang, 'Mobil versiya · vazifalar va bildirishnomalar')}</p>
								<h3>{tv(lang, 'Avenir OS')}</h3>
								{' '}
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
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
						<a className="gc other__i rise" href={`${svc('crm-erp')}`}>
							<b>{tv(lang, 'CRM va ERP')}</b>
							<p>{tv(lang, 'Sotuv, ombor va moliya — bitta tizimda')}</p>
							<span>
								{tv(lang, 'Batafsil')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${svc('ai-bots')}`} style={{ '--d': '60ms' }}>
							<b>{tv(lang, 'AI botlar')}</b>
							<p>{tv(lang, 'Buyruqni tushunadigan yordamchi')}</p>
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
						<a className="gc other__i rise" href={`${svc('telegram-bots')}`} style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'Telegram bot va mini-app')}</b>
							<p>{tv(lang, 'Mijoz Telegramdan chiqmasdan buyurtma beradi')}</p>
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
