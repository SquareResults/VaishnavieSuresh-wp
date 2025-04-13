import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './timeline.module.css'

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

const TimelineSection = () => {
  const timelineData = [
   
    {
      jobtitle: 'Digital Technology & Enterprise Resource Planning (ERP) Intern',
      company: 'General Electric',
      company_sub: '',
      location: 'Virtual',
      dates: 'Jun 2020 - Jul 2020',
    },
    {
    jobtitle: 'Bachelor of Technology in Electrical & Electronics Engineering',
    company: 'Rajagiri School of Engineering and Technology',
    location: 'Kerala, India',
    dates: 'Aug 2017 - Jul 2021'
    },
    {
      jobtitle: 'Operations Project Management Analyst Trainee',
      company: 'Brainnest',
      location: 'Bremen, Germany',
      dates: 'Jan 2022 – Feb 2022',
    },
    {
      jobtitle: 'Operations Coordinator – Education, Volunteer',
      company: 'Kumon',
      location: 'California, USA',
      dates: 'Sep 2022 – Feb 2024',
    },
    {
      jobtitle: 'Associate Operations Analyst',
      company: 'Autonomy Research Center for STEAHM (ARCS – NASA-Sponsored)',
      company_sub: '',
      location: 'California, USA',
      dates: 'Nov 2023 – May 2024',
    },
    {
      jobtitle: 'Masters in Science in Engineering/Industrial Management',
      company: 'California State University Northridge',
      location: 'California, USA',
      dates: 'Sep 2022 - May 2024',
    },
    {
      jobtitle: 'Operations Manager',
      company: 'SquareResults',
      dates: 'Sep 2024 – Present',
    },
    
  ];
    

  return (
    <div>
        <div className='section_title'>Timeline</div>
        
            <div className={styles.timeline}>
            {timelineData.reverse().map((item, index) => (
                <div key={index} className={index % 2 === 0 ? styles.blurb_left : styles.blurb_right}>
                    <div className={index % 2 === 0 ? styles.left : styles.right}>
                    <div className={styles.content}>
                        {item.jobtitle ? <div className={styles.jobtitle}>{item.jobtitle}</div> : null }
                        <div className={styles.company}>
                          <p>{item.company}</p>
                          {item.company_sub ? <p style={{fontSize: 'small', textTransform: 'uppercase'}} className={montserrat.className}>{item.company_sub}</p> : null }
                        </div>
                        <div className={montserrat.className}>
                          <p className={styles.location}>{item.location}</p>
                          {item.dates ? <p className={styles.dates}>{item.dates}</p> : null}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
          
            <div className={styles.timeline_end}></div>

    </div>
 
);

}

export default TimelineSection;