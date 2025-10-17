import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Solved 1000+ DSA Problems on',
    links: [
      { name: 'LeetCode', url: 'https://leetcode.com/u/shido_AKV/' },
      { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/abhi3jthk/' },
      { name: 'InterviewBit', url: 'https://www.interviewbit.com/profile/abhishek_847/' },
    ],
  },
  {
    title: 'LeetCode Max Rating: 1689',
    detail: 'Global Rank 991 in Biweekly Contest 142',
  },
  {
    title: 'JEE Main Percentile: 98.75%',
    detail: 'Among 1.2 million students',
  },
];

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

const Achievement = () => {
  return (
    <section className="py-36 px-4 max-w-6xl mx-auto" id="achievement">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-center mb-20 text-white"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Achievements
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={floatVariants}
            initial="animate"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            className="p-[1px] rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 
                       shadow-[0_0_10px_rgba(124,58,237,0.4)] hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-shadow duration-300"
          >
            <div
              className="h-full w-full p-6 bg-slate-950 rounded-[inherit] 
              md:min-h-[200px] min-h-[150px] shadow-inner shadow-black/40 flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              {(!item.links) && <p className="text-neutral-300 mb-3">{item.detail}</p>
}
              {item.links && (
                <div className="flex flex-wrap gap-3">
                  {item.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-purple-400 transition-colors underline"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
