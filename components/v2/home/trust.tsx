/* Maket: design/v2/index.html, bo'lim В«». Avtogeneratsiyadan keyin qo'lda o'ralgan. */
import { tv } from '@/lib/i18n-v2'
import type { Language } from '@/lib/languages'

export function HomeTrust({ lang }: { lang: Language }) {

	return (
		<>
			{/* ===================== ISHONCH ===================== */}
			<section className="trust">
				<div className="shell">
					<p className="trust__l rise">
						<b>{'50+'}</b>
						{' '}{tv(lang, 'kompaniya bizga ishonadi')}
					</p>
				</div>
				<div className="mq rise" style={{ '--d': '80ms' }}>
					<div className="mq__t" id="mq">
						<span className="mq__i">{tv(lang, 'VAC.UZ')}</span>
						<span className="mq__i">{tv(lang, 'Avenir OS')}</span>
						<span className="mq__i">{tv(lang, 'Yakov and Partners')}</span>
						<span className="mq__i">{tv(lang, 'DeFi Technologies')}</span>
						<span className="mq__i">{tv(lang, 'APEC Asia UAE')}</span>
						<span className="mq__i">{tv(lang, 'Dagestantur')}</span>
						<span className="mq__i">{tv(lang, 'VAC.UZ')}</span>
						<span className="mq__i">{tv(lang, 'Avenir OS')}</span>
						<span className="mq__i">{tv(lang, 'Yakov and Partners')}</span>
						<span className="mq__i">{tv(lang, 'DeFi Technologies')}</span>
						<span className="mq__i">{tv(lang, 'APEC Asia UAE')}</span>
						<span className="mq__i">{tv(lang, 'Dagestantur')}</span>
					</div>
				</div>
			</section>
		</>
	)
}
