'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface OrbNode {
  name: string;
  category: 'design' | 'production' | 'hardware';
  position: [number, number, number];
}

const skillsList: { name: string; category: 'design' | 'production' | 'hardware' }[] = [
  { name: 'Photoshop', category: 'design' },
  { name: 'EPSON F9500', category: 'production' },
  { name: 'Illustrator', category: 'design' },
  { name: 'Wilcom Studio', category: 'design' },
  { name: 'Heat Press', category: 'production' },
  { name: 'InDesign', category: 'design' },
  { name: 'ZSK Embroidery', category: 'hardware' },
  { name: 'CorelDraw', category: 'design' },
  { name: 'Trotec Laser', category: 'hardware' },
  { name: 'Sublimation', category: 'production' },
  { name: 'HAPPY Multi-Head', category: 'hardware' },
  { name: 'Brother DTG', category: 'production' },
  { name: 'Synergy CNC', category: 'hardware' },
  { name: 'Prepress & RIP', category: 'production' },
  { name: 'Vinyl Plotter', category: 'production' },
  { name: 'SINSIN Industrial', category: 'hardware' },
];

function OrbGroup() {
  const groupRef = useRef<THREE.Group>(null);

  // Distribute nodes evenly on sphere using Fibonacci spiral
  const nodes = useMemo<OrbNode[]>(() => {
    const radius = 2.8;
    const count = skillsList.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    return skillsList.map((skill, i) => {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        name: skill.name,
        category: skill.category,
        position: [x * radius, y * radius, z * radius],
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.14;
      groupRef.current.rotation.x += delta * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central architectural core in Card Blue */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#003B5C"
          emissive="#005684"
          emissiveIntensity={0.25}
          roughness={0.3}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Orbiting rings in refined Card Blue and Cobalt */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[3.2, 0.012, 16, 100]} />
        <meshBasicMaterial color="#005684" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[3.4, 0.01, 16, 100]} />
        <meshBasicMaterial color="#003B5C" transparent opacity={0.3} />
      </mesh>

      {/* Skill Nodes */}
      {nodes.map((node, index) => {
        const isProd = node.category === 'production';
        const isHw = node.category === 'hardware';
        // Card Blue, Ocean Blue, and Sky Blue
        const sphereColor = isProd ? '#003B5C' : isHw ? '#0284C7' : '#003B5C';

        return (
          <group key={index} position={node.position}>
            <mesh>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial
                color={sphereColor}
                emissive={sphereColor}
                emissiveIntensity={0.5}
                roughness={0.2}
              />
            </mesh>
            <Html distanceFactor={8} center position={[0, 0.32, 0]}>
              <div
                className={`whitespace-nowrap rounded-md border px-2.5 py-0.5 font-mono text-[10px] font-bold shadow-xs pointer-events-none transition-all ${
                  isProd
                    ? 'border-blue-200 bg-[#FAF8F5]/95 text-blue-700'
                    : isHw
                      ? 'border-sky-200 bg-[#FAF8F5]/95 text-sky-700'
                      : 'border-slate-200 bg-[#FAF8F5]/95 text-[#003B5C]'
                }`}
              >
                {node.name}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function SkillsOrb() {
  return (
    <div className="relative h-[380px] w-full md:h-[480px]">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} color="#005684" intensity={0.6} />
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
          <OrbGroup />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
