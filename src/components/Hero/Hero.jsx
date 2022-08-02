import React from "react";
import { Header } from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The best fitnes club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will hepl you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness progrmas</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      {/** left-h */}
      <div className="right-h">
        <button className="btn"> Joing Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="heart"></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="hero_imgae" className="hero-image"></img>
        <img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
        ></img>
      </div>
    </div>
  );
};
