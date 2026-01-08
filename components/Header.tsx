'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-border'
          : 'bg-transparent backdrop-blur-md border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
              isScrolled
                ? 'text-foreground hover:text-muted-foreground'
                : 'text-white hover:text-white/80'
            }`}
          >
            ONEHO
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`text-sm font-normal transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`text-sm font-normal transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className={`text-sm font-normal transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Solutions
            </Link>
            <Link
              href="/support"
              className={`text-sm font-normal transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Support
            </Link>
            <Link
              href="/install"
              className={`text-sm font-normal transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground/80 hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Install
            </Link>
          </nav>

          <button
            className={`transition-colors duration-300 ${
              isScrolled
                ? 'text-foreground/80 hover:text-foreground'
                : 'text-white/90 hover:text-white'
            }`}
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
