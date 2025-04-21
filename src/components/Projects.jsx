import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import project1 from '../assets/lost.png';
import project2 from '../assets/res.png';
import project3 from '../assets/wellbeing.png';

const projects = [
  {
    id: 1,
    title: 'TracePoint',
    description: 'TracePoint is a modern and responsive Lost & Found web application built with React, Node.js, Express, and MongoDB. It allows users to report lost items, view found ones, and securely claim items with real-time status updates and email notifications.',
    image: project1,
    tags: ['React.js', 'Node.js', 'TailwindCSS', 'MongoDB'],
    github: 'https://github.com/Nakkkkkul0130/TracePoint',
    demo: 'https://trace-point.vercel.app/'
  },
  {
    id: 2,
    title: 'Indian Lounge',
    description: 'Indian Lounge is a fully responsive restaurant website built with React.js and TailwindCSS. It features a booking functionality using React Router and manages application state efficiently with Redux, also implementing lazy loading for optimized performance.',
    image: project2,
    tags: ['React.js', 'TailwindCSS', 'Redux', 'React Router'],
    github: 'https://github.com/Nakkkkkul0130/restaurant-website',
    demo: 'https://restaurant-website-gamma-ten.vercel.app/'
  },
  {
    id: 3,
    title: 'WellBeing',
    description: 'WellBeing is a mental health support website designed with HTML, CSS, JavaScript, SwiperJS, Font Awesome, and jQuery. It offers meditation classes, counseling services, and community support with a user-friendly, responsive interface.',
    image: project3,
    tags: ['HTML', 'CSS', 'JavaScript', 'SwiperJS', 'jQuery'],
    github: 'https://github.com/Nakkkkkul0130/WellBeing',
    demo: 'https://github.com/Nakkkkkul0130/WellBeing'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            My <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Here's a selection of projects I've worked on, showcasing my skills
            and experience in different technologies and domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-card group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full text-gray-800 hover:bg-white"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary-500/90 p-2 rounded-full text-white hover:bg-primary-500"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;