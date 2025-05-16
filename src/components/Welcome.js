// src/components/Welcome.js

// import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationwelcome from "./Animation-welcome.json"
import animationgeneral from "./Animation -general.json"


const Welcome = () => {
  return (
    <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className=" sm:overflow-hidden flex flex-col sm:flex-row justify-center items-center">
       
        <Lottie
        className="sm:pt-0 pt-56"
        animationData={animationwelcome}
        />
         <div className="hidden md:block">
          <Lottie animationData={animationgeneral} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
