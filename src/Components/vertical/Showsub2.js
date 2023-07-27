import React from "react";
import ServiceItems from "../Data/Serviceitems";
import "./Showsub2.css";
import { Link } from "react-router-dom";

const MediaServiceDropdown=({isOpenicon2,setIsOpenicon2,showsub2})=>


{
  
   
  return (
    <>
      <ul
        
        className={isOpenicon2 ? 'drop_down_cont_media':'none'} onClick={showsub2}>
      
        {ServiceItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="drop_down_cont_media"
                to={item.path}
                onClick={() =>setIsOpenicon2(!isOpenicon2)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MediaServiceDropdown ;