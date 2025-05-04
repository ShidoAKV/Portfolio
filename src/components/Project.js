import React from 'react'
import { PROJECTS } from './constants'
import { motion } from "framer-motion";

function Project() {
  return (
    <div className='border-neutral-900 pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='mb-10 flex flex-wrap lg:justify-center border-2  lg:ml-[25%] lg:w-[60%] border-purple-600 rounded-lg p-4 bg-neutral-900'
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='w-full lg:w-1/4 border-r-0 lg:border-r-2 border-b-2 lg:border-b-0 border-purple-600 p-2'
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                onClick={() => window.open(project.location)}
                style={{ cursor: 'pointer' }}
                className='mb-4 rounded shadow-purple-600 shadow-lg hover:scale-[104%] transition-all duration-300 ease-out'
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4 p-4'
            >
              <div className='flex flex-wrap gap-4 items-center'>
                <h6
                  className='px-3 py-1 rounded-md bg-blue-700 text-neutral-300 font-semibold cursor-pointer'
                  onClick={() => window.open(project.location)}
                >
                  {project.title}
                </h6>

                {project.title === 'NexaHealth' && (
                  <div
                    className='border-2 border-purple-600 rounded-md text-white font-semibold bg-neutral-900 px-2 py-1 text-sm cursor-pointer'
                    onClick={() => window.open('https://nexahealth.onrender.com')}
                  >
                    Live
                  </div>
                )}
              </div>

              <p className='mt-4 text-neutral-400'>{project.description}</p>

              <div className="mt-4 flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-1 border-neutral-300 border-[1.5px] rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Project;
