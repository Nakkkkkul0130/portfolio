import React from 'react';
import { motion } from 'framer-motion';
import lostImage from '../assets/lostt.png';
import resImage from '../assets/restt.png';
import wellbeingImage from '../assets/wellbeing.png';

const Projects = () => {
  const projects = [
    {
      title: "TracePoint - Lost & Found Web App",
      description: "A comprehensive platform for reporting and finding lost items with user authentication, real-time updates, and location tracking. Built with modern web technologies.",
      image: lostImage,
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Cloudinary"],
      github: "https://github.com/Nakkkkkul0130/TracePoint",
      live: "https://trace-point.vercel.app/",
      features: ["User Authentication", "Real-time Updates", "Image Upload", "Location Tracking"]
    },
    {
      title: "Indian Lounge - Restaurant Website",
      description: "Modern restaurant website with interactive menu display, online ordering system, responsive design, and seamless user experience for food lovers.",
      image: resImage,
      tech: ["React.js", "TailwindCSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/Nakkkkkul0130/Indian-Lounge",
      live: "https://indian-lounge.vercel.app/",
      features: ["Interactive Menu", "Online Ordering", "Responsive Design", "Smooth Animations"]
    },
    {
      title: "WellBeing - Mental Health Platform",
      description: "A supportive platform for mental health resources, counseling services, community support, and wellness tracking for better mental health management.",
      image: wellbeingImage,
      tech: ["React.js", "Node.js", "CSS3", "JavaScript", "REST API"],
      github: "https://github.com/Nakkkkkul0130/WellBeing",
      live: "https://well-being-frontend.vercel.app/",
      features: ["Mental Health Resources", "Community Support", "Wellness Tracking", "Counseling Services"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-extrabold">My </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
              Projects
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:bg-white/10 transition-all duration-500 group"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                rotateY: 2,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="text-cyan-400 font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="text-sm text-gray-400 flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <span className="text-green-400">✓</span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderColor: "rgba(255,255,255,0.4)"
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-4 rounded-xl font-semibold text-center hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🐙 GitHub
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold text-center hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🚀 Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* More Projects Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 20, 0],
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
            
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-white">Explore </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
                  More Projects
                </span>
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Discover my complete portfolio of innovative projects, experiments, and contributions on GitHub. 
                From full-stack applications to creative coding solutions!
              </motion.p>
              
              <motion.a 
                href="https://github.com/Nakkkkkul0130" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition-all duration-500 border border-white/20 backdrop-blur-sm group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.8)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                
                <motion.span 
                  className="text-3xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🐙
                </motion.span>
                
                <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                  View All Projects on GitHub
                </span>
                
                <motion.span 
                  className="text-xl group-hover:translate-x-1 transition-transform duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.div 
                className="mt-6 flex justify-center gap-8 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-green-400">⭐</span>
                  <span>20+ Repositories</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">🔥</span>
                  <span>Active Contributor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🚀</span>
                  <span>Open Source</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;