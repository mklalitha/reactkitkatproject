import React from "react";
import "./Sociallink.css";



const SocialLink =()=>{
    return(
        <>

<div className="social_links"> 
 
    <a className="links" href="https://www.facebook.com/kitkatsolutions/"> <i className="fa-brands fa-facebook"  style={{fontSize:"25px"}} aria-hidden="true" ></i></a> 
    </div>
    <div className="social_links1"> 
     <a className="links" href="https://www.instagram.com/kitkatsoftwaretechnologies/?igshid=kbjcwvv7w6aq">  <i className="fa-brands fa-instagram" style={{fontSize:"25px"}} aria-hidden="true"></i></a>
  
    </div>
    <div className="social_links2"> 
     <a className="links" href="https://in.linkedin.com/in/kitkat-software-technologies-67029a147"> <i className="fa-brands fa-linkedin" style={{fontSize:"25px"}} aria-hidden="true"></i> </a>
     </div>
     <div > 
     <a href="https://wa.me/7010816299" className="whatsapp" target="blank">
      <i className="fa-brands fa-whatsapp my-float"></i>
  </a>
  </div>

 
    

        </>
    )
}

export default SocialLink;

  