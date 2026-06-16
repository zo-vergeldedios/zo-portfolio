import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "Workout Planner App",
    desc: "Full-stack tracker where users build workout programs, assign exercises per day, and track sets, reps, and weights. Supports progressive overload by saving per-session data to Supabase.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express",
      "Supabase",
      "SQL",
      "Built Manually",
    ],
    github: "https://github.com/zo-vergeldedios/workout-planner-app",
    live: null,
    status: "Built",
  },
  {
    title: "Weather Email App",
    desc: "Automated weather notification system that fetches real-time data and sends hourly email updates using Mailgun and Open Meteo APIs. API keys secured via dotenv.",
    tech: [
      "JavaScript",
      "Node.js",
      "Mailgun API",
      "Open Meteo API",
      "Supabase",
      "Built Manually",
    ],
    github: "https://github.com/zo-vergeldedios/weather-email-app",
    live: null,
    status: "Built",
  },
  {
    title: "Job Tracker",
    desc: "Full-stack app to manage job applications in one place. Track status from saved to offer, log interview notes and rejection reasons, and stay organized throughout your search.",
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Built with AI Assistance",
    ],
    github: "https://github.com/zo-vergeldedios/job-tracker-app",
    live: null,
    status: "Built",
  },
];

export default function Projects() {
  const ref = useRef(null);

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

  return (
    <section id="projects" className="py-24 relative">
      {/* Subtle left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left, #f9731608 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <p className="font-mono text-orange-500 text-xs tracking-widest uppercase mb-3">
            // Things I've Built
          </p>
          <h2 className="font-display font-bold text-white text-4xl mb-10">
            The Work Behind the Learning
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="project-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-semibold text-white text-lg leading-tight">
                      {p.title}
                    </h3>
                    <span className="font-mono text-xs text-orange-500 border border-orange-500/30 px-2 py-0.5 rounded ml-2 flex-shrink-0">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className={`tech-badge ${
                          t === "Built Manually"
                            ? "tech-badge-manual"
                            : t === "Built with AI Assistance"
                              ? "tech-badge-ai"
                              : ""
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-orange-500 text-xs font-mono transition-colors"
                  >
                    GitHub →
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 hover:text-orange-500 text-xs font-mono transition-colors"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
