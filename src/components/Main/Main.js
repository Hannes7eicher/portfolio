/* Import stuff */
import HomeHero from '../Home/HomeHero/HomeHero';
import HomeSection from '../Home/HomeSection/HomeSection';

export default function Main() {
    return(
    <main className='bg-white'>
      <HomeHero />
      <HomeSection />
    </main>
  );
}