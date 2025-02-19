import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoReact } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws, FaNode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiDocker } from "react-icons/si";
import { PiAngularLogo } from "react-icons/pi";
import { TbBrandCpp } from "react-icons/tb";
import { useTheme } from '../Theme/Theme';

const AboutMe = () => {
  const { isDark } = useTheme();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    { name: 'React', icon: IoLogoReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
    { name: 'TypeScript', icon: TbBrandTypescript, color: 'text-blue-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
    { name: 'Angular', icon: PiAngularLogo, color: 'text-red-600' },
    { name: 'C++', icon: TbBrandCpp, color: 'text-blue-400' }
  ];

  return (
    <section className={`py-24 font-Archivo ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}> 
      <div className="max-w-8xl mx-auto px-6 lg:px-9">
        <motion.div className="space-y-10" {...fadeIn}>
          <div className="text-center">
            <motion.h2 className="text-4xl font-bold mb-4">About Me</motion.h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg max-w-4xl mx-auto">
              Hey, I'm Rehan Ali, a passionate Full Stack Developer with expertise in designing, developing, and deploying scalable web applications.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`flex flex-col items-center p-6 rounded-xl shadow-sm border transition-all duration-300 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-3`} />
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[  
                {
                  title: "Web Application Development",
                  description: "Build and maintain responsive, high-performance applications using React, Angular, and modern frameworks."
                },
                {
                  title: "Backend & API Development",
                  description: "Design and optimize RESTful and GraphQL APIs using Node.js, Express.js, and MongoDB."
                },
                {
                  title: "Cloud & DevOps",
                  description: "Deploy and manage applications using AWS, Docker, and CI/CD pipelines for seamless scalability."
                },
                {
                  title: "Performance Optimization",
                  description: "Enhance application performance, security, and user experience through best coding practices and modern tools."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl shadow-sm border transition-shadow duration-200 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className={`p-8 rounded-xl shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h4 className="text-lg font-semibold mb-2">Bachelor of Computer Science</h4>
                <p>University of Central Punjab, 2027</p>
                <p className="mt-2">Major in Website Development and Cloud Computing.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
