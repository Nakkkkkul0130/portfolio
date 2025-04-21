import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'hero', offset: -100 },
  { name: 'About', to: 'about', offset: -80 },
  { name: 'Skills', to: 'skills', offset: -80 },
  { name: 'Projects', to: 'projects', offset: -80 },
  { name: 'Certificates', to: 'certificates', offset: -80 },
  { name: 'Training', to: 'training', offset: -80 },
  { name: 'Achievements', to: 'achievements', offset: -80 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stiffness = 100;
  const damping = 10;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness, damping }}
          >
            Nakul Bhar
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg mt-3"
        >
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="block py-2 px-4 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
