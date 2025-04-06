import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './leadership.module.css'
import { FaChartBar  } from 'react-icons/fa';
import FadeInOnScroll from './FadeInOnScroll';
import clientData from './clientData.json';

const montserrat = Montserrat({
    weight: ['300', '400'],
    subsets: ['latin']
  })

const LeadershipSection = ({refs}) => {
    return (
        <div style={{marginTop: "20%"}}>
            <FadeInOnScroll>
             <div className={styles.leadership} ref={refs.leadershipRef} style={{marginTop: "10%"}}>
                <h1 className={styles.title}>{clientData.Leadership.title}</h1>
                <div className={montserrat.className}>
                    <div className={styles.round_container}>
                        {clientData.Leadership.list_of_skills.map((skill, index) => (
                            <div className={styles.round_item} key={index}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.leadership} >
                <div className='redborder'>
                    <div className='redborder_title'>
                    {clientData.Leadership.leadership_para_title}
                    </div>
                </div>
                <div className={montserrat.className}>
                    
                    <p className={styles.leadership_para}>
                        {clientData.Leadership.leadership_para}
                    </p>
                </div>
            </div>

            {/* <div className={styles.leadership} ref={refs.leadershipRef}>
                <div className='redborder'>
                    <div className='redborder_title'>
                        Leadership
                    </div>
                </div>
                <div className={montserrat.className}>
                    <p className={styles.leadership_para}>Leader with SEO, enterprise and local listings management, PPC, and social media marketing
                    solutions experience; demonstrated commitment to improvement and optimization of all aspects of
                    business operations; Resourceful with a proven track record of using technology to streamline
                    processes and procedures for operational efficiency and cost reduction. Experienced with internal and
                    external conflict resolution utilizing consultative methodology and strategic negotiations; Online and
                    local search public speaker and thought leader</p>
                </div>
            </div> */}
            </FadeInOnScroll>
        </div>   
    );
}

export default LeadershipSection;