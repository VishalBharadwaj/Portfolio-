import React, { useEffect, useRef } from 'react';
import './BackgroundTiles.css';

const BackgroundTiles = () => {
  const tilesRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (tilesRef.current) {
        const scrollY = window.scrollY;
        // Move tiles slightly as user scrolls
        tilesRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Generate tiles
    if (tilesRef.current) {
      generateTiles();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const generateTiles = () => {
    const tilesContainer = tilesRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight * 3; // Make it taller than viewport
    
    // Clear existing tiles
    tilesContainer.innerHTML = '';
    
    // Calculate number of tiles based on screen size
    const tileSize = 80;
    const columns = Math.ceil(containerWidth / tileSize);
    const rows = Math.ceil(containerHeight / tileSize);
    
    // Create tiles grid
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const tile = document.createElement('div');
        tile.className = 'background-tile';
        
        // Randomize tile opacity for visual effect
        const opacity = 0.03 + Math.random() * 0.04;
        tile.style.opacity = opacity;
        
        // Position tile
        tile.style.left = `${col * tileSize}px`;
        tile.style.top = `${row * tileSize}px`;
        
        // Add to container
        tilesContainer.appendChild(tile);
      }
    }
  };
  
  return (
    <div className="background-tiles-container">
      <div ref={tilesRef} className="background-tiles"></div>
    </div>
  );
};

export default BackgroundTiles;