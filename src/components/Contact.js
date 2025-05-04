
'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
    return (
        <section className="contact">
        <div className="info-text">
          <p>
          Valeu demais pela visita.
          Se curtiu meu trabalho, achou o site interessante, ou tem alguma crítica construtiva, fique à vontade para entrar em contato — adoro trocar ideia e sempre estou aberto a feedbacks!
          </p>
        </div>
  
        <div className="social-links">
          <a href="https://github.com/Brunotlps" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/brunotlps/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/brunotlps/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="mailto:brunoteixlps@gmail.com" aria-label="Email">
            <MdEmail size={30} />
          </a>
        </div>
      </section>
    )
  }
  