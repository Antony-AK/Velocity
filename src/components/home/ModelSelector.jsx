import { useLayoutEffect, useRef, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Photo from "../common/Photo";
import Button from "../common/Button";
import { VEHICLES } from "../../data/vehicles";
import { gsap, EASE, MQ, prefersReducedMotion } from "../../animations/gsapConfig";

/**
 * Fully functional selector.
 * - Image layers and text panels are stacked in one grid cell, so the section is always
 *   as tall as the tallest model: switching never moves the page.
 * - GSAP owns the layer opacity; React only owns aria state and pointer events.
 * - Rapid clicks are safe: tweens are killed and non-involved layers reset first.
 */
export default function ModelSelector() {
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const ctx = useRef(null);
  const imgs = useRef([]);
  const panels = useRef([]);
  const tabs = useRef([]);

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      gsap.set(imgs.current, { opacity: (i) => (i === 0 ? 1 : 0), zIndex: (i) => (i === 0 ? 1 : 0) });
      gsap.set(panels.current, { opacity: (i) => (i === 0 ? 1 : 0) });
    }, root);
    return () => ctx.current.revert();
  }, []);

  const select = (next) => {
    if (next === active) return;
    const from = active;
    setActive(next);
    const reduce = prefersReducedMotion();
    const mobile = window.matchMedia(MQ.mobile).matches;

    ctx.current.add(() => {
      const I = imgs.current;
      const P = panels.current;
      gsap.killTweensOf([...I, ...P]);
      I.forEach((el, k) => { if (k !== from && k !== next) gsap.set(el, { opacity: 0, zIndex: 0 }); });
      P.forEach((el, k) => { if (k !== from && k !== next) gsap.set(el, { opacity: 0 }); });

      if (reduce) {
        gsap.set(I[from], { opacity: 0, zIndex: 0 });
        gsap.set(I[next], { opacity: 1, zIndex: 1, scale: 1 });
        gsap.set(P[from], { opacity: 0 });
        gsap.set(P[next], { opacity: 1, y: 0 });
        return;
      }

      const d = mobile ? 0.7 : 1.1;
      gsap
        .timeline()
        .set(I[from], { zIndex: 1 })
        .set(I[next], { zIndex: 2, opacity: 0, scale: 1.07 })
        .to(I[next], { opacity: 1, scale: 1, duration: d, ease: EASE.out }, 0)
        .set(I[from], { opacity: 0, zIndex: 0 }, d)
        .to(P[from], { opacity: 0, y: -12, duration: 0.3, ease: EASE.soft }, 0)
        .fromTo(P[next], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: EASE.out }, 0.22);
    });
  };

  const onKeyDown = (e) => {
    const n = VEHICLES.length;
    let next = null;
    if (e.key === "ArrowRight") next = (active + 1) % n;
    else if (e.key === "ArrowLeft") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  };

  return (
    <section ref={root} className="section" aria-labelledby="selector-title">
      <div className="wrap">
        <SectionHeading id="selector-title" title="Choose your Velocity." />

        <div className="mt-10 md:mt-14">
          <div role="tablist" aria-label="Select a model" className="tabs" onKeyDown={onKeyDown}>
            {VEHICLES.map((v, k) => (
              <button
                key={v.slug}
                ref={(el) => (tabs.current[k] = el)}
                type="button"
                role="tab"
                id={`tab-${v.slug}`}
                aria-selected={active === k}
                aria-controls={`panel-${v.slug}`}
                tabIndex={active === k ? 0 : -1}
                className="tab"
                onClick={() => select(k)}
              >
                <span className="tab__no">{v.index}</span>
                <span className="tab__name">{v.short}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-12 lg:items-end lg:gap-x-10">
            <div className="bleed-m lg:col-span-8">
              <div className="ar relative overflow-hidden bg-graphite" style={{ "--ar": "16 / 10", "--ar-m": "4 / 3" }} data-img-reveal="">
                <div className="absolute inset-0" data-img-scale="">
                  {VEHICLES.map((v, k) => (
                    <div key={v.slug} ref={(el) => (imgs.current[k] = el)} className="absolute inset-0">
                      <Photo image={v.image} />
                    </div>
                  ))}
                </div>
                <span className="img-cover bg-obsidian" aria-hidden="true" data-img-cover="" />
              </div>
            </div>

            <div className="stack lg:col-span-4">
              {VEHICLES.map((v, k) => {
                const on = active === k;
                return (
                  <div
                    key={v.slug}
                    ref={(el) => (panels.current[k] = el)}
                    role="tabpanel"
                    id={`panel-${v.slug}`}
                    aria-labelledby={`tab-${v.slug}`}
                    aria-hidden={!on}
                    className={`grid content-start gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-1 ${on ? "" : "pointer-events-none"}`}
                  >
                    <div>
                      <p className="t-label t-label--mark">
                        {v.index} / 0{VEHICLES.length} &nbsp;{v.type}
                      </p>
                      <h3 className="model-name mt-5">{v.name}</h3>
                      <p className="t-body mt-5">{v.summary}</p>
                    </div>
                    <div>
                      <dl className="m-0">
                        <div className="spec-row"><dt className="t-label">Power</dt><dd>{v.stats.power.value} {v.stats.power.unit}</dd></div>
                        <div className="spec-row"><dt className="t-label">0&ndash;100 km/h</dt><dd>{v.stats.accel.value.toFixed(1)} {v.stats.accel.unit}</dd></div>
                        <div className="spec-row"><dt className="t-label">Top speed</dt><dd>{v.stats.top.value} {v.stats.top.unit}</dd></div>
                        <div className="spec-row"><dt className="t-label">Drivetrain</dt><dd>{v.stats.drivetrain}</dd></div>
                      </dl>
                      <Button to={`/models/${v.slug}`} tabIndex={on ? 0 : -1} className="mt-8 w-full sm:w-auto md:w-full">
                        Explore model
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
