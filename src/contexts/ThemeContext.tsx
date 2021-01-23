import { createContext } from "react";

interface ThemeContextInterface {
    theme?: 'light' | 'dark',
    setTheme: Function
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;
