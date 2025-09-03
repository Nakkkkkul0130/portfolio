import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Ethical Hacking Certification',
    date: '2024',
    description: 'Received certification in Ethical Hacking from NPTEL, strengthening cybersecurity knowledge.',
    icon: <Trophy size={24} />
  },
  {
    id: 2,
    title: '280+ Problems Solved on LeetCode',
    date: '2025',
    description: 'Surpassed milestone of solving 280+ LeetCode questions, significantly improving problem-solving skills.',
    icon: <Award size={24} />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            My <span className="text-primary-600">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Some notable achievements and recognitions I've received throughout my academic and professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition duration-300"
            >
              <div className="p-6 flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {achievement.icon}
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                    <span className="text-sm text-gray-500">{achievement.date}</span>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-lg shadow-card overflow-hidden"
        >
          <div className="p-8 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <h3 className="text-2xl font-semibold mb-2">Continuous Growth & Learning</h3>
            <p>I believe in constantly improving and expanding my skillset to stay ahead in this ever-evolving tech landscape.</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">280+</div>
                <div className="text-gray-600">DSA Question Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-gray-600">Years of Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;