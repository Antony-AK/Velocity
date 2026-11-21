import SplitWords from "../common/SplitWords";
import ImageReveal from "../common/ImageReveal";
import { IMAGES } from "../../data/images";

export default function DesignPhilosophy() {
  return (
    <section
      className="relative isolate flex flex-col justify-between gap-16 overflow-hidden bg-obsidian"
      style={{ minHeight: "clamp(36rem, 92svh, 64rem)", paddingBlock: "clamp(3.5rem, 8vw, 7rem)" }}
      aria-labelledby="design-title"
    >
      <ImageReveal fill image={IMAGES.design} parallax />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3]"
        style={{ background: "linear-gradient(180deg, rgba(9,10,11,0.82) 0%, rgba(9,10,11,0.15) 45%, rgba(9,10,11,0.88) 100%)" }}
      />
      <div className="wrap relative z-[4]">
        <h2 id="design-title" className="t-display-lg max-w-5xl" data-words="">
          <SplitWords text="Form follows performance." />
        </h2>
      </div>
      <div className="wrap relative z-[4]">
        <div className="max-w-md md:ml-auto" data-reveal="">
          <p className="t-lead" style={{ color: "#d4d5d8" }}>
            Nothing on a VELOCITY is added for effect. Surfaces are shaped by airflow, details are removed until only function remains, and what is left is the shape of speed.
          </p>
        </div>
      </div>
    </section>
  );
}
