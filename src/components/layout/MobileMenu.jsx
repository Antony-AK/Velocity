import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import useMotion from "../../hooks/useMotion";
import useScrollLock from "../../hooks/useScrollLock";
import { gsap, EASE } from "../../animations/gsapConfig";
import { NAV } from "../../data/content";
import { DISCLAIMER } from "../../data/content";

const LINKS = [...NAV, { to: "/contact", label: "Contact" }];

export default function MobileMenu({ id, open, onClose, toggleRef }) {
  const root = useRef(null);
  const tl = useRef(null);
  const openRef = useRef(open);
  openRef.current = open;

  useScrollLock(open);

  useMotion(
    root,
    (c) => {
      const panel = root.current;
      const items = gsap.utils.toArray("[data-menu-item]", panel);
      const t = gsap.timeline({ paused: true });

      if (c.reduce) {
        gsap.set(panel, { autoAlpha: 0 });
        t.to(panel, { autoAlpha: 1, duration: 0.2 });
      } else {
        gsap.set(panel, { yPercent: -100, autoAlpha: 0 });
        gsap.set(items, { y: 36, opacity: 0 });
        t.to(panel, { autoAlpha: 1, duration: 0.01 }, 0)
          .to(panel, { yPercent: 0, duration: 0.75, ease: EASE.inOut }, 0)
          .to(items, { y: 0, opacity: 1, duration: 0.7, ease: EASE.out, stagger: 0.07 }, 0.32);
      }
      tl.current = t;
      if (openRef.current) t.progress(1);
    },
    []
  );

  useEffect(() => {
    const t = tl.current;
    if (!t) return;
    // Opening is cinematic; closing is quicker so it never feels like it is in the way.
    if (open) t.timeScale(1).play();
    else t.timeScale(2).reverse();
  }, [open]);

  // Focus management and a simple focus trap between the toggle and the menu links.
  useEffect(() => {
    if (!open) return undefined;
    const links = root.current.querySelectorAll("a");
    const focusTimer = setTimeout(() => links[0]?.focus({ preventScroll: true }), 350);

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const list = [toggleRef.current, ...links];
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(focusTimer); document.removeEventListener("keydown", onKey); };
  }, [open, onClose, toggleRef]);

  return (
    <div id={id} ref={root} className="menu" aria-hidden={!open} role="dialog" aria-modal="true" aria-label="Site menu">
      <nav aria-label="Mobile">
        <ul className="m-0 list-none p-0">
          {LINKS.map((l, i) => (
            <li key={l.to} data-menu-item="">
              <NavLink to={l.to} onClick={onClose} className={({ isActive }) => `menu__link ${isActive ? "is-active" : ""}`}>
                <span>{l.label}</span>
                <span className="menu__no">0{i + 1}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <p className="t-caption max-w-xs" data-menu-item="">
        {DISCLAIMER}
      </p>
    </div>
  );
}
