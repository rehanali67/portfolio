import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../Theme/Theme';

const Projects = () => {
  const { isDark } = useTheme();

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
      description: 'A full-stack E-Commerce application using MongoDB, Express, React, and Firebase.',
      image: './Luxefluers.png', 
      link: 'https://luxefluers.netlify.app/',
      tags: ['MongoDB', 'React', 'Express', 'Node.js', 'Tailwind', 'Framer-motion', 'Firebase', 'JWT']
    },
    {
      title: 'Pen & Pixels',
      description: 'A full-stack blogging website using Quilljs with WYSIWYG functionality.',
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
          {/* Section Heading */}
          <div className="text-center">
            <motion.h2
              className={`text-4xl font-bold mb-4 bg-clip-text text-transparent ${
                isDark ? 'bg-gradient-to-r from-gray-300 to-gray-500' : 'bg-gradient-to-r from-gray-900 to-gray-700'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`rounded-xl border hover:border-blue-400 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-white'
                }`}
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
                  <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                    {project.title}
                  </h4>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block hover:underline ${
                      isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'
                    }`}
                  >
                    View Project
                  </a>

                  <div className="mt-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`inline-block text-xs font-medium py-1 px-3 rounded-full mr-2 mt-2 ${
                          isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                        }`}
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
