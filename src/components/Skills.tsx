// Props para Skills
interface SkillsProps {
  skills: {
    lenguajes: string[]
    frontend: string[]
    backend: string[]
    dataScience: string[]
    basesDeDatos: string[]
    herramientas: string[]
    fundamentos: string[]
    softSkills: string[]
    ciCd: string[]
    idiomas: {
      espanol: { level: string }
      ingles: { level: string }
    }
  }
}

function Skills({ skills }: SkillsProps) {
  const { 
    frontend, 
    backend, 
    lenguajes, 
    herramientas, 
    fundamentos, 
    softSkills,
    basesDeDatos,
    dataScience,
    ciCd
  } = skills
  
  // Agrupar skills por categoría - usar ?? (nullish coalescing) en vez de ||
  const skillGroups = [
    {
      title: 'Frontend',
      skills: frontend ?? []
    },
    {
      title: 'Backend',
      skills: backend ?? []
    },
    {
      title: 'Lenguajes',
      skills: lenguajes ?? []
    },
    {
      title: 'Data Science',
      skills: dataScience ?? []
    },
    {
      title: 'Bases de datos',
      skills: basesDeDatos ?? []
    },
    {
      title: 'Herramientas',
      skills: herramientas ?? []
    },
    {
      title: 'DevOps/CI-CD',
      skills: ciCd ?? []
    },
    {
      title: 'Fundamentos',
      skills: fundamentos ?? []
    },
    {
      title: 'Soft Skills',
      skills: softSkills ?? []
    }
  ].filter(group => group.skills.length > 0)

  return (
    <section id="stack" className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Tecnologías y conceptos que utilizo en mis proyectos
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              Frontend Development
            </span>
             <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
              Backend Development
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
              DevOps & CI/CD
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={`group-${group.title}-${group.skills[0]?.toLowerCase()}`} // Clave única basada en título y primer skill
              className="card backdrop-blur-sm hover:scale-110 transition-transform duration-300"
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
                    key={`${group.title}-${skill}-${skillIndex}`} // Usar clave única
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
      </div>
    </section>
  )
}

export default Skills
