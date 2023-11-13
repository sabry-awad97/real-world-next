'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext<{
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}>({} as any);

// Custom hook to consume the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
