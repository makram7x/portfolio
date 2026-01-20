import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has hover capability (not touch-only)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let rafId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Animate circle with easing
    const animateCircle = () => {
      if (!prefersReducedMotion) {
        // Easing factor (lower = more lag)
        const ease = 0.15;
        circleX += (mouseX - circleX) * ease;
        circleY += (mouseY - circleY) * ease;

        if (circleRef.current) {
          circleRef.current.style.transform = `translate(${circleX}px, ${circleY}px)`;
        }
      } else {
        // No lag for reduced motion
        if (circleRef.current) {
          circleRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        }
      }

      rafId = requestAnimationFrame(animateCircle);
    };

    // Check for interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.btn') ||
        target.closest('.skill-card') ||
        target.closest('.tool-card') ||
        target.closest('.project-card') ||
        target.closest('.nav-link') ||
        target.closest('[role="button"]') ||
        target.classList.contains('clickable');

      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleElementHover);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    rafId = requestAnimationFrame(animateCircle);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleElementHover);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
      aria-hidden="true"
    >
      <div ref={dotRef} className="cursor-dot" />
      <div ref={circleRef} className="cursor-circle" />
    </div>
  );
};

export default CustomCursor;
