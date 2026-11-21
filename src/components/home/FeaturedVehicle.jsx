import SectionHeading from "../common/SectionHeading";
import ImageReveal from "../common/ImageReveal";
import Button from "../common/Button";
import { IMAGES } from "../../data/images";
import { flagship } from "../../data/vehicles";

export default function FeaturedVehicle() {
  const { stats } = flagship;
  return (
    <section className="section" aria-labelledby="flagship-title">
      <div className="wrap">
        <SectionHeading id="flagship-title" title="Engineered to move you." className="lg:max-w-4xl" />

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="bleed-m bleed-left lg:col-span-8">
            <ImageReveal image={IMAGES.flagship} ratio="16 / 10" ratioM="4 / 3" parallax />
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:col-span-4 lg:grid-cols-1">
            <div data-reveal="">
              <p className="t-label t-label--mark">Flagship {flagship.type}</p>
              <h3 className="model-name mt-5">{flagship.name}</h3>
              <p className="t-body mt-5">{flagship.description}</p>
            </div>
            <div data-reveal="">
              <dl className="m-0">
                <div className="spec-row"><dt className="t-label">Power</dt><dd>{stats.power.value} {stats.power.unit}</dd></div>
                <div className="spec-row"><dt className="t-label">0&ndash;100 km/h</dt><dd>{stats.accel.value.toFixed(1)} {stats.accel.unit}</dd></div>
                <div className="spec-row"><dt className="t-label">Top speed</dt><dd>{stats.top.value} {stats.top.unit}</dd></div>
              </dl>
              <Button to={`/models/${flagship.slug}`} className="mt-8 w-full sm:w-auto md:w-full">
                Explore model
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
