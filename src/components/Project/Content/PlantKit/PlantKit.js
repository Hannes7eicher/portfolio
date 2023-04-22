import {React } from 'react'
import ProjectMain from '../../ProjectMain/ProjectMain';
import { motion } from "framer-motion";

export default function PlantKit() {

  return (
    <motion.div>
        <ProjectMain 
        title="Plant Watering Kit" 
        subtitle="Water your plants from anywhere and anytime!" 
        image="plantKit.png" 
        content="During my time at Arduino I have had the chance to work on conceptualizing, prototyping and launching a cloud enabled and remote controllable plant watering system." 
        />
    </motion.div>
  );
}