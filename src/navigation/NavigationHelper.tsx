import React, { useState, useMemo } from 'react';
import { NavigationContextProvider, NavigationContext } from '../contexts/NavigationContext';
import { useLocation } from "react-router-dom";

export const NavigationHelper: React.FC = (props) => {
    const [refs, setRefs] = useState<object[]>([]);
    const [location, setLocation] = useState<object>({})

    const addRef = (ref: object) => {
        refs.push(ref);
    }

    setLocation(useLocation());

    const navigationMemo = useMemo(() => ({ refs, addRef, location }), [refs, addRef, location]);

    return (
        <NavigationContextProvider value={navigationMemo}>
            {props.children}
        </NavigationContextProvider>
    );
}