/* Ilovaga xos satrlar — maketda ular yo'q, chunki u yerdagi forma
   jo'natmaydi va til marshrut bilan almashmaydi. Qo'lda yuritiladi;
   generator (scripts/extract-i18n.mjs) bu faylga tegmaydi.
   tv() avval shu yerga qaraydi, keyin maket lug'atiga. */
export const v2Extra: Record<'ru' | 'en', Record<string, string>> = {
	ru: {
		'Yuborilmoqda…': 'Отправляется…',
		'Til': 'Язык',
	},
	en: {
		'Yuborilmoqda…': 'Sending…',
		'Til': 'Language',
	},
}
