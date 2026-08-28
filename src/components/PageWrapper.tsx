'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ResponsiveHeader from '@/components/ResponsiveHeader';
import HeroSection from '@/components/HeroSection';
import EmergencyCTA from '@/components/EmergencyCTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const ServicesGrid = dynamic(() => import('@/components/ServicesGrid'));
const ValueProposition = dynamic(() => import('@/components/ValueProposition'));
const ProblemSolution = dynamic(() => import('@/components/ProblemSolution'));
const IndustriesSection = dynamic(() => import('@/components/IndustriesSection'));
const WorkGallery = dynamic(() => import('@/components/WorkGallery'));
const ProcessTimeline = dynamic(() => import('@/components/ProcessTimeline'));
const ProblemSelector = dynamic(() => import('@/components/ProblemSelector'));
const AboutSection = dynamic(() => import('@/components/AboutSection'));
const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'));
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'));
const FinalCTA = dynamic(() => import('@/components/FinalCTA'));
const QuoteForm = dynamic(() => import('@/components/QuoteForm'));

export default function PageWrapper() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handler = () => setQuoteOpen(true);
    window.addEventListener('open-quote', handler);
    return () => window.removeEventListener('open-quote', handler);
  }, []);

  return (
    <>
      <ResponsiveHeader />
      <main>
        <HeroSection />
        <EmergencyCTA />
        <ServicesGrid />
        <ValueProposition />
        <ProblemSolution />
        <IndustriesSection />
        <WorkGallery />
        <ProcessTimeline />
        <ProblemSelector />
        <AboutSection />
        <TestimonialCarousel />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <QuoteForm isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
