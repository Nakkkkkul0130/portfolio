import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", color: "from-pink-500 to-rose-500" },
    { path: "/about", label: "About", color: "from-purple-500 to-indigo-500" },
    { path: "/education", label: "Education", color: "from-blue-500 to-cyan-500" },
    { path: "/skills", label: "Skills", color: "from-green-500 to-emerald-500" },
    { path: "/projects", label: "Projects", color: "from-teal-500 to-cyan-500" },
    { path: "/achievements", label: "Achievements", color: "from-orange-500 to-amber-500" },
    { path: "/contact", label: "Contact", color: "from-red-500 to-pink-500" }
  ];

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold cursor-pointer"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-black text-3xl"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Nakul Bhar
            </motion.span>
          </motion.div>
          
          <div className="hidden lg:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.path}
                initial={{ opacity: 0, y: -30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path}
                  className="relative px-4 py-2 rounded-xl font-bold text-white overflow-hidden group cursor-pointer text-sm block"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ 
                      scale: 1, 
                      rotate: 0,
                      transition: { duration: 0.4, type: "spring" }
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                  
                  <span className="relative z-10 font-bold tracking-wide">
                    {item.label}
                  </span>
                  
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl opacity-0 blur-sm group-hover:opacity-60`}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button 
            className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: isOpen 
                ? "0 0 30px rgba(168, 85, 247, 0.8)" 
                : "0 0 15px rgba(168, 85, 247, 0.4)"
            }}
          >
            <motion.span 
              className="w-6 h-0.5 bg-white block rounded-full"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
                backgroundColor: isOpen ? "#ef4444" : "#ffffff"
              }}
              transition={{ duration: 0.3, type: "spring" }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-white block rounded-full my-1"
              animate={{ 
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0 : 1
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-white block rounded-full"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
                backgroundColor: isOpen ? "#ef4444" : "#ffffff"
              }}
              transition={{ duration: 0.3, type: "spring" }}
            />
          </motion.button>
        </div>

        {isOpen && (
          <motion.div 
            className="lg:hidden mt-6 pb-4 border-t border-white/20"
            initial={{ opacity: 0, height: 0, rotateX: -90 }}
            animate={{ opacity: 1, height: "auto", rotateX: 0 }}
            exit={{ opacity: 0, height: 0, rotateX: -90 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {navItems.map((item, index) => (
              <motion.div 
                key={item.path}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  x: 10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-6 my-2 text-white font-bold rounded-xl bg-gradient-to-r ${item.color} relative overflow-hidden shadow-lg`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;