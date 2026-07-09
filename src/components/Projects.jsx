import { FaGithub, FaBrain, FaCity } from 'react-icons/fa'
import '../styles/Projects.css'

function Projects() {
  const projectsData = [
    {
      title: 'ML Hybrid Model for CKD Prediction',
      description:
        'A Machine Learning hybrid model that predicts Chronic Kidney Disease with 98-99% accuracy using XGBoost and advanced feature engineering techniques.',
      icon: <FaBrain size={28} />,
      technologies: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
      features: [
        'Data Preprocessing and Feature Engineering',
        'Hyperparameter Tuning for optimal performance',
        '98-99% Accuracy achieved',
        '10-Fold Cross Validation',
        'Feature Importance Visualization',
      ],
      github: 'https://github.com/',
      live: null,
      status: 'Completed',
    },
    {
      title: 'Urban Services Platform',
      description:
        'A comprehensive platform connecting urban citizens with local services. Currently in development.',
      icon: <FaCity size={28} />,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      features: [
        'Service provider marketplace',
        'Real-time booking system',
        'User authentication',
        'Review and rating system',
      ],
      github: 'https://github.com/',
      live: null,
      status: 'completed',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="section-header">
         <h2 className="section-title">What I've <span>Built</span></h2>
<p className="section-subtitle">Projects that kept me up at night 🌙</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.title} className="project-card">

              <div className="project-card-header">
                <div className="project-icon">{project.icon}</div>
                <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feature) => (
                  <div key={feature} className="project-feature">
                    <span className="feature-dot"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={16} /> GitHub
                  </a>
                ) : (
                  <span className="project-link-disabled">
                    <FaGithub size={16} /> Coming Soon
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects