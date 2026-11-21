import PageHero from "../components/common/PageHero";
import SplitWords from "../components/common/SplitWords";
import ImageReveal from "../components/common/ImageReveal";
import CtaBand from "../components/common/CtaBand";
import { ENGINEERING, DISCLAIMER } from "../data/content";
import { IMAGES } from "../data/images";

export default function Technology() {
  return (
    <>
      <PageHero
        label="Technology"
        title="Engineered with intent."
        intro="Four ideas guide every VELOCITY: shape the air, tune the power, remove the mass, and keep the driver connected."
        image={IMAGES.techHero}
      />

      {ENGINEERING.map((e, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={e.no} className="border-t border-line section-sm" aria-labelledby={`tech-${e.no}`}>
            <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-10">
              <figure className={`m-0 lg:col-span-7 ${flip ? "lg:col-start-6 lg:row-start-1" : ""}`}>
                <div className="bleed-m">
                  <ImageReveal image={e.image} ratio="4 / 3" parallax />
                </div>
                <figcaption className="t-caption mt-3" data-reveal="">Fig. {e.no}. {e.caption}</figcaption>
              </figure>
              <div className={`lg:col-span-5 ${flip ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h2 id={`tech-${e.no}`} className="t-h2" data-words="">
                  <SplitWords text={e.title} />
                </h2>
                <p className="t-lead mt-6" data-reveal="">{e.long}</p>
                <ul className="m-0 mt-8 list-none p-0" data-reveal="">
                  {e.points.map((p) => (
                    <li key={p} className="border-t border-line py-4 text-sm text-titanium last:border-b">{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <div className="wrap pb-16">
        <p className="t-caption max-w-2xl">{DISCLAIMER} No real-world certification or performance is claimed.</p>
      </div>

      <CtaBand title="See it in the cars." to="/models" cta="Explore the collection" />
    </>
  );
}
