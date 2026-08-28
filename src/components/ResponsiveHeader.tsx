'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileMenu from '@/components/MobileMenu';
import { PHONE_TEL, PHONE_DISPLAY } from '@/lib/constants';

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
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
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

  const navHref = (anchor: string) => isHome ? anchor : `/${anchor}`;

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
            href={navHref('#home')}
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="Daniel's Arctic Touch - Home"
          >
            <Image
              src="/images/logo.webp"
              alt="Daniel's Arctic Touch logo"
              width={140}
              height={40}
              className="h-9 w-auto sm:h-10 object-contain"
              priority
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={navHref(link.href)}
                className="rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right section — WhatsApp highest priority */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-4" />
              <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
            </a>
            <Button
              onClick={openQuoteDialog}
              className="gap-2 bg-[#168FFF] text-white hover:bg-[#4AB5FF] shadow-md shadow-[#168FFF]/20"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={PHONE_TEL}
              className="flex items-center justify-center rounded-md p-2.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
