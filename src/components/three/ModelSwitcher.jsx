import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16";

const ModelSwitcher = (props) => {
  const { scale, isMobile } = props;

  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  return (
    <PresentationControls>
      <group>
        <MacbookModel16 />
      </group>
    </PresentationControls>
  );
};

export default ModelSwitcher;
