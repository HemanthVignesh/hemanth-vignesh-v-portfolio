import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

/* ── Shared mouse state (normalized -1 to 1) ── */
const mouse = { x: 0, y: 0 };

/* ── Floating wireframe shape ── */
const WireShape = ({
  position,
  geometry,
  speed,
  rotationAxis,
  scale,
  opacity,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "dodecahedron" | "torusKnot";
  speed: number;
  rotationAxis: [number, number, number];
  scale: number;
  opacity: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    meshRef.current.rotation.x += rotationAxis[0] * speed * delta;
    meshRef.current.rotation.y += rotationAxis[1] * speed * delta;
    meshRef.current.rotation.z += rotationAxis[2] * speed * delta;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[1, 0.3, 8, 16]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.8, 0.25, 48, 8]} />;
    }
  }, [geometry]);

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geo}
        <meshBasicMaterial
          wireframe
          color="#ffffff"
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  );
};

/* ── Soft glowing sphere ── */
const GlassSphere = ({
  position,
  scale,
  opacity,
}: {
  position: [number, number, number];
  scale: number;
  opacity: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    meshRef.current.rotation.y += 0.05 * delta;
  });

  return (
    <Float speed={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          wireframe
          color="#ffffff"
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  );
};

/* ── Neural-like connected nodes ── */
const NeuralNet = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 18; i++) {
      pts.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3 - 2,
      ]);
    }
    return pts;
  }, []);

  const lines = useMemo(() => {
    const result: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = new THREE.Vector3(...nodes[i]);
        const b = new THREE.Vector3(...nodes[j]);
        if (a.distanceTo(b) < 4) {
          result.push({ start: a, end: b });
        }
      }
    }
    return result;
  }, [nodes]);

  useFrame((_state, delta) => {
    groupRef.current.rotation.y += 0.008 * delta;
    groupRef.current.rotation.x += 0.003 * delta;
  });

  return (
    <group ref={groupRef} position={[0, -2, -5]}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
        </mesh>
      ))}
      {lines.map((line, i) => (
        <Line key={`l-${i}`} points={[line.start.toArray(), line.end.toArray()]} color="#ffffff" transparent opacity={0.04} lineWidth={0.5} />
      ))}
    </group>
  );
};

/* ── Scene ── */
const Scene = () => (
  <>
    {/* Floating wireframe shapes — very subtle */}
    <WireShape position={[-5, 3, -4]} geometry="icosahedron" speed={0.08} rotationAxis={[1, 0.5, 0]} scale={1.2} opacity={0.06} />
    <WireShape position={[5.5, -1, -6]} geometry="octahedron" speed={0.06} rotationAxis={[0.3, 1, 0.2]} scale={1.5} opacity={0.04} />
    <WireShape position={[-3, -4, -3]} geometry="torus" speed={0.1} rotationAxis={[0.5, 0.5, 1]} scale={0.9} opacity={0.05} />
    <WireShape position={[4, 4, -5]} geometry="dodecahedron" speed={0.07} rotationAxis={[1, 0.3, 0.5]} scale={1.1} opacity={0.05} />
    <WireShape position={[0, -6, -4]} geometry="torusKnot" speed={0.04} rotationAxis={[0.2, 1, 0.3]} scale={0.8} opacity={0.04} />
    <WireShape position={[-6, -2, -7]} geometry="icosahedron" speed={0.05} rotationAxis={[0.5, 0.8, 0.2]} scale={1.8} opacity={0.03} />
    <WireShape position={[6, 2, -8]} geometry="torus" speed={0.03} rotationAxis={[0.3, 0.6, 1]} scale={2.0} opacity={0.03} />

    {/* Glass spheres */}
    <GlassSphere position={[3, 1, -3]} scale={0.6} opacity={0.05} />
    <GlassSphere position={[-4, -3, -5]} scale={0.9} opacity={0.04} />
    <GlassSphere position={[1, 5, -6]} scale={0.5} opacity={0.03} />

    {/* Neural network pattern */}
    <NeuralNet />
  </>
);

const Background3D = () => (
  <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.7 }}>
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  </div>
);

export default Background3D;
