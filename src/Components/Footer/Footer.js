import React from "react";
import { Link } from "react-router-dom"
import "./Footer.css";
import Dateyear from "../Yearcontent/Yearcontent";
const FooterPage = () => {
  return (
    <>
      <div className="footer" >
        <div className="footer_flex">
          <div className="products footer_flex_cont">
            <h2>Products</h2>
            <ul>
              <li><Link to="/E-CommercePage" title="digital Commerce">E-Commerce</Link></li>
              <li> <Link to="/OfficeERPPage" title="Office ERM">Office ERM</Link></li>
              <li> <Link to="/BiometricPage" title="Biometric Based HRM">Biometric Based HRM</Link></li>
              <li>  <Link to="/MiniBankingPage" title="Mini Banking">Mini Banking</Link></li>
              <li><Link to="/GoldLoanPage" title="Gold Loan Management">Gold Loan Management</Link></li>
              <li> <Link to="/MedicalPage" title="Medical Billing">Medical Billing</Link></li>
              <li> <Link to="/TravelERPPage" title="Travel ERP">Travel ERP</Link></li>
              <li>  <Link to="/POSPage" title="pos_billing">POS on Billing</Link></li>
            </ul>
          </div>
          <div className="services footer_flex_cont">
            <h2>Services</h2>
            <ul>
              <li> <Link to="/CustomizedPage" title="Customized web">Customized Web</Link></li>
              <li><Link to="/WebsiteDesignPage" title="Website Design and Development">Website Design and Development</Link></li>
              <li> <Link to="/WebHostingPage" title="Web hosting">Web Hosting</Link></li>
              <li><Link to="/AndroidPage" title="Android">Android Application Development</Link></li>
              <li><Link to="/IOSPage" title="ios">IOS Application Development</Link></li>
              <li><Link to="/BulkPage" title="Bulk SMS">Bulk SMS</Link></li>
              <li> <Link to="/HRMPage" title="HRM">HRM</Link></li>
              <li> <Link to="/ERPPage" title="ERP">ERP</Link></li>
              <li> <Link to="/CRMPage" title="CRM">CRM</Link></li>
            </ul>
          </div>
          <div className="contact footer_flex_cont">
            <h2>Contacts</h2>
            <ul>
              <li>No.70/77,1st floor, Krishna complex,</li>
              <li>Kattor Road,Papanaickenpalayam, </li>
              <li>Coimbatore-641037, </li>
              <li>Tamil Nadu</li>
              <li>Phone :<span style={{ color: "#ffffff" }}> 0422 495 7272</span></li>
              <li>Mobile :<span style={{ color: "#ffffff" }}> 7010816299</span></li>
              <li style={{ color: "#ffffff" }}>kitkatsoftwaretechnologies@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer_line" ></div>
        <div className="footer_copy">
          <Dateyear />

        </div>
      </div>

    </>
  )

}
export default FooterPage;