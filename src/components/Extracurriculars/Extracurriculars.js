import React from 'react';
import './Extracurriculars.css';

const Extracurriculars = ({ isActive }) => {
  const extracurriculars = [
    {
      title: 'Master of Ceremonies',
      icon: '🎤',
      description: 'Hosting and engaging audiences at various events.',
      details: {
        type: 'gallery',
        items: [
          // Add your image data here, for example:
          // { src: '/path/to/image1.jpg', caption: 'Hosting at XYZ event' },
          // { src: '/path/to/image2.jpg', caption: 'MC at ABC conference' },
        ],
      },
    },

    {
      title: 'Hackathons',
      icon: '💻',
      description: 'Innovative projects and solutions developed during hackathons.',
      details: {
        type: 'list',
        items: [
          // Add your hackathon data here, for example:
          // { name: 'Hack a Web', project: 'Portfolio-', position: '1st Place' },
          // { name: 'Innovate for India', project: 'Agri-Tech Solution', role: 'Team Lead' },
        ],
      },
    },
  ];

  return (
    <section id="extracurriculars" className={`extracurriculars-section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Extracurriculars</h2>
          <p className="section-subtitle">My passions and achievements beyond the code</p>
        </div>
        <div className="extracurriculars-grid">
          {extracurriculars.map((activity, index) => (
            <div key={index} className="extracurricular-card">
              <div className="extracurricular-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              {/* We can add more detailed views here later */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
