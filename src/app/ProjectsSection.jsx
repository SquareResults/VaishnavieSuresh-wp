import React, {useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google'
import styles from './projects.module.css'
import FadeInOnScroll from './FadeInOnScroll';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const ProjectsSection = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if the user's preferred color scheme is dark
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Set initial dark mode state based on the user's preferred color scheme
        setDarkMode(darkModeMediaQuery.matches);

        // Listen for changes in the user's preferred color scheme
        const darkModeListener = (e) => {
            setDarkMode(e.matches);
        };

        darkModeMediaQuery.addListener(darkModeListener);

        // Clean up the listener when the component unmounts
        return () => darkModeMediaQuery.removeListener(darkModeListener);
    }, []); // Empty dependency array ensures useEffect only runs once


    const projectData = [
        {
            img_logo: "./CSUN.png",
            img_alt: "CSUN",
            img_style:  '{"paddingTop": "5%"}',
            projecttitle: "Streamlining Student Enrollment at CSUN through Lean Operations Management",
            project_description: [
                `Conducted data collection through surveys involving students and administrative departments.`,
                `Created Current State Process Mapping to identify inefficiencies and bottlenecks.`,
                `Developed a Future State Value Stream Map (VSM) proposing streamlined enrollment workflows.`,
                `Applied Lean & Six Sigma principles to optimize processing time and reduce non-value-adding activities.`,
                `Engaged with cross-functional stakeholders to implement recommendations and improve enrollment efficiency by 73%.`

            ],
            skillset: "yes",
            skill_title: "",
            listofskills: []
        },
        {
            img_logo: "./6.png",
            img_alt: "6 sigma",
            img_style:  '{"paddingTop": "5%"}',
            projecttitle: "Six Sigma – Green Belt (Self-Taught / Online Learning)",
            project_description: [
                `Learned DMAIC methodology and Lean principles for process optimization.`,
                `Applied root cause analysis and value stream mapping techniques.`,

            ],
            skillset: "yes",
            skill_title: "",
            listofskills: []
        },
        {
            img_logo: "/tools_logo/M 365 dynamic.png",
            img_alt: "365 Dynamic",
            img_style:  '{"paddingTop": "5%"}',
            projecttitle: "Microsoft Dynamic 365(ERP Systems) - SCM Module(Self-Taught/Online Learning)",
            project_description: [
                `Explored supply chain management functionalities in Microsoft Dynamics 365.`,
                `Understood ERP integration for inventory, procurement, and demand planning.`,    

            ],
            skillset: "yes",
            skill_title: "",
            listofskills: []
        },
    ]




    // return (
        
        return (
            <div>
                 <div className='section_title'>Projects and Relevant Courses</div>
                <div className={styles.projects}>
                    {projectData.map((item, index) => (
                        <div key={index}>
                        <div className={styles.company_image}>
                            <img src={item.img_logo} alt={item.img_alt} className={styles.image} style={item.img_style ? JSON.parse(item.img_style) : {}}/>
                        </div>
                        { index > 0 ? <div className={styles.lineborder}></div> : null}
                            <div className='redborder'>
                                <div className={styles.redborder_title}>
                                    {item.projecttitle}
                                    <p className='redfont'>{item.company}</p>
                                </div>
                            </div>
                            <div className={montserrat.className}>
                                <div className={styles.time}>
                                    {item.dates}
                                </div>
                                <div className={styles.project_description}>
                                    <ul className={styles.list}>
                                        {item.project_description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {item.skillset === 'yes' && (
                                <div key={index}>
                                <div className={styles.title}>
                                   {item.skill_title}
                                </div>
                                <div className={montserrat.className}>
                                   <ul className={styles.list}>
                                        {item.listofskills.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                   </ul>
                               </div>
                               </div>
                            )}
                        </div>
                    ))}
                    
                </div>
            </div>   
        );

    //     <div>
    //         <div className='section_title'>Projects and Relevant Courses</div>
    //         <div className={styles.projects}>
    //             {projectData.map((item, index) => (
    //                 <div key={index}>
    //                     <FadeInOnScroll>                 
                        
    //                     { index > 0 ? <div className={styles.lineborder}></div> : null}
                        
    //                     <div className={styles.company_image}>
    //                         <a href={item.link} target="_blank" rel="noopener noreferrer">
    //                                 {item.img_logo_dark || item.img_logo_light ? (
    //                                     <img
    //                                         src={darkMode ? item.img_logo_dark : item.img_logo_light}
    //                                         alt={item.img_alt}
    //                                         className={styles.image}
    //                                     />
    //                                 ) : null}
    //                             </a>                                                
    //                     </div>

    //                     <div className='redborder'>
    //                         <a href={item.link} target="_blank" rel="noopener noreferrer">
    //                         <div className={styles.redborder_title}>
    //                             {item.projecttitle}
    //                             {/* <p className={montserrat.className} style={{fontSize: '15px'}}>{item.projecttitle_sub}</p> */}
                                
    //                         </div>
    //                         </a>
    //                     </div>
    //                     <div className={montserrat.className}>
    //                         <div className={styles.description}>
    //                             <ul className={styles.list}>
    //                                 {item.project_description.map((desc, i) => (
    //                                     <li className={styles.liaragraph} key={i}>{desc}</li>
    //                                 ))}
    //                             </ul>
    //                         </div>
    //                     </div>
    //                     <div className={montserrat.className}>
    //                         <div className={styles.round_container}>
    //                             {item.listofskills.map((skill, index) => (
    //                                 <div className={styles.round_item} key={index}>
    //                                     {skill}
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>

    //                     </FadeInOnScroll>
    //                 </div>
    //             ))}           
                
    //         </div> 

    //     </div> 
    // );
}

export default ProjectsSection;