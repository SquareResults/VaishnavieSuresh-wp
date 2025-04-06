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
                        My career has allowed me to deliver programs and services across multiple sectors
                    </div>
               
                        <div className={styles.gridContainer}>
                            <div className={styles.gridItem}>
                                <div className={styles.imageOverlay}>
                                    <a href="https://pswmsdc.org/" target="_blank">
                                    <img src="/assoc1_pacific_supplier.jpg" className={styles.image_logo} alt=" Pacific Southwest Minority Supplier Development Council Logo" style={{objectPosition: "top", marginTop: "20%"}}/>
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div>Grand Canyon Minority Supplier Development</div>
                                                <div style={{fontSize: '10px'}}>&#40;Formerly the Grand Canyon Minority Supplier Development Council&#41;</div>
                                                <div><strong>the Pacific Southwest Minority Supplier Development Council</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                </div>  
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://www.ana.net/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="/assoc2_ana.jpg" className={styles.image_logo} alt="association of national advertisers Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong>association of national advertisers</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://www.hootsuite.com/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="/assoc3_Hootsuite-Logo.png" className={styles.image_logo} alt="Hootsuite Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div>Hootsuite</div>
                                                <div><strong>Board Member social marketing product council</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                </a>
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://www.azmultihousing.org/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="/ama-logo.png" className={styles.image_logo} alt="AZ Multifamily Association Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong>AZ Multifamily Association</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className={styles.gridItem}>
                                <a href="https://www.nmhc.org/" target="_blank">
                                <div className={styles.imageOverlay}>
                                    <img src="/nmhc-logo.png" className={styles.image_logo} alt="National Multifamily Housing Council  Logo" />
                                    <div className={styles.image_layer}></div>
                                    <div className={styles.textOverlay}>
                                        <div className={styles.description}>
                                            <div className={montserrat.className}>
                                                <div><strong>National Multifamily Housing Council </strong></div>
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