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
    <header id="inicio" className="hero-stefano-stage py-5 position-relative d-flex flex-column justify-content-between">
      {/* Fondo interactivo con Terminal utilizable */}
      <div className="hero-terminal-backdrop" aria-label="Terminal de comandos interactiva de fondo">
        <div className="terminal-backdrop-container mx-auto">
          <Terminal onCommandExecuted={onCommandExecuted} />
        </div>
      </div>

      {/* Capa de contenido en primer plano (Inspirada en Stéfano Girardelli) */}
      <div className="container hero-foreground-content position-relative z-2 py-lg-4">
        {/* Identificador superior */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="dot-mini-green"></span>
          <span className="hero-tagline small font-monospace text-secondary">
            PORTAFOLIO DE DESARROLLO SEGURO
          </span>
        </div>

        {/* Gran titular editorial con pastilla de imagen inline (Estilo Stéfano Girardelli) */}
        <h1 className="hero-headline-giant mb-4">
          <span className="d-block hero-salute-name text-white">Hola, soy {nombre}.</span>
          <span className="hero-statement">
            Construyo <span className="headline-keyword">software</span>
            <span className="inline-capsule-photo mx-2 align-middle">
              <img
                src={fotoUrl}
                alt={`Fotografía profesional de ${nombre}`}
                className="capsule-avatar-img"
              />
            </span>
            seguro & escalable.
          </span>
        </h1>

        {/* Zona inferior: Resumen a la izquierda y CTA a la derecha */}
        <div className="row align-items-end justify-content-between pt-4 mt-2 mt-lg-4 gy-4">
          <div className="col-lg-7">
            <p className="hero-role-text mb-1 fw-semibold text-light">
              {titulo}
            </p>
            <p className="hero-subtext mb-3 text-secondary">
              {biografia}
            </p>

            <div className="d-flex align-items-center gap-3">
              <span className="text-muted small">Canales:</span>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="social-pill-link"
                aria-label="GitHub de Vicente Guzmán"
              >
                <i className="bi bi-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="social-pill-link"
                aria-label="LinkedIn de Vicente Guzmán"
              >
                <i className="bi bi-linkedin" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="social-pill-link"
                aria-label="Enviar correo electrónico a Vicente Guzmán"
              >
                <i className="bi bi-envelope-at-fill" aria-hidden="true"></i>
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="col-lg-4 text-start text-lg-end">
            <a href="#proyectos" className="hero-explore-cta text-decoration-none">
              <span>VER PROYECTOS</span>
              <i className="bi bi-arrow-down-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
