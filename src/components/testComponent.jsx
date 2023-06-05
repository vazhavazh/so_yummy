import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from 'redux/theme/themeSlice';
import {selectDarkMode} from 'redux/theme/themeSelector'

export const MyComponent = () => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <span className={darkMode ? 'dark-mode' : 'light-mode'}>ПРИВЕТ</span>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
      {/* Остальной код компонента */}
    </div>
  );
};


