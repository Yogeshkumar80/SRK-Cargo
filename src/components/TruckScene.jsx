import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { useRef } from "react";

function TruckModel() {
  const { scene } = useGLTF("/models/truck.glb");
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    // subtle floating only (remove auto spin)
    ref.current.position.y = -2 + Math.sin(state.clock.elapsedTime) * 0.05;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={6.5} // 🔥 bigger impact
      //   position={[3, -2, 0]} // 👉 push to right side
      //   rotation={[0, -0.6, 0]} // 🔥 angle toward text
    />
  );
}

export default function TruckScene() {
  return (
    <Canvas camera={{ position: [2, 3, 10], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      <TruckModel />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
