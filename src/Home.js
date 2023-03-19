/* Import stuff */
import Section from './Section';
import './Home.css';

export default function Home() {
    return(
      <main>
        <div id="body" className='bg-white'>
            <svg className="absolute animate-spin h-screen w-full blur-3xl z-0">
              <circle className='animate-pulse' cx="40%" cy="30%" r="25%" fill="#9C95DC" opacity="0.08" />
              <circle className='animate-pulse' cx="20%" cy="50%" r="15%" fill="#C19AB7" opacity="0.1" />
              <circle className='animate-pulse' cx="70%" cy="70%" r="20%" fill="#730071" opacity="0.1" />
              <circle className='animate-pulse' cx="10%" cy="70%" r="20%" fill="#730071" opacity="0.04" />
            </svg>
            <div className="">
              <div className="mx-auto max-w-2xl py-32 sm:py-64">
                  <h1 className="relative text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center sm:text-center">Hannes Siebeneicher</h1>
                  <p className="relative py-8 text-lg leading-8 text-gray-600 text-center sm:text-center">
                crafting interactions
              </p>
                </div>
              </div>
        </div>
        <Section/>
    </main>
  );
}