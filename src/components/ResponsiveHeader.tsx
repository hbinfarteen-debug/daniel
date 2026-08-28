'use client';

import { useState, useEffect, useCallback } from 'react';
import { Snowflake, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/MobileMenu';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SCROLL_THRESHOLD = 50;

export default function ResponsiveHeader() {
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > SCROLL_THRESHOLD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const openQuoteDialog = () => {
    window.dispatchEvent(new CustomEvent('open-quote'));
  };

  return (
    <>
      <header
        className={
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
          (isScrolled
            ? 'border-b border-white/10 bg-arctic-deep-navy/95 backdrop-blur-md'
            : 'bg-transparent')
        }
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Snowflake className="size-6 text-arctic-ice-blue" />
            <span className="hidden text-sm font-semibold tracking-wider text-white sm:inline-block">
              DANIEL'S ARCTIC TOUCH
            </span>
            <span className="text-sm font-semibold tracking-wider text-white sm:hidden">
              DAT
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right section */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+263771539643"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-4" />
              <span className="whitespace-nowrap">+263 771 539 643</span>
            </a>
            <Button
              onClick={openQuoteDialog}
              className="bg-arctic-ice-blue text-white hover:bg-arctic-electric-blue"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+263771539643"
              className="flex items-center justify-center rounded-md p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Call us"
            >
              <Phone className="size-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex items-center justify-center rounded-md p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
