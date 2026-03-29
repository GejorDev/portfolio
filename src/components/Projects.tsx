import { useTranslation } from 'react-i18next'

export type Project = {
  key: string
  tags: string[]
  link: string
}

interface ProjectsProps {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation()

  // Empty state when no projects
  if (projects.length === 0) {
    return (
      <section className="py-20 bg-gray-800/50 relative overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('projects.title')}
          </h2>
          
          <div className="bg-gray-800 rounded-xl p-12 border border-gray-700 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-blue-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t('projects.empty.title')}
            </h3>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              {t('projects.empty.description')}
            </p>
          </div>
        </div>
      </section>
    )
  }

  // Render projects list
  return (
    <section className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.key || index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <p className="text-gray-400 mb-4">
                  {t(`projects.items.${project.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
