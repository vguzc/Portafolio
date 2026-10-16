import React from 'react';

const NewsCard = ({
  id,
  titulo,
  fecha,
  resumen,
  categoria,
  autor = "Vicente Guzmán",
  leidoMinutos = 4,
  enlace = "#"
}) => {
  return (
    <article className="card news-bitacora-card h-100 shadow-sm border-0" data-testid={`news-card-${id}`}>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge category-tag font-monospace">
            {categoria}
          </span>
          <span className="text-muted small font-monospace">
            <i className="bi bi-clock me-1 text-success" aria-hidden="true"></i>
            {leidoMinutos} min
          </span>
        </div>

        <h3 className="card-title h5 fw-bold text-light mb-2 news-headline">
          {titulo}
        </h3>

        <div className="text-muted small mb-3 d-flex align-items-center gap-2 font-monospace">
          <span>
            <i className="bi bi-calendar3 me-1" aria-hidden="true"></i>
            {fecha}
          </span>
          <span>•</span>
          <span>
            <i className="bi bi-person me-1" aria-hidden="true"></i>
            {autor}
          </span>
        </div>

        <p className="card-text text-secondary mb-3 flex-grow-1">
          {resumen}
        </p>

        <div className="pt-2 border-top border-secondary-subtle">
          <a
            href={enlace}
            target="_blank"
            rel="noreferrer"
            className="btn btn-link text-decoration-none p-0 fw-semibold text-success font-monospace d-inline-flex align-items-center gap-1"
            aria-label={`Leer artículo completo sobre ${titulo}`}
          >
            <span>[ Acceder a bitácora ]</span>
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
