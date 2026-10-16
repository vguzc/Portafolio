import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="sticky-top pill-nav-wrapper py-3" aria-label="Navegación principal">
      <div className="container d-flex justify-content-center">
        <nav className="nav-pill-dock d-flex align-items-center" aria-label="Menú de navegación">
          <ul className="nav d-flex flex-row gap-1 gap-md-2 m-0 p-0">
            <li className="nav-item">
              <a className="nav-link pill-link" href="#inicio">
                Sobre Mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pill-link" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pill-link" href="#noticias">
                Noticias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pill-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
