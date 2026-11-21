import { Link } from "react-router-dom";
import { VEHICLES } from "../../data/vehicles";
import { DISCLAIMER } from "../../data/content";

const SOCIAL = ["Instagram", "YouTube", "X"];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-14 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <p className="t-h3 uppercase" style={{ letterSpacing: "-0.01em" }}>
            Built to defy limits.
          </p>
          <p className="t-body mt-5">Precision engineered. Aerodynamically sculpted. Designed for those who demand more.</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-7 lg:col-start-6">
          <div>
            <p className="t-label">Models</p>
            <ul className="mt-4 grid list-none gap-1 p-0">
              {VEHICLES.map((v) => (
                <li key={v.slug}>
                  <Link className="inline-flex min-h-11 min-w-11 items-center text-sm text-titanium" to={`/models/${v.slug}`}>
                    {v.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="t-label">Technology</p>
            <ul className="mt-4 grid list-none gap-1 p-0">
              <li><Link className="inline-flex min-h-11 min-w-11 items-center text-sm text-titanium" to="/technology">Engineering</Link></li>
            </ul>
          </div>
          <div>
            <p className="t-label">Story</p>
            <ul className="mt-4 grid list-none gap-1 p-0">
              <li><Link className="inline-flex min-h-11 min-w-11 items-center text-sm text-titanium" to="/story">Our Story</Link></li>
            </ul>
          </div>
          <div>
            <p className="t-label">Contact</p>
            <ul className="mt-4 grid list-none gap-1 p-0">
              <li><Link className="inline-flex min-h-11 min-w-11 items-center text-sm text-titanium" to="/contact">Enquiries</Link></li>
              {SOCIAL.map((s) => (
                <li key={s}>
                  <a
                    href="#top"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`${s} (demonstration placeholder)`}
                    className="inline-flex min-h-11 min-w-11 items-center text-sm text-silver"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="wrap mt-16 overflow-hidden md:mt-24" aria-hidden="true">
        <p className="m-0 text-center font-condensed font-semibold uppercase leading-[0.8] text-graphite" style={{ fontSize: "clamp(4.5rem, 22.5vw, 24rem)" }}>
          Velocity
        </p>
      </div>

      <div className="wrap flex flex-col gap-3 border-t border-line py-6 md:flex-row md:justify-between">
        <p className="t-caption">&copy; {new Date().getFullYear()} VELOCITY. Built by Antony.</p>
        <p className="t-caption max-w-xl md:text-right">{DISCLAIMER}</p>
      </div>
    </footer>
  );
}
