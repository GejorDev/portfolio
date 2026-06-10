export interface Person {
  name: string
  surname: string
  brandName: string
  tagline: string
  tagline_en?: string
  fullBio: string
  fullBio_en?: string
  location: string
  location_en?: string
  phone: string
  email: string
  linkedIn: string
  github: string
}

export interface SkillsData {
  lenguajes: string[]
  frontend: string[]
  backend: string[]
  basesDeDatos: string[]
  aiMl: string[]
  vectorDb: string[]
  devOps: string[]
  fundamentos: string[]
  fundamentos_en?: string[]
  softSkills: string[]
  softSkills_en?: string[]
  idiomas: {
    espanol: { level: string }
    ingles: { level: string }
  }
}

export type Language = 'es' | 'en'

export interface Locales {
  nav: {
    home: string
    about: string
    stack: string
    projects: string
    openMenu: string
    closeMenu: string
    toggleToEnglish: string
    toggleToSpanish: string
  }
  hero: {
    greeting: string
    linkedin: string
    email: string
    phone: string
  }
  about: {
    title: string
    intro: string
    fallbackBio: string
  }
  skills: {
    title: string
    subtitle: string
    categories: Record<string, string>
  }
  projects: {
    title: string
    empty: { title: string; description: string }
    items: Record<string, { title: string; description: string }>
  }
  footer: {
    linkedin: string
    email: string
    phone: string
    designedBy: string
    builtWith: string
    copyright: string
    githubLabel: string
    sourceCode: string
  }
}