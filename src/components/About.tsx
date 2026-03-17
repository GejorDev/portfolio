function About() {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Sobre mí</h2>
        
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            ¡Hola! Soy <strong className="text-blue-500">GejorDev</strong>, un desarrollador Full Stack apasionado 
            por construir experiencias digitales excepcionales.
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Me especializo en el desarrollo frontend moderno utilizando React 19, TypeScript y Tailwind CSS. 
            Construyo aplicaciones de alto rendimiento con una arquitectura limpia y escalable.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Experiencia
              </h3>
              <p className="text-gray-400">
                +5 años desarrollando aplicaciones web modernas, desde startups hasta empresas de tecnología.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.477 5.754 20 7.5 20s3.332-.523 4.5-1.253zm0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.477 18.247 20 16.5 20c-1.746 0-3.332-.523-4.5-1.253zm-9 16.5h12" />
                </svg>
                Pasión
              </h3>
              <p className="text-gray-400">
                Aprender constantemente y compartir conocimiento para ayudar a nuevos desarrolladores.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-white font-semibold mb-3">Educación</h3>
            <p className="text-gray-400 mb-4">
              Graduado de la Universidad Tecnológica, especializado en Desarrollo de Software y Experiencias de Usuario.
            </p>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-gray-300">
                <strong className="text-white">Certificaciones:</strong> React Professional, TypeScript Advanced, Tailwind CSS Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
