import React from 'react';
import { useState } from "react"; 
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './footer.module.css'

const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin']
  })

const FooterSection = () => {
    return (
        <div className={styles.footer}>
            <div>
                <a href="https://theradarlist.com/" target="_blank" rel="noopener noreferrer">
                    <img src='./transparent-red-txt.png' alt="TheRadarList Logo" width="40px" />
                </a>
            </div>
            <div className={`${styles.designed} ${montserrat.className}`}>
                DEVELOPED &#38; DESIGNED BY <a href="https://theradarlist.com/" target="_blank" rel="noopener noreferrer">THERADARLIST</a>
            </div>
        </div>
    );
}
export default FooterSection;