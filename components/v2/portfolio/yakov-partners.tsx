/* Maket: design/v2/yakov-partners.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function PrjYakovPartners({ lang }: { lang: Language }) {
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
						<a href={localizedPath(lang, '/portfolio')}>{tv(lang, 'Loyihalar')}</a>
						<span>{'/'}</span>
						<b>{tv(lang, 'Yakov and Partners')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={localizedPath(lang, '/portfolio')}>
								<i></i>
								{tv(lang, 'Loyihalarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'Konsalting')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Ishonch sotadigan sayt')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'Yakov and Partners — 200 dan ortiq xodimga ega xalqaro konsalting kompaniyasi. Bunday bozorda sayt mahsulot sotmaydi — u kompaniyaning og\'irligini ko\'rsatadi. Shuning uchun asosiy vazifa: ortiqcha shovqinsiz, ikki tilda va telefonda ham xuddi shunday vazmin ko\'rinadigan sayt qilish.')}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Shunday sayt kerakmi?')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href={`${svc('web-sites')}`}>{tv(lang, 'Veb saytlar haqida')}</a>
							</div>
						</div>
						<aside className="gc spec rise" style={{ '--d': '220ms' }}>
							<p className="spec__l">{tv(lang, 'Yil')}</p>
							<p className="spec__v">{'2025'}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Bizning ish')}</p>
							<div className="chips">
								<span>{tv(lang, 'Korporativ sayt')}</span>
								<span>{tv(lang, 'Dizayn')}</span>
								<span>{tv(lang, 'Frontend')}</span>
								<span>{tv(lang, 'Adaptiv versiya')}</span>
								<span>{tv(lang, 'Kontent tuzilmasi')}</span>
								<span>{tv(lang, 'Ikki til')}</span>
							</div>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Sayt bo\'limlari')}</p>
							<div className="chips">
								<span>{tv(lang, 'About us')}</span>
								<span>{tv(lang, 'Industries')}</span>
								<span>{tv(lang, 'Publications')}</span>
								<span>{tv(lang, 'In the media')}</span>
								<span>{tv(lang, 'Team')}</span>
								<span>{tv(lang, 'Career')}</span>
								<span>{tv(lang, 'Contacts')}</span>
							</div>
						</aside>
					</div>
					<div className="cover rise" style={{ '--d': '320ms' }}>
						<div className="chrome" aria-hidden="true">
							<i></i>
							<i></i>
							<i></i>
							<span>{tv(lang, 'yakovpartners.com')}</span>
						</div>
						<img src="/work/yakov-partners/01-bosh-sahifa.jpg" alt={tva(lang, 'Yakov and Partners bosh sahifasi: qorong\'i hero va uchta oq kartochka')} width="1280" height="724" loading="eager" />
					</div>
					<div className="kv">
						<div className="gc kv__i rise">
							<b>{'200+'}</b>
							<span>{tv(lang, 'kompaniya xodimi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '60ms' }}>
							<b>{'120+'}</b>
							<span>{tv(lang, 'mamlakat ekspert tarmog\'i')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '120ms' }}>
							<b>{'7'}</b>
							<span>{tv(lang, 'sayt bo\'limi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '180ms' }}>
							<b>{'2'}</b>
							<span>{tv(lang, 'til: rus va ingliz')}</span>
						</div>
					</div>
				</div>
			</section>
			<section className="section" data-sec="yechimlar">
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Vazifa')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Nimadan boshladik')}
						</Split>
					</div>
					<div className="duo">
						<div className="gc duo__i rise">
							<em>{tv(lang, 'Muammo')}</em>
							<h3>{tv(lang, 'Konsaltingda sayt — vizitka emas, dalil')}</h3>
							<p>{tv(lang, 'Mijoz bu yerga narx qidirib kelmaydi. U kompaniya kimligini, kim bilan ishlaganini va qanday sohalarni tushunishini tekshirgani keladi. Bunday matn ko\'p bo\'ladi va uni chalkashtirmasdan joylashtirish kerak.')}</p>
							<ul>
								<li>{tv(lang, 'Ko\'p yo\'nalish: metallurgiya, neft-gaz, qurilish, energetika, bank, telekom, riteyl')}</li>
								<li>{tv(lang, 'Nashrlar, matbuotdagi chiqishlar va jamoa — har biri alohida bo\'lim')}</li>
								<li>{tv(lang, 'Ikki til, ikkalasida ham bir xil sifat')}</li>
							</ul>
						</div>
						<div className="gc duo__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Yechim')}</em>
							<h3>{tv(lang, 'Vazmin tipografiya va aniq iyerarxiya')}</h3>
							<p>{tv(lang, 'Qorong\'i hero va bitta kuchli jumla — kompaniya nima qilishini bir qarashda aytadi. Uning ostiga uchta oq kartochka chiqib turadi: tashkiliy tuzilma, soha ekspertizasi va analitika. Foydalanuvchi pastga tushishidan oldin asosiy javobni oladi.')}</p>
							<ul>
								<li>{tv(lang, 'Serif sarlavhalar — konsalting bozorining tili')}</li>
								<li>{tv(lang, 'Hero ustiga chiqqan kartochkalar sahifani darrov «boshlaydi»')}</li>
								<li>{tv(lang, 'Uchta asosiy yo\'nalish keyingi ekranda — matn va rasm juftligida')}</li>
								<li>{tv(lang, 'Til almashtirish sarlavhaning o\'ng chekkasida, xalaqit bermaydi')}</li>
							</ul>
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
							{tv(lang, 'Sayt qanday ko\'rinadi')}
						</Split>
					</div>
					<div className="shots">
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'01'}</span>
									<h3>{tv(lang, 'Bosh sahifa')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Ekranni to\'liq egallagan qorong\'i hero va bitta jumla: «Strategies for the new reality». Uning ostidan uchta oq kartochka chiqib turadi — ular hero\'ni «kesib», sahifani darhol mazmunga olib o\'tadi.')}</p>
									<ul>
										<li>{tv(lang, 'Tashkiliy tuzilma, soha ekspertizasi va analitika — uchta javob')}</li>
										<li>{tv(lang, '«Uch asosiy yo\'nalish» bloki: matn va rasm navbatlashadi')}</li>
										<li>{tv(lang, 'Yuqori panel: yettita bo\'lim va RU / EN almashtirgichi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'yakovpartners.com')}</span>
								</div>
								<img src="/work/yakov-partners/01-bosh-sahifa.jpg" alt={tva(lang, 'Bosh sahifa: hero, uchta oq kartochka, uch yo\'nalish bloki')} width="1280" height="724" loading="lazy" />
							</div>
						</figure>
						<figure className="shot shot--tall shot--flip rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'02'}</span>
									<h3>{tv(lang, 'Telefondagi ko\'rinish')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Telefonda ham xuddi shu iyerarxiya saqlanadi: sarlavha, tavsif, so\'ng oq kartochka. Matn kichraymaydi va siqilmaydi — shunchaki bitta ustunga tushadi, o\'qish qulay qoladi.')}</p>
									<ul>
										<li>{tv(lang, 'Menyu burger ostiga yig\'iladi, logotip markazda qoladi')}</li>
										<li>{tv(lang, 'Hero rasmi kesilmaydi — matn uning ustida o\'qiladi')}</li>
										<li>{tv(lang, 'Kartochka to\'liq kenglikda, chekkalar bir xil')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<img src="/work/yakov-partners/02-mobil.webp" alt={tva(lang, 'Yakov and Partners sayti telefonda')} width="630" height="1280" loading="lazy" />
							</div>
						</figure>
					</div>
				</div>
			</section>
			<section className="section" data-sec="jarayon" style={{ paddingTop: '0' }}>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Natija')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Nima o\'zgardi')}
						</Split>
					</div>
					<div className="out">
						<div className="gc out__i rise">
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Bir qarashda tushunarli')}</b>
							<p>{tv(lang, 'Kompaniya nima qilishi va kim ekani birinchi ekranda aytiladi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Ikki til teng')}</b>
							<p>{tv(lang, 'Rus va ingliz versiyalari bir xil tuzilma va bir xil sifatda.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Telefonda ham vazmin')}</b>
							<p>{tv(lang, 'Mobil versiya qisqartirilgan nusxa emas — o\'sha saytning to\'liq ko\'rinishi.')}</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section" data-sec="aloqa" style={{ paddingTop: '0', paddingBottom: '0' }}>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Boshqa loyihalar')}
						</span>
					</div>
					<div className="other">
						<a className="gc other__i rise" href={`${prj('defi-technologies')}`}>
							<b>{tv(lang, 'TradFi platforma')}</b>
							<p>{tv(lang, 'DeFi Technologies')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${prj('apec-asia')}`} style={{ '--d': '60ms' }}>
							<b>{tv(lang, 'E-commerce')}</b>
							<p>{tv(lang, 'APEC Asia UAE')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${prj('dagestantur')}`} style={{ '--d': '120ms' }}>
							<b>{tv(lang, 'Turizm')}</b>
							<p>{tv(lang, 'Dagestantur')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${prj('vac-uz')}`} style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'Ishlab chiqarish · ERP')}</b>
							<p>{tv(lang, 'VAC.UZ')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
					</div>
					<div className="final rise" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
						<span className="aura aura--a aura--drift"></span>
						<div className="final__in center">
							<Split>
								{tv(lang, 'Kompaniyangizga shunday sayt kerakmi?')}
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
