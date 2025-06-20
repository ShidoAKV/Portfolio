import React from 'react';
import Aboutpic from './aboutpic.jpg';
import { ABOUT_TEXT } from './constants';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'>Me</span>
      </h2>

      <div className='flex flex-col lg:flex-row'>
        {/* Left: Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className='w-full lg:w-1/2 lg:p-8 flex items-center justify-center overflow-hidden'
        >
          <img
            className='rounded-2xl md:max-w-[300px] border-2 border-purple-600 lg:max-w-full overflow-hidden'
            src={Aboutpic}
            alt='About'
          />
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 p-6  sm:p-2 my-8 mx-1 flex items-center rounded-2xl border-2 border-purple-600 justify-center"
        >
          <p className="text-base  sm:text-sm lg:text-lg xl:text-xl mx-2 text-left lg:text-justify text-neutral-300">
            {ABOUT_TEXT}
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default About;
