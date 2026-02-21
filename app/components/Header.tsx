'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/manifesto', label: 'Manifesto' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dashed border-zinc-800 bg-[#0a0a0a]">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Building Open - Home">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-slow" aria-hidden="true" />
            Building Open
          </Link>

          <button
            className="md:hidden border border-dashed border-zinc-800 px-3 py-2 rounded-md hover:border-green-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav
            id="main-nav"
            className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto flex-col md:flex-row gap-1 md:gap-6 bg-[#0a0a0a] md:bg-transparent p-4 md:p-0 border-b md:border-0 border-dashed border-zinc-800`}
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-2 md:py-1 rounded text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-green-500'
                    : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/buildingopen"
              className="px-2 py-2 md:py-1 rounded text-sm text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors"
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
