function Hero() {
  return (
    <div className="relative py-20 lg:py-32 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl relative">
            <div className="relative z-10 text-white text-center">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">GejorDev</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Desarrollador de Frontend especializado en <span className="text-blue-400 font-semibold">React 19</span> y
          <span className="text-purple-400 font-semibold"> Tailwind CSS</span>.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Conéctame
          </a>
          <a
            href="#contacto"
            className="group bg-gray-800/60 backdrop-blur-sm hover:bg-blue-900/50 border border-gray-700 hover:border-blue-400 text-gray-300 group-hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center"
          >
            Contáctame
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
