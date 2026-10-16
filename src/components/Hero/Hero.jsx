import React from 'react';
import defaultAvatar from '../../assets/perfil.jpg';
import Terminal from '../Terminal/Terminal';
import './Hero.css';

const Hero = ({
  nombre = "Vicente Guzmán",
  titulo = "Estudiante de Informática Duoc UC | Desarrollador Fullstack & Ciberseguridad",
  biografia = "Apasionado por la construcción de aplicaciones web seguras, escalables y responsivas con React y tecnologías modernas. Enfocado en aplicar estándares OWASP, testing automatizado y buenas prácticas de ingeniería de software.",
  fotoUrl = defaultAvatar,
  githubUrl = "https://github.com/Vguzc",
  linkedinUrl = "https://linkedin.com",
  email = "vi.guzmanc@duocuc.cl",
  onCommandExecuted
}) => {
  return (
    <section id="inicio" className="home-terminal-fullscreen d-flex">
      {/* Barra Lateral (Sidebar): Foto, GitHub, LinkedIn y Contacto */}
      <aside className="hero-lateral-sidebar d-flex flex-column align-items-center justify-content-between p-3" aria-label="Barra lateral de perfil y redes">
        <div className="sidebar-top d-flex flex-column align-items-center gap-2">
          <div className="sidebar-avatar-wrapper position-relative">
            <img
              src={fotoUrl}
              alt={`Fotografía profesional de ${nombre}`}
              className="sidebar-avatar-img rounded-circle"
              width="52"
              height="52"
              loading="eager"
            />
            <span className="sidebar-status-dot" title="En línea"></span>
          </div>
          <span className="sidebar-user-tag font-monospace text-muted">&lt;VG/&gt;</span>
        </div>

        {/* Enlaces de la barra lateral: Navegación, Redes y Contacto */}
        <nav className="sidebar-links d-flex flex-column align-items-center gap-3 my-auto" aria-label="Navegación de accesos rápidos y redes">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="sidebar-icon-link"
            aria-label={`GitHub de ${nombre}`}
            title="GitHub"
          >
            <i className="bi bi-github fs-5" aria-hidden="true"></i>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="sidebar-icon-link"
            aria-label={`LinkedIn de ${nombre}`}
            title="LinkedIn"
          >
            <i className="bi bi-linkedin fs-5" aria-hidden="true"></i>
          </a>
          <a
            href={`mailto:${email}`}
            className="sidebar-icon-link"
            aria-label={`Enviar correo electrónico a ${nombre}`}
            title="Enviar correo electrónico"
          >
            <i className="bi bi-envelope-at-fill fs-5" aria-hidden="true"></i>
          </a>
          <a
            href="#contacto"
            className="sidebar-icon-link"
            aria-label="Ir a formulario de contacto"
            title="Formulario de Contacto"
          >
            <i className="bi bi-chat-text-fill fs-5" aria-hidden="true"></i>
          </a>
        </nav>

        {/* Botón inferior para ir a proyectos */}
        <div className="sidebar-bottom">
          <a href="#proyectos" className="sidebar-scroll-down" title="Ver proyectos" aria-label="Ver proyectos">
            <i className="bi bi-chevron-down"></i>
          </a>
        </div>
      </aside>

      {/* Pantalla Principal: Terminal como fondo completo de Home */}
      <div className="terminal-main-stage flex-grow-1 p-2 p-md-3 d-flex flex-column">
        <Terminal onCommandExecuted={onCommandExecuted}>
          <div className="terminal-hero-headline-block mb-3">
            <div className="terminal-session-meta font-monospace small text-muted mb-2">
              // duoc-uc-workstation :: sesión activa
            </div>
            {/* Texto principal solicitado dentro de la terminal */}
            <h1 className="terminal-main-headline font-monospace text-white mb-2">
              Hola soy <span className="text-white fw-bold">{nombre}</span>, construyo{' '}
              <span className="terminal-accent-text">software seguro y escalable</span>.
            </h1>

            {/* Role y Bio mostrados como comentarios de código de la terminal */}
            <div className="terminal-comments-block font-monospace my-3">
              <div className="terminal-comment-line small text-muted mb-1">
                <span className="terminal-comment-prefix text-secondary"># [ROLE]:</span>{' '}
                <span className="terminal-comment-val text-light">{titulo}</span>
              </div>
              <div className="terminal-comment-line small text-muted">
                <span className="terminal-comment-prefix text-secondary"># [BIO]:</span>{' '}
                <span className="terminal-comment-val text-secondary">{biografia}</span>
              </div>
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  );
};

export default Hero;
