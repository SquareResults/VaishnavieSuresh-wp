import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './publicspeaking.module.css'
// import Slider from 'react-slick';
// import FadeInOnScroll from './FadeInOnScroll';
// import { MyComponent } from './MyComponent';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

  const speakingEngagements = [
    {
      title: 'AUTONOMY RESEARCH CENTER FOR STEAHM (ARCS)',
      image: '/ARCS.jpg',
      description: 'Interdisciplinary Seminars',
    },
    {
      title: 'Leading as Engineers in High-Tech Companies',
      image: '/Leadership2.jpg',
      description: 'Led leadership sessions at CSUN',
    },
    {
      title: '2021 IEEE INTERNATIONAL POWER AND RENEWABLE ENERGY CONFERENCE',
      image: '/Con2.jpg',
      description: 'Co-Author of "Energy Management & Hybridization of Nissan Leaf"',
    },
  ];
  
  const PublicSpeakingSection = () => {
    return (
      <div className={styles.publicspeaking}>
        <div className={styles.gridContainer}>
          {speakingEngagements.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.redTitle}>{item.title}</h3>
              <img src={item.image} alt={item.title} className={styles.cardImage} />
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PublicSpeakingSection;
