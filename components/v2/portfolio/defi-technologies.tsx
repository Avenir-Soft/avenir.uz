/* Maket: design/v2/defi-technologies.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function PrjDefiTechnologies({ lang }: { lang: Language }) {
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
						<b>{tv(lang, 'DeFi Technologies')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={`${base}#loyihalar`}>
								<i></i>
								{tv(lang, 'Loyihalarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'TradFi platforma')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Murakkab moliyani bitta ekranda tushuntirish')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'DeFi Technologies — an\'anaviy kapital bozorlari bilan markazlashmagan moliyani birlashtiruvchi institutsional platforma. Auditoriya — investorlar va institutlar. Ular uchun sayt birinchi navbatda dalil: kompaniya nima qiladi, puli qayerdan keladi va kim bilan ishlaydi.')}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Loyihani muhokama qilish')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href={`${svc('web-sites')}`}>{tv(lang, 'Veb saytlar haqida')}</a>
							</div>
						</div>
						<aside className="gc spec rise" style={{ '--d': '220ms' }}>
							<p className="spec__l">{tv(lang, 'Yil')}</p>
							<p className="spec__v">{'2026'}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Bizning ish')}</p>
							<div className="chips">
								<span>{tv(lang, 'Korporativ sayt')}</span>
								<span>{tv(lang, 'Dizayn')}</span>
								<span>{tv(lang, 'Frontend')}</span>
								<span>{tv(lang, 'Infografika')}</span>
								<span>{tv(lang, 'Adaptiv versiya')}</span>
							</div>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Sayt bo\'limlari')}</p>
							<div className="chips">
								<span>{tv(lang, 'Business Lines')}</span>
								<span>{tv(lang, 'About')}</span>
								<span>{tv(lang, 'News')}</span>
								<span>{tv(lang, 'Investor Relations')}</span>
								<span>{tv(lang, 'Events')}</span>
								<span>{tv(lang, 'Indices')}</span>
								<span>{tv(lang, 'Brasil')}</span>
							</div>
						</aside>
					</div>
					<div className="cover rise" style={{ '--d': '320ms' }}>
						<div className="chrome" aria-hidden="true">
							<i></i>
							<i></i>
							<i></i>
							<span>{tv(lang, 'DeFi Technologies — bosh sahifa')}</span>
						</div>
						<img src="/work/defi-technologies/01-bosh-sahifa.jpg" alt={tva(lang, 'DeFi Technologies bosh sahifasi: qorong\'i hero va sho\'ba kompaniyalar qatori')} width="1280" height="724" loading="eager" />
					</div>
					<div className="kv">
						<div className="gc kv__i rise">
							<b>{'5'}</b>
							<span>{tv(lang, 'monetizatsiya manbai')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '60ms' }}>
							<b>{'8'}</b>
							<span>{tv(lang, 'sho\'ba va hamkor')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '120ms' }}>
							<b>{'7'}</b>
							<span>{tv(lang, 'sayt bo\'limi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '180ms' }}>
							<b>{tv(lang, '$7,8 mln')}</b>
							<span>{tv(lang, 'mijozning e\'lon qilgan Q2 2026 tushumi')}</span>
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
							<h3>{tv(lang, 'Biznes modelni tushuntirish qiyin')}</h3>
							<p>{tv(lang, 'Kompaniya bir vaqtning o\'zida validator tugunlarini yuritadi, MEV strategiyalarini qo\'llaydi, steyking daromadi oladi va investitsion mahsulot chiqaradi. Buni matn bilan tushuntirsangiz — uch abzas o\'qish kerak bo\'ladi va o\'quvchi ketib qoladi.')}</p>
							<ul>
								<li>{tv(lang, 'Auditoriya — vaqti tor institutsional investorlar')}</li>
								<li>{tv(lang, 'Bir nechta sho\'ba kompaniya, har birining o\'z brendi bor')}</li>
								<li>{tv(lang, 'Moliyaviy natijalar muntazam e\'lon qilinadi va ko\'rinishi kerak')}</li>
							</ul>
						</div>
						<div className="gc duo__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Yechim')}</em>
							<h3>{tv(lang, 'Bitta jumla, bitta diagramma')}</h3>
							<p>{tv(lang, 'Birinchi ekranda faqat bitta kuchli sarlavha va qisqa izoh. Modelning o\'zi esa alohida bo\'limda — aylanma diagramma ko\'rinishida: markazda umumiy g\'oya, atrofida beshta daromad manbai. Foydalanuvchi o\'qimasdan tushunadi.')}</p>
							<ul>
								<li>{tv(lang, 'Yuqorida moliyaviy natija chizig\'i — investorlar uchun birinchi signal')}</li>
								<li>{tv(lang, 'Sho\'balar va hamkorlar logotiplari darrov ishonch beradi')}</li>
								<li>{tv(lang, 'Diagramma bo\'limi ataylab yorug\' — qorong\'i sahifada u alohida turadi')}</li>
								<li>{tv(lang, 'Telefonda diagramma ustundagi ro\'yxatga aylanadi')}</li>
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
									<p>{tv(lang, 'Qorong\'i, deyarli qora fon va katta grotesk sarlavha. Yuqorida — so\'nggi moliyaviy natija haqidagi qator: investor birinchi soniyada nimaga e\'tibor berishini biladi. Pastda sho\'ba kompaniyalar va hamkorlar qatori.')}</p>
									<ul>
										<li>{tv(lang, 'Sarlavha uch qatorda — o\'qish ritmi buzilmaydi')}</li>
										<li>{tv(lang, 'Ko\'k glif to\'ri o\'ngga qarab so\'nadi: matnga xalaqit bermaydi')}</li>
										<li>{tv(lang, 'Sakkizta logotip bitta qatorda, kulrangda — shovqin qilmaydi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'DeFi Technologies — home')}</span>
								</div>
								<img src="/work/defi-technologies/01-bosh-sahifa.jpg" alt={tva(lang, 'Bosh sahifa: hero, moliyaviy natija qatori, hamkorlar')} width="1280" height="724" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'02'}</span>
									<h3>{tv(lang, 'Monetizatsiya diagrammasi')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Sahifaning eng muhim bo\'limi. Markazda — «Full Stack Monetization», atrofida beshta manba: validator tugunlari, MEV strategiyalari, steyking daromadi, mahsulot chiqarish va treyding komissiyalari. Har biri bitta jumla bilan izohlangan.')}</p>
									<ul>
										<li>{tv(lang, 'Yorug\' fon — qorong\'i sahifada bu bo\'lim alohida ajralib turadi')}</li>
										<li>{tv(lang, 'Punktir aylana ekotizim yopiq sikl ekanini ko\'rsatadi')}</li>
										<li>{tv(lang, 'Har bir tugun o\'z ikonkasi bilan — matnsiz ham o\'qiladi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Full Stack Monetization Flywheel')}</span>
								</div>
								<img src="/work/defi-technologies/02-flywheel.jpg" alt={tva(lang, 'Monetizatsiya diagrammasi: beshta daromad manbai aylana bo\'ylab')} width="1280" height="725" loading="lazy" />
							</div>
						</figure>
						<figure className="shot shot--tall shot--flip rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'03'}</span>
									<h3>{tv(lang, 'Telefondagi ko\'rinish')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Sarlavha telefonda beshta qatorga bo\'linadi, lekin o\'lchamini yo\'qotmaydi — bu saytning asosiy ovozi. Moliyaviy natija qatori tepada qoladi, glif to\'ri ixchamlashadi.')}</p>
									<ul>
										<li>{tv(lang, 'Menyu burgerga yig\'iladi, logotip chapda qoladi')}</li>
										<li>{tv(lang, 'Matn to\'liq kenglikda — ikki ustunga bo\'linmaydi')}</li>
										<li>{tv(lang, 'Sho\'balar bo\'limi pastga ko\'chadi va vertikal ro\'yxatga aylanadi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<img src="/work/defi-technologies/03-mobil.webp" alt={tva(lang, 'DeFi Technologies sayti telefonda')} width="630" height="1280" loading="lazy" />
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
							<b>{tv(lang, 'Model ko\'rinadi')}</b>
							<p>{tv(lang, 'Beshta daromad manbai bitta diagrammada — o\'qishga vaqt ketmaydi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Ishonch birinchi ekranda')}</b>
							<p>{tv(lang, 'Moliyaviy natija va hamkorlar logotiplari darhol ko\'rinadi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Bir xil kuch')}</b>
							<p>{tv(lang, 'Telefonda ham sarlavha va tuzilma o\'z og\'irligini saqlaydi.')}</p>
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
						<a className="gc other__i rise" href={`${prj('yakov-partners')}`}>
							<b>{tv(lang, 'Konsalting')}</b>
							<p>{tv(lang, 'Yakov and Partners')}</p>
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
						<a className="gc other__i rise" href={`${prj('avenir-os')}`} style={{ '--d': '120ms' }}>
							<b>{tv(lang, 'ERP + CRM + Moliya')}</b>
							<p>{tv(lang, 'Avenir OS')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${prj('dagestantur')}`} style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'Turizm')}</b>
							<p>{tv(lang, 'Dagestantur')}</p>
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
								{tv(lang, 'Murakkab mahsulotni tushuntirish kerakmi?')}
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
