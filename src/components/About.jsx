import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi'
import './About.css'

const highlights = [
  {
    icon: <FiCode />,
    title: 'Clean, Shippable Code',
    description: 'Picking up stalled projects, cleaning them up, and shipping ahead of schedule.',
  },
  {
    icon: <FiLayers />,
    title: 'Full Stack',
    description: 'Laravel, React, Next.js, Node.js — dashboards, APIs, and mobile, end to end.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Business-Aware',
    description: 'Understanding the product side, not just the tech — flagging scope issues early.',
  },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="photo-wrapper">
              <img src="/profile.jpg" alt="Wang Yang" />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I'm Wang Yang (王洋), a Full Stack Engineer based in Wuhan, Hubei,
              with 10+ years of experience building scalable Admin Dashboards,
              Delivery Platforms, AI-Powered Applications, and cross-border SaaS
              tools used by teams and businesses every day. My focus is always
              on delivering solutions that are fast, reliable, and
              user-friendly.
            </p>
            <p>
              Over the years, I've worked with companies across new energy,
              cross-border e-commerce, custom apparel printing, healthcare
              scheduling, and real estate — consistently turning complex
              workflows and stalled projects into clean, production-ready
              digital products. My mission is simple: help businesses turn
              ideas into reliable, high-impact digital products — and stay
              around to keep them running.
            </p>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
