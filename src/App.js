import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import PlantKit from './components/Project/PlantKit/PlantKit';
import EnergyMeter from './components/Project/EnergyMeter/EnergyMeter';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element = { <Main/> } />
        <Route path="PlantKit" element = { <PlantKit/> } />
        <Route path="EnergyMeter" element = { <EnergyMeter/> } />
    </Routes>
    </HashRouter>
  );
}

export default App;