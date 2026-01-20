import { useEffect, useRef, useState } from 'react';
import './FloatingElements.css';

const FloatingElements = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    let targetMouse = { x: 0, y: 0 };

    const animate = () => {
      // Smooth lerp for mouse position
      smoothMouseRef.current.x += (targetMouse.x - smoothMouseRef.current.x) * 0.08;
      smoothMouseRef.current.y += (targetMouse.y - smoothMouseRef.current.y) * 0.08;

      setMousePos({ ...smoothMouseRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      targetMouse = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const elements = [
    // Elegant arc brush stroke - top right
    {
      id: 'arc-stroke',
      scrollSpeed: 0.15,
      mouseSpeed: 20,
      rotationFactor: 0.02,
      style: { top: '8%', right: '8%' },
      className: 'float-slow',
      svg: (
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M20 140 Q80 20 140 80"
            stroke="url(#arcGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M30 130 Q85 30 135 85"
            stroke="var(--primary)"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeDasharray="4 8"
            fill="none"
            opacity="0.3"
          />
        </svg>
      ),
    },
    // Concentric rings - left side
    {
      id: 'rings',
      scrollSpeed: 0.25,
      mouseSpeed: 12,
      rotationFactor: -0.01,
      style: { top: '25%', left: '3%' },
      className: 'float-medium',
      svg: (
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="80" stroke="var(--secondary)" strokeWidth="0.5" opacity="0.15" />
          <circle cx="90" cy="90" r="60" stroke="var(--secondary)" strokeWidth="0.5" opacity="0.2" />
          <circle cx="90" cy="90" r="40" stroke="var(--primary)" strokeWidth="1" strokeDasharray="2 6" opacity="0.3" />
          <circle cx="90" cy="90" r="20" fill="var(--primary)" opacity="0.05" />
        </svg>
      ),
    },
    // Abstract cross/plus - middle right
    {
      id: 'abstract-cross',
      scrollSpeed: 0.35,
      mouseSpeed: 18,
      rotationFactor: 0.03,
      style: { top: '45%', right: '5%' },
      className: 'float-fast',
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <line x1="50" y1="10" x2="50" y2="90" stroke="var(--primary)" strokeWidth="1" opacity="0.25" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="var(--primary)" strokeWidth="1" opacity="0.25" />
          <circle cx="50" cy="50" r="4" fill="var(--primary)" opacity="0.4" />
        </svg>
      ),
    },
    // Flowing curve - bottom left
    {
      id: 'flow-curve',
      scrollSpeed: 0.2,
      mouseSpeed: 15,
      rotationFactor: 0.015,
      style: { top: '65%', left: '5%' },
      className: 'float-slow',
      svg: (
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 Q50 20 100 60 T200 60"
            stroke="url(#flowGrad)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 70 Q50 30 100 70 T200 70"
            stroke="var(--secondary)"
            strokeWidth="0.5"
            strokeDasharray="3 6"
            fill="none"
            opacity="0.2"
          />
        </svg>
      ),
    },
    // Scattered dots constellation - top left
    {
      id: 'constellation',
      scrollSpeed: 0.3,
      mouseSpeed: 25,
      rotationFactor: -0.02,
      style: { top: '12%', left: '15%' },
      className: 'float-medium',
      svg: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="20" cy="30" r="2" fill="var(--primary)" opacity="0.5" />
          <circle cx="60" cy="15" r="1.5" fill="var(--primary)" opacity="0.3" />
          <circle cx="100" cy="40" r="2.5" fill="var(--primary)" opacity="0.4" />
          <circle cx="45" cy="60" r="1" fill="var(--primary)" opacity="0.25" />
          <circle cx="80" cy="80" r="2" fill="var(--primary)" opacity="0.35" />
          <circle cx="30" cy="95" r="1.5" fill="var(--primary)" opacity="0.3" />
          <line x1="20" y1="30" x2="60" y2="15" stroke="var(--primary)" strokeWidth="0.3" opacity="0.15" />
          <line x1="60" y1="15" x2="100" y2="40" stroke="var(--primary)" strokeWidth="0.3" opacity="0.15" />
          <line x1="45" y1="60" x2="80" y2="80" stroke="var(--primary)" strokeWidth="0.3" opacity="0.15" />
        </svg>
      ),
    },
    // Geometric diamond - bottom right
    {
      id: 'diamond',
      scrollSpeed: 0.4,
      mouseSpeed: 22,
      rotationFactor: 0.025,
      style: { top: '75%', right: '10%' },
      className: 'float-fast',
      svg: (
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
          <path
            d="M40 5 L75 50 L40 95 L5 50 Z"
            stroke="var(--secondary)"
            strokeWidth="1"
            fill="var(--secondary)"
            fillOpacity="0.03"
            opacity="0.4"
          />
          <path
            d="M40 20 L60 50 L40 80 L20 50 Z"
            stroke="var(--primary)"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            fill="none"
            opacity="0.3"
          />
        </svg>
      ),
    },
    // Spiral accent - middle left
    {
      id: 'spiral',
      scrollSpeed: 0.18,
      mouseSpeed: 14,
      rotationFactor: -0.035,
      style: { top: '50%', left: '10%' },
      className: 'float-medium',
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 50 Q50 30 70 30 Q90 30 90 50 Q90 70 70 70 Q50 70 50 50"
            stroke="var(--primary)"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.25"
          />
          <path
            d="M50 50 Q50 40 60 40 Q70 40 70 50 Q70 60 60 60"
            stroke="var(--primary)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="floating-elements" aria-hidden="true">
      {elements.map((el) => {
        const translateY = scrollY * el.scrollSpeed;
        const translateX = mousePos.x * el.mouseSpeed;
        const translateYMouse = mousePos.y * el.mouseSpeed * 0.5;
        const rotation = (mousePos.x + mousePos.y) * el.rotationFactor * 100;

        return (
          <div
            key={el.id}
            className={`floating-element ${el.className || ''}`}
            style={{
              ...el.style,
              transform: `translate(${translateX}px, ${translateY + translateYMouse}px) rotate(${rotation}deg)`,
            }}
          >
            {el.svg}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
