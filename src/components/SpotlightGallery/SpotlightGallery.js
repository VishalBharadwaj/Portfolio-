import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './SpotlightGallery.css';

const galleryItems = [
  { id: 1, type: 'image', url: '/Graphic designs/emcee.png' },
  { id: 2, type: 'image', url: '/Graphic designs/first art work.jpg' },
  { id: 3, type: 'image', url: '/Graphic designs/flowers0003.png' },
  { id: 4, type: 'image', url: '/Graphic designs/piscesXcancer 3.jpg' },
  { id: 5, type: 'image', url: '/Graphic designs/piscesXcancer.jpg' },
  { id: 6, type: 'image', url: '/Graphic designs/profile picture.png' },
  { id: 7, type: 'image', url: '/Graphic designs/third art work.png' },
  // Example video when you have one
  // { id: 8, type: 'video', url: '/Graphic designs/sample-video.mp4', imageUrl: '/Graphic designs/video-thumbnail.jpg' }, 
];

const SpotlightGallery = () => {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const itemRefs = useRef([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    const items = itemRefs.current;

    gsap.set(spotlight, { xPercent: -50, yPercent: -50 });

    let activeItem = null;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlight, { x, y, duration: 0.4, ease: 'power3.out' });

      let closestItem = null;
      let closestDist = Infinity;

      items.forEach((item, index) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left - rect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top - rect.top + itemRect.height / 2;
        const dist = Math.hypot(x - itemCenterX, y - itemCenterY);

        if (dist < closestDist) {
          closestDist = dist;
          closestItem = item;
        }
      });

      if (closestDist < 100 && closestItem !== activeItem) { // Magnetic threshold: 100px
        activeItem = closestItem;
        const activeIndex = items.indexOf(activeItem);
        
        const itemRect = activeItem.getBoundingClientRect();
        const itemCenterX = itemRect.left - rect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top - rect.top + itemRect.height / 2;

        gsap.to(spotlight, { x: itemCenterX, y: itemCenterY, duration: 0.3, ease: 'power2.out' });
        gsap.to(activeItem, { scale: 1.1, filter: 'brightness(1)', duration: 0.3 });
        
        const video = activeItem.querySelector('video');
        if (video) video.play();

        items.forEach(item => {
          if (item !== activeItem) {
            gsap.to(item, { scale: 1, filter: 'brightness(0.2)', duration: 0.3 });
            const otherVideo = item.querySelector('video');
            if(otherVideo) otherVideo.pause();
          }
        });
      } else if (closestDist >= 100 && activeItem) {
        gsap.to(items, { scale: 1, filter: 'brightness(0.2)', duration: 0.3 });
        const video = activeItem.querySelector('video');
        if (video) video.pause();
        activeItem = null;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', () => {
        gsap.to(items, { scale: 1, filter: 'brightness(0.2)', duration: 0.3 });
        if(activeItem) {
            const video = activeItem.querySelector('video');
            if (video) video.pause();
            activeItem = null;
        }
    });

    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="graphic-motion-design" className="spotlight-gallery-section">
      <div className="header-text">
        <h2>Graphic & Motion Design</h2>
        <p>Tools: Adobe Photoshop, Illustrator, After Effects, Premiere Pro</p>
      </div>
      <div ref={containerRef} className="spotlight-container">
        <div ref={spotlightRef} className="spotlight"></div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              className="gallery-item"
              onClick={() => handleItemClick(index)}
            >
              {item.type === 'video' ? (
                <video src={process.env.PUBLIC_URL + item.url} muted loop playsInline />
              ) : (
                <img src={process.env.PUBLIC_URL + item.url} alt={`Design ${item.id}`} />
              )}
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryItems.map(item => ({ src: process.env.PUBLIC_URL + item.url }))}
        index={activeIndex}
      />
    </section>
  );
};

export default SpotlightGallery;
