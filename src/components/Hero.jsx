import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-scroll';
import myPhoto from '../assets/1745233364098.jpg';
import cv from '../assets/nakul updated cv1.pdf';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 -z-10 opacity-20 w-1/2 h-1/2 bg-gradient-radial from-primary-300 to-transparent rounded-full blur-3xl dark:from-primary-700"></div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20 w-1/3 h-1/3 bg-gradient-radial from-secondary-300 to-transparent rounded-full blur-3xl dark:from-secondary-700"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent dark:from-primary-400 dark:to-secondary-400">
                  Welcome to My Portfolio!
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Full-Stack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Hi, I'm Nakul, a B.Tech Computer Science student at Lovely Professional University, 
                specializing in Full-Stack Development. I focus on building scalable applications and 
                have a solid foundation in both front-end and back-end development. I am committed to 
                continuously improving my skills in emerging technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href={cv}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all dark:from-primary-500 dark:to-primary-600"
                >
                  <FileDown size={20} />
                  Download CV
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/nakul-bhar0130"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all dark:bg-transparent dark:text-primary-400 dark:border-primary-400"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </motion.a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.a
                  href="tel:+919728647308"
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <Phone size={18} />
                  <span>+91 9728647308</span>
                </motion.a>
                <motion.a
                  href="mailto:nakulbhar7308@gmail.com"
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <Mail size={18} />
                  <span>nakulbhar7308@gmail.com</span>
                </motion.a>
                <motion.a
                  href="https://github.com/Nakkkkkul0130"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>github.com/Nakkkkkul0130</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="md:w-1/3 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl transition-all"
              >
                <img 
                  src={myPhoto} 
                  alt="Nakul Bhar" 
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="animate-bounce bg-white dark:bg-gray-800 p-3 rounded-full shadow-md cursor-pointer text-primary-600 dark:text-primary-400"
          >
            <ArrowDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
