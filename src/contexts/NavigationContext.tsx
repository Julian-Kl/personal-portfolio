import { createContext } from "react";

interface NavigationContext {
    location: object,
    refs: object[]
}

export const NavigationContext = createContext<NavigationContext | null>(null);

export const NavigationContextProvider = NavigationContext.Provider;

export const NavigationContextConsumer = NavigationContext.Consumer;
