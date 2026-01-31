import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const useHandleSwitch = (
  showLargeMacbook,
  smallMacbookRef,
  largeMacbookRef,
  scale,
) => {
  const fadeMeshes = (group, opacity) => {
    if (!group) return;

    group.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
      }
    });
  };

  const moveGroup = (group, x) => {
    if (!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION });
  };

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  return { fadeMeshes, moveGroup };
};

export default useHandleSwitch;
