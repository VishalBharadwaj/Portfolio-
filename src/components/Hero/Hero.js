import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const Hero = ({ scrollToSection, isActive }) => {
  const [typedText, setTypedText] = useState('');
  // Updated text based on your LinkedIn profile
  const heroTexts = useRef(["Cloud Practitioner", "Cyber Security Enthusiast", "Public Speaker", "Master of Ceremonies (MC)" ]);
  const heroRef = useRef(null);

  // A more robust typing animation hook
  useEffect(() => {
    if (!isActive) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentText = heroTexts.current[textIndex];
      
      if (isDeleting) {
        // Erasing
        setTypedText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        // Typing
        setTypedText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      // State transitions
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 2000); // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % heroTexts.current.length;
        timeoutId = setTimeout(type, 500); // Pause before typing new text
      } else {
        timeoutId = setTimeout(type, isDeleting ? 50 : 100);
      }
    };

    type(); // Start the animation

    return () => {
      clearTimeout(timeoutId); // Cleanup on component unmount
    };
  }, [isActive]);

  const handleExploreClick = () => {
    scrollToSection('about');
  };

  return (
    <div className={`hero-container ${isActive ? 'active' : ''}`} ref={heroRef}>
      <div className="container hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Vishal Bharadwaj</span></h1>
          <h2 className="hero-subtitle">
            <span className="static-text">I'm a </span>
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I build and design web applications, specializing in the MERN stack. I'm passionate about creating clean, efficient code and intuitive user interfaces.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary hoverable" onClick={handleExploreClick}>
              Explore My Work
            </button>
            <button className="btn btn-secondary hoverable" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-card">
          <div className="code-card">
            <div className="code-header">
              <div className="code-dot red"></div>
              <div className="code-dot yellow"></div>
              <div className="code-dot green"></div>
            </div>
            <pre className="code-body">
              <code>
                <span className="code-comment">{'// developer.js'}</span><br/>
                <span className="code-keyword">const</span> developer = {'{'}<br/>
                {'  '}<span className="code-property">name</span>: <span className="code-string">"Vishal Bharadwaj"</span>,<br/>
                {'  '}<span className="code-property">title</span>: <span className="code-string">"Aspiring Full Stack Developer"</span>,<br/>
                {'  '}<span className="code-property">skills</span>: [<br/>
                {'    '}<span className="code-string">"React"</span>,<br/>
                {'    '}<span className="code-string">"Node.js"</span>,<br/>
                {'    '}<span className="code-string">"JavaScript"</span>,<br/>
                {'    '}<span className="code-string">"HTML/CSS"</span><br/>
                {'  '}],<br/>
                {'  '}<span className="code-property">location</span>: <span className="code-string">"Bengaluru, India"</span>,<br/>
                {'  '}<span className="code-property">availableForWork</span>: <span className="code-keyword">true</span><br/>
                {'};'}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={handleExploreClick}>
        <span className="scroll-text">SCROLL DOWN</span>
        <div className="mouse">
            <div className="scroll-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
