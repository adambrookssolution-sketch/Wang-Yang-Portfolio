import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import './Hero.css'

const codeText = `const wangYang = {
  name_cn: "王洋",
  role: "Full Stack Engineer",
  location: "Wuhan, China",
  stack: [
    "Laravel", "React",
    "Next.js", "Node.js"
  ],
  focus: "CRM, ERP, Delivery
    & AI-Powered Apps"
};`

function useTypewriter(text, speed = 40, delay = 800) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayed, done }
}

function Hero() {
  const { displayed, done } = useTypewriter(codeText, 35, 600)

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-greeting">你好, I'm</p>
          <h1 className="hero-name">Wang Yang <span className="hero-name-cn">王洋</span></h1>
          <h2 className="hero-title">Full Stack Engineer</h2>
          <p className="hero-description">
            Laravel, React, Next.js, Node.js — building CRM, ERP, Admin
            Dashboards, Delivery Platforms, and AI-Powered Apps. Based in
            Wuhan, Hubei, China.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-body">
              {displayed}<span className={`cursor ${done ? 'blink' : ''}`}>|</span>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  )
}

export default Hero
