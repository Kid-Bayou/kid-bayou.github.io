import { useRef, useEffect } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SPEED = 0.01;

function Dandelion({ initialPosition }) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/dandelion.svg");
  const { viewport } = useThree();

  const velocity = useRef({
    x: (Math.random() - 0.5) * SPEED,
    y: (Math.random() - 0.5) * SPEED,
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.position.set(...initialPosition);
    }
  }, [initialPosition]);

  useFrame(() => {
    if (!ref.current) return;
    const p = ref.current.position;

    p.x += velocity.current.x;
    p.y += velocity.current.y;

    const limitX = viewport.width / 2;
    const limitY = viewport.height / 2;

    if (p.x > limitX) p.x = -limitX;
    if (p.x < -limitX) p.x = limitX;
    if (p.y > limitY) p.y = -limitY;
    if (p.y < -limitY) p.y = limitY;
  });

  return (
    <mesh ref={ref} position={initialPosition}>
      <planeGeometry args={[0.3, 0.3]} />
      <meshBasicMaterial
        map={texture}
        transparent
        alphaTest={0.1}
        depthWrite={false}
      />
    </mesh>
  );
}

export default Dandelion;
