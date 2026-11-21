import SplitWords from "../common/SplitWords";
import ImageReveal from "../common/ImageReveal";
import Button from "../common/Button";
import { IMAGES } from "../../data/images";

export default function FinalCTA() {
  return (
    <section
      className="relative isolate flex items-end overflow-hidden bg-obsidian"
      style={{ minHeight: "clamp(34rem, 88svh, 60rem)", paddingBlock: "clamp(3.5rem, 8vw, 7rem)" }}
      aria-labelledby="final-title"
    >
      <ImageReveal fill image={IMAGES.finalRear} parallax />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[3]"
        style={{ background: "linear-gradient(0deg, rgba(9,10,11,0.95) 0%, rgba(9,10,11,0.55) 40%, rgba(9,10,11,0.2) 100%)" }}
      />
      <div className="wrap relative z-[4]">
        <h2 id="final-title" className="t-display max-w-4xl" data-words="">
          <SplitWords text="The road is yours." />
        </h2>
        <p className="t-lead mt-6" style={{ color: "#d4d5d8" }} data-reveal="">
          Discover a new expression of performance.
        </p>
        <div className="mt-8" data-reveal="">
          <Button to="/models" className="w-full sm:w-auto">
            Explore the collection
          </Button>
        </div>
      </div>
    </section>
  );
}
