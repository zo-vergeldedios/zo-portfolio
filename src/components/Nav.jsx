import { useEffect, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";
import { RESUME_FILE, RESUME_URL } from "../constants";

const LINKS = ["About", "Projects", "Experience", "Contact"];
const SECTION_IDS = ["hero", "about", "projects", "experience", "contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and when we grow past the mobile breakpoint
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const resumeLink = (className) => (
    <a
      href={RESUME_URL}
      download={RESUME_FILE}
      className={className}
      aria-label="Download resume as PDF"
    >
      Resume
    </a>
  );

  return (
    <>
      {/* ---------- Desktop sidebar ---------- */}
      <aside className="hidden lg:flex fixed top-0 left-0 z-40 h-screen w-[300px] flex-col justify-between border-r border-dark-600 bg-sidebar px-10 py-16">
        {/* Glowing separator between the sidebar and the sections. The
            border-r underneath carries the seam where the saber's gradient
            fades out at the top and bottom. */}
        <span className="saber-line absolute right-0 top-0 bottom-0" aria-hidden="true" />

        <div>
          <a
            href="#hero"
            className="font-display text-sm font-bold tracking-[0.3em] text-gray-500 transition-colors duration-200 hover:text-orange-500"
          >
            ZOVDD<span className="text-orange-500">.</span>DEV
          </a>

          <p className="font-display mt-6 text-2xl font-bold leading-tight text-white">
            Zo Vergel de Dios
          </p>
          <p className="font-mono mt-2 text-xs uppercase tracking-widest text-orange-500">
            Software Engineer
          </p>

          <p className="status-pill mt-6">
            <span className="status-dot" aria-hidden="true" />
            Available for opportunities
          </p>

          <nav aria-label="Section navigation" className="mt-12">
            <ul className="space-y-1">
              {LINKS.map((label) => {
                const id = label.toLowerCase();
                const isActive = active === id;
                return (
                  <li key={label}>
                    <a
                      href={`#${id}`}
                      className={`sidebar-link ${isActive ? "active" : ""}`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="sidebar-indicator" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-10">{resumeLink("btn-ghost text-xs")}</div>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/zo-vergeldedios"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-gray-600 transition-colors duration-200 hover:text-orange-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zovergeldedios"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-gray-600 transition-colors duration-200 hover:text-orange-500"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zo.vergeldedios@gmail.com"
            className="font-mono text-xs text-gray-600 transition-colors duration-200 hover:text-orange-500"
          >
            Email
          </a>
        </div>
      </aside>

      {/* ---------- Mobile / tablet top navigation ---------- */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          scrolled || menuOpen
            ? "bg-sidebar/95 backdrop-blur-sm border-b border-dark-600"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-widest text-white"
          >
            ZOVDD<span className="text-orange-500">.</span>DEV
          </a>

          <div className="flex items-center gap-3">
            {/* The `!` prefixes are required: .btn-ghost is declared after
                @tailwind utilities, so a plain text-[11px] loses to its
                font-size:14px on source order. */}
            {resumeLink("btn-ghost !px-2.5 !py-1.5 !gap-1.5 !text-[11px]")}

            <button
              type="button"
              className="text-orange-500 p-1"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Section navigation"
            className="border-t border-dark-600 bg-sidebar px-6 py-4"
          >
            <ul className="flex flex-col gap-2">
              {LINKS.map((label) => {
                const id = label.toLowerCase();
                const isActive = active === id;
                return (
                  <li key={label}>
                    <a
                      href={`#${id}`}
                      className={`sidebar-link ${isActive ? "active" : ""}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="sidebar-indicator" aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
