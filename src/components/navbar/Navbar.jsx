import React from "react";
import "./Navbar.css";
import "./NavRes.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <p>Web Developer</p>
        <ul>
          <li className="home">Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact me</li>
        </ul>
      </div>
    </>
  );
}
