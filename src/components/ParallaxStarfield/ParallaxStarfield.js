import React, { useRef, useEffect } from 'react';
import './ParallaxStarfield.css';

const ParallaxStarfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars = [];
    const numStars = 500;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        depth: Math.random() * 3 + 1, // Depth for parallax effect
      });
    }

    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    let scrollY = 0;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        const parallaxX = (mouse.x - canvas.width / 2) / star.depth / 50;
        const parallaxY = (mouse.y - canvas.height / 2) / star.depth / 50;
        const scrollParallax = (scrollY / star.depth) / 10;

        ctx.beginPath();
        ctx.arc(star.x - parallaxX, (star.y - parallaxY - scrollParallax) % canvas.height, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="parallax-starfield"></canvas>;
};

export default ParallaxStarfield;
