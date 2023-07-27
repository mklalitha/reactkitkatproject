import React from "react";
import { Link } from "react-router-dom";
import "./Medianavbar.css";

const Medianavbar = () => {




    return (
        <>

            <div className="media_navigation" id="media_nav_dropdown">
                <div className="nav_content_list_media">
                    <Link to="/Home" className="list_ref_media  active">Home</Link>
                </div>
                <div className="nav_content_list_media1" id="down">
                    <Link to="/ProductPage" className="list_ref_media">Products</Link><div className="up_down"><span id="drop_media_down" className="block" ><i className="fa fa-caret-down media_down" aria-hidden="true"></i></span><span id="drop_up_media" className="drop_up_media none" ><i className="fa fa-caret-up" aria-hidden="true"></i></span></div>
                    <div className="drop_down_cont_media none" id="drops_media">
                        <ul>
                            <li><Link to="/BiometricPage">Biometric Based HRM</Link></li>
                            <li><Link to="/E-CommercePage">E-Commerce</Link></li>
                            <li><Link to="/OfficeERPPage">Office ERP</Link></li>
                            <li><Link to="/MiniBankingPage">Mini Banking</Link></li>
                            <li><Link to="/TravelERPPage">Travel ERP</Link></li>
                            <li><Link to="/POSPage">POS On Billing</Link></li>
                            <li><Link to="/GoldLoanPage">Gold Loan Management</Link></li>
                            <li><Link to="/MedicalPage">Medical Billing</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="nav_content_list_media1" id="down1">
                    <Link to="/ServicePage" className="list_ref_media">Service</Link><div className="up_down"><span id="drop_media_down1" className="block"><i className="fa fa-caret-down media_down1" aria-hidden="true"></i></span><span id="drop_up_media1" class="drop_up_media1 none" ><i class="fa fa-caret-up" aria-hidden="true"></i></span></div>
                    <div className="drop_down_cont_media none" id="drops_media1">
                        <ul>
                            <li><Link to="/CustomizedPage">Customized Web</Link></li>
                            <li><Link to="/WebsiteDesignPage">Website Design And Development</Link></li>
                            <li><Link to="/WebHostingPage">Web Hosting</Link></li>
                            <li><Link to="/AndroidPage">Android Application Development</Link></li>
                            <li><Link to="/IOSPage">IOS Application Development</Link></li>
                            <li><Link to="/BulkPage">Bulk SMS</Link></li>
                            <li><Link to="/CRMPage">CRM</Link></li>
                            <li><Link to="/ERPPage">ERP</Link></li>
                            <li><Link to="/HRMPage">HRM</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="nav_content_list_media">
                    <Link to="/AboutPage" className="list_ref_media">About</Link>
                </div>
                <div className="nav_content_list_media">
                    <Link to="/CareerPage" className="list_ref_media">Career</Link>
                </div>
                <div className="nav_content_list_media">
                    <Link to="/ContactPage" className="list_ref_media">Contact</Link>
                </div>
            </div>
        </>
    )
}
export default Medianavbar;



