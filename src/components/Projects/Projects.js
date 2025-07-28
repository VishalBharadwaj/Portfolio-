import React, { useState } from 'react';
import './Projects.css';

// Import project images
import ecommerceImage from '../../assets/images/ecommerce-placeholder.svg';
import taskManagementImage from '../../assets/images/task-management-placeholder.svg';
import analyticsDashboardImage from '../../assets/images/analytics-dashboard-placeholder.svg';

const Projects = ({ isActive }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      image: ecommerceImage,
      techStack: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      image: taskManagementImage,
      techStack: ['Vue.js', 'Socket.io', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with interactive charts and reports',
      image: analyticsDashboardImage,
      techStack: ['Python', 'Django', 'D3.js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className={`projects-section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Recent work that showcases my capabilities</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                  <a href={project.link} className="view-project" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
