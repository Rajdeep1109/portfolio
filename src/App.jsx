import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
const App = () => {
  return (
    <><div className="bg-gray-950 min-h-screen">
    <Header />
    <main className="container mx-auto p-6">
      <About />
      <Skills />
      <Projects />
    </main>
    <Footer />
  </div>
    </>
  )
}

export default App