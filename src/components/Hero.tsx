'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Neo-Spatial Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.2}>
            <span className="text-neo-cyan uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">
              The Art of Visual Experience
            </span>
          </Reveal>

          <div className="relative">
            <Reveal delay={0.4} duration={1.2}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.1] tracking-tighter text-white">
                <span className="block">BEYOND</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-cyan via-neo-purple to-neo-magenta">
                  IMAGINATION
                </span>
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.8}>
            <p className="text-white/50 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light tracking-wide leading-relaxed">
              We engineer immersive visual masterpieces. From architectural projection 
              mapping to high-fidelity LED installations that redefine space and time.
            </p>
          </Reveal>

          <Reveal delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.a
                href="#portfolio"
                className="flat-card px-8 py-4 rounded-full text-white font-medium hover:bg-neo-cyan/20 transition-all duration-300 group inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Portfolio
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neo-void to-transparent z-10 pointer-events-none" />
      <div className="section-divider" />
    </section>
  );
}