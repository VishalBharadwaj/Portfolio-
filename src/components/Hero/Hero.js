import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const Hero = ({ scrollToSection, isActive }) => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef(null);
  
  const heroTexts = [
    "Full Stack Developer",
    "React Specialist", 
    "UI/UX Enthusiast"
  ];

  // Typing animation
  useEffect(() => {
    if (!isActive) return;

    const currentText = heroTexts[currentTextIndex];
    let currentIndex = 0;
    let typingInterval;
    
    if (isTyping) {
      // Typing effect
      typingInterval = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setTypedText(currentText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 1500);
        }
      }, 100);
    } else {
      // Erasing effect
      currentIndex = currentText.length;
      typingInterval = setInterval(() => {
        if (currentIndex >= 0) {
          setTypedText(currentText.substring(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(typingInterval);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
          setIsTyping(true);
        }
      }, 50);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [isActive, currentTextIndex, isTyping, heroTexts]);

  const handleExploreClick = () => {
    scrollToSection('about');
  };

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Vishal</span></h1>
            <h2 className="hero-subtitle">
              <span className="static-text">I'm a </span>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Specialized in building modern web applications with React and Node.js.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleExploreClick}>
                Explore My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-card">
            <div className="code-card">
              <div className="code-line"><span className="code-comment">// developer.js</span></div>
              <div className="code-line"><span className="code-keyword">const</span> developer = {'{'}</div>
              <div className="code-line">  <span className="code-property">name</span>: <span className="code-string">"Vishal"</span>,</div>
              <div className="code-line">  <span className="code-property">title</span>: <span className="code-string">"Full Stack Developer"</span>,</div>
              <div className="code-line">  <span className="code-property">skills</span>: [</div>
              <div className="code-line">    <span className="code-string">"React"</span>, </div>
              <div className="code-line">    <span className="code-string">"Node.js"</span>, </div>
              <div className="code-line">    <span className="code-string">"JavaScript"</span>,</div>
              <div className="code-line">    <span className="code-string">"UI/UX Design"</span></div>
              <div className="code-line">  ],</div>
              <div className="code-line">  <span className="code-property">location</span>: <span className="code-string">"Remote"</span>,</div>
              <div className="code-line">  <span className="code-property">available</span>: <span className="code-keyword">true</span></div>
              <div className="code-line">{'};'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <span className="scroll-icon" onClick={handleExploreClick}>↓</span>
      </div>
    </div>
  );
};

export default Hero;
