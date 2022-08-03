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
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>RELIABLE PARTNER</span>
          </div>
        </div>
        <span id="partner-title">OUR PARTNERS</span>
        <div className="partners">
          <img src={nb}></img>
          <img src={adidas}></img>
          <img src={nike}></img>
        </div>
      </div>
    </div>
  );
};
