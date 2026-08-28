'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, Clock, Wrench, Settings, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TRUST_ITEMS = [
  { icon: Clock, label: '24HR ASSISTANCE' },
  { icon: Wrench, label: 'PROFESSIONAL REPAIRS' },
  { icon: Settings, label: 'INSTALLATION & MAINTENANCE' },
  { icon: ShieldCheck, label: 'RESIDENTIAL & COMMERCIAL' },
];

const WA_URL = 'https://wa.me/263771539643?text=Hi%20Daniel%27s%20Arctic%20Touch%2C%20I%20need%20assistance%20with%20my%20cooling%2Frefrigeration%20system.%20Please%20let%20me%20know%20how%20I%20can%20arrange%20a%20service.';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-[720px] h-[88vh] md:h-[88vh]"
    >
      {/* Background image — slow cinematic parallax */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.04] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image
          src="/images/hero-v2.png"
          alt="Professional refrigeration technician servicing an air conditioning system"
          fill
          className="object-cover object-right md:object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Strong left-to-right navy gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B43]/95 via-[#071B43]/75 to-[#071B43]/30 md:via-[#071B43]/60" />
      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071B43]/60 to-transparent" />

      {/* Very subtle ice particles — minimal, not a snow scene */}
      {[0,1,2,3,4].map(i => (
        <div
          key={i}
          className="ice-particle absolute bottom-0 rounded-full bg-white"
          style={{
            left: `${12 + i * 20}%`,
            width: 1 + (i % 2),
            height: 1 + (i % 2),
            opacity: 0.15 + (i * 0.05),
            animationDelay: `${i * 3}s`,
            animationDuration: `${20 + i * 3}s`,
          }}
        />
      ))}

      {/* Content — left-aligned, conversion-focused */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[600px]"
        >
          {/* Eyebrow — local relevance */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.25em] text-[#168FFF] sm:text-sm"
          >
            PROFESSIONAL COOLING SERVICES &bull; BULAWAYO
          </motion.p>

          {/* Headline — problem + solution */}
          <motion.h1
            variants={fadeUp}
            className="mt-3 text-[clamp(2.5rem,11vw,4rem)] font-[800] leading-[0.98] text-white sm:mt-4 sm:text-[clamp(3rem,5vw,5.2rem)] sm:leading-[1.02]"
          >
            WHEN THE COOLING
            <br />
            STOPS,{' '}
            <span className="text-[#4AB5FF]">CALL THE EXPERTS.</span>
          </motion.h1>

          {/* Subheadline — clear value */}
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[580px] text-[17px] leading-relaxed text-white/75 sm:mt-5 sm:text-lg sm:leading-[1.6]"
          >
            Air conditioning, refrigeration and cold-room solutions — from
            installation and repairs to ongoing maintenance.
          </motion.p>

          {/* CTA buttons — WhatsApp PRIMARY */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            {/* Primary — WhatsApp */}
            <Button
              asChild
              size="lg"
              className="group h-13 w-full gap-2.5 bg-[#168FFF] px-7 text-[15px] font-semibold text-white shadow-lg shadow-[#168FFF]/25 transition-all duration-300 hover:bg-[#4AB5FF] hover:shadow-xl hover:shadow-[#4AB5FF]/30 sm:h-14 sm:w-auto sm:px-9 sm:text-base"
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WHATSAPP A TECHNICIAN
                <span className="hidden text-xs font-normal text-white/60 sm:inline ml-1">— Fast response</span>
              </a>
            </Button>

            {/* Secondary — Call */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group h-13 w-full gap-2.5 border-white/25 bg-white/5 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 sm:h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              <a href="tel:+263771539643" className="flex items-center gap-2.5">
                <Phone className="h-5 w-5" />
                CALL NOW
              </a>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            className="mt-8 hidden border-t border-white/10 pt-6 sm:mt-10 sm:block"
          >
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {TRUST_ITEMS.map((item, idx) => (
                <span key={item.label} className="flex items-center gap-1.5 text-[11px] tracking-wider text-white/50">
                  <item.icon className="h-3.5 w-3.5 text-[#168FFF]/70" strokeWidth={1.5} />
                  {item.label}
                  {idx < TRUST_ITEMS.length - 1 && <span className="ml-1 hidden text-white/15 md:inline">|</span>}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}