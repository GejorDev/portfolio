import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../constants'
import type { Language } from '../types'

export function useLanguage() {
  const { i18n } = useTranslation()
  
  const currentLanguage = i18n.language as Language
  
  const changeLanguage = useCallback((lang: Language) => {
    i18n.changeLanguage(lang)
  }, [i18n])
  
  const toggleLanguage = useCallback(() => {
    const newLang = currentLanguage === LANGUAGES.ES ? LANGUAGES.EN : LANGUAGES.ES
    i18n.changeLanguage(newLang)
  }, [currentLanguage, i18n])
  
  const isSpanish = currentLanguage === LANGUAGES.ES
  const isEnglish = currentLanguage === LANGUAGES.EN
  
  return {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    isSpanish,
    isEnglish,
  }
}
