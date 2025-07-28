import React, { useState, useEffect } from 'react';
import './FloatingActionButton.css'; // Import the CSS file

// --- SVG Icons ---
const ArrowUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>;
const MessageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;

// --- FloatingActionButton Component ---
const FloatingActionButton = ({ scrollToSection, scrollProgress }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showContactIcon, setShowContactIcon] = useState(false);

    useEffect(() => {
        // Button becomes visible after scrolling 20%
        setIsVisible(scrollProgress > 20);
        // Icon switches to 'contact' after scrolling 80%
        setShowContactIcon(scrollProgress > 80);
    }, [scrollProgress]);

    const handleClick = () => {
        const targetSection = showContactIcon ? 'contact' : 'hero';
        scrollToSection(targetSection);
    };

    const buttonTitle = showContactIcon ? 'Get in touch' : 'Back to top';
    
    // We add an extra class `show-contact` to the button to control the icon animation
    const buttonClasses = `floating-action-btn ${isVisible ? 'visible' : ''} ${showContactIcon ? 'show-contact' : ''}`;

    return (
        <button 
            className={buttonClasses}
            onClick={handleClick}
            title={buttonTitle}
            aria-label={buttonTitle}
        >
            <div className="fab-icon-wrapper">
                <div className="fab-icon icon-top"><ArrowUpIcon /></div>
                <div className="fab-icon icon-contact"><MessageIcon /></div>
            </div>
        </button>
    );
};

export default FloatingActionButton;
