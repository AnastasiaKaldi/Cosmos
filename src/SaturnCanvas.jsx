import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense } from "react";

const Saturn = ({ position }) => {
  const saturnTexture = useLoader(THREE.TextureLoader, "../public/Saturn.jpg");
  const ringTexture = useLoader(
    THREE.TextureLoader,
    "../public/SaturnRing.jpg"
  );

  const saturnRef = useRef();
  const ringsRef = useRef();

  // Rotate the planet and rings in the animation loop
  useFrame(() => {
    if (saturnRef.current && ringsRef.current) {
      saturnRef.current.rotation.y += 0.005; // Adjust rotation speed as needed
      ringsRef.current.rotation.z += 0.005; // Rotate rings slowly
    }
  });

  return (
    <group position={position}>
      {/* Saturn's Body */}
      <mesh ref={saturnRef}>
        <sphereGeometry args={[2.5, 84, 84]} />
        <meshStandardMaterial map={saturnTexture} />
      </mesh>

      {/* Saturn's Rings */}
      <mesh ref={ringsRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4, 3, 64]} />
        <meshBasicMaterial
          map={ringTexture}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>
    </group>
  );
};

const SaturnCanvas = () => {
  // Adjust the position here, for example [3, 1, -7] moves Saturn to the desired location
  const saturnPosition = [-5, 1, -4];

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Saturn position={saturnPosition} />
      </Suspense>
    </Canvas>
  );
};

export default SaturnCanvas;
