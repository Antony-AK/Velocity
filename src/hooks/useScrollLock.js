import { useEffect } from "react";

export default function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const scrollbar = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    return () => {
      html.style.overflow = prevOverflow;
      html.style.paddingRight = "";
    };
  }, [locked]);
}
