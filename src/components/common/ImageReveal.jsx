import Photo from "./Photo";

/**
 * Framed photograph with a wipe reveal (transform only) and optional desktop parallax.
 * The aspect ratio is reserved up front, so nothing shifts when the image loads.
 * Use `fill` to cover a positioned parent instead of using an aspect ratio.
 */
export default function ImageReveal({
  image,
  ratio = "16 / 9",
  ratioM,
  fill = false,
  parallax = false,
  priority = false,
  cover = "bg-obsidian",
  className = "",
}) {
  const frame = fill ? "absolute inset-0" : "ar relative";
  return (
    <div
      className={`${frame} overflow-hidden bg-graphite ${className}`}
      style={fill ? undefined : { "--ar": ratio, "--ar-m": ratioM || ratio }}
      data-img-reveal=""
    >
      <div className="absolute inset-0" data-img-scale="">
        <div className="absolute inset-0" {...(parallax ? { "data-parallax": "" } : {})}>
          <Photo image={image} priority={priority} />
        </div>
      </div>
      <span className={`img-cover ${cover}`} aria-hidden="true" data-img-cover="" />
    </div>
  );
}
