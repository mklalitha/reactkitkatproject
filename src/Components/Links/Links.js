import React from "react";
import {Routes,Route} from "react-router-dom";
import  Home  from "../Pages/Home/Home";
import AboutPage from "../Pages/About/About";
import CareersPage from "../Pages/Careers/Careers";
import ContactPage from "../Pages/Contacts/Contacts";
import BiometricPage from "../Pages/Products/Biometric";
import EcommercePage from "../Pages/Products/Ecommerce";
import MinibankPage from "../Pages/Products/Minibank";
import OfficeERPPage from "../Pages/Products/Office";
import TravelPage from "../Pages/Products/Travel";
import PosPage from "../Pages/Products/Pos";
import GoldPage from "../Pages/Products/Gold";
import MedicalPage from "../Pages/Products/Medical";
import CustomizedPage from "../Pages/Services/Customized";
import WebdesignPage from "../Pages/Services/Webdesign";
import WebhostPage from "../Pages/Services/Webhost";
import AndroidPage from "../Pages/Services/Android";
import IOSPage from "../Pages/Services/Ios";
import BulksmsPage from "../Pages/Services/Bulksms";
import CRMPage from "../Pages/Services/Crm";
import ERPPage from "../Pages/Services/Erp";
import HRMPage from "../Pages/Services/Hrm";





const MainLink = ()=>{
    return(
        <Routes>

            {/* navbar link */}
            <Route path="/Home" exact element={<Home/>}></Route>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/AboutPage" exact element={<AboutPage/>}></Route>
            <Route path="/ProductPage" exact element={<Home/>}></Route>
            <Route path="/ServicePage" exact element={<Home/>}></Route>
            <Route path="/CareerPage" exact element={<CareersPage/>}></Route>
            <Route path="/ContactPage" exact element={<ContactPage/>}></Route>

             {/* product drop down link */}

            <Route path="/BiometricPage" exact element={<BiometricPage/>}></Route>
            <Route path="/E-CommercePage" exact element={<EcommercePage/>}></Route>
            <Route path="/OfficeERPPage" exact element={<OfficeERPPage/>}></Route>
            <Route path="/MiniBankingPage" exact element={<MinibankPage/>}></Route>
            <Route path="/TravelERPPage" exact element={<TravelPage/>}></Route>
            <Route path="/POSPage" exact element={<PosPage/>}></Route>
            <Route path="/GoldLoanPage" exact element={<GoldPage/>}></Route>
            <Route path="/MedicalPage" exact element={<MedicalPage/>}></Route>
           
           
            {/* service dropdown */}
            <Route path="/CustomizedWebPage" exact element={<CustomizedPage/>}></Route>
            <Route path="/WebsiteDesignPage" exact element={<WebdesignPage/>}></Route>
            <Route path="/WebHostingPage" exact element={<WebhostPage/>}></Route>
            <Route path="/AndroidApplicationPage" exact element={<AndroidPage/>}></Route>
            <Route path="/IOSApplicationPage" exact element={<IOSPage/>}></Route>
            <Route path="/BulkSMSPage" exact element={<BulksmsPage/>}></Route>
            <Route path="/CRMPage" exact element={<CRMPage/>}></Route>
            <Route path="/ERPPage" exact element={<ERPPage/>}></Route>
            <Route path="/HRMPage" exact element={<HRMPage/>}></Route>
           
          


            
        </Routes>
    )
}
export default MainLink;