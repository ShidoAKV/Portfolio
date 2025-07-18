// Welcome.js
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationwelcome from "./Animation-welcome.json";
import animationgeneral from "./Animation -general.json";

const welcomeVariants = {
  initial: { opacity: 0, scale: 0.95, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 1 } },
};

const Welcome = () => {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      variants={welcomeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sm:overflow-hidden flex flex-col sm:flex-row justify-center items-center">
        <Lottie className="sm:pt-0 pt-30" animationData={animationwelcome} />
        <div className="hidden md:block">
          <Lottie animationData={animationgeneral} />
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
