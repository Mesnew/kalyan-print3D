"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let animationFrameId: number;
    let isCleanedUp = false;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 8;

    // Grille de points animés créant des vagues
    const gridSize = 30;
    const spacing = 0.8;
    const pointsGeometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const initialY: number[] = [];

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (i - gridSize / 2) * spacing;
        const z = (j - gridSize / 2) * spacing;
        const y = 0;

        positions.push(x, y, z);
        initialY.push(y);
      }
    }

    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: new THREE.Color('#9333ea'),
      transparent: true,
      opacity: 0.25,
      sizeAttenuation: true,
    });

    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointsMesh);

    // Quelques particules flottantes très discrètes
    const floatingParticlesGeometry = new THREE.BufferGeometry();
    const floatingCount = 40;
    const floatingPos = new Float32Array(floatingCount * 3);

    for (let i = 0; i < floatingCount; i++) {
      floatingPos[i * 3] = (Math.random() - 0.5) * 20;
      floatingPos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      floatingPos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    floatingParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(floatingPos, 3));

    const floatingMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: new THREE.Color('#a855f7'),
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const floatingMesh = new THREE.Points(floatingParticlesGeometry, floatingMaterial);
    scene.add(floatingMesh);

    // Anneaux subtils en arrière-plan
    const ring1Geometry = new THREE.TorusGeometry(3, 0.02, 16, 100);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#9333ea'),
      transparent: true,
      opacity: 0.08,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.position.set(-5, 2, -12);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(2, 0.015, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#a855f7'),
      transparent: true,
      opacity: 0.06,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.position.set(6, -2, -15);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      if (isCleanedUp) return;

      const elapsedTime = clock.getElapsedTime();

      // Animer la grille de points en vagues
      const positionAttribute = pointsGeometry.getAttribute('position');
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const index = i * gridSize + j;
          const x = (i - gridSize / 2) * spacing;
          const z = (j - gridSize / 2) * spacing;

          // Créer des vagues douces
          const wave1 = Math.sin(x * 0.5 + elapsedTime * 0.5) * 0.3;
          const wave2 = Math.sin(z * 0.5 + elapsedTime * 0.4) * 0.2;
          const y = wave1 + wave2;

          positionAttribute.setY(index, y);
        }
      }
      positionAttribute.needsUpdate = true;

      // Rotation lente de la grille
      pointsMesh.rotation.y = elapsedTime * 0.05;

      // Particules flottantes
      floatingMesh.rotation.y = elapsedTime * 0.02;
      floatingMesh.rotation.x = elapsedTime * 0.015;

      // Anneaux
      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      isCleanedUp = true;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener('resize', handleResize);

      // Dispose of all resources
      scene.clear();

      pointsGeometry.dispose();
      pointsMaterial.dispose();
      floatingParticlesGeometry.dispose();
      floatingMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();

      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #faf5ff 40%, #f5f3ff 100%)' }}
      />
      {/* Overlay très léger pour garantir la lisibilité */}
      <div className="fixed inset-0 -z-10 bg-white/80 pointer-events-none" />
    </>
  );
}
