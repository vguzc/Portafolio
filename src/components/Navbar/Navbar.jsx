import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm custom-navbar" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#inicio" onClick={closeNav}>
          <span className="brand-badge">&lt;VG /&gt;</span>
          <span>Vicente Guzmán</span>
        </a>

        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <a className="nav-link" href="#inicio" onClick={closeNav}>
                <i className="bi bi-person-circle me-1" aria-hidden="true"></i>
                Sobre Mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos" onClick={closeNav}>
                <i className="bi bi-folder-check me-1" aria-hidden="true"></i>
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#noticias" onClick={closeNav}>
                <i className="bi bi-newspaper me-1" aria-hidden="true"></i>
                Noticias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto" onClick={closeNav}>
                <i className="bi bi-envelope-fill me-1" aria-hidden="true"></i>
                Contacto
              </a>
            </li>
            <li className="nav-item ms-lg-2">
              <a
                className="btn btn-outline-info btn-sm rounded-pill px-3 d-inline-flex align-items-center gap-1 mt-2 mt-lg-0"
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
