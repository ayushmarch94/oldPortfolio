import React from "react";
import "./Navbar.css";
import "./NavRes.css";
import "../about-me/AboutMe";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <p>Web Developer</p>
        <ul>
          <li id="home"> 
            <a  className="scrollDown" href="#about">
            </a>
              Home
          </li>
          <li>
            <a className="scrollDown" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="scrollDown" href="#about">
              Projects
            </a>
          </li>
          <li>
            <a className="scrollDown" href="#about">
            Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
