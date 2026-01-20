import { useEffect, useRef, useState } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split text into words and characters
  const renderAnimatedText = (text) => {
    if (typeof text !== 'string') {
      // Handle React elements (like spans with accent-text)
      return text;
    }

    const words = text.split(' ');
    let charIndex = 0;

    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="animated-word">
        {word.split('').map((char, index) => {
          const currentCharIndex = charIndex++;
          return (
            <span
              key={index}
              className={`animated-char ${isVisible ? 'animate' : ''}`}
              style={{
                animationDelay: `${delay + currentCharIndex * 0.04}s`,
              }}
            >
              {char}
            </span>
          );
        })}
        {wordIndex < words.length - 1 && (
          <span className="animated-space">&nbsp;</span>
        )}
      </span>
    ));
  };

  // Process children - handle both text and React elements
  const processChildren = (children) => {
    return Array.isArray(children)
      ? children.map((child, index) => {
          if (typeof child === 'string') {
            return <span key={index}>{renderAnimatedText(child)}</span>;
          }
          // For React elements like <span className="accent-text">
          if (child?.props?.children) {
            const childCharIndex =
              typeof children[0] === 'string' ? children[0].replace(/\s/g, '').length : 0;
            return (
              <span
                key={index}
                className={child.props.className || ''}
              >
                {typeof child.props.children === 'string'
                  ? child.props.children.split('').map((char, i) => (
                      <span
                        key={i}
                        className={`animated-char ${isVisible ? 'animate' : ''}`}
                        style={{
                          animationDelay: `${delay + (childCharIndex + i) * 0.04}s`,
                        }}
                      >
                        {char}
                      </span>
                    ))
                  : child.props.children}
              </span>
            );
          }
          return child;
        })
      : renderAnimatedText(children);
  };

  return (
    <span ref={containerRef} className={`animated-text ${className}`}>
      {processChildren(children)}
    </span>
  );
};

export default AnimatedText;
