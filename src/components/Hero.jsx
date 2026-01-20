import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myPhoto from '../assets/1745233364098.jpg';
import cv from '../assets/nakkul_resume.pdf';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'AI & Cloud Enthusiast',
    'Competitive Programmer',
    'Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const name = "Nakul Bhar";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          className="text-center lg:text-left space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div className="space-y-4">
            <motion.span 
              className="text-2xl lg:text-3xl font-light text-gray-300 block"
              variants={textVariants}
            >
              Hi, I'm
            </motion.span>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-1">
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent inline-block"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 15,
                    textShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    backgroundSize: '400% 400%',
                    animation: `gradient 4s ease infinite ${index * 0.2}s`
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            variants={textVariants}
          >
            <motion.div className="h-16 flex items-center justify-center lg:justify-start">
              <span className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {currentText}
                <motion.span
                  className="inline-block w-1 h-8 lg:h-10 bg-gradient-to-b from-purple-400 to-pink-400 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            variants={textVariants}
          >
            <strong>Full Stack Developer</strong> specializing in <strong>MERN Stack</strong> with expertise in 
            <strong>AI Integration (OpenAI API)</strong>, <strong>Cloud Deployment</strong>, and <strong>Data Structures & Algorithms</strong>. 
            Active on <strong>LeetCode</strong> solving DSA problems. Building scalable solutions with modern technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={textVariants}
          >
            <motion.a 
              href={cv} 
              download 
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/nakul-bhar0130" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl overflow-hidden backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Let's Connect</span>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Single Animated Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-400/30"
              style={{
                width: '120%',
                height: '120%',
                top: '-10%',
                left: '-10%'
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.img 
              src={myPhoto} 
              alt="Nakul Bhar" 
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 relative z-10 shadow-2xl"
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <motion.div 
            className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-3"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;