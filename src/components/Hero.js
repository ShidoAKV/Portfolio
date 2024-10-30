import React from 'react'
import { HERO_CONTENT } from './constants'
import profile from './myprofile.png'
import { motion } from "framer-motion";

const container=(delayval)=>({
    hidden:{x:-100,opacity:0},
    visible:{
     x:0,
     opacity:1,
     transition:{duration:0.9,delay:delayval},
    },
});


function Hero() {
  return (
    <div className='  border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                 className='pb-16 text-6xl  font-thin tracking-tight lg:mt-16'>
                 Abhishek Vishwakarma
                </motion.h1>
            </div>
            <motion.span  
                 variants={container(0.7)}
                 initial={{x:-100,opacity:0}}
                 animate="visible"
                 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
               Devloper And Coder
           </motion.span>

            <motion.p 
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
            className='my-2  max-w-xl py-6  font-light tracking-tighter'>
            {HERO_CONTENT}
            </motion.p>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex justify-center'>
    <motion.img 
    initial={{x:100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1,delay:1.2}}
    src={profile} alt="profilephoto" className=' w-[47%]  rounded-xl h-[100%] bg-slate-500' style={{backgroundColor:"rgb(170 163 172)"}} />
    </div>
    </div>
        </div>

    </div>
  )
}

export default Hero