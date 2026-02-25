'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      icon: Users,
      title: '50K+ Organizers',
      subtitle: 'Trusted event creators',
    },
    {
      icon: BarChart3,
      title: '98% Revenue Increase',
      subtitle: 'Average secondary market gains',
    },
  ];

  return (
    <section className="relative py-32 px-4 md:px-8 z-10 bg-gradient-to-b from-transparent via-[#E7D8C9] to-transparent dark:via-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <p className="text-sm md:text-base font-semibold text-[#D4AF37] tracking-widest mb-4 uppercase">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] dark:text-white font-serif">
            What Organizers Say
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-12 h-1 bg-[#D4AF37] rounded-full mx-auto origin-center mt-6"
          />
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
          {/* Testimonial Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto"
          >
            {testimonials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="relative p-8 rounded-none bg-white dark:bg-[#0f0f0f] border border-[#E7D8C9] dark:border-[#1a1a1a] transition-all duration-500"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  {/* Hover shadow */}
                  <div
                    className="absolute inset-0 rounded-none opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="p-3 border-2 border-[#E0D0C0] dark:border-[#1a1a1a]"
                    >
                      <Icon size={24} className="text-[#111111] dark:text-white" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-10 h-0.5 bg-[#D4AF37] dark:bg-[#FFD700] origin-center mb-6 relative z-10 mx-auto"
                  />

                  <p className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white font-serif relative z-10 text-center mb-3">
                    {item.title}
                  </p>

                  <p className="text-xs md:text-sm text-[#999999] dark:text-[#666666] font-semibold tracking-widest uppercase text-center relative z-10">
                    {item.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ y: -8 }}
            className="relative w-full max-w-3xl p-10 md:p-12 rounded-none bg-gradient-to-br from-[#D4AF37] to-[#C49825] text-white transition-all duration-500"
            style={{
              boxShadow: '0 8px 32px rgba(212, 175, 55, 0.15)',
            }}
          >
            {/* Hover shadow */}
            <div
              className="absolute inset-0 rounded-none opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: '0 16px 48px rgba(212, 175, 55, 0.25)',
              }}
            />

            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                className="p-4 bg-white bg-opacity-20 rounded-full"
              >
                <Quote size={28} className="text-white" />
              </motion.div>

              <p className="text-lg md:text-xl font-serif italic leading-relaxed">
                &ldquo;The future of event ticketing is here. Blockchain ensures every attendee is verified and every organizer is protected.&rdquo;
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="w-12 h-0.5 bg-white bg-opacity-60 rounded-full origin-center mt-4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
