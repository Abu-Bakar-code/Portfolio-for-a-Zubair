import { Phone, Mail, MessageCircle, Linkedin, Github } from "lucide-react";
import React from 'react'
import EarthContainer from './EarthContainer'
import StarsContainer from './StarsContainer'
import AnimatedOnScroll from '../utils/AnimatedOnScroll' // ✅ Make sure this path is correct

const Contacts = () => {
  return (
    <div className="relative w-screen min-h-[100dvh] overflow-hidden" id='contact'>
      {/* Background Stars */}
      <StarsContainer />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-[100dvh] gap-6 p-4">

        {/* Contact Info Card with Animation */}

<AnimatedOnScroll direction="left">
  <div className="w-[90%] max-w-[500px] bg-gray-700 p-6 rounded-2xl text-gray-100 shadow-xl">
    <p className="text-md font-semibold">Get in Touch</p>
    <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

    <div className="flex flex-col gap-4 text-sm sm:text-base">
      
      {/* Phone */}
      <a
        href="tel:+923498707891"
        className="flex items-center gap-3 group"
      >
        <Phone className="text-violet-400 group-hover:text-violet-300 transition" />
        <span className="group-hover:text-violet-300">+92 349 8707981</span>
      </a>

      {/* Email */}
      <a
        href="mailto:zubair@gmail.com"
        className="flex items-center gap-3 group"
      >
        <Mail className="text-violet-400 group-hover:text-violet-300 transition" />
        <span className="group-hover:text-violet-300">zubair@gmail.com</span>
      </a>

      <a
  href="https://wa.me/923498707981"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 group"
>
  <MessageCircle className="text-green-400 group-hover:text-green-300 transition" />
  <span className="group-hover:text-green-300">Chat on WhatsApp</span>
</a>


      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        <Linkedin className="text-blue-400 group-hover:text-blue-300 transition" />
        <span className="group-hover:text-blue-300">LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        <Github className="text-gray-400 group-hover:text-white transition" />
        <span className="group-hover:text-white">GitHub</span>
      </a>
    </div>

    <div className="mt-4 text-gray-300 italic">
      “I might be building galaxies in React right now — but I’ll reply soon 🚀”
    </div>
  </div>
</AnimatedOnScroll>

        {/* Earth Model with Animation */}
        <AnimatedOnScroll direction="right">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
            <EarthContainer />
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  )
}

export default Contacts
