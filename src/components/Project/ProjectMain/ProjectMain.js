import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ProjectMain({title, subtitle}) {

    const navigate = useNavigate();

  return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{subtitle}</p>
              <button onClick = {() => navigate('/')}   className="btn btn-primary">Go Back</button>
            </div>
          </div>
        </div>
  );
}