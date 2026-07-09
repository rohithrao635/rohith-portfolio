import { FaUniversity, FaCode, FaLaptopCode, FaBrain } from 'react-icons/fa'
import '../styles/About.css'

function About() {
  const highlights = [
    {
      icon: <FaUniversity size={24} />,
      title: 'Education',
      description: 'B.Tech CSE at KITS, CGPA 8.4',
    },
    {
      icon: <FaCode size={24} />,
      title: 'Development',
      description: 'Full Stack Web Development',
    },
    {
      icon: <FaBrain size={24} />,
      title: 'Machine Learning',
      description: 'ML Models with 98-99% Accuracy',
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: 'Experience',
      description: 'Internship at Vitacure Healthcare',
    },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="section-header">
          <h2 className="section-title">Who <span>Am I?</span></h2>
<p className="section-subtitle">The person behind the code</p>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I am <strong>Rohith Veeramaneni</strong>, a passionate Computer
              Science undergraduate at Kakatiya Institute of Technology and
              Science, expected to graduate in 2027.
            </p>
            <p>
              I have strong foundations in Data Structures, Algorithms,
              Object-Oriented Programming, Machine Learning and Full Stack
              Web Development. I enjoy building projects that solve real
              world problems.
            </p>
            <p>
              Beyond coding, I have demonstrated leadership as General
              Secretary of CSI and achieved recognition in Model United
              Nations competitions.
            </p>
            <div className="about-stats">
  <div className="stat">
    <h3>8.4</h3>
    <p>CGPA</p>
  </div>
  <div className="stat">
    <h3>3+</h3>
    <p>Projects</p>
  </div>
  <div className="stat">
    <h3>2x</h3>
    <p>MUN Winner</p>
  </div>
  <div className="stat">
  <h3>200+</h3>
  <p>LeetCode Problems</p>
</div>
  <div className="stat">
    <h3>5+</h3>
    <p>Technologies</p>
  </div>
</div>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">University</span>
                <span className="info-value">KITS Warangal</span>
              </div>
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Tech CSE</span>
              </div>
              <div className="info-item">
                <span className="info-label">CGPA</span>
                <span className="info-value">8.4</span>
              </div>
              <div className="info-item">
                <span className="info-label">Graduation</span>
                <span className="info-value">2027</span>
              </div>
            </div>
            <a href="/resume.pdf" download className="btn btn-primary">
              Download Resume
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div key={item.title} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About