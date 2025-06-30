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
      <div className='flex flex-col-reverse sm:flex-row items-center sm:items-start justify-center gap-8 px-4 sm:px-8'>

        {/* Left Section: Text */}
        <div className='w-full sm:w-1/2 flex flex-col justify-center'>
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='pb-6 text-3xl sm:text-5xl font-thin tracking-tight text-center sm:text-left mt-8 sm:mt-16'
          >
            Abhishek Vishwakarma
          </motion.h1>

          <motion.span
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent text-center sm:text-left block mb-4'
          >
            Developer and Coder
          </motion.span>

          <motion.div
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            className="border rounded-xl p-6 mt-4 shadow-lg"
          >
            <p className="text-center sm:text-left text-lg font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-gray-300 to-sky-300">
              {HERO_CONTENT}
            </p>
          </motion.div>

        </div>

        {/* Right Section: Image */}
        <div className='w-full sm:w-1/2 flex justify-center items-center '>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profile}
            alt="profilephoto"
            className="w-4/5 sm:w-3/4 lg:w-2/3 xl:w-1/2 h-auto object-contain rounded-xl  bg-slate-500"
            style={{ backgroundColor: 'rgb(170 163 172)' }}
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;
