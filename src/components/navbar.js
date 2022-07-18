import React, { useState } from 'react';
import './navbar.css';
import { Projects } from './Projects';
import App from '../App';
import ProjectOne from './ProjectOne';
import { MainProjectPage } from './MainProjectPage';
import { Contact } from './Contact';

export function NavBar() {

const  [body, setBody] = useState(App());

const handleClickHome = (e) => {
    setBody(App());
    e.preventDefault();
}
const handleClickProjects = (e) => {
    setBody(MainProjectPage())
    e.preventDefault();
}
const handleClickContact = (e) => {
    setBody(Contact())
    e.preventDefault();
}

    return (
        <div>
            <nav>
                <a className='navlinks' onClick={handleClickHome} href="/"> HOME</a> 
                <a className='navlinks' onClick={handleClickProjects} href="/"> PROJECTS</a>
                <a className='navlinks' onClick={handleClickContact} href="/"> CONTACT</a>
            </nav>
            <body>
                { body }
                </body>
            </div>
        )
}

        



