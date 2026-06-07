import { useRef, useEffect } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import seedUrl from "../assets/icons/single_seed.svg?url";

const SPEED = 0.01;
const REPULSION_RADIUS = 1.5;
const REPULSION_STRENGTH = 0.008;

// Rasterizes the SVG at a fixed pixel size so Three.js never has to
// downsample a ~360px texture onto a ~80px plane, which causes aliasing shimmer.
class SVGCanvasLoader extends THREE.Loader {
  load(url, onLoad, _onProgress, onError) {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      canvas.getContext("2d").drawImage(img, 0, 0, 256, 256);
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      onLoad(texture);
    };
    img.onerror = onError;
    img.src = url;
  }
}

function Dandelion({ initialPosition, mouseWorld }) {
  const ref = useRef();
  const texture = useLoader(SVGCanvasLoader, seedUrl);
  const { viewport } = useThree();

  const baseVelocity = useRef({
    x: (Math.random() - 0.5) * SPEED,
    y: (Math.random() - 0.5) * SPEED,
  });

  const repulsion = useRef({ x: 0, y: 0 });

  const swaySpeed = useRef(0.4 + Math.random() * 0.3);
  const swayPhase = useRef(Math.random() * Math.PI * 2);

  useEffect(() => {
    if (ref.current) {
      ref.current.position.set(...initialPosition);
    }
  }, [initialPosition]);

  useFrame((state) => {
    if (!ref.current) return;
    const p = ref.current.position;

    ref.current.rotation.z =
      Math.sin(state.clock.elapsedTime * swaySpeed.current + swayPhase.current) * (Math.PI / 9);

    const dx = p.x - mouseWorld.current.x;
    const dy = p.y - mouseWorld.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < REPULSION_RADIUS && dist > 0) {
      const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
      repulsion.current.x += (dx / dist) * force;
      repulsion.current.y += (dy / dist) * force;
    }

    repulsion.current.x *= 0.95;
    repulsion.current.y *= 0.95;

    p.x += baseVelocity.current.x + repulsion.current.x;
    p.y += baseVelocity.current.y + repulsion.current.y;

    const limitX = viewport.width / 2;
    const limitY = viewport.height / 2;

    if (p.x > limitX) p.x = -limitX;
    if (p.x < -limitX) p.x = limitX;
    if (p.y > limitY) p.y = -limitY;
    if (p.y < -limitY) p.y = limitY;
  });

  return (
    <mesh ref={ref} position={initialPosition}>
      <planeGeometry args={[0.4, 0.5]} />
      <meshBasicMaterial
        map={texture}
        transparent
        alphaTest={0.01}
        depthWrite={false}
      />
    </mesh>
  );
}

export default Dandelion;
