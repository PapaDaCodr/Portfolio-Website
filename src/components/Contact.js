import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send email or save to database)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[var(--text)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[var(--text-secondary)] rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[var(--text)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[var(--text-secondary)] rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-[var(--text)] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-[var(--text-secondary)] rounded"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Connect with me</h3>
            <div className="flex mb-4">
              <a href="https://github.com/PapaDaCodr" target="_blank" rel="noopener noreferrer" className="icon mr-4">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/papadacodr22/" target="_blank" rel="noopener noreferrer" className="icon mr-4">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="mailto:dukeoriginal6@gmail.com" className="icon">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
            <p className="text-[var(--text)]">
              Feel free to reach out to me through the contact form or connect with me on social media.
              I'm always open to new opportunities and collaborations!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;