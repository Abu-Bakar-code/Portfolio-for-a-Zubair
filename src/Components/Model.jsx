import { useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import useIsMobile from './Ismobile' // 👈 make sure this hook returns a boolean

export default function Model(props) {
  const { scene } = useGLTF('/Models/gaming_desktop_pc.glb')
  const isMobile = useIsMobile()

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        child.material.side = 2
      }
    })
  }, [scene])

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.35 : 0.6}
      position={isMobile ? [0, -1.5, 0] : [0, -1.8, 0]}
      rotation={[0, Math.PI, 0]}
      {...props}
    />
  )
}

useGLTF.preload('/Models/gaming_desktop_pc.glb')
