import  {motion} from 'framer-motion';
import { useState } from 'react';
import ProjectContent from './ProjectContent';

export default function Card({image, title, subtitle}) {

    const src = require("./assets/" + image);
    const [isOpen, setisOpen] = useState(true);
    
    return (
<motion.div
  className="cursor-pointer card" 
  onClick={() => setisOpen(!isOpen)}>

  <motion.div>
    <motion.h1 class="text-xl lg:text-4xl font-bold leading-none tracking-tight text-gray-700"> {title} </motion.h1>
    <motion.p class="my-4 text-lg text-gray-500"> {subtitle} </motion.p>
  </motion.div>

  <motion.div>
   <motion.img className="sm:h-96 shadow-2xl"  src={src} />
  </motion.div>

</motion.div>
    );
}


