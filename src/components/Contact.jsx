import { motion } from 'framer-motion'
import { FiMapPin, FiSend } from 'react-icons/fi'
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let's work together</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Get in Touch</h3>
            <p>
              I'm always open to new opportunities, collaborations,
              and interesting projects. Please use the form on the right —
              it's the only way to reach me, and I read every message.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FiMapPin />
                <span>Wuhan, Hubei, China (武汉, 湖北, 中国)</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FiSend /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
