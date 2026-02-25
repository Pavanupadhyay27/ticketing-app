'use client';

import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConnectWallet = async () => {
    try {
      // Check if MetaMask is available
      if (typeof window === 'undefined' || !window.ethereum) {
        alert('MetaMask is not installed. Please install MetaMask to continue.');
        return;
      }

      // Request account access
      const accounts = (await window.ethereum.request({ method: 'eth_requestAccounts' })) as string[];
      if (accounts && accounts.length > 0) {
        setWalletConnected(true);
        console.log('Wallet connected:', accounts[0]);
      }
    } catch (error: any) {
      if (error.code === 4001) {
        console.log('User rejected the connection request');
      } else {
        console.error('Failed to connect wallet:', error);
      }
      setWalletConnected(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#E7D8C9] dark:bg-[#0a0a0a] backdrop-blur-xl bg-opacity-85 dark:bg-opacity-85 border-b border-[#DCC8B4] dark:border-[#222222] shadow-premium'
          : 'bg-[#E7D8C9] dark:bg-[#1a1a1a] border-b-2 border-[#111111] dark:border-white backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group cursor-pointer"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-[#111111] dark:text-white font-serif transition-colors duration-300 group-hover:text-[#D4AF37]">
              Ticket<span className="text-[#D4AF37]">chain</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {['Events', 'How it Works', 'For Organizers', 'Docs'].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="nav-link text-sm font-medium text-[#111111] dark:text-white tracking-wide"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Right Side - CTA and Theme Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleConnectWallet}
              className="hidden md:block btn-connect px-6 py-2 text-sm font-semibold relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </span>
            </motion.button>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 border-2 border-[#111111] dark:border-white text-[#111111] dark:text-white hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-[#1a1a1a] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pt-4 border-t-2 border-[#111111] dark:border-white space-y-3"
          >
            {['Events', 'How it Works', 'For Organizers', 'Docs'].map((link) => (
              <a
                key={link}
                href="#"
                className="nav-link block py-2 text-sm font-medium text-[#111111] dark:text-white"
              >
                {link}
              </a>
            ))}
            <button onClick={handleConnectWallet} className="w-full btn-connect px-6 py-2 text-sm mt-4 font-semibold">
              <span className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
