import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ProjectMain({image, title, subtitle}) {

    const navigate = useNavigate();

    const src = require("../../assets/" + image);

  return (
        <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mt-10 mb-5 text-5xl font-bold tracking-tight text-gray-700">{title}</h1>
              <p className="mb-5 tracking-tight text-gray-700">{subtitle}</p>
              <button onClick = {() => navigate('/')}   className="absolute sm:fixed text-gray-500 font-bold top-5 left-5 ">X</button>

              <img className='mb-10' src={src} alt="" />

              <p className="my-10 text-left text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et lacinia dui. Nam mollis pretium ligula sed auctor. Donec suscipit commodo eleifend. Maecenas nec mi tempor, posuere lacus lacinia, rutrum tortor. Sed ultrices, orci eu porttitor tincidunt, ligula leo fermentum risus, vel eleifend eros elit non ligula. Vestibulum tempus ut odio eget suscipit. Vivamus elementum augue eu orci varius, quis finibus mauris maximus. Aenean eros libero, laoreet id sagittis vel, semper sed leo.
                Curabitur rutrum lacus et dignissim viverra. Proin lectus ligula, laoreet at ante ac, scelerisque rhoncus justo. Quisque nibh nunc, tristique et dapibus egestas, posuere vitae tellus. Morbi. 
              </p>

            </div>
          </div>
        </div>
  );
}