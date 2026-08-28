'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-arctic-deep-navy overflow-hidden">
      {/* Atmospheric effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-arctic-navy via-arctic-deep-navy to-arctic-navy animated-drift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,139,255,0.1)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            LET&apos;S GET YOUR COOLING SYSTEM BACK ON TRACK.
          </h2>
          <p className="text-white/60 mt-4 text-lg">Installation. Repairs. Maintenance. 24HR Assistance.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              className="bg-arctic-ice-blue hover:bg-arctic-electric-blue text-white gap-2 h-12 px-8 text-base"
              onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}
            >
              <FileText className="w-5 h-5" />
              Request a Quote
            </Button>

            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#1fb855] text-white gap-2 h-12 px-8 text-base"
              asChild
            >
              <a href="https://wa.me/263771539643?text=Hi%20Daniel's%20Arctic%20Touch%2C%20I%20would%20like%20assistance." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 gap-2 h-12 px-8 text-base"
              asChild
            >
              <a href="tel:+263771539643">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
