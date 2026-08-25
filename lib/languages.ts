export const languages = ['uz', 'ru', 'en'] as const
export type Language = (typeof languages)[number]

export const defaultLanguage: Language = 'uz'

export interface Dictionary {
  nav: {
    links: {
      portfolio: string
      services: string
      contact: string
    }
    languageLabel: string
    toggleMenuAria: string
    closeMenuAria: string
    logoAlt: string
    skipToContent: string
    homeAria: string
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
    detailsLabel: string
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
      instagram: string
    }
    successTitle: string
    successMessage: string
    form: {
      name: string
      phone: string
      telegram: string
      employeesCount: string
      submit: string
      submitting: string
      error: string
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
    legalEntity: string
    legalAddress: string
    legalLinks: {
      privacy: string
      terms: string
    }
  }
}

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}
