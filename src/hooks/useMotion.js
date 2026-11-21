import { useLayoutEffect } from "react";
import { gsap, MQ } from "../animations/gsapConfig";

/**
 * Runs `setup(conditions)` inside gsap.matchMedia scoped to `scopeRef`.
 * - Runs in a layout effect so hidden start states are set before first paint.
 * - mm.revert() on cleanup kills every tween and ScrollTrigger created inside,
 *   which also makes React Strict Mode's double-mount safe.
 * - Re-runs automatically if the reduced-motion or viewport conditions change.
 */
export default function useMotion(scopeRef, setup, deps = []) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(scopeRef.current);
    mm.add(MQ, (ctx) => setup(ctx.conditions, ctx));
    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
