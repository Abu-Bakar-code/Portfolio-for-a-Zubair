import React, { Suspense, useRef } from 'react'
import Model from './Model'
import { OrbitControls, Preload, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { SpotLightHelper } from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import useIsMobile from './Ismobile' // ✅ Your custom hook
import Loader from './ModelLoader'

function Lights() {
  const spotlightRef = useRef()
  useHelper(spotlightRef, SpotLightHelper, 'red')

  return (
    <spotLight
      ref={spotlightRef}
      position={[2, 5, 4]}
      angle={0.5}
      penumbra={1}
      intensity={1}
      color="#ffffff"
      castShadow
      shadow-mapSize={1024}
    />
  )
}

const Canva = () => {
  const isMobile = useIsMobile()

  return (
    <div className={isMobile?"absolute top-2/5 flex items-center justify-center left-[12%] h-[38%] w-[80%]":'absolute top-0 left-0 h-screen pointer-events-none w-screen'}>
      <Canvas
      dpr={[1, 1.5]} 
        shadows
        camera={{ position: [0, 2, 10], fov: 50 }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
      >
        {/* Lighting */}
        <pointLight intensity={10} color="white" position={isMobile?[0, -0.4, 2]:[0,-1.4,1]} />

        <Suspense fallback={<Loader/>}>
          {/* Responsive Model */}
          <Model
            scale={isMobile ? 0.5: 0.6}
            position={isMobile ? [0.8, -1.8, -0.5] : [1, -3, -1]}
            rotation={[0.2, -Math.PI / 2, 0]}
          />

          {/* Shadow Plane */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <shadowMaterial opacity={0.1} />
          </mesh>
        </Suspense>

        {/* Controls & Effects */}
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.7} height={300} />
        </EffectComposer>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default Canva
