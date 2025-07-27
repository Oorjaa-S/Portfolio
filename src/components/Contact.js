import React, { useState, useEffect } from 'react';
import './Contact.css';

/**
 * Contact Component
 * 
 * Provides multiple ways for visitors to get in touch including:
 * - Contact form with validation
 * - Social media links
 * - Professional contact information
 * - Interactive elements and animations
 * - Responsive design for all devices
 */
const Contact = () => {
  // State for form handling and animations
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  // Contact information data
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      color: '#ea4335'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#34a853'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Your City, State',
      link: 'https://maps.google.com',
      color: '#4285f4'
    },
    {
      icon: 'fas fa-calendar',
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM',
      link: null,
      color: '#ff9800'
    }
  ];

  // Social media links
  const socialLinks = [
    {
      platform: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/yourusername',
      color: '#181717'
    },
    {
      platform: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0077b5'
    },
    {
      platform: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2'
    },
    {
      platform: 'Portfolio',
      icon: 'fas fa-globe',
      url: 'https://yourportfolio.com',
      color: '#6c5ce7'
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate form data
  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) return 'Name is required';
    if (!email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format';
    if (!subject.trim()) return 'Subject is required';
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    
    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setFormStatus(`Error: ${error}`);
      return;
    }

    setIsSubmitting(true);
    setFormStatus('');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll just show a success message
      // In a real application, you would send this to your backend
      console.log('Form submitted:', formData);
      
      setFormStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('Error: Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header text-center ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2>Get In Touch</h2>
          <p>Ready to start your next project? Let's work together to bring your ideas to life!</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className={`contact-info ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="contact-intro">
              <h3>Let's Start a Conversation</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`contact-card ${isVisible ? 'fade-in visible stagger-' + (index + 1) : 'fade-in'}`}
                >
                  <div className="card-icon" style={{ color: info.color }}>
                    <i className={info.icon}></i>
                  </div>
                  <div className="card-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Connect with me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ backgroundColor: social.color }}
                    title={social.platform}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-container ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or idea..."
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Form Status */}
              {formStatus && (
                <div className={`form-status ${formStatus.startsWith('Error') ? 'error' : 'success'}`}>
                  {formStatus}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`contact-cta ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="cta-content">
            <h3>Ready to work together?</h3>
            <p>Let's create something amazing! I'm excited to hear about your project.</p>
            <div className="cta-buttons">
              <a href="mailto:your.email@example.com" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Email Me Directly
              </a>
              <a href="tel:+15551234567" className="btn btn-outline">
                <i className="fas fa-phone"></i>
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;