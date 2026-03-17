function Skills() {
  const skillGroups = [
    {
      title: 'Desarrollo Frontend',
      skills: ['JavaScript ES6+', 'TypeScript', 'React 19+', 'React Hooks', 'React Context API']
    },
    {
      title: 'Herramientas',
      skills: ['Tailwind CSS', 'Git & GitHub', 'ESLint', 'Prettier', 'Vite']
    },
    {
      title: 'Conceptos',
      skills: ['State Management', 'Routing', 'Testing', 'Performance Optimization']
    }
  ]

  return (
    <section id="habilidades" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Habilidades
          </h2>
          <p className="text-gray-400 text-lg">
            Tecnologías y conceptos que utilizo en mis proyectos
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              Frontend Development
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              UI/UX Design
            </span>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
              Performance
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="card backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {group.title}
                </h3>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bars section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Nivel de dominio
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['React 19+', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+'].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-lg p-4 backdrop-blur-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{tech}</span>
                  <span className="text-blue-400 text-sm font-semibold">
                    {index % 3 === 0 ? 'Expert' : index % 3 === 1 ? 'Advanced' : 'Intermediate'}
                  </span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      index % 3 === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-full' :
                      index % 3 === 1 ? 'bg-gradient-to-r from-green-500 to-blue-500 w-[85%]' :
                      'bg-gradient-to-r from-green-500 to-yellow-500 w-[65%]'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
