import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoaded(true), 500); // Wait for animation
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Faster for a smoother feel

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className={`loading-screen ${isLoaded ? 'hidden' : ''}`}>
      <div className="loading-content">
        <div className="logo-container">
          <img 
            src="/profile_picture.png" 
            alt="Profile Logo" 
            className="loading-logo" 
          />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">Loading Portfolio</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
