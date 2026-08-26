'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/components/language-provider'

const content = {
  uz: {
    title: 'Maxfiylik siyosati',
    updated: 'Oxirgi yangilanish: 2026-yil 25-avgust',
    sections: [
      {
        heading: '1. Umumiy ma’lumot',
        body: 'Ushbu siyosat Avenir IT agentligi (yakka tartibdagi tadbirkor Choriyev Xojiakbar Shuxrat o‘g‘li, keyingi o‘rinlarda «Avenir», «biz») avenir.uz sayti orqali qanday ma’lumot to‘plashini, uni qayerga uzatishini va qancha saqlashini tushuntiradi.',
      },
      {
        heading: '2. Qanday ma’lumot to‘planadi',
        body: 'Aloqa formasi orqali siz o‘zingiz kiritgan to‘rt maydon to‘planadi: ism, telefon raqami, Telegram username va kompaniyangizdagi xodimlar soni. Elektron pochta va erkin matn maydoni formada yo‘q. Bundan tashqari analitika xizmatlari texnik ma’lumotlarni yig‘adi: IP-manzil, brauzer va qurilma turi, qaysi sahifalarga kirganingiz va qachon. Bank rekvizitlari, parollar yoki hujjat raqamlarini biz hech qachon so‘ramaymiz.',
      },
      {
        heading: '3. Ma’lumot qayerga boradi',
        body: 'Yuborilgan ariza ikki joyga tushadi: Avenir xodimlarining ichki Telegram chatiga (Telegram Bot API orqali) va Avenirning o‘z CRM tizimiga (api-avenir.uz). Ikkalasi ham faqat sizga qayta aloqa qilish va taklifni tayyorlash uchun ishlatiladi. Arizangizni boshqa kompaniyalarga sotmaymiz va ijaraga bermaymiz.',
      },
      {
        heading: '4. Analitika va reklama xizmatlari',
        body: 'Saytda Google Analytics (tashriflar statistikasi) va Meta Pixel (Facebook/Instagram reklamasi samaradorligini o‘lchash) ishlaydi. Meta Pixel sayt bo‘ylab harakatingiz haqidagi ma’lumotni Meta Platforms kompaniyasiga uzatadi va bu ma’lumot reklama auditoriyasini shakllantirishda ishlatilishi mumkin. Ikkala xizmat ham o‘z maxfiylik siyosatiga ega. Ularni brauzer sozlamalari, reklama bloklovchi kengaytmalar yoki Meta hisobingizdagi reklama sozlamalari orqali cheklashingiz mumkin.',
      },
      {
        heading: '5. Cookie fayllari',
        body: 'Sayt ishlashi uchun zarur texnik cookie’lardan tashqari Google Analytics va Meta Pixel o‘z cookie’larini o‘rnatadi. Ularni brauzer sozlamalarida o‘chirib qo‘yish mumkin — sayt bunda ham to‘liq ishlaydi.',
      },
      {
        heading: '6. Hosting va saqlash',
        body: 'Sayt Avenir boshqaradigan serverda, Docker konteynerida ishlaydi. Ma’lumot HTTPS orqali shifrlangan holda uzatiladi. Aloqa tarixi va loyiha ma’lumotlari hamkorlik tugaganidan keyin 3 yil saqlanadi, so‘ngra o‘chiriladi.',
      },
      {
        heading: '7. Sizning huquqlaringiz',
        body: 'O‘zingiz haqingizdagi ma’lumotni ko‘rish, tuzatish yoki o‘chirishni so‘rashga haqlisiz. So‘rovni info@avenir.uz manziliga yuboring — 10 ish kuni ichida javob beramiz.',
      },
      {
        heading: '8. Bog‘lanish',
        body: 'Maxfiylik bo‘yicha savollar: info@avenir.uz yoki +998 93 529 88 07. Manzil: Chust ko‘chasi 1, Ulug‘bek, 100214 Toshkent.',
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности',
    updated: 'Последнее обновление: 25 августа 2026 года',
    sections: [
      {
        heading: '1. Общие сведения',
        body: 'Эта политика объясняет, какие данные IT-агентство Avenir (ИП Чориев Хожиакбар Шухрат угли, далее «Avenir», «мы») собирает через сайт avenir.uz, куда их передаёт и сколько хранит.',
      },
      {
        heading: '2. Какие данные собираются',
        body: 'Через форму обратной связи собираются четыре поля, которые вы вводите сами: имя, номер телефона, Telegram username и количество сотрудников в компании. Поля с почтой и свободным текстом в форме нет. Дополнительно аналитические сервисы собирают технические данные: IP-адрес, тип браузера и устройства, какие страницы вы открывали и когда. Банковские реквизиты, пароли и номера документов мы не запрашиваем.',
      },
      {
        heading: '3. Куда попадают данные',
        body: 'Отправленная заявка уходит в два места: во внутренний Telegram-чат сотрудников Avenir (через Telegram Bot API) и в собственную CRM-систему Avenir (api-avenir.uz). И то и другое используется только для обратной связи и подготовки предложения. Мы не продаём и не сдаём вашу заявку другим компаниям.',
      },
      {
        heading: '4. Аналитика и рекламные сервисы',
        body: 'На сайте работают Google Analytics (статистика посещений) и Meta Pixel (измерение эффективности рекламы в Facebook и Instagram). Meta Pixel передаёт данные о ваших действиях на сайте компании Meta Platforms, и эти данные могут использоваться для формирования рекламных аудиторий. Оба сервиса имеют собственные политики конфиденциальности. Ограничить их можно настройками браузера, блокировщиком рекламы или настройками рекламы в вашем аккаунте Meta.',
      },
      {
        heading: '5. Файлы cookie',
        body: 'Помимо технических cookie, нужных для работы сайта, свои cookie ставят Google Analytics и Meta Pixel. Их можно отключить в настройках браузера — сайт продолжит работать полностью.',
      },
      {
        heading: '6. Хостинг и хранение',
        body: 'Сайт работает на сервере под управлением Avenir, в Docker-контейнере. Данные передаются по зашифрованному соединению HTTPS. История переписки и проектные данные хранятся 3 года после завершения сотрудничества, затем удаляются.',
      },
      {
        heading: '7. Ваши права',
        body: 'Вы вправе запросить доступ к своим данным, их исправление или удаление. Направьте запрос на info@avenir.uz — ответим в течение 10 рабочих дней.',
      },
      {
        heading: '8. Контакты',
        body: 'Вопросы по конфиденциальности: info@avenir.uz или +998 93 529 88 07. Адрес: ул. Чуст 1, Улугбек, 100214 Ташкент.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: 25 August 2026',
    sections: [
      {
        heading: '1. Overview',
        body: 'This policy explains what data Avenir IT agency (sole proprietor Choriyev Xojiakbar Shuxrat O’g’li, "Avenir", "we") collects through avenir.uz, where it is sent, and how long it is kept.',
      },
      {
        heading: '2. What we collect',
        body: 'The contact form collects four fields you enter yourself: name, phone number, Telegram username, and the number of employees at your company. There is no email or free-text field in the form. Analytics services additionally collect technical data: IP address, browser and device type, which pages you opened and when. We never ask for bank details, passwords, or identity document numbers.',
      },
      {
        heading: '3. Where the data goes',
        body: 'A submitted request is delivered to two places: the internal Telegram chat of Avenir staff (via the Telegram Bot API) and Avenir’s own CRM system (api-avenir.uz). Both are used only to get back to you and prepare a proposal. We do not sell or rent your request to other companies.',
      },
      {
        heading: '4. Analytics and advertising services',
        body: 'The site runs Google Analytics (visit statistics) and the Meta Pixel (measuring the performance of Facebook and Instagram advertising). The Meta Pixel sends data about your activity on the site to Meta Platforms, and that data may be used to build advertising audiences. Both services have their own privacy policies. You can limit them through browser settings, an ad blocker, or the advertising settings of your Meta account.',
      },
      {
        heading: '5. Cookies',
        body: 'Besides the technical cookies needed for the site to work, Google Analytics and the Meta Pixel set their own cookies. You can disable them in your browser settings — the site keeps working in full.',
      },
      {
        heading: '6. Hosting and storage',
        body: 'The site runs on a server managed by Avenir, inside a Docker container. Data is transmitted over encrypted HTTPS. Correspondence history and project data are kept for 3 years after a collaboration ends, then deleted.',
      },
      {
        heading: '7. Your rights',
        body: 'You may request access to your data, its correction, or its deletion. Send a request to info@avenir.uz — we respond within 10 business days.',
      },
      {
        heading: '8. Contact',
        body: 'Privacy questions: info@avenir.uz or +998 93 529 88 07. Address: Chust street 1, Ulug’bek, 100214 Tashkent.',
      },
    ],
  },
} as const

export default function PrivacyContent() {
  const { language } = useLanguage()
  const c = content[language]

  return (
    <main id="main" style={{ backgroundColor: '#F5F4F0' }}>
      <Navbar />
      <section className="min-h-screen px-6 pt-40 pb-24">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.18em] mb-4"
            style={{ color: 'rgba(4, 33, 71, 0.72)' }}
          >
            {c.updated}
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl font-bold mb-12"
            style={{ color: '#042147' }}
          >
            {c.title}
          </h1>
          <div className="space-y-8">
            {c.sections.map(section => (
              <div key={section.heading}>
                <h2
                  className="font-serif text-lg font-bold mb-2"
                  style={{ color: '#042147' }}
                >
                  {section.heading}
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(4, 33, 71, 0.78)' }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
