import React from 'react'
import TiltCard from './Tilt'
import ItemAligner from '../../Hoc/Itemaligner'
import { storeData } from './ProjectData'
import useIsMobile from './Ismobile'
import AnimatedOnScroll from '../utils/AnimatedOnScroll'

const Projects = () => {
  const isMobile = useIsMobile();

  return (
    <div className='w-screen min-h-[100vh] px-4 md:px-16 py-10 flex flex-col justify-center items-center' id='work'>
      <AnimatedOnScroll direction="left">
        <div className='w-full max-w-6xl'>
          <p className='text-lg text-gray-200 font-semibold mt-7'>My Work</p>
          <h1 className='text-4xl sm:text-6xl font-extrabold text-white'>Projects.</h1>

          <div className='w-full sm:w-[80%] mt-4'>
            <p className='text-gray-300 text-sm sm:text-base'>
              “Exciting new projects are on the horizon, crafted with creativity, passion, and innovation—coming very soon.”
            </p>
          </div>
        </div>
      </AnimatedOnScroll>

      <div className='w-full max-w-6xl flex flex-wrap gap-6 justify-center mt-10'>
        {storeData.map((project, id) => (
          <AnimatedOnScroll
            key={id}
            direction={id % 2 === 0 ? 'up' : 'right'}
            delay={id * 0.1}
          >
            <TiltCard
              className={`
                flex flex-col gap-4
                ${isMobile ? "w-[280px]" : "w-[320px]"}
                h-auto py-4 px-3
                bg-gradient-to-br from-gray-900 via-gray-800 to-black
                rounded-2xl shadow-xl border border-gray-700
                transition-all duration-300
              `}
            >
              {/* Image */}
              <div className={`w-full ${isMobile ? "h-[180px]" : "h-[220px]"} bg-gray-800 rounded-2xl overflow-hidden`}>
                <img
                  className='w-full h-full object-cover'
                  src={project.image}
                  alt={project.name}
                />
              </div>

              {/* Text Content */}
              <div className="w-full bg-gray-950/80 text-white rounded-2xl p-4 shadow-inner">
                <h1 className="text-xl sm:text-2xl font-semibold mb-2">{project.name}</h1>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>

              {/* Button */}
              {project.available && (
                <div className="w-full h-auto bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 text-white text-center py-2 rounded-2xl font-medium hover:brightness-110 transition">
                  View More
                </div>
              )}
            </TiltCard>
          </AnimatedOnScroll>
        ))}
      </div>
    </div>
  )
}

const Project = ItemAligner(Projects, "projects")
export default Project
