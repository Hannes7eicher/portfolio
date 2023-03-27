import  {motion} from 'framer-motion';
import { useState } from 'react';

export default function ProjectContent({}) {

    const [isOpen, setisOpen] = useState(false);
    
    return (
        <motion.div className='h-full w-full bg-black'>
            <motion.h2>Project Title</motion.h2>
            <motion.p>This project is really cool and here why you should check it out...</motion.p>
        </motion.div>
    );
}


