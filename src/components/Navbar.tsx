'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/reading-list', label: 'Reading List' },
    { href: '/search', label: 'Search' },
    { href: '/about', label: 'About Me' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="relative group text-2xl font-bold px-3 py-2 inline-block">
            <span className="relative z-10">G</span>
            <span className="absolute inset-0 rounded-md blur-md scale-110 -z-10 bg-yellow-300 opacity-0 group-hover:opacity-60 transition-all duration-300" />
        </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'relative group px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-black font-semibold' : 'text-gray-800 hover:text-black'
                  )}
                >
                  <span className="relative z-10">{label}</span>
                  {/* Glow on hover or active */}
                  {(isActive || true) && (
                    <span
                      className={cn(
                        'absolute inset-0 rounded-md blur-md scale-110 -z-10 transition-all duration-300',
                        isActive
                          ? 'bg-yellow-400 opacity-70 animate-pulse'
                          : 'bg-yellow-300 opacity-0 group-hover:opacity-60'
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white/80 rounded-lg p-4 shadow-lg backdrop-blur-md">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'relative group px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-black font-semibold' : 'text-gray-800 hover:text-black'
                )}
              >
                <span className="relative z-10">{label}</span>
                {(isActive || true) && (
                  <span
                    className={cn(
                      'absolute inset-0 rounded-md blur-md scale-110 -z-10 transition-all duration-300',
                      isActive
                        ? 'bg-yellow-400 opacity-70 animate-pulse'
                        : 'bg-yellow-300 opacity-0 group-hover:opacity-60'
                    )}
                  />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}