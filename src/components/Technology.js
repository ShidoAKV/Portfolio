import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { DiJavascript1 } from 'react-icons/di';
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
} from 'react-icons/si';
import { IoLogoHtml5 } from 'react-icons/io';
import { TbBrandReactNative } from 'react-icons/tb';
import { RiNextjsFill } from 'react-icons/ri';
import { FaNodeJs, FaGithub } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import clogo from './c.svg';
import { motion } from 'framer-motion';
import { SiPrisma } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const categories = [
  {
    title: 'Technology',
    items: [
      { icon: <RiReactjsLine className="text-7xl lg:text-6xl text-pink-400 drop-shadow-[0_2px_8px_rgba(236,72,153,0.5)]" />, label: 'React.js', duration: 3 },
      { icon: <FaNodeJs className="text-7xl lg:text-6xl text-green-400 drop-shadow-[0_2px_8px_rgba(34,197,94,0.5)]" />, label: 'Node.js', duration: 2.5 },
      { icon: <SiTailwindcss className="text-7xl lg:text-6xl text-cyan-400 drop-shadow-[0_2px_8px_rgba(34,211,238,0.5)]" />, label: 'TailwindCSS', duration: 3 },
      { icon: <SiMongodb className="text-7xl lg:text-6xl text-green-400 drop-shadow-[0_2px_8px_rgba(34,197,94,0.5)]" />, label: 'MongoDB', duration: 2.5 },
      { icon: <SiExpress className="text-7xl lg:text-6xl text-gray-400 drop-shadow-md" />, label: 'Express.js', duration: 3 },
      { icon: <TbBrandReactNative className="text-7xl lg:text-6xl text-blue-600 drop-shadow-md" />, label: 'React Native', duration: 2.5 },
      { icon: <RiNextjsFill className="text-7xl lg:text-6xl text-white drop-shadow-md" />, label: 'Next.js', duration: 3 },
      { icon: <SiSocketdotio className="text-7xl lg:text-6xl text-white drop-shadow-md" />, label: 'Socket.io', duration: 2.5 },
      { icon: <SiPrisma className="text-7xl lg:text-6xl text-white drop-shadow-md" />, label: 'primsa ORM', duration: 3 },
      { icon: <FaDocker className="text-7xl lg:text-6xl text-blue-600 drop-shadow-md" />, label: 'Docker', duration: 3 },
    ],
  },
  {
    title: 'Languages',
    items: [
      { icon: <IoLogoHtml5 className="text-7xl lg:text-6xl text-red-400 drop-shadow-md" />, label: 'HTML', duration: 3 },
      { icon: <SiTypescript className="text-7xl lg:text-6xl text-blue-400   drop-shadow-md" />, label: 'CSS', duration: 2.5 },
      { icon: <DiJavascript1 className="text-7xl lg:text-6xl text-yellow-400 drop-shadow-md" />, label: 'JavaScript', duration: 3 },
      { icon: <img src={clogo} className="w-16 h-[100%] drop-shadow-md" alt="C" />, label: 'C++', duration: 2.5 },
    ],
  },
  {
    title: 'Databases / Tools',
    items: [
      { icon: <SiMysql className="text-7xl lg:text-6xl text-blue-400 drop-shadow-md" />, label: 'MySQL', duration: 5 },
      { icon: <SiMongodb className="text-7xl lg:text-6xl text-green-400 drop-shadow-md" />, label: 'MongoDB', duration: 2.5 },
      { icon: <FaGithub className="text-7xl lg:text-6xl text-white drop-shadow-md" />, label: 'GitHub', duration: 5 },
      { icon: <VscVscode className="text-7xl lg:text-6xl text-blue-500 drop-shadow-md" />, label: 'VS Code', duration: 2.5 },
      { icon: <DiPostgresql className="text-7xl lg:text-6xl text-blue-500 drop-shadow-md" />, label: 'postgreSQL', duration: 2.5 },

      
    ],
  },
];

function Technology() {
  return (
    <div className="w-full max-w-4xl lg:max-w-5xl px-4 mx-auto">
      {categories?.map((section, idx) => (
        <div key={idx}>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            className="my-16 text-center text-3xl  text-white 'text-neutral-500'"
          >
            {section.title}
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {section?.items?.map(({ icon, label, duration }, i) => (
              <div key={i} className="relative flex flex-col items-center group">
                {/* Hover Label */}
                <div className="absolute -top-10 opacity-0   group-hover:opacity-100 transition-all duration-300 text-sm text-white bg-purple-500 px-2 py-1 rounded shadow-md scale-90 group-hover:scale-100">
                  {label}
                </div>

                <motion.div
                  variants={iconvariants(duration)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl  border-2 border-gray-500 p-4 shadow-lg hover:shadow-purple-600 transition"
                >
                  {icon}
                </motion.div>
                
              </div>

            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Technology;
