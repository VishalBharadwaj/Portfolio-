// npm install swiper
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hackathons.css';

// Data structure for multiple hackathons
const hackathonsData = [
  {
    hackathonName: 'Brinhack 2025',
    award: '4th Place Overall & 1st in Side Quest',
    projectName: 'MemoPal: An AI-Powered Memory Aid',
    role: 'CV & AI Lead',
    description: 'MemoPal is a revolutionary application designed to assist individuals with memory impairments by leveraging state-of-the-art AI and computer vision. My primary role was to architect and implement the core computer vision pipeline for real-time analysis.',
    team: {
      name: 'Team CodePal',
      members: [
        { name: 'Vishal Bharadwaj', role: 'CV & AI Lead / Vision Whisperer' },
        { name: 'Vaibhav Kumar', role: 'Backend Dev / Logic Architect' },
        { name: 'SURESH M', role: 'Frontend Dev / UI Integrator' },
        { name: 'Aneesha Mishra', role: 'UI/UX Designer / Flow Magician' },
      ],
    },
    imageUrls: [
      '/Hackathon/1751541537923.jpg', // Featured
      '/Hackathon/1751541532629.jpg',
      '/Hackathon/1751541534913.jpg',
      '/Hackathon/1751541535291.jpg',
    ],
  },
  {
    hackathonName: 'SheKnowsAI Hackathon',
    award: 'Event Organizer & Technical Volunteer',
    projectName: 'An All-Women Generative AI Hackathon',
    role: 'Event Coordinator & AWS Services Support',
    description: 'As a key volunteer for the #SheKnowsAI hackathon, I played a hands-on role in event organization, logistics coordination, and providing technical support. This empowering all-women event, in partnership with Aspire For Her, challenged participants to innovate using a suite of AWS services including Bedrock, SageMaker, and Amazon Q. It was a rewarding experience to facilitate a space that fostered collaboration and hands-on learning.',
    keyPeople: {
      title: 'Key People & Acknowledgements',
      list: [
        'Shashank Chinchli, Solutions Architect at AWS',
        'Ruchita Tandon, Chief Growth Officer at Aspire For Her',
        'Madhura DasGupta Sinha, Founder & CEO of Aspire For Her',
        'Deepthi Chimakurthy, Business Development Manager at AWS',
        'Shreya Krishnan, Managing Director at AnitaB.org',
        'Mrs. Shilpa Patil, Professor, CSE Dept. at EPCET',
        'Dr. Prakash Sheelvanthmath, Senior Vice President of EPGI',
      ],
    },
    imageUrls: [
      '/Hackathon/Hackathon 2/1737204752001.jpg',
      '/Hackathon/Hackathon 2/1737204751991.jpg',
      '/Hackathon/Hackathon 2/1737204752638.jpg',
      '/Hackathon/Hackathon 2/1737204752806.jpg',
    ],
  }
];

const HackathonCard = ({ data }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="hackathon-card" ref={cardRef}>
      <div className="hackathon-text-content">
        <h3>{data.hackathonName} - <span className="award">{data.award}</span></h3>
        <h4>{data.projectName}</h4>
        <p className="role"><strong>My Role:</strong> {data.role}</p>
        <p>{data.description}</p>
                {data.team && (
          <div className="team-info">
            <h5>{data.team.name}</h5>
            <ul>
              {data.team.members.map((member, index) => (
                <li key={index}><strong>{member.name}</strong> - {member.role}</li>
              ))}
            </ul>
          </div>
        )}

        {data.keyPeople && (
          <div className="team-info">
            <h5>{data.keyPeople.title}</h5>
            <ul>
              {data.keyPeople.list.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="hackathon-image-gallery">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="hackathon-swiper"
        >
          {data.imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={process.env.PUBLIC_URL + url} alt={`${data.projectName} - slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Hackathons = ({ isActive }) => {
  return (
    <section id="hackathons" className={`hackathons-section ${isActive ? 'active' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Hackathons</h2>
        </div>
        <div className="hackathons-list">
          {hackathonsData.map((hackathon, index) => (
            <HackathonCard key={index} data={hackathon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
