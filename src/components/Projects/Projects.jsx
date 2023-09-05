import React from "react";
import "./Projects.css";
import "./ProjectR.css";
import Array from "./Array";

export default function Projects() {
  return (
    <div id="Projects" className="Projects">
      <div className="Components">
        {Array.map((project) => (
          <div className="compdiv" key={project.key}>
            <div className="image">
              <img src={project.image} width={300} />
              <hr></hr>
            </div>
            <div className="redirect">
              <img
                onClick={() => window.open(project.code, "_blank")}
                src={require("../../images/github.png")}
                width={30}
              />
              <p
                style={{ cursor: "pointer" }}
                onClick={() => window.open(project.code, "_blank")}
              >
                Code
              </p>

              <img
                onClick={() => window.open(project.site, "_blank")}
                src={require("../../images/browser.png")}
                width={30}
              />
              <p
                style={{ cursor: "pointer" }}
                onClick={() => window.open(project.site, "_blank")}
                src={require("../../images/browser.png")}
              >
                Site
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
