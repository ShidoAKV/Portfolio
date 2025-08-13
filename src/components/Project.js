import { PROJECTS } from './constants';
import { motion } from 'framer-motion';

function Project() {
  return (
    <div className='w-full max-w-7xl  lg:px-8 mx-auto'>

      <div className='pb-16  '>
        {/* Heading */}
        <motion.h2
          className="my-12 text-center text-3xl  text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className='text-neutral-300'>Projects</span>
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  max-w-7xl mx-auto ">
          {PROJECTS?.map((project, index) => (
            <motion.div
              key={index}
              className="bg- border border-purple-600 rounded-xl p-4 shadow-lg hover:shadow-purple-500 transition duration-300"
              initial={{ opacity: 0, y: 0, z: -100 }}
              whileInView={{ opacity: 1, y: 0, z: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{once:true}}

            >
              <div className="flex  items-start gap-4 mb-4 ">
                {/* Image Section */}
                <div className="flex-shrink-0 ">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className=" cursor-pointer rounded-md shadow-lg hover:shadow-sky-500 transition duration-300"
                  />
                </div>

               
                <div className="flex flex-col justify-between">
                  <h6
                    className=" text-white px-3 py-1 rounded-md font-semibold cursor-pointer  mb-2  "
                    style={{
                      background: 'linear-gradient(to right,purple, #8b5cf6)'  
                    }}
                  >
                    {project.title}
                  </h6>
                  
                 {
                 ( project.link)&&<button
                    onClick={() => window.open(project.link)}
                    className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-purple-500 "
                  >
                    Live
                  </button>
                  }
                   {
                  (!project.link)&&<button
                    onClick={() => window.open(project.location)}
                    className="bg-purple-600 text-white px-3  py-1 rounded-md text-sm font-semibold hover:bg-purple-500 "
                  >
                    Github
                  </button>
                  }
                </div>
              </div>


              {/* Description */}
              < p className="mb-3 text-md bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-gray-300 to-sky-300  " >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project?.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm text-purple-400 border border-purple-600 px-2 py-0.5 rounded-md shadow-lg hover:shadow-sky-500 transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))
          }
        </div >
      </div >
    </div>
  );
}

export default Project;
