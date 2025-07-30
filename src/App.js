import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Extracurriculars from './components/Extracurriculars/Extracurriculars';
import Certificates from './components/Certificates/Certificates';
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
  
  // --- LOGIC FROM YOUR NEW CODE ---
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    extracurriculars: useRef(null),
    certificates: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  // --- LOGIC FROM MY SUGGESTION (INTEGRATED) ---
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Combined useEffect for all scroll-related activities
  useEffect(() => {
    // --- SCROLL PROGRESS LOGIC ---
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };
    
    // --- INTERSECTION OBSERVER LOGIC ---
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

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    // Add scroll listener for the FAB
    window.addEventListener('scroll', handleScrollProgress, { passive: true });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      // Remove scroll listener
      window.removeEventListener('scroll', handleScrollProgress);
    };
  }, [sectionRefs]); // Dependency array remains the same

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
        <div id="hero" ref={sectionRefs.hero}><Hero scrollToSection={scrollToSection} isActive={activeSection === 'hero'} /></div>
        <section id="about" ref={sectionRefs.about}><About isActive={activeSection === 'about'} /></section>
        <section id="certificates" ref={sectionRefs.certificates}><Certificates isActive={activeSection === 'certificates'} /></section>
        <section id="projects" ref={sectionRefs.projects}><Projects isActive={activeSection === 'projects'} /></section>
        <section id="extracurriculars" ref={sectionRefs.extracurriculars}><Extracurriculars isActive={activeSection === 'extracurriculars'} /></section>
        <section id="contact" ref={sectionRefs.contact}><Contact isActive={activeSection === 'contact'} /></section>
      </main>
      
      <Footer />
      
      {/* Pass the scrollProgress state to the FAB */}
      <FloatingActionButton 
        scrollToSection={scrollToSection} 
        scrollProgress={scrollProgress} 
      />
    </div>
  );
}

export default App;
