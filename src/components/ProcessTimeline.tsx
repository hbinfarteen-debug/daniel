'use client';

import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Tell Us The Problem', description: 'Call or WhatsApp and explain what is happening.' },
  { number: '02', title: 'We Diagnose', description: 'Assess the system and identify the underlying issue.' },
  { number: '03', title: 'We Fix It', description: 'Professional repair, installation or replacement.' },
  { number: '04', title: 'Keep It Running', description: 'Ongoing servicing and maintenance when required.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-arctic-ice-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-arctic-deep-navy tracking-tight">FROM PROBLEM TO SOLUTION</h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-arctic-ice-blue/20" />
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-arctic-deep-navy flex items-center justify-center relative z-10 arctic-glow">
                <span className="text-2xl font-bold text-arctic-ice-blue">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-arctic-deep-navy mt-5">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3.5 top-2 bottom-2 w-px bg-arctic-ice-blue/20" />
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <div className="absolute left-[-1.75rem] top-0.5 w-8 h-8 rounded-full bg-arctic-deep-navy flex items-center justify-center z-10">
                <span className="text-xs font-bold text-arctic-ice-blue">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-arctic-deep-navy">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
