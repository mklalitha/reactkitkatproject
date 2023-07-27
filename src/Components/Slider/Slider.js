import React, { useState, useEffect } from "react";
import "./Slider.css";
import SliderItems from "../Data/Slideritems";
import SocialLink from "../Sociallink/Sociallink";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);




  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === SliderItems.length) {
        setCurrentSlide(0)
      }
      else {
        setCurrentSlide(currentSlide + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)

  }, [currentSlide]);




  return (
    <div className="slider">

      <SocialLink />
      {SliderItems.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.title}</h2>

                  <hr />

                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


export default Slider;