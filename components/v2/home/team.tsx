/* Maket: design/v2/index.html, bo'lim В«». Avtogeneratsiyadan keyin qo'lda o'ralgan. */
import { tv } from '@/lib/i18n-v2'
import { Split } from '@/components/v2/split'
import type { Language } from '@/lib/languages'

export function HomeTeam({ lang }: { lang: Language }) {

	return (
		<>
			{/* ===================== JAMOA ===================== */}
			<section className="section" id="jamoa" data-sec="jamoa">
				<span className="aura aura--b aura--drift" style={{ width: '620px', height: '620px', left: '-220px', top: '12%', opacity: '0.45' }}></span>
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Jamoa')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'Loyihangiz ustida ishlaydigan odamlar')}
						</Split>
						<p className="p-sec rise" style={{ '--d': '160ms' }}>{tv(lang, 'Har bir loyihada bir xil jamoa: auditni o\'tkazadigan, dizayn qiladigan va ishga tushiradigan odamlar.')}</p>
					</div>
					<div className="crew rise" style={{ '--d': '220ms' }}>
						<button className="tmc is-on" type="button" data-team>
							<span className="tmc__art">
								<svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
									<g className="sil">
										<circle cx="150" cy="150" r="66" />
										<path d="M25 420 v-96 a125 125 0 0 1 250 0 v96 Z" />
									</g>
								</svg>
							</span>
							<span className="tmc__v">{tv(lang, 'Ta\'sischi')}</span>
							<span className="tmc__d">
								<b className="tmc__n">{tv(lang, 'Xojiakbar Choriyev')}</b>
								<em className="tmc__r">{tv(lang, 'Ta\'sischi va rahbar')}</em>
								<span className="tmc__b">{tv(lang, 'Mijoz bilan birinchi suhbatdan tortib topshirishgacha loyihani olib boradi.')}</span>
								<span className="tmc__x">{tv(lang, 'Strategiya · ERP · Mijozlar')}</span>
							</span>
						</button>
						<button className="tmc" type="button" data-team>
							<span className="tmc__art">
								<svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
									<g className="sil">
										<circle cx="150" cy="150" r="66" />
										<path d="M25 420 v-96 a125 125 0 0 1 250 0 v96 Z" />
									</g>
								</svg>
							</span>
							<span className="tmc__v">{tv(lang, 'COO')}</span>
							<span className="tmc__d">
								<b className="tmc__n">{tv(lang, 'Samir Kenjayev')}</b>
								<em className="tmc__r">{tv(lang, 'Operatsion direktor')}</em>
								<span className="tmc__b">{tv(lang, 'Muddat, byudjet va jamoa yuklamasini nazorat qiladi, har hafta holatni yetkazadi.')}</span>
								<span className="tmc__x">{tv(lang, 'Jarayon · Rejalashtirish')}</span>
							</span>
						</button>
						<button className="tmc" type="button" data-team>
							<span className="tmc__art">
								<svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
									<g className="sil">
										<circle cx="150" cy="150" r="66" />
										<path d="M25 420 v-96 a125 125 0 0 1 250 0 v96 Z" />
									</g>
								</svg>
							</span>
							<span className="tmc__v">{tv(lang, 'CTO')}</span>
							<span className="tmc__d">
								<b className="tmc__n">{tv(lang, 'Shoxrux Amirkulov')}</b>
								<em className="tmc__r">{tv(lang, 'Texnik direktor')}</em>
								<span className="tmc__b">{tv(lang, 'Arxitektura va texnik yechimlar: tizim qanday qurilishi va yuklamaga qanday chidashi uning zimmasida.')}</span>
								<span className="tmc__x">{tv(lang, 'Arxitektura · Infratuzilma')}</span>
							</span>
						</button>
						<button className="tmc" type="button" data-team>
							<span className="tmc__art">
								<svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
									<g className="sil">
										<circle cx="150" cy="150" r="66" />
										<path d="M25 420 v-96 a125 125 0 0 1 250 0 v96 Z" />
									</g>
								</svg>
							</span>
							<span className="tmc__v">{tv(lang, 'CTO')}</span>
							<span className="tmc__d">
								<b className="tmc__n">{tv(lang, 'Sobitov Oybek')}</b>
								<em className="tmc__r">{tv(lang, 'Texnik direktor')}</em>
								<span className="tmc__b">{tv(lang, 'Ishlab chiqish jarayoni va kod sifati: reliz, kod-revyu va texnik standartlar.')}</span>
								<span className="tmc__x">{tv(lang, 'Ishlab chiqish · Sifat')}</span>
							</span>
						</button>
						<button className="tmc" type="button" data-team>
							<span className="tmc__art">
								<svg viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
									<g className="sil">
										<circle cx="150" cy="150" r="66" />
										<path d="M25 420 v-96 a125 125 0 0 1 250 0 v96 Z" />
									</g>
								</svg>
							</span>
							<span className="tmc__v">{tv(lang, 'Backend')}</span>
							<span className="tmc__d">
								<b className="tmc__n">{tv(lang, 'Xasan Orifjonov')}</b>
								<em className="tmc__r">{tv(lang, 'Backend dasturchi')}</em>
								<span className="tmc__b">{tv(lang, 'Server tomoni, ma\'lumotlar bazasi va integratsiyalar — tizimning ichki qismi uning zimmasida.')}</span>
								<span className="tmc__x">{tv(lang, 'Backend · API · Integratsiya')}</span>
							</span>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
