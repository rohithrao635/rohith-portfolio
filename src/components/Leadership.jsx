import '../styles/Leadership.css'

function Leadership() {
  return (
    <section id="leadership" className="leadership">
      <div className="leadership-container">
        <div className="section-header">
          <h2 className="section-title">How I <span>Lead</span></h2>
          <p className="section-subtitle">
            Leadership roles and responsibilities
          </p>
        </div>
        <div className="leadership-grid">
          <div className="leadership-card">
            <div className="leadership-card-header">
              <div className="leadership-icon">🏛️</div>
              <span className="leadership-badge">General Secretary</span>
            </div>
            <h3 className="leadership-title">Computer Society of India</h3>
            <p className="leadership-org">CSI — KITS Warangal Chapter</p>
            <p className="leadership-description">
              Serving as General Secretary of the Computer Society
              of India at KITS Warangal. Responsible for organizing
              technical events, managing members, coordinating with
              faculty advisors and driving the society's vision forward.
            </p>
            <div className="leadership-skills">
              <span className="tag">Event Management</span>
              <span className="tag">Team Leadership</span>
              <span className="tag">Communication</span>
              <span className="tag">Organization</span>
            </div>
          </div>
          <div className="leadership-card">
            <div className="leadership-card-header">
              <div className="leadership-icon">⚖️</div>
              <span className="leadership-badge">Member</span>
            </div>
            <h3 className="leadership-title">Disciplinary Club</h3>
            <p className="leadership-org">KITS Warangal</p>
            <p className="leadership-description">
              Active member of the Disciplinary Club at Kakatiya
              Institute of Technology and Science. Contributing
              to maintaining discipline, order and a positive
              campus environment for all students.
            </p>
            <div className="leadership-skills">
              <span className="tag">Discipline</span>
              <span className="tag">Responsibility</span>
              <span className="tag">Campus Management</span>
              <span className="tag">Teamwork</span>
            </div>
          </div>
          <div className="leadership-card">
            <div className="leadership-card-header">
              <div className="leadership-icon">❤️</div>
              <span className="leadership-badge">Member</span>
            </div>
            <h3 className="leadership-title">Humanity Club</h3>
            <p className="leadership-org">KITS Warangal — 2025-26</p>
            <p className="leadership-description">
              Active member of the Humanity Club at Kakatiya
              Institute of Technology and Science for the year
              2025-26. Contributing to social causes, community
              outreach programs and humanitarian initiatives
              on campus and beyond.
            </p>
            <div className="leadership-skills">
              <span className="tag">Social Service</span>
              <span className="tag">Community Outreach</span>
              <span className="tag">Empathy</span>
              <span className="tag">Teamwork</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership