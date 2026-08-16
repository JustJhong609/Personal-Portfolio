import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/sections/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

const Hero = lazy(() => import('./components/sections/Hero'))

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Hero />
        </Suspense>
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
