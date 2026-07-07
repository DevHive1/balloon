'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia L.',
    role: 'Event Planner',
    content: 'The LED screens transformed our event into a breathtaking experience. The quality and elegance were unmatched, truly a luxury service for discerning clients.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    role: 'Corporate Director',
    content: 'Professional, reliable, and incredibly talented. The projection mapping completely transformed our venue and left our guests amazed.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Mohamed',
    role: 'Wedding Coordinator',
    content: 'Balloon CG made our wedding clients dreams come true. The attention to detail and creative solutions are second to none.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Omar Khalil',
    role: 'Festival Organizer',
    content: 'Working with their team was an absolute pleasure. They delivered beyond our expectations and the visual experience was unforgettable.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--accent-pink)] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-[var(--accent-secondary)] rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-primary)] font-medium">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={24} className="fill-[var(--accent-orange)] text-[var(--accent-orange)]" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-[var(--text-main)] mb-8 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-lg">{testimonials[current].name}</div>
                <div className="text-[var(--text-muted)]">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-light)] flex items-center justify-center hover:border-[var(--accent-primary)] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-[var(--accent-primary)]'
                      : 'bg-[var(--text-muted)]'
                  }`}
                />
              ))}
            </div>
            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-light)] flex items-center justify-center hover:border-[var(--accent-primary)] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
