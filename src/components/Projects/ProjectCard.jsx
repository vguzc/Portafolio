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
      <div className={`card h-100 project-card shadow-sm border-0 ${destacado ? 'featured-card' : ''}`}>
        <div className="card-img-wrapper position-relative overflow-hidden">
          <img
            src={imagen}
            className="card-img-top project-image"
            alt={`Captura del proyecto ${titulo}`}
            loading="lazy"
          />
          {destacado && (
            <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3 shadow-sm fw-bold">
              <i className="bi bi-star-fill me-1"></i> Destacado
            </span>
          )}
        </div>

        <div className="card-body d-flex flex-column p-4">
          <h3 className="card-title h5 fw-bold text-dark mb-2">{titulo}</h3>
          <p className="card-text text-secondary mb-3 flex-grow-1">{descripcion}</p>

          <div className="mb-3 d-flex flex-wrap gap-1" aria-label="Tecnologías utilizadas">
            {tecnologias.map((tech, index) => (
              <span key={index} className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1">
                {tech}
              </span>
            ))}
          </div>

          <div className="card-footer-buttons d-flex gap-2 pt-2 border-top">
            {enlaceRepo && (
              <a
                href={enlaceRepo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-sm flex-fill d-flex align-items-center justify-content-center gap-1"
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
                className="btn btn-primary btn-sm flex-fill d-flex align-items-center justify-content-center gap-1"
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
