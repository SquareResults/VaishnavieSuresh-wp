import React from 'react';
import Image from 'next/image';
import { Montserrat, Bebas_Neue } from 'next/font/google'
import styles from './associations.module.css'


const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
  })

  const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin']
  })


const AssociationsSection = ({refs}) => {
    const {associationsRef} = refs;
    return (
        <div>
            <div className='lineborder'></div>
            <div className={styles.association} ref={associationsRef}>
            <h1>Associations</h1>
                <div className={montserrat.className}>
                    <div className={styles.italics}>
                        {/* My career has allowed me to deliver programs and services across multiple sectors */}
                    </div>
               
                        <div className={styles.gridContainer}>
                            <div className={styles.gridItem}>
                                <div className={styles.imageOverlay}>
                                    <a href="https://www.ciwem.org/" target="_blank">
                                    <img src="./ciwem7.png" className={styles.image_logo} alt="CIWEM Logo" style={{objectPosition: "top", marginTop: "20%"}}/>
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong></strong></div>
                                                {/* <div style={{fontSize: '10px'}}>&#40;Formerly the Grand Canyon Minority Supplier Development Council&#41;</div> */}
                                                {/* <div><strong>the Pacific Southwest Minority Supplier Development Council</strong></div> */}
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                </div>  
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://www.ieee.org/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="./IEEE.jpg" className={styles.image_logo} alt="IEEE Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong></strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://ieee-pes.org/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="./PES.png" className={styles.image_logo} alt="PES Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong></strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                </a>
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://ias.ieee.org/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="./IAS.png" className={styles.image_logo} alt="IAS Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong></strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://sight.ieee.org/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="./Sight.png" className={styles.image_logo} alt="Sight Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong></strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>   
    );
}

export default AssociationsSection;