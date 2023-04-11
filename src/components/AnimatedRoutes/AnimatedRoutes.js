import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Main from '../Main/Main';
import PlantKit from '../Project/PlantKit/PlantKit';
import EnergyMeter from '../Project/EnergyMeter/EnergyMeter';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
              <Route path="/" element = { <Main/> } />
              <Route path="PlantKit" element = { <PlantKit/> } />
              <Route path="EnergyMeter" element = { <EnergyMeter/> } />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;