'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Purchase',
    subtitle: 'Register on blockchain',
  },
  {
    number: '02',
    title: 'Verify',
    subtitle: 'Cryptographically secured',
  },
  {
    number: '03',
    title: 'Resell',
    subtitle: 'Peer-to-peer trading',
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-32 md:py-40 px-4 md:px-8 z-10 pb-56 md:pb-72">
      {/* Background cleanup - minimal */}
      <div className="absolute inset-0 opacity-0 pointer-events-none" />

      <div className="w-full flex flex-col items-center justify-center mx-auto">
        {/* Section Header - Fully Centered */}
        <div className="flex flex-col items-center justify-center text-center mb-24 md:mb-32 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs md:text-sm font-semibold text-[#D4AF37] dark:text-[#FFD700] tracking-widest mb-4 uppercase"
          >
            Journey
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-5xl md:text-6xl font-bold text-[#111111] dark:text-white font-serif mb-8 text-center max-w-2xl"
          >
            Three Steps to Ownership
          </motion.h2>

          {/* Decorative Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-16 h-1 bg-[#D4AF37] dark:bg-[#FFD700] rounded-full origin-center"
          />
        </div>

        {/* Vertical Steps Container - Centered */}
        <div className="relative flex flex-col items-center justify-center space-y-0 w-full max-w-2xl">
          {/* Central Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-transparent opacity-20 dark:opacity-25 transform -translate-x-1/2" />

          {/* Steps */}
          {steps.map((step, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative w-full flex items-center justify-center py-12 md:py-16"
              >
                {/* Step Content - Centered */}
                <div className="relative flex flex-col items-center text-center max-w-md px-6 md:px-8">
                  {/* Step Number + Content Row */}
                  <div className="flex flex-col items-center gap-4 w-full">
                    {/* Step Number */}
                    <motion.p
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.2 + 0.1,
                        duration: 0.6,
                      }}
                      viewport={{ once: true }}
                      className="text-7xl md:text-8xl font-serif font-bold text-[#D4AF37] dark:text-[#FFD700] opacity-8 dark:opacity-12 leading-none select-none"
                    >
                      {step.number}
                    </motion.p>

                    {/* Yellow Dot */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: index * 0.2 + 0.15,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      className="w-4 h-4 bg-[#D4AF37] dark:bg-[#FFD700] rounded-full opacity-60"
                    />

                    {/* Title and Subtitle */}
                    <div className="flex flex-col items-center">
                      <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.2 + 0.2,
                          duration: 0.6,
                        }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-[#111111] dark:text-white mb-2"
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.2 + 0.25,
                          duration: 0.6,
                        }}
                        viewport={{ once: true }}
                        className="text-sm text-[#999999] dark:text-[#888888] font-light tracking-wide"
                      >
                        {step.subtitle}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
