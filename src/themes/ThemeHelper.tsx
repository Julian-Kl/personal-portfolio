import React, { useState, useEffect, useMemo } from 'react';
import { useStyles, getTheme, light, dark } from './Theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeContextProvider } from '../contexts/ThemeContext';

export const ThemeHelper: React.FC = (props) => {
  const [deviceTheme, setDeviceTheme] = useState('dark');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [appliedTheme, setAppliedTheme] = useState(getTheme(dark));

  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  const classes = useStyles();

  const deviceLightTheme = useMediaQuery('(prefers-color-scheme: light)');
  // Default theme mode by device
  useEffect(() => {
    if (deviceLightTheme) {
      setDeviceTheme('light');
    } else {
      setDeviceTheme('dark');
    }
  });

  // Changes theme mode if device preference changes
  useEffect(() => {
    if (deviceTheme === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [deviceTheme]);

  // Change theme onsite
  useEffect(() => {
    if (theme === 'light') {
      setAppliedTheme(getTheme(light));
    } else {
      setAppliedTheme(getTheme(dark));
    }
  }, [theme]);

  return (
    <div className={theme === 'light' ? classes.backgroundLight : classes.backgroundDark}>
      <ThemeProvider theme={appliedTheme}>
        <ThemeContextProvider value={themeMemo}>
          {props.children}
        </ThemeContextProvider>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}