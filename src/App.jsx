import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SectionWrapper = ({ children, direction = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const HomePage = () => (
  <>
    <Hero />
    <SectionWrapper direction="left"><About /></SectionWrapper>
    <SectionWrapper direction="right"><Skills /></SectionWrapper>
    <SectionWrapper direction="left"><Projects /></SectionWrapper>
    <SectionWrapper direction="right"><Education /></SectionWrapper>
    <SectionWrapper direction="left"><Achievements /></SectionWrapper>
    <SectionWrapper direction="right"><Certificates /></SectionWrapper>
    <SectionWrapper direction="left"><Contact /></SectionWrapper>
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SectionWrapper><About /></SectionWrapper>} />
        <Route path="/skills" element={<SectionWrapper><Skills /></SectionWrapper>} />
        <Route path="/projects" element={<SectionWrapper><Projects /></SectionWrapper>} />
        <Route path="/education" element={<SectionWrapper><Education /></SectionWrapper>} />
        <Route path="/achievements" element={<SectionWrapper><Achievements /></SectionWrapper>} />
        <Route path="/certificates" element={<SectionWrapper><Certificates /></SectionWrapper>} />
        <Route path="/contact" element={<SectionWrapper><Contact /></SectionWrapper>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;