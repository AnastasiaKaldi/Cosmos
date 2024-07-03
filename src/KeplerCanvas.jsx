/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense } from "react";

const Kepler = () => {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("/Kepler186f.png");
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;

  const geometry = new THREE.SphereGeometry(1.5, 64, 64);

  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const KeplerCanvas = () => {
  return (
    <Canvas style={{ height: "900px", width: "900px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Kepler />
      </Suspense>
    </Canvas>
  );
};

export default KeplerCanvas;
