import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/navbar.js';
import { css } from '@emotion/css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id='jonnevie'>
         JONNEVIE<span id='cheok'>CHEOK</span>
        </p>
        <p id='maintext'>
          Front-End Web Developer | Keen Designer <br/>
          Lifelong Learner
          </p>
          <button class="buttonDark">Download CV</button>
      </header>
    </div>
  );
}

export default App;
