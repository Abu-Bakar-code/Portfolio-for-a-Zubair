import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const card = ref.current
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateMax = 15 // max degrees to rotate

    const rotateYVal = ((x - centerX) / centerX) * rotateMax // left/right
    const rotateXVal = ((centerY - y) / centerY) * rotateMax // top/bottom

    rotateX.set(rotateXVal)
    rotateY.set(rotateYVal)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transition: 'transform 0.1s ease-out',
      }}
      className={` text-white rounded-xl shadow-xl flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
