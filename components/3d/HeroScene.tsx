'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simple pseudo-noise function
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse * 0.5 + 0.5;
    
    // Create subtle, graceful flow waves
    float t = uTime * 0.08;
    vec2 p = uv * 2.5;
    
    float n1 = noise(p + vec2(t * 0.3, t * 0.2));
    float n2 = noise(p * 1.8 - vec2(t * 0.2, t * 0.3) + n1);
    
    // Mouse proximity ripple
    float dist = distance(uv, mouse);
    float mouseInfluence = smoothstep(0.35, 0.0, dist) * 0.15;
    
    // Base #ffffff Warm Palette & Deep Navy
    // Card Art Blue Palette (#003B5C)
    vec3 baseWhite = vec3(250.0 / 255.0, 248.0 / 255.0, 245.0 / 255.0);
    // Subtle cool tint / slate-50
    vec3 surfaceTint = vec3(240.0 / 255.0, 244.0 / 255.0, 247.0 / 255.0);
    // Card Blue (#003B5C)
    vec3 deepNavy = vec3(0.0, 0.231, 0.361);
    // Ocean Accent Blue (#003B5C)
    vec3 cobaltBlue = vec3(0.0, 0.423, 0.647);
    
    // Soft subtle layering with low density to maintain crisp white space
    vec3 col = mix(baseWhite, surfaceTint, n1);
    
    float navyStrength = smoothstep(0.68, 0.96, n2) * 0.07;
    col = mix(col, deepNavy, navyStrength);
    
    float cobaltStrength = smoothstep(0.72, 0.98, n1 * n2 + mouseInfluence) * 0.05;
    col = mix(col, cobaltBlue, cobaltStrength);
    
    // Soft perimeter fade to ensure clean whitespace integration
    float edgeFade = smoothstep(0.0, 0.15, uv.x) * smoothstep(1.0, 0.85, uv.x) *
                     smoothstep(0.0, 0.15, uv.y) * smoothstep(1.0, 0.85, uv.y);
    col = mix(baseWhite, col, edgeFade);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseTarget = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1920, 1080) },
    }),
    []
  );

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    uniforms.uMouse.value.lerp(mouseTarget.current, 0.04);
  });

  return (
    <mesh
      ref={meshRef}
      onPointerMove={(e) => {
        mouseTarget.current.set(e.uv?.x ?? 0.5, e.uv?.y ?? 0.5);
      }}
    >
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-auto overflow-hidden opacity-90">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
