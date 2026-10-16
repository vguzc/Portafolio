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
    <article className="card minimal-news-card h-100 shadow-sm border-0" data-testid={`news-card-${id}`}>
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge minimal-category-badge">
            {categoria}
          </span>
          <span className="text-muted small">
            {leidoMinutos} min lectura
          </span>
        </div>

        <h3 className="card-title h5 fw-bold text-light mb-2 news-headline">
          {titulo}
        </h3>

        <div className="text-muted small mb-3 d-flex align-items-center gap-2">
          <span>
            <i className="bi bi-calendar3 me-1"></i>
            {fecha}
          </span>
          <span>•</span>
          <span>{autor}</span>
        </div>

        <p className="card-text text-secondary mb-3 flex-grow-1 small">
          {resumen}
        </p>

        <div className="pt-2 border-top border-secondary-subtle">
          <a
            href={enlace}
            target="_blank"
            rel="noreferrer"
            className="btn btn-link text-decoration-none p-0 fw-semibold text-secondary d-inline-flex align-items-center gap-1 news-read-link"
            aria-label={`Leer artículo completo sobre ${titulo}`}
          >
            <span>Leer artículo</span>
            <i className="bi bi-arrow-up-right small" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
