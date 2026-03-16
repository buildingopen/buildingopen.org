export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span>Building Open</span>
            <span className="hidden md:inline">&middot;</span>
            <span className="text-zinc-500">Built fast. Shared freely.</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/buildingopen"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/federicodeponte"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@buildingopen.org"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/community"
              className="hover:text-white transition-colors"
            >
              Community
            </a>
            <a
              href="/journey"
              className="hover:text-white transition-colors"
            >
              Journey
            </a>
            <a
              href="/badge"
              className="hover:text-white transition-colors"
            >
              Badge
            </a>
          </div>
        </div>
        <p className="text-center md:text-right text-xs text-zinc-600 mt-4">&copy; 2026 Building Open</p>
      </div>
    </footer>
  );
}
