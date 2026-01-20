import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { 
      href: "https://github.com/Nakkkkkul0130", 
      label: "GitHub", 
      icon: "🐙",
      color: "from-gray-700 to-gray-900"
    },
    { 
      href: "https://linkedin.com/in/nakul-bhar0130", 
      label: "LinkedIn", 
      icon: "💼",
      color: "from-blue-600 to-blue-800"
    },
    { 
      href: "mailto:nakkul.dev@gmail.com", 
      label: "Email", 
      icon: "📧",
      color: "from-red-500 to-orange-500"
    },
    { 
      href: "https://twitter.com/nakulbhar001", 
      label: "Twitter", 
      icon: "🐦",
      color: "from-sky-400 to-blue-500"
    }
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/achievements", label: "Achievements" },
    { href: "/certificates", label: "Certificates" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Nakul Bhar
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              ✨ Crafting digital experiences with passion and precision ✨
            </p>
            <p className="text-gray-400 mb-4">
              💫 Turning ideas into reality, one line of code at a time 💫
            </p>
            <p className="text-gray-500 text-sm">
              📍 Rohtak,Haryana, India
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`bg-gradient-to-r ${link.color} p-4 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform duration-300`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-white font-semibold text-sm">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nakul Bhar. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-gray-500 text-sm">
              Made with ❤️ & ☕ by Nakul
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;