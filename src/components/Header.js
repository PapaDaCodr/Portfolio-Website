import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/projects', label: 'Projects' },
    { path: '/tech-stack', label: 'Tech Stack' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      className="bg-[var(--background)] shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[var(--primary)]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Osei
          </motion.span>
        </Link>
        <nav className="flex items-center space-x-8">
          <motion.div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link 
                  to={item.path} 
                  className={`text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300 ${
                    location.pathname === item.path ? 'font-bold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <ThemeToggle />
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;