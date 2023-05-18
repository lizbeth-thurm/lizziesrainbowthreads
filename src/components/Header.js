import React from "react";
import useScrollDirection from "../components/Scroller";
import logo from "../LOGO.jpg";
import "./Components.css";

function Header() {
    const scrollDirection = useScrollDirection();
  
  return (
    <div className={`App-header ${ scrollDirection === "down" ? "hide" : "show"}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="Header-1">ABOUT</h2>
        <h2 className="Header-2">SOCIAL</h2>
        <h2 className="Header-3">CONTACT</h2>
    </div>
  );
};

export default Header;