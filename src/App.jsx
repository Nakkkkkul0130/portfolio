import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Training from './components/Training';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-slate-100 bg-hero-pattern min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Training />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;