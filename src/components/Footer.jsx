export default function Footer() {
  return (
    <footer className="border-t border-dark-500 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display text-sm tracking-widest text-gray-600">
          ZOVDD<span className="text-orange-500">.</span>DEV
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/zo-vergeldedios"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-gray-600 hover:text-orange-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zovergeldedios"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-gray-600 hover:text-orange-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zo.vergeldedios@gmail.com"
            className="font-mono text-xs text-gray-600 hover:text-orange-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
