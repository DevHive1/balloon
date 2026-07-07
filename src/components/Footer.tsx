'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Share2, Globe, MessageSquare } from 'lucide-react';

// Fallback icons defined first to avoid hoisting errors
const InstagramFallback = ({ size = 20 }) => <Share2 size={size} />;
const FacebookFallback = ({ size = 20 }) => <Globe size={size} />;
const LinkedinFallback = ({ size = 20 }) => <MessageSquare size={size} />;

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/ballooncg', icon: InstagramFallback },
  { name: 'Facebook', href: 'https://facebook.com/ballooncg', icon: FacebookFallback },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ballooncg', icon: LinkedinFallback },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)]">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-gradient mb-4"
            >
              Balloon CG Visuals
            </motion.h3>
            <p className="text-[var(--text-muted)] mb-6 max-w-md">
              Elevating events with stunning LED screens, projection mapping, and creative visual solutions. 
              Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, color: 'var(--accent-primary)' }}
                  className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-muted)] transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--text-muted)]">
                <Mail size={18} className="text-[var(--accent-primary)]" />
                <a href="mailto:info@ballooncg.com" className="hover:text-[var(--text-main)] transition-colors">
                  info@ballooncg.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--text-muted)]">
                <Phone size={18} className="text-[var(--accent-primary)]" />
                <a href="tel:+201501578910" className="hover:text-[var(--text-main)] transition-colors">
                  +2-015-015-78910
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--text-muted)]">
                <Phone size={18} className="text-[var(--accent-primary)]" />
                <a href="tel:+966595802280" className="hover:text-[var(--text-main)] transition-colors">
                  +966-595-802280
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Balloon CG Visuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
