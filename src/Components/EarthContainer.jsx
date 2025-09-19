import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import useIsMobile from "./Ismobile";
import Loader from "./ModelLoader";

function NightEarth({ scale }) {
  const meshRef = useRef();
  const earthTexture = useTexture("/textures/daytime.jpg");

  // 🌍 Rotate Earth continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // adjust speed
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

export default function EarthContainer() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
      >
        {/* Lighting setup */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />
        <pointLight position={[-5, -3, -5]} intensity={0.6} color="#1e90ff" />
        <spotLight
          position={[0, 10, 10]}
          angle={0.3}
          intensity={0.5}
          penumbra={0.5}
          color="#88ccff"
        />

        <Suspense fallback={<Loader />}>
          <NightEarth scale={isMobile ? 1.5 : 2} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
