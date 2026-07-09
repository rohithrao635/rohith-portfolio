import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">
            Let's <span>Talk</span>
          </h2>
          <p className="section-subtitle">
            Open to SDE roles, internships and collaborations
          </p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h3 className="contact-heading">Get In Touch</h3>
            <p className="contact-text">
              I am currently looking for Software Development
              Engineer roles. Whether you have a job opportunity,
              a project idea or just want to say hi, my inbox
              is always open!
            </p>
            <p className="contact-text">
              I will try my best to get back to you as soon
              as possible. Let's build something great together!
            </p>
            <div className="contact-info-list">
              <a href="mailto:rohithrao635@gmail.com" className="contact-info-item">
                <div className="contact-info-icon">📧</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">rohithrao635@gmail.com</span>
                </div>
              </a>
              <a href="tel:+918522935434" className="contact-info-item">
                <div className="contact-info-icon">📱</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">+91 8522935434</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/rohith-veeramaneni-50767028a" className="contact-info-item">
                <div className="contact-info-icon">💼</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">LinkedIn</span>
                  <span className="contact-info-value">rohith-veeramaneni</span>
                </div>
              </a>
              <a href="https://github.com/rohithrao635" className="contact-info-item">
                <div className="contact-info-icon">💻</div>
                <div className="contact-info-text">
                  <span className="contact-info-label">GitHub</span>
                  <span className="contact-info-value">github.com/rohithrao635</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Job Opportunity"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  rows="5"
                  placeholder="Hello Rohith..."
                ></textarea>
              </div>
              <button className="btn btn-primary contact-btn">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact