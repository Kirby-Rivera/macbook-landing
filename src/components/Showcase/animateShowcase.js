import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { use } from "react";

const animateShowcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const xlScreen = useMediaQuery({ query: "(max-width: 1280px)" });

  console.log(isTablet);
  console.log(xlScreen);

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".media",
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: xlScreen ? "scale(1.4)" : "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, []);

  return;
};

export default animateShowcase;
