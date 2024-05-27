import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense } from "react";

const Pegasi = () => {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("../public/MilkyWay."); // Ensure this path is correct

  // Ensure the texture wraps around correctly
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;

  const geometry = new THREE.SphereGeometry(2, 32, 32);
  geometry.scale(1.5, 1, 0.5);

  const meshRef = useRef();

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const PegasiCanvas = () => {
  return (
    <Canvas style={{ height: "900px", width: "900px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Pegasi />
      </Suspense>
    </Canvas>
  );
};

export default PegasiCanvas;
