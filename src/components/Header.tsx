import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageToggle } from './ui'

function Header() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeMobileMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">
            <a href="#" className="flex items-center gap-2">
              {t('common.siteName')}
            </a>
          </div>

          {/* Links de escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#hero"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
            >
              {t('nav.home')}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
            >
              {t('nav.about')}
            </a>
            <a
              href="#stack"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
            >
              {t('nav.stack')}
            </a>
            {/* Language toggle button */}
            <LanguageToggle />
          </div>

          {/* Botón hamburguesa y menú móvil */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile language toggle */}
            <LanguageToggle variant="mobile" onToggle={closeMobileMenu} />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    text-gray-300 hover:text-white 
                    p-4 rounded-xl hover:bg-gray-700/50 
                    transition-all duration-200 
                    w-12 h-12 flex items-center justify-center
                    active:scale-95 shadow-lg
                    hover:shadow-xl
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800
                "
                aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                style={{
                    touchAction: 'manipation',
                }}
            >
                <span className={isOpen ? 'animate-out' : 'animate-in'}>
                    {isOpen 
                        ? (
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) 
                        : (
                            <svg
                                className="w-8 h-8 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )
                    }
                </span>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 border-b border-gray-700 p-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#hero"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#stack"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.stack')}
              </a>
            </nav>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
