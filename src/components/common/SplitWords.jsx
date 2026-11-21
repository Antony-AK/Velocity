/** Splits a heading into masked words so the page-level animation can stagger them. */
export default function SplitWords({ text }) {
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="word">
            <span className="word__inner">{w}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
