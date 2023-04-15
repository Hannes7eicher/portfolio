import React from 'react';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import { HashRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {

  return (
    <HashRouter>
      <ScrollToTop>
        <AnimatedRoutes />
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;