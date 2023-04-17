import React from 'react'


export default function HomeHero() {
  return (
    <div id="body">
      <div className='fixed h-screen w-full blur-3xl'>
        <svg className="absolute xs:animate-spin p-8 h-4/6 w-full">
          <circle className='animate-pulse' cx="45%" cy="20%" r="20%" fill="#9C95DC" opacity="0.8" />
          <circle className='animate-pulse' cx="25%" cy="35%" r="20%" fill="#C19AB7" opacity="0.01" />
        </svg>
        </div>
        <div className="pt-[60vh] pb-20">
          <div className="mx-auto max-w-2xl pb-0 ml-0">
              <h1 className="relative sm:fixed bottom-1 sm:bottom-28  text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-gray-900 text-left pl-8 pb-0">Hannes <br /> Siebeneicher</h1>
              <p className="relative sm:fixed bottom-1 sm:bottom-20 text-lg text-2xl leading-8 text-gray-600 text-left font-RobotoCondensed pl-8 pb-0">
                
            Creative technologiest crafting interactions
          </p>

          <p className="relative sm:fixed sm:bottom-14 text-lg text-2xl leading-8 text-gray-400 text-left  font-RobotoCondensed pl-8 pb-0">
                
                Currently working at Arduino
              </p>
            </div>
          </div>
    </div>
  );
}