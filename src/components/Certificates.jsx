import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'JAVA Certification',
    issuer: 'HackerRank',
    date: "January 2025",
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
    link: 'https://www.hackerrank.com/certificates/iframe/054ad3443508'
  },
  {
    id: 2,
    title: 'Building Web Applications in PHP',
    issuer: 'Coursera',
    date: "December 2024",
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
    link: 'https://coursera.org/share/dedad0e96440adceab9c6d6fd2ea692b'
  },
  {
    id: 3,
    title: 'Data Structure and Algorithm',
    issuer: 'Udemy',
    date: "March 2023",
    image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg',
    link: 'https://www.udemy.com/certificate/UC-665b2777-c830-48a8-806a-fc12e5eca714/'
  },
  {
    id: 4,
    title: 'Python Basics',
    issuer: 'HackerRank',
    date: "March 2023",
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    link: 'https://www.hackerrank.com/certificates/iframe/abd6f1a52a6a'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award size={32} className="text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Certificates
            </h2>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            I'm committed to continuous learning. Here are some of the certifications I've earned
            to enhance my skills.
          </p>
        </motion.div>

        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * cert.id }}
                className="bg-white rounded-lg overflow-hidden shadow-card group"
              >
                <div className="relative h-36 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs py-1 px-3 rounded-bl-lg">
                    {cert.date}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-gray-800 mb-1">{cert.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">Issued by {cert.issuer}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 text-sm hover:text-primary-700 transition-colors"
                  >
                    View Certificate
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
