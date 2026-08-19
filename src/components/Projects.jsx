import useReveal from "../hooks/useReveal";
import SectionLabel from "./SectionLabel";

const PROJECTS = [
  {
    title: "FitDex",
    desc: "Full-stack workout tracker app where users build workout programs, assign exercises per day, and track sets, reps, and weights. Supports progressive overload by saving per-session data to Supabase.",
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Supabase",
      "SQL",
      "Built Manually",
    ],
    github: "https://github.com/zo-vergeldedios/fitdex",
    live: "https://fitdex-beige.vercel.app/",
    status: "Live & Built",
  },
  {
    title: "WealthPilot",
    desc: "Full stack personal finance app that helps users track income, expenses, and budgets in one dashboard. Features user accounts, secure data ownership, analytics, and responsive design for managing personal finances.",
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "CSS",
      "Built with AI Assistance",
    ],
    github: "https://github.com/zo-vergeldedios/wealth-pilot",
    live: "https://wealth-pilot-psi.vercel.app/",
    status: "Live & Built",
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
];

// "Built Manually" and "Built with AI Assistance" share one accent modifier —
// they were already styled identically.
const ACCENT_BADGES = new Set(["Built Manually", "Built with AI Assistance"]);

const badgeClass = (t) =>
  ACCENT_BADGES.has(t) ? "tech-badge tech-badge-accent" : "tech-badge";

export default function Projects() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="py-24 relative"
      aria-labelledby="projects-title"
    >
      {/* Subtle left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left, #f9731608 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal">
          {/* Slow marquee behind the section header */}
          <div className="relative">
            <div className="marquee" aria-hidden="true">
              <div className="marquee-track">
                <span>Projects — Projects — Projects — </span>
                <span>Projects — Projects — Projects — </span>
              </div>
            </div>

            <div className="relative">
              <SectionLabel number="02">Projects</SectionLabel>
              <h2
                id="projects-title"
                className="font-display font-bold text-white text-3xl md:text-4xl mb-12"
              >
                The Work Behind the Learning
              </h2>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 list-none p-0">
            {PROJECTS.map((p, i) => (
              <li
                key={p.title}
                className="project-card flex flex-col justify-between"
                data-reveal-item
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <h3 className="font-display font-semibold text-white text-lg leading-tight">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-orange-500 border border-orange-500/30 rounded px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
                      {p.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <ul className="flex flex-wrap gap-2 mb-6 list-none p-0">
                    {p.tech.map((t) => (
                      <li key={t} className={badgeClass(t)}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-2 border-t border-dark-600">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-gray-500 hover:text-orange-500 transition-colors duration-200 pt-2"
                      aria-label={`${p.title} source code on GitHub`}
                    >
                      GitHub <span aria-hidden="true">→</span>
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-gray-500 hover:text-orange-500 transition-colors duration-200 pt-2"
                      aria-label={`${p.title} live site`}
                    >
                      Live <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
