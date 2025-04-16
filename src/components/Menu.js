'use client';

export default function Menu({ onHome, onProjects }) {
  return (
    <nav className="menu">
      <button className="menu-button" onClick={onHome}>
        Home
      </button>
      <button className="menu-button" onClick={onProjects}>
        Projects
      </button>
    </nav>
  );
}
