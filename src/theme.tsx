import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

type ThemeType = 'light' | 'dark';

enum Themes {
  light = 'light',
  dark = 'dark',
}

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [theme, setTheme] = useState<ThemeType>(Themes.light);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeType;
    setTheme(storedTheme ?? Themes.light);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
