import React from 'react';
import { useState } from "react"; 
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './contact.module.css'
import clientData from './clientData.json';

const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ['latin']
  })

const PORTFOLIO_CONTACT_EMAIL = ''

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // test mailto
        let mailToString = `mailto:${clientData.contact.email}?cc=${formData.email}&subject=${formData.name} - Portfolio Contact Form&body=${formData.comment}`
        window.location = mailToString;
    
        // Send form data to your backend API
        // const response = await fetch('/api/send-email', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // });
    
        // if (response.ok) {
        //   console.log('Email sent successfully!');
        // } else {
        //   console.error('Failed to send email.');
        // }

      };


    return (
        <div>
            <div className='section_title'>Contact.</div>
            <div className={montserrat.className}>
                <div className={styles.contact}>
                    <div className={styles.description}>
                    Let&#39;s get the conversation started! Explore opportunities and reach out if you&#39;re interested in collaborating or working together. I&#39;d love to connect with you on potential projects or discuss how we can achieve success together! 
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        {/* <div className={styles.labelContainer}> */}
                            <label className={styles.label}>
                            Name:
                            <input className={styles.inputarea} type="text" name="name" onChange={handleChange} value={formData.name} />
                            </label>
                            <label className={styles.label}>
                            Email:
                            <input className={styles.inputarea} type="email" name="email" onChange={handleChange} value={formData.email} />
                            </label>
                        {/* </div> */}
                    </div>
                    <div className={styles.comment}>
                        <label className={styles.label}>
                        Comment:
                        <textarea className={styles.textarea} name="comment" onChange={handleChange} value={formData.comment} />
                        </label>
                    </div>
                    <div className={styles.center}>
                        <button className={styles.buttons} type="submit">Submit</button>
                    </div>
                    
                    </form>
                </div>
            </div>
        </div>
     
    );
}

export default ContactSection;