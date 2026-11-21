import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import ImageReveal from "../components/common/ImageReveal";
import CtaBand from "../components/common/CtaBand";
import { IMAGES } from "../data/images";
import { DISCLAIMER } from "../data/content";

const PRINCIPLES = [
  ["Reduce mass first", "Every gram removed improves acceleration, braking and agility at once."],
  ["Shape air deliberately", "Airflow is designed in from the first sketch, not added at the end."],
  ["Tune the response", "Throttle, steering and brakes are calibrated as one system."],
  ["Keep the driver informed", "Clear feedback and minimal distraction, at any speed."],
];

const STAGES = [
  ["Define", "Each model begins with one sentence describing how it should feel to drive."],
  ["Shape", "Sketches and clay models test proportion before any engineering is committed."],
  ["Prove", "Simulation and prototype testing check each idea against the brief."],
  ["Refine", "Details are tuned until nothing on the car feels accidental."],
];

const VALUES = [
  ["Precision", "Tolerances, proportions and typography are held to the same standard."],
  ["Restraint", "We remove before we add. Colour and ornament are spent carefully."],
  ["Performance", "Every decision is judged by what it does for the driving experience."],
  ["Integrity", "Honest materials, honest numbers, and no claims we cannot stand behind."],
];

export default function Story() {
  return (
    <>
      <PageHero label="Our story" title="Built around the pursuit." image={IMAGES.storyHero} />

      <section className="section-sm" aria-labelledby="intro-title">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <SectionHeading id="intro-title" title="A fictional brand." className="lg:col-span-4" />
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="t-statement" data-reveal="">
              VELOCITY is a fictional performance automaker, created as a design exercise in how a premium car brand can look and feel online.
            </p>
            <p className="t-body mt-8" data-reveal="">{DISCLAIMER}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="design-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-10">
          <div className="lg:col-span-5">
            <SectionHeading id="design-title" title="Design philosophy." />
            <p className="t-lead mt-8" data-reveal="">
              We start with proportion. A VELOCITY should look composed standing still and purposeful in motion. Surfaces are shaped by airflow, details are removed until only function remains, and colour is used as a signal rather than decoration.
            </p>
          </div>
          <div className="bleed-m lg:col-span-6 lg:col-start-7">
            <ImageReveal image={IMAGES.storyDetail} ratio="4 / 3" parallax />
          </div>
        </div>
      </section>

      <section className="border-t border-line section-sm" aria-labelledby="principles-title">
        <div className="wrap">
          <SectionHeading id="principles-title" title="Engineering principles." />
          <ul className="m-0 mt-12 grid list-none gap-x-10 gap-y-10 p-0 md:mt-16 md:grid-cols-2">
            {PRINCIPLES.map(([t, d]) => (
              <li key={t} className="border-t border-line pt-6" data-reveal="">
                <h3 className="t-h3">{t}</h3>
                <p className="t-body mt-4">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-title">
        <div className="wrap">
          <SectionHeading id="approach-title" title="Development approach." />
          <ol className="m-0 mt-12 grid list-none gap-10 p-0 md:mt-16 md:grid-cols-4 md:gap-8">
            {STAGES.map(([t, d], i) => (
              <li key={t} className="border-t border-line pt-6" data-reveal="">
                <span className="font-condensed text-3xl font-semibold leading-none text-racing" aria-hidden="true">0{i + 1}</span>
                <h3 className="t-h3 mt-5">{t}</h3>
                <p className="t-body mt-3">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line section-sm" aria-labelledby="values-title">
        <div className="wrap">
          <SectionHeading id="values-title" title="Brand values." />
          <ul className="m-0 mt-12 list-none p-0 md:mt-16">
            {VALUES.map(([t, d]) => (
              <li key={t} className="grid gap-3 border-t border-line py-8 last:border-b md:grid-cols-12 md:items-baseline md:gap-x-10" data-reveal="">
                <h3 className="font-condensed text-5xl font-semibold uppercase leading-none md:col-span-6 md:text-7xl">{t}</h3>
                <p className="t-body md:col-span-5 md:col-start-8">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Meet the cars." to="/models" cta="Explore the collection" />
    </>
  );
}
