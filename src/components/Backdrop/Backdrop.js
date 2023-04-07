import React from 'react'
import { motion } from "framer-motion";

export default function Backdrop({children, onClick}) {
  return (
    <motion.div
      className="absolute h-full w-full inset-x-0 inset-y-0 bg-black flex items-center justify-items-center"
      onClick = {onClick}
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1}}
      exit = {{ opacity: 0}}
    >
    {children}
    </motion.div>
  )
}
