import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="footer-logo">
          {'<Wang Yang />'}
        </a>
        <a href="#contact" className="footer-contact-link">
          Contact via form
        </a>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Wang Yang (王洋). All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
