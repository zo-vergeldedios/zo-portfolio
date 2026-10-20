import useReveal from "../hooks/useReveal";
import SectionLabel from "./SectionLabel";

const FACTS = [
  { label: "Location", value: "Bay Area, CA" },
  { label: "Degree", value: "BS Information Systems" },
  { label: "Focus", value: "Tech Sales" },
  { label: "Experience", value: "AI Startup" },
  { label: "Background", value: "Software Engineering & Sales" },
  { label: "Strength", value: "Sales & Tech" },
];

export default function About() {
  const ref = useReveal({ threshold: 0.15 });

  return (
    <section
      id="about"
      className="py-24 relative"
      aria-labelledby="about-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal">
          <SectionLabel number="01">About</SectionLabel>
          <h2
            id="about-title"
            className="font-display font-bold text-white text-3xl md:text-4xl mb-12"
          >
            The Story Behind the Work
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                I started my career in sales and digital marketing, where I
                developed an interest in understanding customers, solving
                problems, and helping businesses grow.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My curiosity about technology led me to software engineering,
                where I explored building web applications and worked with a
                YC-backed AI startup. With a background spanning business and
                technology, I've come to appreciate how the two work together.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Based in the Bay Area, I'm focused on tech sales, bringing
                together my sales experience and technical knowledge to help
                companies grow.
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
              "Learn. Build. Grow. Repeat."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
