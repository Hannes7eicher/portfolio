import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main'
import Project from './components/Project/Project';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Main/> } />
        <Route path="Project" element = { <Project/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
  