import { useRef } from "react";
import Photo from "./Photo";
import useMotion from "../../hooks/useMotion";
import { playHeroIntro } from "../../animations/animationHelpers";

/**
 * The hero used by the home page and every model page.
 * Layers: photograph, contrast shade, reveal cover, content.
 * The intro is the one orchestrated moment on load: cover lifts, photograph settles,
 * headline lines rise from their masks, supporting copy follows.
 */
export default function CinematicHero({ image, label, lines, lead, titleId = "hero-title", showCue = false, children }) {
  const root = useRef(null);

  useMotion(
    root,
    (c) => {
      if (!c.motion) return;
      playHeroIntro(root.current, c, { delay: 0.1 });
    },
    []
  );

  return (
    <section ref={root} className="hero" aria-labelledby={titleId}>
      <div className="hero__media" data-hero-img="">
        <Photo image={image} priority />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <span className="hero__cover" aria-hidden="true" data-hero-cover="" />

      <div className="hero__content wrap">
        {label && (
          <p className="t-label t-label--mark" data-hero-label="">
            {label}
          </p>
        )}
        <h1 id={titleId} className="t-display mt-5 md:mt-6">
          {lines.map((l) => (
            <span className="line" key={l}>
              <span className="line__inner" data-hero-line="">
                {l}
              </span>
            </span>
          ))}
        </h1>
        {lead && (
          <p className="t-lead mt-6 md:mt-8" style={{ color: "#d4d5d8" }} data-hero-fade="">
            {lead}
          </p>
        )}
        {children && (
          <div className="mt-7 flex flex-col gap-3 md:mt-9 md:flex-row" data-hero-fade="">
            {children}
          </div>
        )}
      </div>

      {showCue && (
        <div className="hero__cue" aria-hidden="true" data-hero-fade="">
          <span className="t-label" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <span className="hero__cue-line" />
        </div>
      )}
    </section>
  );
}
