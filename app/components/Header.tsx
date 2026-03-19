'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname.startsWith('/entropy')) return null;

  return (
    <header className="border-b border-zinc-800 bg-[#0a0a0a]/92 backdrop-blur-[12px] sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 p-2" onClick={() => setMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Building Open" width="32" height="28" className="flex-shrink-0" />
            <span className="text-[13px] text-zinc-500 hidden sm:inline">Open source AI tools</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
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
                  pathname === item.href || pathname.startsWith(item.href)
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
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
