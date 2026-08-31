/* Maket: design/v2/index.html, bo'lim В«». Avtogeneratsiyadan keyin qo'lda o'ralgan. */
import { tv } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import { localizedPath } from '@/lib/paths'
import type { Language } from '@/lib/languages'

export function HomeSolutions({ lang }: { lang: Language }) {
	const svc = (s: string) => localizedPath(lang, `/services/${s}`)
	return (
		<>
			{/* ===================== YECHIMLAR ===================== */}
			<section className="section" id="yechimlar" data-sec="yechimlar">
				<span className="aura aura--b aura--drift" style={{ width: '640px', height: '640px', right: '-240px', top: '6%', opacity: '0.5' }}></span>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Yechimlar')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Biznesingiz uchun raqamli yechimlar')}
						</Split>
						<p className="p-sec rise" style={{ '--d': '160ms' }}>{tv(lang, 'Har bir yo\'nalish bo\'yicha tayyor jamoa va ishlab chiqilgan jarayon.')}</p>
					</div>
					<div className="sol">
						{/* 01 · CRM va ERP — taxlangan yozuvlar */}
						<div className="sol__row">
							<div className="sol__t rise">
								<span className="chip">
									<i></i>
									{tv(lang, 'CRM va ERP')}
								</span>
								<h3>{tv(lang, 'Sotuv, ombor va moliya — bitta tizimda')}</h3>
								<p>{tv(lang, 'Bitim, hisob-faktura, ombor va jamoa — bir joyda. Har bir harakat tizimda o\'zi qayd etiladi.')}</p>
								<a className="btn btn--d btn--sm" href={`${svc('crm-erp')}`}>
									{tv(lang, 'Batafsil')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
							</div>
							<div className="gc sol__c rise" style={{ '--d': '90ms' }}>
								<div className="cyc" data-cyc>
									<div className="cyc__i">
										<div className="gp">
											<p className="gp__top">
												<b>{tv(lang, 'Bitim')}</b>
												{' '}{tv(lang, '· B-4821')}{' '}
												<span className="bdg bdg--b">{tv(lang, 'Taklif yuborildi')}</span>
											</p>
											<p className="gp__t">{tv(lang, 'Alfa Textile — korporativ sayt va hisob-kitob moduli')}</p>
											<p className="gp__f">
												<span>{tv(lang, 'Muddat: 12 hafta')}</span>
												<b>{tv(lang, '48 000 000 so\'m')}</b>
											</p>
										</div>
									</div>
									<div className="cyc__i">
										<div className="gp">
											<p className="gp__top">
												<b>{tv(lang, 'Shartnoma')}</b>
												{' '}{tv(lang, '· SH-1174')}{' '}
												<span className="bdg bdg--g">{tv(lang, 'Imzolandi')}</span>
											</p>
											<p className="gp__t">{tv(lang, 'Orient Logistics — ulgurji katalog platformasi')}</p>
											<p className="gp__f">
												<span>{tv(lang, 'Muddat: 18 hafta')}</span>
												<b>{tv(lang, '126 400 000 so\'m')}</b>
											</p>
										</div>
									</div>
									<div className="cyc__i">
										<div className="gp">
											<p className="gp__top">
												<b>{tv(lang, 'Hisob-faktura')}</b>
												{' '}{'· #2481'}{' '}
												<span className="bdg bdg--a">{tv(lang, 'To\'lov kutilmoqda')}</span>
											</p>
											<p className="gp__t">{tv(lang, 'Delta Market — analitik platforma, 2-bosqich')}</p>
											<p className="gp__f">
												<span>{tv(lang, 'Muddat: 5 kun')}</span>
												<b>{tv(lang, '32 000 000 so\'m')}</b>
											</p>
										</div>
									</div>
									<div className="cyc__i">
										<div className="gp">
											<p className="gp__top">
												<b>{tv(lang, 'Ombor')}</b>
												{' '}{tv(lang, '· KIR-318')}{' '}
												<span className="bdg bdg--g">{tv(lang, 'Qabul qilindi')}</span>
											</p>
											<p className="gp__t">{tv(lang, 'Ventilyatsiya kanali — 240 m · yetkazib beruvchi VAC')}</p>
											<p className="gp__f">
												<span>{tv(lang, 'Skladga kiritildi')}</span>
												<b>{tv(lang, '18 400 000 so\'m')}</b>
											</p>
										</div>
									</div>
									<div className="cyc__i">
										<div className="gp">
											<p className="gp__top">
												<b>{tv(lang, 'Xarajat')}</b>
												{' '}{tv(lang, '· X-0925')}{' '}
												<span className="bdg bdg--b">{tv(lang, 'Tasdiqlandi')}</span>
											</p>
											<p className="gp__t">{tv(lang, 'Jamoa oyligi va litsenziyalar — iyul 2026')}</p>
											<p className="gp__f">
												<span>{tv(lang, 'Moliya bo\'limi')}</span>
												<b>{tv(lang, '74 200 000 so\'m')}</b>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 02 · AI botlar — buyruq va javob */}
						<div className="sol__row">
							<div className="sol__t rise">
								<span className="chip">
									<i></i>
									{tv(lang, 'AI botlar')}
								</span>
								<h3>{tv(lang, 'Buyruqni tushunadigan yordamchi')}</h3>
								<p>{tv(lang, 'Oddiy gap bilan so\'raysiz — bot hisobotni tayyorlaydi, vazifani ochadi, javobni topadi.')}</p>
								<a className="btn btn--d btn--sm" href={`${svc('ai-bots')}`}>
									{tv(lang, 'Batafsil')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
							</div>
							<div className="gc sol__c sol__c--b rise" style={{ '--d': '90ms' }}>
								<div className="ai">
									<div className="ai__box cyc cyc--fade" data-cyc>
										<div className="cyc__i">
											<div className="gp cmd">
												<p className="cmd__q">
													{tv(lang, 'Kelasi haftadagi uchrashuvlarni ko\'rsat')}
													<span className="ai__caret"></span>
												</p>
												<div className="cmd__r">
													<span className="cmd__plus">{'+'}</span>
													<span className="cmd__chip">{tv(lang, 'Tezkor')}</span>
													<span className="cmd__go">
														<i></i>
														<i></i>
														<i></i>
														<i></i>
													</span>
												</div>
											</div>
										</div>
										<div className="cyc__i">
											<div className="gp cmd">
												<p className="cmd__q">
													{tv(lang, 'Iyul oyidagi xarajatlar hisobotini tayyorla')}
													<span className="ai__caret"></span>
												</p>
												<div className="cmd__r">
													<span className="cmd__plus">{'+'}</span>
													<span className="cmd__chip">{tv(lang, 'Hisobot')}</span>
													<span className="cmd__go">
														<i></i>
														<i></i>
														<i></i>
														<i></i>
													</span>
												</div>
											</div>
										</div>
										<div className="cyc__i">
											<div className="gp cmd">
												<p className="cmd__q">
													{tv(lang, 'Qarzdor mijozlar ro\'yxatini chiqar')}
													<span className="ai__caret"></span>
												</p>
												<div className="cmd__r">
													<span className="cmd__plus">{'+'}</span>
													<span className="cmd__chip">{tv(lang, 'Moliya')}</span>
													<span className="cmd__go">
														<i></i>
														<i></i>
														<i></i>
														<i></i>
													</span>
												</div>
											</div>
										</div>
										<div className="cyc__i">
											<div className="gp cmd">
												<p className="cmd__q">
													{tv(lang, 'Yangi lidga taklif xatini yoz')}
													<span className="ai__caret"></span>
												</p>
												<div className="cmd__r">
													<span className="cmd__plus">{'+'}</span>
													<span className="cmd__chip">{tv(lang, 'Sotuv')}</span>
													<span className="cmd__go">
														<i></i>
														<i></i>
														<i></i>
														<i></i>
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="ai__res" data-cyc-link>
										<div className="ai__rc">
											<em>{tv(lang, 'Javob')}</em>
											<p>{tv(lang, 'Kelasi haftada 3 ta uchrashuv: Alfa Textile (dushanba), Orient Logistics (chorshanba), Delta Market (juma).')}</p>
										</div>
										<div className="ai__rc">
											<em>{tv(lang, 'Javob')}</em>
											<p>{tv(lang, 'Iyul xarajatlari — 74 200 000 so\'m. Eng katta modda: jamoa oyligi (68%).')}</p>
										</div>
										<div className="ai__rc">
											<em>{tv(lang, 'Javob')}</em>
											<p>{tv(lang, '4 ta qarzdor topildi, jami 41 800 000 so\'m. Eng eskisi — 18 kun.')}</p>
										</div>
										<div className="ai__rc">
											<em>{tv(lang, 'Javob')}</em>
											<p>{tv(lang, 'Taklif xati tayyor — 2 sahifa, narx jadvali bilan. Yuborishga tayyor.')}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 03 · Veb saytlar — brauzer va ballar */}
						<div className="sol__row">
							<div className="sol__t rise">
								<span className="chip">
									<i></i>
									{tv(lang, 'Veb saytlar')}
								</span>
								<h3>{tv(lang, 'Ishonch uyg\'otadigan va sotadigan sayt')}</h3>
								<p>{tv(lang, 'Korporativ sayt, landing va e-commerce. Tez yuklanadi, qidiruvda topiladi, mobilda qulay.')}</p>
								<a className="btn btn--d btn--sm" href={`${svc('web-sites')}`}>
									{tv(lang, 'Batafsil')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
							</div>
							<div className="gc sol__c sol__c--c rise" style={{ '--d': '90ms' }}>
								<div className="bw">
									<div className="bw__bar">
										<i></i>
										<i></i>
										<i></i>
										<span className="bw__url" data-cyc-link>
											<span>{tv(lang, 'vac.uz')}</span>
											<span>{tv(lang, 'apecasia.ae')}</span>
											<span>{tv(lang, 'yakovpartners.com')}</span>
											<span>{tv(lang, 'dagestantur.ru')}</span>
										</span>
									</div>
									<div className="bw__body">
										<div className="bw__page">
											<i></i>
											<i style={{ width: '88%' }}></i>
											<i style={{ width: '62%' }}></i>
										</div>
										<div className="gauges" data-cyc>
											<div className="gset">
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.98' }} />
														</svg>
														<span className="gg__n">{'98'}</span>
													</span>
													<em>{tv(lang, 'Speed')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '1' }} />
														</svg>
														<span className="gg__n">{'100'}</span>
													</span>
													<em>{tv(lang, 'SEO')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.96' }} />
														</svg>
														<span className="gg__n">{'96'}</span>
													</span>
													<em>{tv(lang, 'A11y')}</em>
												</div>
											</div>
											<div className="gset">
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.95' }} />
														</svg>
														<span className="gg__n">{'95'}</span>
													</span>
													<em>{tv(lang, 'Speed')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '1' }} />
														</svg>
														<span className="gg__n">{'100'}</span>
													</span>
													<em>{tv(lang, 'SEO')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.99' }} />
														</svg>
														<span className="gg__n">{'99'}</span>
													</span>
													<em>{tv(lang, 'A11y')}</em>
												</div>
											</div>
											<div className="gset">
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.97' }} />
														</svg>
														<span className="gg__n">{'97'}</span>
													</span>
													<em>{tv(lang, 'Speed')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.98' }} />
														</svg>
														<span className="gg__n">{'98'}</span>
													</span>
													<em>{tv(lang, 'SEO')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.96' }} />
														</svg>
														<span className="gg__n">{'96'}</span>
													</span>
													<em>{tv(lang, 'A11y')}</em>
												</div>
											</div>
											<div className="gset">
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.94' }} />
														</svg>
														<span className="gg__n">{'94'}</span>
													</span>
													<em>{tv(lang, 'Speed')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.99' }} />
														</svg>
														<span className="gg__n">{'99'}</span>
													</span>
													<em>{tv(lang, 'SEO')}</em>
												</div>
												<div className="gg">
													<span className="gg__c">
														<svg viewBox="0 0 46 46">
															<circle className="gg__bg" cx="23" cy="23" r="20" />
															<circle className="gg__fg" cx="23" cy="23" r="20" style={{ '--v': '0.95' }} />
														</svg>
														<span className="gg__n">{'95'}</span>
													</span>
													<em>{tv(lang, 'A11y')}</em>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 04 · Telegram — suhbat */}
						<div className="sol__row">
							<div className="sol__t rise">
								<span className="chip">
									<i></i>
									{tv(lang, 'Telegram bot va mini-app')}
								</span>
								<h3>{tv(lang, 'Mijoz Telegramdan chiqmasdan buyurtma beradi')}</h3>
								<p>{tv(lang, 'Katalog, to\'lov va CRM ga ulanish — bir oynada. Mini-app bilan to\'liq interfeys.')}</p>
								<a className="btn btn--d btn--sm" href={`${svc('telegram-bots')}`}>
									{tv(lang, 'Batafsil')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
							</div>
							<div className="gc sol__c sol__c--d rise" style={{ '--d': '90ms' }}>
								<div className="tg">
									<p className="tg__h">
										<span className="tg__av"></span>
										<b>{tv(lang, 'VAC bot')}</b>
										<u>{tv(lang, 'onlayn')}</u>
									</p>
									<div className="tg__scene" data-cyc>
										<div className="tg__s">
											<p className="tg__in">{tv(lang, 'Assalomu alaykum! Nima qilishim mumkin?')}</p>
											<div className="tg__kb">
												<span>{tv(lang, 'Buyurtma berish')}</span>
												<span>{tv(lang, 'Katalog')}</span>
												<span>{tv(lang, 'Holat')}</span>
												<span>{tv(lang, 'Operator')}</span>
											</div>
										</div>
										<div className="tg__s">
											<p className="tg__out">{tv(lang, 'Ventilyatsiya kanali, 24 m')}</p>
											<p className="tg__in">{tv(lang, 'Qabul qilindi. Buyurtma #4821 · bugun 18:00 gacha yetkaziladi.')}</p>
											<div className="tg__kb">
												<span>{tv(lang, 'To\'lov qilish')}</span>
												<span>{tv(lang, 'Manzilni o\'zgartirish')}</span>
											</div>
										</div>
										<div className="tg__s">
											<p className="tg__out">{tv(lang, 'To\'lov qildim')}</p>
											<p className="tg__in">{tv(lang, 'To\'lov tasdiqlandi — 7 400 000 so\'m. Chek yuborildi.')}</p>
											<p className="tg__in">{tv(lang, 'CRM da bitim avtomatik yopildi.')}</p>
										</div>
										<div className="tg__s">
											<p className="tg__out">{tv(lang, 'Katalogni ko\'rsat')}</p>
											<p className="tg__in">{tv(lang, 'Mini-app ochildi: 142 ta pozitsiya, narxlar CRM dan.')}</p>
											<div className="tg__kb">
												<span>{tv(lang, 'Mini-app ochish')}</span>
												<span>{tv(lang, 'Qidirish')}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 05 · Mobil — telefon ekrani */}
						<div className="sol__row">
							<div className="sol__t rise">
								<span className="chip">
									<i></i>
									{tv(lang, 'Mobil ilovalar')}
								</span>
								<h3>{tv(lang, 'Android va iOS uchun barqaror ilova')}</h3>
								<p>{tv(lang, 'Push, oflayn rejim va ichki tizimlaringizga ulanish — bitta kod bazasidan.')}</p>
								<a className="btn btn--d btn--sm" href={`${svc('mobile-apps')}`}>
									{tv(lang, 'Batafsil')}{' '}
									<span className="btn__ar">{'→'}</span>
								</a>
							</div>
							<div className="gc sol__c sol__c--e rise" style={{ '--d': '90ms' }}>
								<div className="ph">
									<span className="ph__side ph__side--act" aria-hidden="true"></span>
									<span className="ph__side ph__side--vu" aria-hidden="true"></span>
									<span className="ph__side ph__side--vd" aria-hidden="true"></span>
									<span className="ph__side ph__side--pw" aria-hidden="true"></span>
									<span className="ph__side ph__side--cam" aria-hidden="true"></span>
									<div className="ph__scr">
										<span className="ph__island" aria-hidden="true"></span>
										<div className="ph__st" aria-hidden="true" data-no-i18n>
											<b className="ph__now">{'09:41'}</b>
											<span className="ph__sig">
												<svg className="ph__cell" viewBox="0 0 16 11" fill="currentColor" aria-hidden="true">
													<rect x="0" y="7.4" width="2.6" height="3.6" rx=".8" />
													<rect x="4.4" y="5.4" width="2.6" height="5.6" rx=".8" />
													<rect x="8.8" y="3.1" width="2.6" height="7.9" rx=".8" />
													<rect x="13.2" y=".7" width="2.6" height="10.3" rx=".8" />
												</svg>
												<svg className="ph__wifi" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
													<path d="M1.1 3.5a9.6 9.6 0 0 1 12.8 0" />
													<path d="M3.5 6.2a6.2 6.2 0 0 1 8 0" />
													<path d="M5.9 8.9a2.7 2.7 0 0 1 3.2 0" />
												</svg>
												<svg className="ph__bat" viewBox="0 0 25 11" fill="none" aria-hidden="true">
													<rect x=".5" y=".5" width="20" height="10" rx="3.2" stroke="currentColor" strokeOpacity=".42" />
													<rect x="2" y="2" width="15.2" height="7" rx="2" fill="currentColor" />
													<path d="M22.4 3.9a2.1 2.1 0 0 1 0 3.2z" fill="currentColor" fillOpacity=".42" />
												</svg>
											</span>
										</div>
										<div className="ph__t" data-no-i18n>
											<svg className="ph__lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
												<rect x="5" y="10.5" width="14" height="10" rx="3" />
												<path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
											</svg>
											<span className="ph__date">{'Payshanba, 21-avgust'}</span>
											<b className="ph__clock">{'09:41'}</b>
										</div>
										<div className="ph__n" data-cyc>
											<div className="cyc__i">
												<div className="pn">
													<span className="pn__ic">
														<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
															<path d="M12 3a6 6 0 00-6 6v4l-2 3h16l-2-3V9a6 6 0 00-6-6z" />
															<path d="M10 20a2 2 0 004 0" />
														</svg>
													</span>
													<span className="pn__b">
														<b>{tv(lang, 'Yangi bitim')}</b>
														<span>{tv(lang, 'Alfa Textile — taklif yuborildi')}</span>
													</span>
													<span className="pn__t">{tv(lang, 'hozir')}</span>
												</div>
											</div>
											<div className="cyc__i">
												<div className="pn">
													<span className="pn__ic">
														<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
															<path d="M4 6h16v12H4z" />
															<path d="M4 9.5h16" />
														</svg>
													</span>
													<span className="pn__b">
														<b>{tv(lang, 'To\'lov qabul qilindi')}</b>
														<span>{tv(lang, '#2481 · 32 000 000 so\'m')}</span>
													</span>
													<span className="pn__t">{tv(lang, '3 daq')}</span>
												</div>
											</div>
											<div className="cyc__i">
												<div className="pn">
													<span className="pn__ic">
														<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
															<path d="M5 12.5l4.5 4.5L19 7.5" />
														</svg>
													</span>
													<span className="pn__b">
														<b>{tv(lang, 'Vazifa yopildi')}</b>
														<span>{tv(lang, 'Dizayn sprint · 12/12')}</span>
													</span>
													<span className="pn__t">{tv(lang, '12 daq')}</span>
												</div>
											</div>
											<div className="cyc__i">
												<div className="pn">
													<span className="pn__ic">
														<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
															<circle cx="12" cy="12" r="8.5" />
															<path d="M12 7.5V12l3 2" />
														</svg>
													</span>
													<span className="pn__b">
														<b>{tv(lang, 'Eslatma')}</b>
														<span>{tv(lang, 'Shartnoma 3 kunda tugaydi')}</span>
													</span>
													<span className="pn__t">{tv(lang, '1 soat')}</span>
												</div>
											</div>
											<div className="cyc__i">
												<div className="pn">
													<span className="pn__ic">
														<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
															<path d="M5 19V9M12 19V5M19 19v-6" />
														</svg>
													</span>
													<span className="pn__b">
														<b>{tv(lang, 'Hisobot tayyor')}</b>
														<span>{tv(lang, 'Iyul oyi P&L')}</span>
													</span>
													<span className="pn__t">{tv(lang, '2 soat')}</span>
												</div>
											</div>
										</div>
										<span className="ph__home" aria-hidden="true"></span>
										<span className="ph__glass" aria-hidden="true"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
