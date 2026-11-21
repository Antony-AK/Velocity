import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });
gsap.defaults({ ease: "power3.out", duration: 0.9 });
ScrollTrigger.config({ ignoreMobileResize: true });

// One easing language for the whole site.
export const EASE = {
  out: "power3.out",
  soft: "power2.out",
  cinematic: "expo.out",
  inOut: "expo.inOut",
};

export const DUR = { fast: 0.35, base: 0.8, slow: 1.2, cinematic: 1.6 };

// Conditions for gsap.matchMedia(). Keys are read as c.motion, c.mobile, ...
export const MQ = {
  motion: "(prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  fine: "(hover: hover) and (pointer: fine)",
};

export const prefersReducedMotion = () => window.matchMedia(MQ.reduce).matches;

// Dev-only handle so trigger cleanup can be inspected from the console: window.__ST.getAll().length
if (import.meta.env.DEV) window.__ST = ScrollTrigger;

export { gsap, ScrollTrigger };
