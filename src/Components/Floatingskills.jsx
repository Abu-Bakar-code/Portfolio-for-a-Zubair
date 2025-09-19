import { Decal, Float, useTexture } from '@react-three/drei'
import React from 'react'
import useIsMobile from './Ismobile'

const Floatingskills = (props) => {
  const isMobile = useIsMobile();
  const [decal] = useTexture([props.image]);

  return (
    <Float
      speed={1.75}
      floatIntensity={isMobile ? 0.8 : 1}
      rotationIntensity={isMobile ? 0.6 : 1}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={isMobile ? 1.8 : 2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 0.625]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export default Floatingskills
