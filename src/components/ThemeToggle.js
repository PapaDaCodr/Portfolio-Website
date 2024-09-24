import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContex';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-1 rounded-full bg-[var(--primary)] text-[var(--background)]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
    </motion.button>
  );
};

export default ThemeToggle;