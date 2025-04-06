"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './PortfolioPage.module.css'
import MenuItem from './MenuItem';
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare  } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import AboutSection from './AboutSection';
import HomeSection from './HomeSection';
import LeadershipSection from './LeadershipSection';
import SkillsetSection from './SkillsetSection';
import CirclesSection from './CirclesSection';
import BuildTeamSection from './BuildTeamSection';
import FrameworkSection from './FrameworkSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import JoblistComponent from './JoblistComponent';
import AssociationsSection from './AssociationsSection';
import LaunchedPrograms from './LaunchedPrograms';
import PublicSpeakingSection from './PublicSpeakingSection';
import TimelineSection from './TimelineSection';
import RecommendationsSection from './RecommendationsSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
import AuthorSection from './AuthorSection';
import clientData from './clientData.json';


const PortfolioPage = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showOverlaySidebar, setShowOverlaySidebar] = useState(false);

  // Refs for main sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const buildingteamsRef = useRef(null);
  const frameworkRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const speakingRef = useRef(null);
  const timelineRef = useRef(null);
  const recommendationsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const professionalAssociationsRef = useRef(null);
  const authorRef = useRef(null);

  // Refs for subsections
  const leadershipRef = useRef(null);
  const skillsetRef = useRef(null);
  const yearsRef = useRef(null);
  
  // const frameworkRefs = {
  //   conceptsvisionRef: useRef(null),
  //   strategicplanningRef: useRef(null),
  //   drivingexecutionRef: useRef(null),
  //   performancemonitoringRef: useRef(null),
  //   successmeasurementRef: useRef(null),
  // };

  const experienceRefs = {
    activeserviceRef: useRef(null),
    managementexperiencesummaryRef: useRef(null),
    associationsRef: useRef(null),
    launchedprogramsRef: useRef(null),
  }

  const buildingteamsRefs = {
    managementsummaryRef: useRef(null)
  }

  // Function for smooth scrolling
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  // Menu items and their corresponding refs
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      ref: homeRef,
    },
    {
      id: 2,
      title: 'About',
      ref: aboutRef,
      subMenuItems: [
        { id: 21, title: 'Leadership', ref: leadershipRef },
        { id: 22, title: 'Skill Set', ref: skillsetRef },
        { id: 23, title: 'Tools', ref: buildingteamsRef },
        { id: 24, title: 'Management & Experience Summary', ref: buildingteamsRefs.managementsummaryRef },
      ],
    },
    {
      id: 3,
      title: 'Author',
      ref: authorRef,
    },
    {
      id: 5,
      title: 'Education And Training',
      ref: educationRef,
    },
    {
      id: 6,
      title: 'Experience',
      ref: experienceRef,
      subMenuItems: [
        // { id: 61, title: 'Active Service', ref: experienceRefs.activeserviceRef },
        // { id: 62, title: 'Management & Experience Summary', ref: experienceRefs.managementexperiencesummaryRef },
        // { id: 63, title: 'Associations', ref: experienceRefs.associationsRef },
        // { id: 64, title: 'Launched Programs', ref: experienceRefs.launchedprogramsRef },
      ],
    },
    {
      id: 7,
      title: 'Professional Associations',
      ref: professionalAssociationsRef,
      subMenuItems: [
        { id: 71, title: 'Public Speaking Engagements', ref: speakingRef },
        { id: 72, title: 'Associations', ref: experienceRefs.associationsRef },
      ]
    },
    {
      id: 8,
      title: 'Timeline',
      ref: timelineRef,
    },
    {
      id: 9,
      title: 'Recommendations',
      ref: recommendationsRef,
    },
    {
      id: 10,
      title: 'Contact',
      ref: contactRef,
    },
    {
      id: 11,
      title: 'Resume',
      ref: resumeRef
    }
  ];

  const handleShowMenuButtonClick = () => {
    if ((isMediumScreen || isSmallScreen)) {
      setShowOverlaySidebar(!showOverlaySidebar);
    }
  }

  const handleResize = useCallback(() => {
    const innerWidth = window.innerWidth; 
    if ((!isMediumScreen && !isSmallScreen)) {
      setShowOverlaySidebar(false);
    }
    setIsMediumScreen(innerWidth < 1280 && innerWidth > 768);
    setIsSmallScreen(innerWidth < 768);
  },[isMediumScreen,isSmallScreen])

  useEffect(()=>{
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  const handleMenuItemClick = (ref) => {
    scrollToRef(ref);
    setShowOverlaySidebar(false);
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar} style={showOverlaySidebar ? isMediumScreen ? {marginLeft: '0px', background: 'white', width: '66vw', fontSize: '25px', boxShadow: '0px 0px 1px 5000px rgba(0,0,0,0.8)'} : {marginLeft: '0px', background: 'white', width: '100vw', textAlign: 'center', fontSize: '30px'} : {}}>
        <img className={styles.logo} src={clientData.PortfolioPage.logo} alt={clientData.PortfolioPage.logo_alt} width="50px" />
        {showOverlaySidebar ? <div onClick={()=>{setShowOverlaySidebar(false);}} style={{position: 'absolute', top: '20px', right: '20px'}}><h1><IoCloseCircleOutline /></h1></div> : ''}
      
      

        <ul className={styles.list}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              handleMenuItemClick={handleMenuItemClick}
            />
          ))}
        </ul>

        <div className={styles.socials} style={{
          display: 'flex',
          margin: '50px auto 0px auto',
          maxWidth: '300px',
        }}>
          <h1>
          <a href={clientData.PortfolioPage.linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
          </a>
          </h1>
          <h1>
          <a href={clientData.PortfolioPage.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
          </a>
          </h1>
          <h1>
          <a href={clientData.PortfolioPage.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare />
          </a>
          </h1>
          <h1>
          <a href={clientData.PortfolioPage.twitter} target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
          </a>
          </h1>
        </div>
      </div>
      <div className={styles.menubutton} onClick={handleShowMenuButtonClick}>
        {showOverlaySidebar ? '' : <img src={clientData.PortfolioPage.logo} alt={clientData.PortfolioPage.logo_alt} width="50px" />}
      </div>
      <div className={styles.content} onClick={()=>{setShowOverlaySidebar(false);}}>
        <section ref={homeRef} style={{minHeight: '100vh'}}>
          <HomeSection/>
        </section>
        <section ref={aboutRef}>
          <AboutSection/>
        </section>
        <section>
          <LeadershipSection  refs={{leadershipRef: leadershipRef}}/>
        </section>
        <section>
          <SkillsetSection refs={{skillsetRef: skillsetRef}}/>
        </section>
        <section ref={yearsRef}>
          <CirclesSection/>
        </section>
        <section ref={buildingteamsRef}>
          <BuildTeamSection refs={buildingteamsRefs}/>
        </section>
        <section ref={authorRef}>
          <AuthorSection refs={authorRef}/>
        </section>
        {/* <section ref={frameworkRef}>
          <FrameworkSection refs={frameworkRefs}/>
        </section> */}
        <section ref={educationRef}>
          <EducationSection/>
        </section>
        <section ref={experienceRef}>
          <ExperienceSection refs={experienceRefs}/>
        </section>
        <section ref={experienceRefs.managementexperiencesummaryRef}>
          <JoblistComponent />
        </section>
        <div className='section_title' ref={professionalAssociationsRef}>professional ASSOCIATIONS.</div>
        {/* <h1 style={{marginTop: '10%'}} ref={professionalAssociationsRef}>professional ASSOCIATIONS.</h1> */}
        <section ref={speakingRef}>
          <PublicSpeakingSection isMediumScreen={isMediumScreen} isSmallScreen={isSmallScreen}/>
        </section>
        <section>
          <AssociationsSection refs={experienceRefs}/>
        </section>
        <section ref={timelineRef}>
          <TimelineSection/>
        </section>
        <section ref={recommendationsRef} style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <RecommendationsSection isMediumScreen={isMediumScreen} isSmallScreen={isSmallScreen}/>
        </section>
        <section ref={contactRef} style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <ContactSection />
        </section>
        <section ref={resumeRef} style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
            <div style={{
            minHeight: '50vh',
            justifyContent: 'flex-end',
            display: 'flex',
            flexDirection: 'column',
          }}>
              {/* <a href='./YourResume.pdf' target='_blank'><h1 style={{marginBottom: '5%'}}>Resume Download. <MdDownloadForOffline /></h1></a> */}
              <a href={clientData.PortfolioPage.resume} target='_blank'><h1 style={{marginBottom: '5%'}}>Resume Download. <MdDownloadForOffline /></h1></a>
            </div>
        </section>
        <FooterSection />
      </div>
    </div>
  );
};

export default PortfolioPage;

