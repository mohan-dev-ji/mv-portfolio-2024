"use client";

import { useEffect, useState } from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMounted, setIsMounted] = useState(false);

  // Use effect to set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render nothing until mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-light-card dark:bg-dark-card text-light-primary dark:text-dark-primary"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
