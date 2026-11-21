import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";

const TYPES = ["Model enquiry", "Test drive (concept)", "Press and media", "General enquiry"];
const EMPTY = { name: "", email: "", type: "", message: "" };

function check(field, v) {
  switch (field) {
    case "name": return v.name.trim().length < 2 ? "Enter your name (at least 2 characters)." : "";
    case "email": return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()) ? "" : "Enter a valid email address, like name@example.com.";
    case "type": return v.type ? "" : "Choose an enquiry type.";
    case "message": return v.message.trim().length < 10 ? "Write a message of at least 10 characters." : "";
    default: return "";
  }
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);
  const successRef = useRef(null);

  const update = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (errors[field] !== undefined) setErrors((er) => ({ ...er, [field]: check(field, next) }));
  };
  const blur = (field) => () => setErrors((er) => ({ ...er, [field]: check(field, values) }));

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    ["name", "email", "type", "message"].forEach((f) => { next[f] = check(f, values); });
    setErrors(next);
    const firstBad = ["name", "email", "type", "message"].find((f) => next[f]);
    if (firstBad) {
      document.getElementById(`f-${firstBad}`)?.focus();
      return;
    }
    setSent({ name: values.name.trim().split(" ")[0] });
    setValues(EMPTY);
    setErrors({});
    requestAnimationFrame(() => successRef.current?.focus());
  };

  const field = (name, label, control) => (
    <div className="field">
      <label className="field__label" htmlFor={`f-${name}`}>{label}</label>
      {control}
      {errors[name] ? (
        <p className="field__error" id={`e-${name}`}>{errors[name]}</p>
      ) : null}
    </div>
  );
  const aria = (name) => ({ "aria-invalid": errors[name] ? "true" : "false", "aria-describedby": errors[name] ? `e-${name}` : undefined });

  return (
    <>
      <PageHero label="Contact" title="Start an enquiry." intro="Tell us which model interests you and how you would like to hear from us." />
      <section className="pb-28 md:pb-36" aria-label="Enquiry form">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4" data-reveal="">
            <p className="t-label t-label--mark">Demonstration only</p>
            <p className="t-body mt-6">
              VELOCITY is a fictional brand. This form checks your input and shows a confirmation, but nothing is sent, stored or delivered to any company.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {sent ? (
              <div role="status" className="border-t border-line pt-8">
                <h2 ref={successRef} tabIndex={-1} className="t-h2" style={{ outline: "none" }}>
                  Thank you, {sent.name}.
                </h2>
                <p className="t-lead mt-6">
                  Your enquiry passed validation. This is a demonstration, so nothing was sent or saved.
                </p>
                <Button variant="ghost" className="mt-8 w-full sm:w-auto" onClick={() => setSent(null)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-8">
                {field("name", "Name", (
                  <input id="f-name" className="field__control" type="text" autoComplete="name" value={values.name} onChange={update("name")} onBlur={blur("name")} {...aria("name")} />
                ))}
                {field("email", "Email", (
                  <input id="f-email" className="field__control" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={update("email")} onBlur={blur("email")} {...aria("email")} />
                ))}
                {field("type", "Enquiry type", (
                  <div className="relative">
                    <select id="f-type" className="field__control pr-10" value={values.type} onChange={update("type")} onBlur={blur("type")} {...aria("type")}>
                      <option value="">Select an enquiry type</option>
                      {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-silver" size={20} aria-hidden="true" />
                  </div>
                ))}
                {field("message", "Message", (
                  <textarea id="f-message" className="field__control" rows={5} value={values.message} onChange={update("message")} onBlur={blur("message")} {...aria("message")} />
                ))}
                <div>
                  <Button type="submit" className="w-full sm:w-auto">Send enquiry</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
