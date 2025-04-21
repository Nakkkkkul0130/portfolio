import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, Code, Coffee, Globe, Server, Sparkles } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              I'm a passionate developer with a focus on creating meaningful solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              As a B.Tech Computer Science student at Lovely Professional University, I've developed a strong 
              foundation in both theoretical and practical aspects of software development. My journey in 
              tech has been driven by curiosity and a desire to create impactful solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I specialize in full-stack development, with expertise in modern frameworks and technologies. 
              Additionally, I'm consistently mastering Data Structures and Algorithms (DSA) to sharpen my 
              problem-solving skills. I actively solve coding challenges on LeetCode, aiming for excellence 
              and consistency every day.
            </p>
            <motion.a
              href="https://leetcode.com/u/nakul_bhar0130/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md"
            >
              🚀 View My LeetCode Profile
            </motion.a>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code size={20} />, label: "Web Development" },
                { icon: <Server size={20} />, label: "Backend Systems" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-primary-500">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>

            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="mt-8 inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              🚀 Mastering DSA
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-card"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-4">
              Personal Details
            </h3>

            <div className="space-y-4">
              {[
                { icon: <BookOpen size={20} />, label: "Education", value: "B.Tech Computer Science, Lovely Professional University" },
                { icon: <Coffee size={20} />, label: "Experience", value: "Full-Stack Development" },
                { icon: <Calendar size={20} />, label: "Availability", value: "Open to opportunities" },
                { icon: <Award size={20} />, label: "Key Skills", value: "Problem Solving, Team Collaboration, Continuous Learning" },
                { icon: <Sparkles size={20} />, label: "Mastering DSA", value: "Focused on Problem Solving & Algorithms" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="bg-primary-100 text-primary-600 p-2 rounded-md dark:bg-primary-200/20 dark:text-primary-400">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</h4>
                    <p className="text-gray-800 dark:text-gray-300">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
