import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Define theme objects
const lightTheme = {
  primary: '#ffffff',
  secondary: '#f3f4f6',
  text: '#1f2937',
  accent: '#3b82f6',
  bg: {
    primary: '#ffffff',
    secondary: '#f3f4f6',
    gradient: {
      from: '#f9fafb',
      to: '#f3f4f6'
    }
  },
  button: {
    bg: '#1f2937',
    text: '#ffffff'
  },
  card: {
    bg: '#ffffff',
    border: '#e5e7eb'
  }
};

const darkTheme = {
  primary: '#1f2937',
  secondary: '#374151',
  text: '#f9fafb',
  accent: '#60a5fa',
  bg: {
    primary: '#111827',
    secondary: '#1f2937',
    gradient: {
      from: '#111827',
      to: '#1f2937'
    }
  },
  button: {
    bg: '#374151',
    text: '#ffffff'
  },
  card: {
    bg: '#1f2937',
    border: '#374151'
  }
};

// Create context
const ThemeContext = createContext();

// Custom hook for using theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};