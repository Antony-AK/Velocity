import SectionHeading from "../common/SectionHeading";
import { flagship } from "../../data/vehicles";

const { stats } = flagship;

const BIG = [
  { label: "Power", value: stats.power.value, decimals: 0, unit: stats.power.unit },
  { label: "Acceleration", value: stats.accel.value, decimals: 1, unit: `${stats.accel.unit}, 0\u2013100 km/h` },
  { label: "Top speed", value: stats.top.value, decimals: 0, unit: stats.top.unit },
];

const TEXT = [
  { label: "Drivetrain", value: stats.drivetrain },
  { label: "Engine", value: flagship.engine },
  { label: "Transmission", value: flagship.transmission },
];

export default function PerformanceSpecs() {
  return (
    <section className="section-sm" aria-labelledby="specs-title">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <SectionHeading id="specs-title" label="Velocity VXR-01" title="The VXR-01 in numbers." className="lg:col-span-8" />
          <p className="t-caption lg:col-span-4 lg:col-start-9" data-reveal="">
            Fictional concept specifications, shown for demonstration.
          </p>
        </div>

        <div className="mt-12 grid md:mt-16 md:grid-cols-3">
          {BIG.map((s) => (
            <div className="spec-cell" key={s.label} data-reveal="">
              <p className="t-label">{s.label}</p>
              <p className="spec-num mt-6">
                <span data-count={s.value} data-decimals={s.decimals} style={{ display: "inline-block", minWidth: "3ch" }}>
                  {s.value.toFixed(s.decimals)}
                </span>
              </p>
              <p className="spec-unit mt-4">{s.unit}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3">
          {TEXT.map((s) => (
            <div className="spec-cell" key={s.label} data-reveal="">
              <p className="t-label">{s.label}</p>
              <p className="model-name mt-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
