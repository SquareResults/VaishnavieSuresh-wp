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
      company: 'PACIFIC LUTHERAN UNIVERSITY',
      location: 'Seattle, WA',
    },
    {
      jobtitle: 'COMMODITY MANAGER, PROCUREMENT',
      company: 'CENTURY LINK',
      company_sub: 'FORMERLY Qwest or US West',
      dates: '1998 - 2000',
    },
    {
      jobtitle: 'Vice President Operations',
      company: 'Priority Staffing',
      location: 'Tempe, Arizona',
      dates: '2000 - 2001',
    },
    {
      jobtitle: 'Bachelor of Arts, LIBERAL STUDIES',
      company: 'UNIVERSITY OF WASHINGTON',
      location: 'Seattle, WA',
    },
    {
      jobtitle: 'Instructor and Curriculum Author',
      company: 'Self-Employment Loan Fund',
      company_sub: 'NON-PROFIT',
      dates: '2001 - 2007',
    },
    {
      jobtitle: 'Director of Yellow Pages Advertising',
      company: 'U-HAUL INTERNATIONAL',
      location: 'Phoenix, Arizona',
      dates: '2002 - 2009',
    },
    {
      jobtitle: 'Director Listings Management and Local SEO',
      company: 'U-HAUL INTERNATIONAL',
      location: 'Phoenix, Arizona',
      dates: '2009 - 2023',
    },
    {
      jobtitle: 'Marketing And Advertising Consultant',
      company: 'J&E Solution',
      location: 'Remote',
      dates: '2014 - Present',
    },
    {
      jobtitle: 'Digital Audience Studies',
      company: 'ASU WALTER CRONKITE SCHOOL OF JOURNALISM & MASS COMMUNICATION',
    },
    {
      jobtitle: 'Financial Coach',
      company: 'Focused Financial Coach',
      location: 'Remote',
      dates: '2020 - PRESENT',
    },
    {
      jobtitle: 'DIRECTOR SOCIAL MEDIA MARKETING',
      company: 'U-HAUL INTERNATIONAL',
      location: 'Phoenix, Arizona',
      dates: '2016 - Nov 2023',
    },
    {
      jobtitle: 'Master of Business Administration (MBA)',
      company: 'UNIVERSITY OF PHOENIX',
      dates: '2000',
    },
    {
      jobtitle: 'Director Operations Multi-Family Housing Moving Services',
      company: 'U-HAUL INTERNATIONAL',
      location: 'Phoenix, Arizona',
      dates: 'Nov 2023 - Present',
    },
  ];
    

    return (
        <div>
            <div className='section_title'>Timeline.</div>
            
                <div className={styles.timeline}>
                {timelineData.map((item, index) => (
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