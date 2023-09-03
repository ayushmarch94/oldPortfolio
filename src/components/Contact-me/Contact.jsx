import React from "react";
import "./Contact.css";

export default function Contact() {
  const redirect = () => {
    window.open("https://www.linkedin.com/in/ayush-kumar-484013264/", "_blank");
  };

  return (
    <>
      <div id="Contact">
        <img
          onClick={redirect}
          src={require("../../images/linkedin.png")}
          width={100}
        />

        <p>Contact me</p>
      </div>
    </>
  );
}
