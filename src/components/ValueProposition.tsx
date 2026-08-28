'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    number: '01',
    title: '24HR Assistance',
    description:
      'Cooling emergencies don\'t follow business hours.',
  },
  {
    number: '02',
    title: 'Professional Diagnostics',
    description:
      'Identify the problem before wasting money on unnecessary repairs.',
  },
  {
    number: '03',
    title: 'Installation & Maintenance',
    description:
      'Keep your systems performing efficiently for longer.',
  },
  {
    number: '04',
    title: 'Residential & Commercial',
    description:
      'Solutions for homes, vehicles, businesses and commercial facilities.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function ValueProposition() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="value" className="bg-arctic-deep-navy py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            THE ARCTIC TOUCH DIFFERENCE
          </h2>
          <p className="mt-4 text-white/60">
            Professional service when reliability matters.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-arctic-ice-blue/30 hover:bg-white/10 md:p-8"
            >
              <span className="text-4xl font-bold text-arctic-ice-blue/30">
                {feature.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
