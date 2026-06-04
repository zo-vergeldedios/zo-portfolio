import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
    <section id="contact" className="py-24 relative">
      <div
        className="absolute bottom-0 right-0 w-96 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, #f9731610 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <p className="font-mono text-orange-500 text-xs tracking-widest uppercase mb-3">
            // contact
          </p>
          <h2 className="font-display font-bold text-white text-4xl mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-10 max-w-md">
            Open to opportunities and collaborations. Feel free to reach out if
            you'd like to connect, discuss a role, or share an idea.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Direct info */}
            <div>
              <div className="space-y-4 mb-8">
                {[
                  {
                    label: "Email",
                    value: "zo.vergeldedios@gmail.com",
                    href: "mailto:zo.vergeldedios@gmail.com",
                  },
                  {
                    label: "GitHub",
                    value: "github.com/zo-vergeldedios",
                    href: "https://github.com/zo-vergeldedios",
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/zovergeldedios",
                    href: "https://linkedin.com/in/zovergeldedios",
                  },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <span className="font-mono text-orange-500 text-xs uppercase w-16 flex-shrink-0 mt-1">
                      {label}
                    </span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-orange-500 text-sm transition-colors break-all"
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                style={{ resize: "none" }}
              />
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="font-mono text-xs text-orange-500 text-center">
                  Message sent. I'll get back to you.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-xs text-red-500 text-center">
                  Something went wrong. Email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
