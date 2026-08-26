/* Maket: design/v2/crm-erp.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function SvcCrmErp({ lang }: { lang: Language }) {
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
						<b>{tv(lang, 'CRM va ERP')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={`${base}#yechimlar`}>
								<i></i>
								{tv(lang, 'Yechimlarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'CRM va ERP')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Sotuv, ombor va moliya — bitta tizimda')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'Bitim, hisob-faktura, ombor, jamoa va moliya — hammasi bitta tizimda. Har bir harakat avtomatik qayd etiladi, rahbar esa real vaqtda ko\'radi: qancha pul kirdi, qayerda to\'siq bor, kim nima bilan band.')}</p>
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
							<p className="spec__v">{tv(lang, '8–16 hafta')}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Texnologiyalar')}</p>
							<div className="chips">
								<span>{tv(lang, 'Next.js')}</span>
								<span>{tv(lang, 'FastAPI')}</span>
								<span>{tv(lang, 'PostgreSQL')}</span>
								<span>{tv(lang, 'Redis')}</span>
								<span>{tv(lang, 'Docker')}</span>
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
							{tv(lang, 'CRM va ERP')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Nimalar kiradi')}
						</Split>
					</div>
					<div className="ilist">
						<div className="gc ilist__i rise">
							<b>{'01'}</b>
							<p>{tv(lang, 'Jarayon auditi va texnik topshiriq')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '60ms' }}>
							<b>{'02'}</b>
							<p>{tv(lang, 'Rollar va kirish huquqlari')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '120ms' }}>
							<b>{'03'}</b>
							<p>{tv(lang, 'Sotuv voronkasi va bitimlar')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '180ms' }}>
							<b>{'04'}</b>
							<p>{tv(lang, 'Hisob-faktura, to\'lovlar va P&L')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '240ms' }}>
							<b>{'05'}</b>
							<p>{tv(lang, 'Ombor, xarid va yetkazib berish')}</p>
						</div>
						<div className="gc ilist__i rise" style={{ '--d': '300ms' }}>
							<b>{'06'}</b>
							<p>{tv(lang, 'Hisobotlar va boshqaruv paneli')}</p>
						</div>
					</div>
					<div className="out">
						<div className="gc out__i rise">
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Bitta manba')}</b>
							<p>{tv(lang, 'Barcha bo\'lim bir xil raqamga qaraydi — Excel nusxalari kerak emas.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Real vaqt')}</b>
							<p>{tv(lang, 'Rahbar oylik hisobotni kutmaydi — holatni ekranda ko\'radi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Nazorat')}</b>
							<p>{tv(lang, 'Har bir o\'zgarishni kim va qachon qilgani saqlanib qoladi.')}</p>
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
					<div className="work work--2">
						<a className="gc wc rise" href={`${prj('avenir-os')}`}>
							<div className="wc__img">
								<img src="/portfolio/avenir-os.webp" alt={tva(lang, 'Avenir OS')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">{tv(lang, 'ERP + CRM + Moliya')}</p>
								<h3>{tv(lang, 'Avenir OS')}</h3>
								{' '}
								<span className="wc__go">
									{tv(lang, 'Keysni ochish')}{' '}
									<i>{'→'}</i>
								</span>
							</div>
						</a>
						<a className="gc wc rise" href={`${prj('vac-uz')}`}>
							<div className="wc__img">
								<img src="/portfolio/vac-uz.webp" alt={tva(lang, 'VAC.UZ')} loading="lazy" />
							</div>
							<div className="wc__b">
								<p className="wc__m">{tv(lang, 'Ishlab chiqarish · hisob-kitob moduli')}</p>
								<h3>{tv(lang, 'VAC.UZ')}</h3>
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
						<a className="gc other__i rise" href={`${svc('ai-bots')}`}>
							<b>{tv(lang, 'AI botlar')}</b>
							<p>{tv(lang, 'Buyruqni tushunadigan yordamchi')}</p>
							<span>
								{tv(lang, 'Batafsil')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${svc('web-sites')}`} style={{ '--d': '60ms' }}>
							<b>{tv(lang, 'Veb saytlar')}</b>
							<p>{tv(lang, 'Ishonch uyg\'otadigan va sotadigan sayt')}</p>
							<span>
								{tv(lang, 'Batafsil')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${svc('telegram-bots')}`} style={{ '--d': '120ms' }}>
							<b>{tv(lang, 'Telegram bot va mini-app')}</b>
							<p>{tv(lang, 'Mijoz Telegramdan chiqmasdan buyurtma beradi')}</p>
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
