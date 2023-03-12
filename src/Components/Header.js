import { BrowserRouter as Router, NavLink } from "react-router-dom";
import React from "react";
import "./Header.css";

const Header = ({ fontColor, backgroundColor }) => {
  return (
    <div className="hero" style={{ backgroundColor: backgroundColor }}>
      <nav>
        <p className="logo" style={{ color: fontColor }}>
          Shop <span className="logo-text">Online</span>
        </p>

        <ul>
          <NavLink className="nav-link" exact to="/">
            <span className="link-text" style={{ color: fontColor }}>
              Home
            </span>
          </NavLink>
          <NavLink className="nav-link" to="./shopping_cart">
            <span className="link-text" style={{ color: fontColor }}>
              Shopping Cart
            </span>
          </NavLink>
          <NavLink className="nav-link" to="./friends">
            <span className="link-text" style={{ color: fontColor }}>
              our Frinds
            </span>
          </NavLink>
          <NavLink className="nav-link" to="./about_us">
            <span className="link-text" style={{ color: fontColor }}>
              About Us
            </span>
          </NavLink>
        </ul>
        <button className="subscribe" type="button">
          Subscribe
        </button>
      </nav>
    </div>
  );
};

export default Header;
