import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    role: "Junior Software Developer",
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
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <p className="font-mono text-orange-500 text-xs tracking-widest uppercase mb-3">
            // experience
          </p>
          <h2 className="font-display font-bold text-white text-4xl mb-10">
            The Roles Behind the Growth
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-500 hidden md:block" />

            <div className="space-y-10">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} className="md:pl-14 relative">
                  <div className="experience-dot absolute left-0 top-1 hidden md:block" />
                  <div className="bg-dark-700 border border-dark-500 rounded-md p-6 card-accent">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-white text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-orange-500 text-sm font-medium">
                          {exp.company}
                          {exp.badge && (
                            <span className="ml-2 font-mono text-xs bg-orange-500/10 border border-orange-500/30 text-orange-400 px-2 py-0.5 rounded">
                              {exp.badge}
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-gray-500">
                          {exp.period}
                        </p>
                        <p className="font-mono text-xs text-gray-600">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.points.map((pt, i) => (
                        <li
                          key={i}
                          className="text-gray-400 text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-orange-500/50 flex-shrink-0">
                            —
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-14">
            <p className="font-mono text-orange-500 text-xs tracking-widest uppercase mb-4">
              // education
            </p>
            <div className="bg-dark-700 border border-dark-500 rounded-md p-6 card-accent">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="font-display font-semibold text-white text-lg">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-orange-500 text-sm">{EDUCATION.school}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-gray-500">
                    {EDUCATION.period}
                  </p>
                  <p className="font-mono text-xs text-gray-600">
                    {EDUCATION.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mt-14">
            <p className="font-mono text-orange-500 text-xs tracking-widest uppercase mb-4">
              // awards
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {AWARDS.map((a) => (
                <div
                  key={a.title}
                  className="bg-dark-700 border border-dark-500 rounded-md p-5 card-accent"
                >
                  <h4 className="font-display font-semibold text-white mb-1">
                    {a.title}
                  </h4>
                  <p className="font-mono text-xs text-orange-500 mb-2">
                    {a.org}
                  </p>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
