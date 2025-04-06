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
            "author": "Kevin S.",
            "quote": "Elnora's exceptional proficiency in effectively disseminating and conveying knowledge during our initial interaction greatly impressed me. She is an expert with a forward-thinking mindset and acute analytical prowess, and she excels in establishing relationships to reach and surpass goals. I know she would thrive with any organization.",
            "imageUrl": "https://media.licdn.com/dms/image/C4D03AQHGz76IAHiELw/profile-displayphoto-shrink_100_100/0/1668035252317?e=1710979200&v=beta&t=ESoX4dyIrDo_j5tklWGng33pn_BhMngBf1wlwoFahjA",
            "image": "./recommendations/kevins.jpg"
        },
        {
            "author": "Charles Dyer",
            "quote": "Elnora was ahead of her time in grasping the complexities of structuring local data and was a great partner in providing realtime feedback for U-Haul's needs with multiple stores. I look forward to working with Elnora in the future.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQEh0KUk9tuXpQ/profile-displayphoto-shrink_100_100/0/1528414323707?e=1710979200&v=beta&t=opAYyq1yCBcdVAINQwMYCXmCZ7EnNtE8UZfWYgYPDDg",
            "image": "./recommendations/charlesdyer.jpg"
        },
        {
            "author": "Sterling Sourk",
            "quote": "During my time at U-Haul, Elnora was very encouraging and nurturing. She’s one with vision and the communication and expertise to see that vision through via projects and initiatives. I commend her communication and positivity. ",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQErB-mLljv3Xw/profile-displayphoto-shrink_100_100/0/1655257559397?e=1710979200&v=beta&t=POVulHkyrbhOtM_vxI-mzVmh9NvLQxKwa-m3h8sEVZ8",
            "image": "./recommendations/sterlingsourk.jpg"
        },
        {
            "author": "Kelly Mooney",
            "quote": "Elnora is one of the most effective and talented individuals I have ever had the pleasurer of working with. She is uniquely gifted in her leadership skills and has a way about her that makes everyone feel like they are long time friends.  Cool under pressure and able to adapt to the most stressful scenarios, Elnora is an excellent role model that leads by example.  As a team member or leader, Elnora has my highest recommendation.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQGySVyMDcmKuA/profile-displayphoto-shrink_100_100/0/1565326141718?e=1710979200&v=beta&t=v84Js7NfBHkTgOCmCC9ft_j3alo2s81490KmHds0ef8",
            "image": "./recommendations/kellymooney.jpg"
        },
        {
            "author": "Carol Lee",
            "quote": "I have known Elnora for over twelve years. Elnora is intelligent, knowledgeable and a strong negotiator. Over the years, Elnora has created a very dedicated and successful digital marketing team at U-HAUL. Elnora is all about strategy, performance, integrity and execution. Plus she is fun to work with. I highly recommend Elnora to anyone is looking to take their digital marketing department to the next level.",
            "imageUrl": "https://media.licdn.com/dms/image/D5603AQGx_cJW6biMQw/profile-displayphoto-shrink_100_100/0/1685799027713?e=1710979200&v=beta&t=Mo-e53bfMMysT67vxPO4NyBm-UKIbi2Cm9fFIR28O8I",
            "image": "./recommendations/carollee.jpg"
        },
        {
            "author": "Joe Lazure",
            "quote": "I've worked with Elnora over ten years and highly recommend her to anyone looking to improve their local media, marketing, analytics or digital knowledge of how to build a winning brand solution! I consider Elnora an industry expert in all things marketing from Local and Digital Ad campaigns to witnessing firsthand how she expanded the visibility and reputation of U-haul's brands across Search, Navigation and Mobile consumer facing applications. Elnora has spoken at numerous conferences, and always willing to help others succeed.  She would be a great additional to your panel of experts!",
            "image": "./recommendations/joelazure.png"
        },
        {
            "author": "Debra Crawford",
            "quote": "Elnora is a detail oriented manager with exceptional analytical skills concerning her local search program. She is a great steward of the brand  and always kept the strategic objective first and foremost.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQGClLAsbAUIpQ/profile-displayphoto-shrink_100_100/0/1517773085873?e=1710979200&v=beta&t=XvQGCqMKMyaAkM68-5HBIIgo61IURRm6MTCtuhDmXUM",
            "image": "./recommendations/debracrawford.jpg"
        },
        {
            "author": "Eric King",
            "quote": "I have had the opportunity to work with Elnora on several projects. I enjoyed her approach, business and customer focused. She is willing to try ideas that are sometimes out of the box but usually successful. Elnora always meets her commitments",
            "imageUrl": "https://media.licdn.com/dms/image/C5103AQEMcssDPsmGKg/profile-displayphoto-shrink_100_100/0/1516249525139?e=1710979200&v=beta&t=EKpJu6p1o0B7DiER760NwG8uMAX_Oc5U6TIu_FnsK0s",
            "image": "./recommendations/ericking.jpg"
        },
        {
            "author": "Elaine Screnci",
            "quote": "Enora is a seasoned, detailed thought leader and I have enjoyed working with over the past few years.  She is smart, knowledgeable and knows how to get the job done.  She thinks outside of the box and encourages her associated to do the same.  Elnora has been instrumental in providing key processes and skills to help enhance products and offerings with her business partners.  Especially Acxiom.  She is an expert in Local Search and SEO.  She aims high and sets the bar higher.  I am thankful to know her and have the priviledge to work with her.  She is a true motivator and many will learn from her.",
            "imageUrl": "https://media.licdn.com/dms/image/C4E03AQHdVYfl1mBS2w/profile-displayphoto-shrink_100_100/0/1658234273650?e=1710979200&v=beta&t=zsc8m4rRXsg3g1M_XAYp95oeMYHeeKpdF5jtF-jyn0Y",
            "image": "./recommendations/elainescrenci.jpg"
        },
        {
            "author": "Doug Parsonage",
            "quote": "One of the first things I recognized in working with Elnora is her passion for her job.  She is a true, committed professional who works hard to make sure everything is done and done right.  It has been a pleasure to work with someone with such dedication and enthusiasm.",
            "imageUrl": "https://media.licdn.com/dms/image/D5603AQFNkMPEvhNXcQ/profile-displayphoto-shrink_100_100/0/1664480681792?e=1710979200&v=beta&t=5VnUjAEnY_SmKYSnez1OxFkb4RVT6s4uyP1_BGllT6E",
            "image": "./recommendations/dougparsonage.jpg"
        },
        {
            "author": "Renae Dabney, CDMP, PCM",
            "quote": "I introduced myself to Elnora at an industry conference approximately 8 years ago.  I found her to be extremely intelligent, personable and dedicated to moving Marketing forward for U-Haul.  Her vast industry experience, knowledge and constant desire to integrate new opportunities into her company I'm sure has had a tremendous effect on U-Haul's bottom line.  Elnora was meticulous regarding evaluation of her teams initiatives and delivering results. I'm so glad I made her acquaintance.",
            "imageUrl": "https://media.licdn.com/dms/image/D4E03AQH1pZNSygg2kA/profile-displayphoto-shrink_100_100/0/1702928319229?e=1710979200&v=beta&t=bZDMN3X-wN9dOIpGeBzxTO7bOQZB_IgB3Tj3H98k7hc",
            "image": "./recommendations/renaedabneycdmppcm.jpg"
        },
        {
            "author": "Amber Remley",
            "quote": "Elnora is a very talented and sharp minded individual.  I have a great deal of respect and admiration for her extensive background and her superior knowledge and efficacy to lead teams.  The solutions we provided to U-Haul derived a unique change in business directives and goals, and every solution and possible outcome was thoroughly analyzed and critiqued by her and executive members.  I learned a great deal from Elnora, and her innate ability to unify teams to create collaborative support mechanisms.  She is a true mentor and coach, one who sets an example for others to follow.",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQF3WiyacvkRQQ/profile-displayphoto-shrink_100_100/0/1540659606943?e=1710979200&v=beta&t=comuXouISa2h-dMSfTyvGwi8MVYjuhw0OrSS5RnG8-g",
            "image": "./recommendations/amberremley.jpg"
        },
        {
            "author": "Rosiland Moore, MBA",
            "quote": "Elnora's work at Self Employment Loan Fund was widely respected and valued.  Instructors were passionate about training business owners to launch and grow their businesses.  She enhanced the quality of those trainings and always brought great energy to the work.  I am glad to have been her peer and now friend.  I look forward to the next opportunity to work with her for small businesses again.",
            "imageUrl": "https://media.licdn.com/dms/image/D5603AQHgMg3fdasSaw/profile-displayphoto-shrink_100_100/0/1700092813658?e=1710979200&v=beta&t=69QG8WJ9c1m8qpZGGLsU9VXqSUGwCjbAu2F2nvcBnH4",
            "image": "./recommendations/rosilandmooremba.jpg"
        },
        {
            "author": "D Peartree",
            "quote": "Her professional ethics and interpersonal skills are beyond reproach.  Each and every time she has declined our business, she provided the acumen to improve our product and service offer.  While we have never earned her business, she has been the catalyst and sometimes champion of our reasons to improve.  Outspoken and knowledgeable are sought after combinations.  A team player but mostly a team leader.  Ms. Palms dedication to detail and thoroughness can only be describe as passionate.  If ever there was a person that can jump in and bring order to chaos, Ms. Palms is who I’d call.  The integrity of a person held in such high regard can be suspect.  However Ms. Palms has the tenacity to explore areas of her industry that she is not familiar with.  What is truly delightful about working with her is the exuberance she projects when she is learning to implement new ideas.  Oh, if I could only afford to employ her!",
            "imageUrl": "https://media.licdn.com/dms/image/C5603AQG0FN1dpidKRA/profile-displayphoto-shrink_100_100/0/1516359112633?e=1710979200&v=beta&t=TOqryizPcdThTnew19g22uxHdHhlzI7ITyGWeqa4KGQ",
            "image": "./recommendations/dpeartree.jpg"
        },
        {
            "author": "Todd Giardina",
            "quote": "Elnora is a top notch, intelligent person who sweats the details. She is a great thinker and doer. She has a way of motivating her team at UHaul like very few I have seen that gets things accomplished. Elnora brings insight from her past employment opportunities that has allowed UHaul to continue to move forward through a judicious use of Yellow Page advertising and technology. She also values key business partnerships as an important factor to the success of UHaul.",
            "imageUrl": "https://media.licdn.com/dms/image/C4E03AQG4t1wIQ6nXZg/profile-displayphoto-shrink_100_100/0/1583502971183?e=1710979200&v=beta&t=eMfY1kMVM0dXj1Xk8hZK1-TVgZS7lX95PQ2A9MjwMcY",
            "image": "./recommendations/toddgiardina.jpg"
        },
        {
            "author": "Grace Y.",
            "quote": "I worked with Elnora while I was at U-Haul, she is a talented individual, she is very detail oriented and very pleasant to work with. I wish her all the best.",
            "image": "./recommendations/graceyoung.png"
        },
        {
            "author": "Caroline Newsom",
            "quote": "This is a personal as well as business endorsement of Elnora's commitment to excellence in supporting aspiring and established entrepreneurs. Elnora's ability to support clients in understanding their market and surgically pin-pointing their target audience is second to none.  Elnora's client consulting and training services come highly recommended.",
            "image": "./recommendations/caroline.png"
        },
        {
            "author": "Jamie Crump (she/her)",
            "quote": "Few have the passion for excellence and continued improvement that Elnora demonstrated while at US WEST/Qwest Commuinications.  She managed a number of categories, including travel and training services and brought a tough but fair negotiation strategy, a keen curiosity in improving the service level and an innate ability to work through the analytics.  She was a delight to have on the team.",
            "imageUrl": "https://media.licdn.com/dms/image/C4E03AQE6okzaZQaWxA/profile-displayphoto-shrink_100_100/0/1516320319616?e=1710979200&v=beta&t=Qk8CAKF6qVrL6dKQuI8TirjY7JQOhrqjCv3OHAu2YhY",
            "image": "./recommendations/jamiecrumpsheher.jpg"
        },
        {
            "author": "Beth Brown",
            "quote": "Elnora represents the pride and passion of U-Haul International and has worked diligently to manage the advertising program for the organization.  It is a pleasure to work with Elnora.  Elnora also shares the views and perspectives of U-Haul with the Yellow Pages industry and we appreciate her willingness to be candid about various industry related topics.",
            "imageUrl": "https://media.licdn.com/dms/image/C4E03AQE44GgJgbh_WQ/profile-displayphoto-shrink_100_100/0/1632314284499?e=1710979200&v=beta&t=e03o2EL_BzEkb9mkfOckOasFQS2eXg2SZsekwdsFmbc",
            "image": "./recommendations/bethbrown.jpg"
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
            <div className='section_title'>Recommendations.</div>
            
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