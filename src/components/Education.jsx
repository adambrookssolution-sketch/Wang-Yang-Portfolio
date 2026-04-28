import { motion } from 'framer-motion'
import { FiBook, FiBriefcase, FiCalendar } from 'react-icons/fi'
import './Education.css'

const educations = [
  {
    degree: 'Bachelor of Engineering in Computer Science and Technology',
    school: 'Huazhong University of Science and Technology (华中科技大学)',
    period: 'Sep 2011 - Jul 2015',
    description: 'Software engineering track — foundation in algorithms, distributed systems, databases, and software project management.',
  },
]

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Sungrow Power Supply (阳光电源)',
    period: 'Apr 2024 - Feb 2026',
    location: 'Wuhan, Hubei, China',
  },
  {
    role: 'Full Stack Engineer',
    company: 'Wuhan Inkjoy Tech (印悦科技)',
    period: 'Jan 2022 - Feb 2024',
    location: 'Wuhan, Hubei, China',
  },
  {
    role: 'Full Stack Engineer',
    company: 'Pragtech Solutions (普拉格科技)',
    period: 'Sep 2019 - Dec 2021',
    location: 'Wuhan, Hubei, China',
  },
  {
    role: 'Junior Web Developer',
    company: 'Syntactics Tech (思泰科)',
    period: 'Jul 2015 - Aug 2019',
    location: 'Wuhan, Hubei, China',
  },
]

function Education() {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">Academic background and professional journey</p>
        </motion.div>

        <div className="education-layout">
          {/* Left: Education Timeline */}
          <div className="education-timeline">
            <h3 className="education-section-label">
              <FiBook /> Academic
            </h3>
            <div className="timeline">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4 className="timeline-degree">{edu.degree}</h4>
                    <p className="timeline-school">{edu.school}</p>
                    <span className="timeline-period">
                      <FiCalendar /> {edu.period}
                    </span>
                    <p className="timeline-desc">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Experience */}
          <div className="education-certs">
            <h3 className="education-section-label">
              <FiBriefcase /> Experience
            </h3>
            <div className="certs-list">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="cert-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <div className="cert-icon"><FiBriefcase /></div>
                  <div className="cert-info">
                    <h4>{exp.role}</h4>
                    <p>{exp.company} — {exp.location}</p>
                    <span className="cert-year">{exp.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
