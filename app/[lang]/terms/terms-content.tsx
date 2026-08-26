'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/components/language-provider'

const content = {
  uz: {
    title: 'Foydalanish shartlari',
    updated: 'Oxirgi yangilanish: 2025-yil 1-yanvar',
    sections: [
      {
        heading: '1. Shartlarni qabul qilish',
        body: 'avenir.uz saytiga tashrif buyurish yoki undan foydalanish orqali siz ushbu Foydalanish shartlarini to\'liq qabul qilasiz. Agar siz ushbu shartlarga rozi bo\'lmasangiz, saytdan foydalanishni to\'xtating.',
      },
      {
        heading: '2. Xizmatlar tavsifi',
        body: 'Avenir IT agentligi veb-saytlar, mobil ilovalar, UI/UX dizayn va raqamli mahsulotlarni ishlab chiqish bo\'yicha professional xizmatlar ko\'rsatadi. Sayt ma\'lumot berish va potentsial mijozlar bilan bog\'lanish maqsadida mo\'ljallangan.',
      },
      {
        heading: '3. Intellektual mulk',
        body: 'Saytdagi barcha matnlar, tasvirlar, logotiplar, dizayn elementlari va dasturiy kod Avenir\'ga tegishli bo\'lib, muallif huquqi qonunlari bilan himoyalangan. Bizning yozma ruxsatimizdan tashqari ushbu materiallarni ko\'paytirish, tarqatish yoki tijorat maqsadlarida ishlatish taqiqlanadi.',
      },
      {
        heading: '4. Ruxsat etilgan foydalanish',
        body: 'Siz saytdan faqat qonuniy maqsadlarda foydalanishingiz mumkin. Quyidagilar taqiqlanadi: saytning ishlashiga xalaqit beruvchi harakatlar; avtomatlashtirilgan skraperlash yoki bot orqali ma\'lumot to\'plash; saytni noto\'g\'ri maqsadlarda ishlatish; boshqa foydalanuvchilarga yoki Avenir\'ga zarar yetkazish.',
      },
      {
        heading: '5. Aloqa formasi orqali yuborilgan ma\'lumotlar',
        body: 'Aloqa formasi orqali yuborilgan ma\'lumotlar biznes muloqot maqsadida ishlatiladi. Siz yuborayotgan xabarda haqiqiy va to\'g\'ri ma\'lumotlar ko\'rsatingiz. Noto\'g\'ri, aldamchi yoki zararli tarkib yuborish taqiqlanadi.',
      },
      {
        heading: '6. Mas\'uliyatni cheklash',
        body: 'Avenir saytdagi ma\'lumotlarning to\'liqligi yoki dolzarbligi uchun kafolat bermaydi. Saytdan foydalanish natijasida yuzaga kelishi mumkin bo\'lgan bevosita yoki bilvosita zararlar uchun Avenir javobgar emas. Barcha xizmatlar alohida shartnoma asosida ko\'rsatiladi.',
      },
      {
        heading: '7. Uchinchi tomon havolalari',
        body: 'Sayt uchinchi tomon veb-saytlariga havolalar o\'z ichiga olishi mumkin. Ushbu saytlarning mazmuni va maxfiylik siyosati uchun Avenir javobgar emas. Tashqi havolalarga o\'tishdan oldin ularning shartlarini ko\'rib chiqing.',
      },
      {
        heading: '8. Shartlarni o\'zgartirish',
        body: 'Avenir ushbu Foydalanish shartlarini istalgan vaqtda o\'zgartirish huquqini o\'zida saqlab qoladi. Yangilangan shartlar saytda e\'lon qilingan paytdan kuchga kiradi. Saytdan foydalanishni davom ettirsangiz, yangi shartlarga rozilik bildirgan hisoblanasiz.',
      },
      {
        heading: '9. Qo\'llaniladigan qonunchilik',
        body: 'Ushbu shartlar O\'zbekiston Respublikasi qonunchiligiga muvofiq tartibga solinadi. Har qanday nizolar O\'zbekiston Respublikasining vakolatli sudlarida hal qilinadi.',
      },
      {
        heading: '10. Bog\'lanish',
        body: 'Savollaringiz bo\'lsa: info@avenir.uz yoki +998 93 529 88 07 raqamiga murojaat qiling.',
      },
    ],
  },
  ru: {
    title: 'Условия использования',
    updated: 'Последнее обновление: 1 января 2025 года',
    sections: [
      {
        heading: '1. Принятие условий',
        body: 'Посещая сайт avenir.uz или используя его, вы полностью принимаете настоящие Условия использования. Если вы не согласны с данными условиями, прекратите использование сайта.',
      },
      {
        heading: '2. Описание услуг',
        body: 'IT-агентство Avenir оказывает профессиональные услуги по разработке веб-сайтов, мобильных приложений, UI/UX-дизайна и цифровых продуктов. Сайт предназначен для информирования и взаимодействия с потенциальными клиентами.',
      },
      {
        heading: '3. Интеллектуальная собственность',
        body: 'Все тексты, изображения, логотипы, элементы дизайна и исходный код сайта являются собственностью Avenir и защищены законодательством об авторских правах. Воспроизведение, распространение или коммерческое использование этих материалов без нашего письменного согласия запрещено.',
      },
      {
        heading: '4. Допустимое использование',
        body: 'Вы можете использовать сайт только в законных целях. Запрещается: совершать действия, нарушающие работу сайта; собирать данные с помощью автоматических скраперов или ботов; использовать сайт в мошеннических целях; причинять вред другим пользователям или Avenir.',
      },
      {
        heading: '5. Данные, переданные через форму обратной связи',
        body: 'Данные, отправленные через форму обратной связи, используются исключительно в деловых целях. Убедитесь, что предоставляемые вами сведения достоверны и корректны. Отправка ложной, вводящей в заблуждение или вредоносной информации запрещена.',
      },
      {
        heading: '6. Ограничение ответственности',
        body: 'Avenir не гарантирует полноту и актуальность информации на сайте. Avenir не несёт ответственности за прямые или косвенные убытки, возникшие в результате использования сайта. Все услуги оказываются на основании отдельного договора.',
      },
      {
        heading: '7. Ссылки на сторонние сайты',
        body: 'Сайт может содержать ссылки на сторонние ресурсы. Avenir не несёт ответственности за содержание и политику конфиденциальности этих сайтов. Рекомендуем ознакомиться с их условиями перед переходом.',
      },
      {
        heading: '8. Изменение условий',
        body: 'Avenir оставляет за собой право в любое время изменять настоящие Условия использования. Обновлённые условия вступают в силу с момента их публикации на сайте. Продолжая использовать сайт, вы выражаете согласие с новыми условиями.',
      },
      {
        heading: '9. Применимое право',
        body: 'Настоящие Условия регулируются законодательством Республики Узбекистан. Все споры разрешаются в уполномоченных судах Республики Узбекистан.',
      },
      {
        heading: '10. Контакты',
        body: 'По вопросам, связанным с Условиями использования: info@avenir.uz или +998 93 529 88 07.',
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    updated: 'Last updated: January 1, 2025',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By visiting or using avenir.uz, you fully accept these Terms of Use. If you do not agree to these terms, please discontinue use of the website.',
      },
      {
        heading: '2. Description of Services',
        body: 'Avenir IT Agency provides professional services in website development, mobile applications, UI/UX design, and digital products. The website is intended for informational purposes and to facilitate communication with prospective clients.',
      },
      {
        heading: '3. Intellectual Property',
        body: 'All texts, images, logos, design elements, and source code on this site are the property of Avenir and protected by copyright law. Reproduction, distribution, or commercial use of these materials without our written consent is prohibited.',
      },
      {
        heading: '4. Permitted Use',
        body: 'You may only use the site for lawful purposes. The following are prohibited: actions that disrupt site functionality; automated scraping or bot-based data collection; using the site for fraudulent purposes; causing harm to other users or to Avenir.',
      },
      {
        heading: '5. Contact Form Submissions',
        body: 'Data submitted via the contact form is used solely for business communication. Please ensure the information you provide is accurate and truthful. Submitting false, misleading, or harmful content is prohibited.',
      },
      {
        heading: '6. Limitation of Liability',
        body: 'Avenir does not guarantee the completeness or currency of information on the site. Avenir is not liable for any direct or indirect damages arising from use of the site. All services are provided under a separate agreement.',
      },
      {
        heading: '7. Third-Party Links',
        body: 'The site may contain links to third-party websites. Avenir is not responsible for the content or privacy practices of those sites. We recommend reviewing their terms before following any external links.',
      },
      {
        heading: '8. Changes to Terms',
        body: 'Avenir reserves the right to modify these Terms of Use at any time. Updated terms take effect upon publication on the site. Continued use of the site constitutes your acceptance of the revised terms.',
      },
      {
        heading: '9. Governing Law',
        body: 'These Terms are governed by the laws of the Republic of Uzbekistan. Any disputes shall be resolved in the competent courts of the Republic of Uzbekistan.',
      },
      {
        heading: '10. Contact',
        body: 'For questions related to these Terms: info@avenir.uz or +998 93 529 88 07.',
      },
    ],
  },
}

export default function TermsContent() {
  const { language } = useLanguage()
  const c = content[language]

  return (
    <main id="main" style={{ backgroundColor: '#F5F4F0' }}>
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
