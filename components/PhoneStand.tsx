"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export default function PhoneStand() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} rotation={[-0.1, 0, 0]}>
      {/* Base principale */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#2d3748" roughness={0.4} metalness={0.3} />
      </mesh>

      {/* Rebords anti-dérapants */}
      {[-1.4, 1.4].map((x, i) => (
        <mesh key={i} position={[x, 0.05, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
          <meshStandardMaterial color="#4a5568" roughness={0.8} />
        </mesh>
      ))}

      {/* Support arrière incliné */}
      <mesh position={[0, 1.2, -0.6]} rotation={[0.3, 0, 0]} castShadow>
        <boxGeometry args={[2.5, 2.2, 0.15]} />
        <meshStandardMaterial color="#4a5568" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Encoche pour câble de charge */}
      <mesh position={[0, 0.15, 0.95]} castShadow>
        <boxGeometry args={[0.5, 0.3, 0.2]} />
        <meshStandardMaterial color="#1a202c" roughness={0.5} />
      </mesh>

      {/* Support bas pour téléphone */}
      <mesh position={[0, 0.4, 0.85]} castShadow>
        <boxGeometry args={[2.5, 0.3, 0.3]} />
        <meshStandardMaterial color="#2d3748" roughness={0.4} metalness={0.3} />
      </mesh>

      {/* Butées latérales */}
      {[-1.15, 1.15].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0.5]} rotation={[0.3, 0, 0]} castShadow>
          <boxGeometry args={[0.2, 1, 0.2]} />
          <meshStandardMaterial color="#4a5568" roughness={0.4} />
        </mesh>
      ))}

      {/* Renforts structurels */}
      {[-0.8, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 0.1]} rotation={[0.5, 0, 0]} castShadow>
          <boxGeometry args={[0.3, 1.2, 0.1]} />
          <meshStandardMaterial color="#2d3748" roughness={0.4} metalness={0.2} />
        </mesh>
      ))}

      {/* Pads anti-dérapants (silicone) */}
      {[
        [0, 0.55, 0.85],
        [-0.6, 0.55, 0.85],
        [0.6, 0.55, 0.85]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
          <meshStandardMaterial color="#e53e3e" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}
