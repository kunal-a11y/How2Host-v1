import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Ambient WebGL layer: a slow-drifting particle field with subtle mouse parallax.
 * Rendered behind hero content; pointer-events disabled.
 */
function ParticleField({ count = 800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    const p = ref.current;
    if (!p) return;
    // slow autonomous drift
    p.rotation.y += delta * 0.015;
    p.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.04;
    // gentle mouse parallax
    const x = state.pointer.x;
    const y = state.pointer.y;
    p.position.x += (x * 0.7 - p.position.x) * 0.02;
    p.position.y += (y * 0.45 - p.position.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#67e8d8"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

export default function Ambient3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <ParticleField />
        </Float>
      </Suspense>
    </Canvas>
  );
}
