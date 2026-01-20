import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Frontend Development": [
      { name: "React.js", level: 90, icon: "⚛️", color: "from-blue-400 to-cyan-500" },
      { name: "JavaScript", level: 90, icon: "🟨", color: "from-yellow-400 to-orange-500" },
      { name: "HTML/CSS", level: 95, icon: "🌐", color: "from-orange-500 to-red-500" },
      { name: "Angular", level: 80, icon: "🅰️", color: "from-red-500 to-pink-500" },
      { name: "Tailwind CSS", level: 85, icon: "💨", color: "from-teal-400 to-blue-500" }
    ],
    "Backend Development": [
      { name: "Node.js", level: 88, icon: "🟢", color: "from-green-400 to-emerald-500" },
      { name: "Express.js", level: 88, icon: "🚀", color: "from-gray-400 to-gray-600" },
      { name: "REST APIs", level: 89, icon: "🔌", color: "from-blue-400 to-cyan-500" },
      { name: "PHP", level: 75, icon: "🐘", color: "from-purple-500 to-indigo-600" }
    ],
    "Database & Storage": [
      { name: "MongoDB", level: 87, icon: "🍃", color: "from-green-500 to-green-700" },
      { name: "MySQL", level: 82, icon: "🐬", color: "from-blue-400 to-blue-600" },
      { name: "PostgreSQL", level: 78, icon: "🐘", color: "from-blue-500 to-indigo-600" },
      { name: "Firebase", level: 85, icon: "🔥", color: "from-orange-400 to-red-500" }
    ],
    "Programming Languages": [
      { name: "JavaScript", level: 90, icon: "🟨", color: "from-yellow-400 to-orange-500" },
      { name: "C++", level: 85, icon: "⚙️", color: "from-blue-500 to-purple-600" },
      { name: "Python", level: 70, icon: "🐍", color: "from-green-400 to-blue-500" },
      { name: "Java", level: 65, icon: "☕", color: "from-red-500 to-orange-600" }
    ],
    "Tools & Technologies": [
      { name: "Git/GitHub", level: 90, icon: "🐙", color: "from-gray-700 to-black" },
      { name: "Figma", level: 75, icon: "🎨", color: "from-purple-400 to-pink-500" },
      { name: "VS Code", level: 95, icon: "💻", color: "from-blue-500 to-blue-700" },
      { name: "Postman", level: 88, icon: "📮", color: "from-orange-400 to-red-500" }
    ],
    "Soft Skills": [
      { name: "Problem Solving", level: 92, icon: "🧩", color: "from-purple-500 to-pink-500" },
      { name: "Team Collaboration", level: 88, icon: "🤝", color: "from-green-400 to-teal-500" },
      { name: "Communication", level: 85, icon: "💬", color: "from-blue-400 to-cyan-500" },
      { name: "Time Management", level: 87, icon: "⏰", color: "from-orange-400 to-red-500" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring"
      }
    }
  };

  const getScoreColor = (level) => {
    if (level >= 85) return "text-green-400";
    if (level >= 75) return "text-yellow-400";
    if (level >= 65) return "text-orange-400";
    return "text-red-400";
  };

  const getProgressColor = (level) => {
    if (level >= 85) return "from-green-400 to-emerald-500";
    if (level >= 75) return "from-yellow-400 to-orange-500";
    if (level >= 65) return "from-orange-400 to-red-500";
    return "from-red-400 to-red-600";
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              Skills
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div 
              key={category} 
              className="bg-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl hover:bg-white/10 transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(255,255,255,0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-center text-white flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-3xl">
                  {category === 'Frontend Development' ? '💻' : 
                   category === 'Backend Development' ? '⚙️' : 
                   category === 'Database & Storage' ? '🗄️' : 
                   category === 'Programming Languages' ? '💾' : 
                   category === 'Tools & Technologies' ? '🛠️' : '😊'}
                </span>
                {category}
              </motion.h3>
              
              <div className="space-y-5">
                {skillList.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <motion.span 
                          className="text-2xl flex-shrink-0"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="text-white font-semibold text-base truncate">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span 
                        className={`font-bold text-base flex-shrink-0 ml-3 ${getScoreColor(skill.level)}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative">
                      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getProgressColor(skill.level)} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.5 + index * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: 1 + index * 0.1
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;