import { Canvas } from "@react-three/fiber";
import Dandelion from "./Dandelion";

function DandelionScene() {
  const count = 20;

  return (
    <Canvas
      orthographic
      camera={{ zoom: 100, position: [0, 0, 100] }}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Dandelion
          key={i}
          initialPosition={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            0,
          ]}
        />
      ))}
    </Canvas>
  );
}

export default DandelionScene;
