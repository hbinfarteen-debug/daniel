'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Tendai M.',
    location: 'Harare',
    text: "Daniel's Arctic Touch repaired our commercial cold room within hours of our call. Professional, efficient, and affordable. We haven't had any issues since.",
    rating: 5,
  },
  {
    name: 'Farai K.',
    location: 'Bulawayo',
    text: "I called at 10pm when our restaurant's refrigeration failed. They arrived promptly and had us back up and running before dawn. Incredible service.",
    rating: 5,
  },
  {
    name: 'Grace N.',
    location: 'Harare',
    text: 'Professional installation of our split AC units. The team was clean, polite, and knew exactly what they were doing. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Joseph R.',
    location: 'Mutare',
    text: "My vehicle AC had been broken for months. Daniel's Arctic Touch diagnosed and fixed it the same day. Best refrigeration service in Zimbabwe.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 md:py-28 bg-arctic-ice-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-arctic-deep-navy tracking-tight">WHAT OUR CUSTOMERS SAY</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl text-arctic-deep-navy/80 leading-relaxed italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-arctic-deep-navy">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-arctic-soft-blue flex items-center justify-center text-arctic-deep-navy hover:bg-arctic-soft-blue/50 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current ? 'bg-arctic-ice-blue w-6' : 'bg-arctic-soft-blue'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-arctic-soft-blue flex items-center justify-center text-arctic-deep-navy hover:bg-arctic-soft-blue/50 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
