import { useEffect, useRef } from "react";

const TECH = [
  "JavaScript",
  "Node.js",
  "React",
  "Express",
  "Supabase",
  "SQL",
  "PostgreSQL",
  "HTML5",
  "CSS3",
];

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setTimeout(() => el.classList.add("visible"), 100);
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #f9731618 0%, transparent 65%)",
        }}
      />

      <div className="saber-line absolute right-16 top-0 bottom-0 hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">
        <div ref={ref} className="section-fade">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left: text content */}
            <div className="flex-1">
              {/* Profile picture — mobile only, above name */}
              <div className="flex justify-center mb-8 md:hidden">
                <div className="hero-profile-img-wrapper">
                  <img
                    src="/renzo-website-picture.png"
                    alt="Zo Dios"
                    className="hero-profile-img"
                  />
                </div>
              </div>

              {/* Name */}
              <h1
                className="font-display font-bold text-white leading-none mb-2"
                style={{ fontSize: "clamp(42px, 7vw, 80px)" }}
              >
                Zo{" "}
                <span className="orange-glow" style={{ color: "#f97316" }}>
                  Vergel de Dios
                </span>
              </h1>

              {/* Title */}
              <p className="font-mono text-orange-500 text-sm tracking-widest uppercase mb-6">
                Software Developer
              </p>

              {/* Short description */}
              <p className="text-gray-400 text-base max-w-md leading-relaxed mb-8">
                Full-stack developer based in the Bay Area with a background in
                sales and digital marketing.
              </p>

              {/* CTA buttons */}
              <div className="flex gap-3 flex-wrap mb-10">
                <a
                  href="https://github.com/zo-vergeldedios"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/zovergeldedios"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  LinkedIn
                </a>
                <a href="#contact" className="btn-primary">
                  Contact
                </a>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {TECH.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: profile picture — desktop only */}
            <div className="hidden md:flex justify-end flex-shrink-0">
              <div className="hero-profile-img-wrapper">
                <img
                  src="/renzo-website-picture.png"
                  alt="Zo Dios"
                  className="hero-profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
