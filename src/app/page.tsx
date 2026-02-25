'use client';

import { Navbar } from '@/components/Navbar';
import { TicketBackground } from '@/components/TicketBackground';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { OrganizerSection } from '@/components/OrganizerSection';
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

        {/* How It Works - Maximum spacing */}
        <div className="pt-80 md:pt-96 pb-32 md:pb-48">
          <HowItWorks />
        </div>

        {/* Organizer Section - Maximum spacing */}
        <div className="pt-56 md:pt-72 pb-32 md:pb-48">
          <OrganizerSection />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
