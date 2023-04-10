import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

export default function Project() {

    const navigate = useNavigate();

  return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button onClick = {() => navigate('/')}   className="btn btn-primary">Go Back</button>
            </div>
          </div>
        </div>
  );
}