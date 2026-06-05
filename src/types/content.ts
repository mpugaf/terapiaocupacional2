// Esquema de contenido del sitio.
// Si se integra un CMS (Notion/Sanity), este archivo define el contrato que debe cumplir el adaptador.

export interface SiteMetadata {
  title: string
  description: string
  url: string
  /** Listo para i18n: hoy es un string fijo. Futura expansión: objeto { default, locales } con next-intl */
  locale: string
  businessName: string
  therapistName: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    region: string
    country: string
    postalCode: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  socialLinks: {
    whatsapp?: string
    instagram?: string
    linkedin?: string
  }
  openGraph: {
    image: string
    imageAlt: string
  }
}

export interface NavItem {
  label: string
  href: string
}

export interface HeroContent {
  headline: string
  subheadline: string
  cta: {
    primary: { label: string; href: string }
    secondary?: { label: string; href: string }
  }
  imageAlt: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface ServiciosContent {
  heading: string
  subheading: string
  items: ServiceItem[]
}

export interface SobreMiContent {
  heading: string
  bio: string[]
  credentials: string[]
  imageAlt: string
}

export interface ParkinsonBenefit {
  title: string
  description: string
}

export interface ParkinsonContent {
  heading: string
  intro: string
  benefits: ParkinsonBenefit[]
  closing: string
}

export interface ContactoContent {
  heading: string
  subheading: string
  schedule: string
}

export interface SiteContent {
  metadata: SiteMetadata
  nav: NavItem[]
  hero: HeroContent
  servicios: ServiciosContent
  sobreMi: SobreMiContent
  parkinson: ParkinsonContent
  contacto: ContactoContent
}
