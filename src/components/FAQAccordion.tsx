'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you offer emergency refrigeration repairs?',
    answer: "Daniel's Arctic Touch provides 24HR assistance and support for refrigeration and air-conditioning issues. Contact us anytime via phone or WhatsApp.",
  },
  {
    question: 'Do you install air conditioners?',
    answer: 'Yes. The business provides professional air-conditioning installation services for residential and commercial properties.',
  },
  {
    question: 'Do you service commercial refrigeration equipment?',
    answer: 'Yes. Services and maintenance are available for different types of commercial refrigeration equipment including cold rooms and freezer rooms.',
  },
  {
    question: 'Do you repair domestic refrigerators?',
    answer: 'Yes. Domestic refrigerator and freezer repairs are part of the service offering. We handle all major brands and models.',
  },
  {
    question: 'Do you work on vehicle air conditioning?',
    answer: 'Yes. Vehicle air-conditioning diagnostics, servicing and repairs are offered for all vehicle types.',
  },
  {
    question: 'Do you install cold and freezer rooms?',
    answer: "Yes. Cold and freezer room installations are one of the company's core services, suitable for restaurants, supermarkets and industrial facilities.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-arctic-ice-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-arctic-deep-navy tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="border border-arctic-soft-blue/60 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex items-center justify-between w-full p-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-arctic-deep-navy pr-4 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-arctic-ice-blue flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}