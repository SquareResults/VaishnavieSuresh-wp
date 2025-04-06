import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import styles from './experience.module.css';


const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const ExperienceSection = () => {
    return (
        <div>
            <div className='section_title'>
                Experience.
            </div>
        </div>   
    );
}

export default ExperienceSection;