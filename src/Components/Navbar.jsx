import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['about','services','experience', 'work', 'contact']

  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-gray-900 px-6 sm:px-12 py-4 flex items-center justify-between shadow-md">
      
      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wider">
        Zubair<span className="text-violet-500">Dev</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden sm:flex gap-8 text-gray-300 font-medium">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="capitalize hover:text-violet-400 transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle (Emoji) */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden text-gray-200 text-3xl cursor-pointer"
      >
        {!menuOpen ? (
          <span role="img" aria-label="menu">☰</span> // Hamburger
        ) : (
          <span role="img" className='text-xl' aria-label="close">✖️</span> // Close
        )}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] right-6 w-[140px] py-4 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-black shadow-xl sm:hidden">
          <ul className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="text-gray-300 hover:text-violet-400 border-b border-gray-500 pb-1 capitalize transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
