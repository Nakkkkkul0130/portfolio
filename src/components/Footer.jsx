import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, FileText, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import cv from '../assets/nakul updated cv1.pdf';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
            >
              Nakul Bhar
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 mb-6"
            >
              Full-Stack Developer specializing in building exceptional digital experiences and solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              <a 
                href="https://github.com/Nakkkkkul0130" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/nakul-bhar0130" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:nakulbhar7308@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-6 text-white"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Achievements', 'Training'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-6 text-white"
            >
              Contact Information
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="shrink-0 mt-0.5" />
                <span>+91 9728647308</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="shrink-0 mt-0.5" />
                <span>nakulbhar7308@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Lovely Professional University, Punjab, India</span>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-6 text-white"
            >
              Resume
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-6"
            >
              Download my resume to learn more about my experience, education, and skills.
            </motion.p>
            <motion.a
              href={cv}
              download
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FileText size={18} />
              Download CV
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Nakul Bhar. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 md:mt-0"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full cursor-pointer hover:bg-primary-600 transition-colors"
            >
              <ArrowUp size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;