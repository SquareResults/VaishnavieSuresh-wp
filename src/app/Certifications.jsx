
import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './certifications.module.css'
import FadeInOnScroll from './FadeInOnScroll';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Certifications = () => {
  const red = {color: 'red'};
  const bold = {fontWeight: 'bold'};
  const boldRed = {...bold, ...red};

  return (
    <div className={styles.certifications}>
    <h1 style={{marginTop: "20%", marginBottom: "10%"}}>Certifications.</h1>
    <div className={styles.certGroupContainer}>
      <FadeInOnScroll>
      <div className={`${styles.certGroup} ${montserrat.className}`}>
        <h2><img src="/certifications/shrm.jpg"  width="150px"/></h2>
        <ul>
          <li>
          <p style={bold}><span style={red}>HR Generalist</span> Certificate</p>            
            {/* <p>Certificate ID: 1997624 - 2295670</p>
            <p>Completed Nov 2016</p> */}
          </li>          
        </ul>
      </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <div className={`${styles.certGroup} ${montserrat.className}`}>
        <h2><img src="/certifications/linkedin.jpg"  width="150px"/></h2>
        <ul>
          <li>            
            <p><span style={bold}><span style={red}> Certified</span> LinkedIn Recruiter Expert</span></p>
            {/* <p>Completed on Oct 15th, 2021</p> */}
          </li>          
        </ul>
      </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <div className={`${styles.certGroup} ${montserrat.className}`}>
        <h2><img src="/certifications/ctr.jpg"  width="150px"/></h2>
        <ul>
          <li>
          <p><span style={bold}><span style={red}>AIRS Certified</span> Technical Recruiter</span></p>
            {/* <p>Completed Oct 16th, 2021</p> */}
          </li>          
        </ul>
      </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <div className={`${styles.certGroup} ${montserrat.className}`}>
        <h2><img src="/certifications/slmd.jpg"  width="150px"/></h2>
        <ul>
          <li>
          <p><span style={bold}><span style={red}>Situational Leadership and Management Development</span> Certification</span></p>
            {/* <p> Completed August 20th, 2022</p> */}
          </li>          
        </ul>
      </div>
      </FadeInOnScroll>
          
    </div>
    </div>
  );
}

export default Certifications;
