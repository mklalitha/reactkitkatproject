import React from "react";
import "./Webhost.css";

import web_hosting from "../Services/img/webhost1.jpg";
import Internet_hosting from "../Services/img/Internet_hosting.jpg";
import web_hosting_service from "../Services/img/webhost3.jpg";
const WebhostPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={web_hosting} width="100%" alt="Images" className="sli_img1" />
                    {/* <img src="images/img15.jpg" width="100%"  class="sli_img2"> */}
                </div>
            </div>

            <div className="content_lists">
                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">Web Hosting</h1>
                        <p className="cont_para_style">Web hosting is a service that allows businesses and individuals to publish their websites or web pages on the Internet.
                            A web host, also known as a web hosting service provider, is a company that offers the technologies and services required for a website or webpage
                            to be viewed on the Internet. Websites are hosted, or saved, on specialised computers known as servers. All Internet users need to do to view your
                            website is type your website address or domain into their browser. After that, their computer will connect to your server, and your webpages will be
                            delivered to them via the browser. Best hosting service provider gives easy to use and host any website services. </p>
                        <p className="cont_para_style">We provide Web hosting services to ensure that our clients' websites are available 24 hours a day, seven days a week. Furthermore,
                            when website owners require assistance or troubleshooting (e.g., script debuting, email not being able to send/receive, domain name renewal, and so on), the
                            web host's in-house support is the go-to person. Our professional web hosting service ensures that business owners have a hassle-free experience, allowing them
                            to focus their time and effort on their businesses. </p>
                        <div className="img_pro">
                            <img src={Internet_hosting} alt="Images" width="100%" height="100%"/>
                        </div>
                        <p className="cont_para_style">Kitkat Software Technologies provides Internet hosting services that enable individuals and businesses to publish their websites
                            on the World Wide Web. Web hosts are companies that provide clients with server space that they own or lease, as well as Internet access, typically in a
                            data centre.</p>
                        <p className="cont_para_style">Our Web Service provides a wide range of Expert Shared Hosting Plans to meet any requirement. Whether you're starting a blog
                            with WordPress, implementing a CMS solution with Drupal, launching an online store with E-Commerce, or any other venture, our Expert Web Hosting plans
                            are exactly what you've been looking for.</p>
                        <div className="img_pro">
                            <img src={web_hosting_service} alt="Images" width="100%" height="100%"/>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )

}
export default WebhostPage;