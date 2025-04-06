import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './circlessection.module.css'
import CirclesImage from '../../public/circles_image.png';
import RedBlackBoxes from './RedBlackBoxes';

const montserrat = Montserrat({
    weight: '700',
    subsets: ['latin']
  })

const CirclesSection = () => {
    return (
        <div>
            {/* <h1>YEARS OF EXPERIENCE</h1>
            <div className={styles.yearsexperience}>
                <div className={styles.listofcircles}>
                    <div className={styles.circle_section}>
                        <div className={styles.circles_a}>5</div>
                        <div className={montserrat.className}>
                            <div className={styles.descript}>C-Suite Engagements and Sales</div>
                        </div>
                    </div>
                    <div className={styles.circle_section}>
                        <div className={styles.circles_b}>6</div>
                        <div className={montserrat.className}>
                            <div className={styles.descript}>Diversity Equity &#38; Inclusion Initiatives</div>
                        </div>
                    </div>  
                    <div className={styles.circle_section}>
                        <div className={styles.circles_c}>8</div>
                        <div className={montserrat.className}>
                            <div className={styles.descript}>FedERAL, State and Local Government</div>
                        </div>
                    </div>  
                    <div className={styles.circle_section}>
                        <div className={styles.circles_d}>9</div>
                        <div className={montserrat.className}>
                            <div className={styles.descript}>K-12 and Higher EdUCATION</div>
                        </div>
                    </div>  
                    <div className={styles.circle_section}>
                        <div className={styles.circles_e}>10</div>
                        <div className={montserrat.className}>
                            <div className={styles.descript}>Team Leadership</div>
                        </div>
                    </div>  
                </div>
                <div className={styles.image_container}>
                    <img src="/circles_image.png" alt="Circles Years of Experience" className={styles.circles_image}/>
                </div>
            </div> */}
            <RedBlackBoxes />
        </div>   
    );
}

export default CirclesSection;