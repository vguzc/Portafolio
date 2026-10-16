import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ xp = 100 }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg sticky-top minimal-navbar py-3" aria-label="Navegación principal">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Identidad / Marca */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio" onClick={closeNav}>
          <span className="status-dot-green" title="Disponible para proyectos"></span>
          <div className="d-flex flex-column">
            <span className="brand-title fw-bold">Vicente Guzmán</span>
            <span className="brand-subtitle text-muted">Fullstack & Ciberseguridad</span>
          </div>
        </a>

        {/* Botón responsive para móviles */}
        <button
          className="navbar-toggler minimal-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Alternar navegación"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación flotante tipo isla / pill dock */}
        <div className={`collapse navbar-collapse justify-content-center ${!isNavCollapsed ? 'show' : ''}`} id="navbarContent">
          <div className="nav-pill-dock d-flex align-items-center my-2 my-lg-0">
            <ul className="navbar-nav d-flex flex-row gap-1 m-0 p-0">
              <li className="nav-item">
                <a className="nav-link pill-link" href="#inicio" onClick={closeNav}>
                  Sobre Mí
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pill-link" href="#proyectos" onClick={closeNav}>
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pill-link" href="#noticias" onClick={closeNav}>
                  Noticias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pill-link" href="#contacto" onClick={closeNav}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Acciones directas a la derecha */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <a
            className="direct-link d-inline-flex align-items-center gap-1"
            href="https://github.com/Vguzc"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de GitHub de Vicente Guzmán"
          >
            <span>GitHub</span>
            <i className="bi bi-arrow-up-right small" aria-hidden="true"></i>
          </a>
          <span className="xp-chip font-monospace small" title="Puntos de experiencia de exploración">
            XP: {xp}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
