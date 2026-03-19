import { useTranslation } from 'react-i18next'
import { getLocalizedField } from '../i18n/utils'

// Props para el Hero
interface HeroProps {
  person: {
    brandName: string
    fullBio: string
    linkedIn: string
    email: string
    phone: string
    tagline?: string
    tagline_en?: string
    fullBio_en?: string
  }
}

function Hero({ person }: HeroProps) {
  const { t, i18n } = useTranslation()
  const { brandName, linkedIn, email, phone } = person
  const currentLang = i18n.language
  const tagline = getLocalizedField(person, 'tagline', currentLang)

  // Funciones auxiliares fuera de render para evitar crear referencias nuevas
  const linkedinIcon = (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.084 3.846-2.175 3.846-2.175s2.45.09 3.846 2.175v9.215z"/>
    </svg>
  )

  const emailIcon = (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  const phoneIcon = (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"/>
    </svg>
  )

  const contactLinks = [
    { type: 'linkedin', label: t('hero.linkedin'), key: 'linkedin', icon: linkedinIcon, href: linkedIn, target: '_blank', rel: 'noopener noreferrer' } as const,
    { type: 'email', label: t('hero.email'), key: 'email', icon: emailIcon, href: `mailto:${email}`, target: '_self', rel: 'noopener noreferrer' } as const,
    { type: 'phone', label: t('hero.phone'), key: 'phone', icon: phoneIcon, href: `tel:${phone}`, target: '_self', rel: 'noopener noreferrer' } as const
  ]

  return (
    <div className="relative py-20 lg:py-32 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {t('hero.greeting', { name: brandName })}
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed">
          {tagline}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map((contact) => (
            <a
              key={contact.key}
              href={contact.href}
              target={contact.target}
              rel={contact.rel}
              className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {contact.icon}
              <span>{contact.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
