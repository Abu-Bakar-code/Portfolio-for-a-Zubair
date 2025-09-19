import React from 'react'
import TiltCard from './Tilt'
import ItemAligner from '../../Hoc/Itemaligner'
import { skillsData, AboutData } from './skills'
import BallCanvas from './BallCanvas'
import useIsMobile from './Ismobile'
import AnimatedOnScroll from '../utils/AnimatedOnScroll'

const About = () => {
  const isMobile = useIsMobile()

  return (
    <div className='w-full min-h-screen px-4 sm:px-16 py-10 flex flex-col items-center'>
      {/* Header Section */}
      <AnimatedOnScroll direction="left">
        <div className='w-full max-w-4xl'>
          <p className='text-lg text-gray-300'>Introduction</p>
          <h1 className='text-4xl sm:text-6xl mt-3 font-extrabold text-white'>
            Overview
          </h1>
          <p className='text-base sm:text-lg mt-4 text-gray-200'>
            {AboutData.about}
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Skills Cards */}
      <div className='w-full max-w-6xl py-10 flex flex-wrap gap-6 justify-center'>
        {skillsData.map((skill, skillid) => (
          <AnimatedOnScroll
            key={skillid}
            direction={skillid % 2 === 0 ? 'up' : 'down'}
            delay={skillid * 0.1}
          >
            <TiltCard
              className={`border-2 flex flex-col items-center justify-center border-gray-300 bg-gray-600 transition-all duration-300 rounded-2xl p-4
                ${isMobile ? 'w-[140px] h-[210px]' : 'w-[250px] h-[300px]'}
              `}
            >
              <div
                className={`${
                  isMobile ? 'w-[70px] h-[70px]' : 'w-[100px] h-[100px]'
                } rounded-full overflow-hidden`}
              >
                <img
                  src={skill.icon}
                  alt={skill.category}
                  className='w-full h-full object-cover'
                />
              </div>
              <h1 className='text-xl sm:text-2xl mt-4 font-bold'>{skill.name}</h1>
            </TiltCard>
          </AnimatedOnScroll>
        ))}
      </div>

      {/* Ball Canvas Section */}
      <div className='w-full max-w-6xl flex justify-center flex-wrap gap-6 py-6'>
        {skillsData.map((skill, skillid) => (
          <AnimatedOnScroll
            key={skillid}
            direction={skillid % 2 === 0 ? 'left' : 'right'}
            delay={skillid * 0.1}
          >
            <div
              className={`${
                isMobile ? 'w-[80px] h-[80px]' : 'w-[160px] h-[160px]'
              }`}
            >
              <BallCanvas icon={skill.icon} />
            </div>
          </AnimatedOnScroll>
        ))}
      </div>
    </div>
  )
}

const about = ItemAligner(About, 'about')
export default about
