'use client';

import { motion } from 'framer-motion';
import { Award, Database, Flame, Globe, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    number: '01',
    title: 'Authentic',
    description: 'No counterfeits.',
  },
  {
    icon: Globe,
    number: '02',
    title: 'Global',
    description: 'Sell anywhere.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Instant',
    description: 'Settle on-chain.',
  },
  {
    icon: Database,
    number: '04',
    title: 'Permanent',
    description: 'Forever recorded.',
  },
  {
    icon: Award,
    number: '05',
    title: 'Valuable',
    description: 'Rare & tradable.',
  },
  {
    icon: Flame,
    number: '06',
    title: 'Dynamic',
    description: 'Real demand pricing.',
  },
];

export const FeaturesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.1 },
    }),
  };

  return (
    <section className="relative py-32 px-4 md:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-28"
        >
          <p className="text-sm md:text-base font-semibold text-[#D4AF37] tracking-widest mb-4 uppercase">
            Features
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] dark:text-white font-serif mb-6">
            Superior by Design
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-12 h-1 bg-[#D4AF37] rounded-full mx-auto origin-center"
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Soft Elevated Card */}
                <div className="relative p-8 rounded-none bg-white dark:bg-[#0f0f0f] border border-[#E7D8C9] dark:border-[#1a1a1a] transition-all duration-500 h-full"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  {/* Hover effect - deeper shadow */}
                  <div className="absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(212, 175, 55, 0.05)',
                    }}
                  />

                  {/* Number and Icon */}
                  <div className="flex items-start gap-6 mb-6 relative z-10">
                    <div className="flex-shrink-0">
                      <p className="text-6xl font-bold text-[#D4AF37] dark:text-[#FFD700] font-serif opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {feature.number}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="p-3 border-2 border-[#E0D0C0] dark:border-[#1a1a1a] group-hover:border-[#D4AF37] dark:group-hover:border-[#FFD700] transition-colors duration-300"
                    >
                      <Icon size={28} className="text-[#111111] dark:text-white group-hover:text-[#D4AF37] dark:group-hover:text-[#FFD700] transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Divider Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.08 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-10 h-0.5 bg-[#D4AF37] dark:bg-[#FFD700] origin-left mb-6 relative z-10"
                  />

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#111111] dark:text-white font-serif mb-3 relative z-10 group-hover:text-[#D4AF37] dark:group-hover:text-[#FFD700] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-[#666666] dark:text-[#999999] leading-relaxed text-base relative z-10 group-hover:text-[#333333] dark:group-hover:text-[#CCCCCC] transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mt-32 text-center"
        >
          {[
            { label: 'Events Live', value: '2,400+' },
            { label: 'Transactions', value: '985K+' },
            { label: 'Gas Saved', value: '45%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="inline-block relative z-10"
              >
                <p className="text-5xl md:text-6xl font-bold text-[#D4AF37] dark:text-[#FFD700] font-serif mb-3">
                  {stat.value}
                </p>
              </motion.div>
              <p className="text-sm md:text-base text-[#666666] dark:text-[#999999] font-semibold tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
