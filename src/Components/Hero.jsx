import React from 'react'
import Navbar from './Navbar'
import Canva from './Canva'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className='w-screen h-[100vh] flex md:flex-start bg-gray-900 pr-1'>
      <Navbar />

      <div className="w-screen mt-[30px] sm:mt-[40px] md:mt-[70px] flex p-3">
        {/* Decorative Line */}
        <div className="flex flex-col w-[100px] h-[300px] justify-center items-center">
          <div className="w-[25px] h-[25px] bg-violet-500 rounded-full"></div>
          <div className="h-[180px] w-[6px] bg-gradient-to-b from-violet-700 to-transparent"></div>
        </div>

        {/* Text Section */}
        <div className='w-auto h-[300px]'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl text-white font-extrabold mt-11'>
            Hi, I'm <span className='text-violet-700'>Zubair</span>
          </h1>

          <p className='text-2xl mt-10 text-gray-100'>
            I'm a{' '}
            <span className='text-violet-400 font-semibold'>
              <Typewriter
                words={[
                  'Web Developer',
                  'UI Designer',
                  'Hacker (maybe 👀)',
                  'Math`s lover',
                  'React Fanatic',
                  'Creative Thinker',
                ]}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
        </div>
      </div>

      {/* 3D Model */}
      <Canva />
    </div>
  )
}

export default Hero
