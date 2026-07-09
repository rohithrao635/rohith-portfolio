import '../styles/Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hey there 👋 I'm</p>
          <h1 className="hero-name">
            Rohith <span>Veeramaneni</span>
          </h1>
          <p className="hero-role">
            I build things for the
            <span className="hero-role-highlight"> web</span>
          </p>
          <p className="hero-description">
            CS undergrad at KITS · Full Stack Developer 
            · MUN winner · Currently hunting for SDE roles 🚀
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <img
  src="/profile.jpeg"
  alt="Rohith Veeramaneni"
  className="hero-photo"
  style={{
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #00d4aa',
    display: 'block'
  }}
/>
          </div>
          <div className="hero-terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">rohith.js</span>
            </div>
            <div className="terminal-body">
              <p>const developer =</p>
              <p>&nbsp;&nbsp;name: Rohith Veeramaneni</p>
              <p>&nbsp;&nbsp;role: Full Stack Developer</p>
              <p>&nbsp;&nbsp;university: KITS Warangal</p>
              <p>&nbsp;&nbsp;cgpa: 8.4</p>
              <p>&nbsp;&nbsp;openToWork: true</p>
              <p className="terminal-cursor">▋</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  )
}

export default Hero