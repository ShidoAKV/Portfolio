import React from 'react';
import { ABOUT_TEXT } from './constants';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="pb-20 border-neutral-900">
      <h2 className="my-14 text-center text-4xl  text-white">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
        
        
        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          viewport={{once:true}}
          className="w-[325px] md:w-full bg-neutral-900/60  border border-white rounded-2xl p-4 text-neutral-300 shadow-lg shadow-purple-700"
        >
          <p className="text-left p-1 sm:text-left text-lg font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-gray-300 to-sky-300 tracking-wide">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
