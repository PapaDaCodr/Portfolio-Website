import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-[var(--background)] shadow-lg rounded-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {project.image && (
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    )}
    {project.video && (
      <video src={project.video} className="w-full h-48 object-cover" autoPlay loop muted />
    )}
    <div className="p-4">
      <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{project.title}</h3>
      <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
      <div className="flex justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="icon flex items-center"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="icon flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title:"Quizard-iota",
      description: "An interactive PWA for kids to learn(Note it is in beta mode)",
      liveDemo: "https://quizard-iota.vercel.app/",
    },
    {
      title: "Encryption Algorithm",
      description: "A simple implementation of AES-GCM encryption algorithm",
      github: "https://github.com/PapaDaCodr/Encryption",
    },
    {
      title: "Search and Sort Algorithm ",
      description: "A simple implementation of searching and sorting algorithms ",
      github: "https://github.com/PapaDaCodr/Search-and-Sort-Algorithm"
    },
    {
      title: "Url Shortener",
      description: "A simple project that shortens long urls",
      github: "https://github.com/PapaDaCodr/Url-shortener"
    },
    {
      title: "Creation Day",
      description: "This repo Translates the Creation account recorded in Genesis 1",
      github: "https://github.com/PapaDaCodr/Simple-java-implementation-of-DSA-principles",
    },
    {
      title: "Email Scraper",
      description: "Scrapes emails according parameters given",
      github: "https://github.com/PapaDaCodr/Email-scraper",
    },
    {
     title: "Program of Study ",
     description: "An implementation of Data Structures for a student to add courses to a program they study",
     github: "https://github.com/PapaDaCodr/Program-of-Study-DSA", 
    },
    {
      title: "Champions League Simulator",
      description: "This is a new open-source project I just started to simulate the draw of the UCL, simulate matches and give predictions to make it fun",
      github: "https://github.com/PapaDaCodr/champions-league-simulator"
    }
    
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;