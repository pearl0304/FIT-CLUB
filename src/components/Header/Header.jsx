import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo"></img>
      <ul className="header-menu">
        <li>Home</li>
        <li>Progrmas</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};
