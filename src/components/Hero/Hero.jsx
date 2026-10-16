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
    <header id="inicio" className="hero-section text-white py-5 d-flex align-items-center">
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          {/* Columna Izquierda: Presentación y bio */}
          <div className="col-lg-6 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 status-chip font-monospace mb-3">
              <span className="dot dot-green"></span>
              <span>Wake up, Neo... [Desarrollo Seguro & OWASP]</span>
            </div>

            <h1 className="display-4 fw-bold mb-3 hero-title">
              Hola, soy <span className="phosphor-text">{nombre}</span>
            </h1>

            <p className="lead hero-subtitle mb-3 font-monospace">
              {titulo}
            </p>

            <p className="hero-bio mb-4 text-secondary">
              {biografia}
            </p>

            {/* Botones de acción */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a href="#proyectos" className="btn btn-crt-primary font-monospace px-4 py-2 shadow-sm">
                <i className="bi bi-hdd-stack me-2" aria-hidden="true"></i>
                Ver Misiones / Proyectos
              </a>
              <a href="#contacto" className="btn btn-crt-outline font-monospace px-4 py-2">
                <i className="bi bi-terminal-fill me-2" aria-hidden="true"></i>
                Contactar
              </a>
            </div>

            {/* Enlaces de contacto y redes accesibles */}
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start social-links">
              <span className="text-muted small font-monospace">Canales:</span>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub de Vicente Guzmán">
                <i className="bi bi-github" aria-hidden="true"></i>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn de Vicente Guzmán">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
              <a href={`mailto:${email}`} className="social-icon" aria-label="Enviar correo electrónico a Vicente Guzmán">
                <i className="bi bi-envelope-at-fill" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Imagen Lego Neo y Terminal Interactiva */}
          <div className="col-lg-6">
            <div className="hero-interactive-stage">
              {/* Marco estilo monitor CRT con la foto de Lego */}
              <div className="monitor-frame mb-3 mx-auto">
                <div className="monitor-top-bar d-flex align-items-center justify-content-between px-3 py-1">
                  <span className="font-monospace small text-muted">CRT MONITOR [REC]</span>
                  <span className="font-monospace text-success small">● SIGNAL: HIGH</span>
                </div>
                <div className="monitor-screen position-relative">
                  <img
                    src={fotoUrl}
                    alt={`Fotografía profesional de ${nombre}`}
                    className="img-fluid monitor-image"
                    width="480"
                    height="320"
                    loading="eager"
                  />
                  <div className="crt-overlay"></div>
                </div>
              </div>

              {/* Terminal de comandos interactiva */}
              <Terminal onCommandExecuted={onCommandExecuted} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
