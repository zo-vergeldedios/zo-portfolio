import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Projects", "Experience", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-800/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="font-display text-xl font-bold tracking-widest text-white"
        >
          ZOVDD<span className="text-orange-500">.</span>DEV
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-500 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
