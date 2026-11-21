import { Link } from "react-router-dom";
import ImageReveal from "../common/ImageReveal";
import Button from "../common/Button";

/** Editorial row for the collection page. Alternates image side on desktop. */
export default function ModelCard({ v, index }) {
  const odd = index % 2 === 1;
  const { stats } = v;
  return (
    <article className="border-t border-line section-sm" aria-labelledby={`m-${v.slug}`}>
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <Link
          to={`/models/${v.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className={`bleed-m block lg:col-span-8 ${odd ? "lg:col-start-5 lg:row-start-1" : "lg:col-start-1"}`}
        >
          <ImageReveal image={v.image} ratio="16 / 10" ratioM="4 / 3" parallax />
        </Link>
        <div className={`lg:col-span-4 ${odd ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"}`} data-reveal="">
          <p className="t-label t-label--mark">
            {v.index} &nbsp;{v.type}
          </p>
          <h2 id={`m-${v.slug}`} className="model-name mt-5">{v.name}</h2>
          <p className="t-body mt-5">{v.summary}</p>
          <dl className="m-0 mt-8">
            <div className="spec-row"><dt className="t-label">Power</dt><dd>{stats.power.value} {stats.power.unit}</dd></div>
            <div className="spec-row"><dt className="t-label">0&ndash;100 km/h</dt><dd>{stats.accel.value.toFixed(1)} {stats.accel.unit}</dd></div>
            <div className="spec-row"><dt className="t-label">Top speed</dt><dd>{stats.top.value} {stats.top.unit}</dd></div>
          </dl>
          <Button to={`/models/${v.slug}`} className="mt-8 w-full sm:w-auto">Explore model</Button>
        </div>
      </div>
    </article>
  );
}
