import React from "react";
import "./Face.css";
import "./FaceR.css";

export default function Face() {
  return (
    <div className="face">
      <div className="face-main">
        <div className="face-text">
          <div className="p1"><p>Hello, my name is</p></div>
          <div className="p2"><p>Ayush Kumar</p></div>
          <div className="p3"><p>Web Developer</p></div>
        </div>
        <img src={require("../../images/front.gif")} width={300}/>
      </div>
      <div className="linker">
        <img
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ayush-kumar-484013264/",
              "_blank"
            )
          }
          id="img1"
          src={require("../../images/linkedin.png")}
          width={30}
        />
        <img
          onClick={() =>
            window.open("https://github.com/ayushmarch94", "_blank")
          }
          src={require("../../images/github.png")}
          width={33}
        />
      </div>
    </div>
  );
}
