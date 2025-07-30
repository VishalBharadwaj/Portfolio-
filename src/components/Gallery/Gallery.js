import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Gallery.css';

const imageRows = [
  [
    '/Gallery/row 1/IMG-20230402-WA0002.jpg',
    '/Gallery/row 1/IMG-20230402-WA0003.jpg',
    '/Gallery/row 1/IMG-20230402-WA0004.jpg',
    '/Gallery/row 1/IMG-20230402-WA0005.jpg',
    '/Gallery/row 1/IMG-20230402-WA0006.jpg',
    '/Gallery/row 1/IMG-20230402-WA0007.jpg',
    '/Gallery/row 1/IMG-20230402-WA0008.jpg',
    '/Gallery/row 1/IMG-20230403-WA0001.jpg',
    '/Gallery/row 1/IMG-20230403-WA0002.jpg',
    '/Gallery/row 1/IMG-20230403-WA0023.jpg',
    '/Gallery/row 1/IMG-20230403-WA0024.jpg',
    '/Gallery/row 1/IMG-20230403-WA0025.jpg',
    '/Gallery/row 1/IMG-20230403-WA0026.jpg',
    '/Gallery/row 1/IMG-20230403-WA0027.jpg',
    '/Gallery/row 1/IMG-20230403-WA0028.jpg',
    '/Gallery/row 1/IMG-20230403-WA0029.jpg',
    '/Gallery/row 1/IMG-20230403-WA0030.jpg',
    '/Gallery/row 1/IMG-20230403-WA0031.jpg',
    '/Gallery/row 1/IMG-20230403-WA0032.jpg',
    '/Gallery/row 1/IMG-20230403-WA0033.jpg',
    '/Gallery/row 1/IMG-20230403-WA0034.jpg',
    '/Gallery/row 1/IMG-20230403-WA0035.jpg',
    '/Gallery/row 1/IMG-20230403-WA0036.jpg',
    '/Gallery/row 1/IMG-20230403-WA0037.jpg',
    '/Gallery/row 1/IMG-20230403-WA0038.jpg',
    '/Gallery/row 1/IMG-20230403-WA0039.jpg',
  ],
  [
    '/Gallery/row 2/NVP03820.JPG',
    '/Gallery/row 2/NVP03821.JPG',
    '/Gallery/row 2/NVP03922.JPG',
    '/Gallery/row 2/NVP03923.JPG',
    '/Gallery/row 2/NVP03924.JPG',
    '/Gallery/row 2/NVP03925.JPG',
    '/Gallery/row 2/NVP04342.JPG',
    '/Gallery/row 2/NVP04343.JPG',
    '/Gallery/row 2/NVP04344.JPG',
    '/Gallery/row 2/NVP04345.JPG',
    '/Gallery/row 2/NVP04346.JPG',
    '/Gallery/row 2/NVP04347.JPG',
    '/Gallery/row 2/NVP04348.JPG',
    '/Gallery/row 2/NVP09659.JPG',
    '/Gallery/row 2/NVP09660.JPG',
    '/Gallery/row 2/NVP09661.JPG',
    '/Gallery/row 2/NVP09662.JPG',
    '/Gallery/row 2/NVP09663.JPG',
    '/Gallery/row 2/NVP09664.JPG',
  ],
  [
    '/Gallery/row 3/RM__5731.JPG',
    '/Gallery/row 3/RM__5857.JPG',
    '/Gallery/row 3/RM__5860.JPG',
    '/Gallery/row 3/RM__5861.JPG',
    '/Gallery/row 3/RM__5862.JPG',
    '/Gallery/row 3/RM__5863.JPG',
    '/Gallery/row 3/RM__5864.JPG',
    '/Gallery/row 3/RM__5865.JPG',
    '/Gallery/row 3/RM__5867.JPG',
    '/Gallery/row 3/RM__5868.JPG',
    '/Gallery/row 3/RM__5869.JPG',
    '/Gallery/row 3/RM__5870.JPG',
    '/Gallery/row 3/RM__5871.JPG',
    '/Gallery/row 3/RM__5872.JPG',
    '/Gallery/row 3/RM__5873.JPG',
    '/Gallery/row 3/RM__5874.JPG',
    '/Gallery/row 3/RM__5875.JPG',
    '/Gallery/row 3/RM__5876.JPG',
    '/Gallery/row 3/RM__5877.JPG',
    '/Gallery/row 3/RM__5878.JPG',
    '/Gallery/row 3/RM__5879.JPG',
    '/Gallery/row 3/RM__5880.JPG',
  ],
  [
    '/Gallery/row 4/DSC04171.JPG',
    '/Gallery/row 4/DSC04176.JPG',
    '/Gallery/row 4/DSC06047.JPG',
    '/Gallery/row 4/DSC06048.JPG',
    '/Gallery/row 4/RM__2382.JPG',
    '/Gallery/row 4/RM__2383.JPG',
    '/Gallery/row 4/RM__2384.JPG',
    '/Gallery/row 4/RM__2385.JPG',
    '/Gallery/row 4/RM__2386.JPG',
    '/Gallery/row 4/RM__2387.JPG',
    '/Gallery/row 4/RM__2388.JPG',
    '/Gallery/row 4/RM__2389.JPG',
    '/Gallery/row 4/RM__2390.JPG',
  ],
  [
    '/Gallery/row 5/DSC00358.JPG',
    '/Gallery/row 5/DSC00359.JPG',
    '/Gallery/row 5/DSC00360.JPG',
    '/Gallery/row 5/DSC00361.JPG',
    '/Gallery/row 5/DSC00362.JPG',
    '/Gallery/row 5/WAC00815.JPG',
    '/Gallery/row 5/WAC00913.JPG',
    '/Gallery/row 5/WAC00914.JPG',
    '/Gallery/row 5/WAC00915.JPG',
  ],
  [
    '/Gallery/row 6/DSC02415.JPG',
    '/Gallery/row 6/DSC02416.JPG',
    '/Gallery/row 6/DSC02417.JPG',
    '/Gallery/row 6/DSC02418.JPG',
    '/Gallery/row 6/DSC02419.JPG',
    '/Gallery/row 6/DSC03243.JPG',
    '/Gallery/row 6/IMG-20250426-WA0170.jpg',
    '/Gallery/row 6/IMG-20250426-WA0176.jpg',
    '/Gallery/row 6/IMG-20250426-WA0187.jpg',
    '/Gallery/row 6/IMG-20250426-WA0195.jpg',
    '/Gallery/row 6/IMG-20250426-WA0210.jpg',
    '/Gallery/row 6/IMG-20250426-WA0211.jpg',
  ],
];

