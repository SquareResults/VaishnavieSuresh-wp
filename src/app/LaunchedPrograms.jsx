import React from 'react'
import { Montserrat } from 'next/font/google' 
import styles from './launchedprograms.module.css'

const montserrat = Montserrat({
    weight: ["400","800"],
    subsets: ['latin']
})


const LaunchedPrograms = () => {

    const openPdf = (filename) => {
        const pdfUrl = '/resumes/' + filename;
        window.open(pdfUrl, '_blank');
      };


    return (
        <div>
            <div className={styles.launchedprograms}>

                {/* FIRST SECTION */}
                <div className={styles.background_1}>
                    <div className={styles.text}>
                    <div className={styles.titlecontainer}>
                        <div className={styles.redborder}>
                            <div className='redborder_title'>
                                Strategic digital campaign results
                                <div className={montserrat.className}>
                                    <p className={styles.subtitle}>
                                    u-haul international
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={montserrat.className} style={{position: 'relative'}}>
                        <p className={styles.subsection_description}>
                            <ul>
                                <li><strong>Instituted social, digital, and content marketing campaigns for 25+ business units</strong>resulting in a 25% YOY increase in
                                    sales, share of voice, and corporate positive sentiment.</li>
                            
                                <li><strong>Achieved U-Haul Collegeboxes product line 500% increase in revenue, 400% </strong>  increase in engagement per post, and a
                                    1000% increase in reach for awareness via campaign addressing need to transport college students’ belongings home
                                    following campus exoduses resulting from Covid-19 pandemic.
                                    </li>
                                <li style={{listStyle: 'circle', marginLeft: '8%'}}><u>Devised social media strategy</u>alerting colleges, students, and parents that U-Haul Collegeboxes could pack,
                                    ship, and/or store belongings worldwide.
                                    </li>
                                <li><strong>Employed storytelling focus in visual paid and organic content promotions </strong> resulting in increased industry share of
                                    voice 10% Year Over Year (YOY), and engagement 20% YOY.
                                    </li>
                                <li><strong>Increased propane and tanks product leads by 125%</strong>to 1,200 company-owned locations via digital initiative.</li>
                                <li><strong>Expanded local user-generated content for #Uhaulfamous</strong>  to continent-wide content campaign.</li>
                                <li><strong>Attained up to $10 million in savings annually </strong>by negotiating multi-year promotional plans with U.S. and Canadian
                                    digital and print publishers.</li>
                            </ul>
                        </p>
                    </div>
                    </div>
                </div>

                {/* SECOND SECTION */}
                <div className={styles.background_2}>
                    <div className={styles.text}>
                    <div className={styles.titlecontainer}>
                        <div className={styles.redborder}>
                            <div className='redborder_title'>
                                Digital Marketing Transformations
                                <div className={montserrat.className}>
                                    <p className={styles.subtitle}>
                                    u-haul international
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={montserrat.className} style={{position: 'relative'}}>
                        <p className={styles.subsection_description}>
                            <ul>
                                <li><strong>Established and grew Social Media Department </strong> into a $ multi-million revenue-generating function. </li>
                                <li><strong>Drive $300 million annually through direct listing management solutions. </strong>. Ensure location information is accurate and online profiles contain robust SEO for search engines, mobile apps, and mobile navigation.</li>
                                <li style={{listStyle: 'circle', marginLeft: '8%'}}><u>Transitioned 23,000 locations</u> from print Yellow Pages advertising to interactive mobile and online profiles for marketing and advertising.</li>
                                <li style={{listStyle: 'circle', marginLeft: '8%'}}><u>Achieved YoY increases: </u>website visits 192%, revenues 182%, reach 44%, engagement 107%, and media views 78%.</li>
                                <li><strong>Raised consumer awareness 25% </strong>by defining audience personas and aligning data-driven organic content plans with corporate marketing initiatives.</li>
                                <li><strong>Increased organic views and revenue for company products and services by 75% </strong>through development and maintenance of corporate blog content marketing strategy.</li>
                            </ul>
                        </p>
                    </div>
                    </div>

                {/* EXAMPLE SECTION */}
                {/* <div className={styles.background_5}>
                    <div className={styles.titlecontainer}>
                        <div className={styles.redborder}>
                            <div className='redborder_title'>
                                H&#38;R Block &#45; $20M in Savings
                                <div className={montserrat.className}>
                                    <p className={styles.subtitle}>
                                        Established the 1st Telecom Expense Management System
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <div className={montserrat.className}>
                                launched 1st telecom system
                            </div>
                        </div>
                    </div>
                    <div className={montserrat.className}>
                        <div className={styles.gridContainer}>
                            <div className={styles.gridItem}>
                                <div className={styles.subsection_title}>
                                    Situation + Obstacles
                                </div>
                                <p className={styles.subsection_description}>
                                    text
                                </p>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.subsection_title}>
                                    My Personal Actions
                                </div>
                                <p className={styles.subsection_description}>
                                    text
                                </p>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.subsection_title}>
                                    Impact + Results    
                                </div>
                                <p className={styles.subsection_description}>
                                    text
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div> 
        </div>
    );
}

export default LaunchedPrograms;