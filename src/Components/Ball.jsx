import React from 'react'
import { useTexture } from '@react-three/drei'

const Ball = ({ icon, position }) => {
  const texture = useTexture(icon)

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default Ball
