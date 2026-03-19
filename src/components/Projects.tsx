import { useTranslation } from 'react-i18next'

type Project = {
  key: string
  tags: string[]
  link: string
  image?: string
}

const projects: Project[] = [
  {
    key: 'ecommerce',
    tags: ['React', 'Tailwind', 'TypeScript', 'Node.js'],
    link: '#'
  },
  {
    key: 'analytics',
    tags: ['React', 'D3.js', 'TypeScript'],
    link: '#'
  },
  {
    key: 'portfolio',
    tags: ['React', 'Tailwind', 'Vite'],
    link: '#',
    image: '/assets/images/portfolio.png'
  }
]

function Projects() {
  const { t } = useTranslation()
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card group overflow-hidden relative"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={t(`projects.items.${project.key}.title`)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.link}
                  className="text-white inline-flex items-center"
                >
                  {t('projects.viewProject')}
                  <svg
                    className="ml-2 w-5 h-5"
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`projects.items.${project.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group-hover:underline"
                >
                  {t('projects.viewDetails')}
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
