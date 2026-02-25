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

      <div className="w-full max-w-3xl mx-auto">
        {/* Section Header - Centered */}
        <div className="flex flex-col items-center justify-center text-center mb-24 md:mb-32">
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
            className="text-5xl md:text-6xl font-bold text-[#111111] dark:text-white font-serif mb-8 text-center"
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

        {/* Vertical Ladder Steps Container */}
        <div className="relative flex flex-col items-center justify-center space-y-0 mx-auto">
          {/* Central Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-transparent opacity-20 dark:opacity-25 transform -translate-x-1/2" />

          {/* Steps */}
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

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
                className={`relative w-full flex py-12 md:py-16 ${
                  isLeft ? 'justify-start pl-0 md:pl-0' : 'justify-end pr-0 md:pr-0'
                }`}
              >
                {/* Step Content Card */}
                <div className={`flex flex-col items-center text-center max-w-sm px-6 md:px-8 ${
                  isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                }`}>
                  {/* Step Number - Large Faded Gold */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.2 + 0.1,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <p className="text-8xl md:text-9xl font-serif font-bold text-[#D4AF37] dark:text-[#FFD700] opacity-8 dark:opacity-12 leading-none select-none">
                      {step.number}
                    </p>
                  </motion.div>

                  {/* Step Title - Medium Serif */}
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.15,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-serif font-bold text-[#111111] dark:text-white mb-2"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Step Subtitle - Small & Minimal */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.2,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="text-sm text-[#999999] dark:text-[#888888] font-light tracking-wide"
                  >
                    {step.subtitle}
                  </motion.p>

                  {/* Connector Circle to Center Line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: index * 0.2 + 0.25,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 w-3.5 h-3.5 bg-[#D4AF37] dark:bg-[#FFD700] rounded-full opacity-40 hidden md:block"
                    style={{
                      [isLeft ? 'right' : 'left']: 'calc(-2rem - 1.75px)',
                      transform: 'translate(0, -50%)',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
