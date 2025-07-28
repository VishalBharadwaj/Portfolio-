import React from 'react';
import './About.css';

// --- SVG Icons for Skills ---
const ReactIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M12.001 2.002c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm0 18.002c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3.488-2.652c-.312.312-.312.818 0 1.13.312.312.818.312 1.13 0l2.358-2.358 2.358 2.358c.312.312.818.312 1.13 0 .312-.312.312-.818 0-1.13l-2.358-2.358 2.358-2.358c.312-.312.312-.818 0-1.13-.312-.312-.818-.312-1.13 0l-2.358 2.358-2.358-2.358c-.312-.312-.818-.312-1.13 0-.312.312-.312.818 0 1.13l2.358 2.358-2.358 2.358z" fill="currentColor"/></svg>;
const NodeIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.27 15.997h-1.53V9.34l-2.162.38v-1.31l3.6-1.02h.092v10.607zm4.24-4.86c0 1.103-.323 1.99-.97 2.66-.646.67-1.53.997-2.65.997h-2.15V8.26h2.15c1.12 0 2.004.328 2.65.984.647.656.97 1.54.97 2.643zm-1.46 0c0-.82-.21-1.44-.63-1.86-.42-.42-.98-.63-1.68-.63h-.6v4.98h.6c.7 0 1.26-.21 1.68-.63.42-.42.63-1.04.63-1.86z" fill="currentColor"/></svg>;
const AWSIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon AWS</title><path d="M13.61 2.35a1 1 0 00-1.22 0l-7.48 7.48a1 1 0 00.71 1.71h3.73l-2.6 4.34a1 1 0 001.74 1.04l7.48-7.48a1 1 0 00-.7-1.71h-3.74l2.6-4.34a1 1 0 00-1.72-1.04z" fill="currentColor"/></svg>;
const LeadershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const ChessIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a2 2 0 0 0-2-2h-1.5a2.5 2.5 0 1 0-5 0H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z"/><path d="M12 2v2"/><path d="M12 17v2"/><path d="M12 17a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/><path d="M12 17a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2"/><path d="M4 17h16"/></svg>;
const ProblemSolvingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;

const About = ({ isActive }) => {
    const skills = [
        { name: 'React', icon: <ReactIcon /> },
        { name: 'Node.js', icon: <NodeIcon /> },
        { name: 'AWS', icon: <AWSIcon /> },
        { name: 'Leadership', icon: <LeadershipIcon /> },
        { name: 'Strategy', icon: <ChessIcon /> },
        { name: 'Problem Solving', icon: <ProblemSolvingIcon /> },
    ];
    
    return (
        <section id="about" className={`about-section ${isActive ? 'active' : ''}`}>
            <div className="container">
                <div className="section-header">
                    <h2>About Me</h2>
                    <p className="section-subtitle">Developer, Leader, and Strategic Thinker</p>
                </div>
                <div className="about-content">
                    <div className="about-image">
                        <img 
                            src="https://placehold.co/500x600/1F2937/FFFFFF?text=Vishal" 
                            alt="Vishal Bharadwaj" 
                            className="profile-picture"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x600'; }}
                        />
                    </div>
                    <div className="about-text">
                        <p>
                            My journey into technology began long before my first line of professional code. From competing in code battles as a teenager to serving as my school's IT Head, I've always been driven to solve real-world problems. During the first wave of COVID-19, this led me to develop a facial recognition attendance app to help teachers adapt to new challenges.
                        </p>
                        <p>
                            Beyond technology, I thrive in leadership roles that demand strategic thinking and meticulous planning. As Cultural President and a district-level chess champion, I've learned how to build trust within a team and execute complex plans with a sharp eye for detail. Today, I'm channeling this diverse skill set into my pursuit of full-stack development and expertise in AWS cloud computing, eager to build the next generation of innovative and user-centric applications.
                        </p>
                        <h3 className="skills-header">Key Skills & Attributes</h3>
                        <div className="skills-grid">
                            {skills.map(skill => (
                                <div key={skill.name} className="skill-item">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
