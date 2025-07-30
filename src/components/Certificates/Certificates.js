import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Certificates.css';

const Certificates = ({ isActive }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificateImages = [
    'AWS.png',
    'Cisco_IOT.png',
    'Cisco_NetworkingBasics.png',
    'Google Assets Threats and Vulnerabilities-1.png',
    'Google Automate Cybersecurity Tasks with Python-1.png',
    'Google Connect and Protect Networks and Network-1.png',
    'Google Foundations of CyberSecurity-1.png',
    'Google Play it Safe Manage Security Risks-1.png',
    'Google Put it to Work Prepare for Cybersecurity Jobs-1.png',
    'Google Sound the Alarm Detection and Response-1.png',
    'Google Tools of Trade Linux and SQL-1.png',
    'Google_AI.png',
    'Google_Cybersecurity.png',
    'Google_DigitalMarketing .png',
    'Infosys_DBMS.png',
    'Infosys_DSA.png',
    'Infosys_SM.png',
    'Infosys_VLSI.png',
    'Introduction_to_Data_Science_Badge20230709-28-dwi4ru-1.png',
    'Microsoft Excel 2019 Essentials-1.png',
    'Microsoft Word 2019 Essentials-1.png',
    'Microsoft Word 2019 Pro-1.png',
    'PluralSight_ML.png',
    'Python-The Big Picture-1.png'
  ];

  // Duplicate the array for a seamless loop
  const extendedCertificates = [...certificateImages, ...certificateImages];

  const handleCertificateClick = (image) => {
    setSelectedCert(`/Course Certificates/${image}`);
    setModalOpen(true);
  };

  return (
    <>
      <section id="certificates" className={`certificates-section ${isActive ? 'active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Course Certifications</h2>
            <p className="section-subtitle">A showcase of my certifications from various online courses</p>
          </div>
        </div>
        <div className="scrolling-gallery-container">
          <div className="scrolling-gallery">
            {extendedCertificates.map((cert, index) => (
              <div className="gallery-item" key={index} onClick={() => handleCertificateClick(cert)}>
                <img src={`/Course Certificates/${cert}`} alt={`Certificate ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {selectedCert && <img src={selectedCert} alt="Selected Certificate" className="modal-certificate-image" />}
      </Modal>
    </>
  );
};

export default Certificates;
