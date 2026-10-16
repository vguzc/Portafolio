import React, { useState } from 'react';
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
  const [showConsole, setShowConsole] = useState(false);

  return (
    <header id="inicio" className="hero-minimal py-5 d-flex align-items-center">
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          {/* Columna Izquierda: Mensaje editorial limpio */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="d-inline-flex align-items-center gap-2 status-pill-minimal mb-3">
              <span className="dot-mini-green"></span>
              <span className="small text-secondary">Desarrollo Seguro & Arquitectura Web</span>
            </div>

            <h1 className="display-4 fw-bold hero-main-heading mb-3">
              Hola, soy {nombre}
            </h1>

            <p className="hero-editorial-lead mb-3">
              Construyo software seguro, interfaces interactivas y arquitecturas web escalables.
            </p>

            <p className="hero-role-text text-secondary mb-2 fw-medium">
              {titulo}
            </p>

            <p className="hero-subtext text-secondary mb-4">
              {biografia}
            </p>

            {/* Acciones principales */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a href="#proyectos" className="btn btn-minimal-primary px-4 py-2">
                Explorar Proyectos
              </a>
              <a href="#contacto" className="btn btn-minimal-secondary px-4 py-2">
                Contactar
              </a>
              <button
                type="button"
                className="btn btn-minimal-toggle px-3 py-2"
                onClick={() => setShowConsole(!showConsole)}
                title="Abrir u ocultar consola interactiva"
              >
                <i className={`bi ${showConsole ? 'bi-image' : 'bi-terminal'} me-1`}></i>
                {showConsole ? 'Ver Foto' : 'Abrir Consola'}
              </button>
            </div>

            {/* Enlaces a canales */}
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start">
              <span className="text-muted small">Canales directos:</span>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub de Vicente Guzmán">
                <i className="bi bi-github" aria-hidden="true"></i>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn de Vicente Guzmán">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
              <a href={`mailto:${email}`} className="social-pill" aria-label="Enviar correo electrónico a Vicente Guzmán">
                <i className="bi bi-envelope-at-fill" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Ventana Enmarcada (Inspirada en Perry Wang) */}
          <div className="col-lg-5">
            <div className="showcase-window shadow-lg mx-auto">
              {/* Barra superior de la ventana */}
              <div className="showcase-window-header d-flex align-items-center justify-content-between px-3 py-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="window-dot dot-close"></span>
                  <span className="window-dot dot-min"></span>
                  <span className="window-dot dot-max"></span>
                </div>
                <span className="window-title small text-muted font-monospace">
                  {showConsole ? 'console.sh' : 'workspace.jpg'}
                </span>
                <span className="dot-mini-green"></span>
              </div>

              {/* Contenido de la ventana: Foto de Lego Neo o Terminal */}
              <div className="showcase-window-body">
                {showConsole ? (
                  <Terminal onCommandExecuted={onCommandExecuted} />
                ) : (
                  <div className="image-frame position-relative">
                    <img
                      src={fotoUrl}
                      alt={`Fotografía profesional de ${nombre}`}
                      className="img-fluid showcase-image"
                      width="480"
                      height="320"
                      loading="eager"
                    />
                    <div className="image-tag-overlay font-monospace small">
                      <span>Wake up, Neo...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
