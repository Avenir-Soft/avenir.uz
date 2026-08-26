/* Maket: design/v2/index.html, bo'lim В«». Avtogeneratsiyadan keyin qo'lda o'ralgan. */
import { tv } from '@/lib/i18n-v2'
import { Split, Odometer } from '@/components/v2/split'
import type { Language } from '@/lib/languages'

export function HomeProcess({ lang }: { lang: Language }) {

	return (
		<>
			{/* ===================== JARAYON ===================== */}
			<section className="section" id="jarayon" data-sec="jarayon">
				<div className="shell">
					<div className="center">
						<span className="chip rise">
							<i></i>
							{tv(lang, 'Jarayon')}
						</span>
						<Split className="h-sec rise" style={{ '--d': '80ms' }}>
							{tv(lang, 'G\'oyadan ishga tushirishgacha')}
						</Split>
						<p className="p-sec rise" style={{ '--d': '160ms' }}>{tv(lang, 'Tezlik, sifat va aniq biznes natijalari uchun moslashtirilgan jarayon.')}</p>
					</div>
					<div className="steps">
						<div className="gc step rise">
							<span className="step__n">{'01'}</span>
							<h4>{tv(lang, 'Chuqur Audit')}</h4>
							<p>{tv(lang, 'Jarayonlarni ichidan o\'rganamiz: to\'siq va ortiqcha xarajatlarni topib, aniq talablarga aylantiramiz.')}</p>
						</div>
						<div className="gc step rise" style={{ '--d': '100ms' }}>
							<span className="step__n">{'02'}</span>
							<h4>{tv(lang, 'Dizayn va ishlab chiqish')}</h4>
							<p>{tv(lang, 'UI tizimlari va masshtablanuvchi injiniring.')}</p>
						</div>
						<div className="gc step rise" style={{ '--d': '200ms' }}>
							<span className="step__n">{'03'}</span>
							<h4>{tv(lang, 'Ishga tushirish va o\'sish')}</h4>
							<p>{tv(lang, 'Optimizatsiya va uzoq muddatli qo\'llab-quvvatlash.')}</p>
						</div>
					</div>
					<div className="nums">
						<div className="nums__c rise">
							<Odometer value="50" sup="+" className="od" />
							<p className="nums__k">{tv(lang, 'Topshirilgan loyihalar')}</p>
						</div>
						<div className="nums__c rise" style={{ '--d': '80ms' }}>
							<Odometer value="30" sup="+" className="od" />
							<p className="nums__k">{tv(lang, 'Mamnun mijozlar')}</p>
						</div>
						<div className="nums__c rise" style={{ '--d': '160ms' }}>
							<Odometer value="5" className="od" />
							<p className="nums__k">{tv(lang, 'Bozordagi yillar')}</p>
						</div>
						<div className="nums__c rise" style={{ '--d': '240ms' }}>
							<Odometer value="4" className="od" />
							<p className="nums__k">{tv(lang, 'Qamrab olingan mamlakatlar')}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
