import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import styles from './joblist.module.css'

const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const JoblistComponent = () => {

    const jobData = [
        {
            img_logo: "/uhaul_logo.png",
            img_alt: "U-Haul International Logo",
            img_style:  '',
            jobtitle: "DIRECTOR of social media marketing",
            company: "u-haul",
            dates: "2016 - PRESENT",
            job_description: [
                `Lead and coordinate team of Sr. Marketers in strategy and execution across all social media
                channels to drive traffic and conversions to uhaul.com and over 21,000 brick and mortar stores
                which include, paid search, Google shopping (product listing ads and local inventory ads),
                retargeting, digital display (programmatic, native and video), and paid social advertising
                (Facebook, Instagram, Linkedin, Twitter and Pinterest).`,
                `Develop strategy and counsel executives on crisis response situations on social media.`,
                `Lead the social marketing strategy for U-Haul and its affiliates through established policy,
                training and reporting.`,
                `Lead social, digital, and content marketing campaigns for 25+ business units that increased
                sales, share of voice and positive sentiment for U-Haul and its subsidiaries`,
                `Relationship building with industry leaders and vendors`,
                `Direct the creation and management of 21,000+ profile pages on (but not limited to) Google,
                Bing, LinkedIn, Facebook, Twitter, Pinterest, Snapchat, Instagram and other review sites`,
                `Collaborate with division Directors to monitor all interactive marketing campaigns and
                collaborate with Research division on strategic planning, advertising plan development and
                monitoring`,
                `Manage social online presence and reputation for 21,000 locations throughout North America.`,
                `Develop strategy and counsel executives on crisis response situations on social media.`,
                `Develop and maintain content marketing strategy for company blogs which has resulted in
                increased organic views and revenue.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/uhaul_logo.png",
            img_alt: "U-Haul International Logo",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "DIRECTOR LISTINGS MANAGEMENT AND LOCAL SEO",
            company: "u-haul",
            dates: "2009 - PRESENT",
            job_description: [
                `Develop, implement, and manage Local Search Program`,
                `Accountable for local listing and mapping optimization`,
                `Manage team of auditors in research, local listing optimization, analysis, and reporting
                Coordinate with web and digital teams in customer experience, enhancements, SEO and
                analysis of uhaul.com`,
                `Successfully transitioned U-Haul International’s 21,000 locations from print Yellow Pages
                advertising to interactive mobile and online profiles for marketing and advertising
                Established initial digital marketing contacts with top search engines, i.e. Google, Yahoo, Bing
                other key online publishers and data aggregators`,
                `Positioned U-Haul as a “trusted data provider” with search engines and aggregators to submit
                company listings directly for publication`,
                `Established 411 verification program to ensure listing accuracy and availability on directory
                assistance on apps and mobile devices and other digital devices`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/uhaul_logo.png",
            img_alt: "U-Haul International Logo",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Director OF YELLOW PAGES ADVERTISING",
            company: "U-HAUL INTERNATIONAL",
            dates: "2002 – 2009",
            job_description: [
                `Provided strategic oversight and management of the $50M+ print advertising program`,
                `Worked successfully with the CEO, Board of Directors, Marketing Company Presidents, and
                executive teams to achieve a successful print advertising program`,
                `Directed 15 member production team of analysts, programmers, auditors, typesetters, graphic
                artists, telephone management, White Pages processors, and administrative staff in the
                production of 40,000 Yellow Page display advertisements annually`,
                `Developed and implemented YP Directory advertising policies for U-Haul International`,
                `Negotiated multi-year advertising plans with U.S. and Canadian digital and print publishers,
                resulting in increased visibility and media cost savings between $5M-$10M annually`,
                `Re-established key industry and publisher relationships`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/focused_financial.JPG",
            img_alt: "Focused Financial Coach Logo",
            img_style:  '{"paddingTop": "10%"}',
            jobtitle: "Financial Coach",
            company: "Focused Financial Coach",
            dates: "2020 - PRESENT",
            job_description: [
                `As financial coaches, we are here to help you create goals and actually stick with them.`
            ],
            skillset: "yes",
            skill_title: "Skills",
            listofskills: [ "Analytical Skills", "Data Analysis", "Strategic Planning"]
        },
        // {
        //     img_logo: "/411_locals.png",
        //     img_alt: "411 Locals Logo",
        //     img_style:  '{"paddingTop": "13%"}',
        //     jobtitle: "Google Local Marketing Consultant",
        //     company: "411 Locals",
        //     dates: "2023",
        //     job_description: [
        //         `Redesigned and implemented a 12-week business plan curriculum approved for
        //         accreditation in Maricopa County Community College District`,
        //         `Instructed adult learners in business plan development; emphasis on market analysis,
        //         bookkeeping, financial projections, product pricing, distribution and operations. 40% established
        //         business success rate.`,
        //         `Provided instruction and mentoring in Small Business Start-Up and Management.`,
        //         `Provided hands on approach to learning about starting and operating a small business.`
        //     ],
        //     skillset: "yes",
        //     skill_title: "skills",
        //     listofskills: ["Local Search", "Google Analytics", "B2B Marketing Strategy"]
        // },
        {
            img_logo: "/je_solutions.jpg",
            img_alt: "J and E Solutions Logo",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Marketing And Advertising Consultant",
            company: "J&E Solutions",
            dates: "2014 - present",
            job_description: [
                `If your business marketing reality is not living up to expectations, it might be time to leverage our business and marketing consulting services. Give us a call if you have big marketing needs without a big marketing budget.Your company is small to mid-size but is growing rapidly. You have people in place on your marketing team but they don’t have the experience to take your marketing strategy to the next level. It's time to get a coach/consultant to help you move forward.`
            ],
            skillset: "yes",
            skill_title: "skills",
            listofskills: ["Digital Marketing", "Local Search", "Marketing Strategy", "Leadership",
                "Advertising", "Business Development", "Online Advertising", "Search Engine Optimization (SEO)",
                "Google Analytics", "Strategic Planning"
        
            ]
        },
        {
            img_logo: "/instructor_logo.png",
            img_alt: "Loan Fund Logo",
            img_style:  '{"paddingTop": "12%", "width": "150px"}',
            jobtitle: "Instructor/Curriculum Author",
            company: "Self-Employment Loan Fund (Non-Profit)",
            dates: "2001 – 2007",
            job_description: [
                `Redesigned and implemented a 12-week business plan curriculum approved for
                accreditation in Maricopa County Community College District`,
                `Instructed adult learners in business plan development; emphasis on market analysis,
                bookkeeping, financial projections, product pricing, distribution and operations. 40% established
                business success rate.`,
                `Provided instruction and mentoring in Small Business Start-Up and Management.`,
                `Provided hands on approach to learning about starting and operating a small business.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/priority_staffing.png",
            img_alt: "Priority Staffing Logo",
            img_style:  '{"paddingTop": "11%"}',
            jobtitle: "VP OPERATIONS",
            company: "PRIORITY STAFFING",
            dates: "2000 – 2001",
            job_description: [
                `Engineered Marketing, Sales, Business Development, and Account Management transformation to redefine brand strategy.`,
                `Efforts yielded $20.3 million increase in net income.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },
        {
            img_logo: "/CenturyLink_logo.png",
            img_alt: "CenturyLink Logo",
            img_style:  '{"paddingTop": "15%"}',
            jobtitle: "Commodity Manager",
            company: "centurylink (formerly Qwest Communications) ",
            dates: "1998 - 2000",
            job_description: [
                `Strategic buyer of services, with a documented record of leveraging purchasing power to
                facilitate organizational objectives.`,
                `Managed new and ongoing purchasing agreements with an annual spend of over $100
                million through contract negotiations, performance evaluations and site visits for the travel, training
                services, and promotional items/branded merchandise programs`,
                `Developed and implemented corporate communication strategy for Travel program to
                54,000 employees in 14-state territory`,
                `Negotiated $2M in cost savings and cost avoidances in employee travel program`,
                `Negotiated multi-year contract for Management Diversity Training resulted in a 20% savings.`,
                `Negotiated $5.5M subcontracting commitments for technician training services`,
                `Reduced individual employee training fees by approximately 11%`,
                `Negotiated a multi-year contract for branded services with a 7% savings from unit cost
                reductions, rebate plan, and volume incentives`,
                `Negotiated a first-time subcontracting plan with associated financial penalties to primary
                vendor in lieu of meeting requirements`,
                `Successfully implemented first-time Minority/Women-owned Business Enterprise (M/WBE)
                subcontracting plan resulting in increased corporate spending with minority travel service providers
                by 10%.`
            ],
            skillset: "no",
            skill_title: "",
            listofskills: ["", ""]
        },

    ]



    return (
        <div>
            <div className={styles.joblist}>
                {jobData.map((item, index) => (
                    <div key={index}>
                    <div className={styles.company_image}>
                        <img src={item.img_logo} alt={item.img_alt} className={styles.image} style={item.img_style ? JSON.parse(item.img_style) : {}}/>
                    </div>
                    { index > 0 ? <div className={styles.lineborder}></div> : null}
                        <div className='redborder'>
                            <div className={styles.redborder_title}>
                                {item.jobtitle}
                                <p className='redfont'>{item.company}</p>
                            </div>
                        </div>
                        <div className={montserrat.className}>
                            <div className={styles.time}>
                                {item.dates}
                            </div>
                            <div className={styles.description}>
                                <ul className={styles.list}>
                                    {item.job_description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {item.skillset === 'yes' && (
                            <div key={index}>
                            <div className={styles.title}>
                               {item.skill_title}
                            </div>
                            <div className={montserrat.className}>
                               <ul className={styles.list}>
                                    {item.listofskills.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                               </ul>
                           </div>
                           </div>
                        )}
                    </div>
                ))}
                
            </div>
        </div>   
    );
}

export default JoblistComponent;