'use client';

export default function Menu({ onHome, onProjects, onContact, activeSection }) {
  return (
    <div className="menu">
      <button
        onClick={onHome}
        className={`menu-button ${activeSection === 'home' ? 'active' : ''}`}
      >
        Home
      </button>
      <button
        onClick={onProjects}
        className={`menu-button ${activeSection === 'projects' ? 'active' : ''}`}
      >
        Projects
      </button>
      <button
        onClick={onContact}
        className={`menu-button ${activeSection === 'contact' ? 'active' : ''}`}
      >
        Contact
      </button>
    </div>
  );
}
