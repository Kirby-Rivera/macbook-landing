import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import useHandleSwitch from "./useHandleSwitch";

const ModelSwitcher = (props) => {
  const { scale, isMobile } = props;

  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  const orbitControls = {
    snap: true,
    speed: 1,
    zoom: 1,
    // polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  const { fadeMeshes, moveGroup } = useHandleSwitch(
    showLargeMacbook,
    smallMacbookRef,
    largeMacbookRef,
    scale,
  );

  return (
    <>
      <PresentationControls {...orbitControls}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...orbitControls}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
