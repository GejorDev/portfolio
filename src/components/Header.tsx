import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">
            <a href="#" className="flex items-center gap-2">
              GejorDev
            </a>
          </div>

          {/* Links de escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#hero"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#stack"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Stack
            </a>
          </div>

          {/* Botón hamburguesa y menú móvil */}
          <div className="md:hidden flex items-center">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    text-gray-300 hover:text-white 
                    p-4 rounded-xl hover:bg-gray-700/50 
                    transition-all duration-200 
                    w-12 h-12 flex items-center justify-center
                    active:scale-95 shadow-lg
                    hover:shadow-xl
                "
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
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
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </a>
              <a
                href="#stack"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Stack
              </a>
            </nav>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
