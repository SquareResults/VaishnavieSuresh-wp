import React from 'react';
import { Montserrat } from 'next/font/google'
import styles from './framworksection.module.css'


const montserrat = Montserrat({
    weight: ['400', '800'],
    subsets: ['latin']
  })

const FrameworkSection = ({refs}) => {
    const {conceptsvisionRef, strategicplanningRef, drivingexecutionRef, performancemonitoringRef, successmeasurementRef} = refs;
    return (
        <div>
            <div className='section_title'>
                framework: guiding principles.
            </div>
            <div className={styles.framework_circle}>
                <img style={{
                    minHeight: '450px',
                    minWidth: '450px'
                }} src="/framework_background.jpg" alt="circle composed of 5 arrows" className={styles.image} />
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem_a}>
                        <h3>success measurement</h3>
                        <div className={montserrat.className}>
                            <p>Detailed Reporting</p>
                            <p>Stakeholders Acknowledgment</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem_a}>
                        <h3>Concepts + Vision</h3>
                        <div className={montserrat.className}>
                            <p>Build Business Case</p>
                            <p>Set Revenue Goals</p>
                            <p>Feasibility &#38; Due Diligence</p>
                            <p>ROI</p>
                        </div>
                    </div>
                    <div className={styles.gridItem_a}>
                        <h3>Performance Monitoring</h3>
                        <div className={montserrat.className}>
                            <p>Quality Delivery</p>
                            <p>Oversee all tasks and metrics</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem_a}>
                        <h3>Strategic Planning</h3>
                        <div className={montserrat.className}>
                            <p>Refine Scope, Budget + Schedules</p>
                            <p>Communication Strategy</p>
                            <p>Risk Management</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem_a}>
                        <h3>Drive Execution</h3>
                        <div className={montserrat.className}>
                            <p>Status Updates</p>
                            <p>KPIs</p>
                            <p>Quality Maintenance</p>
                            <p>Forecasts</p>
                        </div>
                    </div>
                    <div className={styles.gridItem}></div>
                </div>
            </div>

            {/* BREAKDOWN SECTION OF ITEMS */}
            <div className={styles.description_items}>
                {/* CONCEPTS AND VISION */}
                <div className={styles.title} ref={conceptsvisionRef}>
                    concepts and vision
                </div>
                <div className={styles.breakdown_section}>
                <div className={montserrat.className}>
                    <div className={styles.gridContainer_descript}>
                        <div className={styles.gridItem_descript}>
                            <div className={styles.descript_title}>
                                <span className={styles.red}>Build</span> Business Case:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Market Analysis: </strong>Conduct a thorough analysis of the market to identify opportunities and challenges.</li>
                                    <li><strong>SWOT Analysis: </strong>Assess the project’s strengths, weaknesses, opportunities, and threats.</li>
                                    <li><strong>Customer Needs Assessment: </strong>Understand and prioritize customer needs to align the project with market demands.</li>
                                    <li><strong>Competitor Analysis: </strong>Examine competitors to identify unique selling propositions and potential differentiators.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Set</span> Revenue Goals:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Financial Modeling: </strong>Develop detailed financial models to forecast revenue projections.</li>
                                    <li><strong>Profitability Analysis: </strong>Evaluate the profitability of the project by considering costs, pricing, and revenue potential.</li>
                                    <li><strong>Risk-Adjusted Revenue Targets: </strong>Set revenue targets with risk considerations, accounting for potential challenges and uncertainties.</li>
                                    <li><strong>Scalability Assessment: </strong>Consider the scalability of the project to ensure revenue goals can be met in various scenarios.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Feasibility</span> AND Due Diligence:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Technical Feasibility: </strong>Assess the technical capabilities required for project implementation.</li>
                                    <li><strong>Legal and Regulatory Compliance:</strong>Conduct due diligence to ensure compliance with relevant laws and regulations.</li>
                                    <li><strong>Resource Assessment: </strong>Evaluate the availability and adequacy of resources, including manpower, technology, and infrastructure.</li>
                                    <li><strong>Market Feasibility: </strong> Analyze the market conditions to determine if the project is viable and sustainable.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>ROI</span> &#40;Return on Investment&#41;:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Cost-Benefit Analysis: </strong>Compare the expected costs of the project against the anticipated benefits.</li>
                                    <li><strong>Timeframe for ROI: </strong>Define the expected timeframe for realizing a return on the investment.</li>
                                    <li><strong>Risk-Adjusted ROI:</strong>Consider potential risks and uncertainties in calculating the return on investment.</li>
                                    <li><strong>Post-Implementation Review: </strong>Plan for a review process post-implementation to assess the actual ROI against projections.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* STRATEGIC PLANNING */}
                <div className={styles.title} ref={strategicplanningRef}>
                    Strategic Planning
                </div>
                <div className={styles.breakdown_section}>
                <div className={montserrat.className}>
                    <div className={styles.gridContainer_descript}>
                        <div className={styles.gridItem_descript}>
                            <div className={styles.descript_title}>
                                <span className={styles.red}>Refine</span> scope:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Scope Definition: </strong> Clearly define the project&apos;s objectives, deliverables, and boundaries.</li>
                                    <li><strong>Scope Verification: </strong>Validate and gain consensus on the project scope with key stakeholders.</li>
                                    <li><strong>Scope Change Management: </strong>Establish a process for managing and documenting scope changes.</li>
                                    <li><strong>Budget + Schedules:</strong></li>
                                  
                                        <li className={styles.sublist}><strong>Budget Allocation: </strong>Allocate resources and funds based on the project&#39;s requirements and priorities.</li>
                                        <li className={styles.sublist}><strong>Schedule Development: </strong>Create a detailed project schedule with milestones and timelines.</li>
                                        <li className={styles.sublist}><strong>Contingency Planning: Incorporate buffers in both budget and schedule to account for unforeseen challenges.</strong></li>
                                        <li className={styles.sublist}><strong>Resource Planning: </strong>Identify and allocate the necessary resources, including personnel and materials.</li>
                                  
                                 
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Communication</span> Strategy:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Stakeholder Communication Plan: </strong>Define a plan for communicating with various stakeholders throughout the project.</li>
                                    <li><strong>Communication Channels: </strong>Determine the appropriate channels for different types of communication.</li>
                                    <li><strong>Feedback Mechanism: </strong>Establish a system for receiving and incorporating feedback from stakeholders.</li>
                                    <li><strong>Crisis Communication Plan: </strong>Develop a plan for communicating effectively in case of unexpected issues.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Risk</span> Management:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Risk Identification: </strong> Identify potential risks to the project&apos;s success.</li>
                                    <li><strong>Risk Assessment: </strong>Evaluate the likelihood and impact of identified risks.</li>
                                    <li><strong>Risk Mitigation Strategies: </strong>Develop strategies to minimize or eliminate potential risks.</li>
                                    <li><strong>Contingency Plans: </strong>Establish contingency plans for high-impact risks that cannot be fully mitigated.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* Driving Execution */}
                <div className={styles.title} ref={drivingexecutionRef}>
                    Driving Execution
                </div>
                <div className={styles.breakdown_section}>
                <div className={montserrat.className}>
                    <div className={styles.gridContainer_descript}>
                        <div className={styles.gridItem_descript}>
                            <div className={styles.descript_title}>
                                <span className={styles.red}>Status</span> Updates:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Regular Reporting: </strong>Implement a regular reporting system to update stakeholders on project progress.</li>
                                    <li><strong>Milestone Celebrations: </strong>Recognize and celebrate key milestones to boost team morale.</li>
                                    <li><strong>Issue Identification:  </strong>Encourage team members to identify and report issues promptly for quick resolution.</li>
                                    <li><strong>KPIs &#40;Key Performance Indicators&#41;:</strong></li>
                                        <li className={styles.sublist}><strong>KPI Selection: </strong>Define and select relevant KPIs aligned with project goals.</li>
                                        <li className={styles.sublist}><strong>Performance Measurement: </strong>Regularly measure and evaluate performance against established KPIs.</li>
                                        <li className={styles.sublist}><strong>Continuous Improvement: </strong>Use KPI data to identify areas for improvement and implement necessary changes.</li>
                                 
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Quality</span> Maintenance:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Quality Standards: </strong>Clearly define and communicate quality standards for project deliverables.</li>
                                    <li><strong>Quality Assurance Processes: </strong>Implement processes to ensure adherence to quality standards.</li>
                                    <li><strong>Continuous Monitoring: </strong>Regularly monitor and assess the quality of work throughout the project lifecycle.</li>
                                    <li><strong>Feedback Loops: </strong>Establish feedback loops for continuous improvement in quality.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Forecasts</span>:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Resource Forecasting: </strong>Forecast resource needs based on project progress and future requirements.</li>
                                    <li><strong>Risk Forecasting: </strong>Anticipate potential risks and their impact on project outcomes.</li>
                                    <li><strong>Financial Forecasting: </strong>Project and update financial forecasts based on actual performance and changes in project dynamics.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* Performance Monitoring */}
                <div className={styles.title} ref={performancemonitoringRef}>
                    Performance Monitoring 
                </div>
                <div className={styles.breakdown_section}>
                <div className={montserrat.className}>
                    <div className={styles.gridContainer_descript}>
                        <div className={styles.gridItem_descript}>
                            <div className={styles.descript_title}>
                                <span className={styles.red}>Quality</span> Delivery:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Quality Control Inspections: </strong>Conduct regular inspections to ensure deliverables meet quality standards.</li>
                                    <li><strong>Client Feedback: </strong>Gather feedback from clients and stakeholders to assess satisfaction.</li>
                                    <li><strong>Continuous Improvement: </strong>Use feedback and inspection results to drive continuous improvement in quality.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Oversee</span> All Tasks and Metrics:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Task Tracking: </strong>Implement a robust task tracking system to monitor progress on all project tasks.</li>
                                    <li><strong>Metric Analysis: </strong>Regularly analyze project metrics to identify trends and areas for improvement.</li>
                                    <li><strong>Resource Utilization: </strong>Monitor the efficient use of resources to optimize project outcomes.</li>
                                    <li><strong>Comprehensive Reporting: </strong>Provide comprehensive reports to stakeholders, summarizing key metrics and overall project health.</li>
                                    <li>Remember, effective project management requires a dynamic and adaptive approach, so these
                                    details can be further tailored to the specific needs and nature of your project.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* Success Measurement */}
                <div className={styles.title} ref={successmeasurementRef}>
                    Success Measurement
                </div>
                <div className={styles.breakdown_section}>
                <div className={montserrat.className}>
                    <div className={styles.gridContainer_descript}>
                        <div className={styles.gridItem_descript}>
                            <div className={styles.descript_title}>
                                <span className={styles.red}>Detailed</span> Reporting:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Comprehensive Performance Reports: </strong>Generate detailed reports covering all aspects of project
                                        performance, including timelines, budget adherence, quality metrics, and key performance
                                        indicators &#40;KPIs&#41;.</li>
                                    <li><strong>Visual Data Representation: </strong>Utilize charts, graphs, and other visual aids to make complex data
                                        more accessible and easily understandable for stakeholders.</li>
                                    <li><strong>Trend Analysis: </strong>Conduct trend analysis to identify patterns in project performance and make
                                        data-driven decisions for continuous improvement.</li>
                                    <li><strong>Variance Analysis: </strong>Compare actual project performance against the planned benchmarks,
                                        investigating any significant variances.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Stakeholders</span> Acknowledgments:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Stakeholder Recognition Programs: </strong>Implement recognition programs to acknowledge the
                                        contributions of key stakeholders, including team members, clients, and partners.</li>
                                    <li><strong>Public Acknowledgments: </strong>Recognize project successes publicly through press releases, social
                                        media, or other communication channels.</li>
                                    <li><strong>Awards and Certifications: </strong>Pursue and showcase relevant industry awards and certifications as a
                                        testament to the project&#39;s success.</li>
                                    <li><strong>Acknowledgment Events: </strong>Organize events or ceremonies to acknowledge and thank
                                        stakeholders for their dedication and support.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Success</span> Criteria:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Clear Success Metrics: </strong>Define specific success criteria that align with the project&#39;s goals and
                                        objectives.</li>
                                    <li><strong>Key Milestone Achievements: </strong>Identify and celebrate key milestone achievements that
                                        contribute to the overall success of the project.</li>
                                    <li><strong>Client Satisfaction Surveys: </strong>Conduct client satisfaction surveys to gather feedback and measure
                                        the success of meeting client expectations.</li>
                                    <li><strong>Post-Implementation Review:</strong>Assess the project&#39;s success through a comprehensive review
                                        process after the completion of key deliverables.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Lessons</span> Learned:</div>
                            <div className={styles.list}>
                                <ul>
                                    <li><strong>Post-Project Evaluation: </strong>Conduct a thorough evaluation of the project, focusing on both
                                        successes and challenges.</li>
                                    <li><strong>Documentation of Lessons Learned: </strong>Document insights gained from the project, detailing what
                                        worked well and areas for improvement.</li>
                                    <li><strong>Knowledge Sharing Sessions: </strong>Host knowledge-sharing sessions to disseminate lessons learned
                                        throughout the organization for continuous learning.</li>
                                    <li><strong>Integration into Future Projects: </strong>Apply lessons learned to improve processes and decision-making in future projects.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.gridItem_descript}>
                        <div className={styles.descript_title}>
                                <span className={styles.red}>Continuous</span> Improvement:</div>
                            <div className={styles.list}>
                                <ul>
                                  <li><strong>Feedback Mechanisms: </strong>Establish feedback mechanisms to collect input from stakeholders on
                                        the project&#39;s success and areas for improvement.</li>
                                  <li><strong>Iterative Planning: </strong>Use feedback to iterate and refine project management approaches for
                                        ongoing and future projects.</li>
                                  <li><strong>Benchmarking: </strong>Compare project performance against industry benchmarks and best practices to
                                        identify opportunities for improvement.</li>
                                  <li><strong>Adaptive Strategies: </strong> Implement adaptive strategies based on insights gained during the project
                                        to enhance overall project management effectiveness.</li>
                                  <li><strong>Sustainability and Long-Term Impact:</strong></li>
                                
                                    <li className={styles.sublist}><strong>Environmental Impact Assessment: </strong>If applicable, assess and report on the project&#39;s
                                        environmental impact, showcasing sustainable practices.</li>
                                    <li className={styles.sublist}><strong>Long-Term Benefits Realization: </strong>Monitor and report on the realization of long-term benefits and
                                        outcomes resulting from the project.</li>
                                    <li className={styles.sublist}><strong>Legacy Planning: </strong>Develop plans for sustaining project success beyond its initial implementation,
                                        ensuring long-term value for stakeholders.</li>
                              
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>   
    );
}

export default FrameworkSection;