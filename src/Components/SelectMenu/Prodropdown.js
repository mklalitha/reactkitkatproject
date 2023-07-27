import { useState } from "react";
import "./Prodropdown.css";
import { Link } from "react-router-dom";
import ProductItems from "../Data/Productitems";

const ProductDropdown=()=> {
  
  const [proclick, setProClick] = useState(false);

  const handleClick = () => setProClick(!proclick);

  return (
    <>
      <ul
        onClick={handleClick}
        className={proclick ? 'drop_down_cont clicked' : 'drop_down_cont'}
      >
        {ProductItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setProClick(false)}
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

export default ProductDropdown ;