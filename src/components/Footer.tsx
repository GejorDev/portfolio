// Props para Footer
interface FooterProps {
  person: {
    linkedIn: string
    email: string
    phone: string
    github: string
  }
}

function Footer({ person }: FooterProps) {
      return (
        <footer id="footer" className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NIVEL 1: ICONOS DE CONTACTO */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.084 3.846-2.175 3.846-2.175s2.45.09 3.846 2.175v9.215z"/>
            </svg>
          </a>
          <a
            href={`mailto:${person.email}`}
            className="text-gray-400 hover:text-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a
            href={`tel:+34${person.phone}`}
            className="text-gray-400 hover:text-blue-700 transition-colors"
            aria-label="Teléfono"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"/>
            </svg>
          </a>
        </div>

        {/* NIVEL 2: COPYRIGHT */}
        <div className="space-y-3 mb-4">
          <p className="text-gray-400 text-sm text-center">
            Diseñado y desarrollado por <span className="text-blue-500">GejorDev</span>
          </p>
          <p className="text-gray-500 text-xs text-center">
            Construido con React 19 + Tailwind CSS + TypeScript
          </p>
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* NIVEL 3: ENLACE AL REPO */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors flex items-center justify-center gap-2 group"
            aria-label="Ir al repositorio GitHub"
          >
            <span className="text-sm font-medium group-hover:underline">Ver código fuente en GitHub</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
