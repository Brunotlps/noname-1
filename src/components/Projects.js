'use client';

import projectsData from '../data/projects.json'


export default function Projects() {

  return (
    <section className="projects visible">
      <ul>
        {projectsData.map((p, i) => (
          <li key={i} className="project-item">
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
