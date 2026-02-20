export default function Footer() {
  return (
    <footer className="border-t border-dashed border-zinc-800 py-8 text-center text-sm text-zinc-600">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://github.com/buildingopen"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@buildingopen.org"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <p>Building Open</p>
      </div>
    </footer>
  );
}
