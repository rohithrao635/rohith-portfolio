import { FaBriefcase, FaBuilding, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import '../styles/Internship.css'

function Internship() {
  const internshipData = [
    {
      role: 'Growth & Marketing Intern',
      company: 'Vitacure Healthcare Private Limited',
      location: 'India',
      duration: '2024',
      type: 'Internship',
      description:
        'Contributed to business growth through market research, competitor analysis, and strategic marketing campaigns. Collaborated with cross-functional teams to drive company objectives.',
      responsibilities: [
        'Conducted in-depth Market Research to identify trends and opportunities',
        'Performed Competitor Analysis to benchmark company performance',
        'Developed and executed Business Strategy initiatives',
        'Planned and managed Marketing Campaigns across multiple channels',
        'Collaborated with Cross Functional teams to align on goals',
      ],
      skills: ['Market Research', 'Competitor Analysis', 'Business Strategy', 'Marketing', 'Teamwork'],
    },
  ]

  return (
    <section id="internship" className="internship">
      <div className="internship-container">

        <div className="section-header">
          <h2 className="section-title">Where I <span>Worked</span></h2>
<p className="section-subtitle">Real world experience beyond the classroom</p>
        </div>

        <div className="internship-timeline">
          {internshipData.map((intern) => (
            <div key={intern.company} className="internship-card">

              <div className="internship-card-header">
                <div className="internship-icon">
                  <FaBriefcase size={24} />
                </div>
                <div className="internship-title-block">
                  <h3 className="internship-role">{intern.role}</h3>
                  <div className="internship-meta">
                    <span className="meta-item">
                      <FaBuilding size={13} /> {intern.company}
                    </span>
                    <span className="meta-item">
                      <FaCalendar size={13} /> {intern.duration}
                    </span>
                    <span className="meta-item">
                      <FaMapMarkerAlt size={13} /> {intern.location}
                    </span>
                  </div>
                </div>
                <span className="internship-badge">{intern.type}</span>
              </div>

              <p className="internship-description">{intern.description}</p>

              <div className="internship-responsibilities">
                <h4 className="responsibilities-title">Key Responsibilities</h4>
                <ul className="responsibilities-list">
                  {intern.responsibilities.map((item) => (
                    <li key={item} className="responsibility-item">
                      <FaCheckCircle className="check-icon" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="internship-skills">
                <h4 className="responsibilities-title">Skills Used</h4>
                <div className="highlights-tags">
                  {intern.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Internship