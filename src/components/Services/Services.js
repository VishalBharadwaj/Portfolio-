import React from 'react';
import './Services.css';

const Services = ({ isActive }) => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, responsive web applications using React, Vue.js, and Node.js'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud architecture using AWS, Azure, and Google Cloud Platform'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps with React Native and Flutter'
    },
    {
      icon: '🔧',
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with robust security and documentation'
    }
  ];

  return (
    <section id="services" className={`services-section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Services</h2>
          <p className="section-subtitle">Comprehensive software development solutions</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;