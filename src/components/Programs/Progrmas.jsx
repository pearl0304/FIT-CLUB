import React from "react";
import "../Programs/Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export const Progrmas = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Progrmas</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
