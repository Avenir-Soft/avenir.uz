/* Maket: design/v2/vac-uz.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function PrjVacUz({ lang }: { lang: Language }) {
	const base = localizedPath(lang, '/')
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
						<b>{tv(lang, 'VAC.UZ')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={localizedPath(lang, '/portfolio')}>
								<i></i>
								{tv(lang, 'Loyihalarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'Ishlab chiqarish · ERP')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Zavod ishini bitta ERP ga yig\'dik')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, 'VAC.UZ — ventilyatsiya kanallari ishlab chiqaruvchi kompaniya. Buyurtma qabul qilinishidan tayyor mahsulot jo\'natilgunga qadar bo\'lgan butun yo\'l — arizalar, rejalashtirish, sexlar, OTK stansiyasi, ombor, xarid, moliya va jamoa — 24 ta bo\'limdan iborat yagona tizimga yig\'ildi.')}</p>
							<div className="hero__cta rise" style={{ '--d': '280ms', justifyContent: 'flex-start' }}>
								<a className="btn btn--w" href={`${base}#aloqa`}>
									{tv(lang, 'Shunday tizim kerakmi?')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
								<a className="btn btn--d" href={localizedPath(lang, '/portfolio')}>{tv(lang, 'Boshqa loyihalar')}</a>
							</div>
						</div>
						<aside className="gc spec rise" style={{ '--d': '220ms' }}>
							<p className="spec__l">{tv(lang, 'Yil')}</p>
							<p className="spec__v">{'2025'}</p>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Bizning ish')}</p>
							<div className="chips">
								<span>{tv(lang, 'Audit')}</span>
								<span>{tv(lang, 'UX va UI')}</span>
								<span>{tv(lang, 'Backend')}</span>
								<span>{tv(lang, 'Frontend')}</span>
								<span>{tv(lang, 'Integratsiyalar')}</span>
								<span>{tv(lang, 'Qo\'llab-quvvatlash')}</span>
							</div>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Texnologiyalar')}</p>
							<div className="chips">
								<span>{tv(lang, 'Next.js')}</span>
								<span>{tv(lang, 'FastAPI')}</span>
								<span>{tv(lang, 'PostgreSQL')}</span>
								<span>{tv(lang, 'Redis')}</span>
								<span>{tv(lang, 'Docker')}</span>
								<span>{tv(lang, 'Telegram Bot API')}</span>
							</div>
						</aside>
					</div>
					<div className="cover rise" style={{ '--d': '320ms' }}>
						<div className="chrome" aria-hidden="true">
							<i></i>
							<i></i>
							<i></i>
							<span>{tv(lang, 'VAC.UZ ERP — boshqaruv paneli')}</span>
						</div>
						<img src="/work/vac-uz/01-dashboard.jpg" alt={tva(lang, 'VAC.UZ ERP boshqaruv paneli: tushum, debitorka, arizalar va grafiklar')} width="1280" height="719" loading="eager" />
					</div>
					<div className="kv">
						<div className="gc kv__i rise">
							<b>{'24'}</b>
							<span>{tv(lang, 'tizim bo\'limi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '60ms' }}>
							<b>{'7'}</b>
							<span>{tv(lang, 'yo\'nalish guruhi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '120ms' }}>
							<b>{'14'}</b>
							<span>{tv(lang, 'jamoa akkaunti')}</span>
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
							<h3>{tv(lang, 'Har bo\'lim o\'z daftarida ishlardi')}</h3>
							<p>{tv(lang, 'Ishlab chiqarish korxonasida ma\'lumot bir nechta joyda yashaydi: arizalar messenjerda, reja qog\'ozda, ombor qoldig\'i alohida jadvalda, moliya buxgalterda. Natijada oddiy savolga javob topish qiyin bo\'ladi.')}</p>
							<ul>
								<li>{tv(lang, 'Buyurtma qaysi bosqichda ekanini bilish uchun sexga qo\'ng\'iroq qilish kerak')}</li>
								<li>{tv(lang, 'Ombor qoldig\'i va xarid rejasi bir-biriga bog\'lanmagan')}</li>
								<li>{tv(lang, 'Rahbar oylik hisobotni oy tugagach ko\'radi')}</li>
								<li>{tv(lang, 'Mijoz bilan yozishmalar shaxsiy akkauntlarda qolib ketadi')}</li>
							</ul>
						</div>
						<div className="gc duo__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Yechim')}</em>
							<h3>{tv(lang, 'Bitta tizim, ettita yo\'nalish')}</h3>
							<p>{tv(lang, 'Korxonaning haqiqiy jarayonini o\'rganib, uni tizimga ko\'chirdik: har bir bo\'lim o\'z ekranida ishlaydi, lekin hammasi bitta ma\'lumot bazasiga yozadi. Rahbar uchun esa alohida hisobot yig\'ish kerak emas — panel o\'zi to\'ladi.')}</p>
							<ul>
								<li>{tv(lang, 'Sotuv, ishlab chiqarish, ta\'minot, moliya, kadrlar, xo\'jalik va tizim sozlamalari')}</li>
								<li>{tv(lang, 'Rollar bo\'yicha kirish: har kim faqat o\'ziga tegishlisini ko\'radi')}</li>
								<li>{tv(lang, 'Telegram orqali kelgan murojaat to\'g\'ridan-to\'g\'ri CRM ga tushadi')}</li>
								<li>{tv(lang, 'Har bir harakat kim va qachon qilgani bilan saqlanadi')}</li>
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
						<p className="p-sec rise" style={{ '--d': '140ms' }}>{tv(lang, 'Quyida — haqiqiy tizimning ekranlari. Interfeys rus tilida: kompaniya jamoasi shu tilda ishlaydi.')}</p>
					</div>
					<div className="shots">
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'01'}</span>
									<h3>{tv(lang, 'Boshqaruv paneli')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Rahbarning birinchi ekrani. Yuqorida — pul: arizalar bo\'yicha tushum, to\'langan summa, debitorka va kassaga kirim. Pastda — ish: nechta ariza, qancha mahsulot ishlab chiqarildi, nechta jo\'natma yo\'lda, nechta yangi lid kutmoqda.')}</p>
									<ul>
										<li>{tv(lang, 'Davr tanlash: kunlar, haftalar yoki oylar kesimida')}</li>
										<li>{tv(lang, 'Kirim-chiqim va foyda grafigi, pul qoldig\'i dinamikasi')}</li>
										<li>{tv(lang, 'Arizalarning bosqichlar bo\'yicha taqsimoti')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Дашборд — обзор компании')}</span>
								</div>
								<img src="/work/vac-uz/01-dashboard.jpg" alt={tva(lang, 'Boshqaruv paneli: pul va ish ko\'rsatkichlari, kirim-chiqim grafigi')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'02'}</span>
									<h3>{tv(lang, 'Vazifalar taxtasi')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Kanban-taxta beshta bosqichdan iborat: boshlanishda, jarayonda, muammo bor, tekshiruvda, tayyor. Kartochka sichqoncha bilan ko\'chiriladi, har birida taymer yuritiladi, tugagan vazifalar 24 soatdan keyin arxivga o\'tadi.')}</p>
									<ul>
										<li>{tv(lang, '«Muammo bor» ustuni — to\'siqni yashirmaslik uchun alohida')}</li>
										<li>{tv(lang, 'Xodim bo\'yicha filtr va nom bo\'yicha qidiruv')}</li>
										<li>{tv(lang, 'Arxiv alohida yorliqda — taxta toza qoladi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Задачи — канбан-доска')}</span>
								</div>
								<img src="/work/vac-uz/02-vazifalar.jpg" alt={tva(lang, 'Kanban taxta: besh ustun, taymer, arxiv')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'03'}</span>
									<h3>{tv(lang, 'CRM va Telegram')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Mijoz bilan yozishma tizim ichida qoladi. Kompaniyaning Telegram boti va menejerning shaxsiy akkaunti bir joyga ulangan — xodim ishdan ketsa ham murojaatlar tarixi kompaniyada qoladi.')}</p>
									<ul>
										<li>{tv(lang, 'Kiruvchi, kanban va arxiv — uchta ko\'rinish')}</li>
										<li>{tv(lang, 'Kanal bo\'yicha filtr va o\'qilmaganlar belgisi')}</li>
										<li>{tv(lang, 'Kanalsiz lidlarni qo\'lda kiritish mumkin')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'CRM — переписка с клиентами')}</span>
								</div>
								<img src="/work/vac-uz/03-crm.jpg" alt={tva(lang, 'CRM: Telegram orqali mijozlar bilan yozishma, kiruvchi lidlar')} width="1280" height="719" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'04'}</span>
									<h3>{tv(lang, 'Jamoa va rollar')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Bitta ro\'yxatda butun jamoa: kim qaysi rolda, oylik qancha, akkaunt faolmi. Rol shu yerdan almashtiriladi — ishlab chiqarish boshlig\'i, OTK, ombor boshlig\'i, hisob-kitob buxgalteri, bosh buxgalter, marketolog va boshqalar.')}</p>
									<ul>
										<li>{tv(lang, 'Email, ism yoki telefon bo\'yicha qidiruv')}</li>
										<li>{tv(lang, 'Ishdan bo\'shaganlar arxivga o\'tadi, ma\'lumot yo\'qolmaydi')}</li>
										<li>{tv(lang, 'Rol kirish huquqini belgilaydi — alohida sozlash kerak emas')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Сотрудники — аккаунты команды')}</span>
								</div>
								<img src="/work/vac-uz/04-xodimlar.jpg" alt={tva(lang, 'Xodimlar ro\'yxati: rol, oylik, status')} width="1280" height="721" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'05'}</span>
									<h3>{tv(lang, 'Xodim kabineti')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Har bir xodimning o\'z bo\'limi: reyting, bonuslar, oylik va shaxsiy statistika. Yulduzlar tizimi jamoani bir-biri bilan emas, o\'zining o\'tgan oyi bilan solishtirishga undaydi.')}</p>
									<ul>
										<li>{tv(lang, 'Oylik va umumiy davr bo\'yicha liderbord')}</li>
										<li>{tv(lang, 'Mening bonuslarim, oyligim va statistikam — alohida yorliqlarda')}</li>
										<li>{tv(lang, 'Bonus berish va mukofotlar tarixi rahbar uchun')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'Мой кабинет — лидерборд и бонусы')}</span>
								</div>
								<img src="/work/vac-uz/05-kabinet.jpg" alt={tva(lang, 'Xodim kabineti: reyting, bonuslar, oylik')} width="1280" height="719" loading="lazy" />
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
							<b>{tv(lang, 'Bitta manba')}</b>
							<p>{tv(lang, 'Sotuv, ishlab chiqarish va moliya bir xil raqamga qaraydi — jadval nusxalari kerak emas.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Ko\'rinadigan jarayon')}</b>
							<p>{tv(lang, 'Buyurtma qaysi bosqichda ekani ekranda turadi, so\'rab aniqlash shart emas.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Saqlanadigan tarix')}</b>
							<p>{tv(lang, 'Mijoz yozishmasi, rol o\'zgarishi va har bir harakat tizimda qoladi.')}</p>
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
						<a className="gc other__i rise" href={`${prj('apec-asia')}`} style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'E-commerce')}</b>
							<p>{tv(lang, 'APEC Asia UAE')}</p>
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
								{tv(lang, 'Sizda ham shunday jarayon bormi?')}
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
