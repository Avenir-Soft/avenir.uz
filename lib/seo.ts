import type { Language } from '@/lib/languages'

export const instagramUrl = 'https://www.instagram.com/avenir.uz/'

export const siteMeta: Record<
  Language,
  { title: string; description: string; ogLocale: string; htmlLocale: string }
> = {
  uz: {
    title: 'Avenir — IT agentligi | Veb-sayt, CRM va mobil ilova',
    description:
      "Avenir — Toshkentdagi IT agentligi. Veb-saytlar, CRM va ERP tizimlar, mobil ilovalar, Telegram va AI botlar: dizayndan ishga tushirishgacha va keyingi qo'llab-quvvatlash.",
    ogLocale: 'uz_UZ',
    htmlLocale: 'uz',
  },
  ru: {
    title: 'Avenir — IT-агентство в Ташкенте | сайты, CRM, приложения',
    description:
      'Avenir — IT-агентство в Узбекистане. Разработка сайтов и веб-платформ, CRM и ERP, мобильные приложения, Telegram- и AI-боты: дизайн, разработка, запуск и поддержка.',
    ogLocale: 'ru_RU',
    htmlLocale: 'ru',
  },
  en: {
    title: 'Avenir — IT Agency in Uzbekistan | Web, CRM, Mobile Apps',
    description:
      'Avenir is an IT agency in Tashkent, Uzbekistan: websites and web platforms, CRM and ERP systems, mobile apps, Telegram and AI bots — design, development, launch and support.',
    ogLocale: 'en_US',
    htmlLocale: 'en',
  },
}

export const seoKeywords = [
  'Avenir',
  'Avenir UZ',
  'Avenir Uzbekistan',
  'Avenir IT Agency',
  'IT agency Uzbekistan',
  'IT agency Tashkent',
  'web development Uzbekistan',
  'website development Uzbekistan',
  'CRM ERP Uzbekistan',
  'mobile app development Uzbekistan',
  'Telegram bot development',
  'UI UX design agency Uzbekistan',
  'ИТ агентство Узбекистан',
  'ИТ агентство Ташкент',
  'разработка сайтов Узбекистан',
  'создание сайтов Ташкент',
  'разработка CRM и ERP',
  'мобильные приложения Ташкент',
  'разработка Telegram ботов',
  'raqamli agentlik',
  'veb sayt yaratish',
  'Toshkent IT agentligi',
  'CRM tizim ishlab chiqish',
  'mobil ilova yaratish',
]
