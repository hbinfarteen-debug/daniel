'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { waUrl } from '@/lib/constants';

const WA_URL = waUrl("Hi Daniel's Arctic Touch, I need assistance with my cooling/refrigeration system. Please let me know how I can arrange a service.");

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden flex"
    >
      {/* Background image — full bleed, cinematic */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{ scale: bgScale }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        style={{ opacity: bgOpacity }}
      >
        <Image
          src="/images/hero-v2.webp"
          alt="Professional refrigeration technician servicing an air conditioning system"
          fill
          className="object-cover object-center md:object-right"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Atmosphere: radial ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(70, 181, 255, 0.08) 0%, transparent 70%)',
        }} />
        {/* Noise grain overlay */}
        <div className="fixed inset-0 pointer-events-none z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Subtle scrim for text readability — only where needed */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#071B43]/90 via-[#071B43]/40 to-transparent md:via-[#071B43]/30" />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-t from-arctic-deep-navy via-arctic-deep-navy/30 to-transparent" />

      {/* Content — Asymmetric Split (Architecture B) */}
      <motion.div
        className="relative z-20 flex min-h-[100dvh] items-end lg:items-center px-6 lg:px-16 pb-10 lg:pb-0"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl lg:max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="font-mono uppercase tracking-[0.18em] text-xs text-[#4AB5FF]/90"
          >
            EMERGENCY COOLING & REFRIGERATION
          </motion.p>

          {/* Hero Heading — viewport-scale, tight tracking */}
          <motion.h1
            variants={fadeUp}
            className="mt-2.5 text-[clamp(2.5rem,6vw,7rem)] font-[800] leading-[0.88] tracking-[-0.035em] text-white text-wrap-balance max-w-[22ch]"
          >
            WHEN THE COOLING
            <br />
            <span className="relative">STOPS,</span>
            <br />
            <span className="text-[#4AB5FF]">CALL THE EXPERTS.</span>
          </motion.h1>

          {/* Single CTA — WhatsApp only */}
          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className="group h-14 px-8 md:px-10 gap-3 bg-[#168FFF] text-white font-semibold text-base shadow-lg shadow-[#168FFF]/25 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#4AB5FF] hover:shadow-xl hover:shadow-[#4AB5FF]/30 hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0"
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg className="h-5.5 w-5.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WHATSAPP A TECHNICIAN</span>
                <span className="hidden sm:inline-block w-px h-6 bg-white/20" aria-hidden="true" />
                <span className="hidden sm:inline text-sm font-normal text-white/70">Fast response</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}