/* Import stuff */
import HomeHero from '../Home/HomeHero/HomeHero';
import HomeSection from '../Home/HomeSection/HomeSection';
import { motion } from "framer-motion"

export default function Main() {

    return(
    <motion.main 
    className='bg-white'
    initial = {{  }}
    animate = {{  }}
    exit = {{  }}
    >
      <HomeHero />
      <HomeSection />
    </motion.main>
  );
}