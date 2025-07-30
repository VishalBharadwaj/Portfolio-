import React, { useRef, useEffect } from 'react';
import './StarfieldBackground.css';

const StarfieldBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let stars = [];
        const numStars = 200;
        const mouse = { x: null, y: null, radius: 100 };

        // --- Event Listeners ---
        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        });

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // --- Star Object ---
        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseRadius = Math.random() * 1.5 + 0.5;
                this.radius = this.baseRadius;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.density = Math.random() * 150 + 50;
                this.baseColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
                this.color = this.baseColor;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= forceDirectionX * force * this.density * 0.01;
                    this.y -= forceDirectionY * force * this.density * 0.01;
                    this.radius = this.baseRadius + force * 2;
                } else {
                    this.radius = this.baseRadius;
                }

                // Drifting motion
                this.x += this.speedX;
                this.y += this.speedY;

                // Boundary check
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                this.draw();
            }
        }

        function init() {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        }

        let animationFrameId;
        function animate() {
            ctx.clearRect(0, 0, width, height);
            stars.forEach(star => star.update());
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', () => {});
            window.removeEventListener('mousemove', () => {});
            window.removeEventListener('mouseout', () => {});
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="starfield-background"></canvas>;
};

export default StarfieldBackground;
