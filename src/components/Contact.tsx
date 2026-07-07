'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  'LED Screen Content',
  'Projection Mapping',
  'Creative Services',
  'Live Events',
  'Brand Activation',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neo-cyan font-medium">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-white">
              Let&apos;s Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-cyan to-neo-magenta">Amazing</span>
            </h2>
            <p className="text-white/50 text-lg mb-8">
              Ready to elevate your event? Get in touch with us today for a free consultation 
              and let&apos;s bring your vision to life.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl flat-card flex items-center justify-center flex-shrink-0">
                  <Mail className="text-neo-cyan" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a href="mailto:info@ballooncg.com" className="text-white/50 hover:text-neo-cyan">
                    info@ballooncg.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl flat-card flex items-center justify-center flex-shrink-0">
                  <Phone className="text-neo-cyan" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone (Egypt)</h4>
                  <a href="tel:+201501578910" className="text-white/50 hover:text-neo-cyan">
                    +2-015-015-78910
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl flat-card flex items-center justify-center flex-shrink-0">
                  <Phone className="text-neo-cyan" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone (Saudi)</h4>
                  <a href="tel:+966595802280" className="text-white/50 hover:text-neo-cyan">
                    +966-595-802280
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flat-card p-8"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-neo-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                <p className="text-white/50">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-neo-cyan hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/70">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neo-cyan focus:ring-1 focus:ring-neo-cyan outline-none transition-colors placeholder:text-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/70">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neo-cyan focus:ring-1 focus:ring-neo-cyan outline-none transition-colors placeholder:text-white/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/70">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neo-cyan focus:ring-1 focus:ring-neo-cyan outline-none transition-colors placeholder:text-white/30"
                      placeholder="+20..."
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-white/70">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neo-cyan focus:ring-1 focus:ring-neo-cyan outline-none transition-colors"
                    >
                      <option value="" className="text-white/50">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-neo-cyan focus:ring-1 focus:ring-neo-cyan outline-none transition-colors resize-none placeholder:text-white/30"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 text-lg bg-neo-cyan text-neo-void py-4 rounded-full font-semibold hover:bg-neo-cyan/80 transition-all disabled:opacity-50"
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}