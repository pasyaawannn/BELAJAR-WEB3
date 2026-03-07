import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Astronaut 3D Component
 * Design: Cyberpunk Neon Cosmos
 * - Floating animation with subtle rotation
 * - Neon glow effects
 * - Responsive to viewport
 */

function AstronautModel() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const helmetRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      // Subtle rotation
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    // Helmet glow pulse
    if (helmetRef.current) {
      const material = helmetRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={2}>
      {/* Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 1.2, 4, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Helmet Visor */}
      <mesh ref={helmetRef} position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.3}
          metalness={0.9}
          roughness={0.1}
          emissive="#06b6d4"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.4, 0.3, 0]}>
        <capsuleGeometry args={[0.1, 0.8, 4, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0.4, 0.3, 0]}>
        <capsuleGeometry args={[0.1, 0.8, 4, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.15, -0.8, 0]}>
        <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0.15, -0.8, 0]}>
        <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Neon Accents */}
      <mesh position={[0, 0.2, 0.35]}>
        <boxGeometry args={[0.6, 0.3, 0.05]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Glow Orb */}
      <mesh position={[0, 0, 1.5]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

export function Astronaut3D() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 50,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={0.5} color="#06b6d4" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#3b82f6" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <AstronautModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}
