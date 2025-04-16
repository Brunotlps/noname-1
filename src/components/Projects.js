'use client';

export default function Projects() {
  const items = [
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    { title: 'Project ', desc: 'Description' },
    // … adicione quantos quiser
  ];

  return (
    <section className="projects visible">
      <ul>
        {items.map((p, i) => (
          <li key={i} className="project-item">
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
