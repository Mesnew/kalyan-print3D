"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export default function MechanicalGear() {
  const gear1Ref = useRef<Group>(null);
  const gear2Ref = useRef<Group>(null);
  const gear3Ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (gear1Ref.current) {
      gear1Ref.current.rotation.z += delta * 0.5;
    }
    if (gear2Ref.current) {
      gear2Ref.current.rotation.z -= delta * 0.7;
    }
    if (gear3Ref.current) {
      gear3Ref.current.rotation.z += delta * 0.4;
    }
  });

  const createGearTeeth = (count: number, radius: number, position: [number, number, number]) => {
    const teeth = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = position[0] + Math.cos(angle) * radius;
      const z = position[2] + Math.sin(angle) * radius;
      teeth.push(
        <mesh key={i} position={[x, position[1], z]} rotation={[0, angle, 0]} castShadow>
          <boxGeometry args={[0.15, 0.4, 0.3]} />
          <meshStandardMaterial color="#718096" metalness={0.8} roughness={0.3} />
        </mesh>
      );
    }
    return teeth;
  };

  return (
    <group>
      {/* Engrenage principal (grand) */}
      <group ref={gear1Ref} position={[0, 0, 0]}>
        {/* Corps central */}
        <mesh castShadow>
          <cylinderGeometry args={[1.2, 1.2, 0.4, 32]} />
          <meshStandardMaterial color="#4a5568" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Trou central */}
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.41, 16]} />
          <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Dents */}
        {createGearTeeth(16, 1.35, [0, 0, 0])}

        {/* Renforts (spokes) */}
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[0, 0, 0]}
            rotation={[0, (i * Math.PI) / 4, 0]}
            castShadow
          >
            <boxGeometry args={[0.15, 0.35, 0.8]} />
            <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* Engrenage moyen */}
      <group ref={gear2Ref} position={[2.2, 0, 0]}>
        {/* Corps central */}
        <mesh castShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.35, 32]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Trou central */}
        <mesh castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.36, 16]} />
          <meshStandardMaterial color="#c53030" metalness={0.5} roughness={0.5} />
        </mesh>

        {/* Dents */}
        {createGearTeeth(12, 0.9, [2.2, 0, 0])}

        {/* Renforts */}
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            position={[0, 0, 0]}
            rotation={[0, (i * Math.PI * 2) / 3, 0]}
            castShadow
          >
            <boxGeometry args={[0.1, 0.3, 0.5]} />
            <meshStandardMaterial color="#c53030" metalness={0.6} roughness={0.4} />
          </mesh>
        ))}
      </group>

      {/* Petit engrenage */}
      <group ref={gear3Ref} position={[-1.8, 0, 0]}>
        {/* Corps central */}
        <mesh castShadow>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
          <meshStandardMaterial color="#3182ce" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Trou central */}
        <mesh castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.31, 16]} />
          <meshStandardMaterial color="#2c5282" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Dents */}
        {createGearTeeth(10, 0.7, [-1.8, 0, 0])}
      </group>

      {/* Axe central */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 1.5, 16]} />
        <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Plateforme de support */}
      <mesh position={[0, -0.8, 0]} receiveShadow>
        <cylinderGeometry args={[3, 3, 0.1, 32]} />
        <meshStandardMaterial color="#2d3748" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
}
