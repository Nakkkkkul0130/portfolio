import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const training = [
  {
    id: 1,
    title: 'Frontend Web Development',
    company: 'Gokboru Tech Pvt. Ltd.',
    period: 'June 2024 - July 2024',
    description: 'Mastered foundational frontend technologies: ReactJS, TailwindCSS, and JavaScript. Built projects including a To-Do List App and a Single Page Application (SPA).',
    skills: ['ReactJS', 'TailwindCSS', 'JavaScript']
  }
];

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology (CSE)',
    institution: 'Lovely Professional University, Punjab',
    period: 'Aug 2022 - Present',
    description: 'CGPA: 7.4',
    courses: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks']
  },
  {
    id: 2,
    degree: 'Intermediate (PCM)',
    institution: 'Arya Sr. Sec. School, Rohtak',
    period: 'Mar 2021 - May 2022',
    description: 'Percentage: 78% ',
    courses: []
  },
  {
    id: 3,
    degree: 'Matriculation',
    institution: 'Vikalp Public School, Rohtak',
    period: 'Mar 2019 - May 2020',
    description: 'Percentage: 83.4%',
    courses: []
  }
];

const Training = () => {
  return (
    <section id="training" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Training & <span className="text-primary-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            My professional journey includes specialized training programs and formal education
            that have equipped me with the skills and knowledge needed in the tech industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <Briefcase size={24} className="text-primary-600 mr-2" />
                  Professional Training
                </h3>
                <p className="text-gray-600 mb-8">
                  I've participated in specialized training programs to enhance my practical skills
                  and gain real-world experience in frontend development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <GraduationCap size={24} className="text-primary-600 mr-2" />
                  Education
                </h3>
                <p className="text-gray-600">
                  My formal education has provided me with a strong foundation in computer science principles
                  and practical skills that I continue to build upon.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative pl-8 border-l-2 border-gray-200 mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <Calendar size={20} className="text-primary-600 mr-2" />
                Professional Training Timeline
              </h3>

              {training.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="mb-10 relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-primary-500"></div>
                  <div className="bg-white p-6 rounded-lg shadow-card ml-2">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                      <span className="text-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{item.company}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <h3 className="text-xl font-semibold mb-6 mt-12 text-gray-800 flex items-center">
                <Calendar size={20} className="text-primary-600 mr-2" />
                Education Timeline
              </h3>

              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="mb-10 relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-secondary-500"></div>
                  <div className="bg-white p-6 rounded-lg shadow-card ml-2">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{item.degree}</h4>
                      <span className="text-sm text-white bg-gradient-to-r from-secondary-600 to-secondary-700 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{item.institution}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {item.courses.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Key Courses:</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.courses.map((course) => (
                            <li key={course}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;