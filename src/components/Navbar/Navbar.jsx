import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ xp = 100 }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#inicio" onClick={closeNav}>
          <span className="brand-badge font-monospace">&lt;VG /&gt;</span>
          <span className="brand-name">Vicente Guzmán</span>
        </a>

        {/* HUD de estado / Gamificación */}
        <div className="d-none d-md-flex align-items-center gap-2 ms-lg-3 px-3 py-1 hud-status">
          <span className="pulse-indicator"></span>
          <span className="hud-text small font-monospace">STATUS: NOMINAL</span>
          <span className="hud-separator">|</span>
          <span className="hud-xp small font-monospace text-success">
            <i className="bi bi-controller me-1"></i>XP: {xp}
          </span>
        </div>

        <button
          className="navbar-toggler custom-toggler"
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

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-1 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link font-monospace" href="#inicio" onClick={closeNav}>
                <i className="bi bi-terminal me-1" aria-hidden="true"></i>
                Sobre Mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-monospace" href="#proyectos" onClick={closeNav}>
                <i className="bi bi-hdd-network me-1" aria-hidden="true"></i>
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-monospace" href="#noticias" onClick={closeNav}>
                <i className="bi bi-journal-code me-1" aria-hidden="true"></i>
                Noticias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-monospace" href="#contacto" onClick={closeNav}>
                <i className="bi bi-cpu me-1" aria-hidden="true"></i>
                Contacto
              </a>
            </li>
            <li className="nav-item ms-lg-2">
              <a
                className="btn btn-hud-github btn-sm font-monospace px-3 d-inline-flex align-items-center gap-1 mt-2 mt-lg-0"
                href="https://github.com/Vguzc"
                target="_blank"
                rel="noreferrer"
                aria-label="Perfil de GitHub de Vicente Guzmán"
              >
                <i className="bi bi-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
