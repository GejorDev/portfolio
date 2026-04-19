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
  dataScience: string[]
  dataScience_en?: string[]
  basesDeDatos: string[]
  herramientas: string[]
  fundamentos: string[]
  fundamentos_en?: string[]
  softSkills: string[]
  softSkills_en?: string[]
  ciCd: string[]
  idiomas: {
    espanol: { level: string }
    ingles: { level: string }
  }
}

export type Language = 'es' | 'en'