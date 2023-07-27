import React from "react";
import "./Crm.css";
import CRM_software from "../Services/img/crm1.jpg";
import custom_crm from "../Services/img/crm2.jpg";
import CRM_development from "../Services/img/crm3.jpg";
import customer_relationship from "../Services/img/customer_relationship.webp";
const CRMPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={CRM_software} width="100%" alt="CRM Software" className="sli_img1" />
                    {/* <img src="images/CRM_software.jpg" width="100%"  className="sli_img2"/> */}
                </div>
            </div>

            <div className="content_lists">
                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">Customer Relationship Management (CRM)</h1>
                        <p className="cont_para_style">The most important aspect of business activities is customer relationship management (CRM) software solutions.
                            Customers will ultimately determine your business's success. With the advent of technologies and management systems that drive business excellence,
                            the world of business has changed its course and dimension.</p>
                        <div className="img_pro">
                            <img src={custom_crm} width="100%" height="100%" alt="Custom CRM" />
                        </div>
                        <h2 className="title2">Why should you opt for a Custom CRM development for your business?</h2>
                        <p className="cont_para_style">Using Kitkat software technologies and our customer relationship management software, you can optimise your marketing efforts
                            and create a more streamlined experience that is aligned with customer interests and needs. We offer the best CRM software development services in Coimbatore
                            to assist you in identifying hidden opportunities, driving adoption of new features or products, improving the bottom line, and ensuring user satisfaction.</p>
                        <p className="cont_para_style">Customer relationship management (CRM) software solutions are the most important aspect of business operations. With the
                            introduction of new technologies and management systems, the world of business has changed course and dimension. CRM development companies play an important role in this.
                            They create CRM software for their clients. These solutions are fantastic for resolving all customer issues. This increases customer satisfaction. Customer satisfaction is
                            critical to the success of any business. Companies must use the best CRM solutions available for their industry. This would allow them to maintain a proper competitive position.</p>
                        <div className="img_pro">
                            <img src={CRM_development} width="100%" height="100%" alt="CRM Development" />
                        </div>
                        <h2 className="title2">Benefits of CRM Development Services</h2>
                        <ul>
                            <li>CRM can track customer activity at every point of contact.</li>
                            <li>CRM keeps track of a customer's purchasing and selling habits.</li>
                            <li>CRM can generate and track Purchase Orders, Sales Orders, and Invoices.</li>
                            <li>CRM facilitates cross-selling and upselling by supplying historical data.</li>
                            <li>CRM tracks customer communication, problems, and solutions in a systematic manner.</li>
                            <li>CRM aids in the generation of sales forecasts based on customer feedback and communication.</li>
                            <li>CRM quickly identifies a product's target audience based on their purchase history.</li>
                        </ul>
                        <h2 className="title2">Custom CRM Development & Customized Solutions </h2>
                        <p className="cont_para_style">We can create custom crm software for your company. Every business
                            customer has issues that are unique to their industry. These issues will be addressed by our
                            crm services. When you hire us, we will create software solutions that are unique to you. We
                            can even create the most effective and beneficial crm solutions for small businesses. Meeting
                            all unique customer issues will be critical to the company's profitability and success.</p>
                        <div className="img_pro">
                            <img src={customer_relationship} width="100%" height="100%" alt="Customer Relationship" />
                        </div>
                        <h2 className="title2">Features Of Our CRM Solutions</h2>
                        <ul>
                            <li>These solutions are easily accessible from any internet-connected device.</li>
                            <li>These items are reasonably priced.</li>
                            <li>These software's operational costs are not excessive for standard ERP functionality.</li>
                            <li>More functionality can be added at a later a stage as per the needs of the business.</li>
                            <li>The workflow is completely automated.</li>
                            <li>Each customer's records can be easily kept up to date.</li>
                            <li>A large number of customers' data can be handled concurrently.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )

}
export default CRMPage;