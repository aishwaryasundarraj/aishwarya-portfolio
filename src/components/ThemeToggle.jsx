import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label="Toggle Dark / Light Theme"
      className="p-2 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/80 border border-slate-700/50 light:border-slate-300 text-slate-200 light:text-slate-700 hover:border-cyan-500/50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
