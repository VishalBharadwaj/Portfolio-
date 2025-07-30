import React, { useState, useEffect, useRef } from 'react';
import './InteractiveCursor.css';

const InteractiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [coverProps, setCoverProps] = useState({ width: 40, height: 40, borderRadius: '50%' });

  const follower = useRef({ x: 0, y: 0, vx: 0, vy: 0 }).current;
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const animate = () => {
      const targetX = mousePosition.current.x;
      const targetY = mousePosition.current.y;

      // Spring physics
      const stiffness = 0.1;
      const damping = 0.8;

      const dx = targetX - follower.x;
      const dy = targetY - follower.y;

      const ax = dx * stiffness;
      const ay = dy * stiffness;

      follower.vx += ax;
      follower.vy += ay;

      follower.vx *= damping;
      follower.vy *= damping;

      follower.x += follower.vx;
      follower.y += follower.vy;

      setFollowerPosition({ x: follower.x, y: follower.y });

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [follower]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const hoverableTarget = e.target.closest('.hoverable');
      if (hoverableTarget) {
        const rect = hoverableTarget.getBoundingClientRect();
        const styles = window.getComputedStyle(hoverableTarget);
        setIsHovering(true);
        setCoverProps({
          width: rect.width,
          height: rect.height,
          borderRadius: styles.borderRadius,
        });
      }
    };

    const handleMouseOut = (e) => {
        const hoverableTarget = e.target.closest('.hoverable');
        if (hoverableTarget) {
            setIsHovering(false);
            setCoverProps({ width: 40, height: 40, borderRadius: '50%' });
        }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const followerStyle = {
    left: `${followerPosition.x}px`,
    top: `${followerPosition.y}px`,
    width: `${coverProps.width}px`,
    height: `${coverProps.height}px`,
    borderRadius: coverProps.borderRadius,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <>
      <div className="cursor-dot" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      <div className="cursor-follower" style={followerStyle}></div>
    </>
  );
};

export default InteractiveCursor;
