import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const training = [
    {
      title: "Frontend Apprenticeship",
      institution: "Gokboru Tech",
      duration: "June 2024 – July 2024",
      description: "Completed an intensive summer apprenticeship program, gaining hands-on expertise in React.js, state management, and component-based development. Collaborated on multiple small-scale projects, enhancing understanding of frontend development principles.",
      skills: ["React.js", "State Management", "Component Development", "Frontend Best Practices"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      duration: "August 2022 – March 2026",
      gpa: "GPA: 7.51/10",
      coursework: ["Object Oriented Programming", "Data Structures and Algorithms", "DBMS", "Full-stack Web Development"]
    },
    {
      degree: "12th with Physics, Chemistry and Mathematics",
      institution: "Arya Sr Sec School, Rohtak",
      duration: "March 2021 – March 2022",
      gpa: "78.6%"
    },
    {
      degree: "10th",
      institution: "Vikalp Public High School, Rohtak",
      duration: "March 2019 – March 2020",
      gpa: "83.4%"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">Training & </span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 h-full"></div>

          {/* Training Section */}
          <div className="mb-8">
            {training.map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* Training Label */}
                <div className="w-5/12 ml-0 pr-8 mb-4">
                  <h3 className="text-2xl font-bold text-white">Training</h3>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Training Card - Left Side */}
                <div className="w-5/12 ml-0 pr-8">
                  <div className="bg-white/5 border border-white/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-blue-400 mb-2">{item.institution}</p>
                    <p className="text-gray-400 text-sm mb-4">{item.duration}</p>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            {education.map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* Education Label - Only for first item */}
                {index === 0 && (
                  <div className="w-5/12 ml-auto pl-8 mb-4">
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Education Card - Right Side */}
                <div className="w-5/12 ml-auto pl-8">
                  <div className="bg-white/5 border border-white/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                    <p className="text-green-400 mb-2">{item.institution}</p>
                    <div className="flex justify-between mb-2">
                      <span className="text-cyan-400 font-semibold">{item.gpa}</span>
                      <span className="text-gray-400 text-sm">{item.duration}</span>
                    </div>
                    {item.coursework && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.coursework.map((course, i) => (
                          <span key={i} className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;