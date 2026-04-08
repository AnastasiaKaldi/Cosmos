/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense, useMemo } from "react";
import PropTypes from "prop-types";

// ============================================================
// Sphere renderer — used for planets, exoplanets and stars
// ============================================================
function SphereMesh({ texture, radius, rotationSpeed }) {
  const meshRef = useRef();

  const map = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const t = loader.load(texture);
    t.wrapS = THREE.ClampToEdgeWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    t.minFilter = THREE.LinearFilter;
    return t;
  }, [texture]);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 48, 48]} />
      <meshStandardMaterial map={map} roughness={0.85} metalness={0.05} />
    </mesh>
  );
}

SphereMesh.propTypes = {
  texture: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  rotationSpeed: PropTypes.number.isRequired,
};

// ============================================================
// Procedural particle galaxy renderer
// Bruno-Simon-style spiral generator: branches × radius × spin
// with Math.pow randomness puff for thickness.
// ============================================================
function GalaxyPoints({ params }) {
  const pointsRef = useRef();

  // Build positions + colors once per param set.
  const { positions, colors } = useMemo(() => {
    const {
      particleCount,
      radius,
      branches,
      spin,
      randomness,
      randomnessPower,
      insideColor,
      outsideColor,
    } = params;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorInside = new THREE.Color(insideColor);
    const colorOutside = new THREE.Color(outsideColor);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Distance from the galactic centre
      const r = Math.random() * radius;

      // Which spiral arm this particle belongs to
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin;

      // Random thickness puff (bigger near the core, smaller at the rim)
      const randomX =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;
      const randomY =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r *
        0.4; // flatter on Y so the disc is disc-shaped
      const randomZ =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

      // Colour: hot core → cool rim
      const mixed = colorInside.clone().lerp(colorOutside, r / radius);
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    return { positions, colors };
  }, [params]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * (params.rotationSpeed ?? 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={params.particleSize ?? 0.025}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        transparent
      />
    </points>
  );
}

GalaxyPoints.propTypes = {
  params: PropTypes.object.isRequired,
};

// ============================================================
// Public canvas — picks renderer based on `type`
// ============================================================
function CelestialCanvas({
  texture,
  radius = 1.4,
  rotationSpeed = 0.004,
  accent = "#8b5cf6",
  type = "sphere",
  galaxy,
}) {
  const isGalaxy = type === "galaxy" && galaxy;

  // Sphere: frame the body using its radius.
  // Galaxy: frame the disc using the configured galaxy radius.
  const fov = 45;
  const fittingRadius = isGalaxy ? galaxy.radius : radius;
  const fitDistance = fittingRadius / Math.tan((fov / 2) * (Math.PI / 180));
  const cameraZ = fitDistance * (isGalaxy ? 1.1 : 1.6);
  const cameraY = isGalaxy ? fittingRadius * 0.9 : 0;

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, cameraY, cameraZ], fov }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      {!isGalaxy && (
        <>
          <ambientLight intensity={0.45} />
          <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-6, -2, -4]} intensity={0.8} color={accent} />
        </>
      )}

      <Suspense fallback={null}>
        {isGalaxy ? (
          <GalaxyPoints params={galaxy} />
        ) : (
          <SphereMesh
            texture={texture}
            radius={radius}
            rotationSpeed={rotationSpeed}
          />
        )}
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={isGalaxy}
        autoRotate={!isGalaxy}
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}

CelestialCanvas.propTypes = {
  texture: PropTypes.string,
  radius: PropTypes.number,
  rotationSpeed: PropTypes.number,
  accent: PropTypes.string,
  type: PropTypes.string,
  galaxy: PropTypes.object,
};

export default CelestialCanvas;
