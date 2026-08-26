/* Maket: design/v2/dagestantur.html. Konvertordan; sinxronlash uchun qayta generatsiya qilinadi. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function PrjDagestantur({ lang }: { lang: Language }) {
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
						<b>{tv(lang, 'Dagestantur')}</b>
					</p>
					<div className="sv-top">
						<div className="sv-t">
							<a className="back rise" href={`${base}#loyihalar`}>
								<i></i>
								{tv(lang, 'Loyihalarga qaytish')}
							</a>
							<span className="chip rise" style={{ '--d': '60ms' }}>
								<i></i>
								{tv(lang, 'Turizm')}
							</span>
							<Split as="h1" className="rise" style={{ '--d': '120ms' }}>
								{tv(lang, 'Sayohatni birinchi ekranda sotish')}
							</Split>
							<p className="sv-lead rise" style={{ '--d': '200ms' }}>{tv(lang, '«Пора ехать!» — Rossiya va Kavkaz bo\'ylab mualliflik turlari uyushtiruvchi rasmiy turoperator. Turizmda qaror hissiyot bilan qabul qilinadi, lekin pul faktlar bilan to\'lanadi. Shuning uchun sayt ikkalasini bir vaqtda beradi: manzara va aniq javob.')}</p>
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
								<span>{tv(lang, 'Sayt')}</span>
								<span>{tv(lang, 'Dizayn')}</span>
								<span>{tv(lang, 'Frontend')}</span>
								<span>{tv(lang, 'Mavsumiy sahifalar')}</span>
								<span>{tv(lang, 'Ariza shakli')}</span>
								<span>{tv(lang, 'Adaptiv versiya')}</span>
							</div>
							<span className="spec__hr"></span>
							<p className="spec__l">{tv(lang, 'Sayt bo\'limlari')}</p>
							<div className="chips">
								<span>{tv(lang, 'Nega biz')}</span>
								<span>{tv(lang, 'Qishki turlar')}</span>
								<span>{tv(lang, 'Aksiyalar')}</span>
								<span>{tv(lang, 'Yo\'nalishlar')}</span>
								<span>{tv(lang, 'Sharhlar')}</span>
								<span>{tv(lang, 'Foto')}</span>
								<span>{tv(lang, 'Blog')}</span>
							</div>
						</aside>
					</div>
					<div className="cover rise" style={{ '--d': '320ms' }}>
						<div className="chrome" aria-hidden="true">
							<i></i>
							<i></i>
							<i></i>
							<span>{tv(lang, 'poraehat.ru')}</span>
						</div>
						<img src="/work/dagestantur/01-bosh-sahifa.jpg" alt={tva(lang, 'Dagestantur bosh sahifasi: to\'liq ekranli manzara va katta sarlavha')} width="1280" height="725" loading="eager" />
					</div>
					<div className="kv">
						<div className="gc kv__i rise">
							<b>{'7'}</b>
							<span>{tv(lang, 'sayt bo\'limi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '60ms' }}>
							<b>{'4'}</b>
							<span>{tv(lang, 'bog\'lanish kanali')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '120ms' }}>
							<b>{'2–6'}</b>
							<span>{tv(lang, 'kun — tur davomiyligi')}</span>
						</div>
						<div className="gc kv__i rise" style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'РТО')}</b>
							<span>{tv(lang, 'rasmiy turoperator reyestrida')}</span>
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
							<h3>{tv(lang, 'Chiroyli rasm hali sotmaydi')}</h3>
							<p>{tv(lang, 'Turizmda o\'nlab bir xil sayt bor: bir xil tog\', bir xil «незабываемый отдых». Foydalanuvchi bir necha oynani parallel ochadi va sekundlar ichida qaysi biri jiddiy ekanini hal qiladi.')}</p>
							<ul>
								<li>{tv(lang, 'Turoperator haqiqiymi — buni tekshirish kerak')}</li>
								<li>{tv(lang, 'Tur necha kun, qayerga va nima kiradi — javob darrov kerak')}</li>
								<li>{tv(lang, 'Qish va yoz butunlay boshqa taklif, lekin sayt bitta')}</li>
								<li>{tv(lang, 'Aloqa ko\'pincha messenjerda, saytda emas')}</li>
							</ul>
						</div>
						<div className="gc duo__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Yechim')}</em>
							<h3>{tv(lang, 'Manzara, dalil va harakat — bitta ekranda')}</h3>
							<p>{tv(lang, 'Birinchi ekranda manzil nomi ulkan harflarda va uning ustida haqiqiy fotosurat. Yonida — rasmiy reyestr raqami bilan belgi: bu ishonchni bir soniyada beradi. Pastda yashil tugma va marshrutga o\'tish.')}</p>
							<ul>
								<li>{tv(lang, 'Tur davomiyligi va nima kirishi hero matnida aytiladi')}</li>
								<li>{tv(lang, 'Video-doira — «Dagiston haqida video ko\'rish»')}</li>
								<li>{tv(lang, 'Mavsumiy sahifalar o\'z badiiy yo\'nalishiga ega')}</li>
								<li>{tv(lang, 'Telegram, WhatsApp, VK va Dzen sarlavhada — bir tegishda')}</li>
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
									<p>{tv(lang, 'Butun ekranni egallagan fotosurat va uning ustida «ДАГЕСТАН» — shaffof, ammo o\'qiladigan katta harflar. Matn qorong\'i yarim shaffof plita ustida: rasm ham ko\'rinadi, matn ham o\'qiladi.')}</p>
									<ul>
										<li>{tv(lang, 'Sariq belgi: rasmiy turoperator va reyestr raqami')}</li>
										<li>{tv(lang, 'Yashil tugma — sahifadagi yagona asosiy harakat')}</li>
										<li>{tv(lang, 'Video-doira o\'ng tomonda, aylanma yozuv bilan')}</li>
										<li>{tv(lang, 'Pastda «pastga suring» ishorasi — sahifa davom etadi')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'poraehat.ru')}</span>
								</div>
								<img src="/work/dagestantur/01-bosh-sahifa.jpg" alt={tva(lang, 'Bosh sahifa: to\'liq ekranli manzara, katta sarlavha, yashil tugma')} width="1280" height="725" loading="lazy" />
							</div>
						</figure>
						<figure className="shot rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'02'}</span>
									<h3>{tv(lang, 'Qishki turlar')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Mavsumiy sahifa o\'z ko\'rinishiga ega: qo\'lyozma sarlavha, moviy fon va qor tepaliklari. Bu bir xil shablon emas — mavsum o\'zgarganda saytning kayfiyati ham o\'zgaradi.')}</p>
									<ul>
										<li>{tv(lang, 'Yo\'nalishlar kartochkalari: surat, tavsif va «batafsil»')}</li>
										<li>{tv(lang, 'Har bir kartochka alohida sahifaga olib boradi')}</li>
										<li>{tv(lang, 'Quyida format tanlash bloki — guruh yoki individual')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<div className="chrome" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span>{tv(lang, 'poraehat.ru — зимние туры')}</span>
								</div>
								<img src="/work/dagestantur/02-qishki-turlar.jpg" alt={tva(lang, 'Qishki turlar sahifasi: qo\'lyozma sarlavha, ikkita yo\'nalish kartochkasi')} width="1280" height="725" loading="lazy" />
							</div>
						</figure>
						<figure className="shot shot--tall shot--flip rise">
							<figcaption className="shot__c">
								<div>
									<span className="shot__n">{'03'}</span>
									<h3>{tv(lang, 'Telefondagi ko\'rinish')}</h3>
								</div>
								<div>
									<p>{tv(lang, 'Telefonda tartib o\'zgaradi: birinchi navbatda «ariza qoldirish» tugmasi va messenjerlar, keyin sarlavha. Turizmda ko\'pchilik telefondan kiradi va darhol yozishni xohlaydi — shu yo\'l qisqartirildi.')}</p>
									<ul>
										<li>{tv(lang, 'To\'rtta messenjer belgisi doim ko\'rinadigan joyda')}</li>
										<li>{tv(lang, 'Reyestr belgisi hero ichida qoladi — ishonch yo\'qolmaydi')}</li>
										<li>{tv(lang, 'Yashil tugma butun kenglikda, barmoq bilan bosishga qulay')}</li>
									</ul>
								</div>
							</figcaption>
							<div className="shot__f">
								<img src="/work/dagestantur/03-mobil.webp" alt={tva(lang, 'Dagestantur sayti telefonda')} width="630" height="1280" loading="lazy" />
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
							<b>{tv(lang, 'Ishonch darhol')}</b>
							<p>{tv(lang, 'Rasmiy turoperator belgisi birinchi ekranda — tekshirish uchun izlash shart emas.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '80ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Mavsumga moslashuv')}</b>
							<p>{tv(lang, 'Qishki taklif o\'z sahifasi va o\'z kayfiyati bilan keladi.')}</p>
						</div>
						<div className="gc out__i rise" style={{ '--d': '160ms' }}>
							<em>{tv(lang, 'Natija')}</em>
							<b>{tv(lang, 'Qisqa yo\'l')}</b>
							<p>{tv(lang, 'Telefondan messenjerga o\'tish bir tegishda — ariza yo\'qolmaydi.')}</p>
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
						<a className="gc other__i rise" href={`${prj('apec-asia')}`}>
							<b>{tv(lang, 'E-commerce')}</b>
							<p>{tv(lang, 'APEC Asia UAE')}</p>
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
						<a className="gc other__i rise" href={`${prj('vac-uz')}`} style={{ '--d': '120ms' }}>
							<b>{tv(lang, 'Ishlab chiqarish · ERP')}</b>
							<p>{tv(lang, 'VAC.UZ')}</p>
							<span>
								{tv(lang, 'Keysni ochish')}{' '}
								<i>{'→'}</i>
							</span>
						</a>
						<a className="gc other__i rise" href={`${prj('avenir-os')}`} style={{ '--d': '180ms' }}>
							<b>{tv(lang, 'ERP + CRM + Moliya')}</b>
							<p>{tv(lang, 'Avenir OS')}</p>
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
								{tv(lang, 'Sizning xizmatingizni ham shunday ko\'rsatamiz')}
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
