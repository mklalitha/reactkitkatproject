import React from "react";
import "./Office.css";
import erpuser from "../Products/img/erpp1.jpg";
import erp from "../Products/img/erpm3.jpg";
import Enterprise_resource from "../Products/img/erpp2.jpg";


const OfficeERPPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={erpuser} width="100%" alt="ERP" className="sli_img1" />
                    {/* <img src="images/erp3.jpg" width="100%"  class="sli_img2"> */}
                </div>
            </div>
            <div className="product_cont">
                <div className="career_p">
                    <h1 className="product_title">Enterprise Resource Planning</h1>
                    <p className="cont_para_style">ERP (Enterprise Resource Planning ) software is used by businesses to manage day-to-day business activities
                        such as accounting, procurement, project management, risk management, and supply chain operations. A complete ERP suite also includes
                        enterprise performance management software, which assists an organization's financial results in planning, budgeting, forecasting,
                        and reporting.By tracking all aspects of production, logistics, and financials, ERP systems will also provide
                        transparency into your entire business process. These integrated systems serve as a company's central hub for end-to-end
                        workflow and data, allowing access to a variety of departments.
                    </p>
                    <div className="img_pro">
                        <img src={erp} width="100%" alt="ERP Web" className="img1" />
                    </div>
                    <p className="cont_para_style">
                        Kitkat Software Technologies, a cloud-hosted project and resource management platform, has an impressive feature
                        set designed to assist project managers and development teams in monitoring the delivery of all client services, regardless of project type.
                        By ensuring visibility of all active projects and tasks, the cloud-hosted solution allows users to automate key processes, reduce resource
                        planning time, and reduce instances of redundant tasks. Its dashboard provides a high-level overview of all ongoing projects, allowing you
                        to quickly see where things stand.</p>
                    <div className="img_pro">
                        <img src={Enterprise_resource} width="100%" height="100%" alt="Enterprise Resource Planning" className="img1" />
                    </div>

                </div>
            </div>



        </>
    )
}

export default OfficeERPPage;