'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-[#0a0a0a]">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Building Open" width="32" height="28" className="flex-shrink-0" />
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              href="/projects"
              className="px-3 py-1.5 rounded text-sm text-zinc-500 hover:text-white transition-colors"
            >
              All Projects
            </Link>
            <Link
              href="/manifesto"
              className="px-3 py-1.5 rounded text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Manifesto
            </Link>
            <a
              href="https://github.com/buildingopen"
              className="px-3 py-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
