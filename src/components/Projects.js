'use client';

import projects from '../data/projects.json'


export default function Projects({ className }) {

  return (
    <section className="projects visible">
      <ul>
        {projects.map((p, i) => (
          <li key={i} className="project-item">
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
