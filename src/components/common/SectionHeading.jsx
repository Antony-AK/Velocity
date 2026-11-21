import SplitWords from "./SplitWords";

export default function SectionHeading({ id, label, title, as: Tag = "h2", size = "t-h2", className = "", children }) {
  return (
    <div className={className}>
      {label && (
        <p className="t-label t-label--mark" data-reveal="">
          {label}
        </p>
      )}
      <Tag id={id} className={`${size} ${label ? "mt-6" : ""}`} data-words="">
        <SplitWords text={title} />
      </Tag>
      {children}
    </div>
  );
}
