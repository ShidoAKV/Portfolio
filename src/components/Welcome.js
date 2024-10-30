// src/components/Welcome.js

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 1.5; // Increase delay for slower appearance
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 }, // Smooth path length transition
        opacity: { delay, duration: 0.4, ease: "easeInOut" }, // Smooth opacity transition
      },
    };
  },
};

const Welcome = () => {
  return (
    <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="pt-64 sm:overflow-hidden flex flex-col sm:flex-row justify-center items-center">
        <motion.svg
          width="100%"
          height="200"
          viewBox="0 0 1000 200"
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.text
            x="50" // Adjusted x position to prevent overlap
            y="100"
            fontSize="80"
            fill="white" // Set fill color to white
            variants={draw}
            custom={1}
          >
            Welcome
          </motion.text>

          <motion.text
            x="400" // Adjusted x position to prevent overlap
            y="100"
            fontSize="80"
            fill="white" // Set fill color to white
            variants={draw}
            custom={2} // Sequential delay for animation
          >
            to my
          </motion.text>

          <motion.text
            x="620" // Adjusted x position to prevent overlap
            y="100"
            fontSize="80"
            fill="white" // Set fill color to white
            variants={draw}
            custom={3} // Sequential delay for animation
          >
            portfolio
          </motion.text>
        </motion.svg>
      </div>
    </div>
  );
};

export default Welcome;
