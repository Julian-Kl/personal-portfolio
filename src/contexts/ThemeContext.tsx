import { createContext } from "react";

interface ThemeContext {
    theme?: 'light' | 'dark',
    setTheme: Function
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;
