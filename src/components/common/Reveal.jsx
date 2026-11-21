/** Marks an element for the page-level scroll reveal. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={className} data-reveal="" {...rest}>
      {children}
    </Tag>
  );
}
