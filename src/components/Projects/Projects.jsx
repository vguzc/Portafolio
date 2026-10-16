import React, { useState, useEffect } from 'react';
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

  const filteredProjects = projects.filter((project) => {
    if (filter === 'destacados') return project.destacado;
    return true;
  });

  return (
    <section id="proyectos" className="projects-section py-5" aria-labelledby="projects-heading">
      <div className="container py-lg-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge crt-badge font-monospace text-uppercase px-3 py-2 rounded-pill fw-semibold mb-2">
              [ ARSENAL DE PROYECTOS ]
            </span>
            <h2 id="projects-heading" className="display-5 fw-bold text-light">
              Misiones & Desarrollos
            </h2>
            <p className="lead text-secondary">
              Aplicaciones creadas bajo estándares de seguridad OWASP, interfaces reactivas y arquitectura por componentes.
            </p>

            {/* Selector de filtro tipo switch tecnológico */}
            <div className="filter-group d-inline-flex p-1 mt-3" role="group" aria-label="Filtro de proyectos">
              <button
                type="button"
                className={`btn btn-sm filter-btn font-monospace ${filter === 'todos' ? 'active' : ''}`}
                onClick={() => handleFilterChange('todos')}
              >
                Todos ({projects.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm filter-btn font-monospace ${filter === 'destacados' ? 'active' : ''}`}
                onClick={() => handleFilterChange('destacados')}
              >
                Solo Destacados
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5" data-testid="loading-indicator">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Cargando proyectos...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4" id="projects-list">
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
