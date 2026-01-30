import clsx from "clsx";
import useMacBookContext from "../../context/index";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

const Product = () => {
  const { color, scale, setColor, setScale } = useMacBookContext();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">
          MacBook Pro {scale === 0.08 ? '16"' : '14"'} in{" "}
          {color === "#2e2c2e" ? "Space Black" : "Silver"}
        </p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === "#adb5db" && "active",
              )}
              onClick={() => setColor("#adb5db")}
            />
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active",
              )}
              onClick={() => setColor("#2e2c2e")}
            />
          </div>

          <div className="size-control">
            <div
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
              onClick={() => setScale(0.06)}
            >
              <p>14"</p>
            </div>
            <div
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
              onClick={() => setScale(0.08)}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 1000 }}
      >
        <Box
          position={[0, 0, 0]}
          scale={10 * scale}
          material-color={color}
        ></Box>

        <OrbitControls enableZoom={false}/>
      </Canvas>
    </section>
  );
};

export default Product;
