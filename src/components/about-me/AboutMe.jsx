import React, { useEffect } from "react";
import "./AboutMe.css";
import "./AboutR.css";

export default function AboutMe() {

  return (
    <div id="about">
      <img src={require("../../images/aboutme.gif")} />
      <p>
        My name is Ayush Kumar and I am a skilled JavaScript web developer with
        expertise in the React.js framework. I have strong understanding of its
        capabilities.
      </p>
    </div>
  );
}
