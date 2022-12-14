import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

export const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WIHT US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick} alt="whiteTick"></img>
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
