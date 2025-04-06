
import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './authorsection.module.css'
import { CiFacebook, CiInstagram  } from "react-icons/ci";


const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ['latin']
  })

const AuthorSection = () => {
    return (
        <div>
             <div className='section_title'>
                Author & Artist.
            </div>
            <div className={styles.author}>
                <div className={montserrat.className}>
                <div className={styles.container}>
                    <a href="https://babybooscoloringstudio.wordpress.com/">
                        <img className={styles.logo} src="/baby_boos_logo.png" alt="Baby Boos Coloring Studio Logo" />
                    </a>
                    <div className={styles.description_left}>At Baby Boo’s Coloring Studio, we champion the importance of celebrating diversity and representation. We are dedicated to promoting inclusivity through our range of activity and coloring books designed for boys, girls, and adults alike.</div>
                </div>
                </div>
                <h1>NEWEST ARRIVALS</h1>
                <div className={styles.book_container}>
                    <a href="https://amzn.to/3tVtYx5" target='_blank'>
                        <img className={styles.book_images} src="/book1.jpg" style={{objectFit: 'cover', objectPosition: '25% 25%'}}/>
                    </a>
                    <a href="https://amzn.to/3tVVjPI" target='_blank'>
                        <img className={styles.book_images} src="/book2.jpg" />
                    </a>
                    <a href="https://amzn.to/3Hdu06E" target='_blank'>
                        <img className={styles.book_images} src="/book3.jpg" />
                    </a>
                </div>
                <div>
                    <a href="https://babybooscoloringstudio.wordpress.com/" target='_blank'><button className='buttons'>
                        MORE BOOKS
                    </button></a>
                </div>
                <div className={styles.description}>
                <div className={montserrat.className}>
                    <p>Follow me on social media for updates and newest arrivals! Find us on Facebook and Instagram where we post Coming Soon and New Arrivals weekly.</p>
                    <a  className={styles.icon_img} href="https://www.instagram.com/babybooscoloringstudio/" target='_blank'>
                        <p style={{margin: '5% 0 1%', color: '#C42629', fontWeight: '600'}}>@BabyBoosColoringStudio</p>                
                    </a>
                </div>
                </div>
                <div className={styles.icons}>
                    <a  className={styles.icon_img} href="https://www.facebook.com/BabyBoosColoringStudio/" target='_blank'>
                        <CiFacebook />
                    </a>
                    <a  className={styles.icon_img} href="https://www.instagram.com/babybooscoloringstudio/" target='_blank'>
                        <CiInstagram />
                    </a>
                </div>
            </div>
        </div>   
    );
}

export default AuthorSection;