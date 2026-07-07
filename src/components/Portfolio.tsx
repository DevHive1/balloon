'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Corporate Gala 2024',
    category: 'LED Screens',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    description: 'Full LED wall setup for annual corporate gala with custom content design.',
  },
  {
    id: 2,
    title: 'Music Festival',
    category: 'Projection Mapping',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    description: 'Immersive building projection mapping for a 3-day music festival.',
  },
  {
    id: 3,
    title: 'Product Launch',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    description: 'Dynamic visual content for tech product launch event.',
  },
  {
    id: 4,
    title: 'Wedding Reception',
    category: 'LED Screens',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    description: 'Romantic LED display with personalized content for wedding.',
  },
  {
    id: 5,
    title: 'Conference AV',
    category: 'Live Events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    description: 'Complete AV production for international business conference.',
  },
  {
    id: 6,
    title: 'Brand Activation',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    description: 'Interactive visual installation for retail brand activation.',
  },
];

const categories = ['All', 'LED Screens', 'Projection Mapping', 'Creative', 'Live Events'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neo-cyan font-medium">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-cyan to-neo-magenta">Work</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Explore our collection of stunning visual productions that have transformed events worldwide.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all text-sm font-medium ${
                activeCategory === category
                  ? 'bg-neo-cyan text-neo-void'
                  : 'flat-card text-white/70 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="flat-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neo-void to-transparent opacity-60" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-neo-void/60"
                  >
                    <Play size={48} className="text-white" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-neo-cyan uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neo-void/90 backdrop-blur-md p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flat-card max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <span className="text-xs font-medium text-neo-cyan uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white">{selectedProject.title}</h3>
              <p className="text-white/50">{selectedProject.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-neo-cyan hover:text-white transition-colors">
                Start Similar Project
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="section-divider" />
    </section>
  );
}