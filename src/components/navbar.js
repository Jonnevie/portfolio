import React, { useState } from "react";
import "./navbar.css";
import App from "../App";
import { MainProjectPage } from "./MainProjectPage";
import { Contact } from "./Contact";
import { Route, Link } from "react-router-dom";
import { Home } from "../Home";

export function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/Home" className="navlinks hover-underline-animation">
          {" "}
          HOME{" "}
        </Link>

        <Link to="/MainProjectPage" className="navlinks hover-underline-animation" >
          PROJECTS
        </Link>

        <Link to="/Contact" className="navlinks hover-underline-animation">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}
