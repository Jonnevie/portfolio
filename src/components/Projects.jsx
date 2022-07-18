import React, { useState } from 'react';
import App from '../App';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';

export const Projects = () => {
const [body, setBody] = useState();

const handleClickOne = () => {
    setBody(ProjectOne());
}
const handleClickTwo = () => {
    setBody(ProjectTwo());
}
const handleClickThree = () => {
    setBody(ProjectThree());
}

return (
    <div>
        <button onClick={handleClickOne}>TASK</button>
        <button onClick={handleClickTwo}>COLMAR ACADEMY</button>
        <button onClick={handleClickThree}>VANITYFUR</button>
      
        <div>
            { body }
        </div>
    </div>
)
}
