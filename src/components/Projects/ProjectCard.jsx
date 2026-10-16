import React from 'react';

const ProjectCard = ({
  id,
  titulo,
  descripcion,
  imagen,
  tecnologias = [],
  enlaceDemo,
  enlaceRepo,
  destacado = false
}) => {
  return (
    <article className="project-slide-item" data-testid={`project-card-${id}`}>
      <div className={`card h-100 minimal-project-card ${destacado ? 'featured-minimal-card' : ''}`}>
        {/* Mockup / Contenedor visual del proyecto */}
        <div className="card-mockup-frame position-relative overflow-hidden">
          <img
            src={imagen}
            className="card-img-top project-slide-img"
            alt={`Captura del proyecto ${titulo}`}
            loading="lazy"
          />
          {destacado && (
            <span className="badge featured-pill position-absolute top-0 end-0 m-3 shadow-sm">
              <span className="dot-mini-green me-1"></span> Destacado
            </span>
          )}
        </div>

        {/* Información y detalles del proyecto */}
        <div className="card-body d-flex flex-column p-4">
          <h3 className="card-title h5 fw-bold text-light mb-2">{titulo}</h3>
          <p className="card-text text-secondary mb-3 flex-grow-1 card-description">{descripcion}</p>

          <div className="mb-3 d-flex flex-wrap gap-1" aria-label="Tecnologías utilizadas">
            {tecnologias.map((tech, index) => (
              <span key={index} className="badge minimal-tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="card-footer-buttons d-flex gap-2 pt-3 border-top border-secondary-subtle">
            {enlaceRepo && (
              <a
                href={enlaceRepo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-slide-action btn-sm flex-fill d-flex align-items-center justify-content-center gap-1"
                aria-label={`Ver código fuente de ${titulo} en GitHub`}
              >
                <i className="bi bi-github" aria-hidden="true"></i>
                <span>Código</span>
              </a>
            )}
            {enlaceDemo && (
              <a
                href={enlaceDemo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-slide-demo btn-sm flex-fill d-flex align-items-center justify-content-center gap-1"
                aria-label={`Ver demostración en vivo de ${titulo}`}
              >
                <span>Demo</span>
                <i className="bi bi-arrow-up-right small" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
