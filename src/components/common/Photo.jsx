import { useEffect, useRef, useState } from "react";
import Placeholder from "./Placeholder";

/** Fills its (positioned) parent. Falls back to a labelled placeholder slot. */
export default function Photo({ image, priority = false }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <Placeholder image={image} />;

  return (
    <img
      ref={ref}
      className="photo"
      src={image.src}
      alt={image.alt}
      width={image.w}
      height={image.h}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={priority ? "high" : undefined}
      onError={() => setFailed(true)}
      style={{ "--pos": image.pos, "--pos-m": image.posM || image.pos }}
    />
  );
}
