'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/community', label: 'Community' },
  { href: '/badge', label: 'Badge' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-[#0a0a0a] sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#0a0a0a] px-6 py-4 absolute w-full shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              href="/projects"
              className="text-base text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              All Projects
            </Link>
            <Link
              href="/manifesto"
              className="text-base text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Manifesto
            </Link>
            <Link
              href="/community"
              className="text-base text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Community
            </Link>
            <Link
              href="/badge"
              className="text-base text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Badge
            </Link>
            <a
              href="https://github.com/buildingopen"
              className="text-base text-zinc-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
