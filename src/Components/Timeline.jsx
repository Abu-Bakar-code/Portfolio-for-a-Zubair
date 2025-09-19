import React from "react"
import AnimatedOnScroll from "../utils/AnimatedOnScroll"

const timeline = [
  {
    year: "2025",
    title: "Frontend Developer Intern",
    company: "TechCorp",
    description:
      "Worked on React dashboards, improved UI performance, and built reusable components.",
  },
  {
    year: "2024",
    title: "Freelance Projects",
    company: "Upwork / Fiverr",
    description:
      "Delivered responsive websites, web apps, and e-commerce solutions for international clients using React, Tailwind, and modern frameworks.",
  },
  {
    year: "2023",
    title: "Fiverr Experience",
    company: "Freelance Platform",
    description:
      "Successfully completed multiple projects including Shopify store setups, custom themes, and performance optimizations. Helped businesses improve conversions and taught clients how to manage their stores independently.",
  },
]


const Timeline = () => {
  return (
    <div id="experience" className="w-full px-6 sm:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-300">My Journey</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Experience</h1>

        <div className="mt-12 relative border-l-4 border-violet-600">
          {timeline.map((item, i) => (
            <AnimatedOnScroll key={i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="ml-6 mb-10">
                <div className="absolute -left-[14px] w-6 h-6 bg-violet-600 rounded-full border-4 border-gray-800"></div>
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <p className="text-violet-400 font-semibold">{item.company} • {item.year}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
