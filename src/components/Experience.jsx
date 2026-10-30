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
      "Analyzed product usage in PostHog to understand feature engagement and identify opportunities to improve the user experience.",
      "Tested AI product workflows, identified bugs, and supported product quality through manual QA.",
      "Collaborated in a startup environment using JavaScript, SQL, Supabase, and Trigger.dev.",
    ],
    tech: [
      "Product Analytics",
      "Quality Assurance",
      "PostHog",
      "JavaScript",
      "SQL",
      "Supabase",
    ],
  },
  {
    role: "Short-Term Rental Business Owner & Property Manager",
    company: "Self-Employed",
    badge: null,
    period: "Jul 2023 – Oct 2026",
    location: "Metro Manila, Philippines",
    points: [
      "Managed guest relationships across six short-term rental properties, serving as a primary point of contact throughout the booking and stay experience.",
      "Guided guests through booking procedures, check-in, property information, and support requests.",
      "Coordinated daily operations with business partners and resolved guest concerns to ensure a smooth customer experience.",
      "Maintained Airbnb Superhost status for over two years.",
    ],
    tech: [
      "Customer Relationship Management",
      ,
      "Customer Experience",
      "Customer Service",
      "Operations Management",
      "Problem Solving",
    ],
  },
  {
    role: "Real Estate Salesperson",
    company: "Independent",
    badge: null,
    period: "Mar 2021 – Jun 2024",
    location: "Makati, Metro Manila",
    points: [
      "Guided prospective buyers and renters through consultations to understand their needs, evaluate requirements, and identify suitable properties.",
      "Managed client relationships throughout the sales and leasing process, coordinating property viewings, negotiations, and follow-ups.",
      "Supported property owners with listing strategies, market insights, and client coordination to achieve successful transactions.",
      "Managed a portfolio of 50+ rental and for-sale properties, contributing to over $4M in transactions.",
    ],
    tech: [
      "Client Relationship Management",
      "Needs Assessment",
      "Client Communication",
      "Account Management",
      "Negotiation",
    ],
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
    title: "Top 10% Financial Advisor",
    org: "AIA Philippines — 2019",
    desc: "Ranked among the top 10% of 8,000+ financial advisors company-wide.",
  },
  {
    title: "Swim Junkie Challenge 5K — 2nd Place",
    org: "Men's 20–29 Age Group — 2023",
    desc: "Placed second in the 5km open water swim event in Caramoan.",
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
