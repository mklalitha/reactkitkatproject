import React from "react";
import "./Showsub1.css";
import { Link } from "react-router-dom";
import ProductItems from "../Data/Productitems";

const MediaProductDropdown=({isOpenicon1,setIsOpenicon1,showsub1})=> {
  
 

  return (
    <>
    
      <ul
          className={isOpenicon1 ? 'drop_down_cont_media':'none'} onClick={showsub1}>
        {ProductItems.map((item, index) => {
          return ( 
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() =>setIsOpenicon1(!isOpenicon1)}
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

export default MediaProductDropdown;