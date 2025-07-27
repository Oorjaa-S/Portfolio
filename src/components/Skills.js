import React, { useState, useEffect } from 'react';
import './Skills.css';

/**
 * Skills Component
 * 
 * Displays technical skills and expertise including:
 * - Categorized skill groups (Frontend, Backend, Tools, etc.)
 * - Interactive skill cards with hover effects
 * - Progress bars or proficiency indicators
 * - Animated icons and modern layout
 * - Responsive design for all devices
 */
const Skills = () => {
  // State for scroll-triggered animations
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Skills data organized by categories
  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'fas fa-palette',
      skills: [
        { name: 'React', level: 90, icon: 'fab fa-react', color: '#61dafb' },
        { name: 'JavaScript', level: 95, icon: 'fab fa-js-square', color: '#f7df1e' },
        { name: 'TypeScript', level: 85, icon: 'fab fa-js-square', color: '#3178c6' },
        { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: '#e34f26' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: '#1572b6' },
        { name: 'Sass', level: 80, icon: 'fab fa-sass', color: '#cc6699' },
        { name: 'Tailwind CSS', level: 85, icon: 'fas fa-wind', color: '#06b6d4' },
        { name: 'Vue.js', level: 75, icon: 'fab fa-vuejs', color: '#4fc08d' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 88, icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Express.js', level: 85, icon: 'fas fa-code', color: '#000000' },
        { name: 'Python', level: 80, icon: 'fab fa-python', color: '#3776ab' },
        { name: 'Django', level: 75, icon: 'fas fa-code', color: '#092e20' },
        { name: 'PHP', level: 70, icon: 'fab fa-php', color: '#777bb4' },
        { name: 'MongoDB', level: 80, icon: 'fas fa-database', color: '#47a248' },
        { name: 'PostgreSQL', level: 85, icon: 'fas fa-database', color: '#336791' },
        { name: 'MySQL', level: 82, icon: 'fas fa-database', color: '#4479a1' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: 90, icon: 'fab fa-git-alt', color: '#f05032' },
        { name: 'Docker', level: 75, icon: 'fab fa-docker', color: '#2496ed' },
        { name: 'AWS', level: 70, icon: 'fab fa-aws', color: '#ff9900' },
        { name: 'Firebase', level: 80, icon: 'fas fa-fire', color: '#ffca28' },
        { name: 'Webpack', level: 75, icon: 'fas fa-cube', color: '#8dd6f9' },
        { name: 'VS Code', level: 95, icon: 'fas fa-code', color: '#007acc' },
        { name: 'Figma', level: 80, icon: 'fab fa-figma', color: '#f24e1e' },
        { name: 'Postman', level: 85, icon: 'fas fa-paper-plane', color: '#ff6c37' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      skills: [
        { name: 'React Native', level: 80, icon: 'fab fa-react', color: '#61dafb' },
        { name: 'Flutter', level: 65, icon: 'fas fa-mobile', color: '#02569b' },
        { name: 'Expo', level: 75, icon: 'fas fa-rocket', color: '#000020' },
        { name: 'Android Studio', level: 60, icon: 'fab fa-android', color: '#3ddc84' }
      ]
    }
  };

  // Filter categories for the filter buttons
  const categories = [
    { key: 'all', label: 'All Skills', icon: 'fas fa-th' },
    { key: 'frontend', label: 'Frontend', icon: 'fas fa-palette' },
    { key: 'backend', label: 'Backend', icon: 'fas fa-server' },
    { key: 'tools', label: 'Tools', icon: 'fas fa-tools' },
    { key: 'mobile', label: 'Mobile', icon: 'fas fa-mobile-alt' }
  ];

  // Get filtered skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillCategories).flatMap(([categoryKey, category]) => 
        category.skills.map(skill => ({ ...skill, category: categoryKey }))
      );
    }
    return skillCategories[activeCategory]?.skills || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with to bring ideas to life</p>
        </div>

        {/* Filter Buttons */}
        <div className={`skill-filters ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <i className={category.icon}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        {activeCategory === 'all' ? (
          /* Show all categories */
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => (
              <div 
                key={categoryKey} 
                className={`skill-category ${isVisible ? 'fade-in visible stagger-' + (categoryIndex + 1) : 'fade-in'}`}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          <i className={skill.icon}></i>
                        </div>
                        <div className="skill-details">
                          <h4>{skill.name}</h4>
                          <div className="skill-level">
                            <div className="progress-bar">
                              <div 
                                className="progress-fill" 
                                style={{ 
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  backgroundColor: skill.color,
                                  transitionDelay: `${skillIndex * 0.1}s`
                                }}
                              ></div>
                            </div>
                            <span className="level-text">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Show filtered category */
          <div className="filtered-skills">
            <div className="skills-grid large">
              {filteredSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-card ${isVisible ? 'fade-in visible stagger-' + (index % 4 + 1) : 'fade-in'}`}
                >
                  <div className="skill-card-header">
                    <div className="skill-icon large" style={{ color: skill.color }}>
                      <i className={skill.icon}></i>
                    </div>
                    <h3>{skill.name}</h3>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="circular-progress">
                      <svg className="progress-ring" width="120" height="120">
                        <circle
                          className="progress-ring-circle-bg"
                          stroke="#e2e8f0"
                          strokeWidth="8"
                          fill="transparent"
                          r="52"
                          cx="60"
                          cy="60"
                        />
                        <circle
                          className="progress-ring-circle"
                          stroke={skill.color}
                          strokeWidth="8"
                          fill="transparent"
                          r="52"
                          cx="60"
                          cy="60"
                          style={{
                            strokeDasharray: `${2 * Math.PI * 52}`,
                            strokeDashoffset: isVisible ? 
                              `${2 * Math.PI * 52 * (1 - skill.level / 100)}` : 
                              `${2 * Math.PI * 52}`,
                            transition: `stroke-dashoffset 1.5s ease-in-out ${index * 0.1}s`
                          }}
                        />
                      </svg>
                      <div className="progress-text">
                        <span className="percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className={`skills-footer ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="skills-summary">
            <div className="summary-item">
              <h4>3+</h4>
              <p>Years of Experience</p>
            </div>
            <div className="summary-item">
              <h4>15+</h4>
              <p>Technologies Mastered</p>
            </div>
            <div className="summary-item">
              <h4>50+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="summary-item">
              <h4>∞</h4>
              <p>Learning Never Stops</p>
            </div>
          </div>
          
          <div className="learning-note">
            <p>
              <i className="fas fa-lightbulb"></i>
              I'm always learning new technologies and expanding my skillset. 
              These proficiency levels reflect my current experience and comfort level with each technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;