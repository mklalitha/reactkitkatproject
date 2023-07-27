import React from "react";
import "./Flip.css";
import webdevelopment from "../Sliderimg/web.png";
import mobdevelopment from "../Sliderimg/illustion2.jpeg";
import digital from "../Sliderimg/illustion3.png";
import CRM from "../Sliderimg/Crm.jpeg";
import HRM from "../Sliderimg/Hrm.jpeg";
import ERP from "../Sliderimg/Erp.jpeg";
import { Link } from "react-router-dom";

const Flip = () => {
    return (
        <>

            <div className="index_flip_part">
                <div className="index_flip_main_part">
                    <div className="index_flip_main_part_head">
                        <h3>What We Do</h3>
                    </div>
                    <div className="index_flip_main_part_1">
                        <div className="index_flip_sub_part_1 flip_cont">
                            <div className="the_cards">
                                <div className="front_card">
                                    <div className="front_card_cont">
                                        <img src={webdevelopment} className="web_logo" alt="Web Design And Development" style={{ height: "100px", width: "100px" }} />
                                        <h2>Web Design And Development</h2>
                                    </div>
                                </div>
                                <div className="back_card">
                                    <div className="back_card_cont">
                                        <p>Websites are the most important channels for
                                            presenting your product and services and most significant part of business.</p>
                                        <Link to="/WebsiteDesignPage" className="flip_read">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index_flip_sub_part_1 flip_cont">
                            <div className="the_cards">
                                <div className="front_card">
                                    <div className="front_card_cont">
                                        <img src={mobdevelopment} className="Ios_logo" alt="Android And IOS Application Development" style={{ height: "100px", width: "100px" }} />
                                        <h2>Android And IOS Application Development</h2>
                                    </div>
                                </div>
                                <div className="back_card">
                                    <div className="back_card_cont">
                                        <p>Want to develop your digital or enterprise assistants on mobile?
                                            Emerging of smart phones users demanding the mobile apps.</p>
                                        <Link to="/AndroidApplicationPage" className="flip_read">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index_flip_sub_part_1 flip_cont">
                            <div className="the_cards">
                                <div className="front_card">
                                    <div className="front_card_cont">
                                        <img src={digital} className="Digital_logo" alt="Digital Marketing" style={{ height: "100px", width: "100px" }} />
                                        <h2>Digital Marketing And SEO</h2>
                                    </div>
                                </div>
                                <div className="back_card">
                                    <div className="back_card_cont">
                                        <p>Want to promote your product or services on digital platform?
                                            Our knowledges on SEO, SMO, PPC helps you to develop business.</p>
                                        <Link to="/CustomizedWebPage" className="flip_read">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="index_flip_main_part_2">
                        <div className="index_flip_sub_part_1 flip_cont">
                            <div className="the_cards">
                                <div className="front_card">
                                    <div className="front_card_cont">
                                        <img src={CRM} className="CRM_logo" alt="CRM Development" style={{ height: "100px", width: "100px" }} />
                                        <h2>CRM Development </h2>
                                        <p style={{ fontSize: "18px" }}>(Customer Relationship Management)</p>
                                    </div>
                                </div>
                                <div className="back_card">
                                    <div className="back_card_cont">
                                        <p>CRM software deploys technology to organize, automate, and synchronize sales, marketing, customer service, and technical support plus manage customers, records, and their surveys.</p>
                                        <Link to="/CRMPage" className="flip_read">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index_flip_sub_part_1 flip_cont">
                            <div className="the_cards">
                                <div className="front_card">
                                    <div className="front_card_cont">
                                        <img src={HRM} className="HRM_logo" alt="HRM Development" style={{ height: "100px", width: "100px" }} />
                                        <h2>HRM Development</h2>
                                        <p style={{ fontSize: "18px" }}>(Human Resourse Management)</p>
                                    </div>
                                </div>
                                <div className="back_card">
                                    <div className="back_card_cont">
                                        <p>HRM offers you wide solutions for HR department making it possible for other department to access specific employee data. </p>
                                        <Link to="/HRMPage" className="flip_read">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index_flip_sub_part_1 flip_cont">
                            <div className="the_cards">
                                <div className="front_card">
                                    <div className="front_card_cont">
                                        <img src={ERP} className="ERP_logo" alt=">ERP Development" style={{ height: "100px", width: "100px" }} />
                                        <h2> ERP Development</h2>
                                        <p style={{ fontSize: "18px" }}>(Enterprise resource planning)</p>
                                    </div>
                                </div>
                                <div className="back_card">
                                    <div className="back_card_cont">
                                        <p>Enterprise Resource Planning (ERP) is business management software that integrates all the data on business processes and resources.</p>
                                        <Link to="/ERPPage" className="flip_read">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Flip;
