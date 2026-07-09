import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Rohith<span>.dev</span></h3>
            <p className="footer-tagline">
              Building things for the web, one line at a time.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-group">
              <h4 className="footer-links-title">Navigate</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="footer-links-group">
              <h4 className="footer-links-title">More</h4>
              <a href="#education">Education</a>
              <a href="#internship">Internship</a>
              <a href="#achievements">Achievements</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-links-group">
              <h4 className="footer-links-title">Connect</h4>
              <a href="https://github.com/rohithrao635">GitHub</a>
              <a href="https://www.linkedin.com/in/rohith-veeramaneni-50767028a">LinkedIn</a>
              <a href="mailto:rohithrao635@gmail.com">Email</a>
              <a href="tel:+918522935434">Phone</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Rohith Veeramaneni. All rights reserved.
          </p>
          <p className="footer-made">
            Built with React ⚡ Deployed on Vercel
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer