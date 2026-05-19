import { useTranslation } from 'react-i18next'

type Language = 'es' | 'en'

interface LanguageToggleProps {
  variant?: 'default' | 'mobile'
  className?: string
  onToggle?: () => void
}

export function LanguageToggle({ variant = 'default', className = '', onToggle }: LanguageToggleProps) {
  const { t, i18n } = useTranslation()
  
  const currentLang = (i18n.language ?? 'es').split('-')[0].toLowerCase()
  const nextLang: Language = currentLang === 'es' ? 'en' : 'es'
  
  const toggleLanguage = () => {
    i18n.changeLanguage(nextLang)
    onToggle?.()
  }

  const baseClasses = `
    text-gray-300 hover:text-white text-sm font-medium transition-colors 
    flex items-center justify-center gap-1 px-2 py-1 rounded border border-gray-600 
    hover:border-gray-500 hover:border-blue-500 shrink-0 min-w-[4rem] h-8 
    whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 
    focus:ring-offset-2 focus:ring-offset-gray-800
  `

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleLanguage}
        className={`${baseClasses} ${className}`}
        aria-label={currentLang === 'es' ? t('nav.toggleToEnglish') : t('nav.toggleToSpanish')}
      >
        {currentLang.toUpperCase()}
      </button>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`${baseClasses} ${className}`}
      aria-label={currentLang === 'es' ? t('nav.toggleToEnglish') : t('nav.toggleToSpanish')}
    >
      {currentLang.toUpperCase()}
    </button>
  )
}
