import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ isActive }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={`contact-section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Work Together</h2>
            <p>
              Ready to bring your ideas to life? I'm available for freelance projects 
              and full-time opportunities.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Your City, Country</span>
              </div>
              <div className="contact-item">
                <strong>Response Time:</strong>
                <span>Within 24 hours</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
