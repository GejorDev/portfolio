import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              ✕
            </button>
          )}

          <div className="text-2xl font-bold text-blue-500">
            <a href="#" className="flex items-center gap-2">
              GejorDev
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#hero"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors hidden md:inline-block"
            >
              Sobre mí
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Stack
            </a>
            <a
              href="#contacto"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Contacto
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
