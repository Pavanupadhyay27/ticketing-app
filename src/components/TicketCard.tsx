'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface TicketCardProps {
  index: number;
  total: number;
  event?: string;
  date?: string;
}

export const TicketCard = ({ index, total, event = 'LIVE EVENT', date = 'May 15, 2024' }: TicketCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

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
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: isHovered ? -30 : 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
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
        className={`relative w-full h-full border-2 border-[#111111] dark:border-white bg-white dark:bg-[#0f0f0f] rounded-none overflow-hidden transition-all duration-500 ${
          isHovered
            ? 'shadow-luxury'
            : 'shadow-elevated'
        }`}
        style={{
          boxShadow: isHovered 
            ? '0 12px 48px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(212, 175, 55, 0.1)' 
            : '0 4px 12px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.02)',
        }}
      >
        {/* Premium Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-transparent to-transparent opacity-0 ${isHovered ? 'opacity-5' : ''} pointer-events-none transition-opacity duration-500`} />

        {/* Ticket Header */}
        <div className="px-8 pt-8 pb-4 border-b-2 border-dashed border-[#DCC8B4] dark:border-[#222222]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-[#999999] dark:text-[#666666] tracking-widest uppercase">
                Event Ticket
              </p>
              <h3 className={`text-2xl font-bold text-[#111111] dark:text-white mt-2 transition-colors duration-300 ${isHovered ? 'text-[#D4AF37]' : ''}`}>
                {event}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#999999] dark:text-[#666666]">{date}</p>
            </div>
          </div>
        </div>

        {/* Premium Perforation Details */}
        <div className="px-8 py-6 space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-dashed border-[#E0D0C0] dark:border-[#1a1a1a]">
            <span className="text-xs text-[#999999] dark:text-[#666666] font-semibold tracking-wide">Entry ID</span>
            <span className="font-mono font-bold text-[#111111] dark:text-white text-sm">#001574</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-dashed border-[#E0D0C0] dark:border-[#1a1a1a]">
            <span className="text-xs text-[#999999] dark:text-[#666666] font-semibold tracking-wide">Type</span>
            <span className="font-semibold text-[#111111] dark:text-white text-sm">VIP ACCESS</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-xs text-[#999999] dark:text-[#666666] font-semibold tracking-wide">Status</span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`inline-block px-3 py-1.5 border border-[#D4AF37] rounded-none text-xs font-bold transition-all duration-300 ${
                isHovered
                  ? 'bg-[#D4AF37] text-[#111111]'
                  : 'bg-[#D4AF37] bg-opacity-10 text-[#D4AF37]'
              }`}
            >
              VERIFIED
            </motion.span>
          </div>
        </div>

        {/* Premium Ticket Stub */}
        <div className="absolute bottom-0 left-0 right-0 px-8 py-4 bg-gradient-to-r from-[#DCC8B4] dark:from-[#1a1a1a] to-transparent border-t-2 border-dashed border-[#111111] dark:border-[#333333]">
          <p className="text-xs font-mono text-[#111111] dark:text-white opacity-70 truncate">
            ◆ BLOCKCHAIN VERIFIED • TRANSFERABLE ◆
          </p>
        </div>

        {/* Luxury Border Glow on Hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 border-2 border-[#D4AF37] opacity-20 pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  );
};
