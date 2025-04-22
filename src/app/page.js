'use client';

import { useState } from 'react';
import Animation from '../components/Animation';
import Menu      from '../components/Menu';
import Projects  from '../components/Projects';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <main className="container">
      <header id="wai">
        <h1>Bruno Teixeira</h1>
        <h2>Software Developer</h2>
      </header>

      <Menu
        onHome={() => setShowProjects(false)}
        onProjects={() => setShowProjects(true)}
      />

      {showProjects ? <Projects /> : <Animation />}
    </main>
  );
}
