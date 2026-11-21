import SectionHeading from "../common/SectionHeading";

export default function ModelSpecifications({ v }) {
  const { stats } = v;
  const big = [
    { label: "Power", value: stats.power.value, decimals: 0, unit: stats.power.unit },
    { label: "Acceleration", value: stats.accel.value, decimals: 1, unit: `${stats.accel.unit}, 0\u2013100 km/h` },
    { label: "Top speed", value: stats.top.value, decimals: 0, unit: stats.top.unit },
  ];
  const rows = [
    ["Drivetrain", stats.drivetrain],
    ["Engine", v.engine],
    ["Transmission", v.transmission],
    ["Category", v.type],
  ];
  return (
    <section className="section-sm" aria-labelledby="spec-title">
      <div className="wrap">
        <SectionHeading id="spec-title" label="Technical specification" title="The numbers." />
        <div className="mt-12 grid md:mt-16 md:grid-cols-3">
          {big.map((s) => (
            <div className="spec-cell" key={s.label} data-reveal="">
              <p className="t-label">{s.label}</p>
              <p className="spec-num spec-num--md mt-6">
                <span data-count={s.value} data-decimals={s.decimals} style={{ display: "inline-block", minWidth: "3ch" }}>
                  {s.value.toFixed(s.decimals)}
                </span>
              </p>
              <p className="spec-unit mt-4">{s.unit}</p>
            </div>
          ))}
        </div>
        <dl className="m-0 mt-6 grid md:mt-10 md:grid-cols-2 md:gap-x-10" data-reveal="">
          {rows.map(([k, val]) => (
            <div className="spec-row" key={k}>
              <dt className="t-label">{k}</dt>
              <dd>{val}</dd>
            </div>
          ))}
        </dl>
        <p className="t-caption mt-6">Fictional concept specifications, shown for demonstration.</p>
      </div>
    </section>
  );
}
