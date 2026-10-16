import React from 'react';
import './Hero.css';

const Hero = ({
  nombre = "Vicente Guzmán",
  titulo = "Estudiante de Informática Duoc UC | Desarrollador Fullstack & Ciberseguridad",
  biografia = "Apasionado por la construcción de aplicaciones web seguras, escalables y responsivas con React y tecnologías modernas. Enfocado en aplicar estándares OWASP, testing automatizado y buenas prácticas de ingeniería de software.",
  fotoUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  githubUrl = "https://github.com/Vguzc",
  linkedinUrl = "https://linkedin.com",
  email = "vi.guzmanc@duocuc.cl"
}) => {
  return (
    <header id="inicio" className="hero-section text-white py-5 d-flex align-items-center">
      <div className="container py-lg-4">
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle px-3 py-2 rounded-pill fw-semibold mb-3 d-inline-block">
              <i className="bi bi-shield-check me-1"></i> Portafolio Profesional & Desarrollo Seguro
            </span>
            <h1 className="display-4 fw-bold mb-3 hero-title">
              Hola, soy <span className="gradient-text">{nombre}</span>
            </h1>
            <p className="lead text-light-50 mb-3 fw-medium">
              {titulo}
            </p>
            <p className="text-secondary mb-4 hero-bio">
              {biografia}
            </p>
            
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a href="#proyectos" className="btn btn-primary btn-lg rounded-pill px-4 shadow">
                <i className="bi bi-code-slash me-2" aria-hidden="true"></i>
                Ver Mis Proyectos
              </a>
              <a href="#contacto" className="btn btn-outline-light btn-lg rounded-pill px-4">
                <i className="bi bi-send me-2" aria-hidden="true"></i>
                Contactar
              </a>
            </div>

            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start social-links">
              <span className="text-secondary small">Redes y contacto:</span>
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

          <div className="col-lg-5 text-center">
            <div className="hero-avatar-wrapper position-relative mx-auto">
              <img
                src={fotoUrl}
                alt={`Fotografía profesional de ${nombre}`}
                className="img-fluid rounded-circle shadow-lg hero-avatar"
                width="320"
                height="320"
                loading="eager"
              />
              <div className="avatar-badge position-absolute bottom-0 end-0 bg-dark text-white p-2 rounded-circle shadow border border-2 border-primary">
                <i className="bi bi-check-circle-fill text-info fs-4" title="Verificado"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
