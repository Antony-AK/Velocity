import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Button({ to, href, onClick, variant = "primary", className = "", children, type, ...rest }) {
  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight className="btn__arrow" size={18} strokeWidth={1.75} aria-hidden="true" />
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type={type || "button"} onClick={onClick} className={cls} {...rest}>{inner}</button>;
}
