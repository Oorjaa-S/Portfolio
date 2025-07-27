import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * 
 * This is the root component that renders the entire portfolio website.
 * It includes all major sections: Hero, About, Projects, Skills, and Contact.
 * The layout is structured with a fixed navbar and scrollable sections.
 */
function App() {
  return (
    <div className="App">
      {/* Fixed Navigation Bar - stays at top during scroll */}
      <Navbar />
      
      {/* Main Content Area */}
      <main>
        {/* Hero Section - First impression with name and introduction */}
        <Hero />
        
        {/* About Me Section - Personal background and story */}
        <About />
        
        {/* Projects Section - Showcase of work and experience */}
        <Projects />
        
        {/* Skills Section - Technical and professional abilities */}
        <Skills />
        
        {/* Contact Section - Ways to get in touch */}
        <Contact />
      </main>
      
      {/* Footer - Additional info and links */}
      <Footer />
    </div>
  );
}

export default App;