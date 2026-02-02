import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import useHandleSwitch from "./useHandleSwitch";

const ModelSwitcher = (props) => {
  const { scale, isMobile } = props;

  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  const orbitControls = {
    snap: true,
    speed: 1,
    zoom: 1,
    // polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  useHandleSwitch(showLargeMacbook, smallMacbookRef, largeMacbookRef, scale);

  return (
    <>
      <PresentationControls {...orbitControls}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...orbitControls}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.04 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
