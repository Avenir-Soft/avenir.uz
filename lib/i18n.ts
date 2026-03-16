export const languages = ['uz', 'ru', 'en'] as const
export type Language = (typeof languages)[number]

export const defaultLanguage: Language = 'uz'

export interface Dictionary {
  nav: {
    links: {
      portfolio: string
      team: string
      services: string
      contact: string
    }
    languageLabel: string
    toggleMenuAria: string
    closeMenuAria: string
    logoAlt: string
  }
  hero: {
    studioBadge: string
    titlePrefix: string
    titleHighlight: string
    description: string
    focusAreas: Array<{
      title: string
      description: string
    }>
    ctaPortfolio: string
    ctaTeam: string
    ctaProject: string
    frameworkLabel: string
    frameworkTitle: string
    frameworkDescription: string
    deliveryFlow: Array<{
      title: string
      detail: string
    }>
    avgLaunchLabel: string
    avgLaunchValue: string
    satisfactionLabel: string
    satisfactionValue: string
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
  }
  portfolio: {
    title: string
    subtitle: string
    viewCase: string
    imageAltSuffix: string
    projects: Array<{
      name: string
      category: string
      summary: string
      tags: string[]
    }>
  }
  team: {
    title: string
    subtitle: string
    members: Array<{
      role: string
      bio: string
    }>
  }
  stats: {
    items: Array<{
      label: string
    }>
  }
  contact: {
    title: string
    description: string
    labels: {
      email: string
      phone: string
      location: string
    }
    locationValue: string
    socialLinks: {
      linkedin: string
      twitter: string
      instagram: string
    }
    successTitle: string
    successMessage: string
    form: {
      name: string
      phone: string
      telegram: string
      employeesCount: string
      annualTurnover: string
      annualTurnoverOptions: string[]
      submit: string
      responseTime: string
    }
  }
  footer: {
    description: string
    sections: {
      company: string
      services: string
      contact: string
    }
    companyLinks: {
      about: string
      blog: string
      careers: string
      contact: string
    }
    serviceLinks: {
      web: string
      app: string
      ux: string
      consulting: string
    }
    locationValue: string
    rightsSuffix: string
    legalLinks: {
      privacy: string
      terms: string
    }
  }
}

