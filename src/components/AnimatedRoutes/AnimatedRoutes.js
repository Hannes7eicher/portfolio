import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Main from '../Main/Main';
import PlantKit from '../Project/Content/PlantKit/PlantKit';
import EnergyMeter from '../Project/Content/EnergyMeter/EnergyMeter';
import OlfactoryDisplay from '../Project/Content/OlfactoryDisplay/OlfactoryDisplay';
import CriticalDesign from '../Project/Content/CriticalDesign/CriticalDesign';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
              <Route path="/" element = { <Main/> } />
              <Route path="PlantKit" element = { <PlantKit/> } />
              <Route path="EnergyMeter" element = { <EnergyMeter/> } />
              <Route path="OlfactoryDisplay" element = { <OlfactoryDisplay/> } />
              <Route path="CriticalDesign" element = { <CriticalDesign/> } />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;