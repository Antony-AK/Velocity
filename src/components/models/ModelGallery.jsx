import ImageReveal from "../common/ImageReveal";
import SectionHeading from "../common/SectionHeading";

export default function ModelGallery({ v }) {
  const [a, b, c] = v.gallery;
  return (
    <section className="section-sm" aria-labelledby="gallery-title">
      <div className="wrap">
        <SectionHeading id="gallery-title" title="Gallery." />
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          <div className="bleed-m md:col-span-2">
            <ImageReveal image={a} ratio="21 / 9" ratioM="4 / 3" parallax />
          </div>
          <div className="bleed-m md:mx-0">
            <ImageReveal image={b} ratio="4 / 3" />
          </div>
          <div className="bleed-m md:mx-0">
            <ImageReveal image={c} ratio="4 / 3" />
          </div>
        </div>
      </div>
    </section>
  );
}
