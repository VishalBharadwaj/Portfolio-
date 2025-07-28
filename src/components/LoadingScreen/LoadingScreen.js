import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');
  const tilesRef = useRef(null);

  useEffect(() => {
    // Generate loading screen tiles
    if (tilesRef.current) {
      generateTiles();
    }
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Loading text animation
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const dots = prev.split('Loading')[1] || '';
        return 'Loading' + (dots.length >= 3 ? '' : dots + '.');
      });
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  // Generate animated tiles for loading screen
  const generateTiles = () => {
    const tilesContainer = tilesRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Clear existing tiles
    tilesContainer.innerHTML = '';
    
    // Calculate number of tiles based on screen size
    const tileSize = 60;
    const columns = Math.ceil(containerWidth / tileSize);
    const rows = Math.ceil(containerHeight / tileSize);
    
    // Create tiles grid
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const tile = document.createElement('div');
        tile.className = 'loading-tile';
        
        // Randomize tile animation delay for visual effect
        const delay = Math.random() * 2;
        tile.style.animationDelay = `${delay}s`;
        
        // Position tile
        tile.style.left = `${col * tileSize}px`;
        tile.style.top = `${row * tileSize}px`;
        
        // Add to container
        tilesContainer.appendChild(tile);
      }
    }
  };

  return (
    <div className="loading-screen">
      <div ref={tilesRef} className="loading-tiles"></div>
      <div className="loading-content">
        <div className="loading-logo">
          <div className="code-brackets">{'<>'}</div>
          <div className="loading-text">{loadingText}</div>
          <div className="code-brackets">{'</>'}</div>
        </div>
        <div className="progress-container">
          <div 
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
          <span className="progress-text">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
