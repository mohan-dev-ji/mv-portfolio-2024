"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const updateImageSource = () => {
        const sources = document.querySelectorAll('picture source');
        sources.forEach(source => {
          if (theme === 'dark') {
            source.media = 'all';
          } else {
            source.media = '(prefers-color-scheme: dark)';
          }
        });
      };

      updateImageSource();
    }
  }, [theme, mounted]);

  const toggleDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <DarkModeContext.Provider value={{ isDarkMode: theme === 'dark', toggleDarkMode }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
