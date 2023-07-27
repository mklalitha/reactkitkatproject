import React from "react";
import "./Exitknown.css";
import { Link } from "react-router-dom";
import knownimage1 from "../Sliderimg/ios.webp";
import knownimage2 from "../Sliderimg/known2.jpg";


const KnownUs = ()=>{
    return(
        <>
        <div className="cont">
        <div className="about_index">
            <div className="about_background_image">

            </div>
            <div className="about_index_para">
                <h2 class="t1"><p class="pre">Know About</p>  <strong style={{color:"#FF635E",margin:"0"}}>Kitkat Software Technologies</strong></h2>
                <p class="p1">KITKAT Software technologies are proficient at Web development, Application development, Creative designs, Quality checking, Banking services, and Billing. We offer a vast array of services, so each client could find one of the best suits for their needs. According to your project requirements, Our project team can create fully custom websites and also we help with the regular maintenance of your website.</p> 
                        <p class="p1">It is fundamental for an online or offline business in creating an appetizing professional website that exposes the company's value to the customer in a quick way.</p>
                      <p class="p1">  Selecting the appropriate technology solution is predominent for future growth and success. Many clients have a significant investment in their current technologies that need to be leveraged to meet their growing IT requirements, and other clients are seeking new state-of-the-art solutions to meet their needs. In both cases, the panelist has the expertise to deliver the technical solution to ensure the customer's business strategy is successful.</p>
                      <p class="p1_d">Clients are made integral part of our team while executing the projects. This makes the audacious task of the software development and execution much simpler and easier, in tune with the client’s expectation. At I-Link, based on the situation and need of the project, we follow one of the following software development methodologies.
                        Agile software development is a set of principles for software development in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams.</p>
                        <Link class="rm" to="./AboutPage">Read More</Link>
                    
                       
                    </div>
                    
                    <div class="about_index_image">
                            <img src={knownimage1} alt="IOS Application"/>
                            <img src={knownimage2} alt="Windows Application"/>
                        </div>
            </div>
            
</div>

        </>
    )
}
export default KnownUs;
