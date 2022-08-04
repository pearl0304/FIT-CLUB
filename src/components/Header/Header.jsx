import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
export const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo"></img>
      {menuOpen === false && mobile === true ? (
        <div
          className="mobile-bar"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <img
            src={Bars}
            alt="three-bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
              }}
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
              }}
              to="programs"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Progrmas
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
              }}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
              }}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpen(false);
              }}
              to="testmoinals"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
