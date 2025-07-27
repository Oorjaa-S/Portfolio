import React, { useState, useEffect } from 'react';
import './About.css';

/**
 * About Component
 * 
 * Showcases personal background and professional journey including:
 * - Personal introduction and story
 * - Key achievements and statistics
 * - Professional values and approach
 * - Interactive elements with hover effects
 */
const About = () => {
  // State for scroll-triggered animations
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  // Statistics data
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
    { number: '3+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { number: '20+', label: 'Happy Clients', icon: 'fas fa-users' },
    { number: '100%', label: 'Client Satisfaction', icon: 'fas fa-heart' }
  ];

  // Skills highlights
  const highlights = [
    {
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions through code.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Team Player',
      description: 'Collaboration and communication are key to building great products.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Continuous Learner',
      description: 'Always staying updated with the latest technologies and best practices.',
      icon: 'fas fa-graduation-cap'
    }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2>About Me</h2>
          <p>Get to know me better - my story, passion, and what drives me</p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Image and Stats */}
          <div className={`about-left ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="about-image">
              <div className="image-container">
                <div className="profile-placeholder">
                  <i className="fas fa-user"></i>
                  <p>Professional Photo</p>
                </div>
                {/* Decorative elements */}
                <div className="image-decoration decoration-1"></div>
                <div className="image-decoration decoration-2"></div>
              </div>
            </div>

            {/* Statistics */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`stat-item ${isVisible ? 'fade-in visible stagger-' + (index + 1) : 'fade-in'}`}
                >
                  <i className={stat.icon}></i>
                  <div className="stat-content">
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className={`about-right ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="about-text">
              <h3>Hi there! I'm a passionate developer who loves creating digital experiences.</h3>
              
              <p>
                My journey in web development started during college when I built my first website. 
                What began as curiosity quickly turned into a passion for creating beautiful, 
                functional applications that solve real-world problems.
              </p>
              
              <p>
                I specialize in modern web technologies and have experience working with various 
                frameworks and tools. My approach combines technical expertise with creative 
                problem-solving to deliver exceptional user experiences.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying updated with industry trends.
              </p>

              {/* Key Highlights */}
              <div className="highlights">
                <h4>What Sets Me Apart</h4>
                <div className="highlights-grid">
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className={`highlight-item ${isVisible ? 'fade-in visible stagger-' + (index + 1) : 'fade-in'}`}
                    >
                      <div className="highlight-icon">
                        <i className={highlight.icon}></i>
                      </div>
                      <div className="highlight-content">
                        <h5>{highlight.title}</h5>
                        <p>{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="about-cta">
                <a href="#contact" className="btn btn-primary">
                  <i className="fas fa-comment"></i>
                  Let's Work Together
                </a>
                <a 
                  href="/resume.pdf" 
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;