'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, FileText, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { ServiceData } from '@/lib/services-data';
import { waUrl } from '@/lib/constants';
import ResponsiveHeader from '@/components/ResponsiveHeader';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function ServicePage({ service }: { service: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const waUrlForService = waUrl(`Hi Daniel's Arctic Touch, I need help with ${service.title}.`);

  return (
    <>
      <ResponsiveHeader />
      <main>
        {/* Hero */}
        <section className="relative bg-arctic-deep-navy pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,139,255,0.08)_0%,_transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.25em] text-arctic-ice-blue sm:text-sm">OUR SERVICES</p>
              <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">{service.title}</h1>
              <p className="mt-4 text-lg text-white/70 max-w-2xl">{service.shortIntro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#1fb855] text-white gap-2 h-12 px-8" asChild>
                  <a href={waUrlForService} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2 h-12 px-8" asChild>
                  <a href="tel:+263771539643">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-arctic-deep-navy sm:text-3xl">Service Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{service.overview}</p>
            </div>
          </div>
        </section>

        {/* Common Problems + What's Included — side by side */}
        <section className="py-16 md:py-24 bg-arctic-ice-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-arctic-deep-navy sm:text-3xl">Common Problems We Solve</h2>
                <ul className="mt-6 space-y-3">
                  {service.problems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 w-5 h-5 shrink-0 text-arctic-ice-blue" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-arctic-deep-navy sm:text-3xl">What This Service Includes</h2>
                <ul className="mt-6 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 w-5 h-5 shrink-0 text-arctic-ice-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Professional */}
        <section className="py-16 md:py-24 bg-arctic-deep-navy">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Why Professional Servicing Matters</h2>
              <p className="mt-4 text-white/70 leading-relaxed">{service.whyProfessional}</p>
            </div>
          </div>
        </section>

        {/* Gallery Placeholder */}
        <section className="py-16 md:py-24 bg-arctic-ice-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="text-2xl font-bold text-arctic-deep-navy sm:text-3xl">Our Work</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/3] rounded-lg bg-arctic-soft-blue/30 border border-arctic-soft-blue/50 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Gallery image coming soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-arctic-deep-navy sm:text-3xl">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border border-arctic-soft-blue/60 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="flex items-center justify-between w-full p-5 text-left cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-arctic-deep-navy pr-4 text-sm sm:text-base">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-arctic-ice-blue shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-arctic-deep-navy">
          <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl max-w-2xl mx-auto">Ready to Get Started?</h2>
            <p className="text-white/60 mt-3 max-w-xl mx-auto">Contact us today for a free assessment and quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-arctic-ice-blue hover:bg-arctic-electric-blue text-white gap-2 h-12 px-8" onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}>
                <FileText className="w-5 h-5" />
                Request a Quote
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#1fb855] text-white gap-2 h-12 px-8" asChild>
                <a href={waUrlForService} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2 h-12 px-8" asChild>
                <a href="tel:+263771539643">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
