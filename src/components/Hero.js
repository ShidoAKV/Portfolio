import React from 'react';
import { HERO_CONTENT } from './constants';
import profile from './myprofile.png';
import { motion } from 'framer-motion';

const container = (delayval) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: delayval },
  },
});

function Hero() {
  return (
    <div className='border-neutral-900 pb-4 lg:mb-35'>
      
      <div className='flex flex-col-reverse sm:flex-row'>
        {/* Left Section: Text */}
        <div className='w-full sm:w-1/2'>
          <div className='flex flex-col items-center sm:items-start'>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='pb-8 text-4xl sm:text-5xl font-thin tracking-tight mt-8 sm:mt-16 text-center sm:text-left'
            >
              Abhishek Vishwakarma
            </motion.h1>
          </div>

          <motion.span
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent text-center sm:text-left block'
          >
            Developer and Coder
          </motion.span>

          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='my-2  max-w-xl py-6 font-lighter overflow-hidden text-center sm:text-left px-4 sm:px-0'
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right Section: Image */}
        <div className='w-full  sm:w-1/2 sm:p-8'>
          <div className='flex justify-center items-center  h-[50%] mt-5'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt="profilephoto"
              className='w-[60%] rounded-xl  h-auto  bg-slate-500'
              style={{ backgroundColor: 'rgb(170 163 172)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
