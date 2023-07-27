import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProductDropdown from "../SelectMenu/Prodropdown";
import ServiceDropdown from "../SelectMenu/Serdropdown";







const NavPage = () => {


    const [proDropdown, setProdropdown] = useState(false);
    const [serDropdown, setSerdropdown] = useState(false);




    const [click, setClick] = useState(false);
    const handleClick = () => { setClick(!click) };
    const closeMobileMenu = () => setClick(false);




    // drop1
    const onMouseProEnter = () => {

        setProdropdown(true);

    };

    const onMouseProLeave = () => {

        setProdropdown(false);

    };
    //    drop2
    const onMouseSerEnter = () => {

        setSerdropdown(true)
    };

    const onMouseSerLeave = () => {

        setSerdropdown(false);
    };



    return (

        <>
            <div className="heading_part_nav sticky" id="navbar">



                <div className="logo_img_cont">
                    <div className="logo_img_cont_img"  >
                        <Link to="/Home" onClick={closeMobileMenu}><img src="./logo/kitakat Logo (1).jpg" alt="Kitkat Software Technologies" width="100%" height="100%" />
                        </Link>
                    </div>
                </div>
                <div className="nav_part_path">
                    <div className="nav_content_list5">
                        <Link to="/Home" className="list_ref  active">HOME</Link>
                    </div>
                    <div className="nav_content_list1" onMouseEnter={onMouseProEnter} onMouseLeave={onMouseProLeave}>
                        <Link to="/ProductPage" className="list_ref">PRODUCTS</Link>
                        {proDropdown && <ProductDropdown />}
                        {/* <div className="drop_down_cont" id="drops">
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
                </div> */}
                    </div>
                    <div className="nav_content_list1" onMouseEnter={onMouseSerEnter} onMouseLeave={onMouseSerLeave}>
                        <Link to="/ServicePage" className="list_ref">SERVICES</Link>
                        {serDropdown && <ServiceDropdown />}
                        {/* <div className="drop_down_cont" id="drops1">
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
                 </div> */}
                    </div>
                    <div className="nav_content_list">
                        <Link to="/AboutPage" className="list_ref">ABOUT</Link>
                    </div>
                    <div className="nav_content_list">
                        <Link to="/CareerPage" className="list_ref">CAREER</Link>
                    </div>
                    <div className="nav_content_list">
                        <Link to="/ContactPage" className="list_ref">CONTACT</Link>
                    </div>
                    <div className="media_hidden">
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <div className={click ?'nav_content_list_media ' :'media_navigation hidden'}>
       
        </div>
                        {/* <div className="nav_content_list2" id="drop_down_icon_part" onclick="drop_down_function()" >
                    <div style={{textDecoration:"none" ,color:"#FF635E"}}>
                        <i className="fa fa-bars"  
                        aria-hidden="true" style={{fontSize:"25px"} }></i>
                    </div>
             </div>
             <div className="nav_content_list3" id="drop_down_icon_part1" onclick="drop_up_function()">
                <i className="fa fa-times" aria-hidden="true" style={{fontSize:"25px" ,marginLeft:"20px" ,color:"#FF635E"}}></i>
         </div> */}
                    </div>
                </div>
            </div>
            <div className="media_navigation" id="media_nav_dropdown">
 <div className="nav_content_list_media">
     <Link to="/Home" className="list_ref_media  active">Home</Link>
 </div>
<div className="nav_content_list_media1"  id="down">
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
 <Link to="/AboutPage"  className="list_ref_media">About</Link>
</div>
 <div className="nav_content_list_media">
 <Link to="/CareerPage"className="list_ref_media">Career</Link> 
 </div>
 <div className="nav_content_list_media">
 <Link to="/ContactPage" className="list_ref_media">Contact</Link>
 </div>
             </div>


        </>
    )

}
export default NavPage;


