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
    <article className="col-12 col-md-6 col-lg-6 mb-4" data-testid={`project-card-${id}`}>
      <div className={`card h-100 project-mission-card shadow-sm border-0 ${destacado ? 'featured-mission' : ''}`}>
        <div className="card-img-wrapper position-relative overflow-hidden">
          <img
            src={imagen}
            className="card-img-top project-image"
            alt={`Captura del proyecto ${titulo}`}
            loading="lazy"
          />
          <div className="mission-status-bar d-flex justify-content-between align-items-center position-absolute top-0 start-0 end-0 p-2">
            <span className="font-monospace small badge bg-dark text-light border border-secondary-subtle">
              ID: PRJ-0{id}
            </span>
            {destacado && (
              <span className="badge bg-warning text-dark font-monospace fw-bold shadow-sm">
                <i className="bi bi-star-fill me-1"></i> Destacado
              </span>
            )}
          </div>
        </div>

        <div className="card-body d-flex flex-column p-4">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="mission-indicator"></span>
            <span className="text-muted font-monospace small text-uppercase">MISIÓN DE DESARROLLO</span>
          </div>

          <h3 className="card-title h5 fw-bold text-light mb-2">{titulo}</h3>
          <p className="card-text text-secondary mb-3 flex-grow-1">{descripcion}</p>

          <div className="mb-3 d-flex flex-wrap gap-1" aria-label="Tecnologías utilizadas">
            {tecnologias.map((tech, index) => (
              <span key={index} className="badge tech-badge font-monospace">
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
                className="btn btn-mission-action btn-sm flex-fill d-flex align-items-center justify-content-center gap-1 font-monospace"
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
                className="btn btn-mission-primary btn-sm flex-fill d-flex align-items-center justify-content-center gap-1 font-monospace"
                aria-label={`Ver demostración en vivo de ${titulo}`}
              >
                <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
