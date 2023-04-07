import  {motion} from 'framer-motion';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function Card({image, title, subtitle}) {

    const src = require("../assets/" + image);

    const[modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
    return (
<motion.div
  className="cursor-pointer card" 
  whileHover={{ scale: 1.05}}
  whileTap={{ scale: 0.99}}
  onClick={() => (modalOpen ? close() : open() )}
  >

  <motion.div>
    <motion.h1 class="text-xl lg:text-4xl font-bold leading-none tracking-tight text-gray-700"> {title} </motion.h1>
    <motion.p class="my-4 text-lg text-gray-500"> {subtitle} </motion.p>
  </motion.div>

  <motion.div>
   <motion.img className="sm:h-96 shadow-2xl"  src={src} />
  </motion.div>

  {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}

</motion.div>
    );
}


