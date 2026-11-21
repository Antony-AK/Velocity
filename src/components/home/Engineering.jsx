import SectionHeading from "../common/SectionHeading";
import ImageReveal from "../common/ImageReveal";
import { ENGINEERING } from "../../data/content";

export default function Engineering() {
  return (
    <section className="section" aria-labelledby="eng-title">
      <div className="wrap">
        <SectionHeading id="eng-title" title="Beyond the machine." />
        <ol className="m-0 mt-14 grid list-none gap-x-10 gap-y-16 p-0 md:mt-20 md:grid-cols-2">
          {ENGINEERING.map((e, i) => (
            <li key={e.no} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <figure className="m-0">
                <div className="bleed-m">
                  <ImageReveal image={e.image} ratio="5 / 4" ratioM="4 / 3" parallax />
                </div>
                <figcaption className="t-caption mt-3" data-reveal="">
                  Fig. {e.no}. {e.caption}
                </figcaption>
              </figure>
              <div className="mt-8 flex gap-5 border-t border-line pt-6" data-reveal="">
                <span className="font-condensed text-3xl font-semibold leading-none text-racing" aria-hidden="true">{e.no}</span>
                <div>
                  <h3 className="t-h3">{e.title}</h3>
                  <p className="t-body mt-3">{e.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
