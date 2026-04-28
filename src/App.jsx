import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const sectionBgs = [
  { id: 'home', image: '/bg-hero.jpg' },
  { id: 'about', image: '/bg-about.jpg' },
  { id: 'skills', image: '/bg-skills.jpg' },
  { id: 'education', image: '/bg-education.jpg' },
  { id: 'projects', image: '/bg-projects.jpg' },
  { id: 'contact', image: '/bg-contact.jpg' },
]

function App() {
  const bgLayersRef = useRef([])

  useEffect(() => {
    let currentValues = sectionBgs.map(() => 0)
    let rafId = null

    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      const scrollY = window.scrollY
      const viewH = window.innerHeight

      bgLayersRef.current.forEach((layer, i) => {
        if (!layer) return

        const section = document.getElementById(sectionBgs[i].id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrollY
        const sectionH = section.offsetHeight

        // How far through this section (0 to 1)
        const progress = (scrollY - sectionTop + viewH) / (sectionH + viewH)

        // Visible when section is in viewport
        const isVisible = progress > 0 && progress < 1
        const opacity = isVisible
          ? Math.min(1, Math.sin(progress * Math.PI) * 1.5)
          : 0

        // Parallax offset
        const targetY = (scrollY - sectionTop) * 0.2
        currentValues[i] = lerp(currentValues[i], targetY, 0.08)

        layer.style.opacity = opacity
        layer.style.transform = `translateY(${currentValues[i]}px) scale(1.1)`
      })

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="app">
      <div className="parallax-container">
        {sectionBgs.map((bg, i) => (
          <div
            key={bg.id}
            className="parallax-layer"
            ref={(el) => (bgLayersRef.current[i] = el)}
            style={{ backgroundImage: `url(${bg.image})` }}
          />
        ))}
        <div className="parallax-overlay" />
      </div>
      <div className="app-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
