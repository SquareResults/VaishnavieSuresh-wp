import React from 'react'
import { Montserrat } from 'next/font/google' 
import styles from './redblackboxes.module.css'

const montserrat = Montserrat({
    weight: ["400"],
    subsets: ['latin']
})


const RedBlackBoxes = () => {
    return (
        <div>
            <h1>Achievements</h1>
            <div className={styles.redblackboxes}>
                <div className={styles.gridContainer}>
                    <div className={styles.backgrid_a}>
                        <div className={styles.gridItem_a}>
                            <div className={styles.title}>
                            Presented and published journal at IEEE IPRECON 2021
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                <p>presented the research paper, &quot;Energy Management and Hybridization of Nissan Leaf Using Switched Capacitor Converter and Ultra-Capacitor&quot;.</p>
                                <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backgrid_r}>
                        <div className={styles.gridItem_a}>
                            <div className={styles.title}>
                            Increased Operational Efficiency by 25%
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                Led a comprehensive process optimization initiative that cut deliverable turnaround time by 25%, strengthening collaboration and improving workflow efficiency in ARCS.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.backgrid_b}>
                        <div className={styles.gridItem_b}>
                            <div className={styles.title}>
                            Fostering Growth: Engaging Employee Networks
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                Supported 300% growth in employee social media participation following development of channels connecting employees and leadership via executive videos and Facebook groups for dealers.
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div className={styles.backgrid_rb}>
                        <div className={styles.gridItem_b}>
                            <div className={styles.title}>
                            Boosting Views & Revenue: Dynamic Blog Strategy
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.description}>
                                <div className={montserrat.className}>
                                Increased organic views and revenue for company products and services by 75% through development and maintenance of corporate blog content marketing strategy.
                                </div>
                            </div>
                        </div>
                    </div>     */}
                </div>
            </div>
        </div>
    );
}

export default RedBlackBoxes;