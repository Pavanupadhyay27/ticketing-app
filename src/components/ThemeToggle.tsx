'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (!isMounted) return;

    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
      localStorage.theme = 'light';
    } else {
      html.classList.add('dark');
      setIsDark(true);
      localStorage.theme = 'dark';
    }
  };

  if (!isMounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-none border-2 border-[#111111] dark:border-white hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-[#111111] transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-[#111111]" />
      )}
    </button>
  );
};
