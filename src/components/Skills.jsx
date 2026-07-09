import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaPython, FaJava, FaGitAlt,
  FaGithub, FaDatabase
} from 'react-icons/fa'
import {
  SiC, SiCplusplus, SiExpress, SiMongodb,
  SiMysql, SiScikitlearn, SiNumpy,
  SiPandas, SiVsco
} from 'react-icons/si'
import '../styles/Skills.css'

function Skills() {
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C', icon: <SiC size={32} /> },
        { name: 'C++', icon: <SiCplusplus size={32} /> },
        { name: 'Java', icon: <FaJava size={32} /> },
        { name: 'Python', icon: <FaPython size={32} /> },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 size={32} /> },
        { name: 'CSS3', icon: <FaCss3Alt size={32} /> },
        { name: 'JavaScript', icon: <FaJs size={32} /> },
        { name: 'React.js', icon: <FaReact size={32} /> },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs size={32} /> },
        { name: 'Express.js', icon: <SiExpress size={32} /> },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb size={32} /> },
        { name: 'MySQL', icon: <SiMysql size={32} /> },
      ],
    },
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Scikit-learn', icon: <SiScikitlearn size={32} /> },
        { name: 'NumPy', icon: <SiNumpy size={32} /> },
        { name: 'Pandas', icon: <SiPandas size={32} /> },
        { name: 'Python', icon: <FaPython size={32} /> },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt size={32} /> },
        { name: 'GitHub', icon: <FaGithub size={32} /> },
        { name: 'VS Code', icon: <FaDatabase size={32} /> },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="section-header">
          <h2 className="section-title">What I <span>Know</span></h2>
<p className="section-subtitle">Technologies in my toolkit</p>
</div>
        <div className="skills-grid">
          {skillsData.map((category) => (
            <div key={category.category} className="skill-category">

              <h3 className="category-title">{category.category}</h3>

              <div className="skill-cards">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills