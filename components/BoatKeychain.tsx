"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export default function BoatKeychain() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.5}>
      {/* Coque du bateau */}
      <mesh position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.4, 0.8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Avant pointu du bateau */}
      <mesh position={[1.2, -0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.4, 0.6, 4]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Pont supérieur */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[1.6, 0.1, 0.7]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>

      {/* Cabine */}
      <mesh position={[-0.3, 0.25, 0]}>
        <boxGeometry args={[0.8, 0.5, 0.6]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>

      {/* Toit de la cabine */}
      <mesh position={[-0.3, 0.55, 0]}>
        <boxGeometry args={[0.9, 0.1, 0.7]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Fenêtre cabine avant */}
      <mesh position={[0.05, 0.3, 0.31]}>
        <boxGeometry args={[0.3, 0.2, 0.02]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Fenêtre cabine arrière */}
      <mesh position={[0.05, 0.3, -0.31]}>
        <boxGeometry args={[0.3, 0.2, 0.02]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cheminée */}
      <mesh position={[-0.5, 0.8, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.4, 16]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Anneau porte-clé */}
      <mesh position={[-1.2, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.25, 0.05, 16, 32]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Ligne de flottaison */}
      <mesh position={[0, -0.48, 0]}>
        <boxGeometry args={[2.1, 0.05, 0.82]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>

      {/* Hublots sur les côtés */}
      {[-0.6, -0.2, 0.2].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.1, 0.41]}>
            <circleGeometry args={[0.08, 16]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[x, 0.1, -0.41]}>
            <circleGeometry args={[0.08, 16]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
