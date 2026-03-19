import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../../constants'

interface LanguageToggleProps {
  variant?: 'default' | 'mobile'
  className?: string
  onToggle?: () => void
}

export function LanguageToggle({ variant = 'default', className = '', onToggle }: LanguageToggleProps) {
  const { t, i18n } = useTranslation()
  
  const toggleLanguage = () => {
    const newLang = i18n.language === LANGUAGES.ES ? LANGUAGES.EN : LANGUAGES.ES
    i18n.changeLanguage(newLang)
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
        aria-label={i18n.language === LANGUAGES.ES ? t('nav.toggleToEnglish') : t('nav.toggleToSpanish')}
      >
        {i18n.language.toUpperCase()}
      </button>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`${baseClasses} ${className}`}
      aria-label={i18n.language === LANGUAGES.ES ? t('nav.toggleToEnglish') : t('nav.toggleToSpanish')}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      {i18n.language.toUpperCase()}
    </button>
  )
}
