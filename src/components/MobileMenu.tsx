'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-arctic-deep-navy"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Logo + Close button */}
            <div className="flex items-center justify-between p-6 pb-4">
              <Image
                src="/images/logo.png"
                alt="Daniel's Arctic Touch logo"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-1 flex-col gap-1 px-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="rounded-lg px-4 py-3 text-2xl font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-arctic-ice-blue"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 px-6 pb-8">
              <Button
                asChild
                className="h-12 w-full bg-green-600 text-base font-semibold text-white hover:bg-green-700"
              >
                <a
                  href="https://wa.me/263771539643?text=Hi%20Daniel's%20Arctic%20Touch%2C%20I%20would%20like%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp Us
                </a>
              </Button>

              <Button
                asChild
                className="h-12 w-full bg-arctic-ice-blue text-base font-semibold text-white hover:bg-arctic-electric-blue"
              >
                <a href="tel:+263771539643">
                  <Phone className="size-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
