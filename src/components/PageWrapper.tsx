'use client';

import { useState, useEffect } from 'react';
import ResponsiveHeader from '@/components/ResponsiveHeader';
import HeroSection from '@/components/HeroSection';
import EmergencyCTA from '@/components/EmergencyCTA';
import ServicesGrid from '@/components/ServicesGrid';
import ValueProposition from '@/components/ValueProposition';
import ProblemSolution from '@/components/ProblemSolution';
import IndustriesSection from '@/components/IndustriesSection';
import WorkGallery from '@/components/WorkGallery';
import ProcessTimeline from '@/components/ProcessTimeline';
import ProblemSelector from '@/components/ProblemSelector';
import AboutSection from '@/components/AboutSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import QuoteForm from '@/components/QuoteForm';

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
