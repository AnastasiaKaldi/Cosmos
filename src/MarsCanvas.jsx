import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense } from "react";

const Jupiter = () => {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("../public/Mars.jpg"); // Ensure this path is correct

  // Ensure the texture wraps around correctly
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;

  const geometry = new THREE.SphereGeometry(1.5, 64, 64);

  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const JupiterCanvas = () => {
  return (
    <Canvas style={{ height: "900px", width: "900px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Jupiter />
      </Suspense>
    </Canvas>
  );
};

export default JupiterCanvas;
