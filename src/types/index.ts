// Types for the portfolio project

export interface Person {
  brandName: string
  tagline: string
  tagline_en: string
  fullBio: string
  fullBio_en: string
  location: string
  location_en: string
  linkedIn: string
  github: string
  email: string
  phone: string
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface Skills {
  categories: {
    frontend: SkillCategory
    backend: SkillCategory
    lenguajes: SkillCategory
    dataScience: SkillCategory
    basesDeDatos: SkillCategory
    herramientas: SkillCategory
    ciCd: SkillCategory
    fundamentos: SkillCategory
    softSkills: SkillCategory
  }
  tags: {
    frontendDevelopment: string
    backendDevelopment: string
    devOpsCiCd: string
  }
}

export interface Project {
  title: string
  description: string
  link?: string
  image?: string
}

export type Language = 'es' | 'en'

export interface ContactLink {
  type: 'linkedin' | 'email' | 'phone'
  label: string
  href: string
  target: '_blank' | '_self'
  rel: string
}
