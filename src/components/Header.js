import React from "react";
import useScrollDirection from "../components/Scroller";
import logo from "../LOGO.jpg";
import "./Components.css";
import { Link } from "react-scroll";

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`App-header ${scrollDirection === "down" ? "hide" : "show"}`}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="Header-1">
        <Link to="about" spy={true} smooth={true}>
          ABOUT
        </Link>
      </h2>
      <h2 className="Header-2">
        <Link to="social" spy={true} smooth={true}>
          SOCIAL
        </Link>
      </h2>
      <h2 className="Header-3">
        <Link to="contact" spy={true} smooth={true}>
          CONTACT
        </Link>
      </h2>
    </div>
  );
}

export default Header;
