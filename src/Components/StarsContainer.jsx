import React from 'react'
import { Canvas } from '@react-three/fiber'
import MovingStars from './Stars' // adjust path if needed

const StarsContainer = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[100dvh] z-[0] pointer-events-none">
        <MovingStars />
    </div>
  )
}

export default StarsContainer
