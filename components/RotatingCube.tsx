"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function RotatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  useEffect(() => {
    return () => {
      if (meshRef.current) {
        meshRef.current.geometry?.dispose();
        (meshRef.current.material as any)?.dispose();
      }
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}
