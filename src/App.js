import React from 'react';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import { HashRouter } from "react-router-dom";


function App() {

  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;