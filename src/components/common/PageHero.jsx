import SplitWords from "./SplitWords";
import ImageReveal from "./ImageReveal";

export default function PageHero({ label, title, intro, image, imageRatio = "21 / 9", imageRatioM = "4 / 3" }) {
  return (
    <section className="page-hero wrap" aria-labelledby="page-title">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <div className="lg:col-span-8">
          {label && (
            <p className="t-label t-label--mark" data-reveal="">
              {label}
            </p>
          )}
          <h1 id="page-title" className={`t-h1 ${label ? "mt-6" : ""}`} data-words="">
            <SplitWords text={title} />
          </h1>
        </div>
        {intro && (
          <p className="t-lead lg:col-span-4 lg:col-start-9" data-reveal="">
            {intro}
          </p>
        )}
      </div>
      {image && (
        <div className="bleed-m mt-12 md:mt-16">
          <ImageReveal image={image} ratio={imageRatio} ratioM={imageRatioM} parallax priority />
        </div>
      )}
    </section>
  );
}
