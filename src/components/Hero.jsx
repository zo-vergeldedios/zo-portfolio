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
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, #f9731618 0%, transparent 65%)",
        }}
      />

      {/* Saber line right */}
      <div className="saber-line absolute right-16 top-0 bottom-0 hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">
        <div ref={ref} className="section-fade">
          {/* Eyebrow */}
          <p className="font-mono text-orange-500 text-sm tracking-widest mb-4 uppercase">
            Software Developer
          </p>

          {/* Name */}
          <h1
            className="font-display font-bold text-white leading-none mb-2"
            style={{ fontSize: "clamp(42px, 7vw, 80px)" }}
          >
            Lorenzo
          </h1>
          <h1
            className="font-display font-bold leading-none mb-6 orange-glow"
            style={{ fontSize: "clamp(42px, 7vw, 80px)", color: "#f97316" }}
          >
            Vergel de Dios
          </h1>

          {/* Bio */}
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
            Full stack developer based in the Bay Area with experience in sales
            and digital marketing. I build web applications using JavaScript,
            React, Node, Express, PostgreSQL, and Supabase. I enjoy turning
            ideas into functional products while continuously improving my craft
            as a developer.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 flex-wrap mb-12">
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
      </div>
    </section>
  );
}
