import React from 'react';
import { motion } from 'framer-motion';

const frontendSkills = [
  { name: 'HTML/CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-amber-500' },
  { name: 'React.js', level: 90, color: 'from-sky-500 to-blue-500' },
  { name: 'TailwindCSS', level: 85, color: 'from-cyan-500 to-teal-500' },
];

const backendSkills = [
  { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
  { name: 'Express.js', level: 80, color: 'from-lime-500 to-green-500' },
  { name: 'MongoDB', level: 80, color: 'from-green-600 to-emerald-600' },
  { name: 'PostgreSQL', level: 75, color: 'from-indigo-500 to-purple-500' },
  { name: 'Java', level: 75, color: 'from-red-500 to-orange-500' },
  { name: 'C++', level: 70, color: 'from-pink-500 to-rose-500' },
  { name: 'PHP', level: 65, color: 'from-violet-500 to-fuchsia-500' },
];

const otherSkills = [
  { name: 'Git & GitHub', level: 85, color: 'from-orange-500 to-red-500' },
  { name: 'Postman', level: 80, color: 'from-amber-500 to-yellow-500' },
  { name: 'Vercel', level: 75, color: 'from-cyan-400 to-blue-400' },
  { name: 'Render', level: 75, color: 'from-teal-400 to-green-400' },
  { name: 'Data Structures & Algorithms', level: 85, color: 'from-rose-400 to-pink-500' },
  { name: 'OOPs / DBMS / OS / CN', level: 80, color: 'from-purple-400 to-indigo-500' },
  { name: 'Problem-Solving & Critical Thinking', level: 90, color: 'from-yellow-400 to-amber-400' },
  { name: 'Time-management & Adaptability', level: 85, color: 'from-green-400 to-emerald-400' },
];

const technologies = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL',
  'TypeScript', 'Next.js', 'TailwindCSS', 'Git', 'GitHub',
  'Firebase', 'React Native', 'Redux', 'Postman', 'Vercel', 'Render'
];

const Skills = () => {
  const renderSkillBar = (skill, index) => {
    return (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="mb-6"
      >
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">{skill.name}</span>
          <span className="text-gray-500 font-medium">{skill.level}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
            className={`h-full bg-gradient-to-r ${skill.color}`}
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Skills & <span className="text-primary-600">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            My technical skills span across frontend & backend development, core CS fundamentals, and cloud deployment tools, driving seamless web application experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold mb-6 text-center text-gray-800 border-b border-gray-100 pb-3"
            >
              Frontend Development
            </motion.h3>
            {frontendSkills.map((skill, index) => renderSkillBar(skill, index))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold mb-6 text-center text-gray-800 border-b border-gray-100 pb-3"
            >
              Backend Development
            </motion.h3>
            {backendSkills.map((skill, index) => renderSkillBar(skill, index))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold mb-6 text-center text-gray-800 border-b border-gray-100 pb-3"
            >
              Other Skills
            </motion.h3>
            {otherSkills.map((skill, index) => renderSkillBar(skill, index))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-gray-700"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;