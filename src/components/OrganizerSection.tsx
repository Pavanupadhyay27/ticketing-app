'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const OrganizerSection = () => {
  return (
    <section className="relative py-32 px-4 md:px-8 z-10 bg-gradient-to-b from-transparent to-[#DCC8B4] dark:to-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-20">
          {/* Center - Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-10 text-center max-w-2xl"
          >
            <div>
              <p className="text-sm md:text-base font-semibold text-[#D4AF37] tracking-widest mb-6 uppercase">For Organizers</p>
              <h2 className="text-4xl md:text-6xl font-bold text-[#111111] dark:text-white font-serif mb-8">
                Maximize Revenue.<br />Minimize Fraud.
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-12 h-1 bg-[#D4AF37] rounded-full origin-center mx-auto"
              />
            </div>

            <p className="text-base md:text-lg text-[#666666] dark:text-[#999999] leading-relaxed max-w-lg font-light">
              Complete control. Zero fraud.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 flex flex-col items-center">
              {[
                'Live analytics dashboard',
                'Counterfeit detection',
                'Dynamic pricing',
                'Instant settlement',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-[#D4AF37] dark:border-[#FFD700] flex items-center justify-center">
                    <motion.span
                      whileInView={{ scale: 1 }}
                      initial={{ scale: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="w-2.5 h-2.5 bg-[#D4AF37] dark:bg-[#FFD700] rounded-full"
                    />
                  </div>
                  <p className="text-[#111111] dark:text-white font-medium text-base">{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="btn-outline px-8 py-4 text-base font-semibold inline-flex items-center gap-3 group mt-8"
            >
              Start Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
