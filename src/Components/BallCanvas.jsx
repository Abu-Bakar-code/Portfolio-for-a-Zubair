import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Floatingskills from './Floatingskills'
import useIsMobile from './Ismobile'
import Loader from './ModelLoader'

const BallCanvas = ({ icon }) => {
  const isMobile = useIsMobile()

  return (
    <div className={`${isMobile ? "w-[120px] h-[120px]" : "w-[200px] h-[200px]"}`}>
      <Canvas
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true }}
        className='w-full h-full'
      >
        <Suspense fallback={<Loader/>}>
          <OrbitControls enableZoom={false} />
          <Floatingskills image={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default BallCanvas
