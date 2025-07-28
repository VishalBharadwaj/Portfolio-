import React, { useState, useEffect } from 'react';
import './FloatingActionButton.css';

const FloatingActionButton = ({ scrollToSection, scrollProgress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState('top');

  useEffect(() => {
    setIsVisible(scrollProgress > 20);
    setCurrentAction(scrollProgress > 80 ? 'contact' : 'top');
  }, [scrollProgress]);

  const handleClick = () => {
    if (currentAction === 'contact') {
      scrollToSection('contact');
    } else {
      scrollToSection('hero');
    }
  };

  return (
    <button 
      className={`floating-action-btn ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      title={currentAction === 'contact' ? 'Get in touch' : 'Back to top'}
    >
      {currentAction === 'contact' ? '💬' : '↑'}
    </button>
  );
};

export default FloatingActionButton;
