import { RESUME_FILE, RESUME_URL } from "../constants";

const LINK_CLASS =
  "font-mono text-xs text-gray-500 hover:text-orange-500 transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="border-t border-dark-600 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display text-sm tracking-widest text-gray-500">
          ZOVDD<span className="text-orange-500">.</span>DEV
        </p>

        <nav aria-label="Footer links" className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/zo-vergeldedios"
            target="_blank"
            rel="noreferrer"
            className={LINK_CLASS}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zovergeldedios"
            target="_blank"
            rel="noreferrer"
            className={LINK_CLASS}
          >
            LinkedIn
          </a>
          <a href="mailto:zo.vergeldedios@gmail.com" className={LINK_CLASS}>
            Email
          </a>
          <a
            href={RESUME_URL}
            download={RESUME_FILE}
            className={LINK_CLASS}
            aria-label="Download resume as PDF"
          >
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
}
