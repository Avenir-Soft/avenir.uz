import type { Language } from '@/lib/i18n'

export type ServiceSlug = 'web-sites' | 'mobile-apps' | 'ai-bots' | 'telegram-bots' | 'mini-apps'
export type ServiceIcon = 'globe' | 'smartphone' | 'bot' | 'send' | 'app'

export interface ServiceLocalizedContent {
  title: string
  teaser: string
  intro: string
  outcomesLabel: string
  outcomes: string[]
  includedLabel: string
  included: string[]
  stackLabel: string
  stack: string[]
  timelineLabel: string
  timeline: string
}

export interface ServiceEntry {
  slug: ServiceSlug
  icon: ServiceIcon
  content: Record<Language, ServiceLocalizedContent>
}

export const serviceCatalog: ServiceEntry[] = [
  {
    slug: 'web-sites',
    icon: 'globe',
    content: {
      uz: {
        title: 'Veb saytlar',
        teaser: 'Korporativ sayt, landing va e-commerce yechimlar.',
        intro:
          'Biz mijozga ishonch uyg`otadigan, tez ochiladigan va konversiyaga yo`naltirilgan zamonaviy veb saytlar yaratamiz.',
        outcomesLabel: 'Natija',
        outcomes: [
          'Brendingizga mos premium dizayn',
          'SEO uchun texnik va kontent tayyorgarlik',
          'Mobil qurilmalarda yuqori tezlik',
        ],
        includedLabel: 'Nimalar kiradi',
        included: [
          'UX struktura va prototip',
          'UI dizayn va frontend ishlab chiqish',
          'CMS yoki admin panel integratsiyasi',
        ],
        stackLabel: 'Texnologiyalar',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Headless CMS'],
        timelineLabel: 'Taxminiy muddat',
        timeline: '2-6 hafta',
      },
      ru: {
        title: 'Веб-сайты',
        teaser: 'Корпоративные сайты, лендинги и e-commerce решения.',
        intro:
          'Создаем современные сайты, которые формируют доверие к бренду, быстро работают и приводят целевых клиентов.',
        outcomesLabel: 'Результат',
        outcomes: [
          'Премиальный дизайн под ваш бренд',
          'Техническая и контентная SEO-готовность',
          'Высокая скорость на мобильных устройствах',
        ],
        includedLabel: 'Что входит',
        included: [
          'UX-структура и прототип',
          'UI-дизайн и frontend-разработка',
          'Интеграция CMS или admin-панели',
        ],
        stackLabel: 'Технологии',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Headless CMS'],
        timelineLabel: 'Срок реализации',
        timeline: '2-6 недель',
      },
      en: {
        title: 'Websites',
        teaser: 'Corporate websites, landing pages, and e-commerce solutions.',
        intro:
          'We build modern websites that strengthen brand trust, load fast, and convert visitors into qualified leads.',
        outcomesLabel: 'Outcomes',
        outcomes: [
          'Premium design aligned with your brand',
          'Technical and content SEO readiness',
          'High performance on mobile devices',
        ],
        includedLabel: 'What is included',
        included: [
          'UX structure and wireframes',
          'UI design and frontend implementation',
          'CMS or admin panel integration',
        ],
        stackLabel: 'Tech stack',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Headless CMS'],
        timelineLabel: 'Estimated timeline',
        timeline: '2-6 weeks',
      },
    },
  },
  {
    slug: 'mobile-apps',
    icon: 'smartphone',
    content: {
      uz: {
        title: 'Mobil ilovalar',
        teaser: 'Android va iOS uchun intuitiv mobil mahsulotlar.',
        intro:
          'Biz foydalanuvchiga qulay, tezkor va ishonchli mobil ilovalar yaratib, mahsulotingizni doimiy foydalanishga olib chiqamiz.',
        outcomesLabel: 'Natija',
        outcomes: [
          'Yuqori retention va qulay UX',
          'Push xabarnomalar va real-time jarayonlar',
          'App Store / Play Marketga tayyor release',
        ],
        includedLabel: 'Nimalar kiradi',
        included: [
          'Product flow va UX audit',
          'Mobile UI dizayn tizimi',
          'Backend API bilan integratsiya',
        ],
        stackLabel: 'Texnologiyalar',
        stack: ['React Native', 'Expo', 'Firebase', 'REST/GraphQL'],
        timelineLabel: 'Taxminiy muddat',
        timeline: '4-10 hafta',
      },
      ru: {
        title: 'Мобильные приложения',
        teaser: 'Интуитивные мобильные продукты для Android и iOS.',
        intro:
          'Разрабатываем быстрые и стабильные мобильные приложения, которые повышают вовлеченность и упрощают клиентский путь.',
        outcomesLabel: 'Результат',
        outcomes: [
          'Удобный UX и высокий retention',
          'Push-уведомления и real-time сценарии',
          'Готовность к публикации в App Store и Play Market',
        ],
        includedLabel: 'Что входит',
        included: [
          'Проработка продуктового flow',
          'UI-система для мобильного интерфейса',
          'Интеграция с backend API',
        ],
        stackLabel: 'Технологии',
        stack: ['React Native', 'Expo', 'Firebase', 'REST/GraphQL'],
        timelineLabel: 'Срок реализации',
        timeline: '4-10 недель',
      },
      en: {
        title: 'Mobile Apps',
        teaser: 'Intuitive mobile products for Android and iOS.',
        intro:
          'We deliver fast and reliable mobile apps that improve user retention and streamline the customer journey.',
        outcomesLabel: 'Outcomes',
        outcomes: [
          'Smooth UX and stronger retention',
          'Push notifications and real-time features',
          'Ready for App Store and Play Market release',
        ],
        includedLabel: 'What is included',
        included: [
          'Product flow and UX planning',
          'Mobile UI system design',
          'Backend API integration',
        ],
        stackLabel: 'Tech stack',
        stack: ['React Native', 'Expo', 'Firebase', 'REST/GraphQL'],
        timelineLabel: 'Estimated timeline',
        timeline: '4-10 weeks',
      },
    },
  },
  {
    slug: 'ai-bots',
    icon: 'bot',
    content: {
      uz: {
        title: 'AI botlar',
        teaser: 'Savollarni tushunadigan va jarayonni avtomatlashtiradigan botlar.',
        intro:
          'AI botlar yordamida savdo, support va ichki operatsiyalarni tezlashtirib, jamoa yuklamasini kamaytiramiz.',
        outcomesLabel: 'Natija',
        outcomes: [
          '24/7 avtomatik javob berish',
          'Lead saralash va mijozga yo`naltirish',
          'Qo`llab-quvvatlash xarajatini optimizatsiya',
        ],
        includedLabel: 'Nimalar kiradi',
        included: [
          'Prompt va dialog arxitekturasi',
          'Bilim bazasi (KB) integratsiyasi',
          'Operatorga eskalatsiya logikasi',
        ],
        stackLabel: 'Texnologiyalar',
        stack: ['OpenAI API', 'RAG', 'Vector DB', 'Serverless Functions'],
        timelineLabel: 'Taxminiy muddat',
        timeline: '2-5 hafta',
      },
      ru: {
        title: 'AI-боты',
        teaser: 'Боты, которые понимают запросы и автоматизируют коммуникацию.',
        intro:
          'Внедряем AI-ботов для продаж, поддержки и внутренних процессов, чтобы снизить нагрузку команды и ускорить ответы.',
        outcomesLabel: 'Результат',
        outcomes: [
          'Автоответы 24/7',
          'Квалификация лидов и маршрутизация',
          'Снижение стоимости поддержки',
        ],
        includedLabel: 'Что входит',
        included: [
          'Prompt-дизайн и сценарии диалогов',
          'Интеграция с базой знаний (KB)',
          'Логика эскалации на оператора',
        ],
        stackLabel: 'Технологии',
        stack: ['OpenAI API', 'RAG', 'Vector DB', 'Serverless Functions'],
        timelineLabel: 'Срок реализации',
        timeline: '2-5 недель',
      },
      en: {
        title: 'AI Bots',
        teaser: 'Bots that understand requests and automate communication.',
        intro:
          'We implement AI bots for sales, support, and internal workflows to reduce team load and speed up responses.',
        outcomesLabel: 'Outcomes',
        outcomes: [
          '24/7 automated responses',
          'Lead qualification and smart routing',
          'Lower support operating costs',
        ],
        includedLabel: 'What is included',
        included: [
          'Prompt design and conversation flows',
          'Knowledge base integration (KB)',
          'Escalation logic to human agents',
        ],
        stackLabel: 'Tech stack',
        stack: ['OpenAI API', 'RAG', 'Vector DB', 'Serverless Functions'],
        timelineLabel: 'Estimated timeline',
        timeline: '2-5 weeks',
      },
    },
  },
  {
    slug: 'telegram-bots',
    icon: 'send',
    content: {
      uz: {
        title: 'Telegram botlar',
        teaser: 'Savdo, servis va ichki jarayonlar uchun Telegram yechimlari.',
        intro:
          'Telegram ichida buyurtma qabul qilish, katalog ko`rsatish, to`lovga yo`naltirish va CRM bilan ishlashni avtomatlashtiramiz.',
        outcomesLabel: 'Natija',
        outcomes: [
          'Mijoz bilan tezkor aloqa kanali',
          'Jarayonlarni bir bot ichida markazlashtirish',
          'Zayavka va buyurtmalarni yo`qotmaslik',
        ],
        includedLabel: 'Nimalar kiradi',
        included: [
          'Bot ssenariysi va UX oqimi',
          'CRM/ERP yoki Google Sheets integratsiyasi',
          'Admin uchun xabarnoma va monitoring',
        ],
        stackLabel: 'Texnologiyalar',
        stack: ['Telegram Bot API', 'Node.js', 'Webhook', 'PostgreSQL'],
        timelineLabel: 'Taxminiy muddat',
        timeline: '1-4 hafta',
      },
      ru: {
        title: 'Telegram-боты',
        teaser: 'Telegram-решения для продаж, сервиса и внутренних процессов.',
        intro:
          'Автоматизируем прием заявок, показ каталога, платежные сценарии и интеграции с CRM прямо внутри Telegram.',
        outcomesLabel: 'Результат',
        outcomes: [
          'Быстрый канал коммуникации с клиентом',
          'Централизация процессов в одном боте',
          'Контроль заявок и заказов без потерь',
        ],
        includedLabel: 'Что входит',
        included: [
          'Сценарии бота и UX-поток',
          'Интеграция с CRM/ERP или Google Sheets',
          'Оповещения и мониторинг для команды',
        ],
        stackLabel: 'Технологии',
        stack: ['Telegram Bot API', 'Node.js', 'Webhook', 'PostgreSQL'],
        timelineLabel: 'Срок реализации',
        timeline: '1-4 недели',
      },
      en: {
        title: 'Telegram Bots',
        teaser: 'Telegram-first solutions for sales, service, and operations.',
        intro:
          'We automate lead capture, catalog browsing, payment flows, and CRM integrations directly inside Telegram.',
        outcomesLabel: 'Outcomes',
        outcomes: [
          'Fast customer communication channel',
          'Centralized workflows in one bot',
          'Reliable tracking of leads and orders',
        ],
        includedLabel: 'What is included',
        included: [
          'Bot scenario and UX flow design',
          'CRM/ERP or Google Sheets integration',
          'Team alerts and monitoring setup',
        ],
        stackLabel: 'Tech stack',
        stack: ['Telegram Bot API', 'Node.js', 'Webhook', 'PostgreSQL'],
        timelineLabel: 'Estimated timeline',
        timeline: '1-4 weeks',
      },
    },
  },
  {
    slug: 'mini-apps',
    icon: 'app',
    content: {
      uz: {
        title: 'Mini-app',
        teaser: 'Telegram ichidagi interaktiv mini-ilovalar.',
        intro:
          'Mini-app orqali foydalanuvchiga oddiy botdan kengroq, vizual va interaktiv tajriba beramiz: katalog, bron, to`lov, kabinet.',
        outcomesLabel: 'Natija',
        outcomes: [
          'Telegramdan chiqmasdan to`liq user flow',
          'Konversiya uchun qulay UI',
          'Tezkor ishga tushirish va analytics',
        ],
        includedLabel: 'Nimalar kiradi',
        included: [
          'Mini-app UX/UI dizayn',
          'Auth va backend integratsiyasi',
          'To`lov yoki bronlash modullari',
        ],
        stackLabel: 'Texnologiyalar',
        stack: ['Telegram Mini Apps', 'Next.js', 'TypeScript', 'REST API'],
        timelineLabel: 'Taxminiy muddat',
        timeline: '3-7 hafta',
      },
      ru: {
        title: 'Mini-app',
        teaser: 'Интерактивные mini-app решения внутри Telegram.',
        intro:
          'Создаем mini-app с полноценным пользовательским сценарием внутри Telegram: каталог, бронирование, оплата и личный кабинет.',
        outcomesLabel: 'Результат',
        outcomes: [
          'Полный user flow без выхода из Telegram',
          'Конверсионный интерфейс',
          'Быстрый запуск и аналитика',
        ],
        includedLabel: 'Что входит',
        included: [
          'UX/UI дизайн mini-app',
          'Auth и интеграция с backend',
          'Платежные или booking модули',
        ],
        stackLabel: 'Технологии',
        stack: ['Telegram Mini Apps', 'Next.js', 'TypeScript', 'REST API'],
        timelineLabel: 'Срок реализации',
        timeline: '3-7 недель',
      },
      en: {
        title: 'Mini Apps',
        teaser: 'Interactive Telegram Mini Apps for rich user journeys.',
        intro:
          'We build Telegram Mini Apps with full product flows: catalog, booking, payments, and user account experiences.',
        outcomesLabel: 'Outcomes',
        outcomes: [
          'Complete journey without leaving Telegram',
          'Conversion-focused interface',
          'Fast launch with analytics tracking',
        ],
        includedLabel: 'What is included',
        included: [
          'Mini App UX/UI design',
          'Auth and backend integration',
          'Payment or booking modules',
        ],
        stackLabel: 'Tech stack',
        stack: ['Telegram Mini Apps', 'Next.js', 'TypeScript', 'REST API'],
        timelineLabel: 'Estimated timeline',
        timeline: '3-7 weeks',
      },
    },
  },
]

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return serviceCatalog.find(service => service.slug === slug)
}
