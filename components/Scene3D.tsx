"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ReactNode } from "react";

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
}

export default function Scene3D({
  children,
  cameraPosition = [0, 0, 5]
}: Scene3DProps) {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <Canvas
        gl={{
          preserveDrawingBuffer: false,
          powerPreference: "high-performance",
          antialias: true,
          alpha: false,
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
        />

        {/* Lumières */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />

        {children}
      </Canvas>
    </div>
  );
}
