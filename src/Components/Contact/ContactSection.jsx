import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [iconColorMode, setIconColorMode] = useState('dark');

  // Custom animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIconColorMode(prev => prev === 'dark' ? 'light' : 'dark');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full font-Archivo min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center py-32 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center relative"
      >
        {/* Animated Icon */}
        <motion.div
          variants={itemVariants}
          className="mb-16 flex justify-center"
        >
          <motion.div
            animate={{
              backgroundColor: iconColorMode === 'dark' ? '#1e293b' : '#ffffff',
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-sm relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundColor: iconColorMode === 'dark' ? '#ffffff' : '#1e293b'
              }}
            />
            
            <motion.svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none"
              animate={{
                stroke: iconColorMode === 'dark' ? '#ffffff' : '#1e293b',
                transition: { duration: 1.5, ease: "easeInOut" }
              }}
            >
              <motion.path 
                d="M21 8L14 15L12 17L10 15L3 8M21 8L18 5L12 11L6 5L3 8M21 8V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V8" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Tell me about your{' '}
            <span className="text-gray-400">next project</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with innovative solutions and exceptional design.
          </p>
        </motion.div>

        {/* Contact buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-5"
        >
          <motion.a
            href="mailto:a.reshanali522@gmail.com"
            onHoverStart={() => setHoveredButton('email')}
            onHoverEnd={() => setHoveredButton(null)}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span className="font-medium">Email Me</span>
            <AnimatePresence>
              {hoveredButton === 'email' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-slate-700 rounded-full -z-10"
                />
              )}
            </AnimatePresence>
          </motion.a>

          <motion.a
            href="https://wa.me/+923175797622"
            onHoverStart={() => setHoveredButton('whatsapp')}
            onHoverEnd={() => setHoveredButton(null)}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-800 rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-300"
          >
            <span className="font-medium">WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <AnimatePresence>
              {hoveredButton === 'whatsapp' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-gray-50 rounded-full -z-10"
                />
              )}
            </AnimatePresence>
          </motion.a>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for freelance opportunities
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;