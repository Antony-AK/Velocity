import { useEffect, useRef, useState, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import useMotion from "../../hooks/useMotion";
import { gsap, EASE } from "../../animations/gsapConfig";
import { NAV } from "../../data/content";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const toggle = useRef(null);
  const initialPath = useRef(pathname);

  const close = useCallback(() => setOpen(false), []);

  // Background treatment after the hero. rAF-throttled, state only changes at the threshold.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Close the menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => { if (e.matches) setOpen(false); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Navigation appears after the hero begins to reveal (home), or straight away elsewhere.
  useMotion(
    root,
    (c) => {
      if (!c.motion) return;
      gsap.from(gsap.utils.toArray("[data-nav-in]", root.current), {
        y: -16,
        opacity: 0,
        duration: 0.8,
        ease: EASE.out,
        stagger: 0.06,
        delay: initialPath.current === "/" ? 1.1 : 0.1,
      });
    },
    []
  );

  return (
    <header ref={root} className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="site-header__bar wrap">
        <Link to="/" className="wordmark" aria-label="VELOCITY home" data-nav-in="">
          Velocity
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex lg:gap-10" data-nav-in="">
          {NAV.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={({ isActive }) => `nav-link nav-contact ${isActive ? "is-active" : ""}`}>
            Contact
          </NavLink>
        </nav>

        <button
          ref={toggle}
          type="button"
          className="hamburger md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          data-nav-in=""
        >
          <span />
          <span />
        </button>
      </div>
      <MobileMenu id="mobile-menu" open={open} onClose={close} toggleRef={toggle} />
    </header>
  );
}
