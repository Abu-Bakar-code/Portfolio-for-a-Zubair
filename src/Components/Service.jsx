import React from "react"
import AnimatedOnScroll from "../utils/AnimatedOnScroll"

const services = [
  { icon: "💻", title: "Web Development", desc: "Modern responsive websites with React." },
  { icon: "🎨", title: "UI/UX Design", desc: "Beautiful, user-friendly interfaces." },
  { icon: "⚡", title: "Performance", desc: "Optimized apps with smooth experience." },
]

const Services = () => {
  return (
    <div id="services" className="w-full min-h-[80vh] px-6 sm:px-16 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-300">What I Do</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Services</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, i) => (
            <AnimatedOnScroll key={i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-xl hover:bg-gray-600 transition">
                <div className="text-4xl">{service.icon}</div>
                <h2 className="text-xl font-bold text-white mt-4">{service.title}</h2>
                <p className="text-gray-300 mt-2">{service.desc}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
