import '../styles/Certifications.css'

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <h2 className="section-title">
            My <span>Certifications</span>
          </h2>
          <p className="section-subtitle">
            Verified skills and credentials
          </p>
        </div>
        <div className="certifications-grid">
          <div className="cert-card">
            <div className="cert-card-top">
              <div className="cert-icon">HR</div>
            </div>
            <div className="cert-body">
              <h3 className="cert-title">Python Basic</h3>
              <p className="cert-issuer">Issued by HackerRank</p>
              <p className="cert-date">2024</p>
              <div className="cert-skills">
                <span className="tag">Python</span>
                <span className="tag">Problem Solving</span>
                <span className="tag">Basic Programming</span>
              </div>
              <a href="https://www.hackerrank.com" className="cert-link">
                View Credential
              </a>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-card-top">
              <div className="cert-icon">HR</div>
            </div>
            <div className="cert-body">
              <h3 className="cert-title">Java Basic</h3>
              <p className="cert-issuer">Issued by HackerRank</p>
              <p className="cert-date">2024</p>
              <div className="cert-skills">
                <span className="tag">Java</span>
                <span className="tag">OOP</span>
                <span className="tag">Basic Programming</span>
              </div>
              <a href="https://www.hackerrank.com" className="cert-link">
                View Credential
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications