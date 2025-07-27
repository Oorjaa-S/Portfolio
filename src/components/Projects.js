import React, { useState, useEffect } from 'react';
import './Projects.css';

/**
 * Projects Component
 * 
 * Showcases a portfolio of work including:
 * - Project cards with hover effects and animations
 * - Category filtering for different types of projects
 * - Modal/detailed view for project information
 * - Links to live demos and source code
 * - Responsive grid layout
 */
const Projects = () => {
  // State for animations and filtering
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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
      { threshold: 0.2 }
    );

    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  // Sample projects data (you can replace with your actual projects)
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A complete e-commerce solution with React, Node.js, and MongoDB',
      longDescription: 'A fully functional e-commerce platform featuring user authentication, shopping cart, payment integration, admin dashboard, and inventory management. Built with modern technologies and best practices.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: 'project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1',
      featured: true
    },
    {
      id: 2,
      title: 'Weather App',
      category: 'frontend',
      description: 'Beautiful weather application with real-time data and forecasts',
      longDescription: 'A responsive weather application that provides current weather conditions, 5-day forecasts, and location-based weather updates. Features a clean UI with animated weather icons.',
      technologies: ['React', 'OpenWeather API', 'CSS3', 'Geolocation'],
      image: 'project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2',
      featured: false
    },
    {
      id: 3,
      title: 'Task Management API',
      category: 'backend',
      description: 'RESTful API for task management with authentication and real-time updates',
      longDescription: 'A robust backend API for task management applications featuring JWT authentication, real-time updates via WebSocket, comprehensive testing, and detailed documentation.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT'],
      image: 'project3.jpg',
      liveUrl: 'https://api.example.com',
      githubUrl: 'https://github.com/yourusername/project3',
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'Modern, responsive portfolio website with smooth animations',
      longDescription: 'A personal portfolio website showcasing projects and skills with smooth scroll animations, responsive design, and modern UI/UX principles.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      image: 'project4.jpg',
      liveUrl: 'https://portfolio.example.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      category: 'fullstack',
      description: 'Analytics dashboard for social media management',
      longDescription: 'A comprehensive social media analytics dashboard with data visualization, automated reporting, and multi-platform integration for managing social media presence.',
      technologies: ['Vue.js', 'Python', 'Django', 'Chart.js', 'PostgreSQL'],
      image: 'project5.jpg',
      liveUrl: 'https://dashboard.example.com',
      githubUrl: 'https://github.com/yourusername/dashboard',
      featured: true
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication',
      longDescription: 'A secure mobile banking application featuring biometric authentication, transaction history, fund transfers, and real-time notifications with end-to-end encryption.',
      technologies: ['React Native', 'Firebase', 'Biometrics', 'Redux'],
      image: 'project6.jpg',
      liveUrl: 'https://app.example.com',
      githubUrl: 'https://github.com/yourusername/banking-app',
      featured: false
    }
  ];

  // Filter categories
  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mobile', label: 'Mobile' }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  // Handle project card click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Close project modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2>My Projects</h2>
          <p>Here are some of my recent works that showcase my skills and experience</p>
        </div>

        {/* Filter Buttons */}
        <div className={`filter-buttons ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => handleFilterChange(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'fade-in visible stagger-' + (index % 4 + 1) : 'fade-in'} ${project.featured ? 'featured' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="project-image">
                <div className="image-placeholder">
                  <i className="fas fa-laptop-code"></i>
                  <span>Project Screenshot</span>
                </div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="project-link"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="project-link"
                      >
                        <i className="fab fa-github"></i>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Technologies */}
                <div className="technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`projects-cta text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            <i className="fab fa-github"></i>
            View All on GitHub
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <div className="modal-links">
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <i className="fab fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="modal-image">
                <div className="image-placeholder">
                  <i className="fas fa-laptop-code"></i>
                  <span>Project Screenshot</span>
                </div>
              </div>
              
              <div className="modal-details">
                <p>{selectedProject.longDescription}</p>
                
                <h4>Technologies Used:</h4>
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;