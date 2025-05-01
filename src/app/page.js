'use client';

import { useState } from 'react';
import Menu from '../components/Menu';
import Projects from '../components/Projects';
import Animation from '../components/ClientOnlyAnimation'; 
import Presentation from '@/components/Presentation';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="container">
      <header id="wai">
        <h1>Bruno Teixeira</h1>
        <h2>Software Developer</h2>
      </header>
      
      <aside className='sidebar'>
        <Menu
          onHome={() => setShowProjects(false)}
          onProjects={() => setShowProjects(true)}
        />
      </aside>

      <main className="animation-container">
        <Animation />
      </main>

      {showProjects ? (
        <div className="projects-panel">
          <Projects />
        </div>
      ) : (
        <div className="presentation-div">
          <Presentation />
        </div>
)} 
     
    </div>
  );
}
