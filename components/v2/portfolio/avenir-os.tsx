/* Maket: design/v2/avenir-os.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function PrjAvenirOs({ lang }: { lang: Language }) {
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
						<b>{tv(lang, 'Avenir OS')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={localizedPath(lang, '/portfolio')}>
								<i></i>
								{tv(lang, 'Loyihalarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'ERP + CRM + Moliya')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Agentlikning butun ishi bitta maydonda')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'Avenir OS — marketing agentligi uchun operatsion tizim: g\'oyadan hisob-fakturagacha. Loyihalar, vazifalar, kontent-reja, mehnat sarfi, moliya, jamoa va bilimlar bazasi — 16 ta bo\'limda. Bu bizning o\'z mahsulotimiz: har kuni o\'zimiz ishlatamiz va shu sababli u haqiqiy jarayonga moslashgan.')}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Demo so\'rash')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href={`${svc('crm-erp')}`}>{tv(lang, 'CRM va ERP haqida')}</a>
							</div>
						</div>
						<aside className="gc spec rise" style={{ '--d': '220ms' }}>
							<p className="spec__l">{tv(lang, 'Yil')}</p>
							<p className="spec__v">{'2026'}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Bizning ish')}</p>
							<div className="chips">
								<span>{tv(lang, 'Mahsulot')}</span>
								<span>{tv(lang, 'UX va UI')}</span>
								<span>{tv(lang, 'Backend')}</span>
								<span>{tv(lang, 'Frontend')}</span>
								<span>{tv(lang, 'DevOps')}</span>
								<span>{tv(lang, 'Rivojlantirish')}</span>
							</div>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Texnologiyalar')}</p>
							<div className="chips">
								<span>{tv(lang, 'Next.js')}</span>
								<span>{tv(lang, 'React')}</span>
								<span>{tv(lang, 'TypeScript')}</span>
								<span>{tv(lang, 'FastAPI')}</span>
								<span>{tv(lang, 'PostgreSQL')}</span>
								<span>{tv(lang, 'Redis')}</span>
								<span>{tv(lang, 'MinIO')}</span>
								<span>{tv(lang, 'Docker')}</span>
							</div>
						</aside>
					</div>
					<div className="cover rise" style={{ '--d': '320ms' }}>
						<div className="chrome" aria-hidden="true">
							<i></i>
							<i></i>
							<i></i>
							<span>{tv(lang, 'Avenir OS — agentlik boshqaruv paneli')}</span>
						</div>
						<img src="/work/avenir-os/01-dashboard.jpg" alt={tva(lang, 'Avenir OS boshqaruv paneli: moliya ko\'rsatkichlari, reja/fakt va 12 oylik dinamika')} width="1280" height="724" loading="eager" />
					</div>
					<div className="kv">
						<div className="gc kv__i rise">
							<b>{'16'}</b>
							<span>{tv(lang, 'tizim bo\'limi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '60ms' }}>
							<b>{'7'}</b>
							<span>{tv(lang, 'foydalanuvchi roli')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '120ms' }}>
							<b>{'3'}</b>
							<span>{tv(lang, 'yo\'nalish: ish, analitika, servis')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '180ms' }}>
							<b>{'1'}</b>
							<span>{tv(lang, 'ma\'lumot manbai')}</span>
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
							<h3>{tv(lang, 'Agentlik ishi o\'nta joyga sochilgan')}</h3>
							<p>{tv(lang, 'Vazifalar bitta trekkerda, byudjet jadvalda, mijoz bilan kelishuv chatda, kontent-reja alohida faylda. Har biri o\'zicha to\'g\'ri ishlaydi, lekin ular orasida bog\'lanish yo\'q.')}</p>
							<ul>
								<li>{tv(lang, 'Loyiha foydali bo\'ldimi — buni oy tugagach bilib olasiz')}</li>
								<li>{tv(lang, 'Xodim ketganda uning boshidagi bilim ham ketadi')}</li>
								<li>{tv(lang, 'Bir xil ma\'lumot uch marta qo\'lda kiritiladi')}</li>
								<li>{tv(lang, 'Rahbar holatni bilish uchun har biridan alohida so\'raydi')}</li>
							</ul>
						</div>
						<div className="gc duo__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Yechim')}</em>
							<h3>{tv(lang, 'G\'oyadan hisob-fakturagacha bitta oqim')}</h3>
							<p>{tv(lang, 'Har bir vazifa loyihaga, har bir loyiha mijoz va pulga bog\'langan. Brifing breynstormingda tug\'iladi, vazifaga aylanadi, kontent-rejaga tushadi, mehnat sarfi hisoblanadi va oxirida hisob-fakturaga chiqadi.')}</p>
							<ul>
								<li>{tv(lang, 'Loyiha va mijoz foydasi real vaqtda ko\'rinadi')}</li>
								<li>{tv(lang, 'Bilimlar bazasi — reglament, shablon, chek-list va onbording')}</li>
								<li>{tv(lang, 'Rollar bo\'yicha kirish: yetti xil rol, har biriga o\'z ko\'rinishi')}</li>
								<li>{tv(lang, 'Ma\'lumot bir marta kiritiladi va hamma joyda ishlatiladi')}</li>
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
							{tv(lang, 'Tizim ichida nima bor')}
						</Split>
						<p className="p-sec rise" style={{ '--d': '140ms' }}>{tv(lang, 'Haqiqiy tizimning ekranlari. Raqamlar demo-hisobdan olingan.')}</p>
					</div>
					<div className="shots">
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'01'}</span>
									<h3>{tv(lang, 'Agentlik paneli')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Rahbarning bosh ekrani. Yuqorida moliya: tushum, foyda, marja, kesh-flou, debitorka va voronkadagi summa. Pastda — 2026 uchun reja/fakt: har bir ko\'rsatkich bo\'yicha fakt, maqsad va prognoz bitta qatorda.')}</p>
									<ul>
										<li>{tv(lang, 'Davr: oy, chorak yoki yil')}</li>
										<li>{tv(lang, 'Reja bajarilishi rangli chiziq bilan — 108,7% yoki 51,9%')}</li>
										<li>{tv(lang, '12 oylik dinamika: tushum va foyda alohida')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Дашборд агентства')}</span>
								</div>
								<img src="/work/avenir-os/01-dashboard.jpg" alt={tva(lang, 'Agentlik paneli: moliya ko\'rsatkichlari, reja/fakt, 12 oylik dinamika')} width="1280" height="724" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'02'}</span>
									<h3>{tv(lang, 'Moliya va foydalilik')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Hisob-fakturalar, to\'lovlar, xarajatlar, byudjetlar, P&L, tushum va oyliklar — bitta bo\'limda. Eng muhimi pastda: qaysi mijoz va qaysi loyiha qancha foyda keltirgani ro\'yxat bo\'lib turadi.')}</p>
									<ul>
										<li>{tv(lang, 'MTD ko\'rsatkichlari va o\'tgan oyga nisbatan o\'zgarish')}</li>
										<li>{tv(lang, 'Debitorka muddati o\'tgan hisoblar soni bilan')}</li>
										<li>{tv(lang, 'Runway — kompaniya zaxirasi necha oyga yetadi')}</li>
										<li>{tv(lang, '6 oylik kesh-flou: tushum, xarajat va foyda bitta grafikda')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Финансы — P&L, кэшфлоу, прибыльность')}</span>
								</div>
								<img src="/work/avenir-os/02-moliya.jpg" alt={tva(lang, 'Moliya bo\'limi: kesh-flou, mijoz va loyiha foydaliligi')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'03'}</span>
									<h3>{tv(lang, 'Breynstorming taxtasi')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Cheksiz maydon: stikerlar, bog\'lanishlar, chizish va matn. Sessiya qoralamadan boshlanadi, g\'oyalar bir-biriga ulanadi, yakunda tanlangan g\'oyalar to\'g\'ridan-to\'g\'ri vazifaga aylantiriladi.')}</p>
									<ul>
										<li>{tv(lang, 'Jamoa birga ishlaydi — kim onlaynligi ko\'rinib turadi')}</li>
										<li>{tv(lang, 'Sessiyani rejalashtirish va qoralama holatida saqlash')}</li>
										<li>{tv(lang, 'AI yordamchisi g\'oyalarni guruhlashga yordam beradi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Брейнсторминг — бесконечная доска')}</span>
								</div>
								<img src="/work/avenir-os/03-breynstorming.jpg" alt={tva(lang, 'Breynstorming taxtasi: stikerlar va bog\'lanishlar')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'04'}</span>
									<h3>{tv(lang, 'Bilimlar bazasi')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Agentlikning yozilgan xotirasi. Yangi xodim birinchi kuni «Avenir\'dan qanday foydalanish» qo\'llanmasini ochadi va bosqichma-bosqich o\'tadi — hech kimni chalg\'itmasdan.')}</p>
									<ul>
										<li>{tv(lang, 'Reglamentlar, shablon va TZ, chek-listlar, onbording')}</li>
										<li>{tv(lang, 'Yo\'nalishlar bo\'yicha: SMM, perfomans, prodakshn, influens')}</li>
										<li>{tv(lang, 'Mijoz uchun: tone of voice va brend-gaydlar')}</li>
										<li>{tv(lang, 'Yopiq bo\'limlar — moliyaviy reglament va kelishuvlar')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'База знаний — регламенты и онбординг')}</span>
								</div>
								<img src="/work/avenir-os/04-bilimlar-bazasi.jpg" alt={tva(lang, 'Bilimlar bazasi: qo\'llanma, reglamentlar, onbording')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'05'}</span>
									<h3>{tv(lang, 'Avenir AI — ishlab chiqilmoqda')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Keyingi bosqich: tizim to\'plagan ma\'lumot ustida ishlaydigan yordamchi. Tabiiy tilda savol berasiz — javobni kompaniya ma\'lumotidan oladi. Ochiq ko\'rsatamiz, chunki mijozlarimiz nimani kutishini bilishlari kerak.')}</p>
									<ul>
										<li>{tv(lang, 'Xavf detektsiyasi: muddati o\'tgan debitorka, qotib qolgan bitim')}</li>
										<li>{tv(lang, 'Prediktiv analitika: tushum va kesh-flou prognozi')}</li>
										<li>{tv(lang, 'Qaror izohlanishi: AI qaysi raqamga tayanganini ko\'rsatadi')}</li>
										<li>{tv(lang, 'Texnologiyalar: NLP, ML Pipeline, RAG, API integratsiya')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Avenir AI — активная разработка')}</span>
								</div>
								<img src="/work/avenir-os/05-ai.jpg" alt={tva(lang, 'Avenir AI moduli: xavf detektsiyasi, prediktiv analitika')} width="1280" height="719" loading="lazy" />
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
							<b>{tv(lang, 'Foyda ko\'rinadi')}</b>
							<p>{tv(lang, 'Loyiha va mijoz foydaliligi oy tugashini kutmaydi — panelda turadi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Bilim tizimda')}</b>
							<p>{tv(lang, 'Reglament va shablonlar yozilgan: yangi xodim birinchi kunidan ishga tushadi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Bir marta kiritish')}</b>
							<p>{tv(lang, 'Vazifa, mehnat sarfi va hisob-faktura bitta ma\'lumotdan o\'sadi.')}</p>
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
						<a className="gc other__i rise" href={`${prj('vac-uz')}`}>
							<b>{tv(lang, 'Ishlab chiqarish · ERP')}</b>
							<p>{tv(lang, 'VAC.UZ')}</p>
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
								{tv(lang, 'Shunday tizim sizga ham kerakmi?')}
							</Split>
							<p className="p-sec rise" style={{ '--d': '80ms' }}>{tv(lang, 'Avenir OS ni ko\'rsatamiz va sizning jarayoningizga qanday moslashini birga o\'ylaymiz.')}</p>
							<div className="hero__cta rise" style={{ '--d': '160ms' }}>
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
