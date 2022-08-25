import React, { createContext, useCallback, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';


interface ThemeContextData {
  theme: string;
  switchTheme(): void;
}

interface ThemeProviderCustomProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProviderCustom: React.FC<ThemeProviderCustomProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const storageTheme = localStorage.getItem('@Garcez:theme');
      console.log(`stored theme: ${storageTheme}`);
      if (storageTheme) {
        return storageTheme;
      }
    }
    return 'dark';
  });

  const switchTheme = useCallback(() => {
    console.log(`theme inicial: ${theme}`);
    const themeToStore = theme === 'light' ? 'dark' : 'light';
    console.log(`theme to store: ${themeToStore}`);
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    console.log(`theme dps do settheme: ${theme}`);

    localStorage.setItem('@Garcez:theme', themeToStore);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProviderCustom');
  }
  return context;
}