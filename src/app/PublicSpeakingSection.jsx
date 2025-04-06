import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './publicspeaking.module.css'
import Slider from 'react-slick';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

const PublicSpeakingSection = ({isMediumScreen, isSmallScreen}) => {
    const carouselItems = [
        {
          backgroundImage: 'url("https://golocal24.com/wp-content/uploads/2014/12/BIAKelsey-Logo-1024x393.png")',
          company: '2011 and 2015',
          text: 'BIA/Kelsey Conference Panelist',
          imageStyle: { paddingTop: '10%' }
        },
        {
          backgroundImage: 'url("https://resource.localogy.com/hubfs/Localogy%20Excellence%20Awards%20%283%29.png")',
          company: 'speaker 2015',
          text: 'Localogy (formerly local search association)',
          imageStyle: {backgroundSize: 'cover'},
        },
        {
            backgroundImage: 'url("https://s3-prod.adage.com/s3fs-public/styles/width_660/public/20231211_BobLiodice-ANA-01112_3x2.jpg")',
            company: 'Telephone Directory Committee',
            text: 'Association of National Advertisers ',
            imageStyle: {backgroundSize: 'cover'},
          },
          {
            backgroundImage: 'url("https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            company: '',
            text: 'Association of Directory Marketing',
            imageStyle: {backgroundSize: 'cover'},
          }
        // Add more items as needed
      ];
    

      // Slick settings
      const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMediumScreen ? 3 : isSmallScreen ? 1 : 3, // Adjust the number of slides to show
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
return (
    <div  style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
        <h1>Public Speaking Engagements.</h1>
        <div className={styles.publicspeaking}>
        <Slider {...slickSettings}>
        {carouselItems.map((item, index) => (
            <div key={index} className={styles.carousel_item}>
            <div className={styles.background_image} style={{ backgroundImage: item.backgroundImage, ...item.imageStyle }} />
            <div className={styles.overlay}>
                <div className={montserrat.className}>
                <p className={styles.company}>{item.company}</p>
                </div>
                <p className={styles.text}>{item.text}</p>
            </div>
            </div>
        ))}
        </Slider>
        </div>
    </div>
 
);
}

export default PublicSpeakingSection;