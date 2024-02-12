// DarkTheme.js
import React from 'react';
import { useTheme } from './ThemeContext';

const DarkTheme = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'dark' ? '#000000' : '#303030', color: '#ffffff' }}>
      <h1>Dark Theme</h1>
      <p>This is some content in the dark theme.</p>
    </div>
  );
};

export default DarkTheme;
