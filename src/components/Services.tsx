'use client';

import { motion } from 'framer-motion';
import { Monitor, Layers, Palette, Zap, Lightbulb, Eye, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    icon: Monitor,
    title: 'LED Screen Content',
    subtitle: 'High-Fidelity Visuals',
    description: 'Bespoke high-resolution visual content designed specifically for large-scale LED displays. We create seamless, immersive loops that transform venues into digital landscapes.',
    features: ['4K/8K Resolution', 'Custom Motion Graphics', 'Seamless Looping'],
    color: 'var(--accent-primary)',
  },
  {
    icon: Layers,
    title: 'Projection Mapping',
    subtitle: 'Architectural Art',
    description: 'Turning architecture into a canvas. Our 3D projection mapping transforms static buildings into living, breathing stories that captivate audiences.',
    features: ['Architectural Mapping', 'Depth Analysis', 'Immersive Storytelling'],
    color: 'var(--accent-secondary)',
  },
  {
    icon: Palette,
    title: 'Creative Services',
    subtitle: 'Visual Strategy',
    description: 'From concept to execution, we craft visual identities that command attention. Our creative team blends art and technology to deliver unmatched impact.',
    features: ['Art Direction', 'Visual Strategy', 'Concept Art'],
    color: 'var(--accent-primary)',
  },
  {
    icon: Zap,
    title: 'Live Events',
    subtitle: 'Real-time Orchestration',
    description: 'Full-service AV production for high-stakes corporate and public events. We ensure every frame is perfectly timed and every pixel is precise.',
    features: ['Live Switching', 'Real-time VFX', 'Technical Direction'],
    color: 'var(--accent-secondary)',
  },
  {
    icon: Lightbulb,
    title: 'Brand Activation',
    subtitle: 'Interactive Experiences',
    description: 'Interactive installations that bridge the gap between brands and audiences. We create moments that people remember and share.',
    features: ['Interactive Sensors', 'Gamified Visuals', 'Social Integration'],
    color: 'var(--accent-primary)',
  },
  {
    icon: Eye,
    title: 'Visual Design',
    subtitle: 'Precision Engineering',
    description: 'Professional visual design services to elevate your brand presence. We focus on the intersection of luxury and technology.',
    features: ['Pre-visualization', 'Color Grading', 'Asset Optimization'],
    color: 'var(--accent-secondary)',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--accent-primary)] opacity-[0.03] blur-[120px] pointer-events-none" />
      
      <div className="section-container">
        <div className="mb-24">
          <Reveal delay={0.2}>
            <span className="text-[var(--accent-primary)] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
              Our Expertise
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Tailored to Your <br />
              <span className="text-gold-gradient">Needs</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-10 h-10 rounded-full border border-[var(--border-light)] flex items-center justify-center group-hover:bg-[var(--accent-primary)] group-hover:text-black transition-all duration-500"
                  style={{ color: service.color }}
                >
                  <service.icon size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">
                  {service.subtitle}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-6 group-hover:text-gold-gradient transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-[var(--text-muted)] text-lg mb-10 max-w-md leading-relaxed font-light">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {service.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="text-[9px] uppercase tracking-widest px-3 py-1 border border-[var(--border-light)] text-[var(--text-muted)] group-hover:border-[var(--accent-primary)] transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white group-hover:gap-4 transition-all"
                whileHover={{ x: 5 }}
              >
                View Case Study
                <ArrowRight size={14} className="text-[var(--accent-primary)]" />
              </motion.a>

              {/* Subtle Background Accent */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[var(--accent-primary)] opacity-[0.02] blur-3xl rounded-full pointer-events-none group-hover:opacity-10 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
