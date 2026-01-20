import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-black/30" />
      
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
            <span className="text-white font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>About </span>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent font-extrabold">
              Me
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
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-lg leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                color: '#f8fafc',
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
              }}
            >
              <strong className="text-cyan-300">Full Stack Developer</strong> with hands-on experience in building 
              end-to-end web applications integrated with <strong className="text-purple-300">AI technologies (OpenAI API)</strong>. 
              Currently pursuing B.Tech in Computer Science at LPU with strong focus on modern web development and AI integration.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ 
                color: '#f8fafc',
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
              }}
            >
              <strong>Technical Expertise:</strong> Proficient in <span className="text-purple-300 font-bold">React.js, Node.js, Express.js, 
              MongoDB, PostgreSQL</span>, with experience in <span className="text-pink-300 font-bold">OpenAI API integration, 
              Cloud Deployment, RESTful APIs, and Git/GitHub</span>. Regularly solving <strong className="text-orange-300">DSA problems on LeetCode</strong>.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ 
                color: '#f8fafc',
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
              }}
            >
              Seeking opportunities as a <strong className="text-green-300">Software Developer / Full Stack Developer</strong> where 
              I can leverage my skills in web development, AI integration, and problem-solving to build innovative solutions.
            </motion.p>

            <motion.a
              href="https://leetcode.com/u/nakul_bhar0130/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">🧩</span>
              <span>View LeetCode Profile</span>
            </motion.a>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { number: "20+", label: "Projects Completed", color: "from-cyan-300 to-blue-400" },
              { number: "3+", label: "Years Learning", color: "from-purple-300 to-pink-400" },
              { number: "10+", label: "Technologies", color: "from-green-300 to-emerald-400" },
              { number: "100%", label: "Dedication", color: "from-orange-300 to-red-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-black/40 backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 text-center hover:bg-black/50 transition-all duration-300 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white text-sm font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;