import React from 'react'


export default function HomeHero() {
  return (
    <div id="body">
      <div className='absolute h-screen w-full blur-3xl'>
        <svg className="absolute xs:animate-spin p-8 h-4/6 w-full">
          <circle className='animate-pulse' cx="45%" cy="20%" r="20%" fill="#9C95DC" opacity="0.8" />
          <circle className='animate-pulse' cx="25%" cy="35%" r="20%" fill="#C19AB7" opacity="0.01" />
        </svg>
        </div>
        <div className="pt-72">
          <div className="mx-auto max-w-2xl pt-96 pb-32 ml-0">
              <h1 className="relative text-4xl sm:text-8xl font-bold tracking-tight text-gray-900 sm:text-6xl text-left font-PlayfairDisplay pl-8 pb-0">Hannes Siebeneicher</h1>
              <p className="relative text-lg text-2xl leading-8 text-gray-600 text-left font-RobotoCondensed pl-8 pb-0">
                
            Creative technologiest crafting interactions
          </p>

          <p className="relative text-lg text-2xl leading-8 text-gray-400 text-left  font-RobotoCondensed pl-8 pb-0">
                
                Currently working at Arduino
              </p>
            </div>
          </div>
    </div>
  );
}