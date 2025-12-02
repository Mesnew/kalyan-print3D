"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

export default function Printer3D() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
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
      {/* Base de l'imprimante */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[3, 0.3, 3]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Cadre vertical gauche */}
      <mesh position={[-1.3, 0, -1.3]}>
        <boxGeometry args={[0.2, 3, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Cadre vertical droit */}
      <mesh position={[1.3, 0, -1.3]}>
        <boxGeometry args={[0.2, 3, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Barre horizontale du haut */}
      <mesh position={[0, 1.5, -1.3]}>
        <boxGeometry args={[3, 0.2, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Plateau d'impression */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[2.5, 0.1, 2.5]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>

      {/* Extrudeur */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 16]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Objet en cours d'impression (petit cube) */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </group>
  );
}
