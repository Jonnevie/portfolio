import React, { useState } from "react";
import "./navbar.css";
import { MainProjectPage } from "./MainProjectPage";
import { Contact } from "./Contact";
import { Home } from "../Home";
import { getByPlaceholderText } from "@testing-library/react";


export function Navbar() {
//   const [menuDecor, setMenuDecor] = useState("");
//   const myStyle = {
//     fontWeight: 'light'
//   }
//  const handleActiveDecor = () => {
//   setMenuDecor(myStyle)
//  }


const [body, setBody] = useState(Home());
const [isActiveHome, setIsActiveHome] = useState(true);
const [isActiveProjects, setIsActiveProjects] = useState(false);
const [isActiveContact, setIsActiveContact] = useState(false);


const handleClickHome = (e) => {
  setIsActiveHome(true);
  setIsActiveContact(false);
  setIsActiveProjects(false);
  setBody(Home());
}

const handleClickProjects = (e) => {
  setBody(MainProjectPage());
  setIsActiveProjects(true);
  setIsActiveContact(false);
  setIsActiveHome(false);
}

const handleClickContact = (e) => {
  setBody(Contact());
  setIsActiveContact(true);
  setIsActiveProjects(false);
  setIsActiveHome(false);
}

  return (
    <div>
      <nav>
        <a  onClick={handleClickHome} id={isActiveHome? "isActiveHome" : ""} className="navlinks hover-underline-animation">
          HOME
        </a>

        <a  onClick={handleClickProjects} id={isActiveProjects? "isActiveProjects" : ""} className="navlinks hover-underline-animation">
          PROJECTS
        </a>

        <a  onClick={handleClickContact}  id={isActiveContact? "isActiveContact" : ""} className="navlinks hover-underline-animation">
          CONTACT
        </a>
      </nav>
      <body>
        {body}
      </body>
    </div>
  );
}
