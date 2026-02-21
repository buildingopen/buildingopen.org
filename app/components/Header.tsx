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
    <header className="border-b border-zinc-800 bg-[#0a0a0a]">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Building Open" width="32" height="28" className="flex-shrink-0" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Nav */}
          <nav
            className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto flex-col md:flex-row gap-1 md:gap-1 bg-[#0a0a0a] md:bg-transparent p-4 md:p-0 border-b md:border-0 border-zinc-800`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 md:py-1.5 rounded text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-white bg-zinc-800'
                    : 'text-zinc-500 hover:text-white'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/buildingopen"
              className="px-3 py-2 md:py-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
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
