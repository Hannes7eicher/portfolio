import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Project from './components/Project/Project';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element = { <Main/> } />
        <Route path="Project" element = { <Project/> } />
    </Routes>
    </HashRouter>
  );
}

export default App;
  