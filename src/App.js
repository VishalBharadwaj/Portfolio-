import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import FloatingActionButton from './components/FloatingActionButton/FloatingActionButton';
import BackgroundTiles from './components/BackgroundTiles/BackgroundTiles';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  // Handle loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  // Set initial theme
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Intersection Observer for sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section refs
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId]?.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <BackgroundTiles />
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main>
        <div id="hero" ref={sectionRefs.hero} className={activeSection === 'hero' ? 'active' : ''}>
          <Hero scrollToSection={scrollToSection} isActive={activeSection === 'hero'} />
        </div>
        
        <section id="about" ref={sectionRefs.about} className={activeSection === 'about' ? 'active' : ''}>
          <About isActive={activeSection === 'about'} />
        </section>
        
        <section id="services" ref={sectionRefs.services} className={activeSection === 'services' ? 'active' : ''}>
          <Services isActive={activeSection === 'services'} />
        </section>
        
        <section id="projects" ref={sectionRefs.projects} className={activeSection === 'projects' ? 'active' : ''}>
          <Projects isActive={activeSection === 'projects'} />
        </section>
        
        <section id="contact" ref={sectionRefs.contact} className={activeSection === 'contact' ? 'active' : ''}>
          <Contact isActive={activeSection === 'contact'} />
        </section>
      </main>
      
      <Footer />
      <FloatingActionButton scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
