import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

/**
 * High-End Realistic 3D Workspace Scene.
 * Features:
 * - A 3D human engineer / figure working at a professional technology workstation
 * - Precision laptop displaying a real-time responsive web layout
 * - Floating glass UI panels with animated status indicators
 * - Enterprise server tower unit and architect desk environment
 * - Realistic monochrome studio lighting and metallic specular reflections
 */
function HumanWorkspace() {
  const rootRef = useRef<THREE.Group>(null!);
  const engineerHeadRef = useRef<THREE.Group>(null!);
  const screenLightRef = useRef<THREE.PointLight>(null!);
  const floatingPanelRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (!rootRef.current) return;
    const t = state.clock.elapsedTime;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    // Gentle camera/scene perspective damped mouse parallax
    rootRef.current.rotation.y = THREE.MathUtils.damp(
      rootRef.current.rotation.y,
      -0.3 + pointerX * 0.12,
      2.5,
      delta
    );
    rootRef.current.rotation.x = THREE.MathUtils.damp(
      rootRef.current.rotation.x,
      0.12 - pointerY * 0.08,
      2.5,
      delta
    );

    // Subtle natural human breathing & micro-nod motion
    if (engineerHeadRef.current) {
      engineerHeadRef.current.rotation.x = Math.sin(t * 1.4) * 0.03 + 0.18;
      engineerHeadRef.current.rotation.y = Math.cos(t * 0.8) * 0.02;
    }

    // Floating UI panel independent vertical drift
    if (floatingPanelRef.current) {
      floatingPanelRef.current.position.y = 1.3 + Math.sin(t * 1.5) * 0.06;
      floatingPanelRef.current.rotation.z = Math.sin(t * 0.9) * 0.02;
    }

    // Screen ambient light gentle flicker/glow
    if (screenLightRef.current) {
      screenLightRef.current.intensity = 1.2 + Math.sin(t * 4) * 0.1;
    }
  });

  return (
    <group ref={rootRef} position={[0, -0.6, 0]}>
      {/* 1. ARCHITECTURAL DESK SURFACE */}
      <mesh position={[0, -0.7, 0]} receiveShadow castShadow>
        <boxGeometry args={[5.2, 0.12, 3.2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Desk edge accent trim */}
      <mesh position={[0, -0.7, 1.62]}>
        <boxGeometry args={[5.2, 0.12, 0.04]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      {/* Desk steel legs */}
      <mesh position={[-2.3, -1.8, 0]}>
        <boxGeometry args={[0.1, 2.1, 2.8]} />
        <meshStandardMaterial color="#18181B" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[2.3, -1.8, 0]}>
        <boxGeometry args={[0.1, 2.1, 2.8]} />
        <meshStandardMaterial color="#18181B" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* 2. REALISTIC 3D HUMAN ENGINEER FIGURE WORKING */}
      <group position={[0, -0.4, 1.7]} rotation={[0, Math.PI, 0]}>
        {/* Torso / Jacket */}
        <mesh position={[0, 0.45, 0]} castShadow>
          <cylinderGeometry args={[0.48, 0.58, 1.1, 16]} />
          <meshStandardMaterial color="#111111" roughness={0.7} />
        </mesh>
        {/* Shoulders */}
        <mesh position={[0, 0.95, 0]}>
          <boxGeometry args={[1.25, 0.22, 0.55]} />
          <meshStandardMaterial color="#151515" roughness={0.6} />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.15, 0]}>
          <cylinderGeometry args={[0.14, 0.16, 0.25, 12]} />
          <meshStandardMaterial color="#D1D5DB" roughness={0.4} />
        </mesh>
        {/* Head */}
        <group ref={engineerHeadRef} position={[0, 1.45, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.3, 24, 24]} />
            <meshStandardMaterial color="#E5E7EB" roughness={0.35} />
          </mesh>
          {/* Hair / Headphone frame */}
          <mesh position={[0, 0.12, -0.04]}>
            <sphereGeometry args={[0.31, 20, 20]} />
            <meshStandardMaterial color="#18181B" roughness={0.8} />
          </mesh>
          {/* Studio Headphones Band */}
          <mesh position={[0, 0.08, 0]}>
            <torusGeometry args={[0.32, 0.04, 12, 24, Math.PI]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0.7} roughness={0.2} />
          </mesh>
        </group>
        {/* Left Arm toward keyboard */}
        <mesh position={[-0.56, 0.5, -0.45]} rotation={[0.9, -0.3, -0.4]}>
          <cylinderGeometry args={[0.11, 0.1, 0.75, 12]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        {/* Right Arm toward keyboard / trackpad */}
        <mesh position={[0.56, 0.5, -0.45]} rotation={[0.9, 0.3, 0.4]}>
          <cylinderGeometry args={[0.11, 0.1, 0.75, 12]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      </group>

      {/* 3. PRECISION LAPTOP WORKSTATION */}
      <group position={[0, -0.62, 0.5]}>
        {/* Laptop Base */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[2.2, 0.04, 1.5]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.25} />
        </mesh>
        {/* Keyboard and trackpad */}
        <mesh position={[0, 0.025, -0.15]}>
          <boxGeometry args={[1.9, 0.005, 0.7]} />
          <meshStandardMaterial color="#050505" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.025, 0.42]}>
          <boxGeometry args={[0.8, 0.005, 0.5]} />
          <meshStandardMaterial color="#1A1A1A" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Laptop Display Screen Lid */}
        <group position={[0, 0.02, -0.75]} rotation={[-0.22, 0, 0]}>
          <mesh position={[0, 0.72, 0]} castShadow>
            <boxGeometry args={[2.2, 1.45, 0.04]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Screen Display Face */}
          <mesh position={[0, 0.72, 0.022]}>
            <planeGeometry args={[2.08, 1.33]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
          {/* Active Web Layout Elements on Screen */}
          <group position={[0, 0.72, 0.024]}>
            <mesh position={[0, 0.56, 0]}>
              <planeGeometry args={[2.0, 0.12]} />
              <meshBasicMaterial color="#F7F7F5" />
            </mesh>
            <mesh position={[-0.45, 0.18, 0]}>
              <planeGeometry args={[0.85, 0.45]} />
              <meshBasicMaterial color="#111111" />
            </mesh>
            <mesh position={[0.45, 0.18, 0]}>
              <planeGeometry args={[0.85, 0.45]} />
              <meshBasicMaterial color="#EAEAEA" />
            </mesh>
            <mesh position={[-0.55, -0.28, 0]}>
              <planeGeometry args={[0.55, 0.32]} />
              <meshBasicMaterial color="#F0F0EE" />
            </mesh>
            <mesh position={[0, -0.28, 0]}>
              <planeGeometry args={[0.45, 0.32]} />
              <meshBasicMaterial color="#111111" />
            </mesh>
            <mesh position={[0.55, -0.28, 0]}>
              <planeGeometry args={[0.55, 0.32]} />
              <meshBasicMaterial color="#F0F0EE" />
            </mesh>
          </group>
          {/* Screen Light illuminating workspace */}
          <pointLight ref={screenLightRef} position={[0, 0.72, 0.3]} distance={2.5} color="#FFFFFF" intensity={1.2} />
        </group>
      </group>

      {/* 4. FLOATING WEB LAYOUT & SECURITY PANELS */}
      <group ref={floatingPanelRef} position={[1.8, 0.8, 0.2]} rotation={[0.08, -0.35, 0.05]}>
        <mesh castShadow>
          <boxGeometry args={[1.5, 1.1, 0.03]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.1}
            transmission={0.45}
            thickness={0.4}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[0, 0.28, 0.02]}>
          <planeGeometry args={[1.2, 0.18]} />
          <meshBasicMaterial color="#111111" />
        </mesh>
        <mesh position={[-0.25, -0.08, 0.02]}>
          <planeGeometry args={[0.7, 0.3]} />
          <meshBasicMaterial color="#E5E7EB" />
        </mesh>
        <mesh position={[0.35, -0.08, 0.02]}>
          <planeGeometry args={[0.35, 0.3]} />
          <meshBasicMaterial color="#111111" />
        </mesh>
      </group>

      {/* 5. ENTERPRISE SERVER TOWER OBJECT ON DESK */}
      <group position={[-1.8, 0.1, -0.4]}>
        <mesh castShadow>
          <boxGeometry args={[0.7, 1.45, 1.1]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Front Panel Grid & LED Indicators */}
        <mesh position={[0, 0, 0.555]}>
          <planeGeometry args={[0.62, 1.35]} />
          <meshBasicMaterial color="#18181B" />
        </mesh>
        <mesh position={[0, 0.45, 0.56]}>
          <circleGeometry args={[0.03, 16]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
        <mesh position={[0, 0.2, 0.56]}>
          <planeGeometry args={[0.48, 0.04]} />
          <meshBasicMaterial color="#3F3F46" />
        </mesh>
        <mesh position={[0, -0.05, 0.56]}>
          <planeGeometry args={[0.48, 0.04]} />
          <meshBasicMaterial color="#3F3F46" />
        </mesh>
        <mesh position={[0, -0.3, 0.56]}>
          <planeGeometry args={[0.48, 0.04]} />
          <meshBasicMaterial color="#3F3F46" />
        </mesh>
      </group>
    </group>
  );
}

export default function Ambient3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.8, 6.4], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="w-full h-full"
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[7, 9, 8]} intensity={2.4} castShadow />
      <directionalLight position={[-7, 5, -4]} intensity={1.1} color="#FFFFFF" />
      <pointLight position={[0, 3, 3]} intensity={0.9} />

      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
          <HumanWorkspace />
        </Float>
      </Suspense>
    </Canvas>
  );
}
