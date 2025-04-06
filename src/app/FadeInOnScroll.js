// components/FadeInOnScroll.js
import React, { useEffect, useRef, useState } from 'react';
import styles from './FadeInOnScroll.module.css'; // Import your CSS module

function FadeInOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const fadeInRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (fadeInRef.current) {
        const topPosition = fadeInRef.current.getBoundingClientRect().top;
        const bottomPosition = fadeInRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (topPosition < windowHeight && bottomPosition > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={fadeInRef} className={`${styles.fadeIn} ${isVisible ? styles.active : ''}`}>
      {children}
    </div>
  );
}

export default FadeInOnScroll;
