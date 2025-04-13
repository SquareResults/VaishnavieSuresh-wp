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
            img_logo: "./SQR.png",
            img_alt: "SquareResults",
            img_style: '{"paddingTop": "5%"}',
            jobtitle: "Operations Manager",
            company: "SquareResults",
            dates: "Sep 2024 – Present",
            job_description: [
                `Led process improvement initiatives, streamlining workflows and reducing production time, which enhanced team productivity and operational efficiency.`,
                `Developed and enforced Standard Operating Procedures (SOPs) to maintain consistency in quality assurance, improve compliance, and optimize daily operations.`,
                `Implemented lean methodologies to identify inefficiencies, eliminate waste, and drive continuous improvement across teams.`,
                `Collaborated with cross-functional departments to enhance resource utilization, ensuring smooth coordination and effective execution of operational strategies.`    

            ],
            skillset: "yes",
            skill_title: "Skills",
            listofskills: ["Process Optimization", "Lean Methodologies", "Quality Assurance", "Workflow Automation"]
        },
        {
            img_logo: "./ARCS.jpg",
            img_alt: "ARCS",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Associate Operations Analyst",
            company: "Autonomy Research Center for STEAHM (ARCS – NASA-Sponsored)",
            dates: "Nov 2023 – May 2024",
            job_description: [
                `Led a process optimization initiative, reducing turnaround time by 25%, enhancing team collaboration and operational efficiency.`,
                `Developed bi-weekly structured maintenance plans, reducing workflow disruptions and targeting critical causes of downtime.`,
                `Managed logistics for high-profile events, reducing costs by 10% through efficient venue setup, inventory control, and resource planning.`,
            
            ],
            skillset: "yes",
            skill_title: "Skills",
            listofskills: ["Process Optimization", "Logistics Managemen", "Event Planning", "Maintenance Scheduling", "Total Quality Management (TQM)", "Data-Driven Decision Making",]
        },
        {
            img_logo: "./kUMON.png",
            img_alt: "KUMON",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Operations Coordinator – Education, Volunteer",
            company: "Kumon",
            dates: "Sep 2022 – Feb 2024",
            job_description: [
                `Implemented instructional strategies for reading and math, improving student performance by 15% within six months.`,
                `Optimized filing systems and data input processes, reducing project turnaround time by 20% while managing multiple educational events.`,
                `Designed personalized training plans for new hires, accelerating their professional growth and alignment with departmental objectives.`,
                
            ],
            skillset: "yes",
            skill_title: "Skills",
            listofskills: ["Educational Program Management", "Training & Development", "Data Organization", "Performance Improvement", "Agile Learning", "Student-Centered Teaching"]
        },
        {
            img_logo: "./Brainnest.png",
            img_alt: "Brainnest",
            img_style:  '{"paddingTop": "10%"}',
            jobtitle: "Operations Project Management Analyst Trainee",
            company: "Brainnest, Germany",
            dates: "Jan 2022 – Feb 2022",
            job_description: [
                `Conducted workflow analysis, identifying three key efficiency barriers and implementing solutions to optimize resource allocation.`,
                `Developed a Work Breakdown Structure (WBS) to improve project resource planning and budget allocation.`,
                `Diagnosed project bottlenecks and implemented structured documentation processes, enhancing communication and team collaboration.`,
            ],
            skillset: "yes",
            skill_title: "Skills",
            listofskills: [ "Workflow Analysis", "Resource Planning", "Project Documentation", "Agile Project Management", "Critical Path Method (CPM)", "Risk Assessment"]
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
            img_logo: "./GE.png",
            img_alt: "GE",
            img_style:  '{"paddingTop": "5%"}',
            jobtitle: "Digital Technology & Enterprise Resource Planning (ERP) Intern",
            company: "General Electric (Virtual)",
            dates: "Jun 2020 – Jul 2020",
            job_description: [
                `Created a comprehensive Level-1 business overview, aligning project goals with organizational objectives.`,
                `Designed detailed process maps, optimizing workflows and increasing project delivery speed by 11%.`,
                `Conducted root cause analysis, eliminating bottlenecks and improving task assignments, leading to a 20% increase in efficiency.`,
            ],
            skillset: "yes",
            skill_title: "skills",
            listofskills: ["ERP Systems", "Digital Transformation", "Process Mapping", "Lean Six Sigma",
                "Business Process Reengineering", "Data Analytics",
            ]
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