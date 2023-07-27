import React from "react";
import "./Contacts.css";




const ContactPage = ()=>{
    return(
    <>
      <div className="map_cont">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.322585449735!2d76.9765124641843!3d11.01440580776919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b2d555eeff%3A0xbcb671713da40ffb!2sSri+Krishna+Complex%2C+72%2C+Kattoor+Rd%2C+P+N+Palayam%2C+Coimbatore%2C+Tamil+Nadu+641037!5e0!3m2!1sen!2sin!4v1510310937877"  width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen title="map"></iframe>      
      </div>
   <div className="contact_main_cont">
   <div className="cont_info">
	<ul className="contact_cont">
	    <h2 className="contact_title">Kitkat Software Technologies</h2>
	<li>
    <address><i class="fa-solid fa-location-dot" style={{fontSize:"25px",color:"#FF635E",paddingRight:"5px"}}></i>No.70/77,1st floor, Krishna complex,<br></br>
        Kattor Road,Papanaickenpalayam,<br></br>
        Coimbatore-641037,<br></br>
        Tamil Nadu
        </address>
        </li>
  <li><i class="fa-solid fa-phone" style={{fontSize:"18px",padding:"10px",arialHidden:"true"}}></i>Phone : 0422 495 7272</li>
  <li><i class="fa-solid fa-mobile" style={{fontSize:"18px",padding:"10px"}}></i>Mobile :7010816299</li>
	 <p>For HR Related  ,email us at <br/>Website :<a href="mailto:kitkatsoftwaretechnologies@gmail.com" style={{textDecoration:"none"}}><strong style={{color:"#FF635E"}}>kitkatsoftwaretechnologies@gmail.com</strong></a></p>
	</ul>
	</div>
    </div>
  
  
         
    <div className="regtitle">Registration Form</div>
        <div className="regform">
   
            <form>
                  
                        <div className="userdata">
                            <div className="databox">
                                <span className="details">First Name</span>
                                <input type="text" placeholder="Enter your firstname" required />
                            </div>
                            <div className="databox">
                                <span className="details">Last Name</span>
                                <input type="text" placeholder="Enter your lastname" required />
                            </div>
                            <div className="databox">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div className="databox">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div className="databox">
                                <span class="details">Company</span>
                                <input type="text" placeholder="Enter your companyname" required />
                            </div>
                            <div className="databox">
                                <span className="details">Service</span>
                               
                                <select id="drops" name="course">
                                    <option value="Course1">Course1</option>
                                    <option value="Course2">Course2</option>
                                    <option value="Course3">Course3</option>
                                    <option value="Course4">Course4</option>
                                </select>
                            </div>
                        </div>
                        <div className="beginner-details">
                           
                            

                            <span className="beginner-title">Are you Beginner?</span>
                            <div className="category">
                                <label for="dot-1">
                                <input type="radio" name="beginner" id="dot-1" />
                                    <span className="dot one"></span>
                                    <span className="beginner">Yes</span>
                                </label>
                                <label for="dot-2">
                                <input type="radio" name="beginner" id="dot-2" />
                                    <span className="dot two"></span>
                                    <span className="beginner">No</span>
                                </label></div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
              
              
                          </form>
                          </div>
  
        </>
    )
    }
export default ContactPage;