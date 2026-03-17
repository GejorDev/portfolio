function Contacts() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactame
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tenés una propuesta, proyecto, o solo querés saludar?
            <span className="block mt-2 text-blue-400 font-medium">
              ¡Me encantaría escucharte!
            </span>
          </p>
          
          {/* Contact info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition-all border border-gray-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:contacto@gejordev.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                contacto@gejordev.com
              </a>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition-all border border-gray-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.486.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.399-1.988 1.029-2.678-.103-.253-.446-1.272.096-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.542 1.375.198 2.394.108 2.647.64.69 1.029 1.585 1.029 2.678 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <a href="https://github.com/GejorDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                github.com/GejorDev
              </a>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition-all border border-gray-700">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.375 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 012.063-2.065 2.062 2.062 0 012.063 2.065c0 1.104-.926 2.063-2.063 2.063zm10.975 1.369v-.02c0-2.088-1.33-3.3-3.339-3.3c-1.473 0-2.558.657-2.684 1.247h3.231c.296 0 .42.292.42.685v-.02c0-1.737-1.095-2.385-2.522-2.385-1.534 0-2.715.86-2.715 2.044 0 1.13.813 1.986 2.243 1.986 1.275 0 2.255-.743 2.255-1.956h-.001zm0 2.744v-3.3c0-.786-.296-1.349-1.209-1.349h-.02c-1.033 0-1.519.55-1.519 1.408v.022c0 .927.648 1.37 1.456 1.37H10.02c1.642 0 2.293.902 2.293 2.848v3.793h2.026v-1.247h-.001z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/gejordev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                linkedin.com/in/gejordev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
