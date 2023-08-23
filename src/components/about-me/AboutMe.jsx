import React, { useEffect } from "react";
import "./AboutMe.css";
import "./AboutR.css";

export default function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.querySelector("p").classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
          entry.target.querySelector("p").classList.remove("animate");
        }
      });
    });

    const element = document.querySelector("#about");
    observer.observe(element);
  }, []);

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
