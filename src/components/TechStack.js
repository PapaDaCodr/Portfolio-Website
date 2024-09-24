import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJava } from 'react-icons/fa';

const TechIcon = ({ Icon, name }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="text-4xl text-[var(--primary)] mb-2" />
    <span className="text-[var(--text-secondary)]">{name}</span>
  </motion.div>
);

const TechStack = () => {
  const technologies = [
    { Icon: FaReact, name: 'React' },
    { Icon: FaNodeJs, name: 'Node.js' },
    {Icon: FaJava, name: 'Java' },
    { Icon: FaPython, name: 'Python' },
    { Icon: FaDatabase, name: 'SQL' },
    
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechIcon key={index} Icon={tech.Icon} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;