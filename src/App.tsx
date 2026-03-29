import { useEffect } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import personRaw from './data/person.json'
import skills from './data/skills.json'
import projects from './data/projects.json'
import { useTranslation } from 'react-i18next'
import { getLocalizedPerson } from './i18n/utils'


function App() {
  const { i18n } = useTranslation()
  const person = getLocalizedPerson(personRaw, i18n.language)

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="hero" className="mb-16">
          <Hero person={person} />
        </section>

        <section id="about" className="mb-16">
          <About person={person} />
        </section>

        <section id="skills" className="mb-16">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="mb-16">
          <Projects projects={projects.projects} />
        </section>
      
      </main>
      <Footer person={person} />
    </div>
  )
}

export default App
