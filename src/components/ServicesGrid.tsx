'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Wind,
  ThermometerSnowflake,
  Wrench,
  Building2,
  Car,
  Home,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: 'Air Conditioning',
    slug: 'air-conditioning',
    description:
      'Expert installation, maintenance and repair of all air conditioning systems for residential and commercial spaces.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Cold & Freezer Rooms',
    slug: 'cold-freezer-rooms',
    description:
      'Custom cold room and freezer room solutions designed for your specific storage and temperature requirements.',
  },
  {
    icon: Wrench,
    title: 'Diagnostics & Repairs',
    slug: 'diagnostics-repairs',
    description:
      'Professional fault finding and repair services to get your cooling systems back up and running quickly.',
  },
  {
    icon: Building2,
    title: 'Commercial Refrigeration',
    slug: 'commercial-refrigeration',
    description:
      'Reliable refrigeration systems for supermarkets, restaurants, hotels and other commercial establishments.',
  },
  {
    icon: Car,
    title: 'Vehicle Air Conditioning',
    slug: 'vehicle-air-conditioning',
    description:
      'Complete vehicle AC services including regassing, leak detection, compressor repairs and system diagnostics.',
  },
  {
    icon: Home,
    title: 'Domestic Refrigeration',
    slug: 'domestic-refrigeration',
    description:
      'Keep your home cool and your food fresh with our domestic refrigerator and freezer repair services.',
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

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-arctic-ice-white py-20 md:py-28">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-arctic-deep-navy sm:text-3xl md:text-4xl">
            SOLUTIONS FOR EVERY COOLING NEED
          </h2>
          <p className="mt-4 text-muted-foreground">
            From domestic refrigeration to commercial cold rooms, Daniel&apos;s
            Arctic Touch provides professional cooling solutions.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group rounded-lg border border-arctic-soft-blue/50 bg-white p-6 transition-all duration-300 hover:border-arctic-ice-blue/30 hover:shadow-lg hover:shadow-arctic-ice-blue/10"
              >
                <div className="flex size-12 items-center justify-center rounded-md bg-arctic-soft-blue/50">
                  <Icon className="size-6 text-arctic-ice-blue" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-arctic-deep-navy">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-arctic-ice-blue transition-transform duration-200 group-hover:translate-x-1"
                >
                  Explore Service
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
