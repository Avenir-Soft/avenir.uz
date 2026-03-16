'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/components/language-provider'

const content = {
  uz: {
    title: 'Maxfiylik siyosati',
    updated: 'Oxirgi yangilanish: 2025-yil 1-yanvar',
    sections: [
      {
        heading: '1. Umumiy ma\'lumot',
        body: 'Ushbu Maxfiylik siyosati Avenir IT agentligi (keyingi o\'rinlarda "Avenir", "biz") tomonidan avenir.uz veb-sayti orqali to\'planadigan ma\'lumotlar haqida ma\'lumot beradi. Saytimizdan foydalanish orqali siz ushbu siyosat shartlariga rozilik bildirasiz.',
      },
      {
        heading: '2. To\'planadigan ma\'lumotlar',
        body: 'Biz quyidagi ma\'lumotlarni to\'laymiz: aloqa formasida ko\'rsatilgan ism, elektron pochta manzili, telefon raqami va xabar matni; sayt bilan o\'zaro aloqa haqidagi texnik ma\'lumotlar (IP-manzil, brauzer turi, sahifaga tashrif vaqti). Maxfiy ma\'lumotlar (bank rekvizitlari, parollar) so\'ralmasligini bilasiz.',
      },
      {
        heading: '3. Ma\'lumotlardan foydalanish',
        body: 'To\'plangan ma\'lumotlar faqat quyidagi maqsadlarda ishlatiladi: mijozlar so\'rovlariga javob berish va hamkorlik takliflarini ko\'rib chiqish; xizmat sifatini yaxshilash; qonun talablarini bajarish. Biz sizning ma\'lumotlaringizni reklama maqsadlarida uchinchi shaxslarga sotmaymiz yoki ijaraga bermaymiz.',
      },
      {
        heading: '4. Ma\'lumotlar saqlash muddati',
        body: 'Muloqot tarixi va loyiha ma\'lumotlari hamkorlik yakunlanganidan keyin 3 yil davomida saqlanadi. Undan so\'ng ma\'lumotlar xavfsiz tarzda o\'chiriladi. Har qanday vaqtda ma\'lumotlaringizni o\'chirishni so\'rashingiz mumkin.',
      },
      {
        heading: '5. Uchinchi tomon xizmatlari',
        body: 'Saytimizda Google Analytics (tashrif statistikasi) va Vercel (hosting) xizmatlari qo\'llaniladi. Ushbu xizmatlar o\'z maxfiylik siyosatlariga ega va o\'z ma\'lumotlar qayta ishlash shartlarini o\'z zimmasiga oladi.',
      },
      {
        heading: '6. Cookie fayllari',
        body: 'Saytimiz sessiya cookie\'laridan foydalanadi. Ular sayt to\'g\'ri ishlashi uchun zarur bo\'lgan texnik ma\'lumotlarni saqlaydi. Brauzer sozlamalari orqali cookie\'larni o\'chirib qo\'yishingiz mumkin, ammo bu saytning ayrim funksiyalarini cheklashi mumkin.',
      },
      {
        heading: '7. Xavfsizlik',
        body: 'Ma\'lumotlaringiz HTTPS-shifrlash orqali uzatiladi va xavfsiz serverlarda saqlanadi. Biz ma\'lumotlaringizni ruxsatsiz kirish, o\'zgartirish yoki yo\'q qilishdan himoya qilish uchun texnik va tashkiliy choralar ko\'ramiz.',
      },
      {
        heading: '8. Sizning huquqlaringiz',
        body: 'Siz o\'zingiz haqingizda to\'plangan ma\'lumotlarni ko\'rish, tuzatish yoki o\'chirish huquqiga egasiz. Bunday so\'rovlar uchun info@avenir.uz manziliga murojaat qiling. Biz so\'rovga 10 ish kuni ichida javob beramiz.',
      },
      {
        heading: '9. Bog\'lanish',
        body: 'Maxfiylik siyosatiga oid savollar bo\'yicha: info@avenir.uz yoki +998 93 529 88 07.',
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности',
    updated: 'Последнее обновление: 1 января 2025 года',
    sections: [
      {
        heading: '1. Общие сведения',
        body: 'Настоящая Политика конфиденциальности описывает, как IT-агентство Avenir («Avenir», «мы») собирает, использует и защищает данные, полученные через сайт avenir.uz. Используя сайт, вы соглашаетесь с условиями настоящей политики.',
      },
      {
        heading: '2. Собираемые данные',
        body: 'Мы собираем: имя, адрес электронной почты, номер телефона и текст сообщения, указанные в форме обратной связи; технические данные (IP-адрес, тип браузера, время посещения страниц). Мы не запрашиваем конфиденциальные данные: банковские реквизиты, пароли или государственные идентификаторы.',
      },
      {
        heading: '3. Использование данных',
        body: 'Собранные данные используются исключительно для: ответа на запросы клиентов и рассмотрения коммерческих предложений; улучшения качества услуг; соблюдения требований законодательства. Мы не продаём и не передаём ваши данные третьим лицам в рекламных целях.',
      },
      {
        heading: '4. Сроки хранения данных',
        body: 'История переписки и проектные данные хранятся в течение 3 лет после завершения сотрудничества, после чего безопасно удаляются. Вы можете в любой момент запросить удаление своих данных.',
      },
      {
        heading: '5. Сторонние сервисы',
        body: 'На сайте используются Google Analytics (аналитика посещаемости) и Vercel (hosting). Эти сервисы имеют собственные политики конфиденциальности и несут самостоятельную ответственность за обработку данных.',
      },
      {
        heading: '6. Файлы cookie',
        body: 'Сайт использует технические файлы cookie для корректной работы. Вы можете отключить cookie в настройках браузера, однако это может ограничить функциональность сайта.',
      },
      {
        heading: '7. Безопасность',
        body: 'Ваши данные передаются по зашифрованному соединению HTTPS и хранятся на защищённых серверах. Мы принимаем технические и организационные меры для защиты данных от несанкционированного доступа, изменения или уничтожения.',
      },
      {
        heading: '8. Ваши права',
        body: 'Вы имеете право запросить доступ к своим данным, их исправление или удаление. Направьте запрос на info@avenir.uz — мы ответим в течение 10 рабочих дней.',
      },
      {
        heading: '9. Контакты',
        body: 'По вопросам политики конфиденциальности: info@avenir.uz или +998 93 529 88 07.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: January 1, 2025',
    sections: [
      {
        heading: '1. Overview',
        body: 'This Privacy Policy describes how Avenir IT Agency ("Avenir", "we") collects, uses, and protects data obtained through avenir.uz. By using our website, you agree to the terms of this policy.',
      },
      {
        heading: '2. Data We Collect',
        body: 'We collect: name, email address, phone number, and message text submitted via the contact form; technical data such as IP address, browser type, and page visit times. We do not request sensitive data such as bank details, passwords, or government identifiers.',
      },
      {
        heading: '3. How We Use Data',
        body: 'Collected data is used solely to: respond to client inquiries and evaluate partnership proposals; improve service quality; comply with legal requirements. We do not sell or transfer your data to third parties for advertising purposes.',
      },
      {
        heading: '4. Data Retention',
        body: 'Communication history and project data are retained for 3 years after the end of a collaboration, after which they are securely deleted. You may request deletion of your data at any time.',
      },
      {
        heading: '5. Third-Party Services',
        body: 'We use Google Analytics (traffic analytics) and Vercel (hosting). These services have their own privacy policies and are independently responsible for data processing.',
      },
      {
        heading: '6. Cookies',
        body: 'The site uses technical cookies required for proper operation. You may disable cookies in your browser settings, though this may limit some site functionality.',
      },
      {
        heading: '7. Security',
        body: 'Your data is transmitted via HTTPS encryption and stored on secured servers. We apply technical and organisational measures to protect data against unauthorised access, alteration, or destruction.',
      },
      {
        heading: '8. Your Rights',
        body: 'You have the right to access, correct, or delete your personal data. Send a request to info@avenir.uz — we will respond within 10 business days.',
      },
      {
        heading: '9. Contact',
        body: 'Privacy-related inquiries: info@avenir.uz or +998 93 529 88 07.',
      },
    ],
  },
}

export default function PrivacyContent() {
  const { language } = useLanguage()
  const c = content[language]

  return (
    <main style={{ backgroundColor: '#F5F4F0' }}>
      <Navbar />
      <section className="min-h-screen px-6 pt-40 pb-24">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.18em] mb-4"
            style={{ color: 'rgba(4, 33, 71, 0.45)' }}
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
            {c.sections.map((section) => (
              <div key={section.heading}>
                <h2
                  className="font-serif text-lg font-bold mb-2"
                  style={{ color: '#042147' }}
                >
                  {section.heading}
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(4, 33, 71, 0.72)' }}
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
