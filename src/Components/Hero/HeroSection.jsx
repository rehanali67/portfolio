import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Moon, Sun } from "lucide-react";
import { Link } from 'react-scroll';
import { useTheme } from '../Theme/Theme';

const HeroContainer = styled.div`
  min-height: 100vh;
  font-family: 'Archivo', sans-serif;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.bg.gradient.from},
    ${({ theme }) => theme.bg.gradient.to}
  );
  padding: 1.5rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  border-radius: 2rem;
  background: ${({ theme }) => theme.bg.primary};
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 1.5rem;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.bg.secondary};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  color: ${({ theme }) => theme.text};
  
  &:hover {
    background: ${({ theme }) => theme.button.bg};
    color: ${({ theme }) => theme.button.text};
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Divider = styled.span`
  color: ${({ theme }) => theme.card.border};
`;

const ProfileCard = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
`;

const ProfileImage = styled.div`
  width: 6rem;
  height: 6rem;
  margin-top: 1.5rem;
  border-radius: 9999px;
  overflow: hidden;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.bg.gradient.from},
    ${({ theme }) => theme.bg.gradient.to}
  );
  box-shadow: 0 0 0 4px ${({ theme }) => theme.bg.primary};
  margin-bottom: 1.5rem;
`;

const NameTag = styled(motion.div)`
  position: absolute;
  right: -1.5rem;
  top: -1rem;
  background: ${({ theme }) => theme.bg.primary};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const HeroSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const { isDark, toggleTheme } = useTheme();
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

  const socialLinks = [
    { name: "LinkedIn", link: "https://linkedin.com/in/rehan-ali-7780752b3" },
    { name: "Github", link: "https://github.com/rehanali67" },
    { name: "Instagram", link: "https://www.instagram.com/im._rehanali" }
  ];

  return (
    <HeroContainer>
      <ContentWrapper>
        <div className="relative">
          <header className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div className="flex gap-3">
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
              >
                <Mail className="w-4 h-4" />
                <span>{emailCopied ? "Copied!" : "Email"}</span>
              </Button>

              <Button
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>CV</span>
              </Button>

              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>

            <nav className="flex items-center gap-6">
              {socialLinks.map((platform, index) => (
                <React.Fragment key={platform.name}>
                  <NavLink
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                  >
                    {platform.name}
                  </NavLink>
                  {index < socialLinks.length - 1 && <Divider>/</Divider>}
                </React.Fragment>
              ))}
            </nav>
          </header>

          <main className="flex flex-col items-center justify-center text-center mt-24 md:mt-32 mb-12">
            <ProfileCard
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileImage>
                <img
                  src="./pfp.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </ProfileImage>
              <NameTag
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  Rehan Ali
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </span>
              </NameTag>
            </ProfileCard>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration : 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl mx-auto leading-tight tracking-tight"
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
              to="projects"
              smooth={true}
              duration={500}
            >
              <Button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 shadow-md"
              >
                Latest Projects 
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </main>
        </div>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;