import React, {setState} from "react";
import Image1 from "./ProjOne.png";
import Image2 from "./ProjTwo.png";
import Image3 from "./ProjThree.png";
import "./MainProject.css";
import { Navbar } from "./navbar";
import { Link } from "react-router-dom";

export function MainProjectPage() {



  return (
    <div className="maincardDiv">
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
         <div className="btndiv">
          <a href="https://jonnevie.github.io/Task/" target="_blank">
            <button className="cardBtn">Live Project</button>
          </a>
         </div>
        </div>
        <div className="cardProjectTwo">
          <img src={Image2}></img>

          <p className="cardPara">
            “A Web Assessment to{" "}
            <span className="cardSpan">Code up an Existing Wireframe</span>{" "}
            within a time limit.” <br /> <br />
            Using:
            <br />
            <span className="cardSpan">HTML | CSS | <a id="wireframeLink" href="https://content.codecademy.com/courses/freelance-1/capstone-2/colmar-academy-spec.png?_gl=1*2qb4gs*_ga*MTE5ODg3NDIxNC4xNjM1MjQzMDU0*_ga_3LRZM6TM9L*MTY1ODIzNjI4Ni4xODYuMC4xNjU4MjM2Mjg2LjYw">Wireframe</a></span>
          </p>
          <div className="btndiv">
          <a href="https://jonnevie.github.io/Colmar-Academy/" target="_blank">
            <button className="cardBtn">Live Project</button>
          </a>
         </div>
        </div>
       
        <div className="cardProjectThree">
          <img src={Image3}></img>

          <p className="cardPara">
            {" "}
            <span className="cardSpan">"Make a Wireframe</span> about anything,
            and Code It Up!" - Instructor, Week 5<br/>
            "Mission Accepted"- Jonnevie
            <br/><br />
            Using:
            <br />
            <span className="cardSpan">FIGMA | HTML | CSS </span>
          </p>
          <div className="btndiv">
          <a href="https://jonnevie.github.io/VanityFUR/" target="_blank">
            <button className="cardBtn">Live Project</button>
          </a>
         </div>
        </div>
        </div> 
        </div>
    
  );

 
}


