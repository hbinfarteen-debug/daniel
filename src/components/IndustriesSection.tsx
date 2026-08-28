'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Building, Factory, Car, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const categories: Category[] = [
  {
    icon: Home,
    title: 'Homes',
    items: ['Air Conditioning', 'Refrigerators', 'Freezers'],
  },
  {
    icon: Building,
    title: 'Businesses',
    items: ['Offices', 'Restaurants', 'Retail Shops'],
  },
  {
    icon: Factory,
    title: 'Commercial & Industrial',
    items: ['Cold Rooms', 'Freezer Rooms', 'Commercial Refrigeration'],
  },
  {
    icon: Car,
    title: 'Vehicles',
    items: ['Vehicle AC', 'Diagnostics', 'Repairs'],
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

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="industries" className="bg-arctic-ice-white py-20 md:py-28">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-arctic-deep-navy sm:text-3xl md:text-4xl">
            COOLING SOLUTIONS FOR
          </h2>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="rounded-lg border border-arctic-soft-blue/50 bg-white p-6 transition-all duration-300 hover:border-arctic-ice-blue/30"
              >
                <div className="flex size-12 items-center justify-center rounded-md bg-arctic-soft-blue/50">
                  <Icon className="size-6 text-arctic-ice-blue" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-arctic-deep-navy">
                  {category.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 shrink-0 text-arctic-ice-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
