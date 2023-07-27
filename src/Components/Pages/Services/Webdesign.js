import React from "react";
import "./Webdesign.css";
import static_website from "../Services/img/webdesign2.png";
import dynamic_website from "../Services/img/webdesign3.png";
import web_app from "../Services/img/web_app.webp";
import web_designing_service from "../Services/img/web_designing_service.webp";

const WebdesignPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={web_designing_service} width="100%" alt="Web Designing" className="sli_img1" />
                    {/* <img src="images/img38.jpg" width="100%"  class="sli_img2"> */}
                </div>
            </div>

            <div className="content_lists">
                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">Web Designing And Web Development</h1>
                        <p className="cont_para_style">Kitkat Software Technologies is a well-known website builder in Coimbatore, providing affordable web design services to both small
                            and large businesses, as well as individuals. We provide more than just website design; we also bring you more potential customers. Our team creates SEO-friendly
                            web design strategies. We perform quality control checks to ensure excellent results.</p>
                        <p class="cont_para_style">We are one of the most reputable real-time web development companies in Coimbatore. You've come to the right place if you're looking for
                            an expert to solve your business problems. Based on your specifications, we create custom websites, web apps, and mobile apps. We can build any type of web design
                            from scratch, including custom web design, custom web development, custom ecommerce websites, and even large web portals.</p>
                        <div class="img_pro">
                            <img src={static_website} width="100%" height="100%" alt="Static Website" />
                        </div>
                        <p className="cont_para_style">The vast majority of people use their mobile devices to gather information and engage in various shopping activities. Our responsive websites will
                            adjust to the size of the user's screen, providing the best user experience possible. </p>

                        <p className="cont_para_style">We design websites that are visually appealing, mobile responsive, lag-free, and SEO friendly. We provide custom mobile web design services
                            in Coimbatore. We are known for our low costs, which we achieve by utilising an open source content management system (CMS). Hire us to create a website that is both
                            beautiful and profitable.</p>
                        <div className="img_pro">
                            <img src={dynamic_website} width="100%" height="100%" alt="Dynmaic Website" />
                        </div>
                        <p className="cont_para_style">We deliver highly optimised mobile responsive web applications across all verticals. We specialise in custom websites with a variety of
                            features that can be integrated with business intelligence. We specialise in providing web development solutions that are customised to your business model.</p>
                        <p className="cont_para_style">We are one of the most visually appealing and mobile-responsive website design firms in Coimbatore.
                            A website must contain relevant and accurate information to keep a visitor's interest.</p>
                        <div className="img_pro">
                            <img src={web_app} width="100%" height="100%" alt="Web Development" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}
export default WebdesignPage;