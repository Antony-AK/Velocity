import SectionHeading from "../common/SectionHeading";
import ImageReveal from "../common/ImageReveal";
import { IMAGES } from "../../data/images";

export default function BrandIntro() {
  return (
    <section className="section" aria-labelledby="philosophy-title">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7 lg:pt-20">
          <SectionHeading id="philosophy-title" label="The Velocity philosophy" title="Performance is not a destination. It's a pursuit." size="t-statement" />
          <p className="t-lead mt-10" data-reveal="">
            Every line, every component, and every engineering decision exists for one purpose: to deliver an uncompromising driving experience.
          </p>
          <p className="t-body mt-6" data-reveal="">
            Precision engineered. Aerodynamically sculpted. Designed for those who demand more.
          </p>
        </div>
        <figure className="m-0 lg:col-span-4 lg:col-start-9">
          <div className="bleed-m">
            <ImageReveal image={IMAGES.introDetail} ratio="4 / 5" ratioM="4 / 3" parallax />
          </div>
          <figcaption className="t-caption mt-3 flex justify-between gap-4" data-reveal="">
            <span>Fig. 01</span>
            <span>Carbon weave, red stitching</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
