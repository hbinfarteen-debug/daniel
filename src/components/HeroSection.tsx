'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BADGES = ['24HR SUPPORT', 'INSTALLATION', 'REPAIRS', 'MAINTENANCE'];

const ICE_PARTICLES = [
  { left: '8%',  size: 2, opacity: 0.3, delay: 0,    duration: 18 },
  { left: '15%', size: 1, opacity: 0.5, delay: 3,    duration: 22 },
  { left: '22%', size: 3, opacity: 0.2, delay: 1.5,  duration: 20 },
  { left: '35%', size: 2, opacity: 0.4, delay: 5,    duration: 16 },
  { left: '48%', size: 1, opacity: 0.6, delay: 2,    duration: 24 },
  { left: '58%', size: 2, opacity: 0.25, delay: 7,   duration: 19 },
  { left: '70%', size: 3, opacity: 0.2, delay: 4,    duration: 21 },
  { left: '78%', size: 1, opacity: 0.5, delay: 6,    duration: 17 },
  { left: '85%', size: 2, opacity: 0.35, delay: 1,   duration: 23 },
  { left: '92%', size: 1, opacity: 0.4, delay: 8,    duration: 20 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[85vh] w-full overflow-hidden sm:h-screen"
    >
      {/* Background image with slow cinematic scale */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Professional refrigeration and air conditioning service"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-arctic-deep-navy/80 via-arctic-deep-navy/60 to-transparent" />

      {/* Ice particles */}
      {ICE_PARTICLES.map((p, i) => (
        <div
          key={i}
          className="ice-particle absolute bottom-0 rounded-full bg-white"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Subtle blue ambient glow at bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-1/3 w-full -translate-x-1/2"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(22,139,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col items-center text-center"
        >
          {/* Eyebrow with horizontal lines */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-px w-6 sm:w-10 bg-arctic-electric-blue/60" />
            <span className="text-xs tracking-[0.3em] font-medium text-arctic-electric-blue sm:text-sm">
              DANIEL&apos;S ARCTIC TOUCH
            </span>
            <span className="h-px w-6 sm:w-10 bg-arctic-electric-blue/60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            REFRIGERATION &amp; AIR CONDITIONING, DONE RIGHT.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
          >
            Professional installation, diagnostics, repairs and maintenance for
            homes, vehicles and businesses.
          </motion.p>

          {/* Badges row */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="frost-border rounded-full px-3 py-1 text-xs tracking-wider text-arctic-electric-blue"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-arctic-ice-blue px-8 py-3.5 text-base font-semibold text-white hover:bg-arctic-electric-blue rounded-sm"
              onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}
            >
              Get a Quote
            </Button>
            <Button
              size="lg"
              className="border border-white/30 px-8 py-3.5 text-base font-semibold text-white bg-transparent hover:bg-white/10 hover:text-white rounded-sm"
              asChild
            >
              <a
                href="https://wa.me/263771539643?text=Hi%20Daniel%27s%20Arctic%20Touch%2C%20I%27d%20like%20to%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
