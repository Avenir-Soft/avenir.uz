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

		/* Forma xatolari. Ilgari hammasi bitta «qaytadan urinib ko'ring» edi. */
		"Juda tez-tez yuborilyapti. {n} soniyadan keyin qayta urinib ko'ring":
			'Слишком часто. Попробуйте через {n} секунд',
		"Maydonlarni tekshiring: telefon raqami yoki majburiy maydon to'ldirilmagan":
			'Проверьте поля: телефон или обязательное поле заполнены неверно',
		"Yuborib bo'lmadi. Bizga yozing": 'Не получилось отправить. Напишите нам',
		"Telefon raqamini to'liq kiriting": 'Введите номер телефона полностью',
		'Nima kerak': 'Что нужно',
		'loyiha — 30+ kompaniya uchun': 'проектов для 30+ компаний',

		/* Avenir Store — keys sahifasi va portfolio kartochkasi */
		'E-commerce · mini-app': 'E-commerce · mini-app',
		'Katalog, filtrlar va savat': 'Каталог, фильтры и корзина',
		/* Brauzer chizig'idagi manzil — u ham tarjima qilinadi */
		'fetch-group.uz — katalog': 'fetch-group.uz — каталог',
		'fetch-group.uz — mahsulot': 'fetch-group.uz — товар',
		"E-commerce · o'z mahsulotimiz": 'E-commerce · наш продукт',
		'Telegram ichida ochiladigan elektronika vitrinasi: katalog, filtrlar va savat.':
			'Витрина электроники внутри Telegram: каталог, фильтры и корзина.',
		"Do'kon telefonda ochiladi va yopilmaydi": 'Магазин открывается в телефоне и не закрывается',
		"Avenir Store — o'zimiz quradigan va o'zimiz sotadigan elektronika vitrinasi. Bu yerda hamma narsani o'z ustimizda sinaymiz: qidiruv, filtr, qoldiq va buyurtma. Shuning uchun mijozga mini-app haqida gapirganda, nazariyani emas, har kuni ishlaydigan do'konni ko'rsatamiz.":
			'Avenir Store — витрина электроники, которую мы строим сами и в которой сами торгуем. Здесь всё проверено на себе: поиск, фильтры, остатки и заказ. Поэтому, когда мы рассказываем клиенту про mini-app, мы показываем не теорию, а магазин, который работает каждый день.',
		"Shunday do'kon kerakmi?": 'Нужен такой магазин?',
		'Mini-app haqida': 'О mini-app',
		'Katalog': 'Каталог',
		'Savat': 'Корзина',
		'Ikki til': 'Два языка',
		"Kataloq bo'limlari": 'Разделы каталога',
		'Smartfonlar': 'Смартфоны',
		'Noutbuklar': 'Ноутбуки',
		'Planshetlar': 'Планшеты',
		'Aqlli soatlar': 'Умные часы',
		'Quloqchinlar': 'Наушники',
		'Akustika': 'Акустика',
		"katalog bo'limi": 'разделов каталога',
		'filtr — narxdan xotiragacha': 'фильтров — от цены до памяти',
		"til — o'zbek va rus": 'языка — узбекский и русский',
		'Onlayn': 'Онлайн',
		'qoldiq har bir kartochkada': 'остаток в каждой карточке',
		'Elektronika savdosi chatda qoladi': 'Продажа техники застревает в переписке',
		"Toshkentda texnika ko'pincha Telegram orqali sotiladi: mijoz rasm so'raydi, narxni so'raydi, bor-yo'qligini so'raydi. Har bir savolga odam javob beradi, va shu odam kechasi uxlaydi.":
			'В Ташкенте технику чаще всего продают через Telegram: клиент просит фото, спрашивает цену, спрашивает наличие. На каждый вопрос отвечает человек, а человек ночью спит.',
		"Narx va qoldiq faqat sotuvchining boshida": 'Цена и остаток — только в голове продавца',
		"Bitta model bo'yicha o'nlab bir xil savol": 'Десятки одинаковых вопросов по одной модели',
		"Xotira, rang va holatni tanlash yozishmada aniqlanadi": 'Память, цвет и состояние выясняются в переписке',
		"Ilova o'rnatish — ortiqcha to'siq, uni hamma ham bosmaydi": 'Установка приложения — лишний барьер, на него идут не все',
		"Vitrina Telegram ichida ochiladi": 'Витрина открывается внутри Telegram',
		"Mini-app o'rnatishni talab qilmaydi: havola bosiladi va do'kon ochiladi. Katalog, filtrlar, qoldiq va savat — hammasi shu yerda, mijoz suhbatdan chiqmaydi.":
			'Mini-app не требует установки: нажал ссылку — магазин открылся. Каталог, фильтры, остатки и корзина — всё здесь, клиент не выходит из переписки.',
		"Har bir kartochkada narx, chegirma va qoldiq ko'rinadi": 'В каждой карточке видны цена, скидка и остаток',
		"Rang, xotira va SIM kartochkaning o'zida tanlanadi": 'Цвет, память и SIM выбираются прямо в карточке',
		"Yettita filtr: kategoriya, holat, RAM, xotira, narx va boshqalar": 'Семь фильтров: категория, состояние, RAM, память, цена и другие',
		"O'zbek va rus tili — bir tegishda almashadi": 'Узбекский и русский — переключаются одним касанием',
		"Do'kon qanday ko'rinadi": 'Как выглядит магазин',
		"Yuqorida — qidiruv va til, pastda aylanuvchi banner va tanlangan mahsulotlar. Ekranning pastki qismida to'rtta belgi: bosh sahifa, katalog, savat va profil — barmoq ostida.":
			'Сверху — поиск и язык, ниже вращающийся баннер и подборка товаров. Внизу экрана четыре значка: главная, каталог, корзина и профиль — под пальцем.',
		"«Top» belgisi tanlangan tovarlarni ajratib turadi": 'Значок «Top» выделяет отобранные товары',
		"Narx so'mda, qoldiq esa darhol kartochkada": 'Цена в сумах, остаток — сразу в карточке',
		"Qidiruv butun katalog bo'ylab ishlaydi": 'Поиск работает по всему каталогу',
		'Katalog va filtrlar': 'Каталог и фильтры',
		"Yuqorida kategoriya tugmalari, chapda esa to'liq filtr paneli. Mijoz «nimadir mos» emas, aynan kerakli narsani topadi: kerakli xotira, kerakli rang va kerakli narx oralig'i.":
			'Сверху кнопки категорий, слева полная панель фильтров. Клиент находит не «что-то похожее», а именно нужное: нужную память, нужный цвет и нужный диапазон цены.',
		"Saralash: eng yangi, arzon yoki qimmatdan boshlab": 'Сортировка: сначала новые, дешёвые или дорогие',
		"Holat filtri — yangi yoki ishlatilgan texnika": 'Фильтр состояния — новая или б/у техника',
		"Narx oralig'i suriladigan chiziq bilan tanlanadi": 'Диапазон цены выбирается ползунком',
		"Chegirmadagi tovarlar alohida belgilanadi": 'Товары со скидкой отмечены отдельно',
		'Mahsulot kartochkasi': 'Карточка товара',
		"Bitta ekranda hamma narsa bor: suratlar galereyasi, joriy narx va uning yonida chizilgan eski narx, qoldiq, holat va tanlovlar. Sotuvchiga savol berish uchun sabab qolmaydi.":
			'На одном экране есть всё: галерея фото, текущая цена и зачёркнутая старая рядом, остаток, состояние и выбор конфигурации. Повода писать продавцу не остаётся.',
		"Rang, xotira va SIM — tugmalar bilan tanlanadi": 'Цвет, память и SIM выбираются кнопками',
		"Chegirma foizi qizil belgida ko'rinadi": 'Процент скидки виден на красном значке',
		"Miqdorni o'zgartirib, savatga qo'shiladi": 'Количество меняется, товар кладётся в корзину',
		"Asosiy ko'rinish aynan shu: mini-app telefonda ochiladi. Pastki panel barmoq ostida qoladi, kartochkalar ikki ustunda, narx va nom kesilmaydi.":
			'Основной вид именно такой: mini-app открывается в телефоне. Нижняя панель остаётся под пальцем, карточки в две колонки, цена и название не обрезаются.',
		"Navigatsiya doim ekranning pastida": 'Навигация всегда внизу экрана',
		"Til almashtirgichi yuqorida, qidiruv yonida": 'Переключатель языка сверху, рядом с поиском',
		"Ilova o'rnatish shart emas — havola yetarli": 'Устанавливать приложение не нужно — достаточно ссылки',
		"Savol o'rniga javob": 'Ответ вместо вопроса',
		"Narx, qoldiq va konfiguratsiya kartochkada turadi — sotuvchi ularni qayta-qayta yozmaydi.":
			'Цена, остаток и конфигурация стоят в карточке — продавец не пишет их снова и снова.',
		"O'rnatishsiz": 'Без установки',
		"Do'kon Telegram ichida ochiladi: mijoz suhbatdan chiqmaydi va hech nima yuklamaydi.":
			'Магазин открывается внутри Telegram: клиент не выходит из переписки и ничего не скачивает.',
		"O'zimizda sinalgan": 'Проверено на себе',
		"Bu bizning o'z do'konimiz — mijozga har kuni ishlayotgan yechimni ko'rsatamiz.":
			'Это наш собственный магазин — клиенту мы показываем решение, которое работает каждый день.',
		"Shunday do'kon sizga ham kerakmi?": 'Нужен такой магазин и вам?',
		"Avenir Store ni ko'rsatamiz va sizning assortimentingizga qanday moslashini birga o'ylaymiz.":
			'Покажем Avenir Store и вместе подумаем, как он ляжет на ваш ассортимент.',
		'Qisqacha yozing — qolganini savollar bilan aniqlaymiz':
			'Напишите коротко — остальное уточним вопросами',
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

		/* Forma xatolari. */
		"Juda tez-tez yuborilyapti. {n} soniyadan keyin qayta urinib ko'ring":
			'Too many attempts. Try again in {n} seconds',
		"Maydonlarni tekshiring: telefon raqami yoki majburiy maydon to'ldirilmagan":
			'Check the fields: the phone number or a required field is incorrect',
		"Yuborib bo'lmadi. Bizga yozing": 'Could not send. Message us',
		"Telefon raqamini to'liq kiriting": 'Enter the full phone number',
		'Nima kerak': 'What you need',
		'loyiha — 30+ kompaniya uchun': 'projects for 30+ companies',

		/* Avenir Store — keys sahifasi va portfolio kartochkasi */
		'E-commerce · mini-app': 'E-commerce · mini app',
		'Katalog, filtrlar va savat': 'Catalogue, filters and cart',
		'fetch-group.uz — katalog': 'fetch-group.uz — catalogue',
		'fetch-group.uz — mahsulot': 'fetch-group.uz — product',
		"E-commerce · o'z mahsulotimiz": 'E-commerce · our own product',
		'Telegram ichida ochiladigan elektronika vitrinasi: katalog, filtrlar va savat.':
			'An electronics storefront inside Telegram: catalogue, filters and cart.',
		"Do'kon telefonda ochiladi va yopilmaydi": 'The shop opens on the phone and stays open',
		"Avenir Store — o'zimiz quradigan va o'zimiz sotadigan elektronika vitrinasi. Bu yerda hamma narsani o'z ustimizda sinaymiz: qidiruv, filtr, qoldiq va buyurtma. Shuning uchun mijozga mini-app haqida gapirganda, nazariyani emas, har kuni ishlaydigan do'konni ko'rsatamiz.":
			'Avenir Store is an electronics storefront we build ourselves and sell through ourselves. Everything here is tested on our own operation: search, filters, stock and checkout. So when we talk to a client about mini apps, we show a shop that works every day, not a theory.',
		"Shunday do'kon kerakmi?": 'Need a shop like this?',
		'Mini-app haqida': 'About mini apps',
		'Katalog': 'Catalogue',
		'Savat': 'Cart',
		'Ikki til': 'Two languages',
		"Kataloq bo'limlari": 'Catalogue sections',
		'Smartfonlar': 'Smartphones',
		'Noutbuklar': 'Laptops',
		'Planshetlar': 'Tablets',
		'Aqlli soatlar': 'Smart watches',
		'Quloqchinlar': 'Headphones',
		'Akustika': 'Speakers',
		"katalog bo'limi": 'catalogue sections',
		'filtr — narxdan xotiragacha': 'filters — from price to storage',
		"til — o'zbek va rus": 'languages — Uzbek and Russian',
		'Onlayn': 'Live',
		'qoldiq har bir kartochkada': 'stock in every card',
		'Elektronika savdosi chatda qoladi': 'Electronics sales get stuck in chat',
		"Toshkentda texnika ko'pincha Telegram orqali sotiladi: mijoz rasm so'raydi, narxni so'raydi, bor-yo'qligini so'raydi. Har bir savolga odam javob beradi, va shu odam kechasi uxlaydi.":
			'In Tashkent electronics are mostly sold through Telegram: the customer asks for photos, for the price, for availability. Every question is answered by a person, and that person sleeps at night.',
		"Narx va qoldiq faqat sotuvchining boshida": 'Price and stock live only in the seller’s head',
		"Bitta model bo'yicha o'nlab bir xil savol": 'Dozens of identical questions about one model',
		"Xotira, rang va holatni tanlash yozishmada aniqlanadi": 'Storage, colour and condition are settled in chat',
		"Ilova o'rnatish — ortiqcha to'siq, uni hamma ham bosmaydi": 'Installing an app is an extra barrier — not everyone takes it',
		"Vitrina Telegram ichida ochiladi": 'The storefront opens inside Telegram',
		"Mini-app o'rnatishni talab qilmaydi: havola bosiladi va do'kon ochiladi. Katalog, filtrlar, qoldiq va savat — hammasi shu yerda, mijoz suhbatdan chiqmaydi.":
			'A mini app needs no installation: tap the link and the shop opens. Catalogue, filters, stock and cart are all here, and the customer never leaves the conversation.',
		"Har bir kartochkada narx, chegirma va qoldiq ko'rinadi": 'Every card shows price, discount and stock',
		"Rang, xotira va SIM kartochkaning o'zida tanlanadi": 'Colour, storage and SIM are chosen in the card itself',
		"Yettita filtr: kategoriya, holat, RAM, xotira, narx va boshqalar": 'Seven filters: category, condition, RAM, storage, price and more',
		"O'zbek va rus tili — bir tegishda almashadi": 'Uzbek and Russian — switched with one tap',
		"Do'kon qanday ko'rinadi": 'What the shop looks like',
		"Yuqorida — qidiruv va til, pastda aylanuvchi banner va tanlangan mahsulotlar. Ekranning pastki qismida to'rtta belgi: bosh sahifa, katalog, savat va profil — barmoq ostida.":
			'Search and language on top, a rotating banner and featured products below. Four icons sit at the bottom of the screen: home, catalogue, cart and profile — right under the thumb.',
		"«Top» belgisi tanlangan tovarlarni ajratib turadi": 'The “Top” badge marks featured products',
		"Narx so'mda, qoldiq esa darhol kartochkada": 'Price in soum, stock right in the card',
		"Qidiruv butun katalog bo'ylab ishlaydi": 'Search runs across the whole catalogue',
		'Katalog va filtrlar': 'Catalogue and filters',
		"Yuqorida kategoriya tugmalari, chapda esa to'liq filtr paneli. Mijoz «nimadir mos» emas, aynan kerakli narsani topadi: kerakli xotira, kerakli rang va kerakli narx oralig'i.":
			'Category buttons on top, a full filter panel on the left. The customer finds not “something close” but exactly the right thing: the right storage, the right colour, the right price range.',
		"Saralash: eng yangi, arzon yoki qimmatdan boshlab": 'Sorting: newest, cheapest or most expensive first',
		"Holat filtri — yangi yoki ishlatilgan texnika": 'Condition filter — new or used devices',
		"Narx oralig'i suriladigan chiziq bilan tanlanadi": 'The price range is set with a slider',
		"Chegirmadagi tovarlar alohida belgilanadi": 'Discounted items are marked separately',
		'Mahsulot kartochkasi': 'Product page',
		"Bitta ekranda hamma narsa bor: suratlar galereyasi, joriy narx va uning yonida chizilgan eski narx, qoldiq, holat va tanlovlar. Sotuvchiga savol berish uchun sabab qolmaydi.":
			'Everything is on one screen: a photo gallery, the current price with the struck-through old one beside it, stock, condition and configuration choices. No reason left to message the seller.',
		"Rang, xotira va SIM — tugmalar bilan tanlanadi": 'Colour, storage and SIM are picked with buttons',
		"Chegirma foizi qizil belgida ko'rinadi": 'The discount percentage shows on a red badge',
		"Miqdorni o'zgartirib, savatga qo'shiladi": 'Quantity is adjusted and the item goes to the cart',
		"Asosiy ko'rinish aynan shu: mini-app telefonda ochiladi. Pastki panel barmoq ostida qoladi, kartochkalar ikki ustunda, narx va nom kesilmaydi.":
			'This is the main view: the mini app opens on a phone. The bottom bar stays under the thumb, cards run in two columns, price and name are never cut off.',
		"Navigatsiya doim ekranning pastida": 'Navigation always sits at the bottom',
		"Til almashtirgichi yuqorida, qidiruv yonida": 'The language switch is on top, next to search',
		"Ilova o'rnatish shart emas — havola yetarli": 'No app install needed — a link is enough',
		"Savol o'rniga javob": 'An answer instead of a question',
		"Narx, qoldiq va konfiguratsiya kartochkada turadi — sotuvchi ularni qayta-qayta yozmaydi.":
			'Price, stock and configuration live in the card — the seller no longer types them over and over.',
		"O'rnatishsiz": 'No installation',
		"Do'kon Telegram ichida ochiladi: mijoz suhbatdan chiqmaydi va hech nima yuklamaydi.":
			'The shop opens inside Telegram: the customer stays in the conversation and downloads nothing.',
		"O'zimizda sinalgan": 'Tested on ourselves',
		"Bu bizning o'z do'konimiz — mijozga har kuni ishlayotgan yechimni ko'rsatamiz.":
			'This is our own shop — we show clients a solution that runs every day.',
		"Shunday do'kon sizga ham kerakmi?": 'Do you need a shop like this?',
		"Avenir Store ni ko'rsatamiz va sizning assortimentingizga qanday moslashini birga o'ylaymiz.":
			'We will show you Avenir Store and think together about how it fits your range.',
		'Qisqacha yozing — qolganini savollar bilan aniqlaymiz':
			'Write briefly — we will clarify the rest with questions',
	},
}
