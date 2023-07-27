import React, { useState }  from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import MediaProductDropdown from "./Showsub1";
import MediaServiceDropdown from "./Showsub2";



const Nav =({isOpen,setIsOpen,shownav})=>{

   
    const [isOpenicon1, setIsOpenicon1] = useState(false);
    const [isOpenicon2, setIsOpenicon2] = useState(false);
   
    const [clickicon1, setClickicon1] = useState(false);
    const [clickicon2, setClickicon2] = useState(false);
    const handleicon1 =()=>{ setClickicon1(!clickicon1)}
    const handleicon2 =()=>{ setClickicon2(!clickicon2)}
   
    const showsub1 =(e)=>{
        e.preventDefault();
       
       setIsOpenicon1(!isOpenicon1)
     
    }
    const showsub2 =(e)=>{
       
        e.preventDefault();
       
    setIsOpenicon2(!isOpenicon2) 
    }
  
    return(
        <>
        <div  
        className={isOpen ?'media_navigation_show':' media_navigation'}  onClick={shownav}>
     
 <div className="nav_content_list_media" >
     <Link to="/Home" className="list_ref_media  active">Home</Link>
 </div>
<div className="nav_content_list_media1"  id="down" onClick={handleicon1}>
<Link to="/ProductPage" className="list_ref_media">Products</Link>

     <i  className={clickicon1 ? 'fa fa-caret-up' :'fa fa-caret-down' } onClick={showsub1}  />
     { clickicon1 && <MediaProductDropdown isOpenicon1={isOpenicon1} setIsOpenicon1={setIsOpenicon1} showsub1={showsub1}/>}
         
     
 </div>
  <div className="nav_content_list_media1" id="down1" onClick={handleicon2}>
  <Link to="/ServicePage" className="list_ref_media">Services</Link>

      <i  className={clickicon2 ? 'fa fa-caret-up' :'fa fa-caret-down' } onClick={showsub2}  />
       {clickicon2 && <MediaServiceDropdown isOpenicon2={isOpenicon2} setIsOpenicon2={setIsOpenicon2} showsub={showsub2}/>}
          
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
export default Nav;