import { FaGraduationCap, FaCalendar, FaStar } from 'react-icons/fa'
import '../styles/Education.css'

function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Kakatiya Institute of Technology & Science',
      location: 'Warangal, Telangana',
      duration: '2023 — 2027',
      cgpa: '8.4',
      status: 'Pursuing',
      highlights: [
        'Data Structures & Algorithms',
        'Object Oriented Programming',
        'Full Stack Development',
        'Database Management',
      ],
    },
  ]

  return (
    <section id="education" className="education">
      <div className="education-container">

        <div className="section-header">
         <h2 className="section-title">Where I <span>Studied</span></h2>
<p className="section-subtitle">My academic journey so far</p>
        </div>

        <div className="timeline">
          {educationData.map((edu) => (
            <div key={edu.institution} className="timeline-item">

              <div className="timeline-dot">
                <FaGraduationCap size={16} />
              </div>

              <div className="education-card">

                <div className="education-card-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-field">{edu.field}</p>
                  </div>
                  <span className="education-status">{edu.status}</span>
                </div>

                <div className="education-card-body">

                  <div className="education-meta">
                    <div className="meta-item">
                      <FaGraduationCap size={14} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="meta-item">
                      <FaCalendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FaStar size={14} />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  </div>

                  <div className="education-highlights">
                    <p className="highlights-title">Key Subjects</p>
                    <div className="highlights-tags">
                      {edu.highlights.map((highlight) => (
                        <span key={highlight} className="tag">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education