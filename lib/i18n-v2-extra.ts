/* Ilovaga xos satrlar — maketda ular yo'q, chunki u yerdagi forma
   jo'natmaydi va til marshrut bilan almashmaydi. Qo'lda yuritiladi;
   generator (scripts/extract-i18n.mjs) bu faylga tegmaydi.
   tv() avval shu yerga qaraydi, keyin maket lug'atiga. */
export const v2Extra: Record<'ru' | 'en', Record<string, string>> = {
	ru: {
		'Yuborilmoqda…': 'Отправляется…',
		'Til': 'Язык',
		"Ariza yuborish orqali siz shaxsiy ma'lumotlaringizni qayta ishlashga rozilik bildirasiz":
			'Отправляя заявку, вы соглашаетесь на обработку персональных данных',

		/* Namoyish ekranlaridagi shartli kompaniyalar (haqiqiy mijozlar o'rniga).
		   «Alfa Textile — ERP» tarjimasiz qoladi — u ikkala tilda ham bir xil. */
		'Orient Logistics — katalog': 'Orient Logistics — каталог',
		'Delta Market — analitika': 'Delta Market — аналитика',
		'Vertex Build — platforma': 'Vertex Build — платформа',
		'Nova Pharm — sayt': 'Nova Pharm — сайт',
		'Alfa Textile — korporativ sayt va hisob-kitob moduli':
			'Alfa Textile — корпоративный сайт и модуль расчётов',
		'Orient Logistics — ulgurji katalog platformasi':
			'Orient Logistics — платформа оптового каталога',
		'Delta Market — analitik platforma, 2-bosqich':
			'Delta Market — аналитическая платформа, 2-й этап',
		'Kelasi haftada 3 ta uchrashuv: Alfa Textile (dushanba), Orient Logistics (chorshanba), Delta Market (juma).':
			'На следующей неделе 3 встречи: Alfa Textile (понедельник), Orient Logistics (среда), Delta Market (пятница).',
		'Alfa Textile — taklif yuborildi': 'Alfa Textile — КП отправлено',
		'Alfa Textile — korporativ sayt': 'Alfa Textile — корпоративный сайт',

		/* Maket lug'atida yo'q edi — «12 hafta · 48 mln» bor, bu esa yo'q. */
		'8 hafta · 96 mln': '8 недель · 96 млн',
		'· Sayt': '· Сайт',

		/* KPI raqamlarining BOSHLANG'ICH matni. Odometr keyin ularni tarjima
		   qilingan qo'shimcha bilan qayta chizadi, lekin: reduced-motion da
		   odometr umuman ishlamaydi va raqam o'zbekcha qolib ketadi, qolgan
		   hammada esa gidratatsiyagacha ko'rinadi — va krauler aynan shuni
		   o'qiydi. Shuning uchun serverdayoq to'g'ri chiqishi kerak. */
		'128.4 mln': '128.4 млн',
		'1.24 mln': '1.24 млн',
		'74.2 mln': '74.2 млн',
		'54.2 mln': '54.2 млн',
		'41.8 mln': '41.8 млн',
		'386.5 mln': '386.5 млн',
		'38.4 mln': '38.4 млн',
	},
	en: {
		'Yuborilmoqda…': 'Sending…',
		'Til': 'Language',
		"Ariza yuborish orqali siz shaxsiy ma'lumotlaringizni qayta ishlashga rozilik bildirasiz":
			'By submitting the form you consent to the processing of your personal data',

		/* Namoyish ekranlaridagi shartli kompaniyalar (haqiqiy mijozlar o'rniga). */
		'Orient Logistics — katalog': 'Orient Logistics — catalogue',
		'Delta Market — analitika': 'Delta Market — analytics',
		'Vertex Build — platforma': 'Vertex Build — platform',
		'Nova Pharm — sayt': 'Nova Pharm — website',
		'Alfa Textile — korporativ sayt va hisob-kitob moduli':
			'Alfa Textile — corporate website and calculation module',
		'Orient Logistics — ulgurji katalog platformasi':
			'Orient Logistics — wholesale catalogue platform',
		'Delta Market — analitik platforma, 2-bosqich':
			'Delta Market — analytics platform, phase 2',
		'Kelasi haftada 3 ta uchrashuv: Alfa Textile (dushanba), Orient Logistics (chorshanba), Delta Market (juma).':
			'Three meetings next week: Alfa Textile (Monday), Orient Logistics (Wednesday), Delta Market (Friday).',
		'Alfa Textile — taklif yuborildi': 'Alfa Textile — proposal sent',
		'Alfa Textile — korporativ sayt': 'Alfa Textile — corporate website',

		/* Maket lug'atida yo'q edi — «12 hafta · 48 mln» bor, bu esa yo'q. */
		'8 hafta · 96 mln': '8 weeks · 96M',
		'· Sayt': '· Website',

		/* KPI raqamlarining boshlang'ich matni — yuqoridagi izohga qarang. */
		'128.4 mln': '128.4M',
		'1.24 mln': '1.24M',
		'74.2 mln': '74.2M',
		'54.2 mln': '54.2M',
		'41.8 mln': '41.8M',
		'386.5 mln': '386.5M',
		'38.4 mln': '38.4M',
	},
}
