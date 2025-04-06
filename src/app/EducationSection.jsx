import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import styles from './education.module.css';
import clientData from './clientData.json';

const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const EducationSection = () => {

    const whiteSpacestyle = {'@media screen and (max-width: 1330px)': {
        whiteSpace: 'normal', /* Allow text wrapping on smaller screens */
        overflow: 'visible', /* Display overflowing text */
        textOverflow: 'clip', /* Display full content without ellipsis */
      }}

    return (
        <div>
            <div className='section_title'>
                {clientData.Education.title}
            </div>
            <div className={styles.education}>
                <div className={styles.gridContainer}>
                    {clientData.Education.data.map((item, index) => (
                    <div key={index} className={styles.gridItem}>
                        <div className={styles.imageOverlay}>
                            <img src={item.img} alt={item.img_alt} className={styles.image_logo} />
                            <div className={styles.image_layer}></div>
                            <div className={styles.textOverlay}>
                                <div className={styles.year}>{item.year}</div>
                                <div className={styles.ed_description}>
                                    <div className={montserrat.className}>
                                        <a href={item.link}>
                                            <div className={styles.school}>{item.school}</div>
                                        </a>
                                        <div style={{fontSize: '10px'}}>{item.sub_text}</div>
                                        <div className={styles.diploma}>{item.degree}</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>        
                    ))}
                </div>

                  {/* ********** LIST OF SCHOOLS AND CERTIFICATES ********** */}
                <div className={styles.listofedu}>
                    <div className={montserrat.className}>
                        {clientData.Education.data.map((item, index) => (
                        <div key={index} className={styles.line_group}>
                            <a href={item.link}>
                            <div className={styles.certification_location} style={{textAlign: "left"}}>{item.institutions}</div>
                            </a>
                            <div className={styles.line} style={{ width: '80%' }}></div>
                            <div className={styles.certification}  style={{textAlign: "right"}}>{item.degree}</div>
                        </div>
                          ))}
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default EducationSection;