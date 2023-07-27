import React from "react";
import "./Erp.css";
import ERP from "../Services/img/erp1.jpg";
import custom_erp_development from "../Services/img/erp2.jpg";
import erp_process from "../Services/img/erp3.jpg";
const ERPPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={ERP} width="100%" alt="Enterprise Resource Planning" className="sli_img1" />
                    {/* <img src="images/img31.jpg" width="100%"  classn="sli_img2"/> */}
                </div>
            </div>

            <div className="content_lists">
                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">Enterprise resource planning (ERP)</h1>
                        <p className="cont_para_style">Enterprise Resource Planning (ERP) systems are software systems that aid in the planning,
                            administration, and optimisation of internal business processes such as manufacturing, supply chain, financials, customer
                            relationship management, human resources, and warehouse management. A typical ERP software integrates an organization's data
                            and processes into a single unified system with the help of these solutions.</p>
                        <p className="cont_para_style">We offer the best ERP system for large and small businesses, as well as SME ERP software to meet the
                            needs of all business types. We provide custom ERP development services, along with horizontal and vertical ERP development services
                            tailored to your business's requirements. Kitkat Software Technologies is a leading ERP Development Company in Coimbatore that has been
                            providing ERP Solutions to our clients for over 8 years and employs the most experienced professionals. The company’s ERP, supply chain,
                            transportation management, manufacturing execution, product lifecycle, customer experience, warehouse management, and other solutions can
                            help businesses of all sizes scale and adapt to the trends in their industry.</p>
                        <div className="img_pro">
                            <img src={custom_erp_development} width="100%" height="100%" alt="ERP Development" />
                        </div>
                        <p className="cont_para_style">Companies can automate core processes while maintaining business-critical security, privacy, and flexibility.
                            Utilize cutting-edge application innovation in a secure cloud environment to achieve superior performance while lowering costs.</p>
                        <h2 className="title2">Our ERP development process:</h2>
                        <ul>
                            <li><b>Preparation for implementation:</b> The first stage of our development process includes consulting,
                                determining the scope of the project, the number of modules required, and so on. We begin by thoroughly
                                understanding and analysing your organization's strategy and existing business processes before recommending
                                an ERP solution tailored to your specific needs and requirements.</li>
                            <li><b>Configuration:</b> We proceed with the design of your ERP system. We typically use a two-tier development approach,
                                which means we create ERP software with two levels: corporate and subsidiary (department). In this way, each department
                                remains autonomous, focusing on its core business operations, while also being integrated into a single system.</li>
                            <li><b>Customization:</b> We provide such configuration options that incorporate your business rules and practises in order
                                to deliver the most appropriate ERP feature set. When you customise your ERP software, you maintain your competitive
                                advantage over organisations that use standard ERP functionality.</li>
                        </ul>
                        <div className="img_pro">
                            <img src={erp_process} width="100%" height="100%" alt="ERP Software" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}
export default ERPPage;