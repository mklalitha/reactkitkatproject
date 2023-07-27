import React from "react";
import "./Hrm.css";
import HRM_service from "../Services/img/hrm1.jpg";
import Data_management from "../Services/img/hrm3.jpg";
import Human_Resource_Management from "../Services/img/Human_Resource_Management.webp";
import HRM_modules from "../Services/img/HRM_modules.webp";
const HRMPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={HRM_service} width="100%" alt="HRM Service" className="sli_img1" />
                    {/* <img src="images/img36.jpg" width="100%"  class="sli_img2"/> */}
                </div>
            </div>

            <div className="content_lists">
                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">Human Resource Management (HRM)</h1>
                        <p class="cont_para_style">Human Resource Management Software simplifies the tasks of HR professionals easier. HRMS are
                            platforms that assist HR professionals with a wide range of tasks and processes, including Applicant Tracking System (ATS),
                            onboarding, attendance, company policies, payroll, appraisal, taxation, and employee database management. HRM product providing
                            a unified new age platform for an engaged workforce with features available for successfully driving sustainable performance,
                            happiness and well-being at work.</p>
                        <div class="img_pro">
                            <img src={Data_management} width="100%" height="100%" alt="Data Management" />
                        </div>
                        {/* <h2 class="title2">Employee Data Management</h2> */}
                        <p className="cont_para_style">Kitkat Software Technologies' HRM product delivers a unified new age platform for an engaged workforce,
                            complete with features for successfully driving long-term performance and well-being at work.</p>
                        <div class="img_pro">
                            <img src={Human_Resource_Management} width="100%" height="100%" alt="Human Resource Management" />
                        </div>
                        {/* <h2 class="title2">Time Sheet</h2> */}
                        <p className="cont_para_style">Human resource management (HRM) is a strategic approach to improving employee performance and experience
                            within an organisation by focusing on effective staffing, onboarding, deploying, and supervising workers. </p>

                        {/* <h2 className="title2">Leave Management</h2> */}
                        <p className="cont_para_style">HRM is frequently abbreviated as HR (human resources), which also refers to a company's department
                            in charge of managing employee policies.</p>
                        <div class="img_pro">
                            <img src={HRM_modules} width="100%" height="100%" alt="HRM Modules" />
                        </div>
                        <h2 className="title2">Responsibilities of human resources management:</h2>
                        <p className="cont_para_style">Human resource management has an impact on many
                            internal business aspects. From staffing and retention to establishing workplace policies
                            and regulatory compliance. In fact, any department that includes or interacts with employees
                            is automatically included in HRM.</p>
                        <p className="cont_para_style">Human Resources Management (HRM) activities include determining what staffing needs to be met
                            and whether to use independent contractors or hire employees to meet these needs, recruiting and training the best employees,
                            ensuring they are high performers, dealing with performance issues, and ensuring your personnel and management practises are
                            in compliance with various regulations. Employee benefits and compensation, employee records, and personnel policies are all
                            activities to manage.</p>
                        <ul>
                            <li><b>HR in a small business:</b> In a small business, HR is less likely to be a full-fledged department and may instead be handled by a single employee
                                or an outside consultant. Many small business owners and managers will incorporate aspects of human resources into their roles.</li>
                            <li><b>HR in a growing business:</b>Growing businesses may be classified as SME (small/medium enterprise). Because SMEs can have up to 200 employees,
                                HR departments will almost certainly include both managers and administrative personnel. HR departments in companies that are focused on growth will
                                most likely have a lot of recruitment, onboarding, and staff training work.</li>
                            <li><b>HR in a large enterprise:</b>On a larger scale, HR could be a sizable team in and of itself. HR departments in large corporations can be divided
                                into specialty areas such as recruitment, employee training, and workplace safety, with full teams in charge of each.</li>
                        </ul>
                    </div>
                </div>

            </div>


        </>
    )

}
export default HRMPage;