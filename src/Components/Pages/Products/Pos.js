import React from "react";
import "./Pos.css";
import pos_billing from "../Products/img/pos1.png";
import billing_software from "../Products/img/billing_software.webp";
import point_on_sale from "../Products/img/point_on_sale.webp";


const PosPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={pos_billing} width="100%" alt="POS Billing" className="sli_img1" />
                    {/* <img src="images/billing.jpg" width="100%"  class="sli_img2"> */}
                </div>
            </div>

            <div className="content_lists">

                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">POS (Point On Sale) on Billing Software</h1>
                        <p class="cont_para_style">Kitkat Software Technologies POS billing software for businesses is a modern and user-friendly
                            system that manages all of your Customers' invoicing, collections, and disbursements. Kitkat's business billing software
                            gives you complete control over billing and invoicing. The high-level accuracy reporting in our software allows users to
                            monitor the health of all their customers. Standardized billing and real-time reporting are critical components of a
                            successful business and network expansion. </p>
                        <div className="side_img">
                            <img src={point_on_sale} alt="Point on sale" width="100%" height="100%" />
                        </div>
                        <p className="cont_para_style">GST Invoicing Software enables you to manage and monitor sales, procurement activities,
                            optimize inventory, manage accounts, taxes, and reports at the store level, and perform consolidated analysis at
                            the cloud back office all from a single location. You can appear contemporary and surprise your customer by
                            sending an invoice via SMS.</p>
                        <p className="cont_para_style">Mobile POS Billing App is a one-of-a-kind invoicing app for micro, small, and
                            medium-sized businesses. It is a straightforward business solution that requires no technical expertise
                            and merely automates your operations.</p>
                        <div className="side_img">
                            <img src={billing_software} alt="Billing Software" width="100%" height="100%" />
                        </div>
                        <p className="cont_para_style">Point of Sale Software includes advanced features such as built-in loyalty management,
                            future ordering, table reservation, cash management, integration with accounting packages, integration with external
                            loyalty programs, and many others that are essential for modern businesses.</p>
                        <p className="cont_para_style">Our educational billing and invoicing software is a cutting-edge cloud-based fee management,
                            online invoicing, and venue management platform. It turns the most resource-intensive aspects of managing an educational
                            institute's finances into a breeze. Our comprehensive school fees collection and billing software not only expedites
                            student fee collection, but also provides parents and students with a better experience.</p>

                    </div>
                </div>

            </div>

        </>
    )
}

export default PosPage;