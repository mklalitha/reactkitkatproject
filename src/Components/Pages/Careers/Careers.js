import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Careers.css";
import career from "../../Sliderimg/career (1).webp";
import java from "../../courseimage/java.png";
import php from "../../courseimage/php.png";
import react from "../../courseimage/react.png";
import nodejs from "../../courseimage/nodejs.jpg";
import axios from "axios";



const CareersPage = () =>{
  
  const [file, setFile] = useState('');


//   const send = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("file",file);

  
//    axios.post(
//     "http://localhost:1000/post", formData)
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
   

// };


const submitImage = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("file", file);

  await axios.post(
    "http://localhost:2000/upload-file",
    formData,
    {
      headers: { "Content-Type": "application/pdf" },
    }
  )
  .then((res)=>{
    console.log(res.data)
    setFile("")
   
    }).catch((err) => {
      console.log(err)})
};
const onInputChange = (e) => {
  console.log(e.target.files[0]);
  setFile(e.target.files[0]);
};
function showAlert() {
  alert('Resume uploaded successfully!');
}

  
     
    return(
    <>
    <div className="carrear_image">
  <div className="carrear_img">
  <img src={career} width="100%" height="100%" alt="IT Career" className="sli_img1"/>
  </div>
  </div>
     
  <div className="content_lists">
	<div className="about_main_cont">
			<div className="career_p">
			<strong>If you are looking to work on challenging assignments in leading fortune 500 companies and looking to advance your
			professional career, you are at the right place.</strong>
			<p className="cont_para_style"> Our firm is always on the lookout for individuals with the drive and talent to make a difference through
			their skill and dedication. We are always looking for people who can add to the talent and skill set of our team while also emerging
			as leaders by bringing new perspectives and dimensions to the work. Kitkat Software Technologies has several job openings right now.
			Kitkat Technologies is always on the hunt for talented people. Please apply if you believe you have the skills and passion to work for 
			Coimbatore's best web development company. The positions listed below are currently available:</p>
			</div>
      </div>
      <div className="career_img">
        <div className="career_flex">
          <div className="career_flex_img">
           <img src={react} width="100%" height="100%" alt="react JS"/>
          </div>
          <div className="career_flex_img">
            <img src={php} width="100%" height="100%" alt="Php Developer"/>
          </div>
          <div className="career_flex_img">
          <img src={java} width="100%" height="100%" alt="Java Programming"/>
          </div>
          <div className="career_flex_img">
            <img src={nodejs} width="100%" height="100%" alt="Node Js"/>
          </div>
        </div>
      </div>
      </div>
			<div className="carrear_table_cont">
			<div className="carrear_flex">
				<div className="carrear_table">
                        <div className="quick_links">
                	<div className="heading">Coimbatore Location</div>
                    <div style={{color:"#666",padding:"10px"}}><strong>Currently Hiring For :</strong>
	                 Freshers &amp; 1+ Years  Experience</div>
                    <div className="liststyle">
                    <ul>
                    	<li><Link to="/ContactPage">Java Developers</Link></li>
                    	<li><Link to="/ContactPage">PHP Developers</Link></li>
						<li><Link to="/ContactPage">Angular JS</Link></li>
						<li><Link to="/ContactPage">Node JS</Link></li>
                    </ul>
                    </div>
                    
                 </div> 
          </div>
          <div className="carrear_table">
                        <div className="quick_links">
                   	 <div className="heading">Coimbatore Location</div>
                    <div style={{color:"#666",padding:"10px"}}>
	 Freshers &amp; 0-1 Year  Experience(female)</div>
                    <div className="liststyle">
                    <ul>
						<li><Link to="/ContactPage">Business Developer</Link></li>
						<li><Link to="/ContactPage">SEO Analyst</Link></li>
                    </ul>
                    </div>
                    
                 </div> 
          </div>
         </div>
         </div>
         <div >
        <div className="resumecontainer">
            <h1>Upload Resume</h1>
           <form  method="POST" onSubmit={submitImage}>
           <div className="row"><label class="col-md-2"> Name  : </label><input class="res_input col-md-4" name="name" type="text" placeholder="Enter Your Name"  required/></div>
           <div className="row"><label class="col-md-2"> Email :</label><input class="res_input col-md-4" name="email" type="email" placeholder="Enter Your Email" required/></div>
           <div className="row"><label class="col-md-2">  Upload Resume :</label> <input  name="resume" class="res_input col-md-4" type="file"  onChange={onInputChange}/></div>
           <button name="upload" className="upload" type="submit" value="Upload"onClick={showAlert}>upload</button>
         </form>
         </div>
         </div>
         </>
         )
}
    
export default CareersPage;