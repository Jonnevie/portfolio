import React from 'react';
import './App.css';
import {Navbar} from './components/navbar.js';
import { Contact } from './components/Contact';
import { MainProjectPage } from './components/MainProjectPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';



function App() {
 
    return (
      <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MainProjectPage" element={<MainProjectPage />} />
      </Routes>
      
      </>
  
  );
}

export default App;
