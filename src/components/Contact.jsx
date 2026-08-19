import { useState } from "react";
import useReveal from "../hooks/useReveal";
import SectionLabel from "./SectionLabel";
import { RESUME_FILE, RESUME_URL } from "../constants";

const DIRECT_LINKS = [
  {
    label: "Email",
    value: "zo.vergeldedios@gmail.com",
    href: "mailto:zo.vergeldedios@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/zo-vergeldedios",
    href: "https://github.com/zo-vergeldedios",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zovergeldedios",
    href: "https://linkedin.com/in/zovergeldedios",
    external: true,
  },
];

export default function Contact() {
  const ref = useReveal({ threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS integration
    // To activate: go to emailjs.com, create account, get your:
    //   SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
    // Then replace the placeholders below and uncomment the block.

    try {
      await window.emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative" aria-labelledby="contact-title">
      <div
        className="absolute bottom-0 right-0 w-96 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, #f9731610 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal">
          <SectionLabel number="04">Contact</SectionLabel>
          <h2
            id="contact-title"
            className="font-display font-bold text-white text-3xl md:text-4xl mb-4"
          >
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
            Open to opportunities and collaborations. Feel free to reach out if
            you'd like to connect, discuss a role, or share an idea.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Direct info */}
            <div>
              <ul className="space-y-4 list-none p-0">
                {DIRECT_LINKS.map(({ label, value, href, external }) => (
                  <li key={label} className="flex gap-4 items-start">
                    <span className="font-mono text-orange-500 text-xs uppercase tracking-wider w-16 flex-shrink-0 mt-1">
                      {label}
                    </span>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200 break-all"
                    >
                      {value}
                    </a>
                  </li>
                ))}
                <li className="flex gap-4 items-start">
                  <span className="font-mono text-orange-500 text-xs uppercase tracking-wider w-16 flex-shrink-0 mt-1">
                    Resume
                  </span>
                  <a
                    href={RESUME_URL}
                    download={RESUME_FILE}
                    className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-200"
                    aria-label="Download resume as PDF"
                  >
                    Download PDF
                  </a>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{ resize: "none" }}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p className="font-mono text-xs text-center" aria-live="polite">
                {status === "sent" && (
                  <span className="text-orange-500">
                    Message sent. I'll get back to you.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-500">
                    Something went wrong. Email me directly.
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
