export default function Placeholder({ image }) {
  return (
    <div className="placeholder" role="img" aria-label={image.alt}>
      <svg className="placeholder__car" viewBox="0 0 400 100" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M10 78 L40 76 C48 60 70 52 100 50 L150 40 C175 30 215 28 240 36 L290 48 C330 52 360 62 385 72 L392 78 Z" />
        <circle cx="96" cy="78" r="14" />
        <circle cx="306" cy="78" r="14" />
      </svg>
      <div className="placeholder__meta">
        <span className="placeholder__tag">IMAGE SLOT</span>
        <span>/public/images/{image.file}</span>
        <span>
          {image.w} x {image.h}
        </span>
        <span>{image.label}</span>
      </div>
    </div>
  );
}
