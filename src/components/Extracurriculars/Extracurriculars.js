import React, { useEffect, useRef } from 'react';
import './Extracurriculars.css';

const performances = [
  {
    event: 'Samskruthi 2k23',
    headline: 'Opened for Benny Dayal',
    audience: '8,000+ People',
    image: '/Master of Ceremonies/samksruthi2k23.jpg',
  },
  {
    event: 'Samskruthi 2k24',
    headline: 'Opened for Jonita Gandhi',
    audience: '10,000+ People',
    image: '/Master of Ceremonies/samskruthi2k24.png',
  },
  {
    event: 'Samskruthi 2k25',
    headline: 'Opened for Sonu Nigam',
    audience: '15,000+ People',
    image: '/Master of Ceremonies/samskruthi2k25.JPG',
  },
];

const Extracurriculars = ({ isActive }) => {
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

    const elements = sectionRef.current.querySelectorAll('.performance-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="extracurriculars" className={`extracurriculars-section ${isActive ? 'active' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Performance Highlights</h2>
          <p className="section-subtitle">Key moments on stage as a Master of Ceremonies</p>
        </div>
        <div className="performance-list">
          {performances.map((perf, index) => (
            <div key={index} className={`performance-card ${index % 2 !== 0 ? 'layout-reversed' : ''}`}>
              <div className="performance-image">
                <img src={process.env.PUBLIC_URL + perf.image} alt={perf.headline} />
              </div>
              <div className="performance-details">
                <span className="event-tag">{perf.event}</span>
                <h3>{perf.headline}</h3>
                <p>{perf.audience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
