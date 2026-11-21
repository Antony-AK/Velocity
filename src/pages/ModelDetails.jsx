import { Link, useParams } from "react-router-dom";
import CinematicHero from "../components/common/CinematicHero";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";
import CtaBand from "../components/common/CtaBand";
import ImageReveal from "../components/common/ImageReveal";
import ModelSpecifications from "../components/models/ModelSpecifications";
import ModelGallery from "../components/models/ModelGallery";
import NotFound from "./NotFound";
import { VEHICLES, getVehicle } from "../data/vehicles";

export default function ModelDetails() {
  const { slug } = useParams();
  const v = getVehicle(slug);
  if (!v) return <NotFound title="Model not found." />;
  const others = VEHICLES.filter((o) => o.slug !== v.slug);

  return (
    <>
      <CinematicHero image={v.hero} label={v.type} lines={["VELOCITY", v.short]} lead={v.summary} titleId="model-title">
        <Button to="/contact">Enquire about the {v.short}</Button>
        <Button to="/models" variant="ghost">All models</Button>
      </CinematicHero>

      <section className="section-sm" aria-label="Overview">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-x-10">
          <p className="t-statement lg:col-span-9" style={{ fontSize: "clamp(1.5rem, 3.1vw, 2.75rem)" }} data-reveal="">{v.description}</p>
        </div>
      </section>

      <ModelSpecifications v={v} />

      <section className="section" aria-labelledby="design-details-title">
        <div className="wrap">
          <SectionHeading id="design-details-title" label="Design" title="Design details." />
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
            {v.designDetails.map((d) => (
              <div key={d.title} className="border-t border-line pt-6" data-reveal="">
                <h3 className="t-h3">{d.title}</h3>
                <p className="t-body mt-4">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" aria-labelledby="features-title">
        <div className="wrap">
          <SectionHeading id="features-title" label="Engineering" title="Engineering features." />
          <ul className="m-0 mt-12 grid list-none gap-x-10 gap-y-10 p-0 md:mt-16 md:grid-cols-2">
            {v.features.map((f) => (
              <li key={f.title} className="border-t border-line pt-6" data-reveal="">
                <h3 className="t-h3">{f.title}</h3>
                <p className="t-body mt-4">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ModelGallery v={v} />

      <section className="section" aria-labelledby="others-title">
        <div className="wrap">
          <SectionHeading id="others-title" title="Other models." />
          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-10">
            {others.map((o) => (
              <article key={o.slug}>
                <Link to={`/models/${o.slug}`} tabIndex={-1} aria-hidden="true" className="bleed-m block">
                  <ImageReveal image={o.image} ratio="16 / 10" ratioM="4 / 3" />
                </Link>
                <div className="mt-6" data-reveal="">
                  <p className="t-label">{o.type}</p>
                  <h3 className="model-name mt-3">{o.name}</h3>
                  <p className="t-body mt-3">{o.stats.power.value} {o.stats.power.unit}, {o.stats.accel.value.toFixed(1)} sec 0&ndash;100 km/h</p>
                  <Button to={`/models/${o.slug}`} variant="ghost" className="mt-6 w-full sm:w-auto">Explore model</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Interested in the ${v.short}?`} copy="This is a fictional concept. Use the enquiry form to see how the contact flow works." to="/contact" cta="Start an enquiry" />
    </>
  );
}
