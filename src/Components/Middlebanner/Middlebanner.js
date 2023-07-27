import React from "react";
import "./Middlebanner.css";


const MiddleBanner = () => {
        return (
                <>
                        <div className="index_menu_content">
                                <div className="index_menu_content_align">
                                        <div className="index_menu_design">
                                                <div className="index_design_left left">
                                                        <div className="index_page_cont">
                                                                <h2 className="index_disp_heading">Designing</h2>
                                                                <p>Engage with our professionals to generate your innovative ideas with the latest technologies and obtain our support.</p>
                                                        </div>
                                                </div>
                                                <div className="index_design_right right">
                                                        <img src="/images/web_designing.jpg" alt="Web design" height="100%" width="100%" />
                                                </div>
                                        </div>
                                        <div className="index_menu_plan">
                                                <div className="index_plan_left left1">
                                                        <img src="/images/front_end.webp" alt="Front-end development" height="100%" width="100%" />
                                                </div>
                                                <div className="index_plan_right right1">
                                                        <div className="index_page_cont">
                                                                <h2 className="index_disp_heading">Planning</h2>
                                                                <p>Plan with our expertise with your needs and Engage with them on further development with every possibilities of development.Extend your requirements with opportunities.</p>
                                                        </div>
                                                </div>
                                                <div className="index_plan_left left_media">
                                                        <img src="/images/web_application.jpg" alt="Web application" height="100%" width="100%" />
                                                </div>
                                        </div>
                                        <div className="index_menu_develop">
                                                <div className="index_develop_left left">
                                                        <div className="index_page_cont">
                                                                <h2 class="index_disp_heading">Developing</h2>
                                                                <p>Our developers are experienced enough to give result what you expect.They Make your needs real and user-friendly through the most recent programming tools.</p>
                                                        </div>
                                                </div>
                                                <div className="index_develop_right right">
                                                        <img src="/images/development.jpg" alt="Web development" height="100%" width="100%" />
                                                </div>
                                        </div>
                                        <div className="index_menu_responsive">
                                                <div className="index_resp_left left1">
                                                        <img src="/images/web_designing.jpg" alt="Web-design" height="100%" width="100%" />
                                                </div>
                                                <div className="index_resp_right right1">
                                                        <div class="index_page_cont">
                                                                <h2 class="index_disp_heading">Responsive</h2>
                                                                <p>Our developers develop accordingly, which is accessible throung smartphone, laptop, tableau ect with a high user experience that every user would like to have. </p>
                                                        </div>
                                                </div>
                                                <div className="index_resp_left left_media">
                                                        <img src="/images/web_application.jpg" alt="Mobile Application" height="100%" width="100%" />
                                                </div>
                                        </div>
                                </div>
                        </div>

                </>
        )
};

export default MiddleBanner;