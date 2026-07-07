'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Share2, Globe, MessageSquare } from 'lucide-react';

// Fallback icons defined first to avoid hoisting errors
const InstagramFallback = ({ size = 20 }) => <Share2 size={size} />;
const FacebookFallback = ({ size = 20 }) => <Globe size={size} />;
const LinkedinFallback = ({ size = 20 }) => <MessageSquare size={size} />;

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/balloon.cg?igsh=MXYyengxOHV0NTNxNw==', icon: InstagramFallback },
  { name: 'Facebook', href: 'https://facebook.com/ballooncg', icon: FacebookFallback },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ballooncg', icon: LinkedinFallback },
];

export default function Footer() {
  return (
    <footer className="bg-neo-deep">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Balloon CG Visuals
            </motion.h3>
            <p className="text-white/50 mb-6 max-w-md">
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
                  whileHover={{ y: -3, color: '#00f3ff' }}
                  className="p-2 rounded-lg flat-card text-white/50 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/50 hover:text-neo-cyan transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/50">
                <Mail size={18} className="text-neo-cyan" />
                <a href="mailto:info@ballooncg.com" className="hover:text-white transition-colors">
                  info@ballooncg.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Phone size={18} className="text-neo-cyan" />
                <a href="tel:+201501578910" className="hover:text-white transition-colors">
                  +2-015-015-78910
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Phone size={18} className="text-neo-cyan" />
                <a href="tel:+966595802280" className="hover:text-white transition-colors">
                  +966-595-802280
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-white/30 border-t border-white/10">
          <p>© {new Date().getFullYear()} Balloon CG Visuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}