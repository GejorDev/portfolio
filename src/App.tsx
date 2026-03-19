import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import person from './data/person.json'
import skills from './data/skills.json'

// Datos centralizados para todo el portfolio
const DATA = {
  person,
  skills
}

function App() {
  const { person, skills } = DATA
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="hero" className="mb-16">
          <Hero person={person} />
        </section>

        <section id="about" className="mb-16">
          <About fullBio={person.fullBio} />
        </section>

        <section id="skills" className="mb-16">
          <Skills skills={skills} />
        </section>
      
      </main>
      <Footer person={person} />
    </div>
  )
}

export default App
