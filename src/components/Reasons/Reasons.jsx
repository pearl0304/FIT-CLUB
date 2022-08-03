import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

export const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="the man who exercise"></img>
        <img src={image2} alt="the man who exercise"></img>
        <img src={image3} alt="the man who exercise"></img>
        <img src={image4} alt="the man who exercise"></img>
      </div>
      <div className="right-r"></div>
    </div>
  );
};
