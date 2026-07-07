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
    color: '#00f3ff',
  },
  {
    icon: Layers,
    title: 'Projection Mapping',
    subtitle: 'Architectural Art',
    description: 'Turning architecture into a canvas. Our 3D projection mapping transforms static buildings into living, breathing stories that captivate audiences.',
    features: ['Architectural Mapping', 'Depth Analysis', 'Immersive Storytelling'],
    color: '#7000ff',
  },
  {
    icon: Palette,
    title: 'Creative Services',
    subtitle: 'Visual Strategy',
    description: 'From concept to execution, we craft visual identities that command attention. Our creative team blends art and technology to deliver unmatched impact.',
    features: ['Art Direction', 'Visual Strategy', 'Concept Art'],
    color: '#ff00ff',
  },
  {
    icon: Zap,
    title: 'Live Events',
    subtitle: 'Real-time Orchestration',
    description: 'Full-service AV production for high-stakes corporate and public events. We ensure every frame is perfectly timed and every pixel is precise.',
    features: ['Live Switching', 'Real-time VFX', 'Technical Direction'],
    color: '#00f3ff',
  },
  {
    icon: Lightbulb,
    title: 'Brand Activation',
    subtitle: 'Interactive Experiences',
    description: 'Interactive installations that bridge the gap between brands and audiences. We create moments that people remember and share.',
    features: ['Interactive Sensors', 'Gamified Visuals', 'Social Integration'],
    color: '#7000ff',
  },
  {
    icon: Eye,
    title: 'Visual Design',
    subtitle: 'Precision Engineering',
    description: 'Professional visual design services to elevate your brand presence. We focus on the intersection of luxury and technology.',
    features: ['Pre-visualization', 'Color Grading', 'Asset Optimization'],
    color: '#ff00ff',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neo-cyan opacity-[0.03] blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <Reveal delay={0.2}>
            <span className="text-neo-cyan uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
              Our Expertise
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Tailored to Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-cyan to-neo-purple">
                Needs
              </span>
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
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-500"
                  style={{ color: service.color }}
                >
                  <service.icon size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                  {service.subtitle}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-neo-cyan transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-white/50 text-lg mb-10 max-w-md leading-relaxed font-light">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {service.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="text-[9px] uppercase tracking-widest px-3 py-1 border border-white/10 text-white/50 group-hover:border-neo-cyan/50 transition-colors"
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
                <ArrowRight size={14} className="text-neo-cyan" />
              </motion.a>

              {/* Subtle Background Accent */}
              <div 
                className="absolute -right-10 -bottom-10 w-64 h-64 opacity-20 blur-3xl rounded-full pointer-events-none group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}