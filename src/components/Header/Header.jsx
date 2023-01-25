import React from "react";
import "./Header.css";
import CTA from "./CTA";
import { BsArrowDown } from "react-icons/bs";

const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h3>Hi there, I'm a</h3>
          <h1>Frontend Developer</h1>
          <CTA />
          <a href="#contact">
            <BsArrowDown className="icon-down" />
          </a>
        </div>
      </header>
  );
};

export default Header;
