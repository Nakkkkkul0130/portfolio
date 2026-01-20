import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode Problem Solver",
      description: "Adeptly resolved 350+ problems on LeetCode platform",
      icon: "💻",
      color: "from-yellow-400 to-orange-500",
      link: "https://leetcode.com/u/nakul_bhar0130/"
    },
    {
      title: "Full-Stack Developer",
      description: "Deployed production-ready full stack application with modern tech stacks",
      icon: "🚀",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Dean's List Achievement",
      description: "Ranked among the top 10% of students (Dean's List) in my university batch",
      icon: "🎓",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Hackathon Winner",
      description: "Secured 2nd position in Integrtr Hackathon by designing the frontend UI, awarded Amazon voucher worth 5000 INR",
      icon: "🏆",
      color: "from-pink-500 to-rose-600"
    }
  ];

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

  return (
    <section id="achievements" className="py-20 relative">
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
              Achievements
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
          className="flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Achievement Icon/Image */}
              <div className="w-24 h-24 flex-shrink-0">
                <div className={`w-full h-full bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl">{achievement.icon}</span>
                </div>
              </div>
              
              {/* Achievement Content */}
              <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    View Profile →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;