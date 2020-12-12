import React, { useState, createContext } from "react";

interface ThemeContext {
    theme?: 'light' | 'dark',
    setTheme: Function
}

export const ThemeContext = React.createContext<ThemeContext | null>(null);

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;
