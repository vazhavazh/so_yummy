import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from 'redux/theme/themeSlice';
import { selectDarkMode } from 'redux/theme/themeSelector';
import './ToggleTheme.scss';

const ToggleTheme = () => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={`theme-switch ${darkMode ? 'dark-mode' : ''}`}>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleThemeToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleTheme;
