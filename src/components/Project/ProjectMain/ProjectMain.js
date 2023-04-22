import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ProjectMain({image, title, subtitle, content}) {

    const navigate = useNavigate();

    const src = require("../../assets/" + image);

  return (
        <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-sm sm:max-w-xl">
              <h1 className="mt-10 mb-5 text-4xl sm:text-6xl text-left font-bold tracking-tight text-gray-700">{title}</h1>
              <p className="mb-5 text-xl sm:text-2xl text-left tracking-tight text-gray-700"> { subtitle } </p>
              <button onClick = {() => navigate('/')}   className="absolute sm:fixed text-gray-500 font-bold top-5 left-5 ">X</button>

              <img className='mb-10' src={src} alt="" />

              <p className="my-10 text-left text-gray-700"> { content } </p>

            </div>
          </div>
        </div>
  );
}