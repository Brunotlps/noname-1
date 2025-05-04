// page.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from '../components/Menu';
import Projects from '../components/Projects';
import Animation from '../components/ClientOnlyAnimation'; 
import Presentation from '@/components/Presentation';
import Contact from '@/components/Contact'; // Novo componente

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="container">
      <header id="wai">
        <h1>Bruno Teixeira Lopes</h1>
        <h2>Software Developer</h2>
      </header>
      
      <aside className='sidebar'>
        <Menu
          onHome={() => setActiveSection('home')}
          onProjects={() => setActiveSection('projects')}
          onContact={() => setActiveSection('contact')}
          activeSection={activeSection}
        />
      </aside>

      <main className="animation-container">
        <Animation />
      </main>

      <AnimatePresence mode="wait">
        {activeSection === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="projects-panel"
          >
            <Projects />
          </motion.div>
        )}
        {activeSection === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="contact"
          >
            <Contact />
          </motion.div>
        )}
        {activeSection === 'home' && (
          <motion.div
            key="presentation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="presentation-div"
          >
            <Presentation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
