import React from 'react'
import {RiReactjsLine} from 'react-icons/ri';
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { MdCss } from "react-icons/md";
import clogo from "./c.svg";
import { motion } from "framer-motion";

  const iconvariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        },
    },
  });

  

function Technology() {
  return (
    <>
    <div className='border-b border-neutral-900 pb-24  '>
     
     <motion.h2 whileInView={ { opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:1.5}}
        className='my-20 text-center text-xl'>Technology</motion.h2>

     <div className='flex flex-wrap items-center justify-center gap-4'>

        <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate"
         className='rounded-2xl border-4 border-neutral-400 p-4'>
          <RiReactjsLine className='text-6xl text-pink-400'/>
        </motion.div>

        <motion.div variants={iconvariants(3)} initial="initial" animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
          <SiMysql className='text-6xl text-blue-400'/>
        </motion.div>

        <motion.div variants={iconvariants(5)} initial="initial" animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
          <DiJavascript1  className='text-6xl text-yellow-400'/>
        </motion.div>

        <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
          <SiTailwindcss className='text-6xl text-cyan-400'/>
        </motion.div>

     </div>

     <motion.h2 whileInView={ { opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-xl py-9' >Language</motion.h2>
     <div className='flex flex-wrap items-center justify-center gap-4 pt-25'>
     
       <motion.div variants={iconvariants(3)} initial="initial" animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
            <IoLogoHtml5  className='text-6xl text-red-400'/>
        </motion.div>

        <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
         <MdCss className='text-6xl text-blue-400'/>
        </motion.div>
      

        <motion.div variants={iconvariants(5)} initial="initial" animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
          <DiJavascript1  className='text-6xl text-yellow-400'/>
        </motion.div>

        <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate"
        className='rounded-2xl border-4 border-neutral-400 p-4'>
         <img src={clogo} className='w-14 h-[20%]'/>
        </motion.div>

     </div>
     
    </div>
  
     
   
    
      
   
    </>
    
  )
}

export default Technology