const GalleryRow = ({ images, isScrollLeft }) => {
  const innerRowRef = useRef(null);

  useEffect(() => {
    const innerRow = innerRowRef.current;
    if (!innerRow) return;

    // GSAP animation for a seamless loop
    const tween = gsap.to(innerRow, {
      xPercent: isScrollLeft ? -50 : 0,
      ease: 'none',
      duration: 80, // Adjust duration as needed
      repeat: -1, // Infinite loop
    });

    // Set initial position for right-scrolling rows
    if (!isScrollLeft) {
      gsap.set(innerRow, { xPercent: -50 });
    }

    // Pause on hover
    const rowElement = innerRow.parentElement;
    rowElement.addEventListener('mouseenter', () => tween.pause());
    rowElement.addEventListener('mouseleave', () => tween.play());

    return () => {
      rowElement.removeEventListener('mouseenter', () => tween.pause());
      rowElement.removeEventListener('mouseleave', () => tween.play());
      tween.kill();
    };
  }, [isScrollLeft]);

  return (
    <div className={`gallery-row ${isScrollLeft ? 'scroll-left' : 'scroll-right'}`}>
      <div className="gallery-inner-row" ref={innerRowRef}>
        {[...images, ...images].map((image, imgIndex) => (
          <img key={imgIndex} src={process.env.PUBLIC_URL + image} alt={`Gallery image`} />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2>Visual Diary</h2>
        <p>A collection of moments, projects, and inspirations.</p>
      </div>
      <div className="gallery-container">
        {imageRows.map((row, rowIndex) => (
          <GalleryRow key={rowIndex} images={row} isScrollLeft={rowIndex % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
