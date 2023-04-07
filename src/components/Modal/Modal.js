import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: "25",
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

export default function Modal({ handleClose }) {
  return (
    <Backdrop onClick={handleClose} >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: 'clamp(50%, 700px, 90%)',
            height: 'min(50%, 300px)',
          }}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          MOIN
        </motion.div>
    </Backdrop>
  )
}