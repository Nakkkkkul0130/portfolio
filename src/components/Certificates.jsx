import React from 'react';
import { motion } from 'framer-motion';
// Import certificate images
import ibmCert from '../assets/ibm.png';
import gokboruCert from '../assets/summert.png';
import courseraCert from '../assets/htmlcssjss.png';
import udemyCert from '../assets/dss.png';

const Certificates = () => {
  const certificates = [
    {
      title: "JavaScript Programming Essentials",
      issuer: "IBM",
      date: "Sep 2025",
      image: ibmCert,
      link: "https://coursera.org/share/730810c21f0e98a8614b74eac7a46f36"
    },
    {
      title: "Summer Training Certificate in Frontend Development with Reactjs",
      issuer: "Gokboru Tech",
      date: "July 2024",
      image: gokboruCert,
      link: "https://your-certificate-link.com"
    },
    {
      title: "Html, Css, Javascript for Web Developers",
      issuer: "Coursera",
      date: "May 2024",
      image: courseraCert,
      link: "https://coursera.org/share/0ef9eebe5735d37873d930d4edda6d33"
    },
    {
      title: "Data Structure and Algorithm",
      issuer: "Udemy",
      date: "Sep 2023",
      image: udemyCert,
      link: "https://www.udemy.com/certificate/UC-665b2777-c830-48a8-806a-fc12e5eca714/"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white font-extrabold">My </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
              Certificates
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/20 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-medium mb-4">{cert.issuer}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm bg-white/10 px-3 py-1 rounded-lg">
                    📅 {cert.date}
                  </span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;