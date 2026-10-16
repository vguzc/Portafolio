import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const DEFAULT_PROJECTS = [
  {
    id: 1,
    titulo: "Plataforma de E-Commerce Segura",
    descripcion: "Aplicación web completa de comercio electrónico con pasarela de pagos simulada, sanitización de entradas contra XSS e inyección SQL, y diseño responsivo.",
    imagen: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=80",
    tecnologias: ["React", "Bootstrap 5", "Node.js", "Express", "MongoDB"],
    enlaceDemo: "https://vguzc.github.io/ecommerce-demo",
    enlaceRepo: "https://github.com/Vguzc/ecommerce-seguro",
    destacado: true
  },
  {
    id: 2,
    titulo: "Auditor y Scanner de Vulnerabilidades Web",
    descripcion: "Herramienta automatizada para análisis de vulnerabilidades OWASP Top 10 en entornos locales, con generación de reportes y métricas de seguridad.",
    imagen: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    tecnologias: ["Python", "Flask", "OWASP ZAP", "Docker", "Bootstrap"],
    enlaceDemo: "https://vguzc.github.io/security-scanner",
    enlaceRepo: "https://github.com/Vguzc/vulnerability-auditor",
    destacado: true
  },
  {
    id: 3,
    titulo: "Dashboard de Finanzas Personales",
    descripcion: "Panel interactivo para el control presupuestario y visualización gráfica de ingresos y gastos con almacenamiento persistente.",
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    tecnologias: ["React", "Bootstrap 5", "Chart.js", "LocalStorage"],
    enlaceDemo: "https://vguzc.github.io/finance-dashboard",
    enlaceRepo: "https://github.com/Vguzc/dashboard-finanzas",
    destacado: false
  },
  {
    id: 4,
    titulo: "Portal con Autenticación OAuth 2.0 & 2FA",
    descripcion: "Sistema web con inicio de sesión federado, autenticación multifactor (MFA), roles y políticas de autorización seguras.",
    imagen: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    tecnologias: ["React", "Auth0", "Bootstrap", "REST API"],
    enlaceDemo: "https://vguzc.github.io/oauth-portal",
    enlaceRepo: "https://github.com/Vguzc/oauth-mfa-portal",
    destacado: true
  }
];

const Projects = ({ initialProjects = null, onFilterUsed }) => {
  const [projects, setProjects] = useState(initialProjects || []);
  const [filter, setFilter] = useState('todos');
  const [loading, setLoading] = useState(!initialProjects);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (initialProjects) {
      setProjects(initialProjects);
      setLoading(false);
      return;
    }

    const loadProjectsData = async () => {
      try {
        const response = await fetch('./data/proyectos.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON de proyectos');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setProjects(DEFAULT_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    loadProjectsData();
  }, [initialProjects]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    if (onFilterUsed) onFilterUsed(newFilter);
  };

  const slideLeft = () => {
    sliderRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({ left: 360, behavior: 'smooth' });
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'destacados') return project.destacado;
    return true;
  });

  return (
    <section id="proyectos" className="projects-slider-section py-5" aria-labelledby="projects-heading">
      <div className="container py-lg-4">
        {/* Encabezado y Controles del Slider estilo Gabriel Valdivia */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-4 pb-2 border-bottom border-secondary-subtle">
          <div>
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <span className="dot-mini-green"></span>
              <span className="small text-muted text-uppercase font-monospace">Portafolio de Trabajo</span>
            </div>
            <h2 id="projects-heading" className="display-6 fw-bold text-light mb-1">
              Proyectos Destacados
            </h2>
            <p className="text-secondary small mb-md-0">
              Desarrollos web construidos con React, diseño responsivo y arquitectura modular.
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
            {/* Filtro tipo píldora */}
            <div className="pill-filter-dock d-inline-flex p-1" role="group" aria-label="Filtro de proyectos">
              <button
                type="button"
                className={`btn btn-sm filter-pill-btn ${filter === 'todos' ? 'active' : ''}`}
                onClick={() => handleFilterChange('todos')}
              >
                Todos ({projects.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm filter-pill-btn ${filter === 'destacados' ? 'active' : ''}`}
                onClick={() => handleFilterChange('destacados')}
              >
                Solo Destacados
              </button>
            </div>

            {/* Flechas de navegación para el slider */}
            <div className="slider-nav-arrows d-none d-sm-flex gap-2">
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={slideLeft}
                aria-label="Desplazar a la izquierda"
                title="Ver anterior"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={slideRight}
                aria-label="Desplazar a la derecha"
                title="Ver siguiente"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Carrusel / Slider horizontal de tarjetas */}
        {loading ? (
          <div className="text-center py-5" data-testid="loading-indicator">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Cargando proyectos...</span>
            </div>
          </div>
        ) : (
          <div
            className="projects-horizontal-track d-flex gap-4 pb-3"
            id="projects-list"
            ref={sliderRef}
            tabIndex={0}
            role="region"
            aria-label="Carrusel de proyectos"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
