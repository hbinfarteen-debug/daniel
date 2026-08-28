'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProblemSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="problem" className="bg-arctic-navy py-20 md:py-28">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -40 }
            }
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="relative aspect-video w-full overflow-hidden rounded-lg"
            style={{
              boxShadow:
                '0 0 60px rgba(22,139,255,0.25), 0 0 120px rgba(22,139,255,0.1)',
            }}
          >
            <Image
              src="/images/technician-work.webp"
              alt="Technician working on a cooling system"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 40 }
            }
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="flex flex-col"
          >
            <span className="text-xs tracking-[0.2em] text-arctic-ice-blue">
              WHEN COOLING FAILS
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              WHEN THE COOLING STOPS, BUSINESS CAN&apos;T.
            </h2>

            <p className="mt-4 text-white/70">
              A failed air conditioner, refrigerator or cold room can quickly
              become more than an inconvenience. Get professional assistance
              before downtime becomes costly.
            </p>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-arctic-ice-blue text-white hover:bg-arctic-electric-blue"
                asChild
              >
                <a href="#contact">
                  Request Assistance
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
