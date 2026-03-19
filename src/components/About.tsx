// Props para el About
interface AboutProps {
  fullBio?: string
}

function About({ fullBio }: AboutProps) {
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Sobre mí</h2>
        
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Soy <strong className="text-blue-500">Jorge Diego Alonso</strong>, profesional de las tecnologías de la información, 
            con experiencia en el desarrollo de soluciones digitales innovadoras.
          </p>
          
          {fullBio && (
            <>
              <hr className="border-gray-700 my-4" />
              <div className="mt-6">
                <p className="text-gray-300 leading-relaxed">
                  {fullBio}
                </p>
              </div>
            </>
          )}
          
          {!fullBio && (
            <div className="mt-6">
              <p className="text-gray-300 leading-relaxed">
                Especializado en la creación de arquitecturas web modernas y escalables, con enfoque en UX/UI y metodologías ágiles.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
