import React from 'react';
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
          backgroundImage: 'url("./ARCS C.jpg")',
          company: 'Autonomy Research Center for STEAHM (ARCS)',
          text: `Interdisciplinary Seminars <p></p>`,
          imageStyle: {backgroundSize: 'cover'},
          // link: './AGlimpseInside.pdf'
        },
        {
            backgroundImage: 'url("./lead.png")',
            company: 'Leadership as Engineering Professionals in High-Tech Firms',
            text: `Led leadership courses at CSUN <p></p>`,
            imageStyle: {backgroundSize: 'cover'},
          },
          {
            backgroundImage: 'url("./Con2.jpg")',
            company: '2021 IEEE International Power and Renewable Energy Conference',
            text: `Co-Author of "Energy Management & Hybridization of Nissan Leaf"<p></p>`,
            imageStyle: {backgroundSize: 'cover'},
          },
          // {
          //   backgroundImage: 'url("https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          //   company: 'COMPANY AND NAME AND YEAR',
          //   text: 'Conference Title Location Info',
          //   imageStyle: {backgroundSize: 'cover'},
          // },
          // {
          //   backgroundImage: 'url("https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          //   company: 'COMPANY AND NAME AND YEAR',
          //   text: 'Conference Title Location Info',
          //   imageStyle: {backgroundSize: 'cover'},
          // }
        // Add more items as needed
      ];
    

      // Slick settings
      const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMediumScreen ? 2 : isSmallScreen ? 1 : 2, // Adjust the number of slides to show
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };
return (
    <div  style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
        <h1>Public Speaking Engagements</h1>
        <div className={styles.publicspeaking}>
        <Slider style={{ margin: '5% 15%' }} {...slickSettings}>
          {carouselItems.map((item, index) => {
            const carouselContent = (
              <div className={styles.carousel_item}>
                <div className={styles.background_image} style={{ backgroundImage: item.backgroundImage, ...item.imageStyle }} />
                <div className={styles.overlay}>
                  <div className={montserrat.className}>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <p className={styles.text} dangerouslySetInnerHTML={{ __html: item.text }}></p>
                </div>
              </div>
            );

            return item.link ? (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                {carouselContent}
              </a>
            ) : (
              <div key={index}>
                {carouselContent}
              </div>
            );
          })}
        </Slider>
        </div>
    </div>
 
);
}

export default PublicSpeakingSection;
