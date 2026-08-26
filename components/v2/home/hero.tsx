/* Maket: design/v2/index.html, bo'lim В«». Avtogeneratsiyadan keyin qo'lda o'ralgan. */
import { tv, tva } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import type { Language } from '@/lib/languages'

export function HomeHero({ lang }: { lang: Language }) {

	return (
		<>
			{/* ===================== HERO ===================== */}
			<section className="hero" id="hero" data-sec="hero">
				<span className="aura aura--a aura--drift aura--pulse"></span>
				<span className="aura aura--b aura--drift"></span>
				<div className="shell hero__in">
					<span className="chip rise">
						<i></i>
						{tv(lang, 'Avenir IT-agentligi')}
					</span>
					<Split as="h1">
						{tv(lang, 'Biznesingizni')}{' '}
						<span className="grad-text">{tv(lang, 'raqamli')}</span>
						{' '}{tv(lang, 'tizimga o\'tkazamiz.')}
					</Split>
					<p className="hero__lead rise" style={{ '--d': '520ms' }}>{tv(lang, 'Sayt, CRM, ERP va Mobil Ilova — bir jamoada. G\'oyadan ishga tushirishgacha, keyin esa o\'sish va qo\'llab-quvvatlash.')}</p>
					<div className="hero__cta rise" style={{ '--d': '620ms' }}>
						<a className="btn btn--w" href="#aloqa">
							{tv(lang, 'Loyihani boshlash')}{' '}
							<span className="btn__ar">{'→'}</span>
						</a>
						<a className="btn btn--d" href="#loyihalar">{tv(lang, 'Ishlarimizni ko\'rish')}</a>
					</div>
					<div className="stage rise tiltwrap" style={{ '--d': '720ms' }}>
						<span className="stage__glow"></span>
						<div className="stage__box tilt" id="tilt">
							<div className="stage__win">
								<div className="stage__bar">
									<i></i>
									<i></i>
									<i></i>
									<span className="stage__url">
										<i className="is-on">{tv(lang, 'avenir-erp.uz/dashboard')}</i>
										<i>{tv(lang, 'avenir-erp.uz/projects')}</i>
										<i>{tv(lang, 'avenir-erp.uz/finance')}</i>
										<i>{tv(lang, 'avenir-erp.uz/brainstorm')}</i>
										<i>{tv(lang, 'avenir-erp.uz/crm')}</i>
										<i>{tv(lang, 'avenir-erp.uz/reports')}</i>
										<i>{tv(lang, 'avenir-erp.uz/people')}</i>
									</span>
								</div>
								<div className="dash">
									<aside className="dash__rail">
										<span className="dash__logo"></span>
										<span className="dash__ico is-on" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<rect x="3" y="3" width="7" height="7" rx="1.5" />
												<rect x="14" y="3" width="7" height="7" rx="1.5" />
												<rect x="3" y="14" width="7" height="7" rx="1.5" />
												<rect x="14" y="14" width="7" height="7" rx="1.5" />
											</svg>
										</span>
										<span className="dash__ico" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
												<path d="M9 11v5M15 11v3" />
											</svg>
										</span>
										<span className="dash__ico" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M12 2.5v19" />
												<path d="M16.5 6.8H9.8a2.8 2.8 0 0 0 0 5.6h4.4a2.8 2.8 0 0 1 0 5.6H7" />
											</svg>
										</span>
										<span className="dash__ico" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M9 18h6" />
												<path d="M10 21.5h4" />
												<path d="M12 2.5a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6H14.7c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 2.5z" />
											</svg>
										</span>
										<span className="dash__ico" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<circle cx="9" cy="8" r="3.2" />
												<path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
												<path d="M16.5 5.2a3.2 3.2 0 0 1 0 5.9" />
												<path d="M18 19.5a5.4 5.4 0 0 0-2.2-4.3" />
											</svg>
										</span>
										<span className="dash__ico" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M4 20V10" />
												<path d="M10 20V4" />
												<path d="M16 20v-7" />
												<path d="M22 20H2" />
											</svg>
										</span>
										<span className="dash__ico" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M3.5 20.5v-3.2a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v3.2" />
												<circle cx="12" cy="7" r="4" />
											</svg>
										</span>
									</aside>
									<div className="dash__body">
										<div className="scr" data-screens>
											{/* 01 · Boshqaruv paneli */}
											<section className="scr__i is-on">
												<div className="dash__head">
													<span className="dash__t">{tv(lang, 'Boshqaruv paneli')}</span>
													<span className="dash__btn"></span>
												</div>
												<div className="kpis">
													<div className="kpi">
														<b data-live="34" data-min="28" data-max="46">{'34'}</b>
														<em>{tv(lang, 'Faol lidlar')}</em>
													</div>
													<div className="kpi">
														<b data-live="128.4" data-min="119" data-max="141" data-dec="1" data-suffix={tva(lang, ' mln')}>{tv(lang, '128.4 mln')}</b>
														<em>{tv(lang, 'Oylik tushum')}</em>
													</div>
													<div className="kpi">
														<b data-live="92" data-min="86" data-max="97" data-suffix={tva(lang, '%')}>{'92%'}</b>
														<em>{tv(lang, 'Jamoa yuklamasi')}</em>
													</div>
												</div>
												<div className="plate">
													<div className="plate__h">
														<em>{tv(lang, 'Lidlar oqimi · 30 kun')}</em>
														<span className="up">
															<b data-live="18.2" data-min="9" data-max="24" data-dec="1" data-suffix={tva(lang, '%')}>{'18.2%'}</b>
														</span>
													</div>
													<svg className="lc" data-chart viewBox="0 0 300 92" preserveAspectRatio="none" aria-hidden="true">
														<defs>
															<linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
																<stop offset="0" stopColor="#3B82F6" stopOpacity="0.4" />
																<stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
															</linearGradient>
														</defs>
														<line className="lc__grid" x1="0" y1="23" x2="300" y2="23" />
														<line className="lc__grid" x1="0" y1="46" x2="300" y2="46" />
														<line className="lc__grid" x1="0" y1="69" x2="300" y2="69" />
														<path className="lc__area" fill="url(#lg)" />
														<path className="lc__line" />
														<circle className="lc__halo" r="5" />
														<circle className="lc__dot" r="2.4" />
													</svg>
												</div>
												<div className="feed" data-feed></div>
											</section>
											{/* 02 · Loyihalar va kanallar */}
											<section className="scr__i">
												<div className="dash__head">
													<span className="dash__t">{tv(lang, 'Loyihalar')}</span>
													<span className="dash__btn"></span>
												</div>
												<div className="prj">
													<div className="prj__b">
														<div className="pcol">
															<em>{tv(lang, 'Ishda')}</em>
															<div className="pc">
																<b>{tv(lang, 'VAC.UZ — ERP')}</b>
																<span>{tv(lang, '12 hafta · 48 mln')}</span>
																<u style={{ '--p': '64%' }}></u>
															</div>
															<div className="pc">
																<b>{tv(lang, 'APEC — katalog')}</b>
																<span>{tv(lang, '18 hafta · 126 mln')}</span>
																<u style={{ '--p': '38%' }}></u>
															</div>
														</div>
														<div className="pcol">
															<em>{tv(lang, 'Tekshiruvda')}</em>
															<div className="pc">
																<b>{tv(lang, 'Yakov — analitika')}</b>
																<span>{tv(lang, '2-bosqich · 32 mln')}</span>
																<u style={{ '--p': '88%' }}></u>
															</div>
															<div className="pc">
																<b>{tv(lang, 'DeFi — platforma')}</b>
																<span>{tv(lang, '8 hafta · 96 mln')}</span>
																<u style={{ '--p': '71%' }}></u>
															</div>
														</div>
														<div className="pcol">
															<em>{tv(lang, 'Yakunlandi')}</em>
															<div className="pc">
																<b>{tv(lang, 'Dagestantur — sayt')}</b>
																<span>{tv(lang, 'Topshirildi · 19 mln')}</span>
																<u style={{ '--p': '100%' }}></u>
															</div>
														</div>
													</div>
													<div className="chn">
														<em>{tv(lang, 'Kanallar')}</em>
														<div className="chn__m">
															<span>
																<b data-live="1.24" data-min="1.1" data-max="1.4" data-dec="2" data-suffix={tva(lang, ' mln')}>{tv(lang, '1.24 mln')}</b>
																{tv(lang, 'Ko\'rsatishlar')}
															</span>
															<span>
																<b data-live="38.4" data-min="32" data-max="44" data-dec="1" data-suffix={tva(lang, 'K')}>{tv(lang, '38.4K')}</b>
																{tv(lang, 'Kliklar')}
															</span>
															<span>
																<b data-live="612" data-min="540" data-max="680">{'612'}</b>
																{tv(lang, 'Lidlar')}
															</span>
															<span>
																<b data-live="41" data-min="34" data-max="52">{'41'}</b>
																{tv(lang, 'Mijozlar')}
															</span>
														</div>
													</div>
												</div>
											</section>
											{/* 03 · Moliya */}
											<section className="scr__i">
												<div className="dash__head">
													<span className="dash__t">{tv(lang, 'Moliya')}</span>
													<span className="dash__btn"></span>
												</div>
												<div className="ftabs">
													<span className="is-on">{tv(lang, 'Hisob-fakturalar')}</span>
													<span>{tv(lang, 'Xarajatlar')}</span>
													<span>{tv(lang, 'P&L hisobot')}</span>
												</div>
												<div className="kpis kpis--4">
													<div className="kpi">
														<b data-live="128.4" data-min="119" data-max="141" data-dec="1" data-suffix={tva(lang, ' mln')}>{tv(lang, '128.4 mln')}</b>
														<em>{tv(lang, 'Tushum · oy')}</em>
													</div>
													<div className="kpi">
														<b data-live="74.2" data-min="66" data-max="82" data-dec="1" data-suffix={tva(lang, ' mln')}>{tv(lang, '74.2 mln')}</b>
														<em>{tv(lang, 'Xarajat · oy')}</em>
													</div>
													<div className="kpi">
														<b data-live="54.2" data-min="44" data-max="62" data-dec="1" data-suffix={tva(lang, ' mln')}>{tv(lang, '54.2 mln')}</b>
														<em>{tv(lang, 'Foyda · oy')}</em>
													</div>
													<div className="kpi">
														<b data-live="41.8" data-min="33" data-max="49" data-dec="1" data-suffix={tva(lang, ' mln')}>{tv(lang, '41.8 mln')}</b>
														<em>{tv(lang, 'Debitorka')}</em>
													</div>
												</div>
												<div className="fin2">
													<div className="plate">
														<div className="plate__h">
															<em>{tv(lang, 'Tushum va xarajat · 6 oy')}</em>
															<span className="up">
																<b>{'+12.4%'}</b>
															</span>
														</div>
														<div className="bars gbars">
															<span>
																<i style={{ '--h': '58%' }}></i>
																<i style={{ '--h': '39%' }}></i>
																<s>{tv(lang, 'Fev')}</s>
															</span>
															<span>
																<i style={{ '--h': '64%' }}></i>
																<i style={{ '--h': '44%' }}></i>
																<s>{tv(lang, 'Mar')}</s>
															</span>
															<span>
																<i style={{ '--h': '53%' }}></i>
																<i style={{ '--h': '41%' }}></i>
																<s>{tv(lang, 'Apr')}</s>
															</span>
															<span>
																<i style={{ '--h': '76%' }}></i>
																<i style={{ '--h': '47%' }}></i>
																<s>{tv(lang, 'May')}</s>
															</span>
															<span>
																<i style={{ '--h': '71%' }}></i>
																<i style={{ '--h': '52%' }}></i>
																<s>{tv(lang, 'Iyun')}</s>
															</span>
															<span className="hi">
																<i style={{ '--h': '92%' }}></i>
																<i style={{ '--h': '56%' }}></i>
																<s>{tv(lang, 'Iyul')}</s>
															</span>
														</div>
														<div className="lg">
															<span>
																<i style={{ background: '#3B82F6' }}></i>
																{tv(lang, 'Tushum')}
															</span>
															<span>
																<i style={{ background: '#94A3B8' }}></i>
																{tv(lang, 'Xarajat')}
															</span>
														</div>
													</div>
													<div className="inv">
														<div className="inv__r">
															<em>{tv(lang, 'VAC.UZ')}</em>
															<span>{'· #2478'}</span>
															<b>{'48 000 000'}</b>
															<span className="bdg bdg--g">{tv(lang, 'To\'landi')}</span>
														</div>
														<div className="inv__r">
															<em>{tv(lang, 'APEC Asia UAE')}</em>
															<span>{'· #2481'}</span>
															<b>{'32 000 000'}</b>
															<span className="bdg bdg--b">{tv(lang, 'Yuborildi')}</span>
														</div>
														<div className="inv__r">
															<em>{tv(lang, 'Dagestantur')}</em>
															<span>{'· #2470'}</span>
															<b>{'9 600 000'}</b>
															<span className="bdg bdg--a">{tv(lang, 'Muddati o\'tdi')}</span>
														</div>
													</div>
												</div>
											</section>
											{/* 04 · Breynstorming */}
											<section className="scr__i">
												<div className="dash__head">
													<span className="dash__t">{tv(lang, 'Breynstorming')}</span>
													<span className="dash__btn"></span>
												</div>
												<div className="bst">
													<div className="bst__c">
														<span className="stk stk--a">
															{tv(lang, 'Telegram mini-app')}
															<u>{'7'}</u>
														</span>
														<span className="stk stk--b">
															{tv(lang, 'Referal dastur')}
															<u>{'5'}</u>
														</span>
														<span className="stk stk--c">
															{tv(lang, 'Video-keyslar')}
															<u>{'4'}</u>
														</span>
														<span className="stk stk--d">
															{tv(lang, 'Narx kalkulyatori')}
															<u>{'3'}</u>
														</span>
														<span className="stk stk--e">
															{tv(lang, 'SEO klaster')}
															<u>{'2'}</u>
														</span>
														<span className="pcur pcur--a">
															<span>
																<b>{tv(lang, 'Xojiakbar')}</b>
															</span>
														</span>
														<span className="pcur pcur--b">
															<span>
																<b>{tv(lang, 'Dilnoza')}</b>
															</span>
														</span>
													</div>
													<p className="bst__f">
														{tv(lang, 'Sessiya yakuni:')}{' '}
														<b>{tv(lang, '3 ta g\'oya')}</b>
														{' '}{tv(lang, 'tanlandi va vazifaga aylantirildi')}
													</p>
												</div>
											</section>
											{/* 05 · CRM voronkasi */}
											<section className="scr__i">
												<div className="dash__head">
													<span className="dash__t">{tv(lang, 'CRM va sotuv')}</span>
													<span className="dash__btn"></span>
												</div>
												<div className="kpis">
													<div className="kpi">
														<b data-live="128" data-min="112" data-max="146">{'128'}</b>
														<em>{tv(lang, 'Voronkadagi lidlar')}</em>
													</div>
													<div className="kpi">
														<b data-live="386.5" data-min="340" data-max="430" data-dec="1" data-suffix={tva(lang, ' mln')}>{tv(lang, '386.5 mln')}</b>
														<em>{tv(lang, 'Voronka qiymati')}</em>
													</div>
													<div className="kpi">
														<b data-live="9.4" data-min="7" data-max="12" data-dec="1" data-suffix={tva(lang, '%')}>{'9.4%'}</b>
														<em>{tv(lang, 'Konversiya')}</em>
													</div>
												</div>
												<div className="fun">
													<div className="fun__r" style={{ '--w': '100%' }}>
														<em>{tv(lang, 'Yangi murojaat')}</em>
														<u></u>
														<b>{'128'}</b>
													</div>
													<div className="fun__r" style={{ '--w': '73%' }}>
														<em>{tv(lang, 'Kvalifikatsiya')}</em>
														<u></u>
														<b>{'94'}</b>
													</div>
													<div className="fun__r" style={{ '--w': '48%' }}>
														<em>{tv(lang, 'Taklif yuborildi')}</em>
														<u></u>
														<b>{'61'}</b>
													</div>
													<div className="fun__r" style={{ '--w': '27%' }}>
														<em>{tv(lang, 'Muzokara')}</em>
														<u></u>
														<b>{'34'}</b>
													</div>
													<div className="fun__r" style={{ '--w': '11%' }}>
														<em>{tv(lang, 'Bitim yopildi')}</em>
														<u></u>
														<b>{'12'}</b>
													</div>
												</div>
												<div className="inv">
													<div className="inv__r">
														<em>{tv(lang, 'Alfa Textile')}</em>
														<span>{tv(lang, '· ERP')}</span>
														<b>{'96 000 000'}</b>
														<span className="bdg bdg--g">{tv(lang, 'Muzokara')}</span>
													</div>
													<div className="inv__r">
														<em>{tv(lang, 'Orient Logistics')}</em>
														<span>{tv(lang, '· CRM')}</span>
														<b>{'54 000 000'}</b>
														<span className="bdg bdg--b">{tv(lang, 'Taklif yuborildi')}</span>
													</div>
													<div className="inv__r">
														<em>{tv(lang, 'Delta Market')}</em>
														<span>{tv(lang, '· Sayt')}</span>
														<b>{'22 400 000'}</b>
														<span className="bdg bdg--a">{tv(lang, 'Yangi murojaat')}</span>
													</div>
												</div>
											</section>
											{/* 06 · Hisobotlar */}
											<section className="scr__i">
												<div className="dash__head">
													<span className="dash__t">{tv(lang, 'Hisobotlar')}</span>
													<span className="dash__btn"></span>
												</div>
												<div className="kpis">
													<div className="kpi">
														<b data-live="42.6" data-min="36" data-max="48" data-dec="1" data-suffix={tva(lang, '%')}>{'42.6%'}</b>
														<em>{tv(lang, 'Marja')}</em>
													</div>
													<div className="kpi">
														<b data-live="38.4" data-min="31" data-max="44" data-dec="1" data-suffix={tva(lang, ' mln')}>{tv(lang, '38.4 mln')}</b>
														<em>{tv(lang, 'O\'rtacha chek')}</em>
													</div>
													<div className="kpi">
														<b data-live="3.2" data-min="2.6" data-max="3.9" data-dec="1" data-suffix={tva(lang, 'x')}>{tv(lang, '3.2x')}</b>
														<em>{tv(lang, 'Mijoz LTV')}</em>
													</div>
												</div>
												<div className="rep">
													<div className="plate">
														<div className="plate__h">
															<em>{tv(lang, 'Tushum · 12 oy')}</em>
															<span className="up">
																<b data-live="24.6" data-min="18" data-max="31" data-dec="1" data-suffix={tva(lang, '%')}>{'24.6%'}</b>
															</span>
														</div>
														<div className="bars">
															<span>
																<i style={{ '--h': '34%' }}></i>
																<s>{tv(lang, 'Yan')}</s>
															</span>
															<span>
																<i style={{ '--h': '41%' }}></i>
																<s>{tv(lang, 'Fev')}</s>
															</span>
															<span>
																<i style={{ '--h': '38%' }}></i>
																<s>{tv(lang, 'Mar')}</s>
															</span>
															<span>
																<i style={{ '--h': '52%' }}></i>
																<s>{tv(lang, 'Apr')}</s>
															</span>
															<span>
																<i style={{ '--h': '47%' }}></i>
																<s>{tv(lang, 'May')}</s>
															</span>
															<span>
																<i style={{ '--h': '61%' }}></i>
																<s>{tv(lang, 'Iyun')}</s>
															</span>
															<span className="hi">
																<i style={{ '--h': '78%' }}></i>
																<s>{tv(lang, 'Iyul')}</s>
															</span>
															<span>
																<i style={{ '--h': '69%' }}></i>
																<s>{tv(lang, 'Avg')}</s>
															</span>
															<span>
																<i style={{ '--h': '74%' }}></i>
																<s>{tv(lang, 'Sen')}</s>
															</span>
															<span>
																<i style={{ '--h': '83%' }}></i>
																<s>{tv(lang, 'Okt')}</s>
															</span>
															<span>
																<i style={{ '--h': '79%' }}></i>
																<s>{tv(lang, 'Noy')}</s>
															</span>
															<span>
																<i style={{ '--h': '94%' }}></i>
																<s>{tv(lang, 'Dek')}</s>
															</span>
														</div>
													</div>
													<div className="plate">
														<div className="plate__h">
															<em>{tv(lang, 'Yo\'nalishlar ulushi')}</em>
														</div>
														<div className="dn">
															<svg viewBox="0 0 42 42" aria-hidden="true">
																<circle className="dn__t" cx="21" cy="21" r="15.9" />
																<circle cx="21" cy="21" r="15.9" stroke="#2563EB" strokeDasharray="41 59" strokeDashoffset="0" />
																<circle cx="21" cy="21" r="15.9" stroke="#60A5FA" strokeDasharray="27 73" strokeDashoffset="-41" />
																<circle cx="21" cy="21" r="15.9" stroke="#93C5FD" strokeDasharray="18 82" strokeDashoffset="-68" />
																<circle cx="21" cy="21" r="15.9" stroke="#C7DBFF" strokeDasharray="14 86" strokeDashoffset="-86" />
															</svg>
															<ul className="dn__l">
																<li>
																	<i style={{ background: '#2563EB' }}></i>
																	{tv(lang, 'ERP va CRM')}
																	<b>{'41%'}</b>
																</li>
																<li>
																	<i style={{ background: '#60A5FA' }}></i>
																	{tv(lang, 'Veb saytlar')}
																	<b>{'27%'}</b>
																</li>
																<li>
																	<i style={{ background: '#93C5FD' }}></i>
																	{tv(lang, 'Mobil ilovalar')}
																	<b>{'18%'}</b>
																</li>
																<li>
																	<i style={{ background: '#C7DBFF' }}></i>
																	{tv(lang, 'Botlar')}
																	<b>{'14%'}</b>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</section>
											{/* 07 · Jamoa */}
											<section className="scr__i">
												<div className="dash__head">
													<span className="dash__t">{tv(lang, 'Jamoa')}</span>
													<span className="dash__btn"></span>
												</div>
												<div className="kpis">
													<div className="kpi">
														<b>{'18'}</b>
														<em>{tv(lang, 'Xodimlar')}</em>
													</div>
													<div className="kpi">
														<b data-live="86" data-min="78" data-max="94" data-suffix={tva(lang, '%')}>{'86%'}</b>
														<em>{tv(lang, 'Bandlik')}</em>
													</div>
													<div className="kpi">
														<b data-live="1284" data-min="1150" data-max="1400">{'1284'}</b>
														<em>{tv(lang, 'Soat · oy')}</em>
													</div>
												</div>
												<div className="team">
													<div className="tm">
														<span className="tm__a" style={{ background: '#2563EB' }}>{tv(lang, 'XC')}</span>
														<span className="tm__b">
															<b>{tv(lang, 'Xojiakbar Ch.')}</b>
															<span>{tv(lang, 'Loyiha rahbari')}</span>
														</span>
														<u style={{ '--p': '92%' }}></u>
														<em>{'92%'}</em>
													</div>
													<div className="tm">
														<span className="tm__a" style={{ background: '#3B82F6' }}>{tv(lang, 'DA')}</span>
														<span className="tm__b">
															<b>{tv(lang, 'Dilnoza A.')}</b>
															<span>{tv(lang, 'Bosh dizayner')}</span>
														</span>
														<u style={{ '--p': '84%' }}></u>
														<em>{'84%'}</em>
													</div>
													<div className="tm">
														<span className="tm__a" style={{ background: '#60A5FA' }}>{tv(lang, 'SR')}</span>
														<span className="tm__b">
															<b>{tv(lang, 'Sardor R.')}</b>
															<span>{tv(lang, 'Backend dasturchi')}</span>
														</span>
														<u style={{ '--p': '78%' }}></u>
														<em>{'78%'}</em>
													</div>
													<div className="tm">
														<span className="tm__a" style={{ background: '#0EA5A5' }}>{tv(lang, 'MT')}</span>
														<span className="tm__b">
															<b>{tv(lang, 'Malika T.')}</b>
															<span>{tv(lang, 'Sotuv menejeri')}</span>
														</span>
														<u style={{ '--p': '71%' }}></u>
														<em>{'71%'}</em>
													</div>
												</div>
											</section>
										</div>
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
