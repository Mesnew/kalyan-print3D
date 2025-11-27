"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export default function RaspberryPiCase() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Boîtier principal */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[3, 0.6, 2.2]} />
        <meshStandardMaterial color="#e53e3e" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Couvercle supérieur */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[3.05, 0.1, 2.25]} />
        <meshStandardMaterial color="#c53030" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Grilles de ventilation sur le dessus */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0.71, 0]} castShadow>
          <boxGeometry args={[0.15, 0.02, 1.8]} />
          <meshStandardMaterial color="#1a202c" />
        </mesh>
      ))}

      {/* Ports USB (côté) */}
      {[
        [1.52, 0.35, 0.4],
        [1.52, 0.35, -0.1],
      ].map((pos, i) => (
        <mesh key={`usb-${i}`} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <boxGeometry args={[0.4, 0.6, 0.35]} />
          <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Port HDMI */}
      <mesh position={[-1.52, 0.3, 0.5]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <boxGeometry args={[0.25, 0.6, 0.5]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Port Ethernet */}
      <mesh position={[1.52, 0.35, -0.7]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.55]} />
        <meshStandardMaterial color="#4a5568" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Port d'alimentation USB-C */}
      <mesh position={[-1.52, 0.25, -0.3]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <boxGeometry args={[0.3, 0.6, 0.35]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Port micro SD */}
      <mesh position={[-0.3, 0.05, -1.12]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <boxGeometry args={[0.4, 0.05, 0.35]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Pieds de support */}
      {[
        [-1.3, 0.05, -0.9],
        [1.3, 0.05, -0.9],
        [-1.3, 0.05, 0.9],
        [1.3, 0.05, 0.9],
      ].map((pos, i) => (
        <mesh key={`foot-${i}`} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#1a202c" roughness={0.8} />
        </mesh>
      ))}

      {/* Logo Raspberry Pi (simplifié) */}
      <mesh position={[0, 0.71, 0.7]} rotation={[0, 0, 0]} castShadow>
        <circleGeometry args={[0.25, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </mesh>

      {/* Vis de fixation (apparentes) */}
      {[
        [-1.2, 0.71, -0.8],
        [1.2, 0.71, -0.8],
        [-1.2, 0.71, 0.8],
        [1.2, 0.71, 0.8],
      ].map((pos, i) => (
        <mesh key={`screw-${i}`} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
          <meshStandardMaterial color="#718096" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      {/* Fente pour GPIO */}
      <mesh position={[0, 0.65, 1.13]} castShadow>
        <boxGeometry args={[2, 0.15, 0.05]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
    </group>
  );
}
