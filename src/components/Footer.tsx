'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#DCC8B4] dark:border-[#1a1a1a] bg-[#DCC8B4] dark:bg-[#0a0a0a] z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-20 md:mb-28">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-4"
          >
            <h3 className="text-3xl font-bold text-[#111111] dark:text-white font-serif">
              Ticket<span className="text-[#D4AF37]">chain</span>
            </h3>
            <p className="text-sm text-[#666666] dark:text-[#999999] max-w-xs leading-relaxed font-light">
              The future of event ticketing powered by blockchain technology.
            </p>
          </motion.div>

          {/* Navigation Sections */}
          {[
            {
              title: 'PLATFORM',
              links: ['Browse Events', 'My Tickets', 'Analytics', 'API Docs'],
            },
            {
              title: 'COMPANY',
              links: ['About', 'Blog', 'Careers', 'Contact'],
            },
            {
              title: 'LEGAL',
              links: ['Privacy', 'Terms', 'Cookies', 'Disclaimer'],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-xs font-bold text-[#111111] dark:text-white tracking-widest uppercase">
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="text-sm text-[#666666] dark:text-[#999999] hover:text-[#111111] dark:hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-0.5 bg-[#111111] dark:bg-white opacity-10 mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Copyright */}
          <p className="text-sm text-[#666666] dark:text-[#999999] font-light">
            © {currentYear} Tickchain. All rights reserved. <span className="text-[#D4AF37]">Built on Web3.</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, label: 'Twitter', color: '#1DA1F2' },
              { icon: Github, label: 'GitHub', color: '#333333' },
              { icon: Linkedin, label: 'LinkedIn', color: '#0A66C2' },
              { icon: Mail, label: 'Email', color: '#D4AF37' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-11 h-11 border-2 border-[#111111] dark:border-white flex items-center justify-center text-[#111111] dark:text-white hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-[#1a1a1a] transition-all duration-300 relative overflow-hidden"
                >
                  <Icon size={18} className="relative z-10" />
                  <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
