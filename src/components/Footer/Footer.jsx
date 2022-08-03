import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="sns-links">
          <img src={Github} alt="github-logo"></img>
          <img src={Instagram} alt="instagram-logo"></img>
          <img src={LinkedIn} alt="linkedin-logo"></img>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="logo"></img>
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};
