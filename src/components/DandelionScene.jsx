import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Dandelion from "./Dandelion";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function MouseTracker({ mouseWorld }) {
  useEffect(() => {
    function onMouseMove(e) {
      mouseWorld.current.x = (e.clientX - window.innerWidth / 2) / 100;
      mouseWorld.current.y = -(e.clientY - window.innerHeight / 2) / 100;
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseWorld]);

  return null;
}

function DandelionScene() {
  const count = 20;
  const mouseWorld = useRef({ x: -9999, y: -9999 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      orthographic
      camera={{ zoom: 100, position: [0, 0, 100] }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      aria-hidden="true"
    >
      {!reducedMotion && <MouseTracker mouseWorld={mouseWorld} />}
      {Array.from({ length: count }).map((_, i) => (
        <Dandelion
          key={i}
          initialPosition={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            i * 0.01,
          ]}
          mouseWorld={mouseWorld}
          reducedMotion={reducedMotion}
        />
      ))}
    </Canvas>
  );
}

export default DandelionScene;
