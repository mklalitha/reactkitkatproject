import React, { useState } from "react";
import ServiceItems from "../Data/Serviceitems";
import "./Serdropdown.css";
import { Link } from "react-router-dom";

const ServiceDropdown=()=>

{
  
  const [serclick, setSerClick] = useState(false);

  const handleClick = () => setSerClick(!serclick);

  return (
    <>
      <ul
        onClick={handleClick}
        className={serclick ? 'drop_down_cont clicked' : 'drop_down_cont'}
      >
        {ServiceItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setSerClick(false)}
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

export default ServiceDropdown ;