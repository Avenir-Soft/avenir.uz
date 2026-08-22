/* Avenir v2 — xizmat sahifalari uchun umumiy xulq-atvor:
   mavzu, til, menyu, ochilish animatsiyalari, kursor. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth >= 1024;

  /* ---------- sarlavhalarni so'zlarga bo'lish ---------- */
  function splitOne(h) {
    var frag = document.createDocumentFragment(), i = 0;
    Array.prototype.slice.call(h.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part.trim()) { if (part) frag.appendChild(document.createTextNode(part)); return; }
          var m = document.createElement('span'); m.className = 'mask';
          var inner = document.createElement('i'); inner.textContent = part;
          inner.style.setProperty('--wd', (i++ * 70) + 'ms');
          m.appendChild(inner); frag.appendChild(m);
        });
      } else {
        var m2 = document.createElement('span'); m2.className = 'mask';
        var in2 = document.createElement('i'); in2.style.setProperty('--wd', (i++ * 70) + 'ms');
        in2.appendChild(node.cloneNode(true)); m2.appendChild(in2); frag.appendChild(m2);
      }
    });
    h.textContent = ''; h.appendChild(frag);
  }

  /* ---------- til ---------- */
  var LANGS = ['uz', 'ru', 'en'];
  var I18N = {
    "ru": {
      "Yechimlar": "Решения",
      "Loyihalar": "Проекты",
      "Jarayon": "Процесс",
      "Aloqa": "Контакты",
      "Avenir IT-agentligi": "IT-агентство Avenir",
      "Biznesingizni": "Переводим ваш бизнес в",
      "raqamli": "цифровую",
      "tizimga o'tkazamiz.": "систему.",
      "Sayt, CRM, ERP va Mobil Ilova — bir jamoada. G'oyadan ishga tushirishgacha, keyin esa o'sish va qo'llab-quvvatlash.": "Сайт, CRM, ERP и мобильное приложение — одна команда. От идеи до запуска, а дальше — рост и поддержка.",
      "Loyihani boshlash": "Начать проект",
      "Ishlarimizni ko'rish": "Смотреть работы",
      "Ochiq bitimlar": "Открытые сделки",
      "Oylik daromad": "Выручка за месяц",
      "Bajarilgan vazifa": "Задачи выполнены",
      "Lidlar oqimi · 30 kun": "Поток лидов · 30 дней",
      "mln": "млн",
      "Yangi lid": "Новый лид",
      "VAC.UZ — korporativ sayt": "VAC.UZ — корпоративный сайт",
      "hozir": "сейчас",
      "daq": "мин",
      "#2481 to’landi": "#2481 оплачен",
      "Bitim bosqichi": "Этап сделки",
      "Yangi mijoz": "Новый клиент",
      "Oylik P&L tayyor": "Месячный P&L готов",
      "kompaniya bizga ishonadi": "компаний нам доверяют",
      "Biznesingiz uchun raqamli yechimlar": "Цифровые решения для вашего бизнеса",
      "Har bir yo'nalish bo'yicha tayyor jamoa va ishlab chiqilgan jarayon.": "По каждому направлению — готовая команда и отлаженный процесс.",
      "Batafsil": "Подробнее",
      "CRM va ERP": "CRM и ERP",
      "Sotuv, ombor va moliya — bitta tizimda": "Продажи, склад и финансы — в одной системе",
      "Bitim, hisob-faktura, ombor va jamoa — bir joyda. Har bir harakat tizimda o'zi qayd etiladi.": "Сделки, счета, склад и команда — в одном месте. Каждое действие фиксируется в системе автоматически.",
      "Bitim": "Сделка",
      "Taklif yuborildi": "КП отправлено",
      "VAC.UZ — korporativ sayt va hisob-kitob moduli": "VAC.UZ — корпоративный сайт и модуль расчётов",
      "Muddat: 12 hafta": "Срок: 12 недель",
      "48 000 000 so'm": "48 000 000 сум",
      "Shartnoma": "Договор",
      "Imzolandi": "Подписан",
      "APEC Asia UAE — ulgurji katalog platformasi": "APEC Asia UAE — платформа оптового каталога",
      "Muddat: 18 hafta": "Срок: 18 недель",
      "126 400 000 so'm": "126 400 000 сум",
      "Hisob-faktura": "Счёт",
      "To'lov kutilmoqda": "Ожидает оплаты",
      "Yakov and Partners — analitik platforma, 2-bosqich": "Yakov and Partners — аналитическая платформа, 2-й этап",
      "Muddat: 5 kun": "Срок: 5 дней",
      "32 000 000 so'm": "32 000 000 сум",
      "Ombor": "Склад",
      "Qabul qilindi": "Принято",
      "Ventilyatsiya kanali — 240 m · yetkazib beruvchi VAC": "Воздуховод — 240 м · поставщик VAC",
      "Skladga kiritildi": "Оприходовано на склад",
      "18 400 000 so'm": "18 400 000 сум",
      "Xarajat": "Расход",
      "Tasdiqlandi": "Утверждён",
      "Jamoa oyligi va litsenziyalar — iyul 2026": "Зарплата команды и лицензии — июль 2026",
      "Moliya bo'limi": "Финансовый отдел",
      "74 200 000 so'm": "74 200 000 сум",
      "AI botlar": "AI-боты",
      "Buyruqni tushunadigan yordamchi": "Ассистент, который понимает команды",
      "Oddiy gap bilan so'raysiz — bot hisobotni tayyorlaydi, vazifani ochadi, javobni topadi.": "Спрашиваете обычными словами — бот готовит отчёт, ставит задачу, находит ответ.",
      "Kelasi haftadagi uchrashuvlarni ko'rsat": "Покажи встречи на следующей неделе",
      "Tezkor": "Быстро",
      "Iyul oyidagi xarajatlar hisobotini tayyorla": "Подготовь отчёт по расходам за июль",
      "Hisobot": "Отчёт",
      "Qarzdor mijozlar ro'yxatini chiqar": "Выведи список должников",
      "Moliya": "Финансы",
      "Yangi lidga taklif xatini yoz": "Напиши КП новому лиду",
      "Sotuv": "Продажи",
      "Javob": "Ответ",
      "Kelasi haftada 3 ta uchrashuv: VAC.UZ (dushanba), APEC (chorshanba), Yakov (juma).": "На следующей неделе 3 встречи: VAC.UZ (понедельник), APEC (среда), Yakov (пятница).",
      "Iyul xarajatlari — 74 200 000 so'm. Eng katta modda: jamoa oyligi (68%).": "Расходы за июль — 74 200 000 сум. Крупнейшая статья: зарплата команды (68%).",
      "4 ta qarzdor topildi, jami 41 800 000 so'm. Eng eskisi — 18 kun.": "Найдено 4 должника на общую сумму 41 800 000 сум. Самый давний — 18 дней.",
      "Taklif xati tayyor — 2 sahifa, narx jadvali bilan. Yuborishga tayyor.": "КП готово — 2 страницы с таблицей цен. Можно отправлять.",
      "Veb saytlar": "Веб-сайты",
      "Ishonch uyg'otadigan va sotadigan sayt": "Сайт, который вызывает доверие и продаёт",
      "Korporativ sayt, landing va e-commerce. Tez yuklanadi, qidiruvda topiladi, mobilda qulay.": "Корпоративный сайт, лендинг и e-commerce. Быстро загружается, находится в поиске, удобен на телефоне.",
      "Telegram bot va mini-app": "Telegram-бот и mini-app",
      "Mijoz Telegramdan chiqmasdan buyurtma beradi": "Клиент оформляет заказ, не выходя из Telegram",
      "Katalog, to'lov va CRM ga ulanish — bir oynada. Mini-app bilan to'liq interfeys.": "Каталог, оплата и связь с CRM — в одном окне. С mini-app — полноценный интерфейс.",
      "onlayn": "в сети",
      "Assalomu alaykum! Nima qilishim mumkin?": "Здравствуйте! Чем могу помочь?",
      "Buyurtma berish": "Оформить заказ",
      "Katalog": "Каталог",
      "Holat": "Статус",
      "Operator": "Оператор",
      "Ventilyatsiya kanali, 24 m": "Воздуховод, 24 м",
      "Qabul qilindi. Buyurtma #4821 · bugun 18:00 gacha yetkaziladi.": "Принято. Заказ #4821 · доставим сегодня до 18:00.",
      "To'lov qilish": "Оплатить",
      "Manzilni o'zgartirish": "Изменить адрес",
      "To'lov qildim": "Оплатил",
      "To'lov tasdiqlandi — 7 400 000 so'm. Chek yuborildi.": "Оплата подтверждена — 7 400 000 сум. Чек отправлен.",
      "CRM da bitim avtomatik yopildi.": "Сделка в CRM закрыта автоматически.",
      "Katalogni ko'rsat": "Покажи каталог",
      "Mini-app ochildi: 142 ta pozitsiya, narxlar CRM dan.": "Mini-app открыт: 142 позиции, цены из CRM.",
      "Mini-app ochish": "Открыть mini-app",
      "Qidirish": "Поиск",
      "Mobil ilovalar": "Мобильные приложения",
      "Android va iOS uchun barqaror ilova": "Стабильное приложение для Android и iOS",
      "Push, oflayn rejim va ichki tizimlaringizga ulanish — bitta kod bazasidan.": "Push, офлайн-режим и связь с вашими системами — из одной кодовой базы.",
      "Payshanba, 21-avgust": "Четверг, 21 августа",
      "Yangi bitim": "Новая сделка",
      "VAC.UZ — taklif yuborildi": "VAC.UZ — КП отправлено",
      "To'lov qabul qilindi": "Платёж получен",
      "#2481 · 32 000 000 so'm": "#2481 · 32 000 000 сум",
      "3 daq": "3 мин",
      "Vazifa yopildi": "Задача закрыта",
      "Dizayn sprint · 12/12": "Дизайн-спринт · 12/12",
      "12 daq": "12 мин",
      "Eslatma": "Напоминание",
      "Shartnoma 3 kunda tugaydi": "Договор истекает через 3 дня",
      "1 soat": "1 ч",
      "Hisobot tayyor": "Отчёт готов",
      "Iyul oyi P&L": "P&L за июль",
      "2 soat": "2 ч",
      "Haqiqiy natija bergan mahsulotlar": "Продукты, которые дали реальный результат",
      "Ishlab chiqarish · ERP": "Производство · ERP",
      "Ventilyatsiya kanal ishlab chiqaruvchi kompaniya uchun sayt va hisob-kitob tizimi.": "Сайт и система расчётов для производителя вентиляционных воздуховодов.",
      "ERP + CRM + Moliya": "ERP + CRM + финансы",
      "Barcha operatsion vazifalarni yagona ilovada boshqarish uchun tizim.": "Система для управления всеми операционными задачами в одном приложении.",
      "Konsalting": "Консалтинг",
      "Xalqaro konsalting kompaniyasi uchun korporativ sayt va analitik platforma.": "Корпоративный сайт и аналитическая платформа для международной консалтинговой компании.",
      "TradFi platforma": "TradFi-платформа",
      "Raqamli aktivlarga institutsional kirish imkonini beruvchi platforma.": "Платформа институционального доступа к цифровым активам.",
      "BAA da global ulgurji avto ehtiyot qismlari yetkazib berish platformasi.": "Платформа глобальных оптовых поставок автозапчастей в ОАЭ.",
      "Turizm": "Туризм",
      "Tur agentligi uchun bronirovanie va marshrutlarni ko'rsatuvchi sayt.": "Сайт с бронированием и маршрутами для туристического агентства.",
      "G'oyadan ishga tushirishgacha": "От идеи до запуска",
      "Tezlik, sifat va aniq biznes natijalari uchun moslashtirilgan jarayon.": "Процесс, настроенный на скорость, качество и измеримый бизнес-результат.",
      "Chuqur Audit": "Глубокий аудит",
      "Jarayonlarni ichidan o'rganamiz: to'siq va ortiqcha xarajatlarni topib, aniq talablarga aylantiramiz.": "Изучаем процессы изнутри: находим узкие места и лишние расходы и превращаем их в чёткие требования.",
      "Dizayn va ishlab chiqish": "Дизайн и разработка",
      "UI tizimlari va masshtablanuvchi injiniring.": "UI-системы и масштабируемая инженерия.",
      "Ishga tushirish va o'sish": "Запуск и рост",
      "Optimizatsiya va uzoq muddatli qo'llab-quvvatlash.": "Оптимизация и долгосрочная поддержка.",
      "Topshirilgan loyihalar": "Сданные проекты",
      "Mamnun mijozlar": "Довольные клиенты",
      "Bozordagi yillar": "Лет на рынке",
      "Qamrab olingan mamlakatlar": "Стран охвата",
      "Loyihangizni": "Начните свой проект",
      "bugun": "сегодня",
      "boshlang": "",
      "Toshkent, O'zbekiston": "Ташкент, Узбекистан",
      "Ijtimoiy tarmoqlar": "Социальные сети",
      "Ismingiz": "Ваше имя",
      "Ism familiya": "Имя и фамилия",
      "Telefon raqam": "Номер телефона",
      "Telegram username": "Telegram-username",
      "Xabar yuborish": "Отправить заявку",
      "24 soat ichida javob beramiz": "Ответим в течение 24 часов",
      "Avenir Soft — Yakka tartibdagi tadbirkor Choriyev Xojiakbar Shuxrat O'g'li": "Avenir Soft — индивидуальный предприниматель Choriyev Xojiakbar Shuxrat O'g'li",
      "© 2026 Avenir.uz · Barcha huquqlar himoyalangan": "© 2026 Avenir.uz · Все права защищены",
      "Maxfiylik siyosati": "Политика конфиденциальности",
      "Foydalanish shartlari": "Условия использования",
      "Mavzuni almashtirish": "Сменить тему",
      "Yorug' / qorong'i": "Светлая / тёмная",
      "Menyu": "Меню",
      "Boshqaruv paneli": "Обзор",
      "Faol lidlar": "Активные лиды",
      "Oylik tushum": "Выручка MTD",
      "Jamoa yuklamasi": "Загрузка команды",
      "Ishda": "В работе",
      "Tekshiruvda": "На проверке",
      "Yakunlandi": "Завершён",
      "12 hafta · 48 mln": "12 недель · 48 млн",
      "18 hafta · 126 mln": "18 недель · 126 млн",
      "2-bosqich · 32 mln": "2-й этап · 32 млн",
      "Topshirildi · 19 mln": "Сдан · 19 млн",
      "Kanallar": "Каналы",
      "Ko'rsatishlar": "Показы",
      "Kliklar": "Клики",
      "Lidlar": "Лиды",
      "Mijozlar": "Клиенты",
      "Hisob-fakturalar": "Счета",
      "Xarajatlar": "Расходы",
      "P&L hisobot": "P&L отчёт",
      "Tushum · oy": "Выручка · мес",
      "Xarajat · oy": "Расходы · мес",
      "Foyda · oy": "Прибыль · мес",
      "Debitorka": "Дебиторка",
      "To'landi": "Оплачен",
      "Yuborildi": "Отправлен",
      "Muddati o'tdi": "Просрочен",
      "Breynstorming": "Брейнсторминг",
      "Referal dastur": "Реферальная программа",
      "Video-keyslar": "Видео-кейсы",
      "Narx kalkulyatori": "Калькулятор цены",
      "SEO klaster": "SEO-кластер",
      "Sessiya yakuni:": "Итоги сессии:",
      "3 ta g'oya": "3 идеи",
      "tanlandi va vazifaga aylantirildi": "выбраны и превращены в задачи",
      "CRM va sotuv": "CRM и продажи",
      "Voronkadagi lidlar": "Лиды в воронке",
      "Voronka qiymati": "Стоимость воронки",
      "Konversiya": "Конверсия",
      "Yangi murojaat": "Новое обращение",
      "Kvalifikatsiya": "Квалификация",
      "Muzokara": "Переговоры",
      "Bitim yopildi": "Сделка закрыта",
      "Hisobotlar": "Отчёты",
      "Tushum · 12 oy": "Выручка · 12 мес",
      "Yo'nalishlar ulushi": "Доли направлений",
      "ERP va CRM": "ERP и CRM",
      "Botlar": "Боты",
      "Tushum va xarajat · 6 oy": "Выручка и расходы · 6 мес",
      "Jamoa": "Команда",
      "Xodimlar": "Сотрудники",
      "Bandlik": "Загрузка",
      "Soat · oy": "Часы · мес",
      "Loyiha rahbari": "Руководитель проектов",
      "Bosh dizayner": "Ведущий дизайнер",
      "Backend dasturchi": "Backend-разработчик",
      "Sotuv menejeri": "Менеджер по продажам",
      "Yan": "Янв",
      "Fev": "Фев",
      "Mar": "Мар",
      "Apr": "Апр",
      "May": "Май",
      "Iyun": "Июн",
      "Iyul": "Июл",
      "Avg": "Авг",
      "Sen": "Сен",
      "Okt": "Окт",
      "Noy": "Ноя",
      "Dek": "Дек",
      "Marja": "Маржа",
      "O'rtacha chek": "Средний чек",
      "Mijoz LTV": "LTV клиента",
      "Tushum": "Выручка",
      "Sayt": "Сайт",
      "Loyihangiz ustida ishlaydigan odamlar": "Люди, которые будут работать над вашим проектом",
      "Har bir loyihada bir xil jamoa: auditni o'tkazadigan, dizayn qiladigan va ishga tushiradigan odamlar.": "На каждом проекте одна и та же команда: те, кто проводит аудит, проектирует и запускает.",
      "Ta'sischi va rahbar": "Основатель и руководитель",
      "Ta'sischi": "Основатель",
      "Mijoz bilan birinchi suhbatdan tortib topshirishgacha loyihani olib boradi.": "Ведёт проект от первого разговора с клиентом до сдачи.",
      "Strategiya · ERP · Mijozlar": "Стратегия · ERP · Клиенты",
      "Loyihalar rahbari": "Руководитель проектов",
      "Muddat, byudjet va jamoa yuklamasini nazorat qiladi, har hafta holatni yetkazadi.": "Держит сроки, бюджет и загрузку команды, каждую неделю присылает статус.",
      "Jarayon · Rejalashtirish": "Процесс · Планирование",
      "Interfeys tuzilmasi, prototip va dizayn tizimi — foydalanuvchi yo'lini qisqartiradi.": "Структура интерфейса, прототип и дизайн-система — сокращает путь пользователя.",
      "UX · UI · Dizayn tizimi": "UX · UI · Дизайн-система",
      "Yetakchi dasturchi": "Ведущий разработчик",
      "Arxitektura, integratsiyalar va tizim barqarorligi uning zimmasida.": "На нём архитектура, интеграции и стабильность системы.",
      "Backend · Integratsiya": "Backend · Интеграции",
      "Sotuv va qo'llab-quvvatlash": "Продажи и поддержка",
      "Qo'llab-quvvatlash": "Поддержка",
      "Ishga tushgandan keyin ham aloqada: savol, yangilanish va rivojlantirish.": "Остаётся на связи после запуска: вопросы, обновления и развитие.",
      "Support · Rivojlantirish": "Поддержка · Развитие",
      "Bosh sahifa": "Главная",
      "Yechimlarga qaytish": "Назад к решениям",
      "Taxminiy muddat": "Ориентировочный срок",
      "Texnologiyalar": "Технологии",
      "Nimalar kiradi": "Что входит",
      "Natija": "Результат",
      "Ekranlar": "Экраны",
      "Qanday ishlaymiz": "Как мы работаем",
      "Boshqa yechimlar": "Другие решения",
      "Loyihani muhokama qilamiz": "Обсудим проект",
      "Brif to'ldirish shart emas — qisqacha yozing, qolganini savol berib aniqlaymiz.": "Заполнять бриф необязательно — напишите коротко, остальное уточним вопросами.",
      "Loyihalardan ekranlar": "Экраны из проектов",
      "Chuqur audit": "Глубокий аудит",
      "Jarayonni ichidan o'rganamiz va aniq talablar ro'yxatini yig'amiz.": "Изучаем процесс изнутри и собираем список чётких требований.",
      "Prototip": "Прототип",
      "Ekranlar va ssenariylarni ishga tushirishdan oldin kelishib olamiz.": "Согласуем экраны и сценарии до старта разработки.",
      "Bosqichma-bosqich ishga tushirish": "Поэтапный запуск",
      "Har 2 haftada ishlaydigan qism topshiriladi — natijani darhol ko'rasiz.": "Каждые 2 недели сдаём работающую часть — результат виден сразу.",
      "Ishga tushgandan keyin ham monitoring, yangilanish va rivojlantirish.": "После запуска — мониторинг, обновления и развитие.",
      "8–16 hafta": "8–16 недель",
      "Bitim, hisob-faktura, ombor, jamoa va moliya — hammasi bitta tizimda. Har bir harakat avtomatik qayd etiladi, rahbar esa real vaqtda ko'radi: qancha pul kirdi, qayerda to'siq bor, kim nima bilan band.": "Сделки, счета, склад, команда и финансы — в одной системе. Каждое действие фиксируется автоматически, а руководитель видит в реальном времени: сколько денег пришло, где узкое место, кто чем занят.",
      "Jarayon auditi va texnik topshiriq": "Аудит процессов и техническое задание",
      "Rollar va kirish huquqlari": "Роли и права доступа",
      "Sotuv voronkasi va bitimlar": "Воронка продаж и сделки",
      "Hisob-faktura, to'lovlar va P&L": "Счета, платежи и P&L",
      "Ombor, xarid va yetkazib berish": "Склад, закупки и поставки",
      "Hisobotlar va boshqaruv paneli": "Отчёты и панель руководителя",
      "Bitta manba": "Один источник",
      "Barcha bo'lim bir xil raqamga qaraydi — Excel nusxalari kerak emas.": "Все отделы смотрят на одни и те же цифры — копии в Excel больше не нужны.",
      "Real vaqt": "Реальное время",
      "Rahbar oylik hisobotni kutmaydi — holatni ekranda ko'radi.": "Руководитель не ждёт месячный отчёт — видит состояние на экране.",
      "Nazorat": "Контроль",
      "Har bir o'zgarishni kim va qachon qilgani saqlanib qoladi.": "Сохраняется, кто и когда внёс каждое изменение.",
      "Ishlab chiqarish · hisob-kitob moduli": "Производство · модуль расчётов",
      "3–8 hafta": "3–8 недель",
      "Oddiy gap bilan so'raysiz — bot hisobotni yig'adi, vazifa ochadi, mijozga javob yozadi. U sizning ma'lumotlaringiz ustida ishlaydi: CRM, ombor, moliya va ichki hujjatlarga ulanadi.": "Спрашиваете обычными словами — бот собирает отчёт, ставит задачу, готовит ответ клиенту. Он работает на ваших данных: подключается к CRM, складу, финансам и внутренним документам.",
      "Ma'lumot manbalarini ulash": "Подключение источников данных",
      "Bilimlar bazasi va semantik qidiruv": "База знаний и семантический поиск",
      "Savol-javob va hisobot yig'ish": "Вопрос-ответ и сборка отчётов",
      "CRM va vazifalar bilan integratsiya": "Интеграция с CRM и задачами",
      "Xavfsizlik va kirish chegaralari": "Безопасность и границы доступа",
      "Javob sifatini o'lchash va sozlash": "Замер качества ответов и донастройка",
      "Soniyalarda": "За секунды",
      "Hisobot kutish vaqti soatlardan soniyalarga tushadi.": "Ожидание отчёта сокращается с часов до секунд.",
      "O'rganish shart emas": "Без обучения",
      "Xodim so'rovni oddiy gap bilan yozadi — menyu qidirmaydi.": "Сотрудник пишет запрос обычными словами — не ищет пункт меню.",
      "Chegaralangan": "Под контролем",
      "Bot faqat o'sha xodimga ruxsat berilgan ma'lumotni ko'radi.": "Бот видит только те данные, к которым у сотрудника есть доступ.",
      "AI brifing va hisobotlar": "AI-брифинг и отчёты",
      "2–6 hafta": "2–6 недель",
      "Korporativ sayt, landing yoki e-commerce — birinchi ekrandan mijozni ushlab qoladigan qilib quramiz. Tez yuklanadi, qidiruvda topiladi, telefonda qulay va CRM ga ulanadi.": "Корпоративный сайт, лендинг или e-commerce — делаем так, чтобы клиент оставался с первого экрана. Быстро грузится, находится в поиске, удобен на телефоне и связан с CRM.",
      "Struktura va interaktiv prototip": "Структура и интерактивный прототип",
      "Brendga mos UI dizayn": "UI-дизайн под ваш бренд",
      "Frontend va animatsiyalar": "Frontend и анимации",
      "Kontent boshqaruvi (CMS)": "Управление контентом (CMS)",
      "Texnik SEO va yuklanish tezligi": "Техническое SEO и скорость загрузки",
      "Analitika va CRM ga ulanish": "Аналитика и связь с CRM",
      "90+ ball": "90+ баллов",
      "Lighthouse tezlik, SEO va qulaylik ko'rsatkichlari.": "Показатели Lighthouse по скорости, SEO и доступности.",
      "Uch til": "Три языка",
      "O'zbek, rus va ingliz tillari bitta tizimda boshqariladi.": "Узбекский, русский и английский управляются из одной системы.",
      "Avval mobil": "Сначала мобильный",
      "Trafikning katta qismi telefondan keladi — sayt shunga qurilgan.": "Большая часть трафика приходит с телефона — сайт собран под это.",
      "Konsalting · korporativ sayt": "Консалтинг · корпоративный сайт",
      "E-commerce · ulgurji katalog": "E-commerce · оптовый каталог",
      "Turizm · bronirovanie": "Туризм · бронирование",
      "Katalog, buyurtma, to'lov va operator bilan aloqa — bitta oynada. Mini-app to'liq interfeys beradi, bot esa bildirishnoma va CRM bilan bog'lanishni o'z zimmasiga oladi.": "Каталог, заказ, оплата и связь с оператором — в одном окне. Mini-app даёт полноценный интерфейс, а бот берёт на себя уведомления и связь с CRM.",
      "Bot ssenariysi va menyu tuzilmasi": "Сценарий бота и структура меню",
      "Mini-app interfeysi": "Интерфейс mini-app",
      "Katalog, savat va buyurtma": "Каталог, корзина и заказ",
      "Onlayn to'lov va cheklar": "Онлайн-оплата и чеки",
      "CRM va ombor bilan integratsiya": "Интеграция с CRM и складом",
      "Operatorga uzatish va bildirishnomalar": "Передача оператору и уведомления",
      "O'rnatish shart emas": "Без установки",
      "Mijoz ilova yuklab olmaydi — Telegramda darhol ochadi.": "Клиент не скачивает приложение — открывает прямо в Telegram.",
      "Avtomatik": "Автоматически",
      "Buyurtma to'g'ridan-to'g'ri CRM ga tushadi, omborga zayavka ketadi.": "Заказ сразу попадает в CRM, на склад уходит заявка.",
      "To'lov joyida": "Оплата на месте",
      "Payme va Click bevosita suhbat ichida ishlaydi.": "Payme и Click работают прямо внутри диалога.",
      "Buyurtma boti va CRM ulanishi": "Бот заказов и связь с CRM",
      "Katalog va narxlar": "Каталог и цены",
      "6–14 hafta": "6–14 недель",
      "Bitta kod bazasidan ikkala platforma. Push bildirishnoma, oflayn rejim va ichki tizimlaringizga ulanish — xodim internetsiz ham ishlay oladi, aloqa tiklanganda hammasi sinxronlanadi.": "Обе платформы из одной кодовой базы. Push-уведомления, офлайн-режим и связь с вашими системами — сотрудник работает и без интернета, а при появлении связи всё синхронизируется.",
      "Ssenariylar va prototip": "Сценарии и прототип",
      "iOS va Android uchun UI": "UI для iOS и Android",
      "Push va chuqur havolalar": "Push и диплинки",
      "Oflayn rejim va sinxronizatsiya": "Офлайн-режим и синхронизация",
      "ERP va CRM bilan integratsiya": "Интеграция с ERP и CRM",
      "Do'konlarga chiqarish va yangilanishlar": "Публикация в сторах и обновления",
      "Ikki platforma": "Две платформы",
      "Bitta jamoa va bitta kod bazasi — ikki barobar xarajat emas.": "Одна команда и одна кодовая база — не двойной бюджет.",
      "Oflayn": "Офлайн",
      "Aloqa yo'qolsa ham ilova ishlayveradi, keyin o'zi sinxronlanadi.": "Приложение продолжает работать без связи и потом само синхронизируется.",
      "Push": "Push",
      "Muhim voqea telefonga darhol tushadi — pochta kutilmaydi.": "Важное событие сразу приходит на телефон — не ждём почту.",
      "Mobil versiya · vazifalar va bildirishnomalar": "Мобильная версия · задачи и уведомления"
    },
    "en": {
      "Yechimlar": "Solutions",
      "Loyihalar": "Projects",
      "Jarayon": "Process",
      "Aloqa": "Contact",
      "Avenir IT-agentligi": "Avenir IT agency",
      "Biznesingizni": "We turn your business into a",
      "raqamli": "digital",
      "tizimga o'tkazamiz.": "system.",
      "Sayt, CRM, ERP va Mobil Ilova — bir jamoada. G'oyadan ishga tushirishgacha, keyin esa o'sish va qo'llab-quvvatlash.": "Website, CRM, ERP and a mobile app — from one team. From idea to launch, then growth and support.",
      "Loyihani boshlash": "Start a project",
      "Ishlarimizni ko'rish": "See our work",
      "Ochiq bitimlar": "Open deals",
      "Oylik daromad": "Monthly revenue",
      "Bajarilgan vazifa": "Tasks completed",
      "Lidlar oqimi · 30 kun": "Lead flow · 30 days",
      "mln": "M",
      "Yangi lid": "New lead",
      "VAC.UZ — korporativ sayt": "VAC.UZ — corporate website",
      "hozir": "now",
      "daq": "min",
      "#2481 to’landi": "#2481 paid",
      "Bitim bosqichi": "Deal stage",
      "Yangi mijoz": "New client",
      "Oylik P&L tayyor": "Monthly P&L ready",
      "kompaniya bizga ishonadi": "companies trust us",
      "Biznesingiz uchun raqamli yechimlar": "Digital solutions for your business",
      "Har bir yo'nalish bo'yicha tayyor jamoa va ishlab chiqilgan jarayon.": "A ready team and a proven process for every direction.",
      "Batafsil": "Learn more",
      "CRM va ERP": "CRM and ERP",
      "Sotuv, ombor va moliya — bitta tizimda": "Sales, inventory and finance — in one system",
      "Bitim, hisob-faktura, ombor va jamoa — bir joyda. Har bir harakat tizimda o'zi qayd etiladi.": "Deals, invoices, inventory and the team — in one place. Every action is logged automatically.",
      "Bitim": "Deal",
      "Taklif yuborildi": "Proposal sent",
      "VAC.UZ — korporativ sayt va hisob-kitob moduli": "VAC.UZ — corporate website and calculation module",
      "Muddat: 12 hafta": "Term: 12 weeks",
      "48 000 000 so'm": "48,000,000 UZS",
      "Shartnoma": "Contract",
      "Imzolandi": "Signed",
      "APEC Asia UAE — ulgurji katalog platformasi": "APEC Asia UAE — wholesale catalogue platform",
      "Muddat: 18 hafta": "Term: 18 weeks",
      "126 400 000 so'm": "126,400,000 UZS",
      "Hisob-faktura": "Invoice",
      "To'lov kutilmoqda": "Awaiting payment",
      "Yakov and Partners — analitik platforma, 2-bosqich": "Yakov and Partners — analytics platform, phase 2",
      "Muddat: 5 kun": "Term: 5 days",
      "32 000 000 so'm": "32,000,000 UZS",
      "Ombor": "Inventory",
      "Qabul qilindi": "Received",
      "Ventilyatsiya kanali — 240 m · yetkazib beruvchi VAC": "Ventilation duct — 240 m · supplier VAC",
      "Skladga kiritildi": "Added to stock",
      "18 400 000 so'm": "18,400,000 UZS",
      "Xarajat": "Expense",
      "Tasdiqlandi": "Approved",
      "Jamoa oyligi va litsenziyalar — iyul 2026": "Team payroll and licences — July 2026",
      "Moliya bo'limi": "Finance department",
      "74 200 000 so'm": "74,200,000 UZS",
      "AI botlar": "AI bots",
      "Buyruqni tushunadigan yordamchi": "An assistant that understands commands",
      "Oddiy gap bilan so'raysiz — bot hisobotni tayyorlaydi, vazifani ochadi, javobni topadi.": "Ask in plain words — the bot builds the report, opens the task, finds the answer.",
      "Kelasi haftadagi uchrashuvlarni ko'rsat": "Show next week's meetings",
      "Tezkor": "Quick",
      "Iyul oyidagi xarajatlar hisobotini tayyorla": "Prepare the July expense report",
      "Hisobot": "Report",
      "Qarzdor mijozlar ro'yxatini chiqar": "List the clients in arrears",
      "Moliya": "Finance",
      "Yangi lidga taklif xatini yoz": "Draft a proposal for the new lead",
      "Sotuv": "Sales",
      "Javob": "Answer",
      "Kelasi haftada 3 ta uchrashuv: VAC.UZ (dushanba), APEC (chorshanba), Yakov (juma).": "Three meetings next week: VAC.UZ (Monday), APEC (Wednesday), Yakov (Friday).",
      "Iyul xarajatlari — 74 200 000 so'm. Eng katta modda: jamoa oyligi (68%).": "July expenses — 74,200,000 UZS. Largest item: team payroll (68%).",
      "4 ta qarzdor topildi, jami 41 800 000 so'm. Eng eskisi — 18 kun.": "Four debtors found, 41,800,000 UZS in total. The oldest is 18 days.",
      "Taklif xati tayyor — 2 sahifa, narx jadvali bilan. Yuborishga tayyor.": "The proposal is ready — two pages with a price table. Ready to send.",
      "Veb saytlar": "Websites",
      "Ishonch uyg'otadigan va sotadigan sayt": "A site that earns trust and sells",
      "Korporativ sayt, landing va e-commerce. Tez yuklanadi, qidiruvda topiladi, mobilda qulay.": "Corporate sites, landing pages and e-commerce. Fast to load, easy to find in search, comfortable on mobile.",
      "Telegram bot va mini-app": "Telegram bot and mini app",
      "Mijoz Telegramdan chiqmasdan buyurtma beradi": "Customers order without leaving Telegram",
      "Katalog, to'lov va CRM ga ulanish — bir oynada. Mini-app bilan to'liq interfeys.": "Catalogue, payment and CRM sync — in one window. A full interface with the mini app.",
      "onlayn": "online",
      "Assalomu alaykum! Nima qilishim mumkin?": "Hello! How can I help?",
      "Buyurtma berish": "Place an order",
      "Katalog": "Catalogue",
      "Holat": "Status",
      "Operator": "Operator",
      "Ventilyatsiya kanali, 24 m": "Ventilation duct, 24 m",
      "Qabul qilindi. Buyurtma #4821 · bugun 18:00 gacha yetkaziladi.": "Got it. Order #4821 · delivered today by 18:00.",
      "To'lov qilish": "Pay",
      "Manzilni o'zgartirish": "Change address",
      "To'lov qildim": "I've paid",
      "To'lov tasdiqlandi — 7 400 000 so'm. Chek yuborildi.": "Payment confirmed — 7,400,000 UZS. Receipt sent.",
      "CRM da bitim avtomatik yopildi.": "The deal in CRM closed automatically.",
      "Katalogni ko'rsat": "Show the catalogue",
      "Mini-app ochildi: 142 ta pozitsiya, narxlar CRM dan.": "Mini app opened: 142 items, prices from CRM.",
      "Mini-app ochish": "Open mini app",
      "Qidirish": "Search",
      "Mobil ilovalar": "Mobile apps",
      "Android va iOS uchun barqaror ilova": "A stable app for Android and iOS",
      "Push, oflayn rejim va ichki tizimlaringizga ulanish — bitta kod bazasidan.": "Push, offline mode and integration with your systems — from a single codebase.",
      "Payshanba, 21-avgust": "Thursday, 21 August",
      "Yangi bitim": "New deal",
      "VAC.UZ — taklif yuborildi": "VAC.UZ — proposal sent",
      "To'lov qabul qilindi": "Payment received",
      "#2481 · 32 000 000 so'm": "#2481 · 32,000,000 UZS",
      "3 daq": "3 min",
      "Vazifa yopildi": "Task closed",
      "Dizayn sprint · 12/12": "Design sprint · 12/12",
      "12 daq": "12 min",
      "Eslatma": "Reminder",
      "Shartnoma 3 kunda tugaydi": "Contract expires in 3 days",
      "1 soat": "1 h",
      "Hisobot tayyor": "Report ready",
      "Iyul oyi P&L": "July P&L",
      "2 soat": "2 h",
      "Haqiqiy natija bergan mahsulotlar": "Products that delivered real results",
      "Ishlab chiqarish · ERP": "Manufacturing · ERP",
      "Ventilyatsiya kanal ishlab chiqaruvchi kompaniya uchun sayt va hisob-kitob tizimi.": "A website and calculation system for a ventilation duct manufacturer.",
      "ERP + CRM + Moliya": "ERP + CRM + Finance",
      "Barcha operatsion vazifalarni yagona ilovada boshqarish uchun tizim.": "A system to run all operational work in a single app.",
      "Konsalting": "Consulting",
      "Xalqaro konsalting kompaniyasi uchun korporativ sayt va analitik platforma.": "A corporate website and analytics platform for an international consulting firm.",
      "TradFi platforma": "TradFi platform",
      "Raqamli aktivlarga institutsional kirish imkonini beruvchi platforma.": "A platform for institutional access to digital assets.",
      "BAA da global ulgurji avto ehtiyot qismlari yetkazib berish platformasi.": "A global wholesale auto parts supply platform based in the UAE.",
      "Turizm": "Tourism",
      "Tur agentligi uchun bronirovanie va marshrutlarni ko'rsatuvchi sayt.": "A booking and itinerary website for a travel agency.",
      "G'oyadan ishga tushirishgacha": "From idea to launch",
      "Tezlik, sifat va aniq biznes natijalari uchun moslashtirilgan jarayon.": "A process tuned for speed, quality and measurable business results.",
      "Chuqur Audit": "Deep audit",
      "Jarayonlarni ichidan o'rganamiz: to'siq va ortiqcha xarajatlarni topib, aniq talablarga aylantiramiz.": "We study your processes from the inside: we find bottlenecks and wasted spend, and turn them into clear requirements.",
      "Dizayn va ishlab chiqish": "Design and development",
      "UI tizimlari va masshtablanuvchi injiniring.": "UI systems and scalable engineering.",
      "Ishga tushirish va o'sish": "Launch and growth",
      "Optimizatsiya va uzoq muddatli qo'llab-quvvatlash.": "Optimisation and long-term support.",
      "Topshirilgan loyihalar": "Projects delivered",
      "Mamnun mijozlar": "Happy clients",
      "Bozordagi yillar": "Years on the market",
      "Qamrab olingan mamlakatlar": "Countries covered",
      "Loyihangizni": "Start your project",
      "bugun": "today",
      "boshlang": "",
      "Toshkent, O'zbekiston": "Tashkent, Uzbekistan",
      "Ijtimoiy tarmoqlar": "Social media",
      "Ismingiz": "Your name",
      "Ism familiya": "First and last name",
      "Telefon raqam": "Phone number",
      "Telegram username": "Telegram username",
      "Xabar yuborish": "Send message",
      "24 soat ichida javob beramiz": "We reply within 24 hours",
      "Avenir Soft — Yakka tartibdagi tadbirkor Choriyev Xojiakbar Shuxrat O'g'li": "Avenir Soft — sole proprietor Choriyev Xojiakbar Shuxrat O'g'li",
      "© 2026 Avenir.uz · Barcha huquqlar himoyalangan": "© 2026 Avenir.uz · All rights reserved",
      "Maxfiylik siyosati": "Privacy policy",
      "Foydalanish shartlari": "Terms of use",
      "Mavzuni almashtirish": "Switch theme",
      "Yorug' / qorong'i": "Light / dark",
      "Menyu": "Menu",
      "Boshqaruv paneli": "Overview",
      "Faol lidlar": "Active leads",
      "Oylik tushum": "Revenue MTD",
      "Jamoa yuklamasi": "Team utilisation",
      "Ishda": "In progress",
      "Tekshiruvda": "In review",
      "Yakunlandi": "Done",
      "12 hafta · 48 mln": "12 weeks · 48M",
      "18 hafta · 126 mln": "18 weeks · 126M",
      "2-bosqich · 32 mln": "phase 2 · 32M",
      "Topshirildi · 19 mln": "Delivered · 19M",
      "Kanallar": "Channels",
      "Ko'rsatishlar": "Impressions",
      "Kliklar": "Clicks",
      "Lidlar": "Leads",
      "Mijozlar": "Clients",
      "Hisob-fakturalar": "Invoices",
      "Xarajatlar": "Expenses",
      "P&L hisobot": "P&L report",
      "Tushum · oy": "Revenue · MTD",
      "Xarajat · oy": "Expenses · MTD",
      "Foyda · oy": "Profit · MTD",
      "Debitorka": "Receivables",
      "To'landi": "Paid",
      "Yuborildi": "Sent",
      "Muddati o'tdi": "Overdue",
      "Breynstorming": "Brainstorming",
      "Referal dastur": "Referral programme",
      "Video-keyslar": "Video cases",
      "Narx kalkulyatori": "Price calculator",
      "SEO klaster": "SEO cluster",
      "Sessiya yakuni:": "Session results:",
      "3 ta g'oya": "3 ideas",
      "tanlandi va vazifaga aylantirildi": "picked and turned into tasks",
      "CRM va sotuv": "CRM and sales",
      "Voronkadagi lidlar": "Leads in pipeline",
      "Voronka qiymati": "Pipeline value",
      "Konversiya": "Conversion",
      "Yangi murojaat": "New enquiry",
      "Kvalifikatsiya": "Qualification",
      "Muzokara": "Negotiation",
      "Bitim yopildi": "Deal won",
      "Hisobotlar": "Reports",
      "Tushum · 12 oy": "Revenue · 12 months",
      "Yo'nalishlar ulushi": "Revenue by line",
      "ERP va CRM": "ERP and CRM",
      "Botlar": "Bots",
      "Tushum va xarajat · 6 oy": "Revenue and expenses · 6 months",
      "Jamoa": "Team",
      "Xodimlar": "Employees",
      "Bandlik": "Utilisation",
      "Soat · oy": "Hours · month",
      "Loyiha rahbari": "Project manager",
      "Bosh dizayner": "Lead designer",
      "Backend dasturchi": "Backend developer",
      "Sotuv menejeri": "Sales manager",
      "Yan": "Jan",
      "Fev": "Feb",
      "Mar": "Mar",
      "Apr": "Apr",
      "May": "May",
      "Iyun": "Jun",
      "Iyul": "Jul",
      "Avg": "Aug",
      "Sen": "Sep",
      "Okt": "Oct",
      "Noy": "Nov",
      "Dek": "Dec",
      "Marja": "Margin",
      "O'rtacha chek": "Average deal",
      "Mijoz LTV": "Client LTV",
      "Tushum": "Revenue",
      "Sayt": "Website",
      "Loyihangiz ustida ishlaydigan odamlar": "The people who will work on your project",
      "Har bir loyihada bir xil jamoa: auditni o'tkazadigan, dizayn qiladigan va ishga tushiradigan odamlar.": "The same team on every project: the people who run the audit, design it and ship it.",
      "Ta'sischi va rahbar": "Founder and director",
      "Ta'sischi": "Founder",
      "Mijoz bilan birinchi suhbatdan tortib topshirishgacha loyihani olib boradi.": "Runs the project from the first client conversation to hand-off.",
      "Strategiya · ERP · Mijozlar": "Strategy · ERP · Clients",
      "Loyihalar rahbari": "Delivery manager",
      "Muddat, byudjet va jamoa yuklamasini nazorat qiladi, har hafta holatni yetkazadi.": "Keeps deadlines, budget and team load in check, and reports status every week.",
      "Jarayon · Rejalashtirish": "Process · Planning",
      "Interfeys tuzilmasi, prototip va dizayn tizimi — foydalanuvchi yo'lini qisqartiradi.": "Interface structure, prototype and design system — a shorter path for the user.",
      "UX · UI · Dizayn tizimi": "UX · UI · Design system",
      "Yetakchi dasturchi": "Lead developer",
      "Arxitektura, integratsiyalar va tizim barqarorligi uning zimmasida.": "Architecture, integrations and system stability are on them.",
      "Backend · Integratsiya": "Backend · Integrations",
      "Sotuv va qo'llab-quvvatlash": "Sales and support",
      "Qo'llab-quvvatlash": "Support",
      "Ishga tushgandan keyin ham aloqada: savol, yangilanish va rivojlantirish.": "Stays in touch after launch: questions, updates and further work.",
      "Support · Rivojlantirish": "Support · Growth",
      "Bosh sahifa": "Home",
      "Yechimlarga qaytish": "Back to solutions",
      "Taxminiy muddat": "Typical timeline",
      "Texnologiyalar": "Tech stack",
      "Nimalar kiradi": "What's included",
      "Natija": "Outcome",
      "Ekranlar": "Screens",
      "Qanday ishlaymiz": "How we work",
      "Boshqa yechimlar": "Other solutions",
      "Loyihani muhokama qilamiz": "Let's discuss your project",
      "Brif to'ldirish shart emas — qisqacha yozing, qolganini savol berib aniqlaymiz.": "No brief needed — write a couple of lines and we'll ask the rest.",
      "Loyihalardan ekranlar": "Screens from our work",
      "Chuqur audit": "Deep audit",
      "Jarayonni ichidan o'rganamiz va aniq talablar ro'yxatini yig'amiz.": "We study the process from the inside and gather a clear list of requirements.",
      "Prototip": "Prototype",
      "Ekranlar va ssenariylarni ishga tushirishdan oldin kelishib olamiz.": "We agree the screens and flows before development starts.",
      "Bosqichma-bosqich ishga tushirish": "Staged launch",
      "Har 2 haftada ishlaydigan qism topshiriladi — natijani darhol ko'rasiz.": "A working slice every two weeks — you see progress immediately.",
      "Ishga tushgandan keyin ham monitoring, yangilanish va rivojlantirish.": "After launch: monitoring, updates and continued development.",
      "8–16 hafta": "8–16 weeks",
      "Bitim, hisob-faktura, ombor, jamoa va moliya — hammasi bitta tizimda. Har bir harakat avtomatik qayd etiladi, rahbar esa real vaqtda ko'radi: qancha pul kirdi, qayerda to'siq bor, kim nima bilan band.": "Deals, invoices, inventory, people and finance in one system. Every action is logged automatically, and the owner sees it live: what came in, where the bottleneck is, who is busy with what.",
      "Jarayon auditi va texnik topshiriq": "Process audit and specification",
      "Rollar va kirish huquqlari": "Roles and access rights",
      "Sotuv voronkasi va bitimlar": "Sales pipeline and deals",
      "Hisob-faktura, to'lovlar va P&L": "Invoices, payments and P&L",
      "Ombor, xarid va yetkazib berish": "Inventory, purchasing and delivery",
      "Hisobotlar va boshqaruv paneli": "Reports and the management dashboard",
      "Bitta manba": "One source",
      "Barcha bo'lim bir xil raqamga qaraydi — Excel nusxalari kerak emas.": "Every department looks at the same numbers — no more Excel copies.",
      "Real vaqt": "Real time",
      "Rahbar oylik hisobotni kutmaydi — holatni ekranda ko'radi.": "The owner doesn't wait for a monthly report — the state is on screen.",
      "Nazorat": "Traceability",
      "Har bir o'zgarishni kim va qachon qilgani saqlanib qoladi.": "Every change keeps a record of who made it and when.",
      "Ishlab chiqarish · hisob-kitob moduli": "Manufacturing · calculation module",
      "3–8 hafta": "3–8 weeks",
      "Oddiy gap bilan so'raysiz — bot hisobotni yig'adi, vazifa ochadi, mijozga javob yozadi. U sizning ma'lumotlaringiz ustida ishlaydi: CRM, ombor, moliya va ichki hujjatlarga ulanadi.": "Ask in plain words — the bot assembles the report, opens the task, drafts the reply. It runs on your own data: CRM, inventory, finance and internal documents.",
      "Ma'lumot manbalarini ulash": "Connecting your data sources",
      "Bilimlar bazasi va semantik qidiruv": "Knowledge base and semantic search",
      "Savol-javob va hisobot yig'ish": "Q&A and report generation",
      "CRM va vazifalar bilan integratsiya": "CRM and task integrations",
      "Xavfsizlik va kirish chegaralari": "Security and access boundaries",
      "Javob sifatini o'lchash va sozlash": "Answer-quality measurement and tuning",
      "Soniyalarda": "In seconds",
      "Hisobot kutish vaqti soatlardan soniyalarga tushadi.": "Waiting for a report drops from hours to seconds.",
      "O'rganish shart emas": "No training",
      "Xodim so'rovni oddiy gap bilan yozadi — menyu qidirmaydi.": "People just write what they need instead of hunting through menus.",
      "Chegaralangan": "Scoped",
      "Bot faqat o'sha xodimga ruxsat berilgan ma'lumotni ko'radi.": "The bot only sees the data that person is allowed to see.",
      "AI brifing va hisobotlar": "AI briefing and reports",
      "2–6 hafta": "2–6 weeks",
      "Korporativ sayt, landing yoki e-commerce — birinchi ekrandan mijozni ushlab qoladigan qilib quramiz. Tez yuklanadi, qidiruvda topiladi, telefonda qulay va CRM ga ulanadi.": "A corporate site, a landing page or e-commerce — built to hold the visitor from the first screen. Fast to load, easy to find in search, comfortable on mobile and wired into your CRM.",
      "Struktura va interaktiv prototip": "Structure and an interactive prototype",
      "Brendga mos UI dizayn": "UI design tailored to your brand",
      "Frontend va animatsiyalar": "Frontend and motion",
      "Kontent boshqaruvi (CMS)": "Content management (CMS)",
      "Texnik SEO va yuklanish tezligi": "Technical SEO and load speed",
      "Analitika va CRM ga ulanish": "Analytics and CRM hand-off",
      "90+ ball": "90+ score",
      "Lighthouse tezlik, SEO va qulaylik ko'rsatkichlari.": "Lighthouse scores for speed, SEO and accessibility.",
      "Uch til": "Three languages",
      "O'zbek, rus va ingliz tillari bitta tizimda boshqariladi.": "Uzbek, Russian and English managed from one place.",
      "Avval mobil": "Mobile first",
      "Trafikning katta qismi telefondan keladi — sayt shunga qurilgan.": "Most traffic arrives on a phone — the site is built for that.",
      "Konsalting · korporativ sayt": "Consulting · corporate website",
      "E-commerce · ulgurji katalog": "E-commerce · wholesale catalogue",
      "Turizm · bronirovanie": "Tourism · booking",
      "Katalog, buyurtma, to'lov va operator bilan aloqa — bitta oynada. Mini-app to'liq interfeys beradi, bot esa bildirishnoma va CRM bilan bog'lanishni o'z zimmasiga oladi.": "Catalogue, ordering, payment and a human operator — in one window. The mini app gives a full interface while the bot handles notifications and the CRM hand-off.",
      "Bot ssenariysi va menyu tuzilmasi": "Bot script and menu structure",
      "Mini-app interfeysi": "Mini app interface",
      "Katalog, savat va buyurtma": "Catalogue, cart and checkout",
      "Onlayn to'lov va cheklar": "Online payment and receipts",
      "CRM va ombor bilan integratsiya": "CRM and inventory integration",
      "Operatorga uzatish va bildirishnomalar": "Operator hand-off and notifications",
      "O'rnatish shart emas": "Nothing to install",
      "Mijoz ilova yuklab olmaydi — Telegramda darhol ochadi.": "Customers don't download an app — it opens right inside Telegram.",
      "Avtomatik": "Automatic",
      "Buyurtma to'g'ridan-to'g'ri CRM ga tushadi, omborga zayavka ketadi.": "The order lands in CRM and a request goes to the warehouse.",
      "To'lov joyida": "Pay in place",
      "Payme va Click bevosita suhbat ichida ishlaydi.": "Payme and Click work right inside the chat.",
      "Buyurtma boti va CRM ulanishi": "Order bot and CRM link",
      "Katalog va narxlar": "Catalogue and prices",
      "6–14 hafta": "6–14 weeks",
      "Bitta kod bazasidan ikkala platforma. Push bildirishnoma, oflayn rejim va ichki tizimlaringizga ulanish — xodim internetsiz ham ishlay oladi, aloqa tiklanganda hammasi sinxronlanadi.": "Both platforms from a single codebase. Push notifications, offline mode and links into your systems — people keep working without a connection and everything syncs when it returns.",
      "Ssenariylar va prototip": "User flows and a prototype",
      "iOS va Android uchun UI": "UI for iOS and Android",
      "Push va chuqur havolalar": "Push and deep links",
      "Oflayn rejim va sinxronizatsiya": "Offline mode and sync",
      "ERP va CRM bilan integratsiya": "ERP and CRM integration",
      "Do'konlarga chiqarish va yangilanishlar": "Store release and updates",
      "Ikki platforma": "Two platforms",
      "Bitta jamoa va bitta kod bazasi — ikki barobar xarajat emas.": "One team and one codebase — not a doubled budget.",
      "Oflayn": "Offline",
      "Aloqa yo'qolsa ham ilova ishlayveradi, keyin o'zi sinxronlanadi.": "The app keeps working without a signal, then syncs on its own.",
      "Push": "Push",
      "Muhim voqea telefonga darhol tushadi — pochta kutilmaydi.": "What matters reaches the phone at once — no waiting on email.",
      "Mobil versiya · vazifalar va bildirishnomalar": "Mobile app · tasks and notifications"
    }
  };

  var lang = 'uz';
  try { var sv = localStorage.getItem('avenir-language'); if (LANGS.indexOf(sv) > -1) lang = sv; } catch (e) {}

  function norm(v) { return String(v).trim().replace(/\s+/g, ' '); }
  function tr(v) {
    if (lang === 'uz') return v;
    var d = I18N[lang]; if (!d) return v;
    var k = norm(v);
    return Object.prototype.hasOwnProperty.call(d, k) ? d[k] : v;
  }
  function collectNodes(root, skipSplit) {
    var out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) {
      if (!n.nodeValue || !/\S/.test(n.nodeValue)) continue;
      var p = n.parentNode;
      if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') continue;
      if (skipSplit && p.closest && p.closest('[data-split]')) continue;
      out.push({ n: n, uz: n.nodeValue });
    }
    return out;
  }
  function paintNodes(list) {
    for (var i = 0; i < list.length; i++) {
      var it = list[i], raw = it.uz;
      if (lang === 'uz') { it.n.nodeValue = raw; continue; }
      var key = norm(raw), out = tr(key);
      if (out === key) { it.n.nodeValue = raw; continue; }
      it.n.nodeValue = raw.match(/^\s*/)[0] + out + raw.match(/\s*$/)[0];
    }
  }
  var roots = ['#top', '#drawer', 'main', 'footer'].map(function (q) { return document.querySelector(q); }).filter(Boolean);
  var baseNodes = [];
  roots.forEach(function (r) { baseNodes = baseNodes.concat(collectNodes(r, true)); });
  var splitEls = Array.prototype.slice.call(document.querySelectorAll('[data-split]'))
    .map(function (h) { return { el: h, html: h.innerHTML }; });
  var i18nAttrs = [];
  [['#thm', 'aria-label'], ['#thm', 'title'], ['#burger', 'aria-label']].forEach(function (pair) {
    document.querySelectorAll(pair[0]).forEach(function (el) {
      var v = el.getAttribute(pair[1]);
      if (v) i18nAttrs.push({ el: el, a: pair[1], uz: v });
    });
  });

  var TITLE_UZ = document.title;

  function applyLang(l) {
    if (LANGS.indexOf(l) < 0) l = 'uz';
    lang = l;
    document.documentElement.setAttribute('lang', l);
    /* sahifa sarlavhasi ham tilga ergashsin */
    var tp = TITLE_UZ.split(' — ');
    document.title = tr(tp[0]) + (tp[1] ? ' — ' + tp[1] : '');
    paintNodes(baseNodes);
    splitEls.forEach(function (s) {
      s.el.innerHTML = s.html;
      paintNodes(collectNodes(s.el, false));
      splitOne(s.el);
    });
    i18nAttrs.forEach(function (at) {
      var raw = at.uz, val = raw;
      if (lang !== 'uz') { var key = norm(raw), out = tr(key); if (out !== key) val = out; }
      at.el.setAttribute(at.a, val);
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.textContent.trim().toLowerCase() === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
  }
  applyLang(lang);

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.textContent.trim().toLowerCase();
      if (l === lang) return;
      applyLang(l);
      try { localStorage.setItem('avenir-language', l); } catch (e) {}
    });
  });

  /* ---------- mavzu ---------- */
  var thm = document.getElementById('thm');
  if (thm) {
    thm.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('avenir-theme', next); } catch (e) {}
    });
  }

  /* ---------- ochilish animatsiyalari ---------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      (function (t) { setTimeout(function () { t.classList.add('unmask'); }, 1400); })(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rise, .gc, h1[data-split], h2[data-split]').forEach(function (el) { io.observe(el); });

  /* ---------- menyu ---------- */
  var burger = document.getElementById('burger'), drawer = document.getElementById('drawer');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('is-open'); burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- shisha tugmalar ---------- */
  document.querySelectorAll('.btn, .thm').forEach(function (b) {
    b.addEventListener('mousemove', function (e) {
      var r = b.getBoundingClientRect();
      b.style.setProperty('--gx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
      b.style.setProperty('--gy', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
    });
  });

  /* ---------- panel scroll ---------- */
  var top = document.getElementById('top'), lastY = window.scrollY, ticking = false;
  function onFrame() {
    var y = window.scrollY, dy = y - lastY;
    top.classList.toggle('is-stuck', y > 24);
    top.classList.toggle('is-away', dy > 4 && y > 500);
    lastY = y; ticking = false;
  }
  window.addEventListener('scroll', function () { if (ticking) return; ticking = true; requestAnimationFrame(onFrame); }, { passive: true });

  /* ---------- kursor ---------- */
  if (fine && !reduce) {
    var cur = document.getElementById('cur'), cx = -60, cy = -60, tx = -60, ty = -60;
    window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
    document.addEventListener('mouseover', function (e) {
      cur.classList.toggle('is-big', !!(e.target.closest && e.target.closest('a, button, .gc')));
    });
    document.addEventListener('mouseleave', function () { cur.classList.add('is-hidden'); });
    document.addEventListener('mouseenter', function () { cur.classList.remove('is-hidden'); });
    (function loop() {
      cx += (tx - cx) * 0.24; cy += (ty - cy) * 0.24;
      cur.style.setProperty('--cx', cx.toFixed(1) + 'px');
      cur.style.setProperty('--cy', cy.toFixed(1) + 'px');
      requestAnimationFrame(loop);
    })();
  }
})();
