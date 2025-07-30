import React, { useEffect, useRef } from 'react';
import './Hackathons.css';

const hackathonDetails = {
  title: 'Brinhack 2025',
  awards: '4th Place Overall & 1st in Side Quest',
  projectName: 'MemoPal: An AI-Powered Memory Aid',
  myRole: 'CV & AI Lead',
  description: 'MemoPal is a revolutionary application designed to assist individuals with memory impairments by leveraging state-of-the-art AI and computer vision. The system captures real-time video, identifies known individuals, and provides instant on-screen information about them, helping users recall names and context. My primary role was to architect and implement the core computer vision pipeline, including facial recognition, and integrate the AI models for real-time analysis.',
  team: {
    name: 'Team CodePal',
    members: [
      { name: 'Vishaal', role: 'CV & AI Lead' },
      { name: 'Person 2', role: 'Frontend Dev' },
      { name: 'Person 3', role: 'Backend Dev' },
      { name: 'Person 4', role: 'UI/UX Designer' },
    ],
  },
  images: [
    '/Hackathon/1751541532629.jpg',
    '/Hackathon/1751541534913.jpg',
    '/Hackathon/1751541535291.jpg',
    '/Hackathon/1751541535790.jpg',
    '/Hackathon/1751541537005.jpg',
    '/Hackathon/1751541537923.jpg',
  ],
};

const Hackathons = ({ isActive }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <section id="hackathons" className={`hackathons-section ${isActive ? 'active' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="hackathon-header">
          <h1>{hackathonDetails.title}</h1>
          <p className="hackathon-awards">{hackathonDetails.awards}</p>
        </div>
        <div className="hackathon-content">
          <div className="hackathon-text">
            <h2>{hackathonDetails.projectName}</h2>
            <h3><strong>My Role:</strong> {hackathonDetails.myRole}</h3>
            <p>{hackathonDetails.description}</p>
            <div className="team-showcase">
              <h4>{hackathonDetails.team.name}</h4>
              <ul>
                {hackathonDetails.team.members.map((member, index) => (
                  <li key={index}><strong>{member.name}</strong> - {member.role}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hackathon-gallery">
            {hackathonDetails.images.map((image, index) => (
              <div className="gallery-image" key={index}>
                <img src={process.env.PUBLIC_URL + image} alt={`Brinhack 2025 - Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
