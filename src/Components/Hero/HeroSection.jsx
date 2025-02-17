import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ArrowUpRight, Mail } from "lucide-react";
import { Link } from 'react-scroll'; // Import Link from react-scroll

const HeroSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "a.reshanali522@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen font-Archivo bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto rounded-4xl bg-white shadow-sm p-6 md:p-8 min-h-[90vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

        <div className="relative">
          <header className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                className="px-4 py-2 bg-gray-50 cursor-pointer hover:bg-gray-100 rounded-full flex items-center gap-2 transition-colors group"
                aria-label={emailCopied ? "Email copied!" : "Copy email address"}
              >
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {emailCopied ? "Copied!" : "Email"}
                </span>
              </motion.button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center gap-2 transition-colors"
              >
                <span className="text-sm text-gray-600">CV</span>
              </motion.a>
            </div>

            <nav className="flex items-center gap-6">
              {[ 
                { name: "LinkedIn", link: "https://linkedin.com/in/rehan-ali-7780752b3" },
                { name: "Github", link: "https://github.com/rehanali67" },
                { name: "Instagram", link: "https://www.instagram.com/im._rehanali" }
              ].map((platform, index) => (
                <React.Fragment key={platform.name}>
                  <motion.a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {platform.name}
                  </motion.a>
                  {index < 2 && <span className="text-gray-300">/</span>}
                </React.Fragment>
              ))}
            </nav>
          </header>

          <main className="flex flex-col items-center justify-center text-center mt-24 md:mt-32 mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-12"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ring-4 ring-white shadow-lg mb-6">
                <img
                  src="pfp.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -right-6 -top-4 bg-white px-4 py-2 rounded-full shadow-md"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  Rehan Ali
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl text-slate-950 lg:text-6xl font-semibold max-w-3xl mx-auto leading-tight tracking-tight"
            >
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-r italic from-blue-500 to-teal-500 bg-no-repeat text-white bg-left-bottom inline-block"
                style={{ backgroundSize: "0% 4px", backgroundPosition: "0 88%", padding: "0 4px" }}
              >
                Crafting seamless
              </motion.span>
              <span className="block italic">digital experiences, scalable</span>
              <span className="block italic">applications, and robust solutions.</span>
            </motion.h1>

            <Link
              to="projects" // The name of the id you want to scroll to
              smooth={true}
              duration={500} // Duration of the scroll
            >
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-6 py-3 cursor-pointer bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 group shadow-md"
              >
                Latest Projects 
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
