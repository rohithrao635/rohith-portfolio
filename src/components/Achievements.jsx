import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa'
import '../styles/Achievements.css'

function Achievements() {
  const achievementsData = [
    {
      icon: <FaTrophy size={28} />,
      title: 'Winner — Model United Nations 2026',
      description: 'Secured first place at MUN 2026, demonstrating exceptional diplomacy, research, and public speaking skills.',
      badge: '🥇 Winner',
      color: 'gold',
    },
    {
      icon: <FaMedal size={28} />,
      title: 'Runner Up — Model United Nations 2025',
      description: 'Achieved second place at MUN 2025, showcasing strong negotiation and leadership abilities.',
      badge: '🥈 Runner Up',
      color: 'silver',
    },
    {
      icon: <FaAward size={28} />,
      title: 'Special Recognition — Model United Nations 2024',
      description: 'Received Special Recognition Award at MUN 2024 for outstanding contribution and performance.',
      badge: '🏅 Recognition',
      color: 'bronze',
    },
    {
      icon: <FaStar size={28} />,
      title: 'Under Secretary General (USG)',
      description: 'Appointed as Under Secretary General, leading committees and managing delegate coordination.',
      badge: '⭐ Leadership',
      color: 'primary',
    },
    {
      icon: <FaTrophy size={28} />,
      title: 'Smart India Hackathon Participant',
      description: 'Participated in Smart India Hackathon, one of the largest hackathons in India, solving real world problems.',
      badge: '💡 Hackathon',
      color: 'primary',
    },
   
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">

        <div className="section-header">
          <h2 className="section-title">What I've <span>Won</span></h2>
          <p className="section-subtitle">Recognition and accomplishments along the way</p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.title} className={`achievement-card achievement-${item.color}`}>
              <div className="achievement-card-top">
                <div className="achievement-icon">{item.icon}</div>
                <span className="achievement-badge">{item.badge}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements