import type { Dictionary, Language } from '@/lib/languages'

export const dictionaries: Record<Language, Dictionary> = {
  uz: {
    nav: {
      links: {
        portfolio: 'Loyihalar',
        services: 'Xizmatlar',
        contact: 'Aloqa',
      },
      languageLabel: 'Til',
      toggleMenuAria: 'Navigatsiya menyusini ochish/yopish',
      closeMenuAria: 'Navigatsiya menyusini yopish',
      logoAlt: 'Avenir logotipi',
      skipToContent: 'Asosiy kontentga o‘tish',
      homeAria: 'Bosh sahifa',
    },
    hero: {
      studioBadge: 'Avenir IT-agenstligi',
      titlePrefix: 'Biz bilan',
      titleHighlight: 'kelajakni quring',
      description:
        'Biz katta maqsadli kompaniyalar bilan birga tezkor, nafis va tijoriy jihatdan samarali veb mahsulotlar yaratamiz va rivojlantiramiz.',
      focusAreas: [
        {
          title: 'Mahsulot strategiyasi',
          description: 'Tahlildan yo`l xaritasigacha',
        },
        {
          title: 'To`liq stack ishlab chiqish',
          description: 'Veb platformalar va integratsiyalar',
        },
        {
          title: 'Ishonchli ishga tushirish',
          description: 'Xavfsizlik, sifat va qo`llab-quvvatlash',
        },
      ],
      ctaPortfolio: 'Loyihalarni ko`rish',
      ctaProject: 'Loyihani boshlash',
      frameworkLabel: 'Yetkazib berish tizimi',
      frameworkTitle: 'G`oyadan ishga tushirishgacha',
      frameworkDescription:
        'Tezlik, sifat va aniq biznes natijalari uchun moslashtirilgan samarali jarayon.',
      deliveryFlow: [
        { title: 'Kashfiyot', detail: 'Maqsadlar, foydalanuvchilar va mahsulot doirasi' },
        { title: 'Dizayn va ishlab chiqish', detail: 'UI tizimlari va masshtablanuvchi injiniring' },
        { title: 'Ishga tushirish va o`sish', detail: 'Optimizatsiya va uzoq muddatli qo`llab-quvvatlash' },
      ],
      avgLaunchLabel: 'O`rtacha ishga tushirish',
      avgLaunchValue: '6-8 hafta',
      satisfactionLabel: 'Qoniqish',
      satisfactionValue: '98% hamkorlar biz bilan qoladi',
    },
    services: {
      eyebrow: 'Mahsulotlar va xizmatlar',
      title: 'Nimalar yaratamiz?',
      subtitle: 'Biznesingiz uchun ishlab chiqadigan asosiy raqamli yechimlar',
      detailsLabel: 'Batafsil',
      items: [
        {
          title: 'Veb saytlar',
          description: 'Korporativ, landing va e-commerce saytlar zamonaviy dizayn bilan.',
        },
        {
          title: 'Mobil ilovalar',
          description: 'Android va iOS uchun tezkor, qulay va barqaror mobil mahsulotlar.',
        },
        {
          title: 'CRM va ERP tizimlar',
          description: 'Sotuv, ombor, moliya va ichki jarayonlarni yagona platformada boshqarish.',
        },
        {
          title: 'AI botlar',
          description: 'Jarayonlarni avtomatlashtiruvchi va savollarni qayta ishlovchi intellektual botlar.',
        },
        {
          title: 'Telegram botlar',
          description: 'Mijozlar bilan ishlash, buyurtma qabul qilish va CRM ulash uchun botlar.',
        },
        {
          title: 'Mini-app',
          description: 'Telegram ichida ishlaydigan mini-ilovalar va interaktiv servislar.',
        },
      ],
    },
    portfolio: {
      title: 'Bizning loyihalar',
      subtitle: 'Haqiqiy natija bergan raqamli mahsulotlar',
      viewCase: 'Loyihani ochish',
      imageAltSuffix: 'loyiha skrinshoti',
      projects: [
        {
          name: 'VAC.UZ',
          category: 'Ishlab chiqarish va avtomatlashtirish',
          summary: 'Ventilyatsiya kanal ishlab chiqaruvchi kompaniya uchun veb-sayt va hisob-kitob avtomatlashtirish tizimi.',
          tags: ['Next.js', 'CRM', 'Avtomatlashtirish'],
        },
        {
          name: 'Avenir OS',
          category: 'ERP+CRM+Finance tizimi',
          summary: 'Barcha operatsion vazifalarni yagona ilovada boshqarish uchun operatsion tizim.',
          tags: ['ERP', 'CRM', 'Moliya'],
        },
        {
          name: 'Avenir Store',
          category: 'E-commerce · mini-app',
          summary: 'Telegram ichida ochiladigan elektronika vitrinasi: katalog, filtrlar, qoldiq va savat.',
          tags: ['Mini-app', 'Katalog', 'E-commerce'],
        },
        {
          name: 'Yakov and Partners',
          category: 'Konsalting va analitika',
          summary: 'Xalqaro konsalting kompaniyasi uchun korporativ veb-sayt va analitik platforma.',
          tags: ['Korporativ sayt', 'SEO', 'Analitika'],
        },
        {
          name: 'DeFi Technologies',
          category: 'TradFi platforma',
          summary: 'Raqamli aktivlarga institutsional kirish imkonini beruvchi xalqaro moliyaviy platforma.',
          tags: ['FinTech', 'Web3', 'UI/UX'],
        },
        {
          name: 'APEC Asia UAE',
          category: 'Avtomobil ehtiyot qismlari',
          summary: 'BAA da global ulgurji avto ehtiyot qismlari yetkazib berish platformasi.',
          tags: ['E-commerce', 'Katalog', 'SEO'],
        },
        {
          name: 'Dagestantur',
          category: 'Turizm agentligi',
          summary: 'Rossiya Federatsiyasidagi tur agentligi uchun bronirovanie va marshrutlarni ko`rsatuvchi veb-sayt.',
          tags: ['Landing', 'Bronirovanie', 'SEO'],
        },
      ],
    },
    team: {
      title: 'Jamoamiz bilan tanishing',
      subtitle:
        'Rahbariyat va injiniring jamoasi mahsulot sifati, texnik mukammallik va uzoq muddatli hamkorlikka yo`naltirilgan.',
      members: [
        {
          role: 'CEO',
          bio: 'Kompaniya strategiyasi, mahsulot yo`nalishi va mijoz loyihalaridagi yetkazib berish standartlarini boshqaradi.',
        },
        {
          role: 'CTO',
          bio: 'Texnik arxitektura, injiniring jarayonlari va masshtablanuvchi platforma qarorlariga mas`ul.',
        },
        {
          role: 'Full-Stack Developer',
          bio: 'API qatlamidan veb interfeysgacha bo`lgan funksiyalarni ishlab chiqarish darajasida ishlab chiqadi.',
        },
      ],
    },
    stats: {
      items: [
        { label: 'Topshirilgan loyihalar' },
        { label: 'Mamnun mijozlar' },
        { label: 'Bozordagi yillar' },
        { label: 'Qamrab olingan mamlakatlar' },
      ],
    },
    contact: {
      title: 'Loyihangizni boshlang',
      description:
        'Raqamli g`oyangizni hayotga tatbiq etish uchun qanday yordam bera olishimizni muhokama qilaylik. Jamoamiz talablaringizni o`rganib, mos yechim tayyorlaydi.',
      labels: {
        email: 'Elektron pochta',
        phone: 'Telefon',
        location: 'Manzil',
      },
      locationValue: 'Toshkent, O`zbekiston',
      socialLinks: {
        instagram: 'Instagram',
      },
      successTitle: 'Rahmat!',
      successMessage: 'Xabaringizni oldik va tez orada siz bilan bog`lanamiz.',
      form: {
        name: 'Ismingiz',
        phone: 'Telefon raqam',
        telegram: 'Telegram username',
        employeesCount: 'Xodimlar soni',
        submit: 'Xabar yuborish',
        submitting: 'Yuborilmoqda...',
        error: 'Yuborib bo\'lmadi. Iltimos, qaytadan urinib ko\'ring.',
        responseTime: '24 soat ichida javob beramiz',
      },
    },
    footer: {
      description: 'Dunyo bo`ylab katta maqsadli bizneslar uchun raqamli kelajaklarni yaratamiz.',
      sections: {
        company: 'Kompaniya',
        services: 'Xizmatlar',
        contact: 'Aloqa',
      },
      companyLinks: {
        about: 'Biz haqimizda',
        blog: 'Yangiliklar',
        careers: 'Karyera',
        contact: 'Aloqa',
      },
      serviceLinks: {
        web: 'Veb ishlab chiqish',
        app: 'Ilova ishlab chiqish',
        ux: 'UI/UX dizayn',
        consulting: 'Konsalting',
      },
      locationValue: 'Toshkent, O`zbekiston',
      rightsSuffix: 'Barcha huquqlar himoyalangan',
      legalEntity:
        'Avenir Soft — Yakka tartibdagi tadbirkor Choriyev Xojiakbar Shuxrat O\'g\'li',
      legalAddress:
        'Chust ko\'chasi 1, Ulug\'bek, 100214 Toshkent shahri, O\'zbekiston · +998 93 529 88 07 · info@avenir.uz',
      legalLinks: {
        privacy: 'Maxfiylik siyosati',
        terms: 'Foydalanish shartlari',
      },
    },
  },
  ru: {
    nav: {
      links: {
        portfolio: 'Портфолио',
        services: 'Услуги',
        contact: 'Контакты',
      },
      languageLabel: 'Язык',
      toggleMenuAria: 'Открыть/закрыть меню навигации',
      closeMenuAria: 'Закрыть меню навигации',
      logoAlt: 'Логотип Avenir',
      skipToContent: 'Перейти к содержимому',
      homeAria: 'Главная страница',
    },
    hero: {
      studioBadge: 'IT-агентство Avenir',
      titlePrefix: 'Мы создаем цифровое',
      titleHighlight: 'будущее',
      description:
        'Мы сотрудничаем с амбициозными компаниями, чтобы проектировать, разрабатывать и масштабировать веб-продукты, которые быстры, элегантны и коммерчески эффективны.',
      focusAreas: [
        {
          title: 'Продуктовая стратегия',
          description: 'От исследования до дорожной карты',
        },
        {
          title: 'Полноценная разработка',
          description: 'Веб-платформы и интеграции',
        },
        {
          title: 'Надежный запуск',
          description: 'Безопасность, качество и поддержка',
        },
      ],
      ctaPortfolio: 'Смотреть портфолио',
      ctaProject: 'Начать проект',
      frameworkLabel: 'Фреймворк доставки',
      frameworkTitle: 'От идеи до запуска',
      frameworkDescription:
        'Сфокусированный процесс для скорости, качества и измеримых бизнес-результатов.',
      deliveryFlow: [
        { title: 'Исследование', detail: 'Цели, пользователи и рамки продукта' },
        { title: 'Дизайн и разработка', detail: 'UI-системы и масштабируемая инженерия' },
        { title: 'Запуск и рост', detail: 'Оптимизация и долгосрочная поддержка' },
      ],
      avgLaunchLabel: 'Средний запуск',
      avgLaunchValue: '6-8 недель',
      satisfactionLabel: 'Удовлетворенность',
      satisfactionValue: '98% партнеров остаются с нами',
    },
    services: {
      eyebrow: 'Продукты и услуги',
      title: 'Что мы создаем?',
      subtitle: 'Основные цифровые решения, которые мы делаем для бизнеса',
      detailsLabel: 'Подробнее',
      items: [
        {
          title: 'Веб-сайты',
          description: 'Корпоративные сайты, лендинги и e-commerce проекты с современным UX.',
        },
        {
          title: 'Мобильные приложения',
          description: 'Нативные и кроссплатформенные приложения для Android и iOS.',
        },
        {
          title: 'CRM и ERP системы',
          description: 'Единая платформа для управления продажами, складом, финансами и процессами.',
        },
        {
          title: 'AI-боты',
          description: 'Интеллектуальные боты для автоматизации процессов и поддержки клиентов.',
        },
        {
          title: 'Telegram-боты',
          description: 'Боты для продаж, обработки заявок, интеграций с CRM и внутренней автоматизации.',
        },
        {
          title: 'Mini-app',
          description: 'Мини-приложения внутри Telegram с интерактивным пользовательским сценарием.',
        },
      ],
    },
    portfolio: {
      title: 'Наше портфолио',
      subtitle: 'Цифровые продукты, которые дали реальный результат',
      viewCase: 'Смотреть кейс',
      imageAltSuffix: 'скриншот проекта',
      projects: [
        {
          name: 'VAC.UZ',
          category: 'Производство и автоматизация',
          summary: 'Веб-сайт и система автоматизации расчётов для производителя вентиляционных каналов.',
          tags: ['Next.js', 'CRM', 'Автоматизация'],
        },
        {
          name: 'Avenir OS',
          category: 'ERP+CRM+Finance система',
          summary: 'Операционная система для полного контроля операционных задач в одном приложении.',
          tags: ['ERP', 'CRM', 'Финансы'],
        },
        {
          name: 'Avenir Store',
          category: 'E-commerce · mini-app',
          summary: 'Витрина электроники, которая открывается внутри Telegram: каталог, фильтры, остатки и корзина.',
          tags: ['Mini-app', 'Каталог', 'E-commerce'],
        },
        {
          name: 'Яков и Партнёры',
          category: 'Консалтинг и аналитика',
          summary: 'Корпоративный сайт и аналитическая платформа для международной консалтинговой компании.',
          tags: ['Корпоративный сайт', 'SEO', 'Аналитика'],
        },
        {
          name: 'DeFi Technologies',
          category: 'TradFi платформа',
          summary: 'Международная финансовая платформа, обеспечивающая институциональный доступ к цифровым активам.',
          tags: ['FinTech', 'Web3', 'UI/UX'],
        },
        {
          name: 'APEC Asia UAE',
          category: 'Автозапчасти в ОАЭ',
          summary: 'Сервисная платформа для глобальной оптовой поставки автозапчастей в ОАЭ.',
          tags: ['E-commerce', 'Каталог', 'SEO'],
        },
        {
          name: 'Дагестантур',
          category: 'Туристическое агентство',
          summary: 'Сайт тур агентства в РФ с бронированием и отображением маршрутов.',
          tags: ['Лендинг', 'Бронирование', 'SEO'],
        },
      ],
    },
    team: {
      title: 'Наша команда',
      subtitle:
        'Руководство и инженерная команда, сфокусированные на качестве продукта, техническом уровне и долгосрочном партнерстве.',
      members: [
        {
          role: 'CEO',
          bio: 'Определяет стратегию компании, продуктовый вектор и стандарты реализации в клиентских проектах.',
        },
        {
          role: 'CTO',
          bio: 'Отвечает за техническую архитектуру, инженерные процессы и масштабируемые платформенные решения.',
        },
        {
          role: 'Full-Stack Developer',
          bio: 'Разрабатывает функции полного цикла: от API-слоя до веб-интерфейсов промышленного качества.',
        },
      ],
    },
    stats: {
      items: [
        { label: 'Реализованных проектов' },
        { label: 'Довольных клиентов' },
        { label: 'Лет на рынке' },
        { label: 'Стран охвата' },
      ],
    },
    contact: {
      title: 'Запустим ваш проект',
      description:
        'Обсудим, как мы можем помочь воплотить вашу цифровую идею. Команда изучит ваши требования и предложит точное решение.',
      labels: {
        email: 'Эл. почта',
        phone: 'Телефон',
        location: 'Локация',
      },
      locationValue: 'Ташкент, Узбекистан',
      socialLinks: {
        instagram: 'Instagram',
      },
      successTitle: 'Спасибо!',
      successMessage: 'Мы получили ваше сообщение и скоро свяжемся с вами.',
      form: {
        name: 'Имя',
        phone: 'Телефон номер',
        telegram: 'Telegram username',
        employeesCount: 'Сотрудники кол-во',
        submit: 'Отправить сообщение',
        submitting: 'Отправка...',
        error: 'Не удалось отправить заявку. Попробуйте ещё раз.',
        responseTime: 'Ответим в течение 24 часов',
      },
    },
    footer: {
      description: 'Создаем цифровое будущее для амбициозного бизнеса по всему миру.',
      sections: {
        company: 'Компания',
        services: 'Услуги',
        contact: 'Контакты',
      },
      companyLinks: {
        about: 'О нас',
        blog: 'Блог',
        careers: 'Карьера',
        contact: 'Контакты',
      },
      serviceLinks: {
        web: 'Веб-разработка',
        app: 'Разработка приложений',
        ux: 'UI/UX дизайн',
        consulting: 'Консалтинг',
      },
      locationValue: 'Ташкент, Узбекистан',
      rightsSuffix: 'Все права защищены',
      legalEntity:
        'Avenir Soft — ИП Choriyev Xojiakbar Shuxrat O\'g\'li',
      legalAddress:
        'Chust ko\'chasi 1, Ulug\'bek, 100214 Ташкент, Узбекистан · +998 93 529 88 07 · info@avenir.uz',
      legalLinks: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
      },
    },
  },
  en: {
    nav: {
      links: {
        portfolio: 'Portfolio',
        services: 'Services',
        contact: 'Contact',
      },
      languageLabel: 'Language',
      toggleMenuAria: 'Toggle navigation menu',
      closeMenuAria: 'Close navigation menu',
      logoAlt: 'Avenir logo',
      skipToContent: 'Skip to content',
      homeAria: 'Home page',
    },
    hero: {
      studioBadge: 'Avenir IT Agency',
      titlePrefix: 'We build digital',
      titleHighlight: 'futures',
      description:
        'We partner with ambitious companies to design, build, and scale web products that are fast, elegant, and commercially effective.',
      focusAreas: [
        {
          title: 'Product Strategy',
          description: 'From discovery to roadmap',
        },
        {
          title: 'Full-stack Delivery',
          description: 'Web platforms and integrations',
        },
        {
          title: 'Reliable Launch',
          description: 'Security, quality, and support',
        },
      ],
      ctaPortfolio: 'View Portfolio',
      ctaProject: 'Start a project',
      frameworkLabel: 'Delivery Framework',
      frameworkTitle: 'From idea to launch',
      frameworkDescription:
        'A focused process built for speed, quality, and measurable business outcomes.',
      deliveryFlow: [
        { title: 'Discovery', detail: 'Goals, users, and product scope' },
        { title: 'Design & Build', detail: 'UI systems and scalable engineering' },
        { title: 'Launch & Growth', detail: 'Optimization and long-term support' },
      ],
      avgLaunchLabel: 'Avg. Launch',
      avgLaunchValue: '6-8 Weeks',
      satisfactionLabel: 'Satisfaction',
      satisfactionValue: '98% Partner retention',
    },
    services: {
      eyebrow: 'Products & Services',
      title: 'What We Build',
      subtitle: 'Core digital products we deliver for modern businesses',
      detailsLabel: 'View details',
      items: [
        {
          title: 'Websites',
          description: 'Corporate websites, landing pages, and e-commerce experiences.',
        },
        {
          title: 'Mobile Apps',
          description: 'High-performance mobile applications for Android and iOS.',
        },
        {
          title: 'CRM & ERP Systems',
          description: 'Unified platform for sales, inventory, finance, and internal operations.',
        },
        {
          title: 'AI Bots',
          description: 'Intelligent bots that automate workflows and improve user support.',
        },
        {
          title: 'Telegram Bots',
          description: 'Bots for lead capture, sales, CRM integrations, and internal automation.',
        },
        {
          title: 'Mini Apps',
          description: 'Interactive Telegram Mini Apps for seamless in-app user journeys.',
        },
      ],
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Digital products that made a real impact',
      viewCase: 'View case',
      imageAltSuffix: 'project screenshot',
      projects: [
        {
          name: 'VAC.UZ',
          category: 'Manufacturing & Automation',
          summary: 'Website and calculation automation system for a ventilation duct manufacturer.',
          tags: ['Next.js', 'CRM', 'Automation'],
        },
        {
          name: 'Avenir OS',
          category: 'ERP+CRM+Finance System',
          summary: 'Operating system for full control of operational tasks in a single application.',
          tags: ['ERP', 'CRM', 'Finance'],
        },
        {
          name: 'Avenir Store',
          category: 'E-commerce · mini app',
          summary: 'An electronics storefront that opens inside Telegram: catalogue, filters, stock and cart.',
          tags: ['Mini app', 'Catalogue', 'E-commerce'],
        },
        {
          name: 'Yakov and Partners',
          category: 'Consulting & Analytics',
          summary: 'Corporate website and analytics platform for an international consulting firm.',
          tags: ['Corporate Site', 'SEO', 'Analytics'],
        },
        {
          name: 'DeFi Technologies',
          category: 'TradFi Platform',
          summary: 'International financial platform providing institutional access to digital assets.',
          tags: ['FinTech', 'Web3', 'UI/UX'],
        },
        {
          name: 'APEC Asia UAE',
          category: 'Auto Parts Supplier',
          summary: 'Service platform for global wholesale auto parts supply in the UAE.',
          tags: ['E-commerce', 'Catalog', 'SEO'],
        },
        {
          name: 'Dagestantur',
          category: 'Travel Agency',
          summary: 'Travel agency website in Russia with booking and route display features.',
          tags: ['Landing', 'Booking', 'SEO'],
        },
      ],
    },
    team: {
      title: 'Meet the Team',
      subtitle:
        'Leadership and engineering focused on product quality, technical excellence, and long-term partnership.',
      members: [
        {
          role: 'CEO',
          bio: 'Leads company strategy, product direction, and delivery standards across client projects.',
        },
        {
          role: 'CTO',
          bio: 'Owns technical architecture, engineering processes, and scalable platform decisions.',
        },
        {
          role: 'Full-Stack Developer',
          bio: 'Builds end-to-end features from API layers to frontend interfaces with production quality.',
        },
      ],
    },
    stats: {
      items: [
        { label: 'Projects Delivered' },
        { label: 'Happy Clients' },
        { label: 'Years on Market' },
        { label: 'Countries Served' },
      ],
    },
    contact: {
      title: 'Start your project',
      description:
        "Let's discuss how we can help bring your digital vision to life. Our team is ready to explore your project requirements and create a tailored solution.",
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      locationValue: 'Tashkent, Uzbekistan',
      socialLinks: {
        instagram: 'Instagram',
      },
      successTitle: 'Thank you!',
      successMessage: "We've received your message and will get back to you shortly.",
      form: {
        name: 'Name',
        phone: 'Phone',
        telegram: 'Telegram username',
        employeesCount: 'Employees count',
        submit: 'Send Message',
        submitting: 'Sending...',
        error: 'Could not send your request. Please try again.',
        responseTime: "We'll respond within 24 hours",
      },
    },
    footer: {
      description: 'Building digital futures for ambitious businesses across the world.',
      sections: {
        company: 'Company',
        services: 'Services',
        contact: 'Contact',
      },
      companyLinks: {
        about: 'About Us',
        blog: 'Blog',
        careers: 'Careers',
        contact: 'Contact',
      },
      serviceLinks: {
        web: 'Web Development',
        app: 'App Development',
        ux: 'UI/UX Design',
        consulting: 'Consulting',
      },
      locationValue: 'Tashkent, Uzbekistan',
      rightsSuffix: 'All rights reserved',
      legalEntity:
        'Avenir Soft — Sole proprietor Choriyev Xojiakbar Shuxrat O\'g\'li',
      legalAddress:
        'Chust ko\'chasi 1, Ulug\'bek, 100214 Tashkent, Uzbekistan · +998 93 529 88 07 · info@avenir.uz',
      legalLinks: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
}

export function getDictionary(language: Language): Dictionary {
  return dictionaries[language]
}














