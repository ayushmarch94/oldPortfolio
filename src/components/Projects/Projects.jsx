import React from "react";
import "./Projects.css";
import "./ProjectR.css"

export default function Projects() {
  
  return (
    <div id="Projects" className="Projects">
      <div className="Components">
        <div className="compdiv">
          <div className="image">
            <img src={require("../../images/portfolio.png")} width={300} />
            <hr></hr>
          </div>
          <div className="redirect">
            <img
              onClick={() =>
                window.open(
                  "https://github.com/ayushmarch94/Portfolio",
                  "_blank"
                )
              }
              src={require("../../images/github.png")}
              width={30}
            />
            <img
              onClick={() =>
                window.open(
                  "https://ayush-kumar-site.netlify.app/",
                  "_blank"
                )
              }
              src={require("../../images/browser.png")}
              width={30}
            />
          </div>
        </div>
        <div className="compdiv">
          <div className="image">
            <img src={require("../../images/calculator.png")} width={300} />
            <hr></hr>
          </div>
          <div className="redirect">
            <img
              onClick={() =>
                window.open(
                  "https://github.com/ayushmarch94/Calculator",
                  "_blank"
                )
              }
              src={require("../../images/github.png")}
              width={30}
            />
            <img
              onClick={() =>
                window.open(
                  "https://calculator-ayush-k.netlify.app/",
                  "_blank"
                )
              }
              src={require("../../images/browser.png")}
              width={30}
            />
          </div>
        </div>
        <div className="compdiv">
          <div className="image">
            <img src={require("../../images/weather.png")} width={300} />
            <hr></hr>
          </div>
          <div className="redirect">
            <img
              onClick={() =>
                window.open(
                  "https://github.com/ayushmarch94/Weather-app",
                  "_blank"
                )
              }
              src={require("../../images/github.png")}
              width={30}
            />
            <img
              onClick={() =>
                window.open(
                  "https://weather-app-ayushk.netlify.app/",
                  "_blank"
                )
              }
              src={require("../../images/browser.png")}
              width={30}
            />
          </div>
        </div>

        <div className="compdiv">
          <div className="image">
            <img src={require("../../images/signup.png")} width={300} />
            <hr></hr>
          </div>
          <div className="redirect">
            <img
              onClick={() =>
                window.open(
                  "https://github.com/ayushmarch94/Registration-Login-signup",
                  "_blank"
                )
              }
              src={require("../../images/github.png")}
              width={30}
            />
            <img
              onClick={() =>
                window.open(
                  "https://github.com/ayushmarch94/Registration-Login-signup",
                  "_blank"
                )
              }
              //add netlify link in above
              src={require("../../images/browser.png")}
              width={30}
            />
          </div>
        </div>
        <div className="compdiv">
          <div className="image">
            <img src={require("../../images/todo.png")} width={300} />
            <hr></hr>
          </div>
          <div className="redirect">
            <img
              onClick={() =>
                window.open(
                  "https://github.com/ayushmarch94/To-do-list",
                  "_blank"
                )
              }
              src={require("../../images/github.png")}
              width={30}
            />
            <img
              onClick={() =>
                window.open(
                  "https://to-do-list-by-ayush.netlify.app/"
                )
              }
              src={require("../../images/browser.png")}
              width={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
