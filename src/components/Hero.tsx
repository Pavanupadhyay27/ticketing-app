'use client';

import { motion } from 'framer-motion';
import { TicketCard } from './TicketCard';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 py-20 md:py-0 z-10">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-10">
          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 48 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 w-12 bg-[#D4AF37] rounded-full"
          />

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#111111] dark:text-white leading-tight font-serif">
              Own Your <br />
              <span className="text-[#D4AF37]">Tickets.</span>
              <br />
              On Chain.
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-base md:text-lg text-[#666666] dark:text-[#CCCCCC] leading-relaxed max-w-lg font-light"
          >
            Authentic. Fraud-proof. Yours forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="flex flex-col md:flex-row gap-6 pt-12"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary px-8 py-4 text-base font-semibold"
            >
              Launch App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline px-8 py-4 text-base font-semibold"
            >
              Explore
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side - Stacked Ticket Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="relative h-96 md:h-full md:min-h-screen flex items-center justify-center"
        >
          <div className="relative w-full max-w-md h-96 perspective-container">
            <TicketCard index={1} total={3} event="MAIN STAGE" date="Jun 15" />
            <TicketCard index={2} total={3} event="VIP LOUNGE" date="Jun 15" />
            <TicketCard index={3} total={3} event="AFTERPARTY" date="Jun 16" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-sm font-medium text-[#333333] dark:text-[#999999]">Scroll to explore</span>
        <svg
          className="w-5 h-5 text-[#333333] dark:text-[#999999]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};
