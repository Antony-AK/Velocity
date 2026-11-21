import { gsap, ScrollTrigger, EASE } from "./gsapConfig";

const q = (scope, sel) => gsap.utils.toArray(sel, scope);

/**
 * The single orchestrated page-load moment, shared by the home hero and the
 * model hero so both feel like the same campaign.
 * Transform and opacity only.
 */
export function playHeroIntro(root, c, { delay = 0.1 } = {}) {
  const m = c.mobile;
  const tl = gsap.timeline({ delay });
  tl.fromTo(q(root, "[data-hero-cover]"), { scaleY: 1 }, { scaleY: 0, duration: m ? 1.1 : 1.5, ease: EASE.inOut }, 0)
    .fromTo(q(root, "[data-hero-img]"), { scale: m ? 1.1 : 1.16 }, { scale: 1, duration: m ? 1.8 : 2.6, ease: EASE.out }, 0)
    .fromTo(q(root, "[data-hero-label]"), { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: EASE.out }, m ? 0.4 : 0.55)
    .fromTo(
      q(root, "[data-hero-line]"),
      { yPercent: 115 },
      { yPercent: 0, duration: m ? 1 : 1.25, ease: EASE.cinematic, stagger: m ? 0.1 : 0.14 },
      m ? 0.45 : 0.6
    )
    .fromTo(
      q(root, "[data-hero-fade]"),
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: EASE.out, stagger: 0.1 },
      m ? 0.95 : 1.25
    );
  return tl;
}

/**
 * Scroll-driven motion for a page. Called from inside gsap.matchMedia, so
 * everything created here is reverted automatically on unmount, and again when
 * the media conditions change.
 *
 *  [data-reveal]      fade + rise, batched so one scroll tick = one tween
 *  [data-words]       masked word rise for headings
 *  [data-img-reveal]  wipe cover + settle scale (transform only)
 *  [data-parallax]    desktop + fine pointer only
 *  [data-count]       specification counters
 */
export function setupPageMotion(scope, c) {
  if (!c.motion) return; // reduced motion: everything stays in its final state
  const m = c.mobile;

  const items = q(scope, "[data-reveal]");
  if (items.length) {
    gsap.set(items, { opacity: 0, y: m ? 18 : 34 });
    ScrollTrigger.batch(items, {
      start: "top 90%",
      once: true,
      interval: 0.1,
      batchMax: 4,
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: m ? 0.7 : 0.95, ease: EASE.out, stagger: 0.09, overwrite: true, clearProps: "opacity,transform" }),
    });
  }

  q(scope, "[data-words]").forEach((el) => {
    const inner = q(el, ".word__inner");
    if (!inner.length) return;
    gsap.set(inner, { yPercent: 115 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => gsap.to(inner, { yPercent: 0, duration: m ? 0.9 : 1.1, ease: EASE.cinematic, stagger: m ? 0.04 : 0.06 }),
    });
  });

  q(scope, "[data-img-reveal]").forEach((el) => {
    const cover = el.querySelector("[data-img-cover]");
    const scaler = el.querySelector("[data-img-scale]");
    if (!cover || !scaler) return;
    gsap.set(cover, { scaleX: 1 });
    gsap.set(scaler, { scale: m ? 1.08 : 1.18 });
    gsap
      .timeline({ scrollTrigger: { trigger: el, start: "top 86%", once: true } })
      .to(cover, { scaleX: 0, duration: m ? 0.9 : 1.15, ease: EASE.inOut })
      .to(scaler, { scale: 1, duration: m ? 1.2 : 1.7, ease: EASE.out, clearProps: "transform" }, 0.1);
  });

  if (c.desktop && c.fine) {
    q(scope, "[data-parallax]").forEach((el) => {
      const trigger = el.closest("[data-img-reveal]") || el.parentElement;
      gsap.fromTo(
        el,
        { yPercent: -6, scale: 1.15 },
        { yPercent: 6, scale: 1.15, ease: "none", scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: true } }
      );
    });
  }

  q(scope, "[data-count]").forEach((el) => {
    const to = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const state = { v: 0 };
    el.textContent = (0).toFixed(dec);
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: to,
          duration: m ? 1.4 : 2,
          ease: EASE.soft,
          onUpdate: () => { el.textContent = state.v.toFixed(dec); },
          onComplete: () => { el.textContent = to.toFixed(dec); },
        }),
    });
  });
}
