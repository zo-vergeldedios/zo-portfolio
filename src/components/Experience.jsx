import useReveal from "../hooks/useReveal";
import SectionLabel from "./SectionLabel";

const EXPERIENCE = [
  {
    role: "Junior Software Engineer",
    company: "The Hog",
    badge: "YC-Backed",
    period: "Jan 2026 – Mar 2026",
    location: "San Francisco, CA",
    points: [
      "Used PostHog to analyze user behavior and track which AI agents and features drove engagement.",
      "Conducted manual QA testing to identify bugs and support service stability.",
      "Worked with Supabase, SQL, and Trigger.dev in a fast-moving startup environment.",
    ],
    tech: ["PostHog", "JavaScript", "SQL", "Supabase", "Trigger.dev", "Linear"],
  },
  {
    role: "Digital Marketing Specialist",
    company: "Maxxsecure Insurances Inc.",
    badge: null,
    period: "Jan 2020 – Dec 2024",
    location: "Makati, Metro Manila",
    points: [
      "Oversaw digital marketing operations including website updates and online campaigns.",
      "Integrated Google Ads and analytics, driving measurable traffic improvements.",
      "Managed cross-functional communication across digital channels.",
    ],
    tech: ["Google Ads", "Analytics", "Web Operations"],
  },
];

const EDUCATION = {
  degree: "Bachelor of Science in Information Systems",
  school: "University of Santo Tomas",
  period: "2012 – 2017",
  location: "Philippines",
};

const AWARDS = [
  {
    title: "Headliners of Tomorrow Champion",
    org: "Toastmasters International, District 75 — 2018",
    desc: "Top rookie speaker across all Toastmasters clubs in Metro Manila.",
  },
  {
    title: "Swim Junkie Challenge 5K — 2nd Place",
    org: "Men's 20–29 Age Group — 2023",
    desc: "5km open water swim event in Caramoan.",
  },
];

export default function Experience() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-24"
      aria-labelledby="experience-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal">
          <SectionLabel number="03">Experience</SectionLabel>
          <h2
            id="experience-title"
            className="font-display font-bold text-white text-3xl md:text-4xl mb-12"
          >
            The Roles Behind the Growth
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[4px] top-3 bottom-3 w-px bg-dark-600 hidden md:block"
              aria-hidden="true"
            />

            <ol className="list-none p-0 space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <li
                  key={exp.role}
                  className="md:pl-10 relative"
                  data-reveal-item
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span
                    className="experience-dot absolute left-0 top-3 hidden md:block"
                    aria-hidden="true"
                  />
                  <article className="bg-dark-800 border border-dark-600 rounded-md p-6 transition-colors duration-200 hover:border-orange-500/40">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-white text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-orange-500 text-sm font-medium mt-1">
                        {exp.company}
                        {exp.badge && (
                          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider bg-orange-500/10 border border-orange-500/30 text-orange-500 px-2 py-0.5 rounded">
                            {exp.badge}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="md:text-right">
                      <p className="font-mono text-xs text-gray-500">
                        {exp.period}
                      </p>
                      <p className="font-mono text-xs text-gray-500 mt-1">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.points.map((pt) => (
                      <li
                        key={pt}
                        className="text-gray-400 text-sm leading-relaxed flex gap-3"
                      >
                        <span
                          className="text-orange-500/60 flex-shrink-0"
                          aria-hidden="true"
                        >
                          —
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-2 list-none p-0">
                    {exp.tech.map((t) => (
                      <li key={t} className="tech-badge">
                        {t}
                      </li>
                    ))}
                  </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* Education */}
          <div className="mt-16">
            <SectionLabel>Education</SectionLabel>
            <div className="bg-dark-800 border border-dark-600 rounded-md p-6 transition-colors duration-200 hover:border-orange-500/40">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="font-display font-semibold text-white text-lg">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-orange-500 text-sm mt-1">
                    {EDUCATION.school}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="font-mono text-xs text-gray-500">
                    {EDUCATION.period}
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-1">
                    {EDUCATION.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mt-16">
            <SectionLabel>Awards</SectionLabel>
            <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
              {AWARDS.map((a) => (
                <li
                  key={a.title}
                  className="bg-dark-800 border border-dark-600 rounded-md p-6 transition-colors duration-200 hover:border-orange-500/40"
                >
                  <h3 className="font-display font-semibold text-white mb-2">
                    {a.title}
                  </h3>
                  <p className="font-mono text-xs text-orange-500 mb-2">
                    {a.org}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {a.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
