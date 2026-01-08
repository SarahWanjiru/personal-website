/**
 * Scene3D - Aesthetic girly office setup with nature view
 * Inspired by: Triple monitor setup with forest view
 */

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Stars } from "@react-three/drei";
import * as THREE from "three";

/**
 * Standing Desk - Modern standing desk with metal frame
 */
const Desk = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Tabletop - warm walnut wood */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[2.4, 0.05, 1]} />
        <meshStandardMaterial color="#5c4033" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Left leg frame */}
      <group position={[-1, 0, 0]}>
        <mesh position={[0, 0.375, 0]}>
          <boxGeometry args={[0.08, 0.75, 0.6]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Foot */}
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.1, 0.04, 0.7]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>
      
      {/* Right leg frame */}
      <group position={[1, 0, 0]}>
        <mesh position={[0, 0.375, 0]}>
          <boxGeometry args={[0.08, 0.75, 0.6]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Foot */}
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.1, 0.04, 0.7]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
};

/**
 * Monitor - Single monitor display
 */
const Monitor = () => {
  return (
    <group position={[0, 1.1, -0.25]}>
      {/* Monitor frame - bigger */}
      <mesh>
        <boxGeometry args={[1.1, 0.65, 0.03]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Thin bezel effect */}
      <mesh position={[0, 0, 0.01]}>
        <boxGeometry args={[1.05, 0.6, 0.01]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.3} />
      </mesh>
      
      {/* Screen display */}
      <mesh position={[0, 0, 0.016]}>
        <planeGeometry args={[1.0, 0.55]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>
      
      {/* Code/content lines */}
      <mesh position={[0, 0.18, 0.017]}>
        <planeGeometry args={[0.7, 0.025]} />
        <meshBasicMaterial color="#f472b6" />
      </mesh>
      <mesh position={[-0.08, 0.1, 0.017]}>
        <planeGeometry args={[0.55, 0.02]} />
        <meshBasicMaterial color="#c084fc" />
      </mesh>
      <mesh position={[0.05, 0.03, 0.017]}>
        <planeGeometry args={[0.6, 0.02]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
      <mesh position={[-0.1, -0.04, 0.017]}>
        <planeGeometry args={[0.45, 0.02]} />
        <meshBasicMaterial color="#4ade80" />
      </mesh>
      <mesh position={[0.08, -0.1, 0.017]}>
        <planeGeometry args={[0.5, 0.02]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      
      {/* Monitor stand neck */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[0.08, 0.18, 0.08]} />
        <meshStandardMaterial color="#e8b4b8" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Monitor stand base */}
      <mesh position={[0, -0.5, 0.05]}>
        <boxGeometry args={[0.3, 0.02, 0.22]} />
        <meshStandardMaterial color="#e8b4b8" roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  );
};

/**
 * RGB Mechanical Keyboard - Realistic with proper key layout
 */
const Keyboard = () => {
  const keysRef = useRef();
  
  // Animate RGB effect
  useFrame(({ clock }) => {
    if (keysRef.current) {
      const hue = (clock.getElapsedTime() * 0.1) % 1;
      keysRef.current.material.emissive.setHSL(hue, 0.8, 0.3);
    }
  });
  
  return (
    <group position={[0, 0.79, 0.25]}>
      {/* Keyboard base plate - aluminum */}
      <mesh>
        <boxGeometry args={[0.44, 0.012, 0.14]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* ESC key - pink accent */}
      <mesh position={[-0.195, 0.018, -0.05]}>
        <boxGeometry args={[0.025, 0.012, 0.023]} />
        <meshStandardMaterial color="#f472b6" roughness={0.5} />
      </mesh>
      
      {/* Function row (F1-F12) */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={`f-${i}`} position={[-0.155 + i * 0.029, 0.018, -0.05]}>
          <boxGeometry args={[0.022, 0.01, 0.018]} />
          <meshStandardMaterial color="#252525" roughness={0.5} />
        </mesh>
      ))}
      
      {/* Number row */}
      {Array.from({ length: 14 }).map((_, i) => (
        <mesh key={`num-${i}`} position={[-0.195 + i * 0.029, 0.018, -0.022]}>
          <boxGeometry args={[0.024, 0.012, 0.023]} />
          <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
        </mesh>
      ))}
      
      {/* QWERTY row - Tab wider */}
      <mesh position={[-0.195, 0.018, 0.006]}>
        <boxGeometry args={[0.034, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      {Array.from({ length: 13 }).map((_, i) => (
        <mesh key={`qwerty-${i}`} position={[-0.155 + i * 0.029, 0.018, 0.006]}>
          <boxGeometry args={[0.024, 0.012, 0.023]} />
          <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
        </mesh>
      ))}
      
      {/* ASDF row - Caps wider, Enter pink */}
      <mesh position={[-0.195, 0.018, 0.034]}>
        <boxGeometry args={[0.04, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      {Array.from({ length: 11 }).map((_, i) => (
        <mesh key={`asdf-${i}`} position={[-0.145 + i * 0.029, 0.018, 0.034]}>
          <boxGeometry args={[0.024, 0.012, 0.023]} />
          <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
        </mesh>
      ))}
      <mesh position={[0.2, 0.018, 0.034]}>
        <boxGeometry args={[0.05, 0.012, 0.023]} />
        <meshStandardMaterial color="#f472b6" roughness={0.5} />
      </mesh>
      
      {/* ZXCV row - Shifts wider */}
      <mesh position={[-0.195, 0.018, 0.062]}>
        <boxGeometry args={[0.052, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`zxcv-${i}`} position={[-0.13 + i * 0.029, 0.018, 0.062]}>
          <boxGeometry args={[0.024, 0.012, 0.023]} />
          <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
        </mesh>
      ))}
      <mesh position={[0.195, 0.018, 0.062]}>
        <boxGeometry args={[0.052, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      
      {/* Bottom row with spacebar */}
      <mesh position={[-0.195, 0.018, 0.09]}>
        <boxGeometry args={[0.03, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      <mesh position={[-0.16, 0.018, 0.09]}>
        <boxGeometry args={[0.03, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      <mesh position={[-0.125, 0.018, 0.09]}>
        <boxGeometry args={[0.03, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      {/* Spacebar - long */}
      <mesh position={[0, 0.018, 0.09]}>
        <boxGeometry args={[0.15, 0.012, 0.023]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.4} />
      </mesh>
      <mesh position={[0.1, 0.018, 0.09]}>
        <boxGeometry args={[0.03, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      <mesh position={[0.135, 0.018, 0.09]}>
        <boxGeometry args={[0.03, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      <mesh position={[0.17, 0.018, 0.09]}>
        <boxGeometry args={[0.03, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      <mesh position={[0.205, 0.018, 0.09]}>
        <boxGeometry args={[0.03, 0.012, 0.023]} />
        <meshStandardMaterial color="#1f1f1f" roughness={0.5} />
      </mesh>
      
      {/* RGB underglow */}
      <mesh ref={keysRef} position={[0, 0.003, 0]}>
        <boxGeometry args={[0.43, 0.004, 0.135]} />
        <meshStandardMaterial 
          color="#ff69b4" 
          emissive="#ff69b4" 
          emissiveIntensity={0.4} 
          transparent 
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};


/**
 * Mouse - Clean simple mouse design
 */
const Mouse = () => {
  return (
    <group position={[0.35, 0.77, 0.25]}>
      {/* Mouse body - elongated rounded shape */}
      <mesh position={[0, 0.012, 0]} scale={[1, 0.4, 1.3]}>
        <sphereGeometry args={[0.03, 32, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} />
      </mesh>
      
      {/* Left click */}
      <mesh position={[-0.01, 0.018, -0.025]}>
        <boxGeometry args={[0.018, 0.003, 0.025]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} />
      </mesh>
      
      {/* Right click */}
      <mesh position={[0.01, 0.018, -0.025]}>
        <boxGeometry args={[0.018, 0.003, 0.025]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} />
      </mesh>
      
      {/* Center divider */}
      <mesh position={[0, 0.019, -0.02]}>
        <boxGeometry args={[0.002, 0.003, 0.03]} />
        <meshStandardMaterial color="#ddd" roughness={0.5} />
      </mesh>
      
      {/* Scroll wheel */}
      <mesh position={[0, 0.02, -0.015]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.004, 0.004, 0.008, 16]} />
        <meshStandardMaterial color="#333" roughness={0.5} />
      </mesh>
      
      {/* Pink accent line */}
      <mesh position={[0, 0.005, 0.02]}>
        <boxGeometry args={[0.04, 0.004, 0.005]} />
        <meshStandardMaterial 
          color="#f472b6" 
          emissive="#f472b6" 
          emissiveIntensity={0.4} 
        />
      </mesh>
    </group>
  );
};


/**
 * Pencil Holder - Cute desk accessory
 */
const PencilHolder = () => {
  return (
    <group position={[0.85, 0.82, -0.1]}>
      {/* Cup */}
      <mesh>
        <cylinderGeometry args={[0.04, 0.035, 0.1, 16]} />
        <meshStandardMaterial color="#fce7f3" roughness={0.4} />
      </mesh>
      {/* Pencils */}
      <mesh position={[0.01, 0.07, 0.01]} rotation={[0.1, 0, 0.05]}>
        <cylinderGeometry args={[0.004, 0.004, 0.1, 8]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.5} />
      </mesh>
      <mesh position={[-0.01, 0.065, -0.01]} rotation={[-0.1, 0, -0.08]}>
        <cylinderGeometry args={[0.004, 0.004, 0.09, 8]} />
        <meshStandardMaterial color="#f472b6" roughness={0.5} />
      </mesh>
      <mesh position={[0.015, 0.06, -0.01]} rotation={[0.05, 0, 0.1]}>
        <cylinderGeometry args={[0.004, 0.004, 0.08, 8]} />
        <meshStandardMaterial color="#60a5fa" roughness={0.5} />
      </mesh>
    </group>
  );
};

/**
 * Plant - Cute succulent
 */
const Plant = () => {
  return (
    <group position={[-0.95, 0.85, 0.2]}>
      {/* Pot - pink ceramic */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.04, 0.07, 16]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.4} />
      </mesh>
      {/* Plant */}
      <mesh position={[0, 0.06, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#22c55e" roughness={0.8} />
      </mesh>
      <mesh position={[0.03, 0.08, 0.02]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#4ade80" roughness={0.8} />
      </mesh>
    </group>
  );
};

/**
 * Window with City Skyline View - 5th floor office vibe
 */
const Window = () => {
  return (
    <group position={[0, 1.3, -0.55]}>
      {/* Window outer frame - dark aluminum */}
      <mesh>
        <boxGeometry args={[1.8, 1.2, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Sky background - bright and clear */}
      <mesh position={[0, 0.2, 0.03]}>
        <planeGeometry args={[1.65, 0.6]} />
        <meshBasicMaterial color="#87CEEB" />
      </mesh>
      
      {/* Horizon glow */}
      <mesh position={[0, -0.1, 0.03]}>
        <planeGeometry args={[1.65, 0.3]} />
        <meshBasicMaterial color="#ffecd2" />
      </mesh>
      
      {/* City buildings silhouettes */}
      <mesh position={[-0.55, -0.15, 0.035]}>
        <boxGeometry args={[0.2, 0.5, 0.01]} />
        <meshBasicMaterial color="#374151" />
      </mesh>
      <mesh position={[-0.3, -0.2, 0.035]}>
        <boxGeometry args={[0.18, 0.4, 0.01]} />
        <meshBasicMaterial color="#4b5563" />
      </mesh>
      <mesh position={[-0.05, -0.1, 0.035]}>
        <boxGeometry args={[0.15, 0.6, 0.01]} />
        <meshBasicMaterial color="#1f2937" />
      </mesh>
      <mesh position={[0.15, -0.22, 0.035]}>
        <boxGeometry args={[0.2, 0.35, 0.01]} />
        <meshBasicMaterial color="#6b7280" />
      </mesh>
      <mesh position={[0.4, -0.05, 0.035]}>
        <boxGeometry args={[0.15, 0.7, 0.01]} />
        <meshBasicMaterial color="#374151" />
      </mesh>
      <mesh position={[0.6, -0.18, 0.035]}>
        <boxGeometry args={[0.22, 0.45, 0.01]} />
        <meshBasicMaterial color="#4b5563" />
      </mesh>
      
      {/* Building windows - lit up */}
      <mesh position={[-0.05, 0, 0.04]}>
        <planeGeometry args={[0.08, 0.4]} />
        <meshBasicMaterial color="#fef08a" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.4, 0.05, 0.04]}>
        <planeGeometry args={[0.06, 0.5]} />
        <meshBasicMaterial color="#fef08a" transparent opacity={0.5} />
      </mesh>
      
      {/* Window frame dividers */}
      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[0.02, 1.1, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[1.7, 0.02, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* Daylight from window */}
      <pointLight position={[0, 0, 0.3]} intensity={0.8} color="#fff" distance={2} />
    </group>
  );
};

/**
 * Floor - compact
 */
const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.3]}>
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial color="#b0b0b0" roughness={0.4} metalness={0.1} />
    </mesh>
  );
};

/**
 * Wall - right behind the desk
 */
const Wall = () => {
  return (
    <group>
      {/* Main wall - soft pink */}
      <mesh position={[0, 1, -0.6]}>
        <planeGeometry args={[3, 2.5]} />
        <meshStandardMaterial color="#fdf2f8" roughness={0.9} />
      </mesh>
      
      {/* Simple framed art print - left of window */}
      <group position={[-1.15, 1.4, -0.58]}>
        {/* Frame */}
        <mesh>
          <boxGeometry args={[0.25, 0.3, 0.02]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
        {/* Art - abstract pink/purple */}
        <mesh position={[0, 0, 0.011]}>
          <planeGeometry args={[0.2, 0.25]} />
          <meshBasicMaterial color="#fce7f3" />
        </mesh>
        {/* Simple heart shape */}
        <mesh position={[0, 0, 0.012]} scale={0.05}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#f472b6" />
        </mesh>
      </group>
      
      {/* Round mirror - right of window */}
      <group position={[1.15, 1.4, -0.58]}>
        {/* Frame - rose gold */}
        <mesh>
          <torusGeometry args={[0.13, 0.015, 16, 32]} />
          <meshStandardMaterial color="#e8b4b8" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Mirror surface */}
        <mesh>
          <circleGeometry args={[0.12, 32]} />
          <meshStandardMaterial color="#c4b5d0" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </group>
  );
};

/**
 * Main Scene Component
 */
const Scene3D = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#1a1a2e" }}>
      <Canvas
        camera={{ position: [0, 1, 1.2], fov: 50 }}
        shadows
      >
        {/* Environment lighting */}
        <ambientLight intensity={1} />
        <directionalLight 
          position={[3, 5, 2]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Warm fill light */}
        <pointLight position={[0, 2, 1]} intensity={0.6} color="#ffffff" />
        
        {/* Subtle pink ambient */}
        <pointLight position={[-2, 1, 2]} intensity={0.2} color="#f472b6" />
        <pointLight position={[2, 1, 2]} intensity={0.2} color="#a78bfa" />
        
        {/* Room */}
        <Floor />
        <Wall />
        <Window />
        
        {/* Desk Setup */}
        <Desk />
        <Monitor />
        <Keyboard />
        <Mouse />
        
        {/* Accessories */}
        <PencilHolder />
        <Plant />
        
        {/* Shadows */}
        <ContactShadows 
          position={[0, 0.01, 0]} 
          opacity={0.4} 
          blur={2} 
          far={4} 
        />

        {/* Camera controls */}
        <OrbitControls 
          enablePan={false}
          minDistance={1}
          maxDistance={2.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          target={[0, 0.85, 0]}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
