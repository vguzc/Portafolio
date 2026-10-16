import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="minimal-footer py-4 border-top border-secondary-subtle">
      <div className="container">
        <div className="row align-items-center justify-content-between gy-3">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small text-muted">
              © {new Date().getFullYear()} <strong className="text-light">Vicente Guzmán</strong> • Portafolio Personal
            </p>
            <p className="mb-0 small text-muted">
              Evaluación Formativa N° 2 — <span className="text-secondary">Desarrollo Fullstack II (DSY1104)</span> • Duoc UC
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end d-flex justify-content-center justify-content-md-end align-items-center gap-3">
            <a href="https://github.com/Vguzc" target="_blank" rel="noreferrer" className="text-secondary hover-light-icon" aria-label="GitHub">
              <i className="bi bi-github fs-5" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary hover-light-icon" aria-label="LinkedIn">
              <i className="bi bi-linkedin fs-5" aria-hidden="true"></i>
            </a>
            <button
              onClick={scrollToTop}
              className="btn btn-sm minimal-back-to-top d-flex align-items-center justify-content-center"
              title="Volver al inicio"
              aria-label="Volver arriba"
            >
              <i className="bi bi-chevron-up" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
