// LightTheme.js
import React from 'react';
import { useTheme } from './ThemeContext';

const LightTheme = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#ffffff' : '#f0f0f0', color: '#000000' }}>
      <h1>Light Theme</h1>
      <p>This is some content in the light theme.</p>
    </div>
  );
};

export default LightTheme;
