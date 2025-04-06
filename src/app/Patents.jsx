import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './patents.module.css'
import FadeInOnScroll from './FadeInOnScroll';

const montserrat = Montserrat({
    weight: ['200','400', '500', '700', '800'],
    subsets: ['latin']
  })

const Patents = () => {
    return (
        <div>
            <FadeInOnScroll>
             <div className='section_title'>
                Accomplishments
            </div>

            <div className={styles.uhaul}>
            <div className={`${styles.gridContainer} ${montserrat.className}`}>            
            
                {/* FIRST SECTION */}
                <div className={`${styles.gridItem_quote} ${styles.photo} ${styles.blackbg} ${styles.firstSection}`} style={{ width: '80%', backgroundImage: 'url("./about/people_mngt.jpg")' }}>
                    <div className={styles.quote_author}>People Leadership                    </div>
                    
                    <div className={styles.quote_author_title}>
                        <div>
                            <ul>
                                <li>Led global team of over 40 HR professionals with $6.3M operating budget for Fortune 500 company with over 30,000 employees</li>
                                <li>Employee net promoter score increased 65% for company during my tenure which met the industry best-in-class benchmark of a high-performance organization.</li>
                                <li>Strategic partner for small business startups around workforce planning, HR initiatives, and fostering organizational growth.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className={`${styles.gridItem_quote_sm} ${styles.beigegrid}`} style={{width: '20%'}}></div>

                {/* 2ND SECTION */}
                <div className={`${styles.gridItem} ${styles.redgrid}`} style={{width: '40%'}}>
                </div>
                <div className={`${styles.gridItem_social_photo} ${styles.gridItem_quote}  ${styles.photo} ${styles.redbg} ${styles.firstSection}`} style={{backgroundImage: 'url("./about/talent.jpg")' }}>
                    <div className={styles.quote_author}>Business Leadership</div>
                    
                    <div className={styles.quote_author_title}>
                        <div>
                            <ul>
                                <li>Established margin improvement processes delivering 35% GM, 15% OPEX, and 20% EBIT margin and exceeding goal of 30% reduction in quality incidents for company’s largest product group.</li>
                                <li>Facilitated capital expenditure financial planning, forecasting and approval process resulting in annual spend upwards of $120M.</li>
                                <li>Strategic partner in driving growth and operational excellence for small business startups leading business planning, financial oversight, and business operations.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* THIRD SECTION */}
                <div className={`${styles.gridItem_social_photo} ${styles.beigegrid} ${styles.gridItem_quote}`} style={{width: '50%'}}>
                <div className={styles.quote_author}>Technical Leadership</div>
                    <div className={styles.quote_author_title}>
                        <div>
                            <ul>
                                <li>Led global team that introduced 60-80 new products per year generating over $80M in yearly revenue for company’s largest product group.</li>
                                <li>Member of corporate council that oversaw new product development policy and system to ensure optimal product performance and on-time delivery to customers.</li>
                                <li>First black female to receive microelectronic engineering degree at Rochester Institute of Technology who now mentors and advocates for BIPOC students in college of engineering.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`${styles.gridItem_social_photo} ${styles.photo} ${styles.blackbg} ${styles.thirdSection}`} style={{width: '50%', backgroundImage: 'url("./about/learning.jpg")' }}>
                </div>

                {/* FOURTH SECTION */}
                <div className={`${styles.gridItem_quote_sm} ${styles.redgrid}`} style={{width: '20%'}}></div>
                <div className={`${styles.gridItem_quote} ${styles.redbg} ${styles.photo} ${styles.fourthSection}`} style={{width: '80%', backgroundImage: 'url("./about/performance.jpg")' }}>
                    <div className={styles.quote_author}>Workplace Personality</div>
                    
                    <div className={styles.quote_author_title}>
                        <div>
                        Favorite Inspirational Quote: “It’s not the load that breaks you down, it’s the way you carry it” - Lena Horne
                            <ul>
                                <li>Gallup CliftonStrengths Signature Themes: Achiever, Discipline, Learner, Relator, Individualization</li>
                                <li>DISC Profile: Sc (Stabilizer)</li>
                                <li>The Predictive Index: Analyzer</li>
                                <li>Inclusive Behaviors Inventory Score: High</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            
            </div>
            </FadeInOnScroll>
        </div>   
    );
}

export default Patents;