export const dictionaries: Record<Language, Dictionary> = {
  uz: {
    nav: {
      links: {
        portfolio: 'Loyihalar',
        team: 'Jamoa',
        services: 'Xizmatlar',
        contact: 'Aloqa',
      },
      languageLabel: 'Til',
      toggleMenuAria: 'Navigatsiya menyusini ochish/yopish',
      closeMenuAria: 'Navigatsiya menyusini yopish',
      logoAlt: 'Avenir logotipi',
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
      ctaTeam: 'Jamoa bilan tanishish',
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
      avgLaunchValue: '2 haftagacha',
      satisfactionLabel: 'Qoniqish',
      satisfactionValue: '98% hamkorlar biz bilan qoladi',
    },
    services: {
      eyebrow: 'Mahsulotlar va xizmatlar',
      title: 'Nimalar yaratamiz?',
      subtitle: 'Biznesingiz uchun ishlab chiqadigan asosiy raqamli yechimlar',
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
          name: 'Safron bozori',
          category: 'Onlayn savdo platformasi',
          summary: 'Konversiyaga yo`naltirilgan to`lov bosqichi va ko`p tilli foydalanuvchi tajribasiga ega onlayn savdo maydonchasi.',
          tags: ['Next.js', 'To`lovlar', 'SEO'],
        },
        {
          name: 'MedLink UZ',
          category: 'Tibbiy xizmat platformasi',
          summary: 'Hududlardagi klinikalar uchun qabul va bemor oqimini boshqarish platformasi.',
          tags: ['Boshqaruv paneli', 'Bronlash', 'Analitika'],
        },
        {
          name: 'TashTrack',
          category: 'Logistika platformasi',
          summary: 'Marshrut tahlili va operatsion nazoratga ega flot monitoring tizimi.',
          tags: ['Xaritalar', 'Real vaqt', 'Operatsiyalar'],
        },
        {
          name: 'EduCore',
          category: 'Ta`lim texnologiyasi mahsuloti',
          summary: 'Maktablar, mentorlar va o`quvchilar uchun o`qitish jarayonini boshqarish.',
          tags: ['LMS', 'Rollar bo`yicha kirish', 'Hisobotlar'],
        },
        {
          name: 'Halal Finance',
          category: 'Moliyaviy texnologiya ilovasi',
          summary: 'Xavfsiz ro`yxatdan o`tish va moliyaviy yo`riqnomali, mobil qurilmalar uchun mos tajriba.',
          tags: ['Mobil UX', 'Xavfsizlik', 'KYC'],
        },
        {
          name: 'Textile Hub',
          category: 'B2B savdo maydonchasi',
          summary: 'Yetkazib beruvchilar va ulgurji xaridorlarni bog`lovchi xarid platformasi.',
          tags: ['B2B', 'Katalog', 'CRM'],
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
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        instagram: 'Instagram',
      },
      successTitle: 'Rahmat!',
      successMessage: 'Xabaringizni oldik va tez orada siz bilan bog`lanamiz.',
      form: {
        name: 'Имя',
        phone: 'Телефон номер',
        telegram: 'ТГ юзер',
        employeesCount: 'Сотрудники кол-во',
        annualTurnover: 'Годовой оборот',
        annualTurnoverOptions: ['$10k - $100k', '$100k - $1m', '$1m - < $5m'],
        submit: 'Xabar yuborish',
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
        team: 'Команда',
        services: 'Услуги',
        contact: 'Контакты',
      },
      languageLabel: 'Язык',
      toggleMenuAria: 'Открыть/закрыть меню навигации',
      closeMenuAria: 'Закрыть меню навигации',
      logoAlt: 'Логотип Avenir',
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
      ctaTeam: 'Наша команда',
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
          name: 'Шафран Маркет',
          category: 'Платформа онлайн-торговли',
          summary: 'Онлайн-площадка с оптимизированной оплатой и мультиязычным пользовательским опытом.',
          tags: ['Next.js', 'Платежи', 'SEO'],
        },
        {
          name: 'MedLink UZ',
          category: 'Медицинская платформа',
          summary: 'Платформа записи и управления потоком пациентов для клиник по регионам.',
          tags: ['Панель управления', 'Бронирование', 'Аналитика'],
        },
        {
          name: 'TashTrack',
          category: 'Логистическая платформа',
          summary: 'Мониторинг автопарка с аналитикой маршрутов и прозрачностью операций.',
          tags: ['Карты', 'В реальном времени', 'Операции'],
        },
        {
          name: 'EduCore',
          category: 'Образовательный продукт',
          summary: 'Учебные процессы для школ, наставников и студенческих групп.',
          tags: ['LMS', 'Ролевой доступ', 'Отчеты'],
        },
        {
          name: 'Halal Finance',
          category: 'Финансовое приложение',
          summary: 'Опыт, ориентированный на мобильные устройства, с безопасным онбордингом и понятными финансовыми сценариями.',
          tags: ['Мобильный UX', 'Безопасность', 'KYC'],
        },
        {
          name: 'Textile Hub',
          category: 'B2B-маркетплейс',
          summary: 'Платформа закупок, соединяющая поставщиков и оптовых покупателей.',
          tags: ['B2B', 'Каталог', 'CRM'],
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
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        instagram: 'Instagram',
      },
      successTitle: 'Спасибо!',
      successMessage: 'Мы получили ваше сообщение и скоро свяжемся с вами.',
      form: {
        name: 'Имя',
        phone: 'Телефон номер',
        telegram: 'ТГ юзер',
        employeesCount: 'Сотрудники кол-во',
        annualTurnover: 'Годовой оборот',
        annualTurnoverOptions: ['$10k - $100k', '$100k - $1m', '$1m - < $5m'],
        submit: 'Отправить сообщение',
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
        team: 'Team',
        services: 'Services',
        contact: 'Contact',
      },
      languageLabel: 'Language',
      toggleMenuAria: 'Toggle navigation menu',
      closeMenuAria: 'Close navigation menu',
      logoAlt: 'Avenir logo',
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
      ctaTeam: 'Meet the Team',
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
          name: 'Saffron Market',
          category: 'E-commerce Platform',
          summary: 'Online marketplace with conversion-focused checkout and multilingual UX.',
          tags: ['Next.js', 'Payments', 'SEO'],
        },
        {
          name: 'MedLink UZ',
          category: 'Healthcare SaaS',
          summary: 'Appointment and patient-flow platform for clinics across regions.',
          tags: ['Dashboard', 'Booking', 'Analytics'],
        },
        {
          name: 'TashTrack',
          category: 'Logistics Platform',
          summary: 'Fleet monitoring with route intelligence and operational visibility.',
          tags: ['Maps', 'Real-time', 'Operations'],
        },
        {
          name: 'EduCore',
          category: 'EdTech Product',
          summary: 'Learning workflows for schools, mentors, and student cohorts.',
          tags: ['LMS', 'Role Access', 'Reports'],
        },
        {
          name: 'Halal Finance',
          category: 'FinTech App',
          summary: 'Mobile-first finance experience with secure onboarding and guidance.',
          tags: ['Mobile UX', 'Security', 'KYC'],
        },
        {
          name: 'Textile Hub',
          category: 'B2B Marketplace',
          summary: 'Procurement platform connecting suppliers and wholesale buyers.',
          tags: ['B2B', 'Catalog', 'CRM'],
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
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        instagram: 'Instagram',
      },
      successTitle: 'Thank you!',
      successMessage: "We've received your message and will get back to you shortly.",
      form: {
        name: 'Name',
        phone: 'Phone',
        telegram: 'TG username',
        employeesCount: 'Employees count',
        annualTurnover: 'Annual turnover',
        annualTurnoverOptions: ['$10k - $100k', '$100k - $1m', '$1m - < $5m'],
        submit: 'Send Message',
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
      legalLinks: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
}

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}
