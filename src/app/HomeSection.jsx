import React from 'react'
import { Montserrat } from 'next/font/google' 
import styles from './homesection.module.css'
import clientData from './clientData.json';
import FadeInOnLoad from './FadeInOnLoad'


const montserrat = Montserrat({
    weight: ["500"],
    subsets: ['latin']
})

const montserrat_sub = Montserrat({
    weight: ["200"],
    subsets: ['latin']
})

const HomeSection = () => {
    return (
        <div className={styles.home}>
        <div>
            <FadeInOnLoad>
            <div className={styles.home_title}>
                <h1 className={montserrat.className}>{clientData.Home.firstName} {clientData.Home.lastName}</h1>
            </div>
            <div className={`${styles.home_subheadings} ${montserrat_sub.className}`}>
                {clientData.Home.titles.map((title, index) => (
                    <h2 key={index}>
                    {title}
                    </h2>
                ))}
            </div>
            </FadeInOnLoad>
        </div> 
        </div>
    );
}

export default HomeSection;