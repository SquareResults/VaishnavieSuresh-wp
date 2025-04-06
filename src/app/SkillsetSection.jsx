import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './skillset.module.css'
import { FaCogs, FaChartLine, FaUsers, FaTools, FaHandsHelping, FaBalanceScale } from "react-icons/fa";
import RedBlackBoxes from './RedBlackBoxes';
import clientData from './clientData.json';

const montserrat = Montserrat({
    weight: ['500', '400'],
    subsets: ['latin']
  })

const SkillsetSection = ({refs}) => {
    return (
        <div>
            <div className={styles.skillset} ref={refs.skillsetRef}>
                <h1>{clientData.Skillset.title}</h1>
                <div className={`${montserrat.className}`} style={{textTransform: 'uppercase', textAlign: 'center'}}>Extensive experience in</div>
            <div className={montserrat.className}>
            <div className={styles.gridContainer}>
                <div className={styles.gridContainer} style={{margin: "0"}}>
                    <div className={styles.backgrid}>
                        <div className={styles.gridItem_r}>
                            <div className={styles.text}>
                            <div className={styles.icons}><img src="/skillsetsection/world.png" width="80px" style={{filter: "invert(1)"}}/></div>
                            <p>{clientData.Skillset.grid1_txt}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backgrid}>
                        <div className={styles.gridItem_b}>
                            <div className={styles.text}>
                                <div className={styles.icons}>
                                <img src="/skillsetsection/chart.png" width="80px" style={{opacity: "0.5"}}/>
                                </div>
                                <p>{clientData.Skillset.grid2_txt}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.backgrid}>
                        <div className={styles.gridItem_r}>
                            <div className={styles.text}>
                                <div className={styles.icons}>
                                <img src="/skillsetsection/analytics.png" width="80px" style={{filter: "invert(1)"}}/>
                                </div>
                                <p>{clientData.Skillset.grid3_txt}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.gridContainer} style={{margin: "0"}}>
                <div className={styles.backgrid}>
                    <div className={styles.gridItem_b}>
                        <div className={styles.text}>
                            <div className={styles.icons}>
                            <img src="/skillsetsection/calendar.png" width="80px" style={{opacity: "0.5"}}/>
                            </div>
                            <p>{clientData.Skillset.grid4_txt}</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.backgrid}>
                    <div className={styles.gridItem_r}>
                        <div className={styles.text}>
                            <div className={styles.icons}>
                            <img src="/skillsetsection/settings.png" width="80px" style={{filter: "invert(1)"}}/>
                            </div>
                            <p>{clientData.Skillset.grid5_txt}</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.backgrid}>
                    <div className={styles.gridItem_b}>
                        <div className={styles.text}>
                            <div className={styles.icons}>
                            <img src="/skillsetsection/server.png" width="80px" style={{opacity: "0.5"}}/>
                            </div>
                            <p>{clientData.Skillset.grid6_txt}</p>
                        </div>
                    </div>
                </div>
                </div>
               
                
                <div className={styles.gridContainer} style={{margin: "0"}}>
                <div className={styles.backgrid}>
                    <div className={styles.gridItem_r}>
                        <div className={styles.text}>
                            <div className={styles.icons}>
                            <img src="/skillsetsection/puzzle.png" width="80px" style={{filter: "invert(1)"}}/>
                            </div>
                            <p>{clientData.Skillset.grid7_txt}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.backgrid}>
                    <div className={styles.gridItem_b}>
                        <div className={styles.text}>
                            <div className={styles.icons}>
                            <img src="/skillsetsection/support.png" width="80px" style={{opacity: "0.5"}}/>
                            </div>
                            <p>{clientData.Skillset.grid8_txt}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.backgrid}>
                    <div className={styles.gridItem_r}>
                        <div className={styles.text}>
                            <div className={styles.icons}>
                            <img src="/skillsetsection/database_storage.png" width="80px" style={{filter: "invert(1)"}}/>
                            </div>
                            <p>{clientData.Skillset.grid9_txt}</p>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
            </div>
 {/*********** SECTION WITH BLACK BACKGROUND PICTURE ***********/}
            {/* <div className={styles.background}>
                <div className={styles.text_section}>
                    <div className='redborder' style={{position: 'relative', zIndex: 1}}>
                        <div className='redborder_title'>
                        Transformative Leadership 
                        <div className={montserrat.className} style={{fontSize: '20px',}}>Unlocking Operational Excellence and Driving Strategic Growth</div>
                        </div>
                    </div>
                    <div className={montserrat.className}>
                        <ul className={styles.list_blkbg}>
                        <p style={{marginBottom: '20px'}}>Adipiscing bibendum est ultricies integer quis auctor elit. Id aliquet lectus proin nibh. Amet mauris commodo quis imperdiet massa tincidunt. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Porttitor eget dolor morbi non arcu.</p>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        </ul>
                    </div>
                </div>
            </div> */}
   
            

            {/***********  CORE RESPONSIBILITY SECTION  */}
            {/* <div className={styles.leadership}>
                <div className='redborder'>
                    <div className='redborder_title'>
                        my <span className='redfont'>core</span> responsibility
                    </div>
                </div>
                <div className={montserrat.className}>
                    <p className={styles.leadership_para}>The most important part of my job is sharing the U-Haul story online and educating customers about our products and services. My legal training (early years of career) has helped me the most with negotiations and attention to detail in maneuvering the various rules and regulations in marketing and advertising. What sets me apart from others may be my various functions within my company regardless of my title.</p>
                </div>
            </div> */}
        </div>
    );
}

export default SkillsetSection;