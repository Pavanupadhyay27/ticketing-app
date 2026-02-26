'use client';

import { Navbar } from '@/components/Navbar';
import { TicketBackground } from '@/components/TicketBackground';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative bg-[#E7D8C9] dark:bg-[#0a0a0a] text-[#111111] dark:text-white min-h-screen overflow-hidden">
      {/* Animated Background Ticket Effect */}
      <TicketBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Full viewport */}
        <div className="min-h-screen pt-20">
          <Hero />
        </div>

        {/* How It Works - Right after Hero */}
        <div className="pt-12 md:pt-16 pb-80 md:pb-96">
          <HowItWorks />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
