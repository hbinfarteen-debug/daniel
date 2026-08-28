'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = ['EST. 2024', '24HR SUPPORT', 'RESIDENTIAL', 'COMMERCIAL'];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-arctic-navy">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden arctic-glow-strong">
              <Image
                src="/images/about-portrait.png"
                alt="Professional refrigeration technician at Daniel's Arctic Touch"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-arctic-ice-blue/20 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="tracking-[0.2em] text-xs text-arctic-ice-blue font-semibold">MEET DANIEL&apos;S ARCTIC TOUCH</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
              THE COOLEST TOUCH IN THE BUSINESS.
            </h2>
            <p className="text-white/70 mt-5 leading-relaxed">
              Daniel&apos;s Arctic Touch is a professional refrigeration and air-conditioning service provider established in 2024. We specialise in installation, diagnostics, repairs and maintenance for residential, commercial and industrial clients across Zimbabwe.
            </p>
            <p className="text-white/70 mt-3 leading-relaxed">
              Whether it&apos;s a domestic refrigerator, a vehicle air-conditioning system, or a commercial cold room, our team delivers professional, reliable service when you need it most — 24 hours a day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="text-center p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <p className="text-sm font-semibold text-arctic-ice-blue">{stat}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="outline" className="border-arctic-ice-blue/30 text-white hover:bg-arctic-ice-blue/10 gap-2">
                <a href="#contact">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
