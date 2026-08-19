import useReveal from "../hooks/useReveal";
import SectionLabel from "./SectionLabel";

const FACTS = [
  { label: "Location", value: "Bay Area, CA" },
  { label: "Degree", value: "BS Information Systems" },
  { label: "Focus", value: "Full-Stack JavaScript" },
  { label: "Experience", value: "YC-Backed Startup" },
  { label: "Background", value: "Digital Marketing & Sales" },
  { label: "Building", value: "Web Applications" },
];

export default function About() {
  const ref = useReveal({ threshold: 0.15 });

  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-title">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal">
          <SectionLabel number="01">About</SectionLabel>
          <h2
            id="about-title"
            className="font-display font-bold text-white text-3xl md:text-4xl mb-12"
          >
            The Person Behind the Code
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                I build full-stack web applications using JavaScript, React,
                Node.js, Express, PostgreSQL, and Supabase.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I hold a Bachelor's degree in Information Systems from the
                University of Santo Tomas and gained experience in product
                analytics at a YC-backed AI startup, working with PostHog,
                Supabase, and SQL. Before transitioning into tech, I spent five
                years in sales and digital marketing, giving me a strong
                foundation in client communication and business development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Based in the Bay Area, I am actively building projects and open
                to both software development and technical sales roles where I
                can contribute and grow.
              </p>
            </div>

            {/* Stats / quick facts */}
            <dl className="grid grid-cols-2 gap-4">
              {FACTS.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-dark-800 border border-dark-600 rounded p-4 transition-colors duration-200 hover:border-orange-500/40"
                >
                  <dt className="font-mono text-orange-500 text-xs uppercase tracking-wider mb-2">
                    {label}
                  </dt>
                  <dd className="text-white text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Easter egg — Jedi quote */}
          <blockquote className="mt-12 border-l-2 border-orange-500/40 pl-6">
            <p className="text-gray-500 text-sm italic font-mono">
              "Build, break, learn, repeat."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
