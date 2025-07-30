import React, { useState, useEffect } from 'react';
import './Header.css'; // Make sure to link the new CSS file

// --- SVG Icons (for a cleaner look) ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.0-3.1-.73-.8-2.3-.8-3.1.0zM12 15.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.0-3.1-.73-.8-2.3-.8-3.1.0z"/><path d="m22 2-1.5 1.5M13.5 5.5 12 7l1.5 1.5M16.5 8.5 15 10l1.5 1.5M19.5 11.5 18 13l1.5 1.5"/><path d="m22 2-7 7"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>;
const CertificateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const TrophyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
const ImageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
const BrushIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.06 11.9 3.42 17.53a2.83 2.83 0 0 0 4 4L13.1 15.8"/><path d="m21.7 2.2-1.4 1.4"/><path d="M15.8 8.9 3.42 21.27"/><path d="m21.7 2.2-1.4 1.4"/><path d="m15.8 8.9 3.4-3.4"/><path d="M9.06 11.9 3.42 17.53a2.83 2.83 0 0 0 4 4L13.1 15.8"/><path d="M14.7 15.3 21 9l-4-4-6.3 6.3"/><path d="M9 8.5h.01"/></svg>;

const Header = ({ activeSection, scrollToSection, theme, toggleTheme, toast }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

        const navItems = [
        { id: 'about', label: 'About', icon: <UserIcon /> },
        { id: 'certificates', label: 'Certificates', icon: <CertificateIcon /> },
        { id: 'hackathons', label: 'Hackathons', icon: <TrophyIcon /> },
        { id: 'performances', label: 'Performances', icon: <ZapIcon /> },
        { id: 'projects', label: 'Projects', icon: <RocketIcon /> },
        { id: 'gallery', label: 'Gallery', icon: <ImageIcon /> },
        { id: 'designs', label: 'Designs', icon: <BrushIcon /> },
        { id: 'contact', label: 'Contact', icon: <MailIcon /> }
    ];

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMobileMenuOpen(false);
    };


    
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <button onClick={() => scrollToSection('hero')} className="logo-btn">
                        <img src="/profile_picture.png" alt="Vishal Bharadwaj" className="logo-image" />
                    </button>
                </div>

                <div className="header-right">
                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button 
                                        onClick={() => handleNavClick(item.id)}
                                        className={`${activeSection === item.id ? 'active' : ''} hoverable`}
                                    >   
                                        <span className="nav-icon">{item.icon}</span>
                                        <span className="nav-label">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <div className="theme-toggle-wrapper">
                            <button className="theme-toggle hoverable" onClick={toggleTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                            </button>
                            {toast.show && (
                                <div key={toast.key} className="theme-toast">
                                    {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                                    <span>{toast.message}</span>
                                </div>
                            )}
                        </div>
                        
                        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                            {isMobileMenuOpen ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
