import { RESUME_FILE, RESUME_URL } from "../constants";

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

// Entrance order: name → title → tagline → buttons → tech chips (80ms apart)
const step = (i) => ({ animationDelay: `${100 + i * 80}ms` });

// Rendered twice (mobile above the name, desktop in the right column); the
// aura span is the steady glow layer behind the rotating blobs, see index.css.
function Portrait(props) {
  return (
    <div className="hero-portrait" {...props}>
      <span className="hero-aura" aria-hidden="true" />
      <img
        src="/renzo-website-picture.png"
        alt="Portrait of Zo Vergel de Dios"
        className="hero-portrait-img"
      />
    </div>
  );
}

export default function Hero() {
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

      {/* Slow ambient pulse — opacity-only, runs on the compositor */}
      <div className="hero-pulse" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16 lg:pt-16 w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left: text content */}
          <div className="flex-1 hero-stagger">
            {/* Profile picture — mobile only, above name */}
            <div
              className="flex justify-center mb-8 md:hidden"
              data-hero-item
              style={step(2)}
            >
              <Portrait />
            </div>

            {/* Name */}
            <h1
              className="font-display font-bold text-white leading-none mb-2"
              style={{ fontSize: "clamp(42px, 7vw, 80px)", ...step(0) }}
              data-hero-item
            >
              Zo{" "}
              <span className="orange-glow" style={{ color: "#f97316" }}>
                Vergel de Dios
              </span>
            </h1>

            {/* Title */}
            <p
              className="font-mono text-orange-500 text-sm tracking-widest uppercase mb-6"
              data-hero-item
              style={step(1)}
            >
              Software Engineer
            </p>

            {/* Short description */}
            <p
              className="text-gray-400 text-base max-w-md leading-relaxed mb-8"
              data-hero-item
              style={step(2)}
            >
              Full-stack software engineer based in the Bay Area, building web
              applications with a background in sales and digital marketing.
            </p>

            {/* CTA buttons */}
            <div
              className="flex gap-3 flex-wrap mb-10"
              data-hero-item
              style={step(3)}
            >
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
              <a
                href={RESUME_URL}
                download={RESUME_FILE}
                className="btn-ghost"
                aria-label="Download resume as PDF"
              >
                Download Resume
              </a>
            </div>

            {/* Tech badges */}
            <div
              className="flex flex-wrap gap-2"
              data-hero-item
              style={step(4)}
            >
              {TECH.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: profile picture — desktop only */}
          <div className="hidden md:flex justify-end flex-shrink-0 hero-stagger">
            <Portrait data-hero-item style={step(2)} />
          </div>
        </div>
      </div>
    </section>
  );
}
