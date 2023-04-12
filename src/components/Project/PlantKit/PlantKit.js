import React from 'react'
import ProjectMain from '../ProjectMain/ProjectMain';
import { motion } from "framer-motion";

export default function PlantKit() {

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }

  return (
    <motion.div
    transition={spring} 
    animate={{ scale: 1.03 }}
    >
        <ProjectMain title="Plant Watering Kit" subtitle="Water your plants from anywhere and anytime!" />
    </motion.div>
  );
}