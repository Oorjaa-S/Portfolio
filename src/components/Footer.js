import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * 
 * The website footer that includes:
 * - Quick navigation links
 * - Social media links
 * - Contact information
 * - Copyright and credits
 * - Back to top functionality
 * - Responsive design
 */
const Footer = () => {
  // Navigation links for footer
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  // Social media links
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/yourusername',
      color: '#181717'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:your.email@example.com',
      color: '#ea4335'
    }
  ];

  // Quick contact info
  const quickContact = [
    {
      icon: 'fas fa-envelope',
      text: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: 'fas fa-phone',
      text: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: 'Your City, State',
      link: 'https://maps.google.com'
    }
  ];

  // Handle smooth scroll to section
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <h3>Portfolio</h3>
              <p>Full Stack Developer</p>
            </div>
            <p className="footer-description">
              Passionate about creating amazing digital experiences through clean, 
              efficient code and modern design principles. Let's build something great together!
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              <h4>Connect with me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    <i className="fas fa-chevron-right"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              {quickContact.map((contact, index) => (
                <div key={index} className="contact-item">
                  <i className={contact.icon}></i>
                  <a 
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter">
              <h5>Stay Updated</h5>
              <p>Get notified about my latest projects and blog posts.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="button" className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Services/Skills Preview */}
          <div className="footer-section">
            <h4>What I Do</h4>
            <div className="services-list">
              <div className="service-item">
                <i className="fas fa-code"></i>
                <div>
                  <h5>Web Development</h5>
                  <p>Full-stack applications with modern technologies</p>
                </div>
              </div>
              <div className="service-item">
                <i className="fas fa-mobile-alt"></i>
                <div>
                  <h5>Mobile Apps</h5>
                  <p>Cross-platform mobile solutions</p>
                </div>
              </div>
              <div className="service-item">
                <i className="fas fa-palette"></i>
                <div>
                  <h5>UI/UX Design</h5>
                  <p>User-centered design and prototyping</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} <strong>Your Name</strong>. All rights reserved. 
                Made with <i className="fas fa-heart"></i> and <i className="fas fa-coffee"></i>
              </p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button 
            className="back-to-top"
            onClick={scrollToTop}
            title="Back to top"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="footer-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;