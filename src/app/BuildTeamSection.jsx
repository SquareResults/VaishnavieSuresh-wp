import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './buildteams.module.css'
import { TbTargetArrow } from "react-icons/tb";
import { GoArrowSwitch } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { PiIntersectThree } from "react-icons/pi";
import { FaRegHandshake, FaArrowsRotate, FaUsers  } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import LaunchedPrograms from './LaunchedPrograms';


const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

const BuildTeamSection = ({refs}) => {
    const {managementsummaryRef} = refs;
    return (
        <div>
            {/* <div className='section_title'>
                building high performance teams.
            </div> */}
            <h1 style={{marginTop: '10%'}}>TOOLS</h1>
            <div className={montserrat.className}>
                <div className={styles.buildingteams}>
                {/***************** TOOLS SECTION *****************/}
                <div className={styles.gridContainer_tools}>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Jira.png" width='58px'/>
                        </div>
                        <div className={styles.title_tools}>JIRA</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Tableau.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Tableau</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Power-BI.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>PowerBI</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/GitHub.png" width='62px'/>
                        </div>
                        <div className={styles.title_tools}>Github</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Minitab.png" width='65px'/>
                        </div>
                        <div className={styles.title_tools}>Minitab</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/M 365 dynamic.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Microsoft Dynamic 365</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Airtable.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Airtable</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Gapps logo.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Google Apps</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/SAP.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>SAP</div>
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Office 365.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Microsoft Office 365</div>                       
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Sharepoint logo.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Sharepoint</div>                       
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/Smartsheetlogo.jpg" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Smartsheets</div>                   
                    </div>
                    <div className={styles.gridItem_tools}>
                        <div className={styles.circle_icon}>
                            <img src="/tools_logo/AdobeAcrobatlogo.png" width='80px'/>
                        </div>
                        <div className={styles.title_tools}>Adobe Acrobat</div>                   
                    </div>
                </div>       
                </div>
            </div>

                {/***************** MANAGEMENT SUMMARY ****************/}
                {/* <div ref={managementsummaryRef}> */}
                {/* <div className={`${styles.gridContainer} ${styles.management_summary}`}>
                        <div className='redborder'>
                            <div className='redborder_title'>
                                <span className='redfont'>driving</span> Global Digital Initiatives to Expand Markets & Raise Revenues
                            </div>
                        </div>

                        <div className={styles.subtitle}>
                            <p> Driving $ Millions in Revenue | Engineering Results-producing Digital Marketing Strategies</p>
                            <div className={montserrat.className} style={{fontSize: '15px', marginBottom: '20px'}}><i>Collaborating Companywide to Achieve KPIs – Ensuring Voice of Customer Messaging</i></div>                       
                        </div>
    
                        <div className={`${styles.gridContainer} ${montserrat.className}`}>
                        <div className={styles.gridItem}>
                            <img src="https://images.unsplash.com/photo-1573496130103-a442a3754d0e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Black woman writing on poster"
                                className={styles.grid_images} />
                        </div>
                        <div className={styles.gridItem_txt}>
                            <div className={styles.title}>
                            FUTURE-FOCUSED, ANALYTICAL MARKETING LEADER
                            </div>
                            <div className={styles.descript}>
                            Known for ability to leverage relationships to attain and exceed
                            target outcomes. Determined, passionate manager expert in conceiving and executing results-producing digital promotion
                            strategies. Detailed, experienced negotiator skilled in maximizing opportunities within the scope of marketing regulations.
                            </div>
                        </div>
                        <div className={styles.gridItem_red}></div>
                        <div className={styles.gridItem_red}></div>
                        <div className={styles.gridItem}>
                            <img src="https://images.unsplash.com/photo-1604933762161-67313106146c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Black woman typing on laptop"
                                className={styles.grid_images} />
                        </div>
                        <div className={styles.gridItem_txt}>
                            
                            <div className={styles.descript}>
                                <ul>
                                    <li><strong>LEADING MARKETING, BRANDING, AND DEMAND GENERATION</strong> efforts companywide.</li>
                                    <li><strong>LAUNCHING, GROWING, AND OPTIMIZING</strong> digital marketing channels and campaigns.</li>
                                    <li><strong>OVERSEEING AND IMPLEMENTING BEST PRACTICES</strong> across digital platforms and operations including mobile,
                                        tablet. social and 3 rd party/syndicated.</li>
                                </ul>
                         
                            </div>
                        </div>
                        <div className={styles.gridItem_txt}>
                            <div className={styles.descript}>
                                <ul>
                                    <li><strong>CREATING AND MANAGING INTERNAL SYSTEMS AND PROCESSES</strong> to keep platforms current and competitive.</li>
                                    <li><strong>APPLYING EXPERTISE IN SEO</strong> for paid advertising, branding, and marketing strategy overall.</li>
                                    <li><strong>SELECTING AND MANAGING DEVELOPERS, SEO </strong>experts, designers, and digital marketing experts.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_red}></div>
                        <div className={styles.gridItem}>
                            <img src="./sitting.jpg"
                                alt="Working"
                                className={styles.grid_images} />
                        </div>
                        <div className={styles.gridItem}>
                            <img src="./meeting.jpg"
                                alt="Group of people talking and working"
                                className={styles.grid_images} />
                        </div>
                        <div className={styles.gridItem_txt}>
                            <div className={styles.descript}>
                                <ul>
                                    <li><strong>ANALYZING DATA TO DRIVE ACTIONABLE CHANGE </strong>and partnering cross functionally to achieve revenue targets.</li>
                                    <li><strong>GROWING SOCIAL MEDIA AUDIENCES AND COMMUNITIES.</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_red}></div>
                        </div>
                </div>
                </div> */}
                {/****************  LAUNCHED PROGRAMS ****************/}
                < LaunchedPrograms />
        </div>  
    );
}

export default BuildTeamSection;