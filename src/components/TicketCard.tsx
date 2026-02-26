'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface TicketCardProps {
  index: number;
  total: number;
  event?: string;
  date?: string;
  type?: string;
}

export const TicketCard = ({ index, total, event = 'LIVE EVENT', date = 'May 15, 2024', type = 'Event Ticket' }: TicketCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rotation = (index - 1) * 6 - (total - 1) * 3;
  const yOffset = index * 20;
  const zIndex = total - index;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientY - centerY) / 10;
    const y = (centerX - e.clientX) / 10;

    setTiltX(x);
    setTiltY(y);
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: isHovered ? -40 : 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `translateY(${yOffset}px) rotate(${rotation}deg) perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        zIndex: zIndex,
        transformStyle: 'preserve-3d' as any,
      }}
      className="absolute cursor-pointer w-80 h-96 transition-all duration-300"
    >
      <div
        className={`relative w-full h-full border-2 border-[#111111] dark:border-[#D4AF37] bg-white dark:bg-[#0f0f0f] rounded-lg overflow-hidden transition-all duration-500 ${
          isHovered
            ? 'shadow-luxury'
            : 'shadow-elevated'
        }`}
        style={{
          boxShadow: isHovered 
            ? '0 20px 60px rgba(212, 175, 55, 0.25), 0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(212, 175, 55, 0.1)' 
            : '0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(212, 175, 55, 0.05)',
        }}
      >
        {/* Premium Holographic Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-transparent to-transparent opacity-0 pointer-events-none transition-opacity duration-500"
          animate={{ opacity: isHovered ? 0.08 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated Light Reflection */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 400 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 pointer-events-none"
            style={{ transform: 'skewX(-20deg)' }}
          />
        )}

        {/* Corner Accent Stars */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-3 right-3 text-[#D4AF37]"
        >
          <Sparkles size={16} />
        </motion.div>

        {/* Ticket Header with Premium Styling */}
        <motion.div 
          className="relative px-8 pt-8 pb-6 border-b-2 border-dashed border-[#DCC8B4] dark:border-[#D4AF37] dark:border-opacity-30 bg-gradient-to-b from-transparent to-[#D4AF37] to-opacity-2"
          animate={{ 
            borderColor: isHovered ? '#D4AF37' : '#DCC8B4',
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <motion.p 
                className="text-xs font-semibold text-[#999999] dark:text-[#D4AF37] tracking-widest uppercase letter-spacing"
                animate={{ letterSpacing: isHovered ? '0.15em' : '0.1em' }}
                transition={{ duration: 0.3 }}
              >
                {type}
              </motion.p>
              <motion.h3 
                className={`text-lg md:text-2xl font-bold text-[#111111] dark:text-white mt-3 transition-colors duration-300 ${isHovered ? 'text-[#D4AF37]' : ''} line-clamp-2 leading-tight`}
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {event}
              </motion.h3>
            </div>
            <motion.div 
              className="text-right flex-shrink-0"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs text-[#999999] dark:text-[#D4AF37] font-semibold">{date}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Premium Perforation Details with Smooth Transitions */}
        <motion.div 
          className="px-8 py-8 space-y-5 flex-1"
          animate={{ 
            opacity: isHovered ? 1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="flex justify-between items-center py-4 px-3 rounded border-b-2 border-dashed border-[#E0D0C0] dark:border-[#D4AF37] dark:border-opacity-20 hover:bg-[#D4AF37] hover:bg-opacity-5 transition-colors duration-300"
            whileHover={{ x: 4 }}
          >
            <span className="text-xs text-[#999999] dark:text-[#AAAAAA] font-semibold tracking-wide uppercase">Entry ID</span>
            <motion.span 
              className="font-mono font-bold text-[#111111] dark:text-[#D4AF37] text-sm"
              animate={{ letterSpacing: isHovered ? '0.05em' : '0' }}
            >
              #001574
            </motion.span>
          </motion.div>

          <motion.div 
            className="flex justify-between items-center py-4 px-3 rounded border-b-2 border-dashed border-[#E0D0C0] dark:border-[#D4AF37] dark:border-opacity-20 hover:bg-[#D4AF37] hover:bg-opacity-5 transition-colors duration-300"
            whileHover={{ x: 4 }}
          >
            <span className="text-xs text-[#999999] dark:text-[#AAAAAA] font-semibold tracking-wide uppercase">Tier</span>
            <span className="font-semibold text-[#111111] dark:text-[#D4AF37] text-sm">VIP PREMIUM</span>
          </motion.div>

          <motion.div 
            className="flex justify-between items-center py-4 px-3 rounded"
            whileHover={{ x: 4 }}
          >
            <span className="text-xs text-[#999999] dark:text-[#AAAAAA] font-semibold tracking-wide uppercase">Status</span>
            <motion.span
              whileHover={{ scale: 1.08 }}
              className={`inline-block px-4 py-2 border-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                isHovered
                  ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37]'
                  : 'bg-white dark:bg-opacity-10 text-[#D4AF37] border-[#D4AF37] border-opacity-50 dark:border-opacity-40'
              }`}
            >
              ✓ VERIFIED
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Premium Animated Bottom Section */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 px-8 py-5 bg-gradient-to-r from-[#DCC8B4] dark:from-[#1a1a1a] to-transparent border-t-2 border-dashed border-[#111111] dark:border-[#D4AF37] dark:border-opacity-30"
          animate={{ 
            borderColor: isHovered ? '#D4AF37' : '#111111',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.p 
            className="text-xs font-mono text-[#111111] dark:text-[#D4AF37] opacity-70 tracking-widest"
            animate={{ letterSpacing: isHovered ? '0.1em' : '0.05em' }}
            transition={{ duration: 0.3 }}
          >
            ◆ BLOCKCHAIN VERIFIED • TRANSFERABLE ◆
          </motion.p>
        </motion.div>

        {/* Premium Border Glow with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-[#D4AF37] rounded-lg opacity-30 pointer-events-none"
        />

        {/* Pulsing Glow Aura */}
        {isHovered && (
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-[#D4AF37] rounded-lg opacity-20 pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  );
};
