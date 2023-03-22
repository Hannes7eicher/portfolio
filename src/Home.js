/* Import stuff */
import Section from './Section';
import './Home.css';

export default function Home() {
    return(
      <main>
        <div id="body" className='bg-white'>
          <div className='absolute h-screen w-full blur-3xl'>
            <svg className="absolute sm:animate-spin h-full w-full">
              <circle className='animate-pulse' cx="45%" cy="20%" r="10%" fill="#9C95DC" opacity="0.08" />
              <circle className='animate-pulse' cx="55%" cy="35%" r="10%" fill="#C19AB7" opacity="0.1" />
            </svg>
            </div>
            <div className="">
              <div className="mx-auto max-w-2xl py-32 sm:py-64">
                  <h1 className="relative text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center sm:text-center">Hannes Siebeneicher</h1>
                  <p className="relative py-8 text-lg leading-8 text-gray-600 text-center sm:text-center">
                crafting interactions
              </p>
                </div>
              </div>
        <Section/>
        </div>
    </main>
  );
}