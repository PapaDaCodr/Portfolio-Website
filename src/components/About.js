import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src="/path/to/your-photo.jpg"
            alt="Osei"
            className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <p className="text-[var(--text)] mb-4">
  👋 Hello! I'm Osei, a passionate software engineer with a keen interest in finding
  beautiful and functional solutions. 💻✨ With a year's worth of experience in the field,
  I've worked on a variety of projects ranging from Email scraping to complex
  web applications. 🚀
</p>
<p className="text-[var(--text)] mb-4">
  My expertise includes front-end technologies like React, as well as
  back-end technologies such as Node.js, Java and Python. I'm always excited to learn new
  technologies and tackle challenging projects. 🎯
</p>
<p className="text-[var(--text)]">
  When I'm not coding, you can find me watching football ⚽ or enjoying movies 🎬. I believe in
  continuous learning 📚 and giving back to the community, which is why I hope to actively
  contribute to open-source projects in the near future. 🌟
</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;