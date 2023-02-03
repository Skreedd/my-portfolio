import React, { useState } from "react";
import { useRef } from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
  const navRef = useRef();
  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if (window.scrollY >= 200) {
      setFix(true)
    }
    else {
      setFix(false)
    }
  }  


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  window.addEventListener("scroll", setFixed)
  return (
    <>
      <nav className={fix ? 'nav-bg' : 'nav'}>
        <a href="#"><h3>Martin</h3></a>
        <div ref={navRef} className="nav-links">
          <a href="#about">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <GrClose />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </>
  );
};

export default NavBar;
