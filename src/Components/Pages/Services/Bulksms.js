import React from "react";
import "./Bulksms.css";
import Bulk_sms from "../Services/img/bulkmain.png";
import sms_marketing from "../Services/img/sms_marketing.webp";
import sms_service from "../Services/img/bulk1.png";
const BulksmsPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={Bulk_sms} width="100%" alt="Bulk Sms" className="sli_img1" />
                    {/* <img src="images/img24.jpg" width="100%"  className="sli_img2"/> */}
                </div>
            </div>

            <div className="content_lists">
                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">Bulk SMS</h1>
                        <p className="cont_para_style">BULK SMS Marketing is one of the most efficient, dependable, and cost-effective methods of marketing to your customers and businesses.
                            This is the most straightforward method of promotion. This is utilized throughout the world and has received positive feedback from users. </p>
                        <div className="img_pro">
                            <img src={sms_service} width="100%" height="100%" alt="Sms Service Provider" />
                        </div>
                        <p className="cont_para_style">Bulk SMS, also known as mass text messaging, is a method of communicating with hundreds or thousands of contacts at the same time.
                            Regardless of your company's size, budget, or industry, mass SMS can produce results. Bulk texting allows you to save time and effort by sending the same message
                            to different segments of your audience. Kitkat Software Technologies in Coimbatore provides the best bulk text message service, as well as a variety of marketing tools.</p>
                        <h2 className="title2">Promotional SMS Services</h2>
                        <p className="cont_para_style">Promotional bulk sms is one of the most cost-effective marketing solutions available. In a matter of seconds, you can raise awareness
                            about your brand, product, or offer with a single click. You can also send new offers, products, or events to your clients right away. Alot SMS offers promotional
                            SMS services for brand promotion, special offers, product marketing, and general awareness.</p>
                        <h2 className="title2">Transactional SMS Services</h2>
                        <p className="cont_para_style">Transactional SMS services are ideal for communicating with existing customers by sending alerts, reminders, and updates.
                            It is simple to send bulk SMS all over the world using a user-friendly web interface. Any type of information sharing SMS is referred to as transactional SMS.
                            For sending Transactional SMS, the government has designated specific categories.</p>
                        <h2 className="title2">Branding SMS Services</h2>
                        <p className="cont_para_style">Branding bulk sms is one of the most affordable marketing solutions on the market. With a single click, you can raise awareness
                            about your brand, product, or offer in a matter of seconds. You can also immediately send new offers, products, or events to your clients. Alot SMS provides
                            promotional SMS that can be used to promote your brand. You can send promotional SMS with your brand name, which will increase product awareness in the targeted
                            market</p>
                        <div className="img_pro">
                            <img src={sms_marketing} width="100%" height="100%" alt="SMS Marketing" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}
export default BulksmsPage;