'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Film Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(var(--border-light) 1px, transparent 1px),
                             linear-gradient(90deg, var(--border-light) 1px, transparent 1px)`,
            backgroundSize: '120px 120px'
          }}
        />
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.2}>
            <span className="text-[var(--accent-primary)] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block opacity-80">
              The Art of Visual Experience
            </span>
          </Reveal>

          <div className="relative">
            <Reveal delay={0.4} duration={1.2}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tighter">
                <span className="block">BEYOND</span>
                <span className="text-gold-gradient block">IMAGINATION</span>
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.8}>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light tracking-wide leading-relaxed">
              We engineer immersive visual masterpieces. From architectural projection 
              mapping to high-fidelity LED installations that redefine space and time.
            </p>
          </Reveal>

          <Reveal delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.a
                href="#portfolio"
                className="btn-luxury inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Portfolio
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="text-white/40 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold"
                whileHover={{ x: 5 }}
              >
                Inquire Now
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Cinematic Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10" />
    </section>
  );
}
