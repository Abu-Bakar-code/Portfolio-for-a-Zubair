import React from "react"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-6 mt-10 border-t border-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-400 px-6">
        <p>© {new Date().getFullYear()} ZubairDev. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-violet-400">LinkedIn</a>
          <a href="#" className="hover:text-violet-400">GitHub</a>
          <a href="#" className="hover:text-violet-400">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
