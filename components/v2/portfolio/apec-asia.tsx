/* Maket: design/v2/apec-asia.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function PrjApecAsia({ lang }: { lang: Language }) {
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
						<a href={`${base}#loyihalar`}>{tv(lang, 'Loyihalar')}</a>
						<span>{'/'}</span>
						<b>{tv(lang, 'APEC Asia UAE')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={`${base}#loyihalar`}>
								<i></i>
								{tv(lang, 'Loyihalarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'E-commerce')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Qidiruvdan boshlanadigan ulgurji katalog')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'APEC AUTO — Dubaydan dunyo bo\'ylab avto ehtiyot qismlar yetkazib beruvchi ulgurji platforma. Bu yerda mijoz «ko\'rib chiqish» uchun kelmaydi: uning qo\'lida artikul bor va u bir necha soniyada narx bilan yetkazib berish shartini bilishi kerak.')}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Shunday platforma kerakmi?')}{' '}
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
								<span>{tv(lang, 'E-commerce')}</span>
								<span>{tv(lang, 'Katalog qidiruvi')}</span>
								<span>{tv(lang, 'Dizayn')}</span>
								<span>{tv(lang, 'Frontend')}</span>
								<span>{tv(lang, 'Adaptiv versiya')}</span>
								<span>{tv(lang, 'Onlayn chat')}</span>
							</div>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Sayt bo\'limlari')}</p>
							<div className="chips">
								<span>{tv(lang, 'About company')}</span>
								<span>{tv(lang, 'Catalog')}</span>
								<span>{tv(lang, 'For wholesale clients')}</span>
								<span>{tv(lang, 'For suppliers')}</span>
								<span>{tv(lang, 'Michelin')}</span>
								<span>{tv(lang, 'Help')}</span>
								<span>{tv(lang, 'Contacts')}</span>
							</div>
						</aside>
					</div>
					<div className="cover rise" style={{ '--d': '320ms' }}>
						<div className="chrome" aria-hidden="true">
							<i></i>
							<i></i>
							<i></i>
							<span>{tv(lang, 'apecauto.com')}</span>
						</div>
						<img src="/work/apec-asia/01-katalog.jpg" alt={tva(lang, 'APEC AUTO bosh sahifasi: qidiruv paneli, yetkazib berish bazisi, yangiliklar')} width="1280" height="724" loading="eager" />
					</div>
					<div className="kv">
						<div className="gc kv__i rise">
							<b>{'7'}</b>
							<span>{tv(lang, 'sayt bo\'limi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '60ms' }}>
							<b>{'2'}</b>
							<span>{tv(lang, 'qidiruv rejimi: artikul va analog')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '120ms' }}>
							<b>{'5'}</b>
							<span>{tv(lang, 'yangilik slaydi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'DXB-EXW')}</b>
							<span>{tv(lang, 'yetkazib berish bazisi tanlanadi')}</span>
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
							<h3>{tv(lang, 'Ulgurji xaridor katalogni varaqlamaydi')}</h3>
							<p>{tv(lang, 'Avto ehtiyot qismlar bozorida xarid boshqacha ketadi. Xaridorda aniq artikul bor yoki unga arzonroq analog kerak. Agar u qidiruvni birinchi ekranda topmasa — boshqa saytga o\'tadi.')}</p>
							<ul>
								<li>{tv(lang, 'Katalog juda katta: bo\'limlar bo\'ylab yurish ma\'nosiz')}</li>
								<li>{tv(lang, 'Narx yetkazib berish shartiga bog\'liq — buni oldindan bilish kerak')}</li>
								<li>{tv(lang, 'Xaridorlar turli mamlakatdan, valyuta va shartlar aniq bo\'lishi shart')}</li>
								<li>{tv(lang, 'Yangi mijoz uchun ishonch masalasi ochiq qoladi')}</li>
							</ul>
						</div>
						<div className="gc duo__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Yechim')}</em>
							<h3>{tv(lang, 'Qidiruv va yetkazish sharti — sarlavhada')}</h3>
							<p>{tv(lang, 'Qidiruv maydoni logotip yonida, sahifaning eng ko\'zga tashlanadigan joyida. Yonida «analoglarni qidirish» belgisi, ostida esa yetkazib berish bazisini tanlash. Xaridor uch qadam qilmasdan kerakli javobga yetadi.')}</p>
							<ul>
								<li>{tv(lang, 'Analoglar bo\'yicha qidiruv — bitta belgi bilan yoqiladi')}</li>
								<li>{tv(lang, 'Yetkazish bazisi sarlavhada saqlanadi va narxga ta\'sir qiladi')}</li>
								<li>{tv(lang, 'Savat va valyuta doim ko\'rinib turadi')}</li>
								<li>{tv(lang, 'Yangiliklar bloki ishonch beradi: xalqaro alyansga a\'zolik, ko\'rgazmalar')}</li>
								<li>{tv(lang, 'Onlayn chat — savol tug\'ilsa, javob shu sahifada')}</li>
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
									<h3>{tv(lang, 'Bosh sahifa va qidiruv')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Sarlavhada uchta qatlam: yuqorida bo\'limlar va shaxsiy kabinet, o\'rtada logotip bilan qidiruv, pastda yetkazib berish bazisi. Kontakt telefon o\'ng chekkada — B2B bozorda qo\'ng\'iroq hali ham asosiy kanal.')}</p>
									<ul>
										<li>{tv(lang, '«Search analogs» belgisi qidiruv maydonining o\'zida')}</li>
										<li>{tv(lang, 'Hero\'da ombor surati va yangiliklar slayderi — beshta slayd')}</li>
										<li>{tv(lang, 'O\'ng ustunda so\'nggi uchta yangilik va «see all news»')}</li>
										<li>{tv(lang, 'Pastda uchta blok: yetkazib berish, sifat va assortiment')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'apecauto.com')}</span>
								</div>
								<img src="/work/apec-asia/01-katalog.jpg" alt={tva(lang, 'Bosh sahifa: qidiruv, yetkazib berish bazisi, yangiliklar slayderi')} width="1280" height="724" loading="lazy" />
							</div>
						</figure>
						<figure className="shot shot--tall shot--flip rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'02'}</span>
									<h3>{tv(lang, 'Telefondagi ko\'rinish')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Telefonda ham birinchi ko\'rinadigan narsa — qidiruv. Bo\'limlar burgerga yig\'iladi, lekin qidiruv maydoni va yetkazib berish bazisi ekranda qoladi: bu ikkisi xaridorga har safar kerak.')}</p>
									<ul>
										<li>{tv(lang, 'Logotip markazda, kabinet va savat o\'ng tomonda')}</li>
										<li>{tv(lang, 'Qidiruv va bazis — sarlavhaning ajralmas qismi')}</li>
										<li>{tv(lang, 'Yangiliklar slayderi strelkalar bilan barmoqqa moslashgan')}</li>
										<li>{tv(lang, 'Chat tugmasi kontent ustida suzib turadi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<img src="/work/apec-asia/02-mobil.webp" alt={tva(lang, 'APEC AUTO sayti telefonda')} width="630" height="1280" loading="lazy" />
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
							<b>{tv(lang, 'Qidiruv birinchi')}</b>
							<p>{tv(lang, 'Xaridor artikulni birinchi ekranda kiritadi — katalogni varaqlash shart emas.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Shartlar oldindan')}</b>
							<p>{tv(lang, 'Yetkazib berish bazisi tanlangan holda narx aniq bo\'ladi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Ishonch dalillari')}</b>
							<p>{tv(lang, 'Xalqaro alyans va ko\'rgazmalar haqidagi yangiliklar bosh sahifada.')}</p>
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
						<a className="gc other__i rise" href={`${prj('dagestantur')}`}>
							<b>{tv(lang, 'Turizm')}</b>
							<p>{tv(lang, 'Dagestantur')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${prj('yakov-partners')}`} style={{ '--d': '60ms' }}>
							<b>{tv(lang, 'Konsalting')}</b>
							<p>{tv(lang, 'Yakov and Partners')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${prj('defi-technologies')}`} style={{ '--d': '120ms' }}>
							<b>{tv(lang, 'TradFi platforma')}</b>
							<p>{tv(lang, 'DeFi Technologies')}</p>
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
								{tv(lang, 'Onlayn savdo qilmoqchimisiz?')}
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
