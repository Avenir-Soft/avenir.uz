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
	},
	en: {
		'Yuborilmoqda…': 'Sending…',
		'Til': 'Language',
		"Ariza yuborish orqali siz shaxsiy ma'lumotlaringizni qayta ishlashga rozilik bildirasiz":
			'By submitting the form you consent to the processing of your personal data',
	},
}
