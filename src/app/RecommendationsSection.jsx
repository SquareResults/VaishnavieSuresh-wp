import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './recommendations.module.css'
import Slider from 'react-slick';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RecommendationsSection = ({isMediumScreen, isSmallScreen}) => {

    
    const carouselItems = [
        {
            "author": "Mark Burks",
            "quote": "I had the pleasure of working closely with Vaishnavie Suresh, and I am continually impressed by her exceptional dedication and expertise as an Operations Manager at SquareResults. Vaishnavie's ability to streamline processes and optimize workflows has been instrumental in driving our team's success. She has excelled at developing comprehensive Standard Operating Procedures (SOPs), which have significantly enhanced operational efficiency and reduced errors across the board.In addition to her operational insights, Vaishnavie has shown remarkable attention to detail in creating business documentation that is both thorough and accessible, ensuring clarity and alignment across all departments. Her commitment to excellence and her collaborative approach foster a positive and results-driven work environment. Vaishnavie is an outstanding professional who consistently delivers high-quality results, and I wholeheartedly recommend her to anyone seeking a talented and reliable leader.",
            "imageUrl": "https://media.licdn.com/dms/image/C4D03AQHGz76IAHiELw/profile-displayphoto-shrink_100_100/0/1668035252317?e=1710979200&v=beta&t=ESoX4dyIrDo_j5tklWGng33pn_BhMngBf1wlwoFahjA",
            "image": "./SQR.png"
        },
        {
            "author": "Elizabeth Flores",
            "quote": "It is with great pleasure that I recommend Vaishnavie Suresh. Throughout her time at the Autonomy Research Center for STEAHM (ARCS), she consistently displayed outstanding analytical skills and resource management. Vaishnavie effectively managed onboarding and inventory, and her ability to create detailed event budgets and coordinate complex events like monthly seminars,our year-end event and outdoor team-building retreats was impressive. She demonstrated strong problem-solving and process improvement capabilities.Vaishnavie's leadership in facilitating networking and collaboration across diverse teams associates, fellows, and professors—was a significant asset. Her clear communication and valuable contribution to the NASA report highlight her dedication and ability to achieve strategic goals. She would be an excellent Operations Manager.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQEh0KUk9tuXpQ/profile-displayphoto-shrink_100_100/0/1528414323707?e=1710979200&v=beta&t=opAYyq1yCBcdVAINQwMYCXmCZ7EnNtE8UZfWYgYPDDg",
            "image": "./ARCS.jpg"
        },
        {
            "author": "Shannon Viets",
            "quote": "I highly recommend Vaishnavie Suresh as an Operations Manager. Her efficiency and capability in overseeing complex operations consistently exceeds expectations. Vaishnavie excels in streamlining processes, improving productivity, and ensuring that goals are met on time. Her leadership style is both motivating and empowering, creating a positive environment where the team thrives. With a keen eye for detail and a proactive approach, Vaishnavie handles challenges with ease and brings innovative solutions to the table. Her dedication and expertise will always make her an invaluable asset to any organization. I would be thrilled to work with her in any capacity in future.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQErB-mLljv3Xw/profile-displayphoto-shrink_100_100/0/1655257559397?e=1710979200&v=beta&t=POVulHkyrbhOtM_vxI-mzVmh9NvLQxKwa-m3h8sEVZ8",
            "image": "./SQR.png"
        },
        {
            "author": "Susan Ettinger",
            "quote": "It is with great pleasure that I recommend Vaishnavie Suresh. During her time at ARCS, Vaish shined in managing onboarding, inventory, and event coordination, including highly successful seminars. Her analytical skills, resource management, and cross-functional collaboration were truly valued. She consistently demonstrated strong leadership and communication, solving problems and contributing to process improvements. We greatly valued her support in preparing complex reports. On a personal level, Vaish is a gem. Her outgoing personality, dedication, kindness and empathy are assets for any company. Combined with her excellent abilities, Vaish is undoubtedly a highly qualified candidate for an Operations Manager role.",
            "image": "./ARCS.jpg"
        }

    ]
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMediumScreen ? 2 : isSmallScreen ? 1 : 3, // Adjust the number of slides to show
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    // extract recommendations from linked in rec page:
    // const qwer = [];
    // document.querySelectorAll(".artdeco-tabpanel.active [data-view-name='profile-component-entity']").forEach(b=>{
    //     const rec = {};
    //     rec.author = b.querySelector('a div div div div span').textContent
    //     rec.quote = b.querySelector('ul li div ul li div div div span').textContent
    //     if (b.querySelector('img')) {
    //         rec.imageUrl = b.querySelector('img').src;
    //         rec.image = rec.author.replace(/[^0-9a-z]/gi, '').toLowerCase() + `.jpg`
    //     }
    //     qwer.push(rec)
    // })
    // JSON.stringify(qwer, null, "\t")
    return (
        <div>
            <div className='section_title'>Recommendations</div>
            
            <Slider style={{ margin: '5% 15%'}} {...slickSettings}>
            {carouselItems.map((item, index) => (
                <div key={index} className={styles.carousel_item}>
                    <div className={styles.overlay}>
                        { item.image ? <div className={styles.circleContainer}>
                            <img src={item.image} alt={item.author} className={styles.circleImage} />
                        </div> : null}
                        <h2 className={styles.author}>{item.author}</h2>
                        
                        <div className={`${styles.quote} ${montserrat.className}`}>
                        <span>{item.quote}</span>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
            
        </div>
     
    );
}

export default RecommendationsSection;