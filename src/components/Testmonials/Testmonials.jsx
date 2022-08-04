import React, { useState } from "react";
import "./Testmonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

export const Testmonias = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="Testmonials" id="testmoinals">
      <div className="left-t">
        <span>Testmonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          {" "}
          <span className="orange">{testimonialsData[selected].name}</span> -
          {testimonialsData[selected].status}{" "}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="man"></img>
        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt="arrow"
          ></img>
          <img
            onClick={() =>
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            src={rightArrow}
            alt="arrow"
          ></img>
        </div>
      </div>
    </div>
  );
};
