'use client';

import { motion } from 'framer-motion';
import { TicketCard } from './TicketCard';
import { useState, useEffect } from 'react';

const TICKETS = [
  { event: 'COACHELLA 2024', date: 'Apr 12-14', type: 'MUSIC FESTIVAL', id: 1 },
  { event: 'TAYLOR SWIFT', date: 'May 20', type: 'CONCERT', id: 2 },
  { event: 'SUPER BOWL', date: 'Feb 9', type: 'SPORTS', id: 3 },
  { event: 'HAMILTON', date: 'Jun 15', type: 'THEATER', id: 4 },
  { event: 'DAVE CHAPPELLE', date: 'Jul 22', type: 'COMEDY', id: 5 },
  { event: 'EDC LAS VEGAS', date: 'May 17-19', type: 'ELECTRONIC', id: 6 },
];

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TICKETS.length);
    }, 4000); // Change ticket every 4 seconds
    return () => clearInterval(interval);
  }, []);

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

        {/* Right Side - Auto-Rotating Ticket Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="relative h-96 md:h-full md:min-h-screen flex items-center justify-center"
        >
          <div className="relative w-full max-w-md h-96 perspective-container overflow-hidden">
            {/* Rotating tickets with smooth transitions */}
            {TICKETS.map((ticket, index) => {
              const position = (index - activeIndex + TICKETS.length) % TICKETS.length;
              const isVisible = position === 0;
              const slideOffset = 0;
              
              return (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0, x: 400, rotateY: 45, scale: 0.85 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? slideOffset : 400,
                    rotateY: isVisible ? 0 : 45,
                    scale: isVisible ? 1 : 0.85,
                    zIndex: 10 - position,
                  }}
                  transition={{ 
                    duration: 0.9, 
                    ease: [0.34, 1.56, 0.64, 1], // Custom spring-like cubic bezier
                    opacity: { duration: 0.6 },
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ perspective: '1200px' }}
                >
                  {isVisible && (
                    <TicketCard 
                      index={position + 1} 
                      total={3} 
                      event={ticket.event}
                      date={ticket.date}
                      type={ticket.type}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2"
          >
            {TICKETS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                  opacity: activeIndex === index ? 1 : 0.4,
                  backgroundColor: activeIndex === index ? '#D4AF37' : '#999999',
                }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full cursor-pointer hover:opacity-100"
              />
            ))}
          </motion.div>
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
