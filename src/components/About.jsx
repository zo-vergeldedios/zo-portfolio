import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <p className="font-mono text-orange-500 text-xs tracking-widest uppercase mb-3">
            // about
          </p>
          <h2 className="font-display font-bold text-white text-4xl mb-10">
            The Person Behind the Code
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                I come from a background in sales and digital marketing, where I
                spent several years learning how people make decisions and why
                products succeed. That experience still shapes how I approach
                building software today, especially around user behavior and
                product thinking.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                In late 2024, I began learning software development and have
                since been building full stack web applications using
                JavaScript, React, Node.js, Express, PostgreSQL, and Supabase. I
                focus on practical projects that strengthen my fundamentals and
                help me understand how real applications are built.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I hold a BS in Information Systems from the University of Santo
                Tomas and gained experience working with product analytics at a
                YC-backed AI startup using PostHog, Supabase, and SQL. Based in
                the Bay Area, I enjoy building, learning, and improving through
                hands-on work.
              </p>
            </div>

            {/* Stats / quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Bay Area, CA" },
                { label: "Degree", value: "BS Information Systems" },
                { label: "Focus", value: "Full-Stack JavaScript" },
                { label: "Experience", value: "YC-Backed Startup" },
                { label: "Background", value: "Digital Marketing & Sales" },
                { label: "Building", value: "Web Applications" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-dark-700 border border-dark-500 rounded p-4"
                >
                  <p className="font-mono text-orange-500 text-xs uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Easter egg — Jedi quote */}
          <div className="mt-12 border-l-2 border-orange-500/40 pl-5">
            <p className="text-gray-600 text-sm italic font-mono">
              "Build, break, learn, repeat."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
