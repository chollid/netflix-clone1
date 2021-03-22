import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "./Assets/Logo_Trans.png";
import Avatar from "./Assets/Avatar.png";

function NavBar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={Logo} alt="Logo" />
        <img className="nav__avatar" src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default NavBar;
