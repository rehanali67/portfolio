import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoReact } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

import { FaNode } from "react-icons/fa6";
import { PiAngularLogo } from "react-icons/pi";

const AboutMe = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const highlightText = {
    initial: { backgroundSize: '0% 100%' },
    animate: { backgroundSize: '100% 100%' },
    transition: { duration: 1, delay: 0.5 }

  };

  const skills = [
    { name: 'React', icon: IoLogoReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
    { name: 'TypeScript', icon: TbBrandTypescript, color: 'text-blue-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'C++', icon: TbBrandCpp, color: 'text-blue-400' },
    { name: 'Express', icon: SiExpress, color: 'text-pink-500' },
    { name: 'Angular', icon: PiAngularLogo, color: 'text-gray-800' }
  ];

  return (
    <section className="py-24  font-Archivo">
      <div className="max-w-8xl mx-auto px-6 lg:px-9">
        <motion.div 
          className="bg-white rounded-3xl  p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
                About Me
              </motion.h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
              <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                I am a passionate{' '}
                <motion.span
                  className="bg-gradient-to-r from-blue-500 to-teal-500 bg-no-repeat text-white bg-left-bottom inline-block"
                  style={{ 
                    backgroundSize: '0% 4px',
                    backgroundPosition: '0 88%',
                    padding: '0 4px'
                  }}
                  {...highlightText}
                >
                  Full Stack Developer
                </motion.span>
                {' '}with 2+ years of experience building scalable web applications. 
                I specialize in creating efficient, maintainable solutions that solve real-world problems. 
                My approach combines technical expertise with a deep understanding of user needs to deliver 
                exceptional digital experiences.
              </p>
            </div>

            <div className=" rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Technical Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border hover:border-green-400 border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <skill.icon className={`w-12 h-12 ${skill.color} mb-3`} />
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">What I Do</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Application Development",
                    description: "Design and implement scalable web applications using modern technologies and best practices."
                  },
                  {
                    title: "Performance Optimization",
                    description: "Optimize application performance and user experience through efficient code and modern techniques."
                  },
                  {
                    title: "Technical Leadership",
                    description: "Lead technical initiatives and mentor junior developers to foster team growth and success."
                  },
                  {
                    title: "Problem Solving",
                    description: "Tackle complex technical challenges and deliver innovative solutions that drive business value."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;