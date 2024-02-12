// ParentComponent.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';

const ParentComponent = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
        <LightTheme />
        <DarkTheme />
      </div>
    </ThemeProvider>
  );
};

export default ParentComponent;
