import React from "react";
import { Projects } from "./Projects";
import Image1 from "./ProjOne.png";
import Image2 from "./ProjTwo.png";
import Image3 from "./ProjThree.png";
import "./MainProject.css";

export function MainProjectPage() {
  return (
    <div className="mainDiv">
      <h1 className="h1cards">PROJECTS</h1>
      <div className="projectCards">
        <div className="cardProjectOne">
          <img src={Image1}></img>

          <p className="cardPara">
            “A Colourful, Responsive and Dynamic{" "}
            <span className="cardSpan">Task Manager</span> Web Application”{" "}
            <br /> <br />
            Using:
            <br />
            <span className="cardSpan">
              FIGMA | HTML | CSS | JS | LOCAL STORAGE
            </span>
          </p>
          <button className="cardBtn">Project</button>
        </div>
        <div className="cardProjectTwo">
          <img src={Image2}></img>

          <p className="cardPara">
            “A Web Assessment to{" "}
            <span className="cardSpan">Code up an Existing Wireframe</span>{" "}
            within a time limit.” <br /> <br />
            Using:
            <br />
            <span className="cardSpan">HTML | CSS </span>
          </p>
          <button className="cardBtn">Project</button>
        </div>
        <div className="cardProjectThree">
          <img src={Image3}></img>

          <p className="cardPara">
            {" "}
            <span className="cardSpan">"Make a Wireframe</span> about anything,
            and Code It Up! <br /> <br />
            Using:
            <br />
            <span className="cardSpan">FIGMA | HTML | CSS </span>
          </p>
          <button className="cardBtn">Project</button>
        </div>
      </div>
    </div>
  );
}
