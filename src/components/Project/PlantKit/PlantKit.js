import React from 'react'
import ProjectMain from '../ProjectMain/ProjectMain';
import { motion } from "framer-motion";

export default function PlantKit() {
  return (
    <motion.div
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}
    >
        <ProjectMain title="Plant Watering Kit" subtitle="Water your plants from anywhere and anytime!" />
    </motion.div>
  );
}