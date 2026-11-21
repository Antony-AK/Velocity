import SplitWords from "./SplitWords";
import Button from "./Button";

export default function CtaBand({ title, copy, to, cta }) {
  return (
    <section className="border-t border-line section" aria-labelledby="cta-band-title">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <h2 id="cta-band-title" className="t-h2 lg:col-span-7" data-words="">
          <SplitWords text={title} />
        </h2>
        <div className="lg:col-span-4 lg:col-start-9">
          {copy && (
            <p className="t-lead" data-reveal="">
              {copy}
            </p>
          )}
          <div className={copy ? "mt-8" : ""} data-reveal="">
            <Button to={to} className="w-full sm:w-auto">
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
