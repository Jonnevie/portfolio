import React, {useState, useEffect} from "react";
import './App.css'




export function Home() {

  return (
    <div className="App">

      
      <header className="App-header">

        <p id='jonnevie'>
         JONNEVIE<span id='cheok'> CHEOK</span>
        </p>
        
          <div className="typediv">
        <p id='maintext' className="typewriter">
          Front-End Web Developer | Keen Designer
          </p>
      </div>
          <a href="https://drive.google.com/file/d/19SdFhg7ZSm5jiMVJaVd4V4JU-QYA365a/view?usp=sharing"><button id="buttonDark">Download CV</button> </a>
  
      </header>
    </div>
  );
}
