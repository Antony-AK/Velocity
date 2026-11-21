import { useRef } from "react";
import { useLocation } from "react-router-dom";
import useMotion from "../../hooks/useMotion";
import { gsap, EASE } from "../../animations/gsapConfig";
import { setupPageMotion } from "../../animations/animationHelpers";

let firstLoad = true;

/**
 * Keyed by pathname: every route change remounts, which rebuilds that page's
 * ScrollTriggers and reverts the previous page's. The route fade is opacity only,
 * so ScrollTrigger measurements are never skewed by a moving container.
 */
function PageInner({ children }) {
  const ref = useRef(null);

  useMotion(
    ref,
    (c) => {
      setupPageMotion(ref.current, c);
      if (c.motion && !firstLoad) {
        gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: EASE.soft, clearProps: "opacity" });
      }
      setTimeout(() => { firstLoad = false; }, 0);
    },
    []
  );

  return <div ref={ref}>{children}</div>;
}

export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  return <PageInner key={pathname}>{children}</PageInner>;
}
