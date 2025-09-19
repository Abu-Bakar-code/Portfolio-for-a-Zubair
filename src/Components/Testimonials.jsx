import React from "react"
import AnimatedOnScroll from "../utils/AnimatedOnScroll"

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    feedback:
      "Working with Zubair was amazing! His React skills and creativity helped us deliver a beautiful product on time.",
    avatar: "/avatars/ayesha.jpg",
  },
  {
    name: "Ali Raza",
    role: "Full-Stack Developer",
    feedback:
      "Zubair is not only skilled but also a great teammate. Always ready to solve problems and think outside the box.",
    avatar: "/avatars/ali.jpg",
  },
  {
    name: "Fatima Noor",
    role: "Client",
    feedback:
      "He built my website exactly how I wanted — clean, fast, and responsive. Highly recommend him!",
    avatar: "/avatars/fatima.jpg",
  },
]

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full px-6 sm:px-16 py-16 ">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-300">What People Say</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">Testimonials</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <AnimatedOnScroll key={i} direction={i % 2 === 0 ? "up" : "down"}>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition duration-300 text-left">
                <div className="flex items-center gap-4">
                  {/* Avatar with fallback */}
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full border-2 border-violet-500 bg-gray-600 text-white font-bold text-xl">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none" // hide broken img
                        e.target.parentNode.textContent = t.name.charAt(0) // show first letter
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{t.name}</h2>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4 italic">“{t.feedback}”</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
