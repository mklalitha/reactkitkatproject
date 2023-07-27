import React from "react";
import "./About.css";
import  aboutus from "../../Sliderimg/about_us.webp";
import  Mission from "../../Sliderimg/Mission.webp";
import  mission1 from "../../Sliderimg/mission (1).webp";
import  vision from "../../Sliderimg/vision.webp";
import  skill from "../../Sliderimg/skill.webp";
const AboutPage=()=>{
    return(
    <>


<div className="carrear_image">
  <div className="carrear_img">
  <img src={aboutus} width="100%" height="100%" alt="Web Development Service" className="sli_img1" />
  </div>
  </div>
   
  <div className="content_lists">
	<div className="about_main_cont">
			<div className="about_cont_p">
			<p className="about_cont_para_style">KITKAT Software technologies is expertise in Web development, Application development, Mobile development, 
			Creative design, Quality code awesome support Web development With sound domain knowledge we aim to deliver value to our customers through our
			innovative software solutions and services.It is highly essential factor for an business either online or offline is building an attractive 
			and professional website which express the business offerings to the client in a smart way.</p>
			<h1 id="who">Who we are</h1>
			<p style={{fontSize:"18px",textAlign:"center"}}><strong>We Create, Design and Make it Real</strong></p>
			<p className="about_cont_para_style">Clients are made integral part of our team while executing the projects. This makes the audacious task of the software
			development and execution much simpler and easier, in tune with the client’s expectation. At I-Link, based on the situation and need of the project, 
			we follow one of the following software development methodologies.Agile software development is a set of principles for software development in
			which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams. It promotes adaptive planning, 
			evolutionary development, early delivery, and continuous improvement, and it encourages rapid and flexible response to change. Agile itself has 
			never defined any specific methods to achieve this, but many have grown up as a result and have been recognized as being 'Agile'.</p>
			<div className="about_page_flex_cont flex_about_b">
			<div className="our_skill flex_about">
		    <h2 className="title2" id="skill">Our Skills</h2>
			<p className="about_cont_para_style">KITKAT is established primarily to carry out the offshore software development projects and registered as a 100% Software
			export unit. KITKAT has successfully delivered medium and large size projects on time and under budget using the Offshore Delivery Model with the help 
			of Managerial and Technical skill sets. With an experience of over 8+ years now, KITKAT has adapted to various changes to understand the cross culture 
			needs of the region specific customers.</p>
			</div>
			<div className="about_image">
			    <img src={Mission} width="100%" height="100%" alt="Kitkat Mission"/>
			</div>
			</div>
			<div className="about_page_flex_cont flex_about_b1">
			    	<div class="about_image1">
			    <img src={vision} width="100%" height="100%" alt="Kitkat Vision"/>
			    </div>
			    <div className="our_skill flex_about2">
			<h2 class="title2" id="vision">Our Vision</h2>
			<p class="about_cont_para_style">To be a premier information technology solutions and services provider, by excelling in fulfilling the needs of its customers,
			partners and employees, by providing the most efficient and effective services and solutions, utilizing the best resources. We provide highly qualified 
			and experienced Resources at a fraction of onsite prices. We meet any challenging schedule using our large pool of Offshore resources.</p>
			</div>
				<div className="about_img_media">
			    <img src={vision} width="100%" height="100%" alt="Vision"/>
			    </div>
			</div>
			<div className="about_page_flex_cont flex_about_b">
			    <div className="our_skill flex_about">
			<h2 className="title2" id="mission">Our Mission</h2>
			<p className="about_cont_para_style">Our mission is to progressively realize our vision by providing innovative, proactive, efficient, cost-effective, quality
			solutions and services to our clients all over the world and by building a strong internal value system that provides the transparency and integrity
			in all the transactions among our employees, partners and customers.The methodology enforces strict adherence to adequate Documentation, Quality 
			Control Processes and Client Communication.</p>
			</div>
				<div className="about_image">
			    <img src={mission1} width="100%" height="100%" alt="Mission"/>
			</div>
			</div>
				<div class="about_page_flex_cont flex_about_b1">
			    	<div class="about_image1">
			    <img src={skill} width="100%" height="100%" alt="Professional Skills"/>
			    </div>
			    <div className="our_skill flex_about2">
			<h2 className="title2" id="offering">Our Offerings</h2>
			<p class="about_cont_para_style">We offer end-to-end solutions to the customers from Hardware to Software,Network to Live Remote-Support,Embedded Systems 
			to Project Assistance. We work meticlously to provide best in class services.</p>
			</div>
			<div className="about_img_media">
			    <img src={skill} width="100%" height="100%" alt="Professional Skills"/>
			    </div>
			</div>
			</div>
			</div>
			 
		 </div>
    </>
    )
    
}
export default AboutPage;