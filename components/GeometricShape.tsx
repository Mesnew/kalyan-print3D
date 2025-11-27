"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

export default function GeometricShape() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  useEffect(() => {
    return () => {
      if (groupRef.current) {
        groupRef.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.geometry?.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat?.dispose());
            } else {
              child.material?.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <group ref={groupRef}>
      {/* Sphère centrale */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#10b981" wireframe />
      </mesh>

      {/* Anneaux autour */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>

      <mesh rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </group>
  );
}
