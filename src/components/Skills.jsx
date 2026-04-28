import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript,
  SiPython, SiPostgresql, SiMongodb, SiDocker,
  SiGit, SiNextdotjs, SiLaravel, SiPhp,
  SiRedis, SiGraphql, SiMysql, SiSupabase,
  SiVuedotjs, SiDjango, SiExpress, SiPrisma,
  SiGithubactions, SiJira, SiShopify,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import './Skills.css'

const outerSkills = [
  { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20', desc: 'Primary backend framework — CRMs, ERPs, admin dashboards, contract PDF generation with DomPDF.' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB', desc: 'Building customer-facing editors, admin dashboards, and real-time UIs across every role I\'ve held.' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', desc: 'Full-stack React framework for production web apps with SSR and routing.' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', desc: 'Server-side JavaScript for APIs, integrations, and real-time services.' },
  { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D', desc: 'Used with Inertia.js on Laravel stacks and for headless WordPress frontends.' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', desc: 'Type-safe development for robust, maintainable frontend and Node.js codebases.' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', desc: 'Core language for interactive web experiences and full-stack work.' },
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4', desc: 'Backing language for Laravel, WordPress, and legacy CodeIgniter systems I\'ve maintained.' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB', desc: 'Backend services, data tooling, and AI/ML-powered features.' },
  { name: 'Django', icon: <SiDjango />, color: '#092E20', desc: 'Python web framework for backend APIs and admin-heavy applications.' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff', desc: 'Minimalist Node.js framework for REST APIs and microservices.' },
  { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DAFB', desc: 'Mobile app for solar install crews — photo upload, checklists, offline mode.' },
  { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098', desc: 'Flexible API query language for efficient data fetching across clients.' },
  { name: 'Prisma', icon: <SiPrisma />, color: '#ffffff', desc: 'Type-safe ORM for Node.js — schema-first data modeling and migrations.' },
]

const innerSkills = [
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', desc: 'Relational database used across most Laravel and PHP projects.' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', desc: 'Advanced relational database with complex query optimization.' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', desc: 'Flexible NoSQL database for rapid prototyping and document-heavy data.' },
  { name: 'Redis', icon: <SiRedis />, color: '#DC382D', desc: 'In-memory data store for caching, queues, and real-time features.' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E', desc: 'Postgres-backed BaaS for auth, storage, and realtime subscriptions.' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900', desc: 'Cloud infrastructure — EC2, S3, and deployment pipelines.' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED', desc: 'Containerized deployments for consistent dev-to-prod workflows.' },
  { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF', desc: 'CI/CD pipelines for automated build, test, and deploy.' },
  { name: 'Git', icon: <SiGit />, color: '#F05032', desc: 'Version control and collaborative development with branching strategies.' },
  { name: 'Jira', icon: <SiJira />, color: '#0052CC', desc: 'Agile project tracking, sprint planning, and team coordination.' },
  { name: 'Shopify', icon: <SiShopify />, color: '#95BF47', desc: 'Custom checkout integrations — gang sheet orders flowed straight into Shopify.' },
]

const allSkills = [...outerSkills, ...innerSkills]

function DualOrbit({ onHover, active }) {
  const containerRef = useRef(null)
  const pausedRef = useRef(false)
  const angleRef = useRef(0)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)
  const outerRefsRef = useRef([])
  const innerRefsRef = useRef([])

  const outerR = 185
  const innerR = 105

  useEffect(() => {
    const animate = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time

      if (!pausedRef.current) {
        angleRef.current = (angleRef.current + delta * 0.012) % 360
      }

      const a = angleRef.current
      outerRefsRef.current.forEach((el, i) => {
        if (!el) return
        const theta = ((360 / outerSkills.length) * i + a) * (Math.PI / 180)
        el.style.transform = `translate(${Math.cos(theta) * outerR}px, ${Math.sin(theta) * outerR}px)`
      })
      innerRefsRef.current.forEach((el, i) => {
        if (!el) return
        const theta = ((360 / innerSkills.length) * i - a * 1.3) * (Math.PI / 180)
        el.style.transform = `translate(${Math.cos(theta) * innerR}px, ${Math.sin(theta) * innerR}px)`
      })

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div
      className="orbit-container"
      ref={containerRef}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false; onHover(null) }}
    >
      <div className="orbit-ring outer" />
      <div className="orbit-ring inner" />

      {outerSkills.map((skill, i) => (
        <div
          key={skill.name}
          ref={el => outerRefsRef.current[i] = el}
          className={`skill-card ${active?.name === skill.name ? 'active' : ''}`}
          onMouseEnter={() => onHover(skill)}
        >
          <span className="skill-icon" style={{ color: skill.color }}>
            {skill.icon}
          </span>
        </div>
      ))}

      {innerSkills.map((skill, i) => (
        <div
          key={skill.name}
          ref={el => innerRefsRef.current[i] = el}
          className={`skill-card ${active?.name === skill.name ? 'active' : ''}`}
          onMouseEnter={() => onHover(skill)}
        >
          <span className="skill-icon" style={{ color: skill.color }}>
            {skill.icon}
          </span>
        </div>
      ))}
    </div>
  )
}

function Skills() {
  const [active, setActive] = useState(null)
  const hoveredRef = useRef(false)
  const timerRef = useRef(null)
  const indexRef = useRef(0)

  const rotateAuto = useCallback(() => {
    if (!hoveredRef.current) {
      setActive(allSkills[indexRef.current])
      indexRef.current = (indexRef.current + 1) % allSkills.length
    }
  }, [])

  useEffect(() => {
    rotateAuto()
    timerRef.current = setInterval(rotateAuto, 5000)
    return () => clearInterval(timerRef.current)
  }, [rotateAuto])

  const handleHover = (skill) => {
    if (skill) {
      hoveredRef.current = true
      setActive(skill)
      clearInterval(timerRef.current)
    } else {
      hoveredRef.current = false
      timerRef.current = setInterval(rotateAuto, 5000)
    }
  }

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>
      </div>

      <div className="skills-layout">
        <div className="skills-info">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.name}
                className="skill-detail"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <span className="skill-detail-icon" style={{ color: active.color }}>
                  {active.icon}
                </span>
                <h3 className="skill-detail-name">{active.name}</h3>
                <p className="skill-detail-desc">{active.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="skills-orbit">
          <DualOrbit onHover={handleHover} active={active} />
        </div>
      </div>
    </section>
  )
}

export default Skills
