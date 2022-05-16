import { FC, useEffect, useState } from 'react';
import './styles.css';

const ThemeToggleButton: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      className='theme-toggle-btn'
      onClick={() => setDarkMode((bool) => !bool)}
    >
      {darkMode ? 'Light' : 'Dark'} mode
    </button>
  );
};

export default ThemeToggleButton;
