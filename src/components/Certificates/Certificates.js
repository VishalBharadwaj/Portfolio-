import React from 'react';
import './Certificates.css';

const Certificates = ({ isActive }) => {
  const certificates = [
    {
      title: 'Professional Certificates',
      icon: '📜',
      description: 'A collection of my professional and academic certifications.',
      items: [
        // Add your certificate data here, for example:
        // { name: 'React Nanodegree', issuer: 'Udacity' },
        // { name: 'AWS Certified Developer', issuer: 'Amazon Web Services' },
      ],
    },
    {
      title: 'Chess Achievements',
      icon: '♟️',
      description: 'My journey and accomplishments in the world of chess.',
      items: [
        // Add your chess certificate data here, for example:
        // { name: 'State Level Champion', year: '2022' },
        // { name: 'Rated Player', rating: '1800' },
      ],
    },
  ];

  return (
    <section id="certificates" className={`certificates-section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Certificates</h2>
          <p className="section-subtitle">My credentials and achievements</p>
        </div>
        <div className="certificates-grid">
          {certificates.map((category, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              {/* We can list the items here later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
