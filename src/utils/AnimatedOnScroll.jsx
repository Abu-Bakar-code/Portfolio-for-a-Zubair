import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

const getVariants = (direction = 'up') => {
  const offset = 50
  switch (direction) {
    case 'left':
      return {
        hidden: { x: -offset, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      }
    case 'right':
      return {
        hidden: { x: offset, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      }
    case 'down':
      return {
        hidden: { y: -offset, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }
    default: // up
      return {
        hidden: { y: offset, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }
  }
}

const AnimatedOnScroll = ({ children, direction = 'up', delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const variants = getVariants(direction)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedOnScroll
