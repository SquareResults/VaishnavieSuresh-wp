// components/FadeInOnLoad.js
import React, { useState, useEffect } from 'react';
import styles from './FadeInOnLoad.module.css';

function FadeInOnLoad({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true when the component mounts to trigger the fade-in animation
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.fadeIn} ${isVisible ? styles.active : ''}`}>
      {children}
    </div>
  );
}

export default FadeInOnLoad;
