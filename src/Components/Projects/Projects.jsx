import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: 'FaConsultants',
      description: 'A personal portfolio for FA Consultants website built with React and Framer Motion.',
      image: './faconsultants.png',
      link: 'https://faconsultants.netlify.app/',
      tags: ['React', 'Emailjs', 'Tailwind', 'Framer-motion']
    },
    {
      title: 'LuxeFluers',
      description: 'A full-stack E-Commerce application using MongoDB, Express, React and Firebase.',
      image: './Luxefluers.png', 
      link: 'https://luxefluers.netlify.app/',
      tags: ['MongoDB', 'React', 'Express', 'Node.js', 'Tailwind', 'Framer-motion', 'Firebase', 'JWT']
    },
    {
      title: 'Pen & Pixels',
      description: 'A full-stack blogging website using Quilljs and has WYSIWYG functionality.',
      image: './penandpixels.png',
      link: 'https://penandpixel.netlify.app',
      tags: ['Reactjs', 'Framer-motion', 'Quilljs', 'Tailwind', 'Nodejs', 'Express', 'MongoDB', 'JWT']
    },
    {
        title: 'AudoMatick',
        description: 'A full-stack blogging website using Quilljs and has WYSIWYG functionality.',
        image: './audomatick.png', 
        link: 'https://audomatick.netlify.app',
        tags: ['Reactjs', 'Framer-motion', 'Tailwind']
      }
  ];

  return (
    <section className="py-24 font-Archivo" id='projects'>
      <div className="max-w-8xl mx-auto px-6 lg:px-9">
        <motion.div
          className="space-y-10"
          {...fadeIn}
        >
          <div className="text-center">
            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl border border-white hover:border-blue-400 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:text-blue-600"
                  >
                    View Project
                  </a>

                  <div className="mt-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-100 text-blue-800 text-xs font-medium py-1 px-3 rounded-full mr-2 mt-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
