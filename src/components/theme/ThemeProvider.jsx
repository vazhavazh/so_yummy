import React from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from 'redux/theme/themeSelector';
import { GlobalStyles } from './GlobalStyles';

export const ThemeProvider = ({ children }) => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`}>
      <GlobalStyles />
      {children}
    </div>
  );
};
