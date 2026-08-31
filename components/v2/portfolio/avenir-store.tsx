/* Avenir Store — bizning o'z mahsulotimiz, elektronika vitrinasi.
   Tuzilma boshqa keyslardan olingan (dagestantur.tsx): Muammo -> Yechim ->
   Ekranlar -> Natija. Raqamlar ataylab yo'q: egasi bergan o'lchovlar
   bo'lmaguncha o'ylab topilgan metrikalar yozilmaydi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function PrjAvenirStore({ lang }: { lang: Language }) {
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
						<b>{tv(lang, 'Avenir Store')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={localizedPath(lang, '/portfolio')}>
								<i></i>
								{tv(lang, 'Loyihalarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'E-commerce · o\'z mahsulotimiz')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Do\'kon telefonda ochiladi va yopilmaydi')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'Avenir Store — o\'zimiz quradigan va o\'zimiz sotadigan elektronika vitrinasi. Bu yerda hamma narsani o\'z ustimizda sinaymiz: qidiruv, filtr, qoldiq va buyurtma. Shuning uchun mijozga mini-app haqida gapirganda, nazariyani emas, har kuni ishlaydigan do\'konni ko\'rsatamiz.')}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Shunday do\'kon kerakmi?')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href={`${svc('mini-apps')}`}>{tv(lang, 'Mini-app haqida')}</a>
							</div>
						</div>
						<aside className="gc spec rise" style={{ '--d': '220ms' }}>
							<p className="spec__l">{tv(lang, 'Yil')}</p>
							<p className="spec__v">{'2026'}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Bizning ish')}</p>
							<div className="chips">
								<span>{tv(lang, 'Mini-app')}</span>
								<span>{tv(lang, 'Dizayn')}</span>
								<span>{tv(lang, 'Frontend')}</span>
								<span>{tv(lang, 'Katalog')}</span>
								<span>{tv(lang, 'Savat')}</span>
								<span>{tv(lang, 'Ikki til')}</span>
							</div>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Kataloq bo\'limlari')}</p>
							<div className="chips">
								<span>{tv(lang, 'Smartfonlar')}</span>
								<span>{tv(lang, 'Noutbuklar')}</span>
								<span>{tv(lang, 'Planshetlar')}</span>
								<span>{tv(lang, 'Aqlli soatlar')}</span>
								<span>{tv(lang, 'Quloqchinlar')}</span>
								<span>{tv(lang, 'Akustika')}</span>
							</div>
						</aside>
					</div>
					<div className="cover rise" style={{ '--d': '320ms' }}>
						<div className="chrome" aria-hidden="true">
							<i></i>
							<i></i>
							<i></i>
							<span>{tv(lang, 'fetch-group.uz')}</span>
						</div>
						<img src="/work/avenir-shop/01-bosh-sahifa.jpg" alt={tva(lang, 'Avenir Store bosh sahifasi: banner va tanlangan mahsulotlar')} width="1280" height="719" loading="eager" />
					</div>
					<div className="kv">
						<div className="gc kv__i rise">
							<b>{'6'}</b>
							<span>{tv(lang, 'katalog bo\'limi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '60ms' }}>
							<b>{'7'}</b>
							<span>{tv(lang, 'filtr — narxdan xotiragacha')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '120ms' }}>
							<b>{'2'}</b>
							<span>{tv(lang, 'til — o\'zbek va rus')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'Onlayn')}</b>
							<span>{tv(lang, 'qoldiq har bir kartochkada')}</span>
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
							<h3>{tv(lang, 'Elektronika savdosi chatda qoladi')}</h3>
							<p>{tv(lang, 'Toshkentda texnika ko\'pincha Telegram orqali sotiladi: mijoz rasm so\'raydi, narxni so\'raydi, bor-yo\'qligini so\'raydi. Har bir savolga odam javob beradi, va shu odam kechasi uxlaydi.')}</p>
							<ul>
								<li>{tv(lang, 'Narx va qoldiq faqat sotuvchining boshida')}</li>
								<li>{tv(lang, 'Bitta model bo\'yicha o\'nlab bir xil savol')}</li>
								<li>{tv(lang, 'Xotira, rang va holatni tanlash yozishmada aniqlanadi')}</li>
								<li>{tv(lang, 'Ilova o\'rnatish — ortiqcha to\'siq, uni hamma ham bosmaydi')}</li>
							</ul>
						</div>
						<div className="gc duo__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Yechim')}</em>
							<h3>{tv(lang, 'Vitrina Telegram ichida ochiladi')}</h3>
							<p>{tv(lang, 'Mini-app o\'rnatishni talab qilmaydi: havola bosiladi va do\'kon ochiladi. Katalog, filtrlar, qoldiq va savat — hammasi shu yerda, mijoz suhbatdan chiqmaydi.')}</p>
							<ul>
								<li>{tv(lang, 'Har bir kartochkada narx, chegirma va qoldiq ko\'rinadi')}</li>
								<li>{tv(lang, 'Rang, xotira va SIM kartochkaning o\'zida tanlanadi')}</li>
								<li>{tv(lang, 'Yettita filtr: kategoriya, holat, RAM, xotira, narx va boshqalar')}</li>
								<li>{tv(lang, 'O\'zbek va rus tili — bir tegishda almashadi')}</li>
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
							{tv(lang, 'Do\'kon qanday ko\'rinadi')}
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
									<p>{tv(lang, 'Yuqorida — qidiruv va til, pastda aylanuvchi banner va tanlangan mahsulotlar. Ekranning pastki qismida to\'rtta belgi: bosh sahifa, katalog, savat va profil — barmoq ostida.')}</p>
									<ul>
										<li>{tv(lang, '«Top» belgisi tanlangan tovarlarni ajratib turadi')}</li>
										<li>{tv(lang, 'Narx so\'mda, qoldiq esa darhol kartochkada')}</li>
										<li>{tv(lang, 'Qidiruv butun katalog bo\'ylab ishlaydi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'fetch-group.uz')}</span>
								</div>
								<img src="/work/avenir-shop/01-bosh-sahifa.jpg" alt={tva(lang, 'Bosh sahifa: banner, tanlangan mahsulotlar va pastki navigatsiya')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'02'}</span>
									<h3>{tv(lang, 'Katalog va filtrlar')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Yuqorida kategoriya tugmalari, chapda esa to\'liq filtr paneli. Mijoz «nimadir mos» emas, aynan kerakli narsani topadi: kerakli xotira, kerakli rang va kerakli narx oralig\'i.')}</p>
									<ul>
										<li>{tv(lang, 'Saralash: eng yangi, arzon yoki qimmatdan boshlab')}</li>
										<li>{tv(lang, 'Holat filtri — yangi yoki ishlatilgan texnika')}</li>
										<li>{tv(lang, 'Narx oralig\'i suriladigan chiziq bilan tanlanadi')}</li>
										<li>{tv(lang, 'Chegirmadagi tovarlar alohida belgilanadi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'fetch-group.uz — katalog')}</span>
								</div>
								<img src="/work/avenir-shop/02-katalog.jpg" alt={tva(lang, 'Katalog: kategoriya tugmalari, filtr paneli va mahsulot kartochkalari')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'03'}</span>
									<h3>{tv(lang, 'Mahsulot kartochkasi')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Bitta ekranda hamma narsa bor: suratlar galereyasi, joriy narx va uning yonida chizilgan eski narx, qoldiq, holat va tanlovlar. Sotuvchiga savol berish uchun sabab qolmaydi.')}</p>
									<ul>
										<li>{tv(lang, 'Rang, xotira va SIM — tugmalar bilan tanlanadi')}</li>
										<li>{tv(lang, 'Chegirma foizi qizil belgida ko\'rinadi')}</li>
										<li>{tv(lang, 'Miqdorni o\'zgartirib, savatga qo\'shiladi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'fetch-group.uz — mahsulot')}</span>
								</div>
								<img src="/work/avenir-shop/03-mahsulot.jpg" alt={tva(lang, 'Mahsulot kartochkasi: galereya, narx, qoldiq va tanlovlar')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot shot--tall shot--flip rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'04'}</span>
									<h3>{tv(lang, 'Telefondagi ko\'rinish')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Asosiy ko\'rinish aynan shu: mini-app telefonda ochiladi. Pastki panel barmoq ostida qoladi, kartochkalar ikki ustunda, narx va nom kesilmaydi.')}</p>
									<ul>
										<li>{tv(lang, 'Navigatsiya doim ekranning pastida')}</li>
										<li>{tv(lang, 'Til almashtirgichi yuqorida, qidiruv yonida')}</li>
										<li>{tv(lang, 'Ilova o\'rnatish shart emas — havola yetarli')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<img src="/work/avenir-shop/04-mobil.webp" alt={tva(lang, 'Avenir Store telefonda: banner, kartochkalar va pastki navigatsiya')} width="630" height="1280" loading="lazy" />
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
							<b>{tv(lang, 'Savol o\'rniga javob')}</b>
							<p>{tv(lang, 'Narx, qoldiq va konfiguratsiya kartochkada turadi — sotuvchi ularni qayta-qayta yozmaydi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'O\'rnatishsiz')}</b>
							<p>{tv(lang, 'Do\'kon Telegram ichida ochiladi: mijoz suhbatdan chiqmaydi va hech nima yuklamaydi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'O\'zimizda sinalgan')}</b>
							<p>{tv(lang, 'Bu bizning o\'z do\'konimiz — mijozga har kuni ishlayotgan yechimni ko\'rsatamiz.')}</p>
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
						<a className="gc other__i rise" href={`${prj('avenir-os')}`}>
							<b>{tv(lang, 'ERP + CRM + Moliya')}</b>
							<p>{tv(lang, 'Avenir OS')}</p>
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
						<a className="gc other__i rise" href={`${prj('vac-uz')}`} style={{ '--d': '120ms' }}>
							<b>{tv(lang, 'Ishlab chiqarish · ERP')}</b>
							<p>{tv(lang, 'VAC.UZ')}</p>
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
								{tv(lang, 'Shunday do\'kon sizga ham kerakmi?')}
							</Split>
							<p>{tv(lang, 'Avenir Store ni ko\'rsatamiz va sizning assortimentingizga qanday moslashini birga o\'ylaymiz.')}</p>
							<div className="hero__cta">
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Demo so\'rash')}{' '}
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
