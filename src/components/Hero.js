import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
    >
      <div className="text-center px-4">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm <span className="text-[var(--highlight)]">Osei</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto"
        >
          I'm a passionate software engineer crafting beautiful and functional solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/projects">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button text-lg md:text-xl"
            >
              View My Work
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;