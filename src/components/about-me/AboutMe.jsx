import React, { useEffect } from "react";
import "./AboutMe.css";
import "./AboutR.css";

export default function AboutMe() {

  return (
    <div 
    
    data-aos="fade-left"
    data-aos-offset="100"
    data-aos-delay="0"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    
    id="about">
      <img src={require("../../images/aboutme.gif")} />
      <p>
        My name is Ayush Kumar and I am a skilled JavaScript web developer with
        expertise in the React.js framework. I have strong understanding of its
        capabilities.
      </p>
    </div>
  );
}
