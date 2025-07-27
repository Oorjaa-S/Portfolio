import React, { useState, useEffect } from 'react';
import './Hero.css';

/**
 * Hero Component
 * 
 * The main landing section that includes:
 * - Dynamic typing animation for the title
 * - Professional introduction
 * - Call-to-action buttons
 * - Responsive design for all screen sizes
 */
const Hero = () => {
  // State for typing animation
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Text to be typed out
  const titleText = "Full Stack Developer";
  
  // Typing animation effect
  useEffect(() => {
    if (isTyping && currentIndex < titleText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + titleText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed
      
      return () => clearTimeout(timeout);
    } else if (currentIndex === titleText.length) {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, titleText]);

  // Function to handle smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle smooth scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Main heading with typing animation */}
          <div className="hero-text">
            <h1 className="hero-greeting">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            
            <h2 className="hero-title">
              I'm a <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
            
            <p className="hero-description">
              I create beautiful, responsive websites and applications that deliver 
              exceptional user experiences. With expertise in modern technologies, 
              I bring ideas to life through clean, efficient code.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={scrollToContact}
                aria-label="Contact me"
              >
                <i className="fas fa-envelope"></i>
                Get In Touch
              </button>
              
              <button 
                className="btn btn-outline"
                onClick={scrollToProjects}
                aria-label="View my work"
              >
                <i className="fas fa-code"></i>
                View My Work
              </button>
            </div>
          </div>
          
          {/* Hero image or illustration */}
          <div className="hero-image">
            <div className="image-placeholder">
              <i className="fas fa-code"></i>
              <p>Your Photo Here</p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="hero-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;