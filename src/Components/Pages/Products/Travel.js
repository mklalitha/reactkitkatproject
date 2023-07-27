import React from "react";
import "./Travel.css";
import Erp_software from "../Products/img/travel2.jpg";
import travel_business from "../Products/img/travel_business.webp";
import travel_erp from "../Products/img/travel1.jpg";


const TravelPage = () => {
     return (
          <>
               <div className="carrear_image">
                    <div className="carrear_img">
                         <img src={Erp_software} width="100%" height="100%" alt="ERP Software" className="sli_img1" />
                    </div>
               </div>

               <div className="content_lists">

                    <div className="product_cont">
                         <div className="career_p">
                              <h1 className="product_title">Travel ERP (Enterprise Resource Planning)</h1>
                              <p className="cont_para_style">Travel ERP is Enterprise Resource Planning Software that automates all travel industry
                                   operations such as itinerary generation, inventory management, lead generation, and customer relationship management
                                   in order to effectively manage the travel industry with cutting-edge, streaming technology. </p>
                              <p className="cont_para_style">Travel ERP Software assists travel companies and agencies automate all travel business processes
                                   with advanced features in order to increase business efficiency and online bookings. Kitkat is a leading Travel Technology
                                   Company that develops complete travel ERP software for travel agencies, such as booking engines, supplier integrations,
                                   agent management, API integration, and dynamic packaging. </p>
                              <div className="side_img">
                                   <img src={travel_business} width="100%" height="100%" alt="Travel Business Software" />
                              </div>
                              <p className="cont_para_style">Kitkat Software Technologies offers the best Travel ERP Software with advanced XML API Integration,
                                   allowing travel companies to integrate hotel, flight, transfer, tour, and activity inventory from global travel suppliers
                                   through a single API integration.</p>
                              <p className="cont_para_style">The ERP systems used by our teams meet all of the requirements of modern travel companies.
                                   They allow travel companies to provide excellent customer service while maintaining departmental cooperation, completing
                                   daily tasks, and providing structured information in real time.</p>
                              <div className="side_img">
                                   <img src={travel_erp} width="100%" height="100%" alt="Travel ERP Software" />
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default TravelPage;