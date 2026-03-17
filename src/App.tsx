import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="hero" className="mb-16">
          <Hero />
        </section>

        <section id="about" className="mb-16">
          <About />
        </section>

        <section id="skills" className="mb-16">
          <Skills />
        </section>

        <section id="contacto">
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
