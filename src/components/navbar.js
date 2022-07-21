import React, { useState } from "react";
import "./navbar.css";
import { MainProjectPage } from "./MainProjectPage";
import { Contact } from "./Contact";
import { Home } from "../Home";


export function Navbar() {

const [body, setBody] = useState(Home())

const handleClickHome = (e) => {
  setBody(Home());
  e.preventDefault();
}

const handleClickProjects = (e) => {
  setBody(MainProjectPage());
  e.preventDefault();
}

const handleClickContact = (e) => {
  setBody(Contact());
  e.preventDefault();
}

  return (
    <div>
      <nav>
        <a  onClick={handleClickHome} className="navlinks hover-underline-animation">
          HOME
        </a>

        <a  onClick={handleClickProjects} className="navlinks hover-underline-animation">
          PROJECTS
        </a>

        <a  onClick={handleClickContact} className="navlinks hover-underline-animation">
          CONTACT
        </a>
      </nav>
      <body>
        {body}
      </body>
    </div>
  );
}
