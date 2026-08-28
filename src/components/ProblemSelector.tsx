'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const options = [
  { label: "My AC isn't cooling", service: 'air conditioning', msg: "I need help with my air conditioning. It isn't cooling properly." },
  { label: 'My refrigerator is not getting cold', service: 'refrigerator', msg: 'My refrigerator is not getting cold. I would like to arrange an inspection/repair.' },
  { label: 'My cold room is not working', service: 'cold room', msg: 'My cold room is not working. I need urgent assistance.' },
  { label: 'I need a new installation', service: 'installation', msg: 'I would like a quote for a new cooling system installation.' },
  { label: 'My vehicle AC is not working', service: 'vehicle air conditioning', msg: "I need help with my vehicle air conditioning. I would like to arrange an inspection/repair." },
  { label: 'I need maintenance', service: 'maintenance', msg: 'I would like to schedule maintenance for my cooling system.' },
  { label: 'Something else', service: 'general', msg: 'I would like assistance with a refrigeration or cooling issue.' },
];

export default function ProblemSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedOption = options.find(o => o.label === selected);
  const waMessage = selectedOption
    ? `Hi Daniel's Arctic Touch, ${selectedOption.msg}`
    : '';
  const waUrl = `https://wa.me/263771539643?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="py-20 md:py-28 bg-arctic-soft-blue/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-arctic-deep-navy tracking-tight">WHAT DO YOU NEED HELP WITH?</h2>
          <p className="text-muted-foreground mt-3">Select the problem and we&apos;ll help you take the next step.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {options.map((opt, idx) => (
            <motion.button
              key={opt.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setSelected(selected === opt.label ? null : opt.label)}
              className={`flex items-center gap-3 p-4 rounded-lg border text-left transition-all duration-300 cursor-pointer w-full text-sm font-medium sm:text-base ${
                selected === opt.label
                  ? 'bg-arctic-ice-blue text-white border-arctic-ice-blue shadow-lg shadow-arctic-ice-blue/20'
                  : 'bg-white text-arctic-deep-navy border-arctic-soft-blue/60 hover:border-arctic-ice-blue/40 hover:shadow-md'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                selected === opt.label ? 'border-white bg-white' : 'border-arctic-ice-blue/40'
              }`}
              >
                {selected === opt.label && <CheckCircle2 className="w-5 h-5 text-arctic-ice-blue" />}
              </div>
              {opt.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected && selectedOption && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 p-6 bg-white rounded-lg border border-arctic-ice-blue/20 arctic-glow text-center">
                <p className="text-sm text-muted-foreground mb-4">We can help with that. Get in touch now.</p>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1fb855] text-white gap-2 h-12 px-8">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp A Technician
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
