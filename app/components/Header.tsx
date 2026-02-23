'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-zinc-800 bg-[#0a0a0a] sticky top-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Building Open" width="32" height="28" className="flex-shrink-0" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
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
            <Link
              href="/community"
              className="px-3 py-1.5 rounded text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Community
            </Link>
            <Link
              href="/badge"
              className="px-3 py-1.5 rounded text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Badge
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
