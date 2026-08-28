'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EmergencyCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative bg-arctic-deep-navy">
      {/* Pulsing accent line at top */}
      <div className="pulse-glow h-px w-full bg-arctic-ice-blue" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-8 sm:px-6 md:flex-row md:justify-between md:gap-12 lg:px-8 lg:py-10"
      >
        {/* Left side - copy */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex items-center gap-2">
            <span className="animate-pulse inline-block size-2 rounded-full bg-green-400" />
            <span className="text-xs font-semibold tracking-[0.25em] text-arctic-ice-blue">
              24HR ASSISTANCE &amp; SUPPORT
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            COOLING SYSTEM DOWN?
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/70 sm:text-base">
            Don&apos;t let a small refrigeration or air-conditioning problem
            become an expensive one.
          </p>
        </div>

        {/* Right side — WhatsApp primary, Call secondary */}
        <div className="flex flex-col items-center gap-3 sm:flex-row md:items-end">
          <Button
            size="lg"
            className="pulse-glow flex items-center gap-2 bg-[#25D366] px-6 py-6 text-base font-semibold text-white hover:bg-[#20bd5a] sm:px-8 sm:text-lg rounded-sm shadow-lg shadow-[#25D366]/25"
            asChild
          >
            <a
              href="https://wa.me/263771539643?text=Hi%20Daniel's%20Arctic%20Touch%2C%20I%20need%20urgent%20assistance%20with%20my%20cooling%20system."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2 border-white/20 bg-white/5 px-6 py-6 text-base font-semibold text-white hover:bg-white/10 hover:border-white/40 sm:px-8 sm:text-lg rounded-sm"
            asChild
          >
            <a href="tel:+263771539643">
              <Phone className="size-5" />
              Call +263 771 539 643
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Bottom frost border */}
      <div className="h-px w-full border-b border-arctic-ice-blue/20" />
    </div>
  );
}
