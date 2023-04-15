import React from 'react';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop>
        <AnimatedRoutes />